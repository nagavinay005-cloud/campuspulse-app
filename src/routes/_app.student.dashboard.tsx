import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/routes/_app.dashboard";

export const Route = createFileRoute("/_app/student/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — CampusPulse" },
      { name: "description", content: "Your campus events, registrations, deadlines and certificates at a glance." },
      { property: "og:title", content: "Student Dashboard — CampusPulse" },
      { property: "og:description", content: "Track registrations, deadlines and upcoming campus events." },
    ],
  }),
  component: Dashboard,
});
