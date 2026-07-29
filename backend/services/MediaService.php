<?php

namespace App\Services;

use App\Models\Media;
use App\Models\AuditLog;
use Exception;

/**
 * Centralized Media & File Management Service
 */
class MediaService extends BaseService
{
    /**
     * Upload File & Save Metadata
     */
    public static function uploadFile(array $file, string $module, ?int $referenceId, array $currentUser): array
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $module = strtolower(trim($module));
        $validModules = ['events', 'announcements', 'gallery', 'profiles', 'certificates', 'departments', 'clubs'];

        if (!in_array($module, $validModules, true)) {
            $module = 'events';
        }

        if (!isset($file['error']) || $file['error'] !== UPLOAD_ERR_OK) {
            throw new Exception("File upload error code: " . ($file['error'] ?? 'UNKNOWN'), 400);
        }

        $origName = basename($file['name']);
        $ext      = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
        $size     = (int)$file['size'];

        // Allowed Extension & MIME checks
        $allowed = [
            'png'  => 'image/png',
            'jpg'  => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'webp' => 'image/webp',
            'pdf'  => 'application/pdf',
        ];

        if (!array_key_exists($ext, $allowed)) {
            throw new Exception("Unsupported file extension. Allowed: PNG, JPG, JPEG, WEBP, PDF.", 415);
        }

        // Executable blacklist check
        $executableExts = ['php', 'phtml', 'php3', 'php4', 'php5', 'phps', 'exe', 'sh', 'bat', 'js'];
        if (in_array($ext, $executableExts, true)) {
            throw new Exception("Security Violation: Executable file upload rejected.", 403);
        }

        // File Size Limit (Images 5MB, PDF 10MB)
        $maxSize = ($ext === 'pdf') ? (10 * 1024 * 1024) : (5 * 1024 * 1024);
        if ($size > $maxSize) {
            $maxMb = $ext === 'pdf' ? 10 : 5;
            throw new Exception("File too large. Maximum allowed size is {$maxMb}MB.", 413);
        }

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        if ($mime !== $allowed[$ext]) {
            throw new Exception("MIME type validation failed. Expected {$allowed[$ext]}, got {$mime}.", 415);
        }

        // Target Folder Setup
        $uploadDir = __DIR__ . '/../uploads/' . $module;
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        $uniqueFileName = sprintf('%s_%s_%s.%s', $module, date('Ymd_His'), bin2hex(random_bytes(4)), $ext);
        $targetPath = $uploadDir . '/' . $uniqueFileName;

        if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
            throw new Exception("Failed to store uploaded file on server.", 500);
        }

        $storagePath = "/uploads/{$module}/{$uniqueFileName}";

        $mediaData = [
            'file_name'    => $uniqueFileName,
            'original_name'=> $origName,
            'file_type'    => ($ext === 'pdf' ? 'pdf' : 'image'),
            'mime_type'    => $mime,
            'file_size'    => $size,
            'storage_path' => $storagePath,
            'uploaded_by'  => $userId,
            'module'       => $module,
            'reference_id' => $referenceId,
        ];

        $media = Media::createMedia($mediaData);

        AuditLog::log($userId, "UPLOADED_FILE: {$origName} ({$module})", "Media");

        return [
            'success'   => true,
            'message'   => 'File uploaded successfully.',
            'media'     => $media,
            'public_url'=> $storagePath,
        ];
    }

    /**
     * Get Media Record Details
     */
    public static function getMediaDetails(int $id): array
    {
        $media = Media::find($id);
        if (!$media) {
            throw new Exception("Media file record not found.", 404);
        }
        return $media;
    }

    /**
     * Get Media Records by Module
     */
    public static function getMediaByModule(string $module): array
    {
        return Media::getByModule($module);
    }

    /**
     * Delete Media Record & Remove Physical File
     */
    public static function deleteMedia(int $id, array $currentUser): bool
    {
        $userId = (int)($currentUser['user_id'] ?? 0);
        $role   = $currentUser['role'] ?? 'Student';

        $media = Media::find($id);
        if (!$media) {
            throw new Exception("Media file not found.", 404);
        }

        if ((int)$media['uploaded_by'] !== $userId && $role !== 'Admin') {
            throw new Exception("Forbidden: You can only delete your own files.", 403);
        }

        // Delete physical file
        $physicalPath = __DIR__ . '/..' . $media['storage_path'];
        if (file_exists($physicalPath)) {
            @unlink($physicalPath);
        }

        $db = Media::db();
        $stmt = $db->prepare("DELETE FROM media WHERE id = :id");
        $success = $stmt->execute(['id' => $id]);

        if ($success) {
            AuditLog::log($userId, "DELETED_FILE: {$media['file_name']}", "Media");
        }

        return $success;
    }
}
