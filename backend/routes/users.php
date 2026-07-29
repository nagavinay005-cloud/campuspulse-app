<?php

namespace App\Routes;

use App\Controllers\UserController;

/**
 * User Management REST API Endpoint Definitions
 */

// Aggregated User Telemetry Statistics
Router::get('/users/statistics', [UserController::class, 'statistics']);

// List Paginated Users (Search & Filters)
Router::get('/users', [UserController::class, 'index']);

// Create New User Account (Admin)
Router::post('/users', [UserController::class, 'store']);

// User Profile by ID, Update, and Delete Routines
Router::get('/users/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/users/(\d+)$#', $uri, $matches)) {
        (new UserController())->show((int)$matches[1]);
    }
});

Router::put('/users/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/users/(\d+)$#', $uri, $matches)) {
        (new UserController())->update((int)$matches[1]);
    }
});

Router::delete('/users/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/users/(\d+)$#', $uri, $matches)) {
        (new UserController())->destroy((int)$matches[1]);
    }
});

// Update Account Status
Router::patch('/users/{id}/status', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/users/(\d+)/status$#', $uri, $matches)) {
        (new UserController())->updateStatus((int)$matches[1]);
    }
});

// Update User Role
Router::patch('/users/{id}/role', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/users/(\d+)/role$#', $uri, $matches)) {
        (new UserController())->updateRole((int)$matches[1]);
    }
});
