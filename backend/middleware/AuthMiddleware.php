<?php

namespace App\Middleware;

use App\Helpers\Response;

/**
 * Auth Middleware for Enforcing Valid User Claims
 */
class AuthMiddleware
{
    /**
     * Enforce Authenticated User Session
     */
    public static function handle(): array
    {
        $user = $GLOBALS['auth_user'] ?? JwtMiddleware::handle();

        if (!$user) {
            Response::unauthorized("User authentication required to access this endpoint.");
        }

        return $user;
    }
}
