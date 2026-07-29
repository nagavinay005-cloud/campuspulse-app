import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "../components/ui/sonner";
import { reportLovableError } from "../lib/lovable-error-reporting";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Root Route Error caught:", error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-left max-w-2xl mx-auto space-y-4">
      <div className="w-full rounded-2xl bg-destructive/10 border border-destructive/30 p-6 space-y-3">
        <h1 className="text-lg font-bold text-destructive flex items-center gap-2">
          <span>⚠️</span> Runtime Error Detected on Deployment
        </h1>
        <p className="text-xs font-semibold text-foreground font-mono bg-card/60 p-3 rounded-xl border border-border overflow-x-auto">
          {error?.message || String(error)}
        </p>
        {error?.stack && (
          <pre className="text-[10px] text-muted-foreground bg-card/40 p-3 rounded-xl overflow-x-auto max-h-48 border border-border">
            {error.stack}
          </pre>
        )}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          Try Again
        </button>
        <a
          href="/"
          className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CampusPulse — One Campus. Every Event." },
      {
        name: "description",
        content:
          "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform.",
      },
      { name: "author", content: "CampusPulse" },
      { property: "og:title", content: "CampusPulse — One Campus. Every Event." },
      {
        property: "og:description",
        content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CampusPulse — One Campus. Every Event." },
      { name: "twitter:description", content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5902ca3c-b29f-4b24-9ae2-685b46a2639b/id-preview-d743f1f9--2fa1261e-1e26-45bf-b4aa-cc6337b8600d.lovable.app-1785145314698.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5902ca3c-b29f-4b24-9ae2-685b46a2639b/id-preview-d743f1f9--2fa1261e-1e26-45bf-b4aa-cc6337b8600d.lovable.app-1785145314698.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { AuthProvider } from "../context/AuthContext";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Toaster position="top-right" richColors closeButton />
      </AuthProvider>
    </QueryClientProvider>
  );
}

