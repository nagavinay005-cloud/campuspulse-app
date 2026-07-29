<?php

namespace App\Controllers;

use App\Services\EnterpriseCollegeService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Enterprise Engineering College Workflows Controller
 */
class EnterpriseCollegeController extends BaseController
{
    /**
     * POST /api/v1/enterprise/submit-approval/{eventId}
     */
    public function submitApproval(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = EnterpriseCollegeService::submitForApproval($eventId, $currentUser);
            Response::success($result, "Event submitted for academic approval workflow.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /api/v1/enterprise/review-approval/{eventId}
     */
    public function reviewApproval(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        $input = $this->getJsonInput();

        $validated = $this->validateInput($input, [
            'decision' => 'required',
        ]);

        try {
            $result = EnterpriseCollegeService::reviewApproval($eventId, $validated['decision'], $input['comments'] ?? null, $currentUser);
            Response::success($result, "Event approval stage decision recorded.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/enterprise/naac-nirf-report
     */
    public function naacNirfReport(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $report = EnterpriseCollegeService::getNaacNirfReport($currentUser);
            Response::success($report, "NAAC/NIRF academic credit points report generated.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }
}
