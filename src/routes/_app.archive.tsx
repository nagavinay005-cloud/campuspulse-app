import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Archive, Award, Search, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader, SectionCard, StatCard, EmptyState } from "@/components/app/layout-bits";
import { EventCard } from "@/components/app/event-card";
import { toast } from "sonner";
import { activeEvents, resolveStatus } from "@/data/mock";

export const Route = createFileRoute("/_app/archive")({
  head: () => ({
    meta: [
      { title: "Archived Events — CampusPulse" },
      { name: "description", content: "Events automatically archived once their end time passed, with attendance summaries preserved." },
      { property: "og:title", content: "Archived Events — CampusPulse" },
      { property: "og:description", content: "Auto-archived events with preserved attendance and certificates." },
    ],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  const [q, setQ] = useState("");
  const [archived, setArchived] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("campuspulse_jwt_token");
    const headers = { "Authorization": `Bearer ${token}` };
    import("@/services/apiClient").then(({ API_BASE_URL }) => {
      fetch(`${API_BASE_URL}/archive/events`, { headers })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data?.events) {
          const mapped = data.data.events.map((e: any) => ({
            id: e.uuid || String(e.id),
            dbId: e.id,
            title: e.title || "Untitled Event",
            banner: e.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
            venue: e.venue || "Campus Main Hall",
            start: e.event_date && e.start_time ? `${e.event_date}T${e.start_time}` : new Date().toISOString(),
            end: e.event_date && e.end_time ? `${e.event_date}T${e.end_time}` : new Date().toISOString(),
            seats: e.capacity || 100,
            registered: e.registered_count || 0,
            attended: e.attended_count || 0,
            status: "Archived",
            category: e.category || "Technical",
            department: e.department_name || "Computer Science",
            club: e.club_name || "Campus Club",
            organizer: e.organizer_name || "Event Desk",
            certificate: true,
          }));
          setArchived(mapped);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
    });
  }, []);

  const list = archived.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()));
  const totalAttended = archived.reduce((s, e) => s + (e.attended ?? 0), 0);

  return (
    <div>
      <PageHeader
        title="Archived Events"
        subtitle="Auto-archived the moment their scheduled end time passed"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student", to: "/dashboard" }, { label: "Archive" }]}
        actions={<Button variant="outline" className="rounded-xl bg-card" onClick={() => toast.success("Archive exported as CSV")}>Export archive</Button>}
      />

      <div className="card-surface mb-6 flex flex-col gap-3 border-l-4 border-l-primary p-5 sm:flex-row sm:items-center">
        <Archive className="size-5 shrink-0 text-primary" />
        <div>
          <p className="text-sm font-semibold">Automatic expiry is active</p>
          <p className="text-sm text-muted-foreground">
            When an event's end datetime passes, CampusPulse removes it from the active feed, closes registrations
            permanently, preserves the full event brief and attendance summary, and applies the Archived badge.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Archived events" value={archived.length} icon={Archive} index={0} />
        <StatCard label="Total attendance" value={totalAttended} icon={Users} tone="success" index={1} />
        <StatCard label="Certificates issued" value={422} icon={Award} tone="warning" index={2} />
      </div>

      <div className="relative my-6 max-w-md">
        <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the archive…" className="h-11 rounded-2xl bg-card pl-10" />
      </div>

      {list.length === 0 ? (
        <EmptyState icon={Archive} title="No archived events found" description="Nothing in the archive matches that search." />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {list.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
          </div>

          <SectionCard title="Attendance summaries" description="Frozen snapshots retained for reporting" className="mt-6">
            <div className="space-y-3">
              {list.map((e) => (
                <div key={e.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border p-4 sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{e.title}</p>
                    <p className="text-xs text-muted-foreground">Ended {format(new Date(e.end), "dd MMM yyyy, h:mm a")}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="rounded-full">{e.registered} registered</Badge>
                    <Badge variant="secondary" className="rounded-full">{e.attended} attended</Badge>
                    <Badge variant="outline" className="rounded-full border-success/30 bg-success-soft text-success">
                      {e.certificate ? "Certificates available" : "No certificate"}
                    </Badge>
                    <Badge variant="outline" className="rounded-full">Archived</Badge>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </>
      )}
    </div>
  );
}
