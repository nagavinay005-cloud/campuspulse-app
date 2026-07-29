<?php

namespace App\Services;

use App\Models\Attendance;
use App\Models\Registration;
use App\Models\Event;
use App\Models\Notification;
use App\Models\AuditLog;
use Exception;

/**
 * QR Code Attendance & Verification Service Layer
 */
class AttendanceService extends BaseService
{
    /**
     * Verify QR Pass & Record Check-In
     */
    public static function verifyAndCheckIn(string $qrValue, int $targetEventId, array $currentUser): array
    {
        $role      = $currentUser['role'] ?? 'Student';
        $scannedBy = (int)($currentUser['user_id'] ?? 0);

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot scan or check-in entry passes.", 403);
        }

        // 1. Locate Registration by QR Pass Code
        $stmt = Registration::db()->prepare("SELECT * FROM registrations WHERE UPPER(qr_code) = :qr LIMIT 1");
        $stmt->execute(['qr' => strtoupper(trim($qrValue))]);
        $reg = $stmt->fetch();

        if (!$reg) {
            throw new Exception("Invalid QR Code: Pass not found in system.", 404);
        }

        // 2. Validate Event Match
        if ($targetEventId > 0 && (int)$reg['event_id'] !== $targetEventId) {
            throw new Exception("Wrong Event QR Code: Pass is issued for another event (ID: {$reg['event_id']}).", 422);
        }

        // 3. Validate Registration Status
        if ($reg['status'] === 'Cancelled' || $reg['status'] === 'Rejected') {
            throw new Exception("Registration Invalid: Ticket status is currently '{$reg['status']}'.", 422);
        }

        // 4. Validate Event Status
        $event = Event::find((int)$reg['event_id']);
        if ($event && in_array($event['status'], ['Cancelled', 'Archived'], true)) {
            throw new Exception("Check-in Rejected: Event is currently {$event['status']}.", 422);
        }

        // 5. Prevent Duplicate Check-In
        $existingCheckIn = Attendance::findExistingCheckIn((int)$reg['event_id'], (int)$reg['student_id']);
        if ($existingCheckIn) {
            $formattedTime = date('h:i A', strtotime($existingCheckIn['check_in_time']));
            throw new Exception("Duplicate Check-in: Student was already checked in at {$formattedTime}.", 422);
        }

        // 6. Record Attendance Success
        $attendance = Attendance::checkIn((int)$reg['id'], (int)$reg['event_id'], (int)$reg['student_id'], $scannedBy, 'Present');
        Registration::updateStatus((int)$reg['id'], 'Checked In', $scannedBy);

        // Notify Student
        Notification::notify(
            (int)$reg['student_id'],
            "Attendance Confirmed! ✅",
            "Your digital entry pass for '{$event['title']}' was verified. Welcome!",
            "Attendance"
        );

        // Audit Log
        AuditLog::log($scannedBy, "CHECKED_IN_STUDENT: Verified QR Pass for Student #{$reg['student_id']} at Event #{$reg['event_id']}", "Attendance");

        $studentProfile = \App\Models\User::getUserWithDepartment((int)$reg['student_id']);

        return [
            'success'        => true,
            'message'        => 'Check-in verified successfully.',
            'check_in_time'  => date('h:i A'),
            'student_name'   => $studentProfile['name'] ?? 'Student',
            'student_email'  => $studentProfile['email'] ?? '',
            'department_name'=> $studentProfile['department_name'] ?? 'Department',
            'year'           => $studentProfile['year'] ?? '3rd Year',
            'event_title'    => $event['title'] ?? 'Event',
        ];
    }

    /**
     * Get Live Attendance Metrics & Roster for Event
     */
    public static function getEventAttendance(int $eventId, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        if ($role === 'Organizer' && (int)$event['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You can only view attendance for your own events.", 403);
        }

        $logs = Attendance::getEventAttendanceLog($eventId);
        $totalRegistered = Registration::getActiveCount($eventId);
        $checkedInCount  = count($logs);
        $pendingCount    = max(0, $totalRegistered - $checkedInCount);
        $attendanceRate  = $totalRegistered > 0 ? round(($checkedInCount / $totalRegistered) * 100) : 0;

        return [
            'metrics' => [
                'total_registered'    => $totalRegistered,
                'checked_in_count'    => $checkedInCount,
                'pending_checkins'    => $pendingCount,
                'attendance_rate_pct' => $attendanceRate,
            ],
            'attendance_log' => $logs,
        ];
    }
}
