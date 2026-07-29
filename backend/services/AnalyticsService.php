<?php

namespace App\Services;

use App\Models\User;
use App\Models\Event;
use App\Models\Registration;
use App\Models\Attendance;
use App\Models\Certificate;
use App\Config\Database;
use Exception;

/**
 * Analytics & System Reporting Service Layer for CampusPulse API
 */
class AnalyticsService extends BaseService
{
    /**
     * Get Command Center System Overview Telemetry Metrics
     */
    public static function getOverviewMetrics(array $currentUser): array
    {
        $role = $currentUser['role'] ?? 'Student';
        if ($role === 'Student') {
            throw new Exception("Forbidden: Students cannot access system analytics.", 403);
        }

        $userStats = User::getStatistics();
        $db = Database::getConnection();

        // Event Telemetry
        $stmtEv = $db->query("SELECT 
                                COUNT(*) AS total_events,
                                COUNT(CASE WHEN status = 'Published' THEN 1 END) AS published_events,
                                COUNT(CASE WHEN status = 'Pending Approval' THEN 1 END) AS pending_approvals,
                                COUNT(CASE WHEN status = 'Draft' THEN 1 END) AS draft_events,
                                COUNT(CASE WHEN status = 'Completed' THEN 1 END) AS completed_events
                              FROM events");
        $eventStats = $stmtEv->fetch();

        // Registration & Attendance Telemetry
        $stmtReg = $db->query("SELECT COUNT(*) AS total_registrations FROM registrations");
        $totalRegs = (int)$stmtReg->fetchColumn();

        $stmtAtt = $db->query("SELECT COUNT(*) AS total_checkins FROM attendance WHERE attendance_status != 'Absent'");
        $totalCheckins = (int)$stmtAtt->fetchColumn();

        $stmtCert = $db->query("SELECT COUNT(*) AS total_certificates FROM certificates WHERE status = 'Issued'");
        $totalCerts = (int)$stmtCert->fetchColumn();

        $overallAttendanceRate = $totalRegs > 0 ? round(($totalCheckins / $totalRegs) * 100) : 0;

        return [
            'users' => $userStats,
            'events' => [
                'total_events'      => (int)($eventStats['total_events'] ?? 0),
                'published_events'  => (int)($eventStats['published_events'] ?? 0),
                'pending_approvals' => (int)($eventStats['pending_approvals'] ?? 0),
                'draft_events'      => (int)($eventStats['draft_events'] ?? 0),
                'completed_events'  => (int)($eventStats['completed_events'] ?? 0),
            ],
            'registrations' => [
                'total_registrations'    => $totalRegs,
                'total_checkins'         => $totalCheckins,
                'overall_attendance_rate'=> $overallAttendanceRate,
                'issued_certificates'    => $totalCerts,
            ],
        ];
    }

    /**
     * Get Department Comparison Metrics
     */
    public static function getDepartmentMetrics(array $currentUser): array
    {
        $db = Database::getConnection();
        $sql = "SELECT d.name AS department_name, d.code AS department_code,
                       COUNT(DISTINCT e.id) AS total_events,
                       COUNT(DISTINCT r.id) AS total_registrations
                FROM departments d
                LEFT JOIN events e ON d.id = e.department_id
                LEFT JOIN registrations r ON e.id = r.event_id
                GROUP BY d.id, d.name, d.code";
        $stmt = $db->query($sql);
        return $stmt->fetchAll();
    }

    /**
     * Dashboard Summary Metrics Endpoint (/reports/dashboard)
     */
    public static function getDashboardReport(array $currentUser): array
    {
        $db = Database::getConnection();
        $userId = (int)($currentUser['user_id'] ?? 0);
        $role   = $currentUser['role'] ?? 'Student';

        // Audit Log
        \App\Models\AuditLog::log($userId, "VIEWED_ANALYTICS: Dashboard Summary", "Reports");

        if ($role === 'Student') {
            $regStmt = $db->prepare("SELECT COUNT(*) FROM registrations WHERE student_id = :uid AND status != 'Cancelled'");
            $regStmt->execute(['uid' => $userId]);
            $attStmt = $db->prepare("SELECT COUNT(*) FROM attendance WHERE student_id = :uid AND attendance_status = 'Present'");
            $attStmt->execute(['uid' => $userId]);
            $certStmt = $db->prepare("SELECT COUNT(*) FROM certificates WHERE student_id = :uid AND status = 'Issued'");
            $certStmt->execute(['uid' => $userId]);

            return [
                'role'                => 'Student',
                'registered_events'   => (int)$regStmt->fetchColumn(),
                'attended_events'     => (int)$attStmt->fetchColumn(),
                'earned_certificates' => (int)$certStmt->fetchColumn(),
            ];
        }

        $userCounts = $db->query("SELECT 
            COUNT(*) AS total_users,
            COUNT(CASE WHEN role = 'Student' THEN 1 END) AS total_students,
            COUNT(CASE WHEN role = 'Organizer' THEN 1 END) AS total_organizers
            FROM users")->fetch();

        $eventCounts = $db->query("SELECT 
            COUNT(*) AS total_events,
            COUNT(CASE WHEN status = 'Published' THEN 1 END) AS active_events,
            COUNT(CASE WHEN status = 'Completed' THEN 1 END) AS completed_events,
            COUNT(CASE WHEN status = 'Cancelled' THEN 1 END) AS cancelled_events,
            COUNT(CASE WHEN status = 'Archived' THEN 1 END) AS archived_events
            FROM events")->fetch();

        $regCount = (int)$db->query("SELECT COUNT(*) FROM registrations")->fetchColumn();
        $attCount = (int)$db->query("SELECT COUNT(*) FROM attendance WHERE attendance_status = 'Present'")->fetchColumn();
        $certCount = (int)$db->query("SELECT COUNT(*) FROM certificates WHERE status = 'Issued'")->fetchColumn();
        $annCount = (int)$db->query("SELECT COUNT(*) FROM announcements")->fetchColumn();
        $notifCount = (int)$db->query("SELECT COUNT(*) FROM notifications")->fetchColumn();

        $attPct = $regCount > 0 ? round(($attCount / $regCount) * 100, 1) : 0;

        return [
            'total_users'           => (int)$userCounts['total_users'],
            'total_students'        => (int)$userCounts['total_students'],
            'total_organizers'      => (int)$userCounts['total_organizers'],
            'total_events'          => (int)$eventCounts['total_events'],
            'active_events'         => (int)$eventCounts['active_events'],
            'completed_events'      => (int)$eventCounts['completed_events'],
            'cancelled_events'      => (int)$eventCounts['cancelled_events'],
            'archived_events'       => (int)$eventCounts['archived_events'],
            'total_registrations'   => $regCount,
            'attendance_percentage' => $attPct,
            'certificates_generated'=> $certCount,
            'total_announcements'   => $annCount,
            'notifications_sent'    => $notifCount,
        ];
    }

    /**
     * Event Analytics Report (/reports/events)
     */
    public static function getEventsReport(array $currentUser): array
    {
        $db = Database::getConnection();
        $sql = "SELECT e.id, e.title, e.category, e.capacity,
                       COUNT(DISTINCT r.id) AS registration_count,
                       COUNT(DISTINCT CASE WHEN a.attendance_status = 'Present' THEN a.id END) AS attendance_count,
                       COUNT(DISTINCT CASE WHEN r.id IS NOT NULL AND (a.id IS NULL OR a.attendance_status = 'Absent') THEN r.id END) AS noshow_count
                FROM events e
                LEFT JOIN registrations r ON e.id = r.event_id AND r.status != 'Cancelled'
                LEFT JOIN attendance a ON e.id = a.event_id AND r.id = a.registration_id
                GROUP BY e.id, e.title, e.category, e.capacity";
        $stmt = $db->query($sql);
        $events = $stmt->fetchAll();

        foreach ($events as &$ev) {
            $capacity = max(1, (int)$ev['capacity']);
            $ev['capacity_utilization_pct'] = round(((int)$ev['registration_count'] / $capacity) * 100, 1);
        }

        return ['events' => $events];
    }

    /**
     * Student Analytics Report (/reports/students)
     */
    public static function getStudentsReport(array $currentUser): array
    {
        $db = Database::getConnection();
        $sql = "SELECT u.id, u.name, u.email, u.year,
                       COUNT(DISTINCT r.id) AS registered_count,
                       COUNT(DISTINCT CASE WHEN a.attendance_status = 'Present' THEN a.id END) AS attended_count,
                       COUNT(DISTINCT c.id) AS certificates_earned
                FROM users u
                LEFT JOIN registrations r ON u.id = r.student_id AND r.status != 'Cancelled'
                LEFT JOIN attendance a ON u.id = a.student_id AND a.attendance_status = 'Present'
                LEFT JOIN certificates c ON u.id = c.student_id AND c.status = 'Issued'
                WHERE u.role = 'Student'
                GROUP BY u.id, u.name, u.email, u.year";
        $stmt = $db->query($sql);
        return ['students' => $stmt->fetchAll()];
    }

    /**
     * Export Report Data in CSV Format
     */
    public static function exportCsv(string $type, array $currentUser): string
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        \App\Models\AuditLog::log($userId, "EXPORTED_REPORT: Exported {$type} report in CSV format", "Reports");

        $db = Database::getConnection();
        $output = "";

        if ($type === 'events') {
            $output .= "ID,Title,Category,Capacity,Registrations,Attendance,NoShows\n";
            $data = self::getEventsReport($currentUser)['events'];
            foreach ($data as $row) {
                $output .= sprintf('"%s","%s","%s",%d,%d,%d,%d' . "\n",
                    $row['id'], addslashes($row['title']), $row['category'], $row['capacity'],
                    $row['registration_count'], $row['attendance_count'], $row['noshow_count']
                );
            }
        } else {
            $output .= "ID,Name,Email,Year,Registered,Attended,Certificates\n";
            $data = self::getStudentsReport($currentUser)['students'];
            foreach ($data as $row) {
                $output .= sprintf('"%s","%s","%s","%s",%d,%d,%d' . "\n",
                    $row['id'], addslashes($row['name']), $row['email'], $row['year'],
                    $row['registered_count'], $row['attended_count'], $row['certificates_earned']
                );
            }
        }

        return $output;
    }
}
