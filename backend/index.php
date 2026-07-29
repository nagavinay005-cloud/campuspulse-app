<?php

/**
 * CampusPulse PHP 8+ REST API Front Controller
 */

// 1. Set Error Reporting & Exception Handling
error_reporting(E_ALL);
ini_set('display_errors', '0');

// 2. Custom Exception & Error Handler
set_exception_handler(function (Throwable $e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');

    echo json_encode([
        'success'   => false,
        'status'    => 500,
        'message'   => 'Server Exception: ' . $e->getMessage(),
        'file'      => basename($e->getFile()),
        'line'      => $e->getLine(),
        'timestamp' => date('Y-m-d H:i:s'),
    ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit();
});

// 2. Resolve backend root directory (supports both local and Vercel serverless)
$backendRoot = defined('BACKEND_DIR') ? BACKEND_DIR : __DIR__;

// 3. Load .env variables BEFORE any config/service requires them
if (file_exists($backendRoot . '/.env')) {
    $lines = file($backendRoot . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (str_starts_with(trim($line), '#')) continue;
        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value, " \"'\t\n\r\0\x0B");
            $_ENV[$name] = $value;
            putenv("{$name}={$value}");
        }
    }
}

// 4. Production security: suppress error display
$appEnv = $_ENV['APP_ENV'] ?? getenv('APP_ENV') ?: 'production';
if ($appEnv === 'production') {
    ini_set('display_errors', '0');
    ini_set('log_errors', '1');
}

// 5. Load Autoloader & Class Files
require_once $backendRoot . '/config/constants.php';
require_once $backendRoot . '/config/cors.php';
require_once $backendRoot . '/config/database.php';
require_once $backendRoot . '/helpers/Response.php';
require_once $backendRoot . '/helpers/Validator.php';
require_once $backendRoot . '/helpers/JWT.php';
require_once $backendRoot . '/helpers/Upload.php';
require_once $backendRoot . '/helpers/FCM.php';
require_once $backendRoot . '/helpers/PDF.php';
require_once $backendRoot . '/helpers/Email.php';
require_once $backendRoot . '/middleware/JwtMiddleware.php';
require_once $backendRoot . '/middleware/AuthMiddleware.php';
require_once $backendRoot . '/middleware/RoleMiddleware.php';
require_once $backendRoot . '/controllers/BaseController.php';
require_once $backendRoot . '/models/BaseModel.php';
require_once $backendRoot . '/models/User.php';
require_once $backendRoot . '/models/AuditLog.php';
require_once $backendRoot . '/models/Notification.php';
require_once $backendRoot . '/models/Event.php';
require_once $backendRoot . '/models/Registration.php';
require_once $backendRoot . '/models/Attendance.php';
require_once $backendRoot . '/models/Certificate.php';
require_once $backendRoot . '/models/Archive.php';
require_once $backendRoot . '/models/Feedback.php';
require_once $backendRoot . '/models/Media.php';
require_once $backendRoot . '/services/BaseService.php';
require_once $backendRoot . '/services/AuthService.php';
require_once $backendRoot . '/services/UserService.php';
require_once $backendRoot . '/services/EventService.php';
require_once $backendRoot . '/services/RegistrationService.php';
require_once $backendRoot . '/services/AttendanceService.php';
require_once $backendRoot . '/services/CertificateService.php';
require_once $backendRoot . '/services/NotificationService.php';
require_once $backendRoot . '/services/AnalyticsService.php';
require_once $backendRoot . '/services/ArchiveService.php';
require_once $backendRoot . '/services/FeedbackService.php';
require_once $backendRoot . '/services/MediaService.php';
require_once $backendRoot . '/services/SearchService.php';
require_once $backendRoot . '/services/AuditLogService.php';
require_once $backendRoot . '/services/EnterpriseCollegeService.php';
require_once $backendRoot . '/controllers/AuthController.php';
require_once $backendRoot . '/controllers/UserController.php';
require_once $backendRoot . '/controllers/EventController.php';
require_once $backendRoot . '/controllers/RegistrationController.php';
require_once $backendRoot . '/controllers/AttendanceController.php';
require_once $backendRoot . '/controllers/CertificateController.php';
require_once $backendRoot . '/controllers/NotificationController.php';
require_once $backendRoot . '/controllers/AnalyticsController.php';
require_once $backendRoot . '/controllers/ArchiveController.php';
require_once $backendRoot . '/controllers/FeedbackController.php';
require_once $backendRoot . '/controllers/MediaController.php';
require_once $backendRoot . '/controllers/SearchController.php';
require_once $backendRoot . '/controllers/AuditLogController.php';
require_once $backendRoot . '/controllers/EnterpriseCollegeController.php';
require_once $backendRoot . '/routes/api.php';
require_once $backendRoot . '/routes/auth.php';
require_once $backendRoot . '/routes/users.php';
require_once $backendRoot . '/routes/events.php';
require_once $backendRoot . '/routes/registrations.php';
require_once $backendRoot . '/routes/attendance.php';
require_once $backendRoot . '/routes/certificates.php';
require_once $backendRoot . '/routes/notifications.php';
require_once $backendRoot . '/routes/analytics.php';
require_once $backendRoot . '/routes/archives.php';
require_once $backendRoot . '/routes/feedback.php';
require_once $backendRoot . '/routes/media.php';
require_once $backendRoot . '/routes/search.php';
require_once $backendRoot . '/routes/audit_logs.php';
require_once $backendRoot . '/routes/enterprise.php';

// 5. Handle CORS preflight & headers
\App\Config\Cors::handle();

// 6. Dispatch HTTP Request through Router
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$uri    = $_SERVER['REQUEST_URI'] ?? '/';

\App\Routes\Router::dispatch($method, $uri);

