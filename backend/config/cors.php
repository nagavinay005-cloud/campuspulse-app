<?php

namespace App\Config;

/**
 * Cross-Origin Resource Sharing (CORS) Configuration & Handler
 */
class Cors
{
    public static function handle(): void
    {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
        // Echo back incoming HTTP_ORIGIN to allow access from any frontend (Vercel, Localhost, etc.) while supporting credentials mode
        if ($origin !== '*') {
            header("Access-Control-Allow-Origin: {$origin}");
        } else {
            header("Access-Control-Allow-Origin: *");
        }

        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Max-Age: 86400");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-API-KEY");

        // Handle OPTIONS preflight requests immediately
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }
}
