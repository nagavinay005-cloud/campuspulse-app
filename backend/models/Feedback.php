<?php

namespace App\Models;

use PDO;

/**
 * Feedback Database Model for CampusPulse API
 */
class Feedback extends BaseModel
{
    protected static string $table = 'feedback';
    protected static string $primaryKey = 'id';

    /**
     * Find Existing Feedback for Student and Event
     */
    public static function findStudentFeedback(int $eventId, int $studentId): ?array
    {
        $sql = "SELECT * FROM " . static::$table . " WHERE event_id = :event_id AND student_id = :student_id LIMIT 1";
        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId, 'student_id' => $studentId]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Submit New Feedback
     */
    public static function createFeedback(array $data): ?array
    {
        $sql = "INSERT INTO " . static::$table . " 
                (event_id, student_id, registration_id, overall_rating, organization_rating, speaker_rating, venue_rating, content_rating, rating, feedback, comments, anonymous, submitted_at, created_at)
                VALUES (:event_id, :student_id, :registration_id, :overall_rating, :organization_rating, :speaker_rating, :venue_rating, :content_rating, :rating, :feedback, :comments, :anonymous, NOW(), NOW())";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'event_id'           => $data['event_id'],
            'student_id'         => $data['student_id'],
            'registration_id'    => $data['registration_id'] ?? null,
            'overall_rating'     => $data['overall_rating'] ?? 5,
            'organization_rating'=> $data['organization_rating'] ?? 5,
            'speaker_rating'     => $data['speaker_rating'] ?? 5,
            'venue_rating'       => $data['venue_rating'] ?? 5,
            'content_rating'     => $data['content_rating'] ?? 5,
            'rating'             => $data['overall_rating'] ?? 5,
            'feedback'           => $data['comments'] ?? '',
            'comments'           => $data['comments'] ?? '',
            'anonymous'          => $data['anonymous'] ?? 0,
        ]);

        if ($success) {
            $id = (int)static::db()->lastInsertId();
            return static::find($id);
        }

        return null;
    }

    /**
     * Get Feedback List for Event
     */
    public static function getEventFeedback(int $eventId): array
    {
        $sql = "SELECT f.*, 
                       CASE WHEN f.anonymous = 1 THEN 'Anonymous Student' ELSE u.name END AS student_name,
                       CASE WHEN f.anonymous = 1 THEN '' ELSE u.email END AS student_email
                FROM " . static::$table . " f
                LEFT JOIN users u ON f.student_id = u.id
                WHERE f.event_id = :event_id
                ORDER BY f.submitted_at DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId]);
        return $stmt->fetchAll();
    }

    /**
     * Get Event Feedback Statistics
     */
    public static function getEventStatistics(int $eventId): array
    {
        $sql = "SELECT 
                    COUNT(*) AS total_feedback,
                    ROUND(AVG(overall_rating), 1) AS avg_overall_rating,
                    ROUND(AVG(organization_rating), 1) AS avg_organization_rating,
                    ROUND(AVG(speaker_rating), 1) AS avg_speaker_rating,
                    ROUND(AVG(venue_rating), 1) AS avg_venue_rating,
                    ROUND(AVG(content_rating), 1) AS avg_content_rating,
                    COUNT(CASE WHEN overall_rating = 5 THEN 1 END) AS rating_5_count,
                    COUNT(CASE WHEN overall_rating = 4 THEN 1 END) AS rating_4_count,
                    COUNT(CASE WHEN overall_rating = 3 THEN 1 END) AS rating_3_count,
                    COUNT(CASE WHEN overall_rating = 2 THEN 1 END) AS rating_2_count,
                    COUNT(CASE WHEN overall_rating = 1 THEN 1 END) AS rating_1_count
                FROM " . static::$table . "
                WHERE event_id = :event_id";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['event_id' => $eventId]);
        $stats = $stmt->fetch();

        return [
            'total_feedback'         => (int)($stats['total_feedback'] ?? 0),
            'avg_overall_rating'     => (float)($stats['avg_overall_rating'] ?? 0),
            'avg_organization_rating'=> (float)($stats['avg_organization_rating'] ?? 0),
            'avg_speaker_rating'     => (float)($stats['avg_speaker_rating'] ?? 0),
            'avg_venue_rating'       => (float)($stats['avg_venue_rating'] ?? 0),
            'avg_content_rating'     => (float)($stats['avg_content_rating'] ?? 0),
            'rating_distribution'    => [
                '5_star' => (int)($stats['rating_5_count'] ?? 0),
                '4_star' => (int)($stats['rating_4_count'] ?? 0),
                '3_star' => (int)($stats['rating_3_count'] ?? 0),
                '2_star' => (int)($stats['rating_2_count'] ?? 0),
                '1_star' => (int)($stats['rating_1_count'] ?? 0),
            ],
        ];
    }
}
