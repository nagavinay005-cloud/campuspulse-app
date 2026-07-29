<?php

namespace App\Routes;

use App\Controllers\ArchiveController;

/**
 * Archive & Audit Log REST API Endpoint Definitions
 */

// List Archived Events & Announcements
Router::get('/archives', [ArchiveController::class, 'archives']);
Router::get('/archive/events', [ArchiveController::class, 'archivedEvents']);
Router::get('/archive/announcements', [ArchiveController::class, 'archivedAnnouncements']);

// Restore Actions
Router::post('/archive/events/{id}/restore', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/archive/events/(\d+)/restore$#', $uri, $matches)) {
        (new ArchiveController())->restoreEvent((int)$matches[1]);
    }
});

Router::post('/archive/announcements/{id}/restore', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/archive/announcements/(\d+)/restore$#', $uri, $matches)) {
        (new ArchiveController())->restoreAnnouncement((int)$matches[1]);
    }
});

// Trigger Auto-Archive Execution
Router::post('/archive/process', [ArchiveController::class, 'processAutoArchive']);

// List System Security Audit Logs
Router::get('/audit-logs', [ArchiveController::class, 'auditLogs']);
