import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { Activity, Archive, Layers, RefreshCcw, Timer } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHeader, SectionCard, StatCard, EmptyState } from "@/components/app/layout-bits";
import { LifecycleTimeline } from "@/components/app/lifecycle-timeline";
import { ArchiveQueueTable } from "@/components/app/archive-queue-table";
import { ArchiveTimeline } from "@/components/app/archive-timeline";
import { StatusBadge } from "@/components/app/primitives";
import { archiveQueue } from "@/data/archive";
import { archivedEvents, events, resolveStatus, type EventStatus } from "@/data/mock";

export const Route = createFileRoute("/_app/lifecycle")({
  head: () => ({
    meta: [
      { title: "Event Lifecycle Dashboard — CampusPulse" },
      { name: "description", content: "Track every campus event from Draft to Automatically Archived with live stage counts and the auto-archive queue." },
      { property: "og:title", content: "Event Lifecycle Dashboard — CampusPulse" },
      { property: "og:description", content: "Visual lifecycle timeline, stage filters and the automatic archive queue." },
    ],
  }),
  component: LifecyclePage,
});

function LifecyclePage() {
  const [stage, setStage] = useState<EventStatus | null>(null);
  const filtered = stage ? events.filter((e) => resolveStatus(e) === stage) : events;
  const queue = archiveQueue();

  return (
    <div>
      <PageHeader
        title="Event Lifecycle"
        subtitle="Every event flows through eight governed stages and archives itself automatically"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Lifecycle" }]}
        actions={
          <Button variant="outline" className="rounded-xl bg-card" onClick={() => toast.success("Lifecycle states re-evaluated")}>
            <RefreshCcw className="mr-2 size-4" /> Re-evaluate now
          </Button>
        }
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total events" value={events.length} icon={Layers} index={0} />
        <StatCard label="Archived automatically" value={archivedEvents().length} icon={Archive} tone="success" index={1} />
        <StatCard label="In archive queue" value={queue.length} icon={Timer} tone="warning" index={2} />
        <StatCard label="Currently live" value={events.filter((e) => resolveStatus(e) === "Live").length} icon={Activity} tone="danger" index={3} />
      </div>

      <SectionCard title="Lifecycle timeline" description="Click any stage to filter the events below" className="mb-6">
        <LifecycleTimeline selected={stage} onSelect={setStage} />
      </SectionCard>

      <div className="grid gap-6 xl:grid-cols-3">
        <SectionCard
          className="xl:col-span-2"
          title={stage ? `${stage} events` : "All events"}
          description={`${filtered.length} event${filtered.length === 1 ? "" : "s"} in this view`}
          action={
            stage && (
              <Button size="sm" variant="ghost" className="rounded-xl" onClick={() => setStage(null)}>
                Clear filter
              </Button>
            )
          }
        >
          {filtered.length === 0 ? (
            <EmptyState icon={Layers} title="No events in this stage" description="Pick another stage on the timeline above." />
          ) : (
            <ul className="space-y-3">
              {filtered.map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-3 rounded-2xl border border-border p-4">
                  <div className="min-w-0">
                    <Link to="/events/$eventId" params={{ eventId: e.id }} className="block truncate text-sm font-medium hover:text-primary">
                      {e.title}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {e.department} · ends {format(new Date(e.end), "dd MMM, h:mm a")}
                    </p>
                  </div>
                  <StatusBadge status={resolveStatus(e)} />
                </li>
              ))}
            </ul>
          )}
        </SectionCard>

        <SectionCard title="Archive activity" description="Automatic actions logged by the system">
          <ArchiveTimeline limit={4} />
        </SectionCard>
      </div>

      <SectionCard
        title="Auto archive queue"
        description="Events that will archive themselves shortly after their end time"
        className="mt-6"
        action={<Link to="/admin/archive-logs"><Button size="sm" variant="ghost" className="rounded-xl">Open monitor</Button></Link>}
      >
        <ArchiveQueueTable />
      </SectionCard>
    </div>
  );
}
