<?php

namespace App\Helpers;

/**
 * Standardized JSON API Response Helper for CampusPulse
 */
class Response
{
    /**
     * Send Standardized JSON Response
     */
    public static function json(int $statusCode, bool $success, string $message, mixed $data = null, array $errors = []): void
    {
        http_response_code($statusCode);
        header('Content-Type: application/json; charset=utf-8');

        $response = [
            'success'   => $success,
            'status'    => $statusCode,
            'message'   => $message,
            'timestamp' => date('Y-m-d H:i:s'),
        ];

        if ($data !== null) {
            $response['data'] = $data;
        }

        if (!empty($errors)) {
            $response['errors'] = $errors;
        }

        echo json_encode($response, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        exit();
    }

    /**
     * 200 OK / Success Response
     */
    public static function success(mixed $data = null, string $message = "Request completed successfully.", int $statusCode = 200): void
    {
        self::json($statusCode, true, $message, $data);
    }

    /**
     * 201 Created Response
     */
    public static function created(mixed $data = null, string $message = "Resource created successfully."): void
    {
        self::json(201, true, $message, $data);
    }

    /**
     * 400 Bad Request Response
     */
    public static function error(string $message = "Bad request.", int|string $statusCode = 400, array $errors = []): void
    {
        $code = is_numeric($statusCode) ? (int)$statusCode : 400;
        self::json($code, false, $message, null, $errors);
    }

    /**
     * 401 Unauthorized Response
     */
    public static function unauthorized(string $message = "Authentication required. Invalid or missing token."): void
    {
        self::json(401, false, $message);
    }

    /**
     * 403 Forbidden Response
     */
    public static function forbidden(string $message = "Access denied. Insufficient role permissions."): void
    {
        self::json(403, false, $message);
    }

    /**
     * 404 Not Found Response
     */
    public static function notFound(string $message = "Requested API endpoint or resource not found."): void
    {
        self::json(404, false, $message);
    }

    /**
     * 422 Validation Error Response
     */
    public static function validationError(array $errors, string $message = "Validation failed for input fields."): void
    {
        self::json(422, false, $message, null, $errors);
    }
}
