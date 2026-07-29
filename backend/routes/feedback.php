<?php

namespace App\Routes;

use App\Controllers\FeedbackController;

/**
 * Feedback REST API Endpoint Definitions
 */

// Submit Feedback
Router::post('/feedback', [FeedbackController::class, 'store']);

// Get Student Feedback History
Router::get('/feedback/student', [FeedbackController::class, 'getStudentFeedback']);

// Get Feedback Statistics for Event
Router::get('/feedback/statistics/{eventId}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/feedback/statistics/(\d+)$#', $uri, $matches)) {
        (new FeedbackController())->statistics((int)$matches[1]);
    }
});

// Get Event Feedback List
Router::get('/feedback/event/{eventId}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/feedback/event/(\d+)$#', $uri, $matches)) {
        (new FeedbackController())->getByEvent((int)$matches[1]);
    }
});

// Update Feedback Record
Router::put('/feedback/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/feedback/(\d+)$#', $uri, $matches)) {
        (new FeedbackController())->update((int)$matches[1]);
    }
});

// Delete Feedback Record
Router::delete('/feedback/{id}', function () {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/feedback/(\d+)$#', $uri, $matches)) {
        (new FeedbackController())->destroy((int)$matches[1]);
    }
});
