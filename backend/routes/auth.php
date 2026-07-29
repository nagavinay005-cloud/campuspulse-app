<?php

namespace App\Routes;

use App\Controllers\AuthController;

/**
 * Authentication REST API Endpoint Definitions
 */

// User Registration
Router::post('/auth/register', [AuthController::class, 'register']);

// User Authentication Login
Router::post('/auth/login', [AuthController::class, 'login']);

// Student Google OAuth Login
Router::post('/auth/google-login', [AuthController::class, 'googleLogin']);

// Session Logout
Router::post('/auth/logout', [AuthController::class, 'logout']);

// Refresh Token Renewal
Router::post('/auth/refresh-token', [AuthController::class, 'refreshToken']);

// Forgot Password Request
Router::post('/auth/forgot-password', [AuthController::class, 'forgotPassword']);

// Password Reset Confirmation
Router::post('/auth/reset-password', [AuthController::class, 'resetPassword']);

// Current Authenticated User Profile
Router::get('/auth/me', [AuthController::class, 'me']);
