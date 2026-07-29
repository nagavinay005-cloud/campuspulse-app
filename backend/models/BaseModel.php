<?php

namespace App\Models;

use App\Config\Database;
use PDO;

/**
 * Abstract Base Model for CampusPulse API with PDO Prepared Statements
 */
abstract class BaseModel
{
    protected static string $table = '';
    protected static string $primaryKey = 'id';

    /**
     * Get PDO Connection
     */
    public static function db(): PDO
    {
        return Database::getConnection();
    }

    /**
     * Fetch All Records
     */
    public static function all(): array
    {
        $stmt = static::db()->prepare("SELECT * FROM " . static::$table);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * Find Record by Primary Key
     */
    public static function find(mixed $id): ?array
    {
        $stmt = static::db()->prepare("SELECT * FROM " . static::$table . " WHERE " . static::$primaryKey . " = :id LIMIT 1");
        $stmt->execute(['id' => $id]);
        $record = $stmt->fetch();
        return $record ?: null;
    }

    /**
     * Insert New Record
     */
    public static function insert(array $data): string|false
    {
        $fields = array_keys($data);
        $placeholders = array_map(fn($f) => ":{$f}", $fields);

        $sql = "INSERT INTO " . static::$table . " (" . implode(', ', $fields) . ") VALUES (" . implode(', ', $placeholders) . ")";
        $stmt = static::db()->prepare($sql);
        $success = $stmt->execute($data);

        return $success ? static::db()->lastInsertId() : false;
    }

    /**
     * Update Record by Primary Key
     */
    public static function update(mixed $id, array $data): bool
    {
        $fields = array_keys($data);
        $setClause = implode(', ', array_map(fn($f) => "{$f} = :{$f}", $fields));

        $data[static::$primaryKey] = $id;
        $sql = "UPDATE " . static::$table . " SET {$setClause} WHERE " . static::$primaryKey . " = :" . static::$primaryKey;

        $stmt = static::db()->prepare($sql);
        return $stmt->execute($data);
    }

    /**
     * Delete Record by Primary Key
     */
    public static function delete(mixed $id): bool
    {
        $stmt = static::db()->prepare("DELETE FROM " . static::$table . " WHERE " . static::$primaryKey . " = :id");
        return $stmt->execute(['id' => $id]);
    }
}
