<?php

namespace App\Services;

use App\Models\Archive;
use App\Models\AuditLog;

/**
 * Archive & Security Audit Log Service Layer for CampusPulse API
 */
class ArchiveService extends BaseService
{
    /**
     * List Archived Events History
     */
    public static function getArchivedEvents(): array
    {
        return Archive::getArchivedEvents();
    }

    /**
     * Query System Audit Logs with Filters & Search
     */
    public static function getAuditLogs(array $queryParams): array
    {
        $limit = isset($queryParams['limit']) ? (int)$queryParams['limit'] : 50;
        $search = $queryParams['search'] ?? null;
        $module = $queryParams['module'] ?? null;

        $where = [];
        $params = [];

        if ($search) {
            $where[] = "(a.action LIKE :search OR u.name LIKE :search OR a.module LIKE :search)";
            $params['search'] = '%' . trim($search) . '%';
        }

        if ($module && $module !== 'All') {
            $where[] = "a.module = :module";
            $params['module'] = $module;
        }

        $whereSql = !empty($where) ? "WHERE " . implode(" AND ", $where) : "";

        $sql = "SELECT a.*, u.name AS user_name, u.email AS user_email, u.role AS user_role
                FROM audit_logs a
                LEFT JOIN users u ON a.user_id = u.id
                {$whereSql}
                ORDER BY a.created_at DESC
                LIMIT {$limit}";

        $stmt = AuditLog::db()->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }

    /**
     * Process Automatic Archiving of Completed Events & Announcement Expiry
     */
    public static function processAutoArchive(): array
    {
        $db = Archive::db();
        $archivedEventsCount = 0;
        $expiredAnnouncementsCount = 0;

        // 1. AUTO ARCHIVE EVENTS
        // Find events where event_date and end_time have passed, and status is Published or Completed
        $sqlEvents = "SELECT * FROM events 
                      WHERE (status IN ('Published', 'Completed'))
                      AND STR_TO_DATE(CONCAT(event_date, ' ', end_time), '%Y-%m-%d %H:%i:%s') <= NOW()";
        $stmtEvents = $db->query($sqlEvents);
        $expiredEvents = $stmtEvents->fetchAll();

        foreach ($expiredEvents as $ev) {
            $eventId = $ev['id'];
            $now = date('Y-m-d H:i:s');

            // Update event status to Archived and set archived_at
            $updateStmt = $db->prepare("UPDATE events SET status = 'Archived', archived_at = :now, updated_at = NOW() WHERE id = :id");
            $updateStmt->execute(['now' => $now, 'id' => $eventId]);

            // Create entry in archives table if not present
            $checkArch = $db->prepare("SELECT id FROM archives WHERE event_id = :id LIMIT 1");
            $checkArch->execute(['id' => $eventId]);
            if (!$checkArch->fetch()) {
                $insArch = $db->prepare("INSERT INTO archives (event_id, archived_by, archive_reason, archived_at) VALUES (:event_id, :archived_by, :reason, :archived_at)");
                $insArch->execute([
                    'event_id' => $eventId,
                    'archived_by' => $ev['organizer_id'],
                    'reason' => 'Auto-Archived: Event end time elapsed',
                    'archived_at' => $now
                ]);
            }

            // Create Notification for Organizer
            $notifStmt = $db->prepare("INSERT INTO notifications (user_id, title, message, type, sent_at) VALUES (:user_id, :title, :message, 'EventArchived', NOW())");
            $notifStmt->execute([
                'user_id' => $ev['organizer_id'],
                'title' => 'Event Automatically Archived',
                'message' => "Your event '{$ev['title']}' has concluded and was automatically moved to the archive."
            ]);

            // Create Audit Log
            $auditStmt = $db->prepare("INSERT INTO audit_logs (user_id, action, module, created_at) VALUES (:user_id, :action, 'Archive', NOW())");
            $auditStmt->execute([
                'user_id' => $ev['organizer_id'],
                'action' => "Auto Archived Event: {$ev['title']} (ID: {$eventId})"
            ]);

            $archivedEventsCount++;
        }

        // 2. AUTO EXPIRE ANNOUNCEMENTS
        $sqlAnn = "SELECT * FROM announcements 
                   WHERE status = 'Active' 
                   AND expiry_date <= NOW()";
        $stmtAnn = $db->query($sqlAnn);
        $expiredAnnouncements = $stmtAnn->fetchAll();

        foreach ($expiredAnnouncements as $ann) {
            $annId = $ann['id'];
            $now = date('Y-m-d H:i:s');

            $updateAnn = $db->prepare("UPDATE announcements SET status = 'Expired', expired_at = :now WHERE id = :id");
            $updateAnn->execute(['now' => $now, 'id' => $annId]);

            // Create Notification for Creator
            $notifStmt = $db->prepare("INSERT INTO notifications (user_id, title, message, type, sent_at) VALUES (:user_id, :title, :message, 'AnnouncementExpired', NOW())");
            $notifStmt->execute([
                'user_id' => $ann['created_by'],
                'title' => 'Announcement Expired',
                'message' => "Your announcement '{$ann['title']}' reached its expiry date and was moved to the archive."
            ]);

            // Create Audit Log
            $auditStmt = $db->prepare("INSERT INTO audit_logs (user_id, action, module, created_at) VALUES (:user_id, :action, 'Archive', NOW())");
            $auditStmt->execute([
                'user_id' => $ann['created_by'],
                'action' => "Expired Announcement: {$ann['title']} (ID: {$annId})"
            ]);

            $expiredAnnouncementsCount++;
        }

        return [
            'archived_events_count' => $archivedEventsCount,
            'expired_announcements_count' => $expiredAnnouncementsCount,
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
}
