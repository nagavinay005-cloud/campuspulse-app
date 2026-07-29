import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/routes/_app.admin.index";

export const Route = createFileRoute("/_app/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — CampusPulse" },
      { name: "description", content: "Centralized governance command center for campus events, users, and auto-archiving." },
      { property: "og:title", content: "Admin Dashboard — CampusPulse" },
      { property: "og:description", content: "Governance dashboard for CampusPulse administrators." },
    ],
  }),
  component: AdminDashboard,
});
