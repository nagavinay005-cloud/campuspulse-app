<?php

namespace App\Routes;

use App\Controllers\CertificateController;

/**
 * Certificate REST API Endpoint Definitions
 */

// List Certificates
Router::get('/certificates', [CertificateController::class, 'index']);
Router::get('/students/me/certificates', [CertificateController::class, 'index']);

// Generate Certificate by Registration ID
Router::post('/certificates/generate/{registrationId}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/certificates/generate/(\d+)$#', $uri, $matches)) {
        (new CertificateController())->generateSingle((int)$matches[1]);
    }
});

// Batch Issue Certificates for Event Attendees
Router::post('/events/{id}/generate-certificates', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/generate-certificates$#', $uri, $matches)) {
        (new CertificateController())->batchGenerate((int)$matches[1]);
    }
});

// Public Verification Endpoint
Router::get('/certificates/verify/{token}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/certificates/verify/([^/]+)$#', $uri, $matches)) {
        (new CertificateController())->verifyToken($matches[1]);
    }
});

// View Specific Certificate & HTML Template
Router::get('/certificates/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/certificates/(\d+)$#', $uri, $matches)) {
        (new CertificateController())->show((int)$matches[1]);
    }
});

// Revoke / Delete Certificate
Router::delete('/certificates/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/certificates/(\d+)$#', $uri, $matches)) {
        (new CertificateController())->destroy((int)$matches[1]);
    }
});
