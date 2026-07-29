<?php

namespace App\Config;

use PDO;
use PDOException;

/**
 * Singleton PDO Database Connection Manager for CampusPulse
 */
class Database
{
    private static ?PDO $connection = null;

    /**
     * Get Singleton PDO Instance
     */
    public static function getConnection(): PDO
    {
        if (self::$connection === null) {
            // Read from DB_ env vars first, then standard cloud database vars (MYSQL_ or standard), defaulting to localhost
            $host = $_ENV['DB_HOST'] ?? getenv('DB_HOST') ?: $_ENV['MYSQLHOST'] ?? getenv('MYSQLHOST') ?: '127.0.0.1';
            $port = $_ENV['DB_PORT'] ?? getenv('DB_PORT') ?: $_ENV['MYSQLPORT'] ?? getenv('MYSQLPORT') ?: '3306';
            $db   = $_ENV['DB_DATABASE'] ?? getenv('DB_DATABASE') ?: $_ENV['MYSQLDATABASE'] ?? getenv('MYSQLDATABASE') ?: 'campuspulse';
            $user = $_ENV['DB_USERNAME'] ?? getenv('DB_USERNAME') ?: $_ENV['MYSQLUSER'] ?? getenv('MYSQLUSER') ?: 'root';
            $pass = $_ENV['DB_PASSWORD'] ?? getenv('DB_PASSWORD') ?: $_ENV['MYSQLPASSWORD'] ?? getenv('MYSQLPASSWORD') ?: '';
            $charset = $_ENV['DB_CHARSET'] ?? getenv('DB_CHARSET') ?: 'utf8mb4';

            $dsn = "mysql:host={$host};port={$port};dbname={$db};charset={$charset}";

            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            try {
                self::$connection = new PDO($dsn, $user, $pass, $options);
            } catch (PDOException $e) {
                // Return fallback connection or throw runtime error
                throw new PDOException("Database Connection Error: " . $e->getMessage(), (int)$e->getCode());
            }
        }

        return self::$connection;
    }
}
