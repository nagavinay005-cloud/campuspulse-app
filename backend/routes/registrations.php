<?php

namespace App\Routes;

use App\Controllers\RegistrationController;

/**
 * Event Registration REST API Endpoint Definitions
 */

// List All Registrations (Admin / Organizer)
Router::get('/registrations', [RegistrationController::class, 'index']);

// Logged-in Student Registrations & Entry Passes
Router::get('/students/me/registrations', [RegistrationController::class, 'myRegistrations']);

// Specific Registration Detail by ID
Router::get('/registrations/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/registrations/(\d+)$#', $uri, $matches)) {
        (new RegistrationController())->show((int)$matches[1]);
    }
});

// Event Specific Participant Registrations Roster
Router::get('/events/{id}/registrations', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/registrations$#', $uri, $matches)) {
        (new RegistrationController())->eventRegistrations((int)$matches[1]);
    }
});

// Student Register for Event
Router::post('/events/{id}/register', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/register$#', $uri, $matches)) {
        (new RegistrationController())->register((int)$matches[1]);
    }
});

// Student Cancel Event Registration
Router::delete('/events/{id}/cancel-registration', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/events/(\d+)/cancel-registration$#', $uri, $matches)) {
        (new RegistrationController())->cancel((int)$matches[1]);
    }
});

// Approve Registration
Router::patch('/registrations/{id}/approve', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/registrations/(\d+)/approve$#', $uri, $matches)) {
        (new RegistrationController())->approve((int)$matches[1]);
    }
});

// Reject Registration
Router::patch('/registrations/{id}/reject', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/registrations/(\d+)/reject$#', $uri, $matches)) {
        (new RegistrationController())->reject((int)$matches[1]);
    }
});
