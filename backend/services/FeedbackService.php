<?php

namespace App\Services;

use App\Models\Feedback;
use App\Models\Attendance;
use App\Models\Event;
use App\Models\Registration;
use App\Models\Notification;
use App\Models\AuditLog;
use Exception;

/**
 * Feedback & Rating Service Layer for CampusPulse
 */
class FeedbackService extends BaseService
{
    /**
     * Submit New Feedback
     */
    public static function submitFeedback(array $input, array $currentUser): array
    {
        $studentId = (int)($currentUser['user_id'] ?? 0);
        $eventId   = (int)($input['event_id'] ?? 0);

        if ($eventId <= 0) {
            throw new Exception("Validation failed: 'event_id' is required.", 422);
        }

        // 1. Eligibility Check: Must have verified Present attendance
        $checkIn = Attendance::findExistingCheckIn($eventId, $studentId);
        if (!$checkIn || $checkIn['attendance_status'] !== 'Present') {
            throw new Exception("Ineligible: Feedback can only be submitted after attending an event.", 422);
        }

        // 2. Eligibility Check: Event must be Completed or Published
        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event not found.", 404);
        }

        // 3. Prevent duplicate submission
        $existing = Feedback::findStudentFeedback($eventId, $studentId);
        if ($existing) {
            throw new Exception("Duplicate Submission: You have already submitted feedback for this event.", 422);
        }

        // 4. Validate rating range (1-5)
        $overallRating = max(1, min(5, (int)($input['overall_rating'] ?? $input['rating'] ?? 5)));
        $orgRating     = max(1, min(5, (int)($input['organization_rating'] ?? 5)));
        $speakerRating = max(1, min(5, (int)($input['speaker_rating'] ?? 5)));
        $venueRating   = max(1, min(5, (int)($input['venue_rating'] ?? 5)));
        $contentRating = max(1, min(5, (int)($input['content_rating'] ?? 5)));

        $comments  = trim($input['comments'] ?? $input['feedback'] ?? '');
        if (strlen($comments) > 2000) {
            throw new Exception("Comment too long. Maximum allowed length is 2000 characters.", 422);
        }

        $reg = Registration::findActiveRegistration($eventId, $studentId);

        $data = [
            'event_id'           => $eventId,
            'student_id'         => $studentId,
            'registration_id'    => $reg['id'] ?? null,
            'overall_rating'     => $overallRating,
            'organization_rating'=> $orgRating,
            'speaker_rating'     => $speakerRating,
            'venue_rating'       => $venueRating,
            'content_rating'     => $contentRating,
            'comments'           => $comments,
            'anonymous'          => !empty($input['anonymous']) ? 1 : 0,
        ];

        $feedback = Feedback::createFeedback($data);

        // Notify Event Organizer
        Notification::notify(
            (int)$event['organizer_id'],
            "New Event Feedback Received! ⭐",
            "A student submitted a {$overallRating}-star feedback for '{$event['title']}'.",
            "FeedbackReceived"
        );

        // Audit Log
        AuditLog::log($studentId, "SUBMITTED_FEEDBACK: Rating {$overallRating}/5 for Event #{$eventId}", "Feedback");

        return [
            'success'  => true,
            'message'  => 'Feedback submitted successfully.',
            'feedback' => $feedback,
        ];
    }

    /**
     * Get Feedback List for Event
     */
    public static function getEventFeedback(int $eventId, array $currentUser): array
    {
        return Feedback::getEventFeedback($eventId);
    }

    /**
     * Get Student's Submitted Feedback List
     */
    public static function getStudentFeedback(array $currentUser): array
    {
        $studentId = (int)($currentUser['user_id'] ?? 0);
        $db = Feedback::db();
        $stmt = $db->prepare("SELECT f.*, e.title AS event_title FROM feedback f LEFT JOIN events e ON f.event_id = e.id WHERE f.student_id = :student_id ORDER BY f.submitted_at DESC");
        $stmt->execute(['student_id' => $studentId]);
        return $stmt->fetchAll();
    }

    /**
     * Update Feedback Record
     */
    public static function updateFeedback(int $feedbackId, array $input, array $currentUser): array
    {
        $studentId = (int)($currentUser['user_id'] ?? 0);
        $db = Feedback::db();

        $stmt = $db->prepare("SELECT * FROM feedback WHERE id = :id LIMIT 1");
        $stmt->execute(['id' => $feedbackId]);
        $fb = $stmt->fetch();

        if (!$fb) {
            throw new Exception("Feedback not found.", 404);
        }

        if ((int)$fb['student_id'] !== $studentId && ($currentUser['role'] ?? 'Student') !== 'Admin') {
            throw new Exception("Forbidden: You can only edit your own feedback.", 403);
        }

        $overallRating = max(1, min(5, (int)($input['overall_rating'] ?? $fb['overall_rating'])));
        $comments      = isset($input['comments']) ? trim($input['comments']) : $fb['comments'];

        $upd = $db->prepare("UPDATE feedback SET overall_rating = :rating, rating = :rating, comments = :comments, updated_at = NOW() WHERE id = :id");
        $upd->execute(['rating' => $overallRating, 'comments' => $comments, 'id' => $feedbackId]);

        AuditLog::log($studentId, "UPDATED_FEEDBACK: Updated Feedback ID #{$feedbackId}", "Feedback");

        return ['success' => true, 'message' => 'Feedback updated successfully.'];
    }

    /**
     * Delete Feedback Record
     */
    public static function deleteFeedback(int $feedbackId, array $currentUser): bool
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $role   = $currentUser['role'] ?? 'Student';
        $db     = Feedback::db();

        $stmt = $db->prepare("SELECT * FROM feedback WHERE id = :id LIMIT 1");
        $stmt->execute(['id' => $feedbackId]);
        $fb = $stmt->fetch();

        if (!$fb) {
            throw new Exception("Feedback not found.", 404);
        }

        if ((int)$fb['student_id'] !== $userId && $role !== 'Admin') {
            throw new Exception("Forbidden: You can only delete your own feedback.", 403);
        }

        $del = $db->prepare("DELETE FROM feedback WHERE id = :id");
        $success = $del->execute(['id' => $feedbackId]);

        if ($success) {
            AuditLog::log($userId, "DELETED_FEEDBACK: Removed Feedback ID #{$feedbackId}", "Feedback");
        }

        return $success;
    }

    /**
     * Get Detailed Event Feedback Statistics
     */
    public static function getEventStatistics(int $eventId): array
    {
        return Feedback::getEventStatistics($eventId);
    }
}
