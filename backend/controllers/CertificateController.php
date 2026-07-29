<?php

namespace App\Controllers;

use App\Services\CertificateService;
use App\Helpers\Response;
use App\Middleware\JwtMiddleware;
use Exception;

/**
 * Certificate REST API Controller for CampusPulse
 */
class CertificateController extends BaseController
{
    /**
     * POST /api/v1/events/{id}/generate-certificates
     * Batch Issue Certificates for Verified Present Attendees
     */
    public function batchGenerate(int $eventId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = CertificateService::batchGenerateCertificates($eventId, $currentUser);
            Response::success($result, "Certificates generated successfully.");
        } catch (Exception $e) {
            $code = $e->getCode() >= 400 && $e->getCode() <= 500 ? $e->getCode() : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /api/v1/certificates
     * Student View Own Certificates
     */
    public function index(): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $list = CertificateService::getStudentCertificates($currentUser);
            Response::success($list, "Student certificates retrieved.");
        } catch (Exception $e) {
            Response::error($e->getMessage(), 400);
        }
    }

    /**
     * POST /certificates/generate/{registrationId}
     */
    public function generateSingle(int $registrationId): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = CertificateService::generateSingleCertificate($registrationId, $currentUser);
            Response::success($result, "Certificate generated successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }

    /**
     * GET /certificates/verify/{verificationToken}
     * Public verification endpoint
     */
    public function verifyToken(string $token): void
    {
        try {
            $result = CertificateService::verifyCertificateToken($token);
            Response::success($result, "Certificate verification details retrieved.");
        } catch (Exception $e) {
            Response::notFound($e->getMessage());
        }
    }

    /**
     * DELETE /certificates/{id}
     */
    public function destroy(int $id): void
    {
        $currentUser = JwtMiddleware::handle();
        try {
            $result = CertificateService::revokeCertificate($id, $currentUser);
            Response::success($result, "Certificate revoked successfully.");
        } catch (Exception $e) {
            $code = (int)$e->getCode();
            $code = ($code >= 400 && $code <= 500) ? $code : 400;
            Response::error($e->getMessage(), $code);
        }
    }
}
