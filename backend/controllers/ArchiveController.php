<?php

namespace App\Controllers;

use App\Services\ArchiveService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Archive & Audit Log REST API Controller for CampusPulse
 */
class ArchiveController extends BaseController
{
    /**
     * GET /api/v1/archives
     * List Archived Events Log
     */
    public function archives(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = ArchiveService::getArchivedEvents();
            Response::success($list, "Archived events history retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /archive/events
     */
    public function archivedEvents(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $db = \App\Models\Event::db();
            $stmt = $db->query("SELECT e.*, d.name AS department_name FROM events e LEFT JOIN departments d ON e.department_id = d.id WHERE e.status = 'Archived' ORDER BY e.archived_at DESC");
            $list = $stmt->fetchAll();
            Response::success(['events' => $list, 'total' => count($list)], "Archived events retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /archive/announcements
     */
    public function archivedAnnouncements(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $db = \App\Models\Archive::db();
            $stmt = $db->query("SELECT a.*, u.name AS creator_name FROM announcements a LEFT JOIN users u ON a.created_by = u.id WHERE a.status IN ('Expired', 'Archived') ORDER BY a.expired_at DESC, a.created_at DESC");
            $list = $stmt->fetchAll();
            Response::success(['announcements' => $list, 'total' => count($list)], "Archived/Expired announcements retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /archive/events/{id}/restore
     */
    public function restoreEvent(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $db = \App\Models\Event::db();
            $stmt = $db->prepare("UPDATE events SET status = 'Published', archived_at = NULL WHERE id = :id");
            $stmt->execute(['id' => $id]);

            // Audit Log
            $auditStmt = $db->prepare("INSERT INTO audit_logs (user_id, action, module, created_at) VALUES (:user_id, :action, 'Archive', NOW())");
            $auditStmt->execute([
                'user_id' => $currentUser['user_id'],
                'action' => "Restored Event ID: {$id}"
            ]);

            Response::success(null, "Event successfully restored to Published status.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /archive/announcements/{id}/restore
     */
    public function restoreAnnouncement(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $db = \App\Models\Archive::db();
            $stmt = $db->prepare("UPDATE announcements SET status = 'Active', expired_at = NULL WHERE id = :id");
            $stmt->execute(['id' => $id]);

            // Audit Log
            $auditStmt = $db->prepare("INSERT INTO audit_logs (user_id, action, module, created_at) VALUES (:user_id, :action, 'Archive', NOW())");
            $auditStmt->execute([
                'user_id' => $currentUser['user_id'],
                'action' => "Restored Announcement ID: {$id}"
            ]);

            Response::success(null, "Announcement successfully restored to Active status.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /archive/process
     * Trigger auto-archive execution
     */
    public function processAutoArchive(): void
    {
        try {
            $result = ArchiveService::processAutoArchive();
            Response::success($result, "Auto archive execution completed successfully.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 500);
        }
    }

    /**
     * GET /api/v1/audit-logs
     * List System Security Audit Logs (Admin Only)
     */
    public function auditLogs(): void
    {
        $currentUser = JwtMiddleware::handle();
        if ($currentUser['role'] !== 'Admin') {
            Response::forbidden("Forbidden: Only administrators can inspect system audit logs.");
        }

        try {
            $list = ArchiveService::getAuditLogs($_GET);
            Response::success($list, "System audit logs retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
