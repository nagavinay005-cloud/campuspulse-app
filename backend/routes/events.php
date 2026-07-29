<?php

namespace App\Routes;

use App\Controllers\EventController;

/**
 * Event Management REST API Endpoint Definitions
 */

// List Paginated Events
Router::get('/events', [EventController::class, 'index']);

// List Admin Pending Approval Events
Router::get('/admin/events/pending', [EventController::class, 'pending']);

// Create Event
Router::post('/events', [EventController::class, 'store']);

// Event Details, Update, Delete Routines
Router::get('/events/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/([\w\-]+)$#', $uri, $matches)) {
        (new EventController())->show($matches[1]);
    }
});

Router::put('/events/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)$#', $uri, $matches)) {
        (new EventController())->update((int)$matches[1]);
    }
});

Router::delete('/events/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)$#', $uri, $matches)) {
        (new EventController())->destroy((int)$matches[1]);
    }
});

// Event Status Transition Actions
Router::patch('/events/{id}/submit', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/submit$#', $uri, $matches)) {
        (new EventController())->submit((int)$matches[1]);
    }
});

Router::patch('/events/{id}/approve', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/approve$#', $uri, $matches)) {
        (new EventController())->approve((int)$matches[1]);
    }
});

Router::patch('/events/{id}/reject', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/reject$#', $uri, $matches)) {
        (new EventController())->reject((int)$matches[1]);
    }
});

Router::patch('/events/{id}/publish', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/publish$#', $uri, $matches)) {
        (new EventController())->publish((int)$matches[1]);
    }
});

Router::patch('/events/{id}/cancel', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/cancel$#', $uri, $matches)) {
        (new EventController())->cancel((int)$matches[1]);
    }
});

Router::patch('/events/{id}/archive', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/archive$#', $uri, $matches)) {
        (new EventController())->archive((int)$matches[1]);
    }
});

Router::patch('/events/{id}/restore', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/restore$#', $uri, $matches)) {
        (new EventController())->restore((int)$matches[1]);
    }
});
