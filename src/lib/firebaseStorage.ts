// Firebase Storage Service for CampusPulse
// Handles Event Banner and Gallery Image Uploads with base64 / blob fallbacks

import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Convert a File object to a Base64 string fallback
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Upload Event Banner Image to Firebase Storage or return base64 fallback
 */
export async function uploadBannerImage(file: File, eventId?: string): Promise<string> {
  try {
    if (!file) throw new Error("No file provided for banner upload.");
    const id = eventId || `evt-${Date.now()}`;
    const storageRef = ref(storage, `banners/${id}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.warn("Firebase Storage unavailable or offline. Falling back to local data URL:", error);
    return await fileToBase64(file);
  }
}

/**
 * Upload Gallery Images to Firebase Storage or return base64 fallbacks
 */
export async function uploadGalleryImages(files: File[], eventId?: string): Promise<string[]> {
  if (!files || files.length === 0) return [];
  const urls: string[] = [];
  for (const file of files) {
    const url = await uploadBannerImage(file, eventId);
    urls.push(url);
  }
  return urls;
}
