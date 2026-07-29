<?php

namespace App\Helpers;

use Exception;

/**
 * Firebase Cloud Messaging (FCM) Push Notification Helper
 */
class FCM
{
    /**
     * Send FCM Push Notification Payload to User Device Token
     */
    public static function send(string $deviceToken, string $title, string $body, array $extraData = []): bool
    {
        $serverKey = $_ENV['FCM_SERVER_KEY'] ?? getenv('FCM_SERVER_KEY') ?: '';

        // If no server key configured, simulate successful notification log
        if (empty($serverKey) || $serverKey === 'your_firebase_cloud_messaging_server_key_here') {
            error_log(sprintf("[FCM Simulation] Sent to %s: %s - %s", $deviceToken, $title, $body));
            return true;
        }

        $url = 'https://fcm.googleapis.com/fcm/send';

        $payload = [
            'to'           => $deviceToken,
            'notification' => [
                'title' => $title,
                'body'  => $body,
                'sound' => 'default',
            ],
            'data'         => array_merge($extraData, [
                'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
                'timestamp'    => date('c'),
            ]),
            'priority'     => 'high',
        ];

        $headers = [
            'Authorization: key=' . $serverKey,
            'Content-Type: application/json',
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $httpCode === 200;
    }
}
