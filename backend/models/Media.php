<?php

namespace App\Models;

use PDO;

/**
 * Media Database Model for CampusPulse API
 */
class Media extends BaseModel
{
    protected static string $table = 'media';
    protected static string $primaryKey = 'id';

    /**
     * Create Media Record
     */
    public static function createMedia(array $data): ?array
    {
        $sql = "INSERT INTO " . static::$table . " 
                (file_name, original_name, file_type, mime_type, file_size, storage_path, uploaded_by, module, reference_id, created_at)
                VALUES (:file_name, :original_name, :file_type, :mime_type, :file_size, :storage_path, :uploaded_by, :module, :reference_id, NOW())";

        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute([
            'file_name'    => $data['file_name'],
            'original_name'=> $data['original_name'],
            'file_type'    => $data['file_type'] ?? 'image',
            'mime_type'    => $data['mime_type'],
            'file_size'    => $data['file_size'],
            'storage_path' => $data['storage_path'],
            'uploaded_by'  => $data['uploaded_by'],
            'module'       => $data['module'] ?? 'events',
            'reference_id' => $data['reference_id'] ?? null,
        ]);

        if ($success) {
            $id = (int)static::db()->lastInsertId();
            return static::find($id);
        }

        return null;
    }

    /**
     * Get Media by Module
     */
    public static function getByModule(string $module): array
    {
        $sql = "SELECT m.*, u.name AS uploader_name FROM " . static::$table . " m
                LEFT JOIN users u ON m.uploaded_by = u.id
                WHERE m.module = :module
                ORDER BY m.id DESC";

        $stmt = static::db()->prepare($sql);
        $stmt->execute(['module' => strtolower(trim($module))]);
        return $stmt->fetchAll();
    }
}
