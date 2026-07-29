<?php

namespace App\Controllers;

use App\Services\AuthService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Authentication REST API Controller for CampusPulse
 */
class AuthController extends BaseController
{
    /**
     * POST /api/v1/auth/register
     */
    public function register(): void
    {
        $input = $this->getJsonInput();
        $validated = $this->validateInput($input, [
            'name'     => 'required|min:2',
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        try {
            $result = AuthService::register($validated);
            Response::success($result, "User registered successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * POST /api/v1/auth/login
     * Staff Login (Email + Password)
     */
    public function login(): void
    {
        $input = $this->getJsonInput();
        $validated = $this->validateInput($input, [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        $email = isset($validated['email']) ? trim($validated['email']) : '';
        $password = isset($validated['password']) ? trim($validated['password']) : '';

        try {
            $result = AuthService::login($email, $password, $input['otp_code'] ?? $input['otp'] ?? null);
            Response::success($result, "Login successful.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $statusCode = ($code >= 400 && $code <= 500) ? $code : 401;
            Response::error($e->getMessage(), $statusCode);
        }
    }

    /**
     * POST /api/v1/auth/google-login
     * Student Google OAuth Authentication
     */
    public function googleLogin(): void
    {
        $input = $this->getJsonInput();
        $validated = $this->validateInput($input, [
            'email' => 'required|email',
        ]);

        try {
            $result = AuthService::googleLogin($input);
            Response::success($result, "Student Google authentication successful.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * POST /api/v1/auth/logout
     * Session Invalidation
     */
    public function logout(): void
    {
        // Enforce JWT validation
        $user = JwtMiddleware::handle();
        Response::success(null, "User session successfully logged out.");
    }

    /**
     * POST /api/v1/auth/refresh-token
     * JWT Token Renewal
     */
    public function refreshToken(): void
    {
        $userClaims = JwtMiddleware::handle();
        try {
            $result = AuthService::refreshToken($userClaims);
            Response::success($result, "Token refreshed successfully.");
        } catch (Exception $e) {
            Response::unauthorized($e->getMessage());
        }
    }

    /**
     * POST /api/v1/auth/forgot-password
     * Password Reset Request
     */
    public function forgotPassword(): void
    {
        $input = $this->getJsonInput();
        $validated = $this->validateInput($input, [
            'email' => 'required|email',
        ]);

        $result = AuthService::forgotPassword($validated['email']);
        Response::success($result, "Password reset link generated.");
    }

    /**
     * POST /api/v1/auth/reset-password
     * Password Reset Confirmation
     */
    public function resetPassword(): void
    {
        $input = $this->getJsonInput();
        $validated = $this->validateInput($input, [
            'email'        => 'required|email',
            'token'        => 'required',
            'new_password' => 'required|min:6',
        ]);

        try {
            AuthService::resetPassword($validated['email'], $validated['token'], $validated['new_password']);
            Response::success(null, "Password reset successfully. You may now log in with your new password.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/auth/me
     * Current Authenticated User Profile
     */
    public function me(): void
    {
        $userClaims = JwtMiddleware::handle();
        $userId = (int)($userClaims['user_id'] ?? 0);

        try {
            $profile = AuthService::getProfile($userId);
            Response::success($profile, "Current user profile retrieved.");
        } catch (Exception $e) {
            Response::notFound($e->getMessage());
        }
    }
}
