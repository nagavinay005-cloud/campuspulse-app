<?php

namespace App\Controllers;

use App\Services\FeedbackService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Feedback & Rating REST API Controller for CampusPulse
 */
class FeedbackController extends BaseController
{
    /**
     * POST /api/v1/feedback
     * Submit Event Feedback
     */
    public function store(): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        try {
            $result = FeedbackService::submitFeedback($input, $currentUser);
            Response::success($result, "Feedback submitted successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/feedback/event/{eventId}
     */
    public function getByEvent(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = FeedbackService::getEventFeedback($eventId, $currentUser);
            Response::success(['feedback' => $list, 'total' => count($list)], "Event feedback list retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/feedback/student
     */
    public function getStudentFeedback(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = FeedbackService::getStudentFeedback($currentUser);
            Response::success(['feedback' => $list, 'total' => count($list)], "Student feedback history retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * PUT /api/v1/feedback/{id}
     */
    public function update(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        try {
            $result = FeedbackService::updateFeedback($id, $input, $currentUser);
            Response::success($result, "Feedback updated successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * DELETE /api/v1/feedback/{id}
     */
    public function destroy(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            FeedbackService::deleteFeedback($id, $currentUser);
            Response::success(null, "Feedback deleted successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/feedback/statistics/{eventId}
     */
    public function statistics(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $stats = FeedbackService::getEventStatistics($eventId);
            Response::success($stats, "Event feedback statistics retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
