import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Archive, Award, Search, Star, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader, SectionCard, StatCard, EmptyState } from "@/components/app/layout-bits";
import { ArchiveCard } from "@/components/app/archive-card";
import { SummaryModal } from "@/components/app/summary-modal";
import { ArchiveTimeline } from "@/components/app/archive-timeline";
import { getArchiveMeta } from "@/data/archive";
import { archivedEvents, departments, type CampusEvent } from "@/data/mock";

export const Route = createFileRoute("/_app/archive-manager")({
  head: () => ({
    meta: [
      { title: "Archive Management — CampusPulse" },
      { name: "description", content: "Manage automatically archived events: summaries, galleries, reports, duplication and restore requests." },
      { property: "og:title", content: "Archive Management — CampusPulse" },
      { property: "og:description", content: "Full archive management console for organizers and admins." },
    ],
  }),
  component: ArchiveManager,
});

function ArchiveManager() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("all");
  const [active, setActive] = useState<CampusEvent | null>(null);

  const all = archivedEvents();
  const list = useMemo(
    () =>
      all.filter(
        (e) =>
          e.title.toLowerCase().includes(q.toLowerCase()) && (dept === "all" || e.department === dept),
      ),
    [all, q, dept],
  );

  const totalCerts = all.reduce((s, e) => s + getArchiveMeta(e.id).certificates, 0);
  const avgFeedback = all.length
    ? all.reduce((s, e) => s + getArchiveMeta(e.id).feedbackScore, 0) / all.length
    : 0;
  const totalAttended = all.reduce((s, e) => s + (e.attended ?? 0), 0);

  return (
    <div>
      <PageHeader
        title="Archive Management"
        subtitle="Every event archived automatically the moment its end time passed"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Archive Management" }]}
        actions={
          <Button variant="outline" className="rounded-xl bg-card" onClick={() => toast.success("Archive bundle exported")}>
            Export all reports
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Archived events" value={all.length} icon={Archive} index={0} />
        <StatCard label="Attendance recorded" value={totalAttended} icon={Users} tone="success" index={1} />
        <StatCard label="Certificates generated" value={totalCerts} icon={Award} tone="warning" index={2} />
        <StatCard label="Avg. feedback" value={Math.round(avgFeedback * 10) / 10} icon={Star} tone="danger" index={3} />
      </div>

      <div className="my-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search archived events…"
            className="h-11 rounded-2xl bg-card pl-10"
          />
        </div>
        <Select value={dept} onValueChange={setDept}>
          <SelectTrigger className="h-11 rounded-2xl bg-card sm:w-64">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All departments</SelectItem>
            {departments.map((d) => (
              <SelectItem key={d} value={d}>{d}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {list.length === 0 ? (
        <EmptyState icon={Archive} title="Nothing archived here yet" description="Adjust your search or department filter to find archived events." />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((e, i) => (
            <ArchiveCard
              key={e.id}
              event={e}
              index={i}
              onSummary={setActive}
              onGallery={() => toast.success("Gallery opened — 24 photos preserved")}
            />
          ))}
        </div>
      )}

      <SectionCard title="Archive activity timeline" description="Automatic lifecycle actions logged by CampusPulse" className="mt-6">
        <ArchiveTimeline />
      </SectionCard>

      <SummaryModal event={active} open={!!active} onOpenChange={(v) => !v && setActive(null)} />
    </div>
  );
}
