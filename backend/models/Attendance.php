<?php

namespace App\Models;

use PDO;

/**
 * Attendance Database Model for CampusPulse API
 */
class Attendance extends BaseModel
{
    protected static string $table = 'attendance';
    protected static string $primaryKey = 'id';

    /**
     * Check if Student is Checked-in for Event
     */
    public static function findExistingCheckIn(int $eventId, int $studentId): ?array
    {
        $sql = "SELECT * FROM " . static::$table . " 
                WHERE event_id = :event_id AND student_id = :student_id AND attendance_status != 'Absent' 
                LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId, 'student_id' => $studentId]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Record Attendance Check-In Entry
     */
    public static function checkIn(int $registrationId, int $eventId, int $studentId, int $checkedBy, string $status = 'Present'): ?array
    {
        $sql = "INSERT INTO " . static::$table . " 
                (registration_id, event_id, student_id, checked_by, check_in_time, attendance_status, created_at) 
                VALUES (:registration_id, :event_id, :student_id, :checked_by, NOW(), :status, NOW())";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'registration_id' => $registrationId,
            'event_id'        => $eventId,
            'student_id'      => $studentId,
            'checked_by'      => $checkedBy,
            'status'          => $status,
        ]);

        if ($success) {
            $id = (int)static::db()->lastInsertId();
            return static::find($id);
        }

        return null;
    }

    /**
     * Get Attendance Log for Event
     */
    public static function getEventAttendanceLog(int $eventId): array
    {
        $sql = "SELECT a.*, 
                       u.name AS student_name, u.email AS student_email, u.phone AS student_phone,
                       d.name AS department_name, d.code AS department_code,
                       ob.name AS checked_by_name
                FROM " . static::$table . " a
                LEFT JOIN users u ON a.student_id = u.id
                LEFT JOIN departments d ON u.department_id = d.id
                LEFT JOIN users ob ON a.checked_by = ob.id
                WHERE a.event_id = :event_id
                ORDER BY a.check_in_time DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId]);
        return $stmt->fetchAll();
    }
}
