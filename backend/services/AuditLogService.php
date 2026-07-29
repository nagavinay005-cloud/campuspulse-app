<?php

namespace App\Services;

use App\Models\AuditLog;
use App\Models\BaseModel;
use Exception;

/**
 * Audit Log Management Service for CampusPulse Backend
 */
class AuditLogService extends BaseService
{
    /**
     * Fetch Paginated & Filtered Audit Logs (Admin Only)
     */
    public static function getAuditLogs(array $queryParams, array $currentUser): array
    {
        $role = $currentUser['role'] ?? 'Student';
        if ($role !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can view audit logs.", 403);
        }

        $db     = AuditLog::db();
        $page   = max(1, (int)($queryParams['page'] ?? 1));
        $limit  = max(1, min(100, (int)($queryParams['limit'] ?? 20)));
        $offset = ($page - 1) * $limit;

        $where  = ["1=1"];
        $params = [];

        if (!empty($queryParams['module']) && $queryParams['module'] !== 'All') {
            $where[] = "a.module = :module";
            $params['module'] = $queryParams['module'];
        }

        if (!empty($queryParams['search'])) {
            $where[] = "(a.action LIKE :search OR u.name LIKE :search OR u.email LIKE :search)";
            $params['search'] = '%' . $queryParams['search'] . '%';
        }

        $whereSql = implode(" AND ", $where);

        $countStmt = $db->prepare("SELECT COUNT(*) FROM audit_logs a LEFT JOIN users u ON a.user_id = u.id WHERE {$whereSql}");
        $countStmt->execute($params);
        $total = (int)$countStmt->fetchColumn();

        $sql = "SELECT a.*, u.name AS user_name, u.email AS user_email, u.role AS user_role
                FROM audit_logs a
                LEFT JOIN users u ON a.user_id = u.id
                WHERE {$whereSql}
                ORDER BY a.id DESC
                LIMIT {$limit} OFFSET {$offset}";

        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        $logs = $stmt->fetchAll();

        return [
            'logs'       => $logs,
            'total'      => $total,
            'page'       => $page,
            'limit'      => $limit,
            'total_pages'=> ceil($total / $limit),
        ];
    }
}
