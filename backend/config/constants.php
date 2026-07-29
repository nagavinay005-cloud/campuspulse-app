<?php

// CampusPulse API Global Constants & Definitions

define('API_VERSION', 'v1');
define('API_PREFIX', '/api/v1');

// HTTP Status Codes
define('HTTP_OK', 200);
define('HTTP_CREATED', 201);
define('HTTP_NO_CONTENT', 204);
define('HTTP_BAD_REQUEST', 400);
define('HTTP_UNAUTHORIZED', 401);
define('HTTP_FORBIDDEN', 403);
define('HTTP_NOT_FOUND', 404);
define('HTTP_METHOD_NOT_ALLOWED', 405);
define('HTTP_UNPROCESSABLE_ENTITY', 422);
define('HTTP_INTERNAL_SERVER_ERROR', 500);

// Platform User Roles
define('ROLE_STUDENT', 'Student');
define('ROLE_ORGANIZER', 'Organizer');
define('ROLE_ADMIN', 'Admin');

// Directory Paths
define('UPLOADS_DIR', __DIR__ . '/../uploads/');
define('LOGS_DIR', __DIR__ . '/../logs/');
