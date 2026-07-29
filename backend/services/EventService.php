<?php

namespace App\Services;

use App\Models\Event;
use App\Models\AuditLog;
use App\Helpers\Upload;
use Exception;

/**
 * Event Management Business Logic Service for CampusPulse API
 */
class EventService extends BaseService
{
    /**
     * List Paginated Events with Role Scoping
     */
    public static function getAllEvents(array $queryParams, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);
        $page   = isset($queryParams['page']) ? (int)$queryParams['page'] : 1;
        $limit  = isset($queryParams['limit']) ? (int)$queryParams['limit'] : 20;

        return Event::getPaginatedEvents($queryParams, $page, $limit, $role, $userId);
    }

    public static function getEventById($id, array $currentUser): array
    {
        $event = is_numeric($id) ? Event::getEventWithDetails((int)$id) : Event::getEventByUuid($id);
        if (!$event) {
            throw new Exception("Event record not found.", 404);
        }

        $role = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        // Visibility Rule Enforcement
        if ($role === 'Student' && $event['status'] !== 'Published') {
            throw new Exception("Forbidden: Students can only view published events.", 403);
        }

        if ($role === 'Organizer' && $event['status'] !== 'Published' && (int)$event['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You cannot view non-published events created by other organizers.", 403);
        }

        return $event;
    }

    /**
     * Create New Event Record
     */
    public static function createEvent(array $data, ?array $file, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students do not have authorization to create events.", 403);
        }

        $organizerId = ($role === 'Admin' && !empty($data['organizer_id'])) ? (int)$data['organizer_id'] : $userId;

        // Perform Validations
        self::validateEventData($data);

        // Prevent Duplicate Event Name on Same Date
        if (Event::checkDuplicate($data['title'], $data['event_date'], $organizerId)) {
            throw new Exception("Duplicate Event: An event with title '{$data['title']}' already exists on {$data['event_date']} for this organizer.", 422);
        }

        // Process Banner Image Upload if provided
        $bannerPath = '/uploads/events/default_banner.png';
        if ($file && isset($file['name']) && !empty($file['name'])) {
            $bannerPath = Upload::image($file, 'events');
        } elseif (!empty($data['banner'])) {
            $bannerPath = $data['banner'];
        }

        $eventPayload = array_merge($data, [
            'organizer_id' => $organizerId,
            'banner'       => $bannerPath,
            'status'       => self::normalizeStatus($data['status'] ?? 'Draft'),
        ]);

        $newEvent = Event::createEvent($eventPayload);
        if (!$newEvent) {
            throw new Exception("Failed to create event record.", 500);
        }

        // Audit Log Recording
        AuditLog::log($userId, "CREATED_EVENT: '{$newEvent['title']}' (ID: {$newEvent['id']})", "Event");

        return $newEvent;
    }

    /**
     * Update Event Details
     */
    public static function updateEvent(int $id, array $data, ?array $file, array $currentUser): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $event = Event::find($id);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        // Enforce Ownership Rules & Status Edit Rules (Reqs 12 & 13)
        if ($role === 'Organizer') {
            if ((int)$event['organizer_id'] !== $userId) {
                throw new Exception("Forbidden: You can only edit your own created events.", 403);
            }
            
            // Organizer can edit only pending/rejected/draft events, not published unless explicitly allowed
            if (in_array($event['status'], ['Published', 'Completed', 'Archived', 'Cancelled'], true)) {
                throw new Exception("Forbidden: Organizer cannot edit published or completed events unless explicitly allowed.", 403);
            }
        }

        // Perform Validations
        self::validateEventData(array_merge($event, $data));

        $organizerId = (int)$event['organizer_id'];
        $title = $data['title'] ?? $event['title'];
        $eventDate = $data['event_date'] ?? $event['event_date'];

        if (Event::checkDuplicate($title, $eventDate, $organizerId, $id)) {
            throw new Exception("Duplicate Event: Another event with title '{$title}' exists on {$eventDate}.", 422);
        }

        // Process Banner Upload if provided
        if ($file && isset($file['name']) && !empty($file['name'])) {
            $data['banner'] = Upload::image($file, 'events');
        }

        if (isset($data['status'])) {
            $data['status'] = self::normalizeStatus($data['status']);
        }

        Event::update($id, $data);
        $updated = Event::getEventWithDetails($id);

        if ($event['status'] === 'Published') {
            $db = Event::db();
            $stmt = $db->prepare("SELECT student_id FROM registrations WHERE event_id = :event_id AND status != 'Cancelled'");
            $stmt->execute(['event_id' => $id]);
            $registrants = $stmt->fetchAll();

            foreach ($registrants as $r) {
                \App\Services\NotificationService::notify(
                    (int)$r['student_id'],
                    "Event Update: '{$updated['title']}' 📢",
                    "The event details for '{$updated['title']}' have been updated by the organizer. Please review the updated schedule/venue.",
                    "Event"
                );
            }
        }

        // Audit Log Recording
        AuditLog::log($userId, "UPDATED_EVENT: '{$updated['title']}' (ID: {$id})", "Event");

        return $updated;
    }

    /**
     * Delete Event Record
     */
    public static function deleteEvent(int $id, array $currentUser): bool
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $event = Event::find($id);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        if ($role === 'Organizer') {
            if ((int)$event['organizer_id'] !== $userId) {
                throw new Exception("Forbidden: You can only delete your own draft events.", 403);
            }
            if ($event['status'] !== 'Draft') {
                throw new Exception("Forbidden: Organizers can only delete events in 'Draft' status.", 403);
            }
        }

        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot delete events.", 403);
        }

        $title = $event['title'];
        $success = Event::delete($id);

        if ($success) {
            AuditLog::log($userId, "DELETED_EVENT: '{$title}' (ID: {$id})", "Event");
        }

        return $success;
    }

    /**
     * Update Event Status State Machine Transitions
     */
    public static function updateStatusAction(int $id, string $action, array $currentUser, ?string $reason = null): array
    {
        $role   = $currentUser['role'] ?? 'Student';
        $userId = (int)($currentUser['user_id'] ?? 0);

        $event = Event::find($id);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        $newStatus = match ($action) {
            'submit'   => 'Pending Approval',
            'approve'  => 'Published',
            'reject'   => 'Rejected',
            'publish'  => 'Published',
            'cancel'   => 'Cancelled',
            'archive'  => 'Archived',
            'restore'  => 'Draft',
            default    => throw new Exception("Invalid status transition action.", 400),
        };

        // Enforce RBAC permissions for state transitions
        if (in_array($action, ['approve', 'reject', 'archive', 'restore'], true) && $role !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can execute action '{$action}'.", 403);
        }

        if ($action === 'submit' && $role === 'Organizer' && (int)$event['organizer_id'] !== $userId) {
            throw new Exception("Forbidden: You can only submit your own events for approval.", 403);
        }

        if ($action === 'approve') {
            Event::approveEvent($id, $userId);
        } elseif ($action === 'reject') {
            Event::rejectEvent($id, $userId, $reason ?: "Event submission rejected by Administrator.");
        } else {
            Event::updateStatus($id, $newStatus);
        }

        $updated = Event::getEventWithDetails($id);

        // Notifications dispatching
        if ($action === 'approve') {
            \App\Services\NotificationService::notify(
                (int)$updated['organizer_id'],
                "Event Approved & Published 🎉",
                "Your event '{$updated['title']}' has been approved by Admin and is now live across campus.",
                "Event"
            );
        } elseif ($action === 'reject') {
            \App\Services\NotificationService::notify(
                (int)$updated['organizer_id'],
                "Event Submission Update",
                "Your event '{$updated['title']}' was rejected. Reason: " . ($reason ?: "Requires modification."),
                "Event"
            );
        }

        // Audit Log Recording
        AuditLog::log($userId, strtoupper($action) . "_EVENT: '{$updated['title']}' (ID: {$id}) Status -> {$newStatus}" . ($reason ? " Reason: {$reason}" : ""), "Event");

        return $updated;
    }

    /**
     * Helper: Validate Event Input Data Logic
     */
    private static function validateEventData(array $data): void
    {
        if (empty($data['title']) || strlen(trim($data['title'])) < 3) {
            throw new Exception("Validation Error: Event title must be at least 3 characters.", 422);
        }

        if (empty($data['description'])) {
            throw new Exception("Validation Error: Event description is required.", 422);
        }

        if (empty($data['venue'])) {
            throw new Exception("Validation Error: Event venue is required.", 422);
        }

        if (empty($data['event_date'])) {
            throw new Exception("Validation Error: Event date is required.", 422);
        }

        if (empty($data['registration_deadline'])) {
            throw new Exception("Validation Error: Registration deadline is required.", 422);
        }

        // Capacity Rule: capacity > 0
        if (isset($data['capacity']) && (int)$data['capacity'] <= 0) {
            throw new Exception("Validation Error: Maximum participants capacity must be greater than 0.", 422);
        }

        // Deadline Rule: registration_deadline must be <= event_date
        $deadlineTs = strtotime($data['registration_deadline']);
        $eventDateTs = strtotime($data['event_date']);

        if ($deadlineTs && $eventDateTs && $deadlineTs > ($eventDateTs + 86399)) {
            throw new Exception("Validation Error: Registration deadline must be on or before the event date.", 422);
        }

        // Time Rule: end_time must be after start_time
        if (!empty($data['start_time']) && !empty($data['end_time'])) {
            if (strtotime($data['end_time']) <= strtotime($data['start_time'])) {
                throw new Exception("Validation Error: Event end time must be after start time.", 422);
            }
        }
    }

    /**
     * Normalize status input strings to match MySQL Database ENUM columns
     */
    private static function normalizeStatus(?string $status): string
    {
        if (empty($status)) {
            return 'Draft';
        }

        $normalized = strtolower(str_replace([' ', '_', '-'], '', $status));

        switch ($normalized) {
            case 'pendingapproval':
            case 'pending':
                return 'Pending Approval';
            case 'published':
                return 'Published';
            case 'draft':
                return 'Draft';
            case 'completed':
                return 'Completed';
            case 'cancelled':
                return 'Cancelled';
            case 'archived':
                return 'Archived';
            case 'rejected':
                return 'Rejected';
            default:
                return 'Draft';
        }
    }
}
