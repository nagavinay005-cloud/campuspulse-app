<?php

namespace App\Controllers;

use App\Services\EventService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Event Management REST API Controller for CampusPulse
 */
class EventController extends BaseController
{
    /**
     * GET /api/v1/events
     * List Paginated Events with Search, Filters & Role Scoping
     */
    public function index(): void
    {
        $currentUser = JwtMiddleware::handleOptional();
        try {
            $result = EventService::getAllEvents($_GET, $currentUser);
            Response::success($result, "Events retrieved successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $statusCode = ($code >= 400 && $code <= 500) ? $code : 500;
            Response::error($e->getMessage(), $statusCode);
        }
    }

    /**
     * GET /api/v1/admin/events/pending
     * List Events Awaiting Admin Approval
     */
    public function pending(): void
    {
        $currentUser = JwtMiddleware::handle();
        RoleMiddleware::requireAdmin($currentUser);

        try {
            $queryParams = array_merge($_GET, ['status' => 'Pending Approval']);
            $result = EventService::getAllEvents($queryParams, $currentUser);
            Response::success($result, "Pending events retrieved successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 500;
            Response::error($e->getMessage(), $code);
        }
    }

    public function show($id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $event = EventService::getEventById($id, $currentUser);
            Response::success($event, "Event details retrieved.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 404;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * POST /api/v1/events
     * Create New Event (with Banner Image Upload Support)
     */
    public function store(): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();
        $file  = $_FILES['banner'] ?? null;

        try {
            $event = EventService::createEvent($input, $file, $currentUser);
            Response::created($event, "Event created successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * PUT /api/v1/events/{id}
     * Update Event Information
     */
    public function update(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();
        $file  = $_FILES['banner'] ?? null;

        try {
            $event = EventService::updateEvent($id, $input, $file, $currentUser);
            Response::success($event, "Event updated successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * DELETE /api/v1/events/{id}
     * Delete Event Record
     */
    public function destroy(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            EventService::deleteEvent($id, $currentUser);
            Response::success(null, "Event deleted successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * Generic Status State Transition Handler
     */
    private function handleStatusTransition(int $id, string $action): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();
        $reason = $input['reason'] ?? null;

        try {
            $event = EventService::updateStatusAction($id, $action, $currentUser, $reason);
            Response::success($event, "Event status transitioned to '{$event['status']}'.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    public function submit(int $id): void
    {
        $this->handleStatusTransition($id, 'submit');
    }

    public function approve(int $id): void
    {
        $this->handleStatusTransition($id, 'approve');
    }

    public function reject(int $id): void
    {
        $this->handleStatusTransition($id, 'reject');
    }

    public function publish(int $id): void
    {
        $this->handleStatusTransition($id, 'publish');
    }

    public function cancel(int $id): void
    {
        $this->handleStatusTransition($id, 'cancel');
    }

    public function archive(int $id): void
    {
        $this->handleStatusTransition($id, 'archive');
    }

    public function restore(int $id): void
    {
        $this->handleStatusTransition($id, 'restore');
    }
}
