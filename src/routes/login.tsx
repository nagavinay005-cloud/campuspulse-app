import { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Activity, ArrowRight, GraduationCap, Loader2, ShieldCheck, Users, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { googleAuthService } from "@/services/googleAuthService";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — CampusPulse" },
      { name: "description", content: "Sign in to CampusPulse as a student, organizer or administrator." },
      { property: "og:title", content: "Sign in — CampusPulse" },
      { property: "og:description", content: "Access your campus event workspace with Firebase Authentication." },
    ],
  }),
  component: LoginRouteWrapper,
});

function LoginRouteWrapper() {
  return <Login />;
}

type PortalType = "student" | "organizer" | "admin";

const portalOptions = [
  { key: "student" as PortalType, label: "Student Portal", icon: GraduationCap, badge: "Google OAuth", color: "border-primary/40 bg-primary/5" },
  { key: "organizer" as PortalType, label: "Organizer Desk", icon: Users, badge: "Faculty & Staff", color: "border-purple-500/40 bg-purple-500/5" },
  { key: "admin" as PortalType, label: "Admin Command Center", icon: ShieldCheck, badge: "System Admin", color: "border-rose-500/40 bg-rose-500/5" },
];

function Login() {
  const { loginWithEmail, loginWithGoogle, sendPasswordReset, getDashboardPath, user, userProfile, loading } = useAuth();
  const [activePortal, setActivePortal] = useState<PortalType>("student");
  const [authMode, setAuthMode] = useState<"login" | "forgot">("login");

  // Form Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // Redirect automatically if user is already authenticated
  useEffect(() => {
    if (!loading && user && userProfile) {
      const targetPath = userProfile.role === "Admin"
        ? "/admin/dashboard"
        : userProfile.role === "Organizer"
        ? "/organizer/dashboard"
        : "/student/dashboard";
      navigate({ to: targetPath });
    }
  }, [user, userProfile, loading, navigate]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const profile = await loginWithEmail(email, password);
    setIsSubmitting(false);

    if (profile) {
      if (activePortal === "admin" && profile.role !== "Admin") {
        toast.error(`Access Denied: Your account (${profile.role}) does not have Administrator privileges.`);
        return;
      }
      if (activePortal === "organizer" && profile.role !== "Organizer" && profile.role !== "Admin") {
        toast.error(`Access Denied: Your account (${profile.role}) does not have Event Organizer privileges.`);
        return;
      }

      if (profile.role === "Admin") {
        navigate({ to: "/admin/dashboard" });
      } else if (profile.role === "Organizer") {
        navigate({ to: "/organizer/dashboard" });
      } else {
        const targetPath = getDashboardPath(profile.role);
        navigate({ to: targetPath });
      }
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendPasswordReset(email);
    setIsSubmitting(false);
    setAuthMode("login");
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      const profile = await loginWithGoogle();
      setIsSubmitting(false);

      if (profile) {
        const targetPath = profile.role === "Admin"
          ? "/admin/dashboard"
          : profile.role === "Organizer"
          ? "/organizer/dashboard"
          : "/student/dashboard";

        navigate({ to: targetPath });
      }
    } catch (err: any) {
      setIsSubmitting(false);
      toast.error(err?.message || "Google sign in failed.");
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT SIDEBAR HERO */}
      <div className="hero-gradient hidden flex-col justify-between border-r border-border p-12 lg:flex">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.jpg" alt="CampusPulse Logo" className="size-9 rounded-xl object-cover shadow-glow" />
          <span className="text-base font-semibold tracking-tight">CampusPulse</span>
        </Link>
        <div>
          <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
            One Campus. Every Event. <span className="text-gradient">Role-Scoped Institutional Login.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Separate portals for Students, Organizers, and Administrators with Firebase Authentication & Role-Based Access Control.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">Firebase Auth Active · SDK v11.3.0</p>
      </div>

      {/* RIGHT SIDE FORM CONTAINER */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-6"
        >
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight">Access CampusPulse</h1>
            <p className="text-xs text-muted-foreground">Choose your portal to sign in to your workspace.</p>
          </div>

          {/* PORTAL SELECTOR TABS */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-secondary/50 rounded-2xl border border-border">
            {portalOptions.map((p) => {
              const Icon = p.icon;
              const isActive = activePortal === p.key;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => {
                    setActivePortal(p.key);
                    setAuthMode("login");
                  }}
                  className={cn(
                    "flex flex-col items-center gap-1.5 p-3 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                    isActive
                      ? "bg-card text-foreground shadow-md ring-2 ring-primary/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  )}
                >
                  <Icon className={cn("size-4", isActive && "text-primary")} />
                  <span>{p.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* 1. STUDENT PORTAL (GOOGLE OAUTH) */}
          {activePortal === "student" && authMode === "login" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-primary/30 bg-primary-soft/30 p-6 text-center space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="size-6 text-primary" />
                <h3 className="font-extrabold text-base text-foreground">Student Portal Sign In</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Students authenticate exclusively using verified institutional Google Workspace accounts.
              </p>
              <Button
                type="button"
                size="lg"
                className="w-full rounded-xl bg-card text-foreground hover:bg-secondary border shadow-sm h-12 font-semibold text-xs"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="size-4 animate-spin mr-2" />
                ) : (
                  <svg className="mr-2.5 size-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                Continue with Student Google Sign-In
              </Button>
            </motion.div>
          )}

          {/* 2. ORGANIZER PORTAL FORM */}
          {activePortal === "organizer" && authMode === "login" && (
            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6"
              onSubmit={handleLoginSubmit}
            >
              <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                <Users className="size-5 text-purple-500" />
                <h3 className="font-extrabold text-sm text-foreground">Organizer Desk Login</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-email">Organizer Email</Label>
                <Input
                  id="org-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="organizer@campus.edu"
                  required
                  className="h-11 rounded-xl bg-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-password">Password</Label>
                <Input
                  id="org-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 rounded-xl bg-card"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <Checkbox checked={rememberMe} onCheckedChange={(val) => setRememberMe(!!val)} /> Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setAuthMode("forgot")}
                  className="text-sm font-medium text-purple-500 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-glow" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <>
                    Sign In as Organizer <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </motion.form>
          )}

          {/* 3. ADMIN PORTAL FORM */}
          {activePortal === "admin" && authMode === "login" && (
            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4 rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6"
              onSubmit={handleLoginSubmit}
            >
              <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                <ShieldCheck className="size-5 text-rose-500" />
                <h3 className="font-extrabold text-sm text-foreground">Admin Command Center Login</h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@campus.edu"
                  required
                  className="h-11 rounded-xl bg-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 rounded-xl bg-card"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <Checkbox checked={rememberMe} onCheckedChange={(val) => setRememberMe(!!val)} /> Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setAuthMode("forgot")}
                  className="text-sm font-medium text-rose-500 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-glow" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <>
                    Sign In as Administrator <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </motion.form>
          )}

          {/* FORGOT PASSWORD FORM */}
          {authMode === "forgot" && (
            <form className="space-y-4" onSubmit={handleForgotSubmit}>
              <div className="space-y-2">
                <Label htmlFor="forgot-email">College Email</Label>
                <Input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter registered email"
                  required
                  className="h-11 rounded-xl bg-card"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl shadow-glow" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : "Send Password Reset Link"}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full rounded-xl text-xs"
                onClick={() => setAuthMode("login")}
              >
                Back to Sign In
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
