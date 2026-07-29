<?php

namespace App\Services;

use App\Config\Database;
use App\Models\AuditLog;
use Exception;

/**
 * Global Search & Advanced Multi-Module Filtering Service
 */
class SearchService extends BaseService
{
    /**
     * Centralized Categorized Global Search Across All Modules
     */
    public static function globalSearch(string $query, array $currentUser): array
    {
        $q = strtolower(trim($query));
        $userId = (int)($currentUser['user_id'] ?? 0);
        $role   = $currentUser['role'] ?? 'Student';

        if (empty($q)) {
            return [
                'events'        => [],
                'announcements' => [],
                'users'         => [],
                'certificates'  => [],
                'total_results' => 0,
            ];
        }

        // Audit Log
        AuditLog::log($userId, "GLOBAL_SEARCH: Queried '{$q}'", "Search");

        $db = Database::getConnection();
        $searchTerm = '%' . $q . '%';

        // 1. Search Events
        $eventWhere = "(LOWER(e.title) LIKE :q1 OR LOWER(e.description) LIKE :q2 OR LOWER(e.venue) LIKE :q3 OR LOWER(e.category) LIKE :q4)";
        if ($role === 'Student') {
            $eventWhere .= " AND e.status = 'Published'";
        } elseif ($role === 'Organizer') {
            $eventWhere .= " AND (e.status = 'Published' OR e.organizer_id = {$userId})";
        }

        $sqlEv = "SELECT e.id, e.title, e.category, e.venue, e.event_date, e.status, d.name AS department_name
                  FROM events e
                  LEFT JOIN departments d ON e.department_id = d.id
                  WHERE {$eventWhere}
                  ORDER BY e.id DESC LIMIT 10";
        $stmtEv = $db->prepare($sqlEv);
        $stmtEv->execute(['q1' => $searchTerm, 'q2' => $searchTerm, 'q3' => $searchTerm, 'q4' => $searchTerm]);
        $events = $stmtEv->fetchAll();

        // 2. Search Announcements
        $sqlAnn = "SELECT a.id, a.title, a.description, a.status, a.created_at
                   FROM announcements a
                   WHERE (LOWER(a.title) LIKE :q1 OR LOWER(a.description) LIKE :q2) AND a.status = 'Active'
                   ORDER BY a.id DESC LIMIT 10";
        $stmtAnn = $db->prepare($sqlAnn);
        $stmtAnn->execute(['q1' => $searchTerm, 'q2' => $searchTerm]);
        $announcements = $stmtAnn->fetchAll();

        // 3. Search Users (Admin / Organizer view)
        $users = [];
        if ($role !== 'Student') {
            $sqlUsers = "SELECT u.id, u.name, u.email, u.role, u.department_id
                         FROM users u
                         WHERE (LOWER(u.name) LIKE :q1 OR LOWER(u.email) LIKE :q2)
                         ORDER BY u.id DESC LIMIT 10";
            $stmtUsers = $db->prepare($sqlUsers);
            $stmtUsers->execute(['q1' => $searchTerm, 'q2' => $searchTerm]);
            $users = $stmtUsers->fetchAll();
        }

        // 4. Search Certificates
        $certWhere = "(LOWER(c.certificate_number) LIKE :q1 OR LOWER(u.name) LIKE :q2 OR LOWER(e.title) LIKE :q3)";
        if ($role === 'Student') {
            $certWhere .= " AND c.student_id = {$userId}";
        }

        $sqlCert = "SELECT c.id, c.certificate_number, c.status, c.generated_at, e.title AS event_title, u.name AS student_name
                    FROM certificates c
                    LEFT JOIN events e ON c.event_id = e.id
                    LEFT JOIN users u ON c.student_id = u.id
                    WHERE {$certWhere}
                    ORDER BY c.id DESC LIMIT 10";
        $stmtCert = $db->prepare($sqlCert);
        $stmtCert->execute(['q1' => $searchTerm, 'q2' => $searchTerm, 'q3' => $searchTerm]);
        $certificates = $stmtCert->fetchAll();

        $totalResults = count($events) + count($announcements) + count($users) + count($certificates);

        return [
            'events'        => $events,
            'announcements' => $announcements,
            'users'         => $users,
            'certificates'  => $certificates,
            'total_results' => $totalResults,
        ];
    }

    /**
     * Search Events Module with Filtering & Pagination
     */
    public static function searchEvents(array $queryParams, array $currentUser): array
    {
        $db     = Database::getConnection();
        $q      = strtolower(trim($queryParams['q'] ?? ''));
        $page   = max(1, (int)($queryParams['page'] ?? 1));
        $limit  = max(1, min(100, (int)($queryParams['limit'] ?? 10)));
        $offset = ($page - 1) * $limit;

        $where  = ["1=1"];
        $params = [];

        if (!empty($q)) {
            $where[] = "(LOWER(e.title) LIKE :q1 OR LOWER(e.description) LIKE :q2 OR LOWER(e.venue) LIKE :q3)";
            $params['q1'] = '%' . $q . '%';
            $params['q2'] = '%' . $q . '%';
            $params['q3'] = '%' . $q . '%';
        }

        if (!empty($queryParams['category']) && $queryParams['category'] !== 'All') {
            $where[] = "e.category = :category";
            $params['category'] = $queryParams['category'];
        }

        if (!empty($queryParams['status']) && $queryParams['status'] !== 'All') {
            $where[] = "e.status = :status";
            $params['status'] = $queryParams['status'];
        }

        $whereSql = implode(" AND ", $where);

        $countStmt = $db->prepare("SELECT COUNT(*) FROM events e WHERE {$whereSql}");
        $countStmt->execute($params);
        $total = (int)$countStmt->fetchColumn();

        $sql = "SELECT e.*, d.name AS department_name FROM events e LEFT JOIN departments d ON e.department_id = d.id WHERE {$whereSql} ORDER BY e.id DESC LIMIT {$limit} OFFSET {$offset}";
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        $events = $stmt->fetchAll();

        return [
            'events'     => $events,
            'total'      => $total,
            'page'       => $page,
            'limit'      => $limit,
            'total_pages'=> ceil($total / $limit),
        ];
    }

    /**
     * Search Users Module with Filtering & Pagination
     */
    public static function searchUsers(array $queryParams, array $currentUser): array
    {
        $db     = Database::getConnection();
        $q      = strtolower(trim($queryParams['q'] ?? ''));
        $page   = max(1, (int)($queryParams['page'] ?? 1));
        $limit  = max(1, min(100, (int)($queryParams['limit'] ?? 10)));
        $offset = ($page - 1) * $limit;

        $where  = ["1=1"];
        $params = [];

        if (!empty($q)) {
            $where[] = "(LOWER(u.name) LIKE :q1 OR LOWER(u.email) LIKE :q2)";
            $params['q1'] = '%' . $q . '%';
            $params['q2'] = '%' . $q . '%';
        }

        if (!empty($queryParams['role']) && $queryParams['role'] !== 'All') {
            $where[] = "u.role = :role";
            $params['role'] = $queryParams['role'];
        }

        $whereSql = implode(" AND ", $where);

        $countStmt = $db->prepare("SELECT COUNT(*) FROM users u WHERE {$whereSql}");
        $countStmt->execute($params);
        $total = (int)$countStmt->fetchColumn();

        $sql = "SELECT u.id, u.name, u.email, u.role, u.status, u.created_at FROM users u WHERE {$whereSql} ORDER BY u.id DESC LIMIT {$limit} OFFSET {$offset}";
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        $users = $stmt->fetchAll();

        return [
            'users'      => $users,
            'total'      => $total,
            'page'       => $page,
            'limit'      => $limit,
            'total_pages'=> ceil($total / $limit),
        ];
    }
}
