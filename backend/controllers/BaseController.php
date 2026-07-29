<?php

namespace App\Controllers;

use App\Helpers\Response;
use App\Helpers\Validator;

/**
 * Abstract Base Controller for CampusPulse API
 */
abstract class BaseController
{
    /**
     * Read JSON Request Body
     */
    protected function getJsonInput(): array
    {
        $raw = file_get_contents('php_input') ?: file_get_contents('php://input');
        if (empty($raw)) {
            return $_POST;
        }

        $decoded = json_decode($raw, true);
        return is_array($decoded) ? array_merge($_POST, $decoded) : $_POST;
    }

    /**
     * Validate Input Data or Automatically Return 422 Response
     */
    protected function validateInput(array $data, array $rules): array
    {
        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            Response::validationError($validator->errors());
        }
        return $data;
    }

    /**
     * Get Current Authenticated User Claims
     */
    protected function getAuthUser(): ?array
    {
        return $GLOBALS['auth_user'] ?? null;
    }
}
