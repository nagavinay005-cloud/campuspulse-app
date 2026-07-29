// Reusable Enterprise Google Authentication Service for CampusPulse
// Uses Official Firebase Authentication SDK (GoogleAuthProvider, signInWithPopup)
// Enforces prompt: "select_account" to always display the Google account chooser screen

import { toast } from "sonner";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase";
import { authService, type UserProfile, type FirebaseUser } from "@/lib/firebase";

export const googleAuthService = {
  getGoogleProvider() {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    return googleProvider;
  },

  async signInWithGoogle(): Promise<{ user: FirebaseUser; profile: UserProfile } | null> {
    try {
      // 1. Always instantiate provider with prompt: "select_account"
      const provider = this.getGoogleProvider();

      // 2. Authenticate with official Firebase Authentication SDK popup
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // 3. Sync and authenticate student on backend PHP/MySQL REST API (graceful fallback if API offline)
      const { API_BASE_URL } = await import("@/services/apiClient");
      let backendUser: any = null;
      let backendToken: string | null = null;

      try {
        const res = await fetch(`${API_BASE_URL}/auth/google-login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            google_id: user.uid,
            name: user.displayName || user.email?.split("@")[0] || "Student User",
            photo: user.photoURL || "",
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            backendToken = data.data?.token;
            backendUser = data.data?.user;
            if (backendToken) {
              localStorage.setItem("campuspulse_jwt_token", backendToken);
            }
          }
        }
      } catch (backendErr) {
        console.warn("Backend API sync skipped (offline or connecting):", backendErr);
      }

      // 4. Construct consistent User Profile matching backend structure
      const profile: UserProfile = {
        uid: backendUser ? String(backendUser.id) : user.uid,
        name: backendUser?.name || user.displayName || user.email?.split("@")[0] || "Student User",
        email: backendUser?.email || user.email || "",
        role: (backendUser?.role as any) || "Student",
        department: backendUser?.department_name || "Computer Science",
        year: backendUser?.year || "3rd Year",
        profilePhoto: backendUser?.photo || user.photoURL || "",
        createdAt: backendUser?.created_at || new Date().toISOString(),
        updatedAt: backendUser?.updated_at || new Date().toISOString(),
        accountStatus: (backendUser?.status as any) || "Active",
        profileCompleted: true,
      };

      toast.success(`Welcome to CampusPulse, ${profile.name}!`);
      return { user, profile };
    } catch (error: any) {
      this.handleAuthError(error);
      return null;
    }
  },

  // User-friendly Firebase Error Code Handler
  handleAuthError(error: any) {
    const errorCode = error?.code || "";

    switch (errorCode) {
      case "auth/popup-closed-by-user":
        toast.info("Google sign-in popup was closed before completing.");
        break;
      case "auth/popup-blocked":
        toast.warning("Google sign-in popup was blocked by your browser. Please allow popups.");
        break;
      case "auth/network-request-failed":
        toast.error("Network connection error. Please check your internet connection.");
        break;
      case "auth/unauthorized-domain":
        toast.error("This domain is not authorized for Google Sign-In in Firebase Console.");
        break;
      default:
        toast.error(error?.message || "Google Sign-In failed.");
    }
  },
};
