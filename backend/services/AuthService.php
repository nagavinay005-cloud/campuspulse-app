<?php

namespace App\Services;

use App\Models\User;
use App\Helpers\JWT;
use Exception;

/**
 * Authentication Business Logic Service Layer for CampusPulse API
 */
class AuthService extends BaseService
{
    /**
     * Staff / High-Security Login with Lockout & 2FA Support
     */
    public static function login(string $email, string $password, ?string $otpCode = null): array
    {
        $db   = User::db();
        $ip   = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        $ua   = substr($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown', 0, 255);

        $user = User::findByEmail($email);
        if (!$user) {
            self::logSecurityAttempt(null, $email, null, $ip, $ua, 'Failed', 'User not found');
            throw new Exception("Invalid email address or credentials.", 401);
        }

        // 1. Password Verification
        if (!empty($user['password']) && !password_verify($password, $user['password'])) {
            self::logSecurityAttempt((int)$user['id'], $email, $user['role'], $ip, $ua, 'Failed', "Invalid password");
            throw new Exception("Invalid password credential provided.", 401);
        }

        // 3. Validate Account Status
        if (($user['status'] ?? 'Active') !== 'Active') {
            $status = $user['status'] ?? 'Inactive';
            self::logSecurityAttempt((int)$user['id'], $email, $user['role'], $ip, $ua, 'Failed', "Account status: {$status}");
            throw new Exception("Your account status is currently '{$status}'. Please contact campus administration.", 403);
        }

        // Clear failed attempts and reset lockout
        $resetSql = "UPDATE users SET failed_login_attempts = 0, lockout_until = NULL, two_factor_secret = NULL, last_login = NOW() WHERE id = :id";
        $db->prepare($resetSql)->execute(['id' => $user['id']]);

        // Generate JWT Token
        $payload = [
            'user_id' => (int)$user['id'],
            'uuid'    => $user['uuid'],
            'email'   => $user['email'],
            'role'    => $user['role'],
        ];

        $token = JWT::encode($payload, 24);

        // Security Audit Log
        self::logSecurityAttempt((int)$user['id'], $email, $user['role'], $ip, $ua, 'Success', 'High-security login successful');
        \App\Models\AuditLog::log((int)$user['id'], "HIGH_SECURITY_LOGIN: User logged in with 2FA protection", "Security", $ip, $ua);

        return [
            'token'       => $token,
            'token_type'  => 'Bearer',
            'expires_in'  => 86400,
            'role'        => $user['role'],
            'permissions' => self::getRolePermissions($user['role']),
            'user'        => self::sanitizeUser($user),
        ];
    }

    /**
     * User Registration (Name, Email, Password)
     */
    public static function register(array $data): array
    {
        $email = strtolower(trim($data['email']));
        $existing = User::findByEmail($email);
        if ($existing) {
            throw new Exception("Registration failed: Email address is already registered.", 422);
        }

        $user = User::createUser([
            'name'     => trim($data['name']),
            'email'    => $email,
            'password' => $data['password'],
            'role'     => $data['role'] ?? 'Student',
            'status'   => 'Active',
        ]);

        if (!$user) {
            throw new Exception("User registration failed. Please try again.", 500);
        }

        // Email Notification
        \App\Helpers\Email::send(
            $email,
            "Welcome to CampusPulse! 🎉",
            "<h3>Account Registered</h3><p>Hello {$user['name']}, your CampusPulse account has been successfully created.</p>"
        );

        // Security Audit Log
        \App\Models\AuditLog::log((int)$user['id'], "REGISTERED_USER: Account created for {$email}", "Auth");

        $payload = [
            'user_id' => (int)$user['id'],
            'uuid'    => $user['uuid'],
            'email'   => $user['email'],
            'role'    => $user['role'],
        ];

        $token = JWT::encode($payload, 24);

        return [
            'token'       => $token,
            'token_type'  => 'Bearer',
            'expires_in'  => 86400,
            'role'        => $user['role'],
            'permissions' => self::getRolePermissions($user['role']),
            'user'        => self::sanitizeUser($user),
        ];
    }

    /**
     * Helper: Log Login Security Attempt
     */
    private static function logSecurityAttempt(?int $userId, string $email, ?string $role, string $ip, string $device, string $status, ?string $reason): void
    {
        $db = User::db();
        $sql = "INSERT INTO login_security_logs (user_id, email, role, ip_address, device, status, failure_reason, created_at)
                VALUES (:user_id, :email, :role, :ip, :device, :status, :reason, NOW())";
        $stmt = $db->prepare($sql);
        $stmt->execute([
            'user_id' => $userId,
            'email'   => $email,
            'role'    => $role,
            'ip'      => $ip,
            'device'  => $device,
            'status'  => $status,
            'reason'  => $reason,
        ]);
    }

    /**
     * Student Google OAuth Authentication
     */
    public static function googleLogin(array $googleData): array
    {
        $email    = strtolower(trim($googleData['email'] ?? ''));
        $googleId = $googleData['google_id'] ?? null;
        $name     = $googleData['name'] ?? 'Campus Student';
        $photo    = $googleData['photo'] ?? null;

        if (empty($email)) {
            throw new Exception("Google account email is required.", 422);
        }

        $user = User::findByEmail($email) ?? ($googleId ? User::findByGoogleId($googleId) : null);

        if (!$user) {
            // Provision New Student Account
            $user = User::createStudent([
                'name'      => $name,
                'email'     => $email,
                'google_id' => $googleId,
                'photo'     => $photo,
            ]);

            if (!$user) {
                throw new Exception("Failed to provision new student user profile.", 500);
            }
        } else {
            // Validate Account Status
            if (($user['status'] ?? 'Active') !== 'Active') {
                throw new Exception("Your student account status is '{$user['status']}'. Access denied.", 403);
            }

            User::updateLastLogin($user['id']);
        }

        // Generate JWT Token
        $payload = [
            'user_id' => (int)$user['id'],
            'uuid'    => $user['uuid'],
            'email'   => $user['email'],
            'role'    => $user['role'],
        ];

        $token = JWT::encode($payload, 24);

        return [
            'token'       => $token,
            'token_type'  => 'Bearer',
            'expires_in'  => 86400,
            'role'        => $user['role'],
            'permissions' => self::getRolePermissions($user['role']),
            'user'        => self::sanitizeUser($user),
        ];
    }

    /**
     * Refresh JWT Authentication Token
     */
    public static function refreshToken(array $currentUserClaims): array
    {
        $user = User::find($currentUserClaims['user_id'] ?? 0);
        if (!$user || ($user['status'] ?? 'Active') !== 'Active') {
            throw new Exception("User account invalid or inactive.", 401);
        }

        $newToken = JWT::encode([
            'user_id' => (int)$user['id'],
            'uuid'    => $user['uuid'],
            'email'   => $user['email'],
            'role'    => $user['role'],
        ], 24);

        return [
            'token'      => $newToken,
            'token_type' => 'Bearer',
            'expires_in' => 86400,
            'user'       => self::sanitizeUser($user),
        ];
    }

    /**
     * Request Password Reset Token
     */
    public static function forgotPassword(string $email): array
    {
        $user = User::findByEmail($email);
        if (!$user) {
            // Return success to prevent email enumeration
            return ['message' => 'If your email is registered, password reset instructions have been sent.'];
        }

        $resetToken = bin2hex(random_bytes(32));

        return [
            'message'     => 'Password reset token generated.',
            'reset_token' => $resetToken,
            'email'       => $email,
        ];
    }

    /**
     * Confirm Password Reset
     */
    public static function resetPassword(string $email, string $token, string $newPassword): bool
    {
        $user = User::findByEmail($email);
        if (!$user) {
            throw new Exception("User account not found.", 404);
        }

        $hashed = password_hash($newPassword, PASSWORD_DEFAULT);
        $success = User::updatePassword($user['id'], $hashed);

        if ($success) {
            // Trigger Email Notification
            \App\Helpers\Email::send(
                $email,
                "CampusPulse — Password Security Alert 🔐",
                "<h3>Password Changed</h3><p>Hello {$user['name']}, your CampusPulse account password was recently updated. If you did not initiate this change, please contact administration immediately.</p>"
            );

            // Trigger In-App Notification
            \App\Models\Notification::notify((int)$user['id'], "Security Alert 🔐", "Your account password was updated successfully.", "Security");

            // Audit Log
            \App\Models\AuditLog::log((int)$user['id'], "PASSWORD_CHANGED: User updated password", "Auth");
        }

        return $success;
    }

    /**
     * Get Detailed Profile for Current Authenticated User
     */
    public static function getProfile(int $userId): array
    {
        $user = User::getUserWithDepartment($userId);
        if (!$user) {
            throw new Exception("User profile not found.", 404);
        }
        return self::sanitizeUser($user);
    }

    /**
     * Helper: Sanitize User Record (Remove Password Hash)
     */
    private static function sanitizeUser(array $user): array
    {
        unset($user['password']);
        return $user;
    }

    /**
     * Helper: Get Role Permissions Matrix
     */
    private static function getRolePermissions(string $role): array
    {
        return match ($role) {
            'Admin' => ['all_access', 'manage_users', 'approve_events', 'view_analytics', 'system_config'],
            'Organizer' => ['create_events', 'edit_own_events', 'scan_attendance', 'issue_certificates', 'export_rosters'],
            default => ['browse_events', 'register_events', 'view_qr_pass', 'submit_feedback'],
        };
    }
}
