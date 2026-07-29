<?php

namespace App\Helpers;

use Exception;

/**
 * File Upload Helper for Event Banners & Media Assets
 */
class Upload
{
    /**
     * Upload Image File to Target Subfolder
     */
    public static function image(array $file, string $subfolder = 'events', int $maxSizeMb = 5): string
    {
        if (!isset($file['error']) || is_array($file['error'])) {
            throw new Exception("Invalid file parameters received.", 400);
        }

        switch ($file['error']) {
            case UPLOAD_ERR_OK:
                break;
            case UPLOAD_ERR_NO_FILE:
                throw new Exception("No file was uploaded.", 400);
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                throw new Exception("Exceeded file size limit.", 400);
            default:
                throw new Exception("Unknown file upload error.", 500);
        }

        // Validate File Size
        $maxSizeBytes = $maxSizeMb * 1024 * 1024;
        if ($file['size'] > $maxSizeBytes) {
            throw new Exception("File size exceeds maximum allowed limit of {$maxSizeMb}MB.", 422);
        }

        // Validate Extension & MIME Type
        $allowedTypes = [
            'jpg'  => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'png'  => 'image/png',
            'webp' => 'image/webp',
        ];

        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        if (!array_key_exists($ext, $allowedTypes)) {
            throw new Exception("Invalid image format. Allowed formats: PNG, JPG, JPEG, WEBP.", 422);
        }

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        if ($mime !== $allowedTypes[$ext]) {
            throw new Exception("Uploaded file MIME type does not match image extension.", 422);
        }

        // Create Destination Directory
        $uploadDir = __DIR__ . '/../uploads/' . trim($subfolder, '/') . '/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        // Generate Secure Unique Filename
        $filename = sprintf('%s_%s.%s', date('Ymd_His'), bin2hex(random_bytes(8)), $ext);
        $targetPath = $uploadDir . $filename;

        if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
            throw new Exception("Failed to move uploaded image to storage directory.", 500);
        }

        // Return relative public URL path
        return '/uploads/' . trim($subfolder, '/') . '/' . $filename;
    }
}
