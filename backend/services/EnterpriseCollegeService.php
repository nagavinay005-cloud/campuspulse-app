<?php

namespace App\Services;

use App\Config\Database;
use App\Models\AuditLog;
use App\Models\Notification;
use App\Models\Event;
use Exception;

/**
 * Enterprise Engineering College Workflows Service (NAAC/NIRF & Multi-Level Approvals)
 */
class EnterpriseCollegeService extends BaseService
{
    /**
     * Submit Event for Multi-Tier Approval (HOD -> Dean -> Principal)
     */
    public static function submitForApproval(int $eventId, array $currentUser): array
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $db     = Database::getConnection();

        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event record not found.", 404);
        }

        $stmt = $db->prepare("UPDATE events SET status = 'Pending Approval', approval_stage = 'Pending HOD' WHERE id = :id");
        $stmt->execute(['id' => $eventId]);

        AuditLog::log($userId, "SUBMITTED_FOR_APPROVAL: Event #{$eventId} submitted for HOD review", "Enterprise");

        return [
            'success'        => true,
            'message'        => 'Event submitted to HOD for initial academic review.',
            'approval_stage' => 'Pending HOD',
        ];
    }

    /**
     * Review & Approve/Reject Event at Stage (HOD, Dean, Principal)
     */
    public static function reviewApproval(int $eventId, string $decision, ?string $comments, array $currentUser): array
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $role   = $currentUser['role'] ?? 'Student';
        $db     = Database::getConnection();

        $allowedRoles = ['HOD', 'Dean', 'Principal', 'Admin'];
        if (!in_array($role, $allowedRoles, true)) {
            throw new Exception("Forbidden: Only HOD, Dean, Principal, or Admin can review event approvals.", 403);
        }

        $event = Event::find($eventId);
        if (!$event) {
            throw new Exception("Event record not found.", 404);
        }

        $decision = ucfirst(strtolower($decision));
        if (!in_array($decision, ['Approved', 'Rejected'], true)) {
            throw new Exception("Invalid decision. Must be 'Approved' or 'Rejected'.", 422);
        }

        $currentStage = $event['approval_stage'] ?? 'Pending HOD';
        $nextStage = 'Approved';
        $newStatus = $event['status'];

        if ($decision === 'Rejected') {
            $nextStage = 'Rejected';
            $newStatus = 'Draft';
        } else {
            if ($currentStage === 'Pending HOD') {
                $nextStage = 'Pending Dean';
                $newStatus = 'Pending Approval';
            } elseif ($currentStage === 'Pending Dean') {
                $nextStage = 'Pending Principal';
                $newStatus = 'Pending Approval';
            } elseif ($currentStage === 'Pending Principal' || $role === 'Admin') {
                $nextStage = 'Approved';
                $newStatus = 'Published';
            }
        }

        $upd = $db->prepare("UPDATE events SET status = :status, approval_stage = :stage WHERE id = :id");
        $upd->execute(['status' => $newStatus, 'stage' => $nextStage, 'id' => $eventId]);

        $appStmt = $db->prepare("INSERT INTO event_approvals (event_id, approver_id, stage, status, comments, reviewed_at) VALUES (:event_id, :approver_id, :stage, :status, :comments, NOW())");
        $appStmt->execute([
            'event_id'   => $eventId,
            'approver_id'=> $userId,
            'stage'      => ($role === 'Admin' ? 'Principal' : $role),
            'status'     => $decision,
            'comments'   => $comments ?? '',
        ]);

        Notification::notify(
            (int)$event['organizer_id'],
            "Approval Update: '{$event['title']}'",
            "Your event was {$decision} at stage {$currentStage}. Status: {$newStatus}.",
            "ApprovalUpdate"
        );

        AuditLog::log($userId, "REVIEWED_APPROVAL: {$decision} Event #{$eventId} at stage {$currentStage}", "Enterprise");

        return [
            'success'       => true,
            'decision'      => $decision,
            'approval_stage'=> $nextStage,
            'status'        => $newStatus,
        ];
    }

    /**
     * Get NAAC & NIRF Accreditation Academic Credit Report
     */
    public static function getNaacNirfReport(array $currentUser): array
    {
        $db = Database::getConnection();

        $sql = "SELECT 
                    u.id AS student_id, u.name AS student_name, u.email AS student_email, d.name AS department_name,
                    COUNT(DISTINCT c.id) AS certificates_earned,
                    SUM(c.naac_credit_points) AS total_naac_points
                FROM users u
                LEFT JOIN departments d ON u.department_id = d.id
                LEFT JOIN certificates c ON u.id = c.student_id AND c.status = 'Issued'
                WHERE u.role = 'Student'
                GROUP BY u.id, u.name, u.email, d.name";

        $stmt = $db->query($sql);
        $studentPoints = $stmt->fetchAll();

        $deptSql = "SELECT d.name AS department_name,
                           COUNT(DISTINCT e.id) AS total_events,
                           SUM(e.naac_points) AS department_naac_points
                    FROM departments d
                    LEFT JOIN events e ON d.id = e.department_id
                    GROUP BY d.id, d.name";
        $deptPoints = $db->query($deptSql)->fetchAll();

        return [
            'student_accreditation_credits' => $studentPoints,
            'department_naac_summary'      => $deptPoints,
        ];
    }
}
