<?php

namespace App\Middleware;

use App\Helpers\JWT;
use App\Helpers\Response;

/**
 * JWT Authentication Middleware for Inspecting & Validating Bearer Tokens
 */
class JwtMiddleware
{
    /**
     * Helper to retrieve authorization header dynamically across web servers
     */
    private static function getAuthHeader(): ?string
    {
        $headers = [];
        if (function_exists('getallheaders')) {
            $headers = getallheaders();
        } elseif (function_exists('apache_request_headers')) {
            $headers = apache_request_headers();
        }

        $normalizedHeaders = [];
        foreach ($headers as $key => $value) {
            $normalizedHeaders[strtolower($key)] = $value;
        }

        return $normalizedHeaders['authorization'] ?? 
               $_SERVER['HTTP_AUTHORIZATION'] ?? 
               $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? 
               $_SERVER['HTTP_X_AUTHORIZATION'] ??
               null;
    }

    /**
     * Handle Authorization Header & Verify JWT Token (Required)
     */
    public static function handle(): ?array
    {
        $authHeader = self::getAuthHeader();

        if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            Response::unauthorized("Authorization header missing or improperly formatted as 'Bearer <token>'.");
            return null;
        }

        $token = $matches[1];
        $payload = JWT::decode($token);

        if (!$payload) {
            Response::unauthorized("Invalid or expired JWT token. Please sign in again.");
            return null;
        }

        // Expose verified user claims to request scope
        $GLOBALS['auth_user'] = $payload;
        return $payload;
    }

    /**
     * Optional JWT: returns authenticated user if token present, otherwise guest user.
     * Use this for public endpoints that serve different data based on role.
     */
    public static function handleOptional(): array
    {
        $authHeader = self::getAuthHeader();

        if ($authHeader && preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            $payload = JWT::decode($matches[1]);
            if ($payload) {
                $GLOBALS['auth_user'] = $payload;
                return $payload;
            }
        }

        // Return a guest/student context — can only see Published events
        return ['user_id' => 0, 'role' => 'Student', 'email' => 'guest@campus.edu'];
    }
}
