import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  Archive,
  Award,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Eye,
  FileBarChart,
  FolderArchive,
  Layers,
  MapPin,
  Megaphone,
  QrCode,
  Radio,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { usePlatformMetrics } from "@/hooks/useAnalyticsHooks";
import { archiveDaemon } from "@/services/archiveDaemon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/digital-twin")({
  head: () => ({
    meta: [
      { title: "Campus Digital Twin — CampusPulse" },
      { name: "description", content: "Live spatial visualization of campus venues, event occupancy, and auto-archiving telemetry." },
      { property: "og:title", content: "Campus Digital Twin — CampusPulse" },
      { property: "og:description", content: "Live operational map of university events and venue capacity." },
    ],
  }),
  component: CampusDigitalTwin,
});

export function CampusDigitalTwin() {
  const { metrics } = usePlatformMetrics();
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>("Innovation Lab");

  const campusBuildings = [
    { name: "Innovation Lab", block: "Block C", room: "Hall 302", event: "AI Builders Summit 2026", occ: 298, cap: 300, status: "Occupied", heat: "High" },
    { name: "Main Auditorium", block: "Main Block", room: "Auditorium A", event: "Rhythm & Rangoli Cultural", occ: 1140, cap: 1200, status: "Occupied", heat: "High" },
    { name: "CS Department", block: "Block A", room: "Lab 204", event: "Cloud Kubernetes Workshop", occ: 140, cap: 150, status: "Occupied", heat: "High" },
    { name: "ECE Block", block: "Block B", room: "Seminar Hall 1", event: "Robotics Grand Prix Briefing", occ: 80, cap: 100, status: "Occupied", heat: "Medium" },
    { name: "Seminar Hall B", block: "Block D", room: "Hall B", event: "E-Cell Pitch Practice", occ: 45, cap: 80, status: "Occupied", heat: "Medium" },
    { name: "Central Library", block: "Library Wing", room: "Quiet Zone 2", event: "Study Group Session", occ: 20, cap: 200, status: "Available", heat: "Low" },
    { name: "Open Ground", block: "Campus Quad", room: "Stage 1", event: "Annual Sports Selection", occ: 350, cap: 1000, status: "Occupied", heat: "Medium" },
    { name: "Conference Hall", block: "Admin Block", room: "Room 101", event: "Faculty Governance Council", occ: 30, cap: 50, status: "Occupied", heat: "Medium" },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Campus Digital Twin"
        subtitle="Live visualization of events, venues, occupancy, and campus activity."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin Dashboard", to: "/admin" },
          { label: "Digital Twin" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="rounded-xl px-3 py-1.5 text-xs bg-success-soft text-success border-success/30 font-bold">
              <Radio className="mr-1.5 size-3 text-success animate-pulse" /> Live Telemetry Streaming 🟢
            </Badge>
            <Button
              variant="outline"
              className="rounded-xl bg-card text-xs"
              onClick={async () => {
                await archiveDaemon.runArchiveSweep();
                toast.success("Triggered Realtime Digital Twin Archiving Sweep!");
              }}
            >
              <FolderArchive className="mr-1.5 size-3.5 text-primary" /> Sweep Completed Events
            </Button>
          </div>
        }
      />

      {/* 2. LIVE METRICS BAR (7 STAT CARDS) */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
        <StatCard label="People On Campus" value={1420} icon={Users} tone="primary" index={0} />
        <StatCard label="Events Running" value={metrics.liveEvents} icon={Radio} tone="danger" index={1} />
        <StatCard label="Avg Occupancy" value="92%" icon={Activity} tone="success" index={2} />
        <StatCard label="Today's Attendance" value={450} icon={QrCode} tone="success" index={3} />
        <StatCard label="Registrations" value={metrics.totalRegistrations} icon={TrendingUp} index={4} />
        <StatCard label="Certificates" value={metrics.certificatesGenerated} icon={Award} tone="warning" index={5} />
        <StatCard label="Archived Events" value={metrics.archivedEvents} icon={FolderArchive} tone="primary" index={6} />
      </div>

      {/* 3. INTERACTIVE CAMPUS MAP & VENUE STATUS */}
      <SectionCard title="Interactive Campus Building Map & Heatmap" description="Click any building card to inspect real-time venue telemetry">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campusBuildings.map((b) => {
            const isSelected = selectedBuilding === b.name;
            const pct = Math.round((b.occ / b.cap) * 100);

            return (
              <div
                key={b.name}
                onClick={() => setSelectedBuilding(b.name)}
                className={cn(
                  "cursor-pointer rounded-2xl border p-4 transition-all duration-200 hover:shadow-lg space-y-3",
                  isSelected ? "border-primary bg-primary-soft/30 ring-2 ring-primary/20" : "border-border bg-card hover:border-primary/50",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="size-4 text-primary" />
                    <span className="font-extrabold text-xs text-foreground">{b.name}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      "rounded-full text-[10px] font-bold",
                      b.heat === "High"
                        ? "bg-danger-soft text-danger border-danger/30"
                        : b.heat === "Medium"
                          ? "bg-warning-soft text-warning border-warning/30"
                          : "bg-success-soft text-success border-success/30",
                    )}
                  >
                    {b.heat} Density
                  </Badge>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-foreground truncate">{b.event}</p>
                  <p className="text-[10px] text-muted-foreground">{b.room} ({b.block})</p>
                </div>

                <div className="space-y-1 pt-1 border-t">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Occupancy</span>
                    <span className="font-bold text-foreground">{b.occ} / {b.cap} ({pct}%)</span>
                  </div>
                  <Progress value={pct} className="h-1.5 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* 4. DIGITAL TIMELINE & AI INSIGHTS */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* TIMELINE */}
        <div className="lg:col-span-2 space-y-4">
          <SectionCard title="Live Event Lifecycle Digital Timeline" description="Real-time progression from Live -> Completed -> Auto-Archived">
            <div className="space-y-3 text-xs">
              {[
                { time: "NOW (Live)", title: "AI Builders Summit & Hackathon", venue: "Innovation Lab 302", status: "Live", pct: "99% Occupied" },
                { time: "+30 Mins", title: "Cybersecurity CTF Awards", venue: "CS Department Lab 204", status: "Ending Soon", pct: "93% Occupied" },
                { time: "+1 Hour", title: "Flagship Archiving Sweep Scheduled", venue: "Auto-Archive Daemon", status: "Scheduled", pct: "3 Events Queued" },
                { time: "Today 05:00 PM", title: "Rhythm & Rangoli Cultural Night", venue: "Main Auditorium", status: "Upcoming", pct: "95% Booked" },
              ].map((item, idx) => (
                <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-3">
                  <span className="w-28 text-[11px] font-bold text-primary font-mono shrink-0">{item.time}</span>
                  <div className="flex-1">
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground">{item.venue} · {item.pct}</p>
                  </div>
                  <Badge variant="outline" className="rounded-full text-[10px] font-bold">
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* AI INSIGHTS & SHORTCUTS */}
        <SectionCard title="Digital Twin PulseAI Insights" description="Automated spatial analytics">
          <div className="space-y-3 text-xs">
            <div className="rounded-xl border border-border bg-card p-3 space-y-1">
              <p className="font-bold text-foreground">Highest Density Zone</p>
              <p className="text-[11px] text-muted-foreground">Innovation Lab (99% Occupancy)</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 space-y-1">
              <p className="font-bold text-foreground">Low Activity Zone</p>
              <p className="text-[11px] text-muted-foreground">Central Library Zone 2 (10% Occupancy)</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 space-y-1">
              <p className="font-bold text-foreground">Auto-Archiving Forecast</p>
              <p className="text-[11px] text-muted-foreground">3 Events ready for archival in 45 minutes</p>
            </div>

            <div className="pt-2 border-t space-y-2">
              <Link to="/admin/command-center">
                <Button variant="outline" className="w-full justify-start rounded-xl text-xs bg-card">
                  <Cpu className="mr-2 size-4 text-primary" /> Open Command Center
                </Button>
              </Link>
              <Link to="/admin/archive-logs">
                <Button variant="outline" className="w-full justify-start rounded-xl text-xs bg-card">
                  <FolderArchive className="mr-2 size-4 text-success" /> Open Archive Monitor
                </Button>
              </Link>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
