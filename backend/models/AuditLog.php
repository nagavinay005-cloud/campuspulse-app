<?php

namespace App\Models;

/**
 * Audit Log Model for CampusPulse Security Auditing
 */
class AuditLog extends BaseModel
{
    protected static string $table = 'audit_logs';
    protected static string $primaryKey = 'id';

    /**
     * Record System Audit Log Entry
     */
    public static function log(?int $userId, string $action, string $module = 'Event', ?string $ipAddress = null, ?string $device = null): bool
    {
        $ip = $ipAddress ?? $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        $ua = $device ?? $_SERVER['HTTP_USER_AGENT'] ?? 'API Client';

        $sql = "INSERT INTO " . static::$table . " (user_id, action, module, ip_address, device, created_at) 
                VALUES (:user_id, :action, :module, :ip_address, :device, NOW())";

        $stmt = static::db()->prepare($sql);
        return $stmt->execute([
            'user_id'    => $userId,
            'action'     => $action,
            'module'     => $module,
            'ip_address' => $ip,
            'device'     => substr($ua, 0, 255),
        ]);
    }
}
