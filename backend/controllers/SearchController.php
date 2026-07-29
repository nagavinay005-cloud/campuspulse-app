<?php

namespace App\Controllers;

use App\Services\SearchService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Global Search REST API Controller for CampusPulse
 */
class SearchController extends BaseController
{
    /**
     * GET /api/v1/search?q=
     * Centralized Categorized Global Search
     */
    public function globalSearch(): void
    {
        $currentUser = JwtMiddleware::handle();
        $query = $_GET['q'] ?? '';

        try {
            $results = SearchService::globalSearch($query, $currentUser);
            Response::success($results, "Global search results retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/search/events
     */
    public function searchEvents(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $results = SearchService::searchEvents($_GET, $currentUser);
            Response::success($results, "Events search results retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/search/users
     */
    public function searchUsers(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $results = SearchService::searchUsers($_GET, $currentUser);
            Response::success($results, "Users search results retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
