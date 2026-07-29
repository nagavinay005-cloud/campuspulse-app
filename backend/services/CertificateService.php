<?php

namespace App\Services;

use App\Models\Certificate;
use App\Models\Attendance;
use App\Models\Event;
use App\Models\Notification;
use App\Models\AuditLog;
use App\Helpers\PDF;
use Exception;

/**
 * Certificate Generation & Verification Service Layer
 */
class CertificateService extends BaseService
{
    /**
     * Batch Issue Certificates for Verified Attended Students
     */
    public static function batchGenerateCertificates(int $eventId, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        if ($role === 'Organizer' && (int)$event['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You can only issue certificates for your own events.", 403);
        }

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot issue certificates.", 403);
        }

        // Fetch Present Attendees
        $attendees = Attendance::getEventAttendanceLog($eventId);
        if (empty($attendees)) {
            throw new Exception("No verified check-ins found for this event to issue certificates.", 422);
        }

        $issuedCount = 0;
        $issuedList = [];

        foreach ($attendees as $att) {
            $studentId = (int)$att['student_id'];
            $existing = Certificate::findStudentCertificate($eventId, $studentId);

            if (!$existing) {
                $certNum = sprintf('CERT-%s-%05d', strtoupper(substr($event['title'], 0, 4)), rand(10000, 99999));
                $certUrl = "/certificates/{$certNum}.pdf";

                $cert = Certificate::issueCertificate($eventId, $studentId, $certNum, $certUrl);
                if ($cert) {
                    $issuedCount++;
                    $issuedList[] = $cert;

                    // Notify Student
                    Notification::notify(
                        $studentId,
                        "Participation Certificate Ready! 🏆",
                        "Your official certificate for '{$event['title']}' is ready for download in My Certificates.",
                        "Certificate"
                    );
                }
            }
        }

        // Audit Log Recording
        AuditLog::log($userId, "BATCH_ISSUED_CERTIFICATES: Generated {$issuedCount} certificates for Event #{$eventId} ('{$event['title']}')", "Certificate");

        return [
            'event_id'      => $eventId,
            'event_title'   => $event['title'],
            'issued_count'  => $issuedCount,
            'certificates'  => $issuedList,
        ];
    }

    /**
     * Get Student's Issued Certificates
     */
    public static function getStudentCertificates(array $currentUser): array
    {
        $studentId = (int)($currentUser['user_id'] ?? 0);
        return Certificate::getStudentCertificates($studentId);
    }

    /**
     * Download / Stream Certificate PDF / HTML View
     */
    public static function getCertificateDetails(int $certId, array $currentUser): array
    {
        $cert = Certificate::getCertificateWithDetails($certId);
        if (!$cert) {
            throw new Exception("Certificate not found.", 404);
        }

        $html = PDF::generateCertificateHtml($cert);
        return [
            'certificate' => $cert,
            'html_view'   => $html,
        ];
    }

    /**
     * Generate Certificate for Single Approved & Attended Registration
     */
    public static function generateSingleCertificate(int $registrationId, array $currentUser): array
    {
        $reg = \App\Models\Registration::getRegistrationWithDetails($registrationId);
        if (!$reg) {
            throw new Exception("Registration not found.", 404);
        }

        $eventId   = (int)$reg['event_id'];
        $studentId = (int)$reg['student_id'];

        // Verify Attendance = Present
        $checkIn = Attendance::findExistingCheckIn($eventId, $studentId);
        if (!$checkIn || $checkIn['attendance_status'] !== 'Present') {
            throw new Exception("Ineligible: Student must have verified Present attendance to receive a certificate.", 422);
        }

        // Check duplicate
        $existing = Certificate::findStudentCertificate($eventId, $studentId);
        if ($existing) {
            return [
                'message'     => 'Certificate already exists.',
                'certificate' => $existing
            ];
        }

        $certNum = sprintf('CERT-%s-%05d', strtoupper(substr($reg['event_title'] ?? 'EVENT', 0, 4)), rand(10000, 99999));
        $certUrl = "/certificates/{$certNum}.pdf";
        $vToken  = 'VERIFY-CP-' . strtoupper(bin2hex(random_bytes(8)));

        $cert = Certificate::issueCertificate($eventId, $studentId, $certNum, $certUrl, $registrationId, (int)($currentUser['user_id'] ?? 0), $vToken);

        // Notify Student
        Notification::notify($studentId, "Certificate Ready! 🎓", "Your verified certificate for '{$reg['event_title']}' is ready to download.", "CertificateReady");

        // Audit Log
        AuditLog::log((int)($currentUser['user_id'] ?? 0), "GENERATED_CERTIFICATE: Issued {$certNum} for Registration #{$registrationId}", "Certificate");

        return [
            'success'     => true,
            'certificate' => $cert,
        ];
    }

    /**
     * Verify Certificate by Token (Public View)
     */
    public static function verifyCertificateToken(string $token): array
    {
        $cert = Certificate::findByToken($token);
        if (!$cert) {
            throw new Exception("Invalid verification token or certificate not found.", 404);
        }

        // Audit Log verification
        AuditLog::log(null, "VERIFIED_CERTIFICATE: Token {$token} verified", "Certificate");

        return [
            'valid'             => ($cert['status'] === 'Issued'),
            'status'            => $cert['status'],
            'certificate_number'=> $cert['certificate_number'],
            'student_name'      => $cert['student_name'] ?? 'Student',
            'event_title'       => $cert['event_title'] ?? 'Event',
            'department_name'   => $cert['department_name'] ?? 'Department',
            'issue_date'        => $cert['issued_date'] ?? $cert['generated_at'],
            'organizer_name'    => $cert['organizer_name'] ?? 'Campus Administration',
            'verification_token'=> $cert['verification_token'],
        ];
    }

    /**
     * Revoke Certificate
     */
    public static function revokeCertificate(int $id, array $currentUser): bool
    {
        $role = $currentUser['role'] ?? 'Student';
        if ($role !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can revoke certificates.", 403);
        }

        $db = Certificate::db();
        $stmt = $db->prepare("UPDATE certificates SET status = 'Revoked' WHERE id = :id");
        $success = $stmt->execute(['id' => $id]);

        if ($success) {
            AuditLog::log((int)($currentUser['user_id'] ?? 0), "REVOKED_CERTIFICATE: Certificate ID #{$id} revoked", "Certificate");
        }

        return $success;
    }
}
