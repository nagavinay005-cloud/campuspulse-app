<?php

namespace App\Routes;

use App\Controllers\AnalyticsController;

/**
 * Analytics REST API Endpoint Definitions
 */

// Command Center System Telemetry Metrics
Router::get('/analytics/overview', [AnalyticsController::class, 'overview']);
Router::get('/analytics/departments', [AnalyticsController::class, 'departments']);

// Reports Module API Endpoints
Router::get('/reports/dashboard', [AnalyticsController::class, 'dashboard']);
Router::get('/reports/events', [AnalyticsController::class, 'events']);
Router::get('/reports/students', [AnalyticsController::class, 'students']);
Router::get('/reports/attendance', [AnalyticsController::class, 'events']);
Router::get('/reports/certificates', [AnalyticsController::class, 'overview']);
Router::get('/reports/departments', [AnalyticsController::class, 'departments']);

// Export Endpoints
Router::get('/reports/export/csv', [AnalyticsController::class, 'exportCsv']);
Router::get('/reports/export/pdf', [AnalyticsController::class, 'exportCsv']);
Router::get('/reports/export/excel', [AnalyticsController::class, 'exportCsv']);
