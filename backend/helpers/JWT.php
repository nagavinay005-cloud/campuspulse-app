<?php

namespace App\Helpers;

/**
 * Native HS256 JWT Helper Class for CampusPulse
 */
class JWT
{
    private static function getSecret(): string
    {
        return $_ENV['JWT_SECRET'] ?? getenv('JWT_SECRET') ?: 'campuspulse_super_secret_jwt_key_2026_change_in_production';
    }

    private static function base64UrlEncode(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function base64UrlDecode(string $data): string
    {
        return base64_decode(strtr($data, '-_', '+/'));
    }

    /**
     * Encode Payload into HS256 JWT Token
     */
    public static function encode(array $payload, int $expirationHours = 24): string
    {
        $header = [
            'typ' => 'JWT',
            'alg' => 'HS256'
        ];

        $now = time();
        $payload['iat'] = $now;
        $payload['iss'] = $_ENV['JWT_ISSUER'] ?? 'campuspulse-api';
        $payload['exp'] = $now + ($expirationHours * 3600);

        $base64UrlHeader  = self::base64UrlEncode(json_encode($header));
        $base64UrlPayload = self::base64UrlEncode(json_encode($payload));

        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, self::getSecret(), true);
        $base64UrlSignature = self::base64UrlEncode($signature);

        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }

    /**
     * Decode and Verify HS256 JWT Token
     */
    public static function decode(string $token): ?array
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return null;
        }

        [$base64UrlHeader, $base64UrlPayload, $base64UrlSignature] = $parts;

        $signature = self::base64UrlDecode($base64UrlSignature);
        $expectedSignature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, self::getSecret(), true);

        if (!hash_equals($signature, $expectedSignature)) {
            return null; // Signature mismatch
        }

        $payload = json_decode(self::base64UrlDecode($base64UrlPayload), true);

        if (!$payload || !isset($payload['exp']) || time() >= $payload['exp']) {
            return null; // Token expired
        }

        return $payload;
    }
}
