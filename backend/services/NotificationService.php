<?php

namespace App\Services;

use App\Models\Notification;
use App\Helpers\FCM;
use Exception;

/**
 * Notification & Firebase Push Notification Service Layer
 */
class NotificationService extends BaseService
{
    /**
     * Get Logged-In User Notifications Inbox
     */
    public static function getUserNotifications(array $currentUser): array
    {
        $userId = (int)($currentUser['user_id'] ?? 0);

        $sql = "SELECT * FROM notifications WHERE user_id = :user_id ORDER BY sent_at DESC LIMIT 50";
        $stmt = Notification::db()->prepare($sql);
        $stmt->execute(['user_id' => $userId]);
        return $stmt->fetchAll();
    }

    /**
     * Mark Notification as Read
     */
    public static function markAsRead(int $notificationId, array $currentUser): bool
    {
        $userId = (int)($currentUser['user_id'] ?? 0);

        $sql = "UPDATE notifications SET read_status = 1 WHERE id = :id AND user_id = :user_id";
        $stmt = Notification::db()->prepare($sql);
        return $stmt->execute(['id' => $notificationId, 'user_id' => $userId]);
    }

    /**
     * Register or Update FCM Device Token
     */
    public static function registerDeviceToken(array $currentUser, string $fcmToken, ?string $deviceType = 'web', ?string $browser = null, ?string $platform = null): bool
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $db = Notification::db();

        $sql = "INSERT INTO device_tokens (user_id, fcm_token, device_type, browser, platform, last_seen, created_at)
                VALUES (:user_id, :fcm_token, :device_type, :browser, :platform, NOW(), NOW())
                ON DUPLICATE KEY UPDATE user_id = :user_id2, device_type = :device_type2, browser = :browser2, platform = :platform2, last_seen = NOW()";

        $stmt = $db->prepare($sql);
        return $stmt->execute([
            'user_id'     => $userId,
            'fcm_token'   => $fcmToken,
            'device_type' => $deviceType ?? 'web',
            'browser'     => $browser,
            'platform'    => $platform,
            'user_id2'    => $userId,
            'device_type2'=> $deviceType ?? 'web',
            'browser2'    => $browser,
            'platform2'   => $platform,
        ]);
    }

    /**
     * Mark All Notifications as Read for User
     */
    public static function markAllAsRead(array $currentUser): bool
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $sql = "UPDATE notifications SET read_status = 1, is_read = 1 WHERE user_id = :user_id";
        $stmt = Notification::db()->prepare($sql);
        return $stmt->execute(['user_id' => $userId]);
    }

    /**
     * Delete Notification Record
     */
    public static function deleteNotification(int $notificationId, array $currentUser): bool
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $sql = "DELETE FROM notifications WHERE id = :id AND user_id = :user_id";
        $stmt = Notification::db()->prepare($sql);
        $success = $stmt->execute(['id' => $notificationId, 'user_id' => $userId]);

        if ($success) {
            \App\Models\AuditLog::log($userId, "DELETED_NOTIFICATION: Removed notification ID #{$notificationId}", "Notification");
        }

        return $success;
    }

    /**
     * Dispatch FCM Push Notification Payload
     */
    public static function sendPushNotification(string $deviceToken, string $title, string $message, array $extraData = []): bool
    {
        return FCM::send($deviceToken, $title, $message, $extraData);
    }

    /**
     * Dispatch / Log system notification to user
     */
    public static function notify(int $userId, string $title, string $message, string $type = 'General'): bool
    {
        return Notification::notify($userId, $title, $message, $type);
    }
}
