import { createFileRoute } from "@tanstack/react-router";
import { OrganizerDashboard } from "@/routes/_app.organizer.index";

export const Route = createFileRoute("/_app/organizer/dashboard")({
  head: () => ({
    meta: [
      { title: "Organizer Dashboard — CampusPulse" },
      { name: "description", content: "Manage your events, attendee registrations, QR check-ins, and performance." },
      { property: "og:title", content: "Organizer Dashboard — CampusPulse" },
      { property: "og:description", content: "Control center for campus event organizers." },
    ],
  }),
  component: OrganizerDashboard,
});
