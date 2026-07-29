<?php

namespace App\Routes;

use App\Controllers\AuditLogController;

/**
 * Audit Log REST API Endpoint Definitions
 */

// List System Audit Logs (Admin Only)
Router::get('/audit-logs', [AuditLogController::class, 'index']);
