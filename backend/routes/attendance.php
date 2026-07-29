<?php

namespace App\Routes;

use App\Controllers\AttendanceController;

/**
 * Attendance REST API Route Definitions
 */

// Verify QR Pass & Record Check-In
Router::post('/attendance/verify-qr', [AttendanceController::class, 'verifyQr']);
Router::post('/attendance/scan', [AttendanceController::class, 'verifyQr']);

// Get Event Attendance Roster & Metrics
Router::get('/events/{id}/attendance', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/attendance$#', $uri, $matches)) {
        (new AttendanceController())->eventAttendance((int)$matches[1]);
    }
});
