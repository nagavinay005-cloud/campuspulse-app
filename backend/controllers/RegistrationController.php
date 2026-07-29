<?php

namespace App\Controllers;

use App\Services\RegistrationService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Event Registration REST API Controller for CampusPulse
 */
class RegistrationController extends BaseController
{
    /**
     * GET /api/v1/registrations
     * List Paginated Registrations (Admin / Organizer)
     */
    public function index(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = RegistrationService::getAllRegistrations($_GET, $currentUser);
            Response::success($result, "Registrations retrieved successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 500;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/registrations/{id}
     * Get Detailed Registration by ID
     */
    public function show(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $reg = \App\Models\Registration::getRegistrationWithDetails($id);
            if (!$reg) {
                Response::notFound("Registration record not found.");
            }
            Response::success($reg, "Registration details retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * GET /api/v1/events/{id}/registrations
     * List Participant Roster for Specific Event
     */
    public function eventRegistrations(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = RegistrationService::getEventRegistrations($eventId, $currentUser);
            Response::success($list, "Event participant registrations retrieved.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * POST /api/v1/events/{id}/register
     * Student Register for Published Event
     */
    public function register(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $registration = RegistrationService::registerForEvent($eventId, $currentUser);
            Response::created($registration, "Registered successfully! Digital entry pass generated.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 422;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * DELETE /api/v1/events/{id}/cancel-registration
     * Student Cancel Registration
     */
    public function cancel(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            RegistrationService::cancelRegistration($eventId, $currentUser);
            Response::success(null, "Registration cancelled. Seat restored.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * PATCH /api/v1/registrations/{id}/approve
     * Approve Registration Request
     */
    public function approve(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $updated = RegistrationService::approveRegistration($id, $currentUser);
            Response::success($updated, "Registration approved successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * PATCH /api/v1/registrations/{id}/reject
     * Reject Registration Request
     */
    public function reject(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $updated = RegistrationService::rejectRegistration($id, $currentUser);
            Response::success($updated, "Registration declined.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/students/me/registrations
     * Logged-in Student Registrations & Passes
     */
    public function myRegistrations(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = RegistrationService::getStudentRegistrations($currentUser);
            Response::success($list, "Student event passes and registrations retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
