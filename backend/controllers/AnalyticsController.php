<?php

namespace App\Controllers;

use App\Services\AnalyticsService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Analytics & System Reporting REST API Controller for CampusPulse
 */
class AnalyticsController extends BaseController
{
    /**
     * GET /api/v1/analytics/overview
     * Command Center Telemetry Metrics
     */
    public function overview(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $data = AnalyticsService::getOverviewMetrics($currentUser);
            Response::success($data, "Command Center analytics overview retrieved.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/analytics/departments
     * Department Comparison Analytics
     */
    public function departments(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $data = AnalyticsService::getDepartmentMetrics($currentUser);
            Response::success($data, "Department comparison analytics retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/reports/dashboard
     */
    public function dashboard(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $data = AnalyticsService::getDashboardReport($currentUser);
            Response::success($data, "Dashboard report metrics retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/reports/events
     */
    public function events(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $data = AnalyticsService::getEventsReport($currentUser);
            Response::success($data, "Events analytics report retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/reports/students
     */
    public function students(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $data = AnalyticsService::getStudentsReport($currentUser);
            Response::success($data, "Students analytics report retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/reports/export/csv
     */
    public function exportCsv(): void
    {
        $currentUser = JwtMiddleware::handle();
        $type = $_GET['type'] ?? 'events';
        try {
            $csv = AnalyticsService::exportCsv($type, $currentUser);
            header('Content-Type: text/csv; charset=utf-8');
            header('Content-Disposition: attachment; filename="' . $type . '_report.csv"');
            echo $csv;
            exit();
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
