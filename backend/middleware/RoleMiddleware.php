<?php

namespace App\Middleware;

use App\Helpers\Response;

/**
 * Role-Based Access Control (RBAC) Middleware for CampusPulse API
 */
class RoleMiddleware
{
    /**
     * Enforce Required Roles (e.g. Student, Organizer, Admin)
     */
    public static function handle(array|string $allowedRoles): array
    {
        $user = AuthMiddleware::handle();
        $roles = is_array($allowedRoles) ? $allowedRoles : [$allowedRoles];
        $userRole = $user['role'] ?? null;

        if (!$userRole || !in_array($userRole, $roles, true)) {
            Response::forbidden("Forbidden: Your role ({$userRole}) does not have permission for this resource.");
        }

        return $user;
    }
}
