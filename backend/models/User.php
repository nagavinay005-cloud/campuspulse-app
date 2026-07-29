<?php

namespace App\Models;

use PDO;

/**
 * User Database Model for CampusPulse API
 */
class User extends BaseModel
{
    protected static string $table = 'users';
    protected static string $primaryKey = 'id';

    /**
     * Find User Record by Email
     */
    public static function findByEmail(string $email): ?array
    {
        $stmt = static::db()->prepare("SELECT * FROM " . static::$table . " WHERE email = :email LIMIT 1");
        $stmt->execute(['email' => strtolower(trim($email))]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Find User Record by Google ID
     */
    public static function findByGoogleId(string $googleId): ?array
    {
        $stmt = static::db()->prepare("SELECT * FROM " . static::$table . " WHERE google_id = :google_id LIMIT 1");
        $stmt->execute(['google_id' => $googleId]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Find User Record by UUID
     */
    public static function findByUuid(string $uuid): ?array
    {
        $stmt = static::db()->prepare("SELECT * FROM " . static::$table . " WHERE uuid = :uuid LIMIT 1");
        $stmt->execute(['uuid' => $uuid]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Get Paginated Users with Multi-Field Filtering & Search
     */
    public static function getPaginatedUsers(array $filters = [], int $page = 1, int $limit = 20): array
    {
        $where = [];
        $params = [];

        if (!empty($filters['search'])) {
            $where[] = "(u.name LIKE :search OR u.email LIKE :search OR u.phone LIKE :search OR u.uuid LIKE :search)";
            $params['search'] = '%' . trim($filters['search']) . '%';
        }

        if (!empty($filters['role']) && $filters['role'] !== 'All') {
            $where[] = "u.role = :role";
            $params['role'] = $filters['role'];
        }

        if (!empty($filters['status']) && $filters['status'] !== 'All') {
            $where[] = "u.status = :status";
            $params['status'] = $filters['status'];
        }

        if (!empty($filters['department_id']) && $filters['department_id'] !== 'All') {
            $where[] = "u.department_id = :department_id";
            $params['department_id'] = (int)$filters['department_id'];
        }

        if (!empty($filters['year']) && $filters['year'] !== 'All') {
            $where[] = "u.year = :year";
            $params['year'] = $filters['year'];
        }

        $whereSql = !empty($where) ? "WHERE " . implode(" AND ", $where) : "";

        // Total Count Query
        $countSql = "SELECT COUNT(*) FROM " . static::$table . " u {$whereSql}";
        $stmtCount = static::db()->prepare($countSql);
        $stmtCount->execute($params);
        $totalRecords = (int)$stmtCount->fetchColumn();

        // Data Query
        $offset = max(0, ($page - 1) * $limit);
        $sql = "SELECT u.id, u.uuid, u.name, u.email, u.photo, u.phone, u.role, u.status, u.year, u.department_id,
                       u.created_at, u.updated_at, u.last_login, d.name AS department_name, d.code AS department_code
                FROM " . static::$table . " u
                LEFT JOIN departments d ON u.department_id = d.id
                {$whereSql}
                ORDER BY u.id DESC
                LIMIT {$limit} OFFSET {$offset}";

        $stmt = static::db()->prepare($sql);
        $stmt->execute($params);
        $users = $stmt->fetchAll();

        return [
            'users'        => $users,
            'total'        => $totalRecords,
            'page'         => $page,
            'limit'        => $limit,
            'total_pages'  => (int)ceil($totalRecords / $limit),
        ];
    }

    /**
     * Get Aggregated User Telemetry Statistics
     */
    public static function getStatistics(): array
    {
        $sql = "SELECT 
                    COUNT(CASE WHEN role = 'Student' THEN 1 END) AS total_students,
                    COUNT(CASE WHEN role = 'Organizer' THEN 1 END) AS total_organizers,
                    COUNT(CASE WHEN role = 'Admin' THEN 1 END) AS total_admins,
                    COUNT(CASE WHEN status = 'Active' THEN 1 END) AS active_users,
                    COUNT(CASE WHEN status = 'Blocked' THEN 1 END) AS blocked_users,
                    COUNT(CASE WHEN status = 'Suspended' THEN 1 END) AS suspended_users,
                    COUNT(CASE WHEN status = 'Inactive' THEN 1 END) AS inactive_users,
                    COUNT(CASE WHEN status = 'Pending' THEN 1 END) AS pending_users,
                    COUNT(*) AS total_users
                FROM " . static::$table;

        $stmt = static::db()->prepare($sql);
        $stmt->execute();
        $stats = $stmt->fetch();

        return [
            'total_users'      => (int)($stats['total_users'] ?? 0),
            'total_students'   => (int)($stats['total_students'] ?? 0),
            'total_organizers' => (int)($stats['total_organizers'] ?? 0),
            'total_admins'     => (int)($stats['total_admins'] ?? 0),
            'active_users'     => (int)($stats['active_users'] ?? 0),
            'blocked_users'    => (int)($stats['blocked_users'] ?? 0),
            'suspended_users'  => (int)($stats['suspended_users'] ?? 0),
            'inactive_users'   => (int)($stats['inactive_users'] ?? 0),
            'pending_users'    => (int)($stats['pending_users'] ?? 0),
        ];
    }

    /**
     * Create New User Account (Admin / General)
     */
    public static function createUser(array $data): ?array
    {
        $uuid = 'u-' . strtolower($data['role'] ?? 'std') . '-' . bin2hex(random_bytes(6));
        $hashedPassword = !empty($data['password']) ? password_hash($data['password'], PASSWORD_DEFAULT) : null;

        $sql = "INSERT INTO " . static::$table . " 
                (uuid, name, email, password, google_id, photo, phone, role, status, department_id, year, created_at, updated_at) 
                VALUES (:uuid, :name, :email, :password, :google_id, :photo, :phone, :role, :status, :department_id, :year, NOW(), NOW())";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'uuid'          => $uuid,
            'name'          => $data['name'],
            'email'         => strtolower(trim($data['email'])),
            'password'      => $hashedPassword,
            'google_id'     => $data['google_id'] ?? null,
            'photo'         => $data['photo'] ?? null,
            'phone'         => $data['phone'] ?? null,
            'role'          => $data['role'] ?? 'Student',
            'status'        => $data['status'] ?? 'Active',
            'department_id' => $data['department_id'] ?? 1,
            'year'          => $data['year'] ?? '3rd Year',
        ]);

        if ($success) {
            $id = static::db()->lastInsertId();
            return static::getUserWithDepartment((int)$id);
        }

        return null;
    }

    /**
     * Create New Student User Account
     */
    public static function createStudent(array $data): ?array
    {
        return self::createUser(array_merge($data, ['role' => 'Student', 'status' => 'Active']));
    }

    /**
     * Update Account Status
     */
    public static function updateStatus(int $userId, string $status): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " SET status = :status, updated_at = NOW() WHERE id = :id");
        return $stmt->execute(['id' => $userId, 'status' => $status]);
    }

    /**
     * Update User Role
     */
    public static function updateRole(int $userId, string $role): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " SET role = :role, updated_at = NOW() WHERE id = :id");
        return $stmt->execute(['id' => $userId, 'role' => $role]);
    }

    /**
     * Update Last Login Timestamp
     */
    public static function updateLastLogin(int $userId): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " SET last_login = NOW(), updated_at = NOW() WHERE id = :id");
        return $stmt->execute(['id' => $userId]);
    }

    /**
     * Update Hashed Password
     */
    public static function updatePassword(int $userId, string $hashedPassword): bool
    {
        $stmt = static::db()->prepare("UPDATE " . static::$table . " SET password = :password, updated_at = NOW() WHERE id = :id");
        return $stmt->execute(['id' => $userId, 'password' => $hashedPassword]);
    }

    /**
     * Get User Profile joined with Department Info
     */
    public static function getUserWithDepartment(int $userId): ?array
    {
        $sql = "SELECT u.id, u.uuid, u.name, u.email, u.photo, u.phone, u.role, u.status, u.year, u.department_id,
                       u.created_at, u.updated_at, u.last_login, d.name AS department_name, d.code AS department_code
                FROM " . static::$table . " u
                LEFT JOIN departments d ON u.department_id = d.id
                WHERE u.id = :id LIMIT 1";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['id' => $userId]);
        $record = $stmt->fetch();
        return $record ?: null;
    }
}
