// API Client for CampusPulse PHP REST API

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/backend/api/v1";

export function getAuthToken(): string | null {
  if (typeof window === "undefined" || typeof localStorage === "undefined") return null;
  return localStorage.getItem("campuspulse_jwt_token");
}

export function setAuthToken(token: string): void {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.setItem("campuspulse_jwt_token", token);
  }
}

export function clearAuthToken(): void {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    localStorage.removeItem("campuspulse_jwt_token");
  }
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "An error occurred during the API request.");
  }

  return data as T;
}
