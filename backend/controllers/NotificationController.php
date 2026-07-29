<?php

namespace App\Controllers;

use App\Services\NotificationService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Notification REST API Controller for CampusPulse
 */
class NotificationController extends BaseController
{
    /**
     * GET /api/v1/notifications
     * List Logged-In User Notifications
     */
    public function index(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = NotificationService::getUserNotifications($currentUser);
            Response::success($list, "User notifications inbox retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * PATCH /api/v1/notifications/{id}/read
     * Mark Notification as Read
     */
    public function markAsRead(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            NotificationService::markAsRead($id, $currentUser);
            Response::success(null, "Notification marked as read.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /api/v1/notifications/register-device
     */
    public function registerDevice(): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $validated = $this->validateInput($input, [
            'fcm_token' => 'required',
        ]);

        try {
            NotificationService::registerDeviceToken(
                $currentUser,
                $validated['fcm_token'],
                $input['device_type'] ?? 'web',
                $input['browser'] ?? null,
                $input['platform'] ?? null
            );
            Response::success(null, "FCM Device Token registered successfully.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * PATCH /api/v1/notifications/read-all
     */
    public function markAllAsRead(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            NotificationService::markAllAsRead($currentUser);
            Response::success(null, "All notifications marked as read.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * DELETE /api/v1/notifications/{id}
     */
    public function destroy(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            NotificationService::deleteNotification($id, $currentUser);
            Response::success(null, "Notification deleted.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /api/v1/notifications/send
     * Dispatch FCM Push Notification Payload
     */
    public function sendPush(): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $validated = $this->validateInput($input, [
            'device_token' => 'required',
            'title'        => 'required',
            'message'      => 'required',
        ]);

        try {
            $success = NotificationService::sendPushNotification(
                $validated['device_token'],
                $validated['title'],
                $validated['message'],
                $input['extra'] ?? []
            );
            Response::success(['sent' => $success], "FCM push notification processed.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
