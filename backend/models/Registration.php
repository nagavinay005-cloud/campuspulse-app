<?php

namespace App\Models;

use PDO;

/**
 * Registration Database Model for CampusPulse API
 */
class Registration extends BaseModel
{
    protected static string $table = 'registrations';
    protected static string $primaryKey = 'id';

    /**
     * Get Detailed Registration Record with Joins
     */
    public static function getRegistrationWithDetails(int $id): ?array
    {
        $sql = "SELECT r.*, 
                       e.title AS event_title, e.event_date, e.start_time, e.end_time, e.venue, e.banner, e.status AS event_status,
                       u.name AS student_name, u.email AS student_email, u.phone AS student_phone, u.year AS student_year,
                       d.name AS department_name, d.code AS department_code
                FROM " . static::$table . " r
                LEFT JOIN events e ON r.event_id = e.id
                LEFT JOIN users u ON r.student_id = u.id
                LEFT JOIN departments d ON u.department_id = d.id
                WHERE r.id = :id LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['id' => $id]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Find Existing Registration for Student and Event
     */
    public static function findActiveRegistration(int $eventId, int $studentId): ?array
    {
        $sql = "SELECT * FROM " . static::$table . " 
                WHERE event_id = :event_id AND student_id = :student_id AND status != 'Cancelled' 
                LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId, 'student_id' => $studentId]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Get Total Active Registration Count for Event
     */
    public static function getActiveCount(int $eventId): int
    {
        $sql = "SELECT COUNT(*) FROM " . static::$table . " 
                WHERE event_id = :event_id AND status IN ('Confirmed', 'Approved', 'Checked In', 'Completed')";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId]);
        return (int)$stmt->fetchColumn();
    }

    /**
     * Create New Registration Record with Unique QR Code
     */
    public static function createRegistration(int $eventId, int $studentId, string $status = 'Confirmed'): ?array
    {
        $regNumber = 'REG-' . date('Y') . '-' . strtoupper(bin2hex(random_bytes(4)));
        $qrCode = sprintf('QR-EV-%d-STD-%d-%s', $eventId, $studentId, strtoupper(bin2hex(random_bytes(6))));

        $sql = "INSERT INTO " . static::$table . " 
                (event_id, student_id, registration_date, status, qr_code, checked_in, created_at) 
                VALUES (:event_id, :student_id, NOW(), :status, :qr_code, 0, NOW())";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'event_id'   => $eventId,
            'student_id' => $studentId,
            'status'     => $status,
            'qr_code'    => $qrCode,
        ]);

        if ($success) {
            $id = (int)static::db()->lastInsertId();
            return static::getRegistrationWithDetails($id);
        }

        return null;
    }

    /**
     * Cancel Registration & Timestamp Cancellation
     */
    public static function cancelRegistration(int $eventId, int $studentId): bool
    {
        $sql = "UPDATE " . static::$table . " 
                SET status = 'Cancelled', updated_at = NOW() 
                WHERE event_id = :event_id AND student_id = :student_id AND status != 'Cancelled'";

        $stmt = static::db()->prepare($sql);
        return $stmt->execute(['event_id' => $eventId, 'student_id' => $studentId]);
    }

    /**
     * Update Registration Status
     */
    public static function updateStatus(int $registrationId, string $status, ?int $approvedBy = null): bool
    {
        $sql = "UPDATE " . static::$table . " 
                SET status = :status, checked_in = " . ($status === 'Checked In' ? 1 : 0) . " 
                WHERE id = :id";

        $stmt = static::db()->prepare($sql);
        return $stmt->execute([
            'id'     => $registrationId,
            'status' => $status,
        ]);
    }

    /**
     * Get All Registrations for Student
     */
    public static function getStudentRegistrations(int $studentId): array
    {
        $sql = "SELECT r.*, 
                       e.title AS event_title, e.event_date, e.start_time, e.end_time, e.venue, e.banner, e.status AS event_status,
                       d.name AS department_name
                FROM " . static::$table . " r
                LEFT JOIN events e ON r.event_id = e.id
                LEFT JOIN departments d ON e.department_id = d.id
                WHERE r.student_id = :student_id
                ORDER BY r.id DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['student_id' => $studentId]);
        return $stmt->fetchAll();
    }

    /**
     * Get All Registrations for Event
     */
    public static function getEventRegistrations(int $eventId): array
    {
        $sql = "SELECT r.*, 
                       u.name AS student_name, u.email AS student_email, u.phone AS student_phone, u.year AS student_year,
                       d.name AS department_name, d.code AS department_code
                FROM " . static::$table . " r
                LEFT JOIN users u ON r.student_id = u.id
                LEFT JOIN departments d ON u.department_id = d.id
                WHERE r.event_id = :event_id
                ORDER BY r.id DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId]);
        return $stmt->fetchAll();
    }

    /**
     * Get Paginated Registrations List (Admin / Organizer)
     */
    public static function getPaginatedRegistrations(array $filters = [], int $page = 1, int $limit = 20, ?int $organizerId = null): array
    {
        $where = [];
        $params = [];

        if ($organizerId !== null) {
            $where[] = "e.organizer_id = :organizer_id";
            $params['organizer_id'] = $organizerId;
        }

        if (!empty($filters['search'])) {
            $where[] = "(u.name LIKE :search OR u.email LIKE :search OR e.title LIKE :search OR r.qr_code LIKE :search)";
            $params['search'] = '%' . trim($filters['search']) . '%';
        }

        if (!empty($filters['status']) && $filters['status'] !== 'All') {
            $where[] = "r.status = :status";
            $params['status'] = $filters['status'];
        }

        if (!empty($filters['event_id']) && $filters['event_id'] !== 'All') {
            $where[] = "r.event_id = :event_id";
            $params['event_id'] = (int)$filters['event_id'];
        }

        $whereSql = !empty($where) ? "WHERE " . implode(" AND ", $where) : "";

        // Total Count
        $countSql = "SELECT COUNT(*) 
                     FROM " . static::$table . " r
                     LEFT JOIN events e ON r.event_id = e.id
                     LEFT JOIN users u ON r.student_id = u.id
                     {$whereSql}";

        $stmtCount = static::db()->prepare($countSql);
        $stmtCount->execute($params);
        $totalRecords = (int)$stmtCount->fetchColumn();

        // Data Query
        $offset = max(0, ($page - 1) * $limit);
        $sql = "SELECT r.*, 
                       e.title AS event_title, e.event_date, e.venue, e.organizer_id,
                       u.name AS student_name, u.email AS student_email, u.phone AS student_phone, u.year AS student_year,
                       d.name AS department_name
                FROM " . static::$table . " r
                LEFT JOIN events e ON r.event_id = e.id
                LEFT JOIN users u ON r.student_id = u.id
                LEFT JOIN departments d ON u.department_id = d.id
                {$whereSql}
                ORDER BY r.id DESC
                LIMIT {$limit} OFFSET {$offset}";

        $stmt = static::db()->prepare($sql);
        $stmt->execute($params);
        $registrations = $stmt->fetchAll();

        return [
            'registrations' => $registrations,
            'total'         => $totalRecords,
            'page'          => $page,
            'limit'         => $limit,
            'total_pages'   => (int)ceil($totalRecords / $limit),
        ];
    }
}
