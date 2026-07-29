<?php

namespace App\Controllers;

use App\Services\UserService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * User Management REST API Controller for CampusPulse
 */
class UserController extends BaseController
{
    /**
     * GET /api/v1/users/statistics
     * User Telemetry Counts
     */
    public function statistics(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $stats = UserService::getStatistics($currentUser);
            Response::success($stats, "User statistics retrieved.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 500;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/users
     * List Paginated Users with Filters & Search
     */
    public function index(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = UserService::getAllUsers($_GET, $currentUser);
            Response::success($result, "Users retrieved successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 500;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/users/{id}
     * Get Detailed User Profile by ID
     */
    public function show(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $user = UserService::getUserById($id, $currentUser);
            Response::success($user, "User details retrieved.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 404;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * POST /api/v1/users
     * Admin Create New User
     */
    public function store(): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $validated = $this->validateInput($input, [
            'name'  => 'required|min:2',
            'email' => 'required|email',
            'role'  => 'required|in:Student,Organizer,Admin',
        ]);

        try {
            $user = UserService::createUser($input, $currentUser);
            Response::created($user, "User account created successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * PUT /api/v1/users/{id}
     * Update User Profile
     */
    public function update(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        try {
            $user = UserService::updateUser($id, $input, $currentUser);
            Response::success($user, "User profile updated successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * DELETE /api/v1/users/{id}
     * Admin Delete User Account
     */
    public function destroy(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            UserService::deleteUser($id, $currentUser);
            Response::success(null, "User account deleted successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * PATCH /api/v1/users/{id}/status
     * Admin Change Account Status
     */
    public function updateStatus(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $validated = $this->validateInput($input, [
            'status' => 'required|in:Active,Inactive,Suspended,Blocked,Pending',
        ]);

        try {
            $user = UserService::updateStatus($id, $validated['status'], $currentUser);
            Response::success($user, "Account status updated to {$validated['status']}.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * PATCH /api/v1/users/{id}/role
     * Admin Change User Role
     */
    public function updateRole(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $validated = $this->validateInput($input, [
            'role' => 'required|in:Student,Organizer,Admin',
        ]);

        try {
            $user = UserService::updateRole($id, $validated['role'], $currentUser);
            Response::success($user, "User role updated to {$validated['role']}.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }
}
