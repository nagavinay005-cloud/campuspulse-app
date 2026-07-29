<?php

namespace App\Models;

/**
 * Notification Model for CampusPulse System Notifications
 */
class Notification extends BaseModel
{
    protected static string $table = 'notifications';
    protected static string $primaryKey = 'id';

    /**
     * Create Notification Record
     */
    public static function notify(int $userId, string $title, string $message, string $type = 'General'): bool
    {
        $sql = "INSERT INTO " . static::$table . " (user_id, title, message, type, read_status, sent_at) 
                VALUES (:user_id, :title, :message, :type, 0, NOW())";

        $stmt = static::db()->prepare($sql);
        return $stmt->execute([
            'user_id' => $userId,
            'title'   => $title,
            'message' => $message,
            'type'    => $type,
        ]);
    }
}
