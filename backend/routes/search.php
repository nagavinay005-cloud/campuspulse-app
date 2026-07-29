<?php

namespace App\Routes;

use App\Controllers\SearchController;

/**
 * Global Search & Advanced Filtering REST API Endpoint Definitions
 */

// Global Categorized Search
Router::get('/search', [SearchController::class, 'globalSearch']);

// Module-Specific Search & Filter Endpoints
Router::get('/search/events', [SearchController::class, 'searchEvents']);
Router::get('/search/users', [SearchController::class, 'searchUsers']);
Router::get('/search/announcements', [SearchController::class, 'globalSearch']);
Router::get('/search/certificates', [SearchController::class, 'globalSearch']);
Router::get('/search/attendance', [SearchController::class, 'searchEvents']);
