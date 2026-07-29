<?php

namespace App\Services;

use App\Models\User;
use Exception;

/**
 * User Management Business Logic Service for CampusPulse API
 */
class UserService extends BaseService
{
    /**
     * Get Paginated Users List (Admin Only for Full Access)
     */
    public static function getAllUsers(array $queryParams, array $currentUser): array
    {
        // Enforce Admin Access for Full User Directory Listing
        if ($currentUser['role'] !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can query the full user directory.", 403);
        }

        $page   = isset($queryParams['page']) ? (int)$queryParams['page'] : 1;
        $limit  = isset($queryParams['limit']) ? (int)$queryParams['limit'] : 20;

        $filters = [
            'search'        => $queryParams['search'] ?? null,
            'role'          => $queryParams['role'] ?? null,
            'status'        => $queryParams['status'] ?? null,
            'department_id' => $queryParams['department_id'] ?? null,
            'year'          => $queryParams['year'] ?? null,
        ];

        return User::getPaginatedUsers($filters, $page, $limit);
    }

    /**
     * Get User Details by ID (Self or Admin)
     */
    public static function getUserById(int $targetUserId, array $currentUser): array
    {
        $currentUserId = (int)$currentUser['user_id'];
        $role          = $currentUser['role'];

        // Enforce Self or Admin Access
        if ($role !== 'Admin' && $currentUserId !== $targetUserId) {
            throw new Exception("Forbidden: You cannot view profile details for other users.", 403);
        }

        $user = User::getUserWithDepartment($targetUserId);
        if (!$user) {
            throw new Exception("User not found.", 404);
        }

        unset($user['password']);
        return $user;
    }

    /**
     * Create New User Account (Admin Only)
     */
    public static function createUser(array $data, array $currentUser): array
    {
        if ($currentUser['role'] !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can create new user accounts.", 403);
        }

        // Check Email Uniqueness
        $existing = User::findByEmail($data['email']);
        if ($existing) {
            throw new Exception("User account with email '{$data['email']}' already exists.", 422);
        }

        $newUser = User::createUser($data);
        if (!$newUser) {
            throw new Exception("Failed to create user account.", 500);
        }

        unset($newUser['password']);
        return $newUser;
    }

    /**
     * Update User Profile (Self or Admin)
     */
    public static function updateUser(int $targetUserId, array $data, array $currentUser): array
    {
        $currentUserId = (int)$currentUser['user_id'];
        $role          = $currentUser['role'];

        if ($role !== 'Admin' && $currentUserId !== $targetUserId) {
            throw new Exception("Forbidden: You can only edit your own user profile.", 403);
        }

        $user = User::find($targetUserId);
        if (!$user) {
            throw new Exception("User not found.", 404);
        }

        // Prevent Non-Admin from changing Role or Status
        if ($role !== 'Admin') {
            unset($data['role'], $data['status'], $data['email']);
        }

        // If email is changing, check uniqueness
        if (!empty($data['email']) && strtolower(trim($data['email'])) !== strtolower($user['email'])) {
            $existing = User::findByEmail($data['email']);
            if ($existing && (int)$existing['id'] !== $targetUserId) {
                throw new Exception("Email address is already in use by another account.", 422);
            }
        }

        // Handle Password Update if provided
        if (!empty($data['password'])) {
            $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        }

        User::update($targetUserId, $data);
        $updatedUser = User::getUserWithDepartment($targetUserId);
        unset($updatedUser['password']);

        return $updatedUser;
    }

    /**
     * Delete User Account (Admin Only)
     */
    public static function deleteUser(int $targetUserId, array $currentUser): bool
    {
        if ($currentUser['role'] !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can delete user accounts.", 403);
        }

        if ((int)$currentUser['user_id'] === $targetUserId) {
            throw new Exception("Bad Request: You cannot delete your own administrative account.", 400);
        }

        $user = User::find($targetUserId);
        if (!$user) {
            throw new Exception("User not found.", 404);
        }

        return User::delete($targetUserId);
    }

    /**
     * Update Account Status (Admin Only)
     */
    public static function updateStatus(int $targetUserId, string $status, array $currentUser): array
    {
        if ($currentUser['role'] !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can change user account status.", 403);
        }

        $validStatuses = ['Active', 'Inactive', 'Suspended', 'Blocked', 'Pending'];
        if (!in_array($status, $validStatuses, true)) {
            throw new Exception("Invalid status value. Must be one of: " . implode(', ', $validStatuses), 422);
        }

        $user = User::find($targetUserId);
        if (!$user) {
            throw new Exception("User not found.", 404);
        }

        User::updateStatus($targetUserId, $status);
        $updatedUser = User::getUserWithDepartment($targetUserId);
        unset($updatedUser['password']);

        return $updatedUser;
    }

    /**
     * Update User Role (Admin Only)
     */
    public static function updateRole(int $targetUserId, string $role, array $currentUser): array
    {
        if ($currentUser['role'] !== 'Admin') {
            throw new Exception("Forbidden: Only administrators can change user roles.", 403);
        }

        $validRoles = ['Student', 'Organizer', 'Admin'];
        if (!in_array($role, $validRoles, true)) {
            throw new Exception("Invalid role value. Must be one of: " . implode(', ', $validRoles), 422);
        }

        $user = User::find($targetUserId);
        if (!$user) {
            throw new Exception("User not found.", 404);
        }

        User::updateRole($targetUserId, $role);
        $updatedUser = User::getUserWithDepartment($targetUserId);
        unset($updatedUser['password']);

        return $updatedUser;
    }

    /**
     * Get Aggregated Telemetry Statistics (Admin & Organizer)
     */
    public static function getStatistics(array $currentUser): array
    {
        return User::getStatistics();
    }
}
