<?php

namespace App\Models;

use PDO;

/**
 * Archive Database Model for CampusPulse API
 */
class Archive extends BaseModel
{
    protected static string $table = 'archives';
    protected static string $primaryKey = 'id';

    /**
     * List Archived Events with Metadata
     */
    public static function getArchivedEvents(): array
    {
        $sql = "SELECT a.*, 
                       e.title AS event_title, e.event_date, e.category, e.venue,
                       u.name AS archived_by_name
                FROM " . static::$table . " a
                LEFT JOIN events e ON a.event_id = e.id
                LEFT JOIN users u ON a.archived_by = u.id
                ORDER BY a.archived_at DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
