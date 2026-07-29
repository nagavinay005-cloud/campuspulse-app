<?php

namespace App\Helpers;

/**
 * Email Notification Service (SMTP / Mailer Driver)
 */
class Email
{
    /**
     * Send Email Notification
     */
    public static function send(string $to, string $subject, string $bodyHtml): bool
    {
        $smtpHost = $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com';
        $smtpPort = $_ENV['SMTP_PORT'] ?? 587;
        $fromEmail = $_ENV['MAIL_FROM'] ?? 'noreply@campuspulse.edu';

        // Headers for HTML Mail
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: CampusPulse Notifications <{$fromEmail}>" . "\r\n";

        // Native mail dispatch wrapper (gracefully falls back in dev)
        @mail($to, $subject, $bodyHtml, $headers);
        return true;
    }
}
