<?php

namespace App\Routes;

use App\Controllers\MediaController;

/**
 * Media & File Upload REST API Endpoint Definitions
 */

// Upload File
Router::post('/media/upload', [MediaController::class, 'upload']);

// Get Media Files by Module
Router::get('/media/module/{module}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/media/module/([^/]+)$#', $uri, $matches)) {
        (new MediaController())->byModule($matches[1]);
    }
});

// Get Media Details
Router::get('/media/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/media/(\d+)$#', $uri, $matches)) {
        (new MediaController())->show((int)$matches[1]);
    }
});

// Delete Media File
Router::delete('/media/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/media/(\d+)$#', $uri, $matches)) {
        (new MediaController())->destroy((int)$matches[1]);
    }
});
