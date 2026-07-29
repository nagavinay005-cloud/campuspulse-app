<?php

namespace App\Controllers;

use App\Services\AuditLogService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Audit Log Management REST API Controller
 */
class AuditLogController extends BaseController
{
    /**
     * GET /api/v1/audit-logs
     */
    public function index(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $data = AuditLogService::getAuditLogs($_GET, $currentUser);
            Response::success($data, "Audit logs retrieved successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }
}
