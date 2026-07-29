<?php

namespace App\Controllers;

use App\Services\AttendanceService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Attendance & QR Check-In REST API Controller for CampusPulse
 */
class AttendanceController extends BaseController
{
    /**
     * POST /api/v1/attendance/verify-qr
     * Verify QR Pass & Record Check-In
     */
    public function verifyQr(): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $qrCode = $input['qr_token'] ?? $input['qr_code'] ?? null;
        if (!$qrCode) {
            Response::error("Validation failed: 'qr_token' or 'qr_code' field is required.", 422);
            return;
        }

        $targetEventId = isset($input['event_id']) ? (int)$input['event_id'] : 0;

        try {
            $result = AttendanceService::verifyAndCheckIn($qrCode, $targetEventId, $currentUser);
            Response::success($result, "Check-in verified successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/events/{id}/attendance
     * Get Live Attendance Log & Check-In Metrics
     */
    public function eventAttendance(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = AttendanceService::getEventAttendance($eventId, $currentUser);
            Response::success($result, "Event attendance telemetry retrieved.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }
}
