<?php

namespace App\Controllers;

use App\Services\MediaService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Centralized Media & File Management REST API Controller
 */
class MediaController extends BaseController
{
    /**
     * POST /api/v1/media/upload
     */
    public function upload(): void
    {
        $currentUser = JwtMiddleware::handle();

        if (empty($_FILES['file'])) {
            Response::error("Validation failed: 'file' payload is required.", 400);
            return;
        }

        $module = $_POST['module'] ?? $_GET['module'] ?? 'events';
        $refId  = isset($_POST['reference_id']) ? (int)$_POST['reference_id'] : null;

        try {
            $result = MediaService::uploadFile($_FILES['file'], $module, $refId, $currentUser);
            Response::success($result, "File uploaded successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/media/{id}
     */
    public function show(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $media = MediaService::getMediaDetails($id);
            Response::success($media, "Media file metadata retrieved.");
        } catch (Exception $e) {
            Response::notFound($e->getMessage());
        }
    }

    /**
     * GET /api/v1/media/module/{module}
     */
    public function byModule(string $module): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = MediaService::getMediaByModule($module);
            Response::success(['media' => $list, 'total' => count($list)], "Module media files retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * DELETE /api/v1/media/{id}
     */
    public function destroy(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            MediaService::deleteMedia($id, $currentUser);
            Response::success(null, "Media file deleted successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }
}
