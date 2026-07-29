<?php

namespace App\Routes;

use App\Controllers\EnterpriseCollegeController;

/**
 * Enterprise Engineering College REST API Endpoint Definitions
 */

// Submit Event for HOD -> Dean -> Principal Approval
Router::post('/enterprise/submit-approval/{eventId}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/enterprise/submit-approval/(\d+)$#', $uri, $matches)) {
        (new EnterpriseCollegeController())->submitApproval((int)$matches[1]);
    }
});

// Review Approval Stage (HOD / Dean / Principal / Admin)
Router::post('/enterprise/review-approval/{eventId}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/enterprise/review-approval/(\d+)$#', $uri, $matches)) {
        (new EnterpriseCollegeController())->reviewApproval((int)$matches[1]);
    }
});

// NAAC / NIRF Activity Score & Academic Credit Report
Router::get('/enterprise/naac-nirf-report', [EnterpriseCollegeController::class, 'naacNirfReport']);
