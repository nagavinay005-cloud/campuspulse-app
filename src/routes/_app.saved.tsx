import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader, EmptyState } from "@/components/app/layout-bits";
import { EventCard } from "@/components/app/event-card";
import { activeEvents } from "@/data/mock";

export const Route = createFileRoute("/_app/saved")({
  head: () => ({
    meta: [
      { title: "Saved Events — CampusPulse" },
      { name: "description", content: "Events you bookmarked to decide on later, with live seat counts." },
      { property: "og:title", content: "Saved Events — CampusPulse" },
      { property: "og:description", content: "Your bookmarked campus events." },
    ],
  }),
  component: Saved,
});

function Saved() {
  const saved = activeEvents().slice(1, 4);

  return (
    <div>
      <PageHeader
        title="Saved Events"
        subtitle={`${saved.length} events bookmarked`}
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student", to: "/dashboard" }, { label: "Saved" }]}
        actions={<Link to="/events"><Button variant="outline" className="rounded-xl bg-card">Browse feed</Button></Link>}
      />
      {saved.length === 0 ? (
        <EmptyState
          icon={Bookmark}
          title="Nothing saved yet"
          description="Tap the bookmark icon on any event card to keep it here for later."
          action={<Link to="/events"><Button className="rounded-xl">Explore events</Button></Link>}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {saved.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
        </div>
      )}
    </div>
  );
}
