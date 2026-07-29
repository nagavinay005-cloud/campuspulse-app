<?php

namespace App\Services;

use App\Models\Event;
use App\Models\Registration;
use App\Models\Notification;
use App\Models\AuditLog;
use Exception;

/**
 * Event Registration Business Logic Service for CampusPulse API
 */
class RegistrationService extends BaseService
{
    /**
     * Student Register for Published Event
     */
    public static function registerForEvent(int $eventId, array $currentUser): array
    {
        $role      = $currentUser['role'] ?? 'Student';
        $studentId = (int)($currentUser['user_id'] ?? 0);

        if ($role !== 'Student' && $role !== 'Admin') {
            throw new Exception("Forbidden: Only students can register for campus events.", 403);
        }

        // 1. Fetch Event Document
        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        // 2. Validate Event Status (Must be Published)
        if ($event['status'] !== 'Published') {
            throw new Exception("Registration closed: Event is currently '{$event['status']}'. Only published events accept registrations.", 422);
        }

        // 3. Validate Registration Deadline
        if (!empty($event['registration_deadline'])) {
            $deadlineTs = strtotime($event['registration_deadline']);
            if ($deadlineTs && time() > $deadlineTs) {
                throw new Exception("Registration closed: Deadline for this event has elapsed.", 422);
            }
        }

        // 4. Prevent Duplicate Registration
        $existing = Registration::findActiveRegistration($eventId, $studentId);
        if ($existing) {
            throw new Exception("You are already registered for this event.", 422);
        }

        // 5. Enforce Capacity Limit
        $activeCount = Registration::getActiveCount($eventId);
        $capacity    = (int)($event['capacity'] ?? 100);

        if ($activeCount >= $capacity) {
            // Notify Organizer that event reached capacity
            Notification::notify(
                (int)$event['organizer_id'],
                "Event Capacity Reached",
                "Your event '{$event['title']}' has reached its maximum capacity of {$capacity} registered participants.",
                "Capacity"
            );

            throw new Exception("Registration closed: Maximum capacity of {$capacity} participants has been reached.", 422);
        }

        // 6. Create Registration Document
        $registration = Registration::createRegistration($eventId, $studentId, 'Confirmed');
        if (!$registration) {
            throw new Exception("Failed to record event registration.", 500);
        }

        // 7. Dispatch Student Notification
        Notification::notify(
            $studentId,
            "Registration Successful! 🎟️",
            "You have registered for '{$event['title']}'. Access your digital QR entry pass in My Registrations.",
            "Registration"
        );

        // 8. Audit Log Recording
        AuditLog::log($studentId, "STUDENT_REGISTERED: Student #{$studentId} registered for Event #{$eventId} ('{$event['title']}')", "Registration");

        return $registration;
    }

    /**
     * Student Cancel Event Registration
     */
    public static function cancelRegistration(int $eventId, array $currentUser): bool
    {
        $studentId = (int)($currentUser['user_id'] ?? 0);

        $existing = Registration::findActiveRegistration($eventId, $studentId);
        if (!$existing) {
            throw new Exception("No active registration found to cancel.", 404);
        }

        $event = Event::find($eventId);
        $success = Registration::cancelRegistration($eventId, $studentId);

        if ($success) {
            // Notify Student
            Notification::notify(
                $studentId,
                "Registration Cancelled",
                "Your registration for '" . ($event['title'] ?? 'Event') . "' has been cancelled. Seat restored.",
                "Registration"
            );

            // Audit Log
            AuditLog::log($studentId, "STUDENT_CANCELLED_REGISTRATION: Student #{$studentId} cancelled registration for Event #{$eventId}", "Registration");
        }

        return $success;
    }

    /**
     * Organizer / Admin Approve Registration
     */
    public static function approveRegistration(int $registrationId, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $reg = Registration::getRegistrationWithDetails($registrationId);
        if (!$reg) {
            throw new Exception("Registration record not found.", 404);
        }

        // Check Permissions (Admin or Event Organizer)
        if ($role === 'Organizer' && (int)$reg['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You can only approve registrations for your own events.", 403);
        }

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot approve registrations.", 403);
        }

        Registration::updateStatus($registrationId, 'Approved', $userId);
        $updated = Registration::getRegistrationWithDetails($registrationId);

        // Notify Student
        Notification::notify(
            (int)$reg['student_id'],
            "Registration Approved! ✅",
            "Your registration for '{$reg['event_title']}' has been officially approved.",
            "Registration"
        );

        // Audit Log
        AuditLog::log($userId, "ORGANIZER_APPROVED_REGISTRATION: Registration #{$registrationId} approved for Student #{$reg['student_id']}", "Registration");

        return $updated;
    }

    /**
     * Organizer / Admin Reject Registration
     */
    public static function rejectRegistration(int $registrationId, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $reg = Registration::getRegistrationWithDetails($registrationId);
        if (!$reg) {
            throw new Exception("Registration record not found.", 404);
        }

        if ($role === 'Organizer' && (int)$reg['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You can only reject registrations for your own events.", 403);
        }

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot reject registrations.", 403);
        }

        Registration::updateStatus($registrationId, 'Rejected', $userId);
        $updated = Registration::getRegistrationWithDetails($registrationId);

        // Notify Student
        Notification::notify(
            (int)$reg['student_id'],
            "Registration Declined",
            "Your registration request for '{$reg['event_title']}' could not be accepted.",
            "Registration"
        );

        // Audit Log
        AuditLog::log($userId, "ORGANIZER_REJECTED_REGISTRATION: Registration #{$registrationId} rejected for Student #{$reg['student_id']}", "Registration");

        return $updated;
    }

    /**
     * Get Logged-In Student's Registrations
     */
    public static function getStudentRegistrations(array $currentUser): array
    {
        $studentId = (int)($currentUser['user_id'] ?? 0);
        return Registration::getStudentRegistrations($studentId);
    }

    /**
     * Get Registrations for Specific Event
     */
    public static function getEventRegistrations(int $eventId, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        if ($role === 'Organizer' && (int)$event['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You can only view participant rosters for your own events.", 403);
        }

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot view full participant rosters.", 403);
        }

        return Registration::getEventRegistrations($eventId);
    }

    /**
     * Get Paginated Registrations List
     */
    public static function getAllRegistrations(array $queryParams, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);
        $page   = isset($queryParams['page']) ? (int)$queryParams['page'] : 1;
        $limit  = isset($queryParams['limit']) ? (int)$queryParams['limit'] : 20;

        $organizerId = ($role === 'Organizer') ? $userId : null;
        return Registration::getPaginatedRegistrations($queryParams, $page, $limit, $organizerId);
    }
}
