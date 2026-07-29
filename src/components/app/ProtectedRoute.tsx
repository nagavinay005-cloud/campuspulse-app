import { useEffect, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: ("Student" | "Organizer" | "Admin")[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, userProfile, loading, getDashboardPath } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate({ to: "/login" });
      } else if (allowedRoles && userProfile && !allowedRoles.includes(userProfile.role)) {
        // Redirect to role-authorized home dashboard
        const authorizedPath = getDashboardPath(userProfile.role);
        navigate({ to: authorizedPath });
      }
    }
  }, [user, userProfile, loading, allowedRoles, navigate, getDashboardPath]);

  if (loading) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <Loader2 className="size-8 animate-spin text-primary" />
          <p className="text-xs text-muted-foreground">Verifying authentication & role permissions...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  if (allowedRoles && userProfile && !allowedRoles.includes(userProfile.role)) {
    return null;
  }

  return <>{children}</>;
}
