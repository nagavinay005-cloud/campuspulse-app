<?php

namespace App\Helpers;

/**
 * Certificate & Report PDF Generator Helper for CampusPulse
 */
class PDF
{
    /**
     * Generate HTML Certificate Template String
     */
    public static function generateCertificateHtml(array $certData): string
    {
        $studentName = htmlspecialchars($certData['student_name'] ?? 'Student');
        $eventTitle  = htmlspecialchars($certData['event_title'] ?? 'Campus Event');
        $certNum     = htmlspecialchars($certData['certificate_number'] ?? 'CERT-00000');
        $issuedDate  = htmlspecialchars($certData['generated_at'] ?? date('Y-m-d'));
        $clubName    = htmlspecialchars($certData['club_name'] ?? 'CampusPulse Student Guild');

        return <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Certificate of Completion - {$certNum}</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #f8fafc; margin: 0; padding: 40px; }
        .cert-container { border: 8px double #2563eb; background: #ffffff; padding: 60px; text-align: center; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .title { font-size: 32px; font-weight: bold; color: #1e293b; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
        .subtitle { font-size: 14px; color: #64748b; margin-bottom: 24px; }
        .student-name { font-size: 28px; font-weight: bold; color: #2563eb; border-bottom: 2px solid #2563eb; display: inline-block; padding-bottom: 4px; margin: 20px 0; }
        .event-title { font-size: 20px; font-weight: 600; color: #0f172a; margin: 16px 0; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; font-size: 11px; color: #94a3b8; }
        .hash { font-family: monospace; font-weight: bold; color: #2563eb; }
    </style>
</head>
<body>
    <div class="cert-container">
        <div class="title">Certificate of Completion</div>
        <div class="subtitle">This certificate is proudly awarded to</div>
        <div class="student-name">{$studentName}</div>
        <div class="subtitle">for active participation in</div>
        <div class="event-title">{$eventTitle}</div>
        <div class="subtitle">Issued by {$clubName} on {$issuedDate}</div>
        <div class="footer">
            <span>Verified CampusPulse Digital Certificate</span>
            <span class="hash">ID: {$certNum}</span>
        </div>
    </div>
</body>
</html>
HTML;
    }

    /**
     * Generate CSV Data Stream Output
     */
    public static function outputCsv(string $filename, array $headers, array $rows): void
    {
        header('Content-Type: text/csv; charset=utf-8');
        header("Content-Disposition: attachment; filename={$filename}.csv");

        $output = fopen('php://output', 'w');
        fputcsv($output, $headers);

        foreach ($rows as $row) {
            fputcsv($output, $row);
        }

        fclose($output);
        exit();
    }
}
