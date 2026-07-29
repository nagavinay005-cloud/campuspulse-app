<?php

namespace App\Routes;

use App\Controllers\NotificationController;

/**
 * Notification REST API Endpoint Definitions
 */

// List Notifications Inbox
Router::get('/notifications', [NotificationController::class, 'index']);

// Register Device FCM Token
Router::post('/notifications/register-device', [NotificationController::class, 'registerDevice']);

// Send Push Notification
Router::post('/notifications/send', [NotificationController::class, 'sendPush']);

// Mark All Notifications as Read
Router::patch('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);

// Mark Specific Notification as Read
Router::patch('/notifications/{id}/read', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/notifications/(\d+)/read$#', $uri, $matches)) {
        (new NotificationController())->markAsRead((int)$matches[1]);
    }
});

// Delete Notification
Router::delete('/notifications/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/notifications/(\d+)$#', $uri, $matches)) {
        (new NotificationController())->destroy((int)$matches[1]);
    }
});
