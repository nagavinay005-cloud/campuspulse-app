import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  authService,
  type FirebaseUser,
  type UserProfile,
} from "@/lib/firebase";
import { googleAuthService } from "@/services/googleAuthService";
import { API_BASE_URL } from "@/services/apiClient";

interface AuthContextType {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
  loginWithEmail: (email: string, pass: string) => Promise<UserProfile | null>;
  loginWithGoogle: () => Promise<UserProfile | null>;
  registerWithEmail: (email: string, pass: string, name: string, role?: "Student" | "Organizer" | "Admin", department?: string, year?: string) => Promise<UserProfile | null>;
  saveUserProfile: (details: Partial<UserProfile>) => Promise<UserProfile | null>;
  logout: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  sendVerification: () => Promise<void>;
  getDashboardPath: (role?: "Student" | "Organizer" | "Admin") => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getDeptId(dept: string): number {
  const d = String(dept).toLowerCase();
  if (d.includes("computer") || d.includes("cse")) return 1;
  if (d.includes("design")) return 2;
  if (d.includes("mech") || d.includes("me")) return 3;
  if (d.includes("info") || d.includes("it")) return 4;
  if (d.includes("civil") || d.includes("ce")) return 5;
  if (d.includes("elect") || d.includes("ece") || d.includes("ee")) return 6;
  return 1;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const syncProfileAndSession = async (currentUser: FirebaseUser, firebaseProfile: UserProfile | null) => {
    try {
      let token = typeof window !== "undefined" ? localStorage.getItem("campuspulse_jwt_token") : null;
      if (!token && currentUser.email) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);
          const res = await fetch(`${API_BASE_URL}/auth/google-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
            body: JSON.stringify({
              email: currentUser.email,
              google_id: currentUser.uid,
              name: currentUser.displayName || currentUser.email.split("@")[0],
              photo: currentUser.photoURL || "",
            }),
          });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.data?.token) {
              token = data.data.token;
              if (typeof window !== "undefined") {
                localStorage.setItem("campuspulse_jwt_token", token);
              }
            }
          }
        } catch (err) {
          console.warn("Backend google-login API unavailable or timed out, continuing with client session:", err);
        }
      }

      if (token) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);
          const res = await fetch(`${API_BASE_URL}/auth/me`, {
            signal: controller.signal,
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            if (data.success && data.data) {
              const dbUser = data.data;
              const name = dbUser.name || currentUser.displayName || firebaseProfile?.name || "";
              const department = dbUser.department_name || firebaseProfile?.department || "";
              const year = dbUser.year || firebaseProfile?.year || "";
              
              const isCompleted = !!(name && department && year);

              const mergedProfile: UserProfile = {
                uid: currentUser.uid,
                name: name,
                email: dbUser.email || currentUser.email || firebaseProfile?.email || "",
                role: dbUser.role || firebaseProfile?.role || "Student",
                department: department,
                year: year,
                profilePhoto: dbUser.photo || currentUser.photoURL || firebaseProfile?.profilePhoto || "",
                createdAt: dbUser.created_at || firebaseProfile?.createdAt || new Date().toISOString(),
                updatedAt: dbUser.updated_at || firebaseProfile?.updatedAt || new Date().toISOString(),
                accountStatus: dbUser.status || firebaseProfile?.accountStatus || "Active",
                profileCompleted: isCompleted,
              };

              setUserProfile(mergedProfile);

              if (isCompleted && firebaseProfile?.profileCompleted !== true) {
                authService.saveUserProfile(currentUser.uid, {
                  name,
                  department,
                  year,
                  profileCompleted: true
                }).catch(() => {});
              }
              return;
            }
          }
        } catch (err) {
          console.warn("Backend auth/me API unavailable or timed out, continuing with client session:", err);
        }
      }
    } catch (e) {
      console.warn("Failed to sync profile and session:", e);
    }

    if (firebaseProfile) {
      setUserProfile(firebaseProfile);
    } else if (currentUser) {
      const fallbackProfile: UserProfile = {
        uid: currentUser.uid,
        name: currentUser.displayName || currentUser.email?.split("@")[0] || "Student User",
        email: currentUser.email || "",
        role: "Student",
        department: "",
        year: "",
        profilePhoto: currentUser.photoURL || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        accountStatus: "Active",
        profileCompleted: false,
      };
      setUserProfile(fallbackProfile);
    }
  };

  // Single Source of Truth: Firebase Auth SDK onAuthStateChanged listener
  useEffect(() => {
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }
    const unsubscribe = authService.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const firebaseProfile = await authService.getUserProfile(currentUser.uid);
        setUserProfile(firebaseProfile);
        
        await syncProfileAndSession(currentUser, firebaseProfile);
      } else {
        setUserProfile(null);
        localStorage.removeItem("campuspulse_jwt_token");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getDashboardPath = (role?: "Student" | "Organizer" | "Admin") => {
    const targetRole = role || userProfile?.role || "Student";
    if (targetRole === "Admin") return "/admin/dashboard";
    if (targetRole === "Organizer") return "/organizer/dashboard";
    return "/student/dashboard";
  };

  const loginWithEmail = async (email: string, pass: string) => {
    setError(null);
    setLoading(true);
    try {
      const { user: u, profile: p } = await authService.loginWithEmail(email, pass);
      setUser(u);
      setUserProfile(p);
      toast.success(`Signed in successfully as ${p?.name || u.email}`);
      return p;
    } catch (err: any) {
      const msg = err.message || "Failed to sign in. Please check credentials.";
      setError(msg);
      toast.error(msg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      const result = await googleAuthService.signInWithGoogle();
      if (result) {
        setUser(result.user);
        setUserProfile(result.profile);
        await syncProfileAndSession(result.user, result.profile);
        return result.profile;
      }
      return null;
    } catch (err: any) {
      const msg = err.message || "Google sign in failed.";
      setError(msg);
      toast.error(msg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const registerWithEmail = async (
    email: string,
    pass: string,
    name: string,
    role: "Student" | "Organizer" | "Admin" = "Student",
    department = "Computer Science",
    year = "3rd Year",
  ) => {
    setError(null);
    setLoading(true);
    try {
      const { user: u, profile: p } = await authService.registerWithEmail(email, pass, name, role, department, year);
      setUser(u);
      setUserProfile(p);
      toast.success(`Account created successfully for ${name}`);
      return p;
    } catch (err: any) {
      const msg = err.message || "Failed to create account.";
      setError(msg);
      toast.error(msg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const saveUserProfile = async (details: Partial<UserProfile>) => {
    if (!user) return null;
    setLoading(true);
    try {
      const updated = await authService.saveUserProfile(user.uid, details);
      
      const token = localStorage.getItem("campuspulse_jwt_token");
      if (token) {
        const meRes = await fetch(`${API_BASE_URL}/auth/me`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const meData = await meRes.json();
        if (meRes.ok && meData.success && meData.data?.id) {
          const dbId = meData.data.id;
          const deptId = getDeptId(details.department || "Computer Science");
          
          await fetch(`${API_BASE_URL}/users/${dbId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: details.name,
              department_id: deptId,
              year: details.year || "3rd Year",
            }),
          });
        }
      }

      setUserProfile(updated);
      toast.success("Profile details saved successfully!");
      return updated;
    } catch (err: any) {
      toast.error(err?.message || "Failed to save profile.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setUserProfile(null);
    toast.info("Signed out of CampusPulse.");
  };

  const sendPasswordReset = async (email: string) => {
    await authService.sendPasswordReset(email);
    toast.success(`Password reset email sent to ${email}`);
  };

  const sendVerification = async () => {
    await authService.sendEmailVerification();
    toast.success("Verification link dispatched to your mailbox.");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        error,
        loginWithEmail,
        loginWithGoogle,
        registerWithEmail,
        saveUserProfile,
        logout,
        sendPasswordReset,
        sendVerification,
        getDashboardPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
