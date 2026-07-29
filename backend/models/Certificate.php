<?php

namespace App\Models;

use PDO;

/**
 * Certificate Database Model for CampusPulse API
 */
class Certificate extends BaseModel
{
    protected static string $table = 'certificates';
    protected static string $primaryKey = 'id';

    /**
     * Find Existing Certificate for Student and Event
     */
    public static function findStudentCertificate(int $eventId, int $studentId): ?array
    {
        $sql = "SELECT * FROM " . static::$table . " 
                WHERE event_id = :event_id AND student_id = :student_id LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId, 'student_id' => $studentId]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Create Certificate Record with Verification Token
     */
    public static function issueCertificate(int $eventId, int $studentId, string $certNumber, string $certUrl, ?int $registrationId = null, ?int $issuedBy = null, ?string $token = null): ?array
    {
        $verificationToken = $token ?? ('VERIFY-CP-' . strtoupper(bin2hex(random_bytes(8))));

        $sql = "INSERT INTO " . static::$table . " 
                (event_id, student_id, registration_id, issued_by, issued_date, verification_token, certificate_number, certificate_url, generated_at, status) 
                VALUES (:event_id, :student_id, :registration_id, :issued_by, NOW(), :verification_token, :certificate_number, :certificate_url, NOW(), 'Issued')";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'event_id'           => $eventId,
            'student_id'         => $studentId,
            'registration_id'    => $registrationId,
            'issued_by'          => $issuedBy,
            'verification_token' => $verificationToken,
            'certificate_number' => $certNumber,
            'certificate_url'    => $certUrl,
        ]);

        if ($success) {
            $id = (int)static::db()->lastInsertId();
            return static::getCertificateWithDetails($id);
        }

        return null;
    }

    /**
     * Find Certificate by Verification Token
     */
    public static function findByToken(string $token): ?array
    {
        $sql = "SELECT c.*, 
                       e.title AS event_title, e.event_date, e.banner,
                       u.name AS student_name, u.email AS student_email,
                       d.name AS department_name,
                       org.name AS organizer_name
                FROM " . static::$table . " c
                LEFT JOIN events e ON c.event_id = e.id
                LEFT JOIN users u ON c.student_id = u.id
                LEFT JOIN departments d ON u.department_id = d.id
                LEFT JOIN users org ON e.organizer_id = org.id
                WHERE c.verification_token = :token LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['token' => trim($token)]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Get Certificate Record with Joined Student & Event Metadata
     */
    public static function getCertificateWithDetails(int $id): ?array
    {
        $sql = "SELECT c.*, 
                       e.title AS event_title, e.event_date, e.banner,
                       cl.club_name,
                       u.name AS student_name, u.email AS student_email, u.phone AS student_phone,
                       d.name AS department_name
                FROM " . static::$table . " c
                LEFT JOIN events e ON c.event_id = e.id
                LEFT JOIN clubs cl ON e.club_id = cl.id
                LEFT JOIN users u ON c.student_id = u.id
                LEFT JOIN departments d ON u.department_id = d.id
                WHERE c.id = :id LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['id' => $id]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * List All Certificates for Student
     */
    public static function getStudentCertificates(int $studentId): array
    {
        $sql = "SELECT c.*, 
                       e.title AS event_title, e.event_date, e.banner,
                       cl.club_name
                FROM " . static::$table . " c
                LEFT JOIN events e ON c.event_id = e.id
                LEFT JOIN clubs cl ON e.club_id = cl.id
                WHERE c.student_id = :student_id
                ORDER BY c.generated_at DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['student_id' => $studentId]);
        return $stmt->fetchAll();
    }
}
