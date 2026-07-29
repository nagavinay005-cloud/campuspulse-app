<?php

namespace App\Routes;

use App\Helpers\Response;

/**
 * REST API Router & Registry for CampusPulse
 */
class Router
{
    private static array $routes = [];

    public static function get(string $path, callable|array $handler): void
    {
        self::$routes['GET'][$path] = $handler;
    }

    public static function post(string $path, callable|array $handler): void
    {
        self::$routes['POST'][$path] = $handler;
    }

    public static function put(string $path, callable|array $handler): void
    {
        self::$routes['PUT'][$path] = $handler;
    }

    public static function patch(string $path, callable|array $handler): void
    {
        self::$routes['PATCH'][$path] = $handler;
    }

    public static function delete(string $path, callable|array $handler): void
    {
        self::$routes['DELETE'][$path] = $handler;
    }

    /**
     * Dispatch HTTP Request to Matching Route Handler
     */
    public static function dispatch(string $method, string $uri): void
    {
        $parsedUri = parse_url($uri, PHP_URL_PATH);

        // Strip known prefixes: /backend/api/v1 (local) or /api/v1 (production container)
        $prefixes = ['/backend/api/v1', '/api/v1'];
        foreach ($prefixes as $prefix) {
            if (str_starts_with($parsedUri, $prefix)) {
                $parsedUri = substr($parsedUri, strlen($prefix));
                break;
            }
        }

        $parsedUri = '/' . trim($parsedUri, '/');
        if ($parsedUri === '/') {
            $parsedUri = '/health';
        }

        $handler = self::$routes[$method][$parsedUri] ?? null;

        // Pattern matching for parameterized routes (e.g. /users/12)
        if (!$handler && isset(self::$routes[$method])) {
            foreach (self::$routes[$method] as $routePath => $routeHandler) {
                $pattern = preg_replace('/\{[a-zA-Z0-9_]+\}/', '([a-zA-Z0-9_-]+)', $routePath);
                if (preg_match('#^' . $pattern . '$#', $parsedUri, $matches)) {
                    array_shift($matches); // Remove full match
                    $handler = $routeHandler;
                    $_SERVER['ROUTE_PARAMS'] = $matches;
                    break;
                }
            }
        }

        if (!$handler) {
            // Default Health Check Endpoint
            if ($parsedUri === '/health' || $parsedUri === '/api/v1' || $parsedUri === '/') {
                Response::success([
                    'app'         => 'CampusPulse Backend API',
                    'version'     => 'v1',
                    'php_version' => PHP_VERSION,
                    'status'      => 'healthy',
                ], 'CampusPulse Backend API Foundation is operational.');
            }

            Response::notFound("API Route [{$method}] {$parsedUri} not found.");
        }

        if (is_callable($handler)) {
            $params = $_SERVER['ROUTE_PARAMS'] ?? [];
            call_user_func_array($handler, $params);
        } elseif (is_array($handler) && count($handler) === 2) {
            [$controller, $action] = $handler;
            $instance = new $controller();
            $params = $_SERVER['ROUTE_PARAMS'] ?? [];
            call_user_func_array([$instance, $action], $params);
        }
    }
}

// Register Default System & Health Routes
Router::get('/health', function () {
    Response::success([
        'name'        => 'CampusPulse REST API Engine',
        'version'     => 'v1',
        'database'    => 'MySQL PDO Connected',
        'jwt'         => 'HS256 Engine Active',
        'environment' => $_ENV['APP_ENV'] ?? 'development',
    ], 'CampusPulse Backend Foundation operational.');
});
