<?php

namespace App\Models;

use PDO;

/**
 * Event Database Model for CampusPulse API
 */
class Event extends BaseModel
{
    protected static string $table = 'events';
    protected static string $primaryKey = 'id';

    /**
     * Get Detailed Event Record with Joins
     */
    public static function getEventWithDetails(int $id): ?array
    {
        $sql = "SELECT e.*, 
                       d.name AS department_name, d.code AS department_code,
                       c.club_name, c.description AS club_description,
                       u.name AS organizer_name, u.email AS organizer_email, u.photo AS organizer_photo
                FROM " . static::$table . " e
                LEFT JOIN departments d ON e.department_id = d.id
                LEFT JOIN clubs c ON e.club_id = c.id
                LEFT JOIN users u ON e.organizer_id = u.id
                WHERE e.id = :id LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['id' => $id]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Get Paginated Events List with Search, Multi-Faceted Filters & Role Visibility
     */
    public static function getPaginatedEvents(array $filters = [], int $page = 1, int $limit = 20, string $role = 'Student', int $currentUserId = 0): array
    {
        $where = [];
        $params = [];

        // Role-based visibility scoping
        if ($role === 'Student') {
            $where[] = "e.status = 'Published'";
        } elseif ($role === 'Organizer') {
            $where[] = "(e.status = 'Published' OR e.organizer_id = :current_user_id)";
            $params['current_user_id'] = $currentUserId;
        }
        // Admin sees all statuses unless filtered explicitly

        // Search Filter (Title, Dept, Category, Organizer, Venue)
        if (!empty($filters['search'])) {
            $where[] = "(e.title LIKE :search OR e.venue LIKE :search OR d.name LIKE :search OR u.name LIKE :search)";
            $params['search'] = '%' . trim($filters['search']) . '%';
        }

        if (!empty($filters['department_id']) && $filters['department_id'] !== 'All') {
            $where[] = "e.department_id = :department_id";
            $params['department_id'] = (int)$filters['department_id'];
        }

        if (!empty($filters['category']) && $filters['category'] !== 'All') {
            $where[] = "e.category = :category";
            $params['category'] = $filters['category'];
        }

        if (!empty($filters['status']) && $filters['status'] !== 'All') {
            $where[] = "e.status = :status";
            $params['status'] = $filters['status'];
        }

        if (!empty($filters['organizer_id']) && $filters['organizer_id'] !== 'All') {
            $where[] = "e.organizer_id = :organizer_id";
            $params['organizer_id'] = (int)$filters['organizer_id'];
        }

        if (!empty($filters['event_date'])) {
            $where[] = "e.event_date = :event_date";
            $params['event_date'] = $filters['event_date'];
        }

        $whereSql = !empty($where) ? "WHERE " . implode(" AND ", $where) : "";

        // Total Count Query
        $countSql = "SELECT COUNT(*) 
                     FROM " . static::$table . " e
                     LEFT JOIN departments d ON e.department_id = d.id
                     LEFT JOIN users u ON e.organizer_id = u.id
                     {$whereSql}";

        $stmtCount = static::db()->prepare($countSql);
        $stmtCount->execute($params);
        $totalRecords = (int)$stmtCount->fetchColumn();

        // Data Query
        $offset = max(0, ($page - 1) * $limit);
        $sql = "SELECT e.*, 
                       d.name AS department_name, d.code AS department_code,
                       c.club_name,
                       u.name AS organizer_name, u.email AS organizer_email, u.photo AS organizer_photo
                FROM " . static::$table . " e
                LEFT JOIN departments d ON e.department_id = d.id
                LEFT JOIN clubs c ON e.club_id = c.id
                LEFT JOIN users u ON e.organizer_id = u.id
                {$whereSql}
                ORDER BY e.event_date DESC, e.id DESC
                LIMIT {$limit} OFFSET {$offset}";

        $stmt = static::db()->prepare($sql);
        $stmt->execute($params);
        $events = $stmt->fetchAll();

        return [
            'events'       => $events,
            'total'        => $totalRecords,
            'page'         => $page,
            'limit'        => $limit,
            'total_pages'  => (int)ceil($totalRecords / $limit),
        ];
    }

    /**
     * Check for Duplicate Event Title on Same Date for Same Organizer
     */
    public static function checkDuplicate(string $title, string $eventDate, int $organizerId, ?int $excludeId = null): bool
    {
        $sql = "SELECT COUNT(*) FROM " . static::$table . " 
                WHERE LOWER(title) = :title AND event_date = :event_date AND organizer_id = :organizer_id";

        $params = [
            'title'        => strtolower(trim($title)),
            'event_date'   => $eventDate,
            'organizer_id' => $organizerId,
        ];

        if ($excludeId !== null) {
            $sql .= " AND id != :exclude_id";
            $params['exclude_id'] = $excludeId;
        }

        $stmt = static::db()->prepare($sql);
        $stmt->execute($params);
        return (int)$stmt->fetchColumn() > 0;
    }

    /**
     * Create New Event Document
     */
    public static function createEvent(array $data): ?array
    {
        $uuid = 'ev-' . bin2hex(random_bytes(6));

        $sql = "INSERT INTO " . static::$table . " 
                (uuid, title, description, department_id, club_id, organizer_id, venue, banner, category, capacity, 
                 registration_deadline, event_date, start_time, end_time, status, created_at, updated_at)
                VALUES 
                (:uuid, :title, :description, :department_id, :club_id, :organizer_id, :venue, :banner, :category, :capacity, 
                 :registration_deadline, :event_date, :start_time, :end_time, :status, NOW(), NOW())";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'uuid'                  => $uuid,
            'title'                 => trim($data['title']),
            'description'           => trim($data['description']),
            'department_id'         => (int)($data['department_id'] ?? 1),
            'club_id'               => !empty($data['club_id']) ? (int)$data['club_id'] : null,
            'organizer_id'          => (int)$data['organizer_id'],
            'venue'                 => trim($data['venue']),
            'banner'                => $data['banner'] ?? '/uploads/events/default_banner.png',
            'category'              => $data['category'] ?? 'Technical',
            'capacity'              => (int)($data['capacity'] ?? 100),
            'registration_deadline' => $data['registration_deadline'],
            'event_date'            => $data['event_date'],
            'start_time'            => $data['start_time'],
            'end_time'              => $data['end_time'],
            'status'                => $data['status'] ?? 'Draft',
        ]);

        if ($success) {
            $id = (int)static::db()->lastInsertId();
            return static::getEventWithDetails($id);
        }

        return null;
    }

    /**
     * Update Event Status
     */
    public static function updateStatus(int $eventId, string $status): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " SET status = :status, updated_at = NOW() WHERE id = :id");
        return $stmt->execute(['id' => $eventId, 'status' => $status]);
    }

    /**
     * Approve Event (Set Status to Published, Record approved_by and approved_at)
     */
    public static function approveEvent(int $eventId, int $adminUserId): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " 
            SET status = 'Published', approved_by = :approved_by, approved_at = NOW(), rejection_reason = NULL, updated_at = NOW() 
            WHERE id = :id");
        return $stmt->execute(['id' => $eventId, 'approved_by' => $adminUserId]);
    }

    /**
     * Reject Event (Set Status to Rejected, Record rejection_reason)
     */
    public static function rejectEvent(int $eventId, int $adminUserId, string $reason): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " 
            SET status = 'Rejected', approved_by = :approved_by, approved_at = NOW(), rejection_reason = :reason, updated_at = NOW() 
            WHERE id = :id");
        return $stmt->execute(['id' => $eventId, 'approved_by' => $adminUserId, 'reason' => $reason]);
    }

    /**
     * Get Detailed Event Record by UUID with Joins
     */
    public static function getEventByUuid(string $uuid): ?array
    {
        $sql = "SELECT e.*, 
                       d.name AS department_name, d.code AS department_code,
                       c.club_name, c.description AS club_description,
                       u.name AS organizer_name, u.email AS organizer_email, u.photo AS organizer_photo
                FROM " . static::$table . " e
                LEFT JOIN departments d ON e.department_id = d.id
                LEFT JOIN clubs c ON e.club_id = c.id
                LEFT JOIN users u ON e.organizer_id = u.id
                WHERE e.uuid = :uuid LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['uuid' => $uuid]);
        $record = $stmt->fetch();
        return $record ?: null;
    }
}
