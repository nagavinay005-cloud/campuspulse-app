import { useState, useMemo, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  AlertCircle,
  Archive,
  ArrowUpRight,
  BarChart3,
  Bell,
  Calendar,
  CalendarClock,
  CheckCircle2,
  Clock,
  Compass,
  FileEdit,
  FolderArchive,
  Hourglass,
  Layers,
  ListChecks,
  Megaphone,
  PlusCircle,
  QrCode,
  Radio,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import {
  activity,
  events as mockEvents,
  isExpired,
  monthlyStats,
  notifications,
  registrants,
  resolveStatus,
  type EventStatus,
} from "@/data/mock";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/organizer/")({
  head: () => ({
    meta: [
      { title: "Organizer Dashboard — CampusPulse" },
      { name: "description", content: "Run your club's events: registrations, attendance, certificates and analytics." },
      { property: "og:title", content: "Organizer Dashboard — CampusPulse" },
      { property: "og:description", content: "Your club's event operations command centre." },
    ],
  }),
  component: OrganizerDashboard,
});

// The 7 explicit stages requested
const SEVEN_STAGES: {
  key: EventStatus;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: string;
  description: string;
}[] = [
  { key: "Draft", label: "Draft", icon: FileEdit, tone: "text-muted-foreground bg-secondary", description: "Created in wizard, pending submission" },
  { key: "Pending Approval", label: "Pending Approval", icon: Hourglass, tone: "text-warning bg-warning-soft", description: "Awaiting admin governance review" },
  { key: "Published", label: "Published", icon: Megaphone, tone: "text-primary bg-primary-soft", description: "Publicly visible on campus feed" },
  { key: "Upcoming", label: "Upcoming", icon: CalendarClock, tone: "text-accent bg-accent-soft", description: "Registrations active & ongoing" },
  { key: "Live", label: "Live", icon: Radio, tone: "text-danger bg-danger-soft animate-pulse", description: "Active check-ins and live sessions" },
  { key: "Completed", label: "Completed", icon: CheckCircle2, tone: "text-success bg-success-soft", description: "Event finished, attendance locked" },
  { key: "Archived", label: "Archived", icon: Archive, tone: "text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-300", description: "Stored in permanent historical records" },
];

const organizerDeadlines = [
  { id: "d1", title: "HackFusion 2026 Registration Cutoff", event: "HackFusion 2026", due: "In 2 days", urgency: "high", time: "Fri, 6:00 PM" },
  { id: "d2", title: "System Design Venue Final Confirmation", event: "System Design Bootcamp", due: "In 4 days", urgency: "medium", time: "Sun, 12:00 PM" },
  { id: "d3", title: "Rhythm & Rangoli Certificate Batch Lock", event: "Rhythm & Rangoli", due: "Tomorrow", urgency: "high", time: "Thu, 5:00 PM" },
  { id: "d4", title: "Robotics Expo Safety Clearance Filing", event: "Robotics Expo", due: "In 6 days", urgency: "low", time: "Mon, 10:00 AM" },
];

export function OrganizerDashboard() {
  const [selectedStageFilter, setSelectedStageFilter] = useState<EventStatus | "All">("All");
  const { events: liveEvents } = useLiveEvents();
  const [recentRegs, setRecentRegs] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("campuspulse_jwt_token");
    if (token) {
      const headers = { "Authorization": `Bearer ${token}` };
      import("@/services/apiClient").then(({ API_BASE_URL }) => {
        fetch(`${API_BASE_URL}/registrations`, { headers })
          .then((res) => res.json())
          .then((data) => {
            if (data.success && Array.isArray(data.data)) {
              setRecentRegs(data.data.slice(0, 5));
            }
          })
          .catch((e) => console.warn("Failed to fetch recent regs for dashboard:", e));
      });
    }
  }, []);

  const events = useMemo(() => {
    return liveEvents;
  }, [liveEvents]);

  // Calculate Overview Counts
  const totalEvents = events.length;
  const upcomingEvents = events.filter((e) => resolveStatus(e) === "Upcoming" || e.status === "Upcoming").length;
  const liveEventsCount = events.filter((e) => resolveStatus(e) === "Live" || e.status === "Live").length;
  const completedEvents = events.filter((e) => resolveStatus(e) === "Completed" || e.status === "Completed").length;
  const archivedEvents = events.filter((e) => resolveStatus(e) === "Archived" || isExpired(e)).length;
  const totalRegistrations = events.reduce((acc, e) => acc + e.registered, 0);

  // Filtered Events for the table view
  const displayEvents = selectedStageFilter === "All"
    ? events.slice(0, 6)
    : events.filter((e) => resolveStatus(e) === selectedStageFilter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <PageHeader
        title="Organizer Command Center"
        subtitle="Codecraft Club · Computer Science & Engineering"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Organizer" }, { label: "Dashboard" }]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/organizer/attendance">
              <Button variant="outline" className="rounded-xl bg-card shadow-sm">
                <QrCode className="mr-2 size-4 text-primary" /> QR Check-In
              </Button>
            </Link>
            <Link to="/organizer/create">
              <Button className="rounded-xl shadow-glow">
                <PlusCircle className="mr-2 size-4" /> Create Event
              </Button>
            </Link>
          </div>
        }
      />

      {/* 1. Dashboard Overview Metrics */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Dashboard Overview
          </h2>
          <Badge variant="outline" className="rounded-full text-xs font-normal">
            Updated Realtime
          </Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <StatCard label="Total Events" value={totalEvents} delta="Across all stages" icon={Layers} index={0} />
          <StatCard label="Upcoming" value={upcomingEvents} delta="Registrations open" icon={CalendarClock} tone="primary" index={1} />
          <StatCard label="Live Events" value={liveEventsCount} delta="Check-in active" icon={Radio} tone="danger" index={2} />
          <StatCard label="Completed" value={completedEvents} delta="Feedback stage" icon={CheckCircle2} tone="success" index={3} />
          <StatCard label="Archived" value={archivedEvents} delta="Auto-archived" icon={FolderArchive} tone="warning" index={4} />
          <StatCard label="Total Signups" value={totalRegistrations} delta="+184 this week" icon={Users} tone="success" index={5} />
        </div>
      </div>

      {/* 2. Quick Actions */}
      <SectionCard title="Quick Actions" description="Fast operations & management navigation">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Link to="/organizer/create">
            <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary transition-transform group-hover:scale-110">
                  <PlusCircle className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Create Event</p>
                <p className="text-xs text-muted-foreground">Launch a new event wizard</p>
              </div>
            </div>
          </Link>

          <Link to="/organizer/events">
            <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                  <ListChecks className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Manage Events</p>
                <p className="text-xs text-muted-foreground">Edit & update schedules</p>
              </div>
            </div>
          </Link>

          <Link to="/organizer/registrations">
            <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-success-soft text-success transition-transform group-hover:scale-110">
                  <Users className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">View Registrations</p>
                <p className="text-xs text-muted-foreground">Student rosters & approvals</p>
              </div>
            </div>
          </Link>

          <Link to="/organizer/analytics">
            <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-warning-soft text-warning transition-transform group-hover:scale-110">
                  <BarChart3 className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Analytics</p>
                <p className="text-xs text-muted-foreground">Attendance & growth stats</p>
              </div>
            </div>
          </Link>

          <Link to="/archive-manager">
            <div className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-300 transition-transform group-hover:scale-110">
                  <Archive className="size-5" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-foreground">Archive Manager</p>
                <p className="text-xs text-muted-foreground">Past logs & certificates</p>
              </div>
            </div>
          </Link>
        </div>
      </SectionCard>

      {/* 3. Event Lifecycle Widget */}
      <SectionCard
        title="Event Lifecycle Tracker"
        description="7-Stage progression pipeline: Draft → Pending Approval → Published → Upcoming → Live → Completed → Archived"
        action={
          selectedStageFilter !== "All" && (
            <Button variant="ghost" size="sm" onClick={() => setSelectedStageFilter("All")} className="rounded-xl text-xs">
              Clear Filter
            </Button>
          )
        }
      >
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {SEVEN_STAGES.map((s, idx) => {
              const stageCount = events.filter((e) => resolveStatus(e) === s.key).length;
              const isSelected = selectedStageFilter === s.key;
              const Icon = s.icon;
              return (
                <button
                  key={s.key}
                  onClick={() => setSelectedStageFilter(isSelected ? "All" : s.key)}
                  className={cn(
                    "relative flex flex-col items-start justify-between rounded-2xl border p-3.5 text-left transition-all",
                    isSelected
                      ? "border-primary bg-primary-soft/50 ring-2 ring-primary/20 shadow-sm"
                      : "border-border bg-card hover:border-border/80 hover:bg-secondary/40",
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className={cn("grid size-8 place-items-center rounded-xl text-xs font-semibold", s.tone)}>
                      <Icon className="size-4" />
                    </span>
                    <Badge variant={stageCount > 0 ? "default" : "secondary"} className="h-5 rounded-full px-1.5 text-[11px]">
                      {stageCount}
                    </Badge>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-muted-foreground">{idx + 1}.</span>
                      <span className="text-xs font-bold truncate text-foreground">{s.label}</span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-[10px] text-muted-foreground">{s.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual Stage Connector Progress Bar */}
          <div className="rounded-xl border border-border bg-secondary/30 p-4">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground mb-2">
              <span>Lifecycle Workflow Pipeline</span>
              <span>7 Total Stages</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {SEVEN_STAGES.map((st, i) => {
                const count = events.filter((e) => resolveStatus(e) === st.key).length;
                return (
                  <div key={st.key} className="space-y-1">
                    <div
                      className={cn(
                        "h-2 w-full rounded-full transition-all",
                        count > 0 ? "bg-primary" : "bg-border",
                      )}
                    />
                    <p className="text-center text-[10px] text-muted-foreground truncate">{st.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 4. Main Dual Column Grid: Recent Events + Event Performance */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column: Recent Events & Recent Registrations (2 cols wide) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Recent Events List */}
          <SectionCard
            title={selectedStageFilter === "All" ? "Recent Events" : `Events in '${selectedStageFilter}'`}
            description="Overview of recent club events and registrations status"
            action={
              <Link to="/organizer/events">
                <Button variant="outline" size="sm" className="rounded-xl text-xs">
                  View All Events
                </Button>
              </Link>
            }
          >
            <div className="space-y-3">
              {displayEvents.length === 0 ? (
                <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground">
                  No events currently found in "{selectedStageFilter}" stage.
                </div>
              ) : (
                displayEvents.map((e) => {
                  const percent = Math.round((e.registered / e.seats) * 100);
                  return (
                    <div
                      key={e.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:bg-secondary/40"
                    >
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Link to="/events/$eventId" params={{ eventId: e.id }}>
                            <p className="truncate font-semibold text-foreground hover:underline">
                              {e.title}
                            </p>
                          </Link>
                          <Badge variant="outline" className="rounded-lg text-[10px]">
                            {e.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(e.start), "dd MMM yyyy, h:mm a")} · {e.venue}
                        </p>
                        <div className="flex items-center gap-3 pt-1 max-w-xs">
                          <Progress value={percent} className="h-1.5" />
                          <span className="text-[11px] font-medium text-muted-foreground whitespace-nowrap">
                            {e.registered}/{e.seats} ({percent}%)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                        <StatusBadge status={resolveStatus(e)} />
                        <Link to="/organizer/events">
                          <Button variant="ghost" size="icon" className="size-8 rounded-xl">
                            <ArrowUpRight className="size-4 text-muted-foreground" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </SectionCard>

          {/* Recent Registrations Feed */}
          <SectionCard
            title="Recent Registrations"
            description="Live feed of student sign-ups across active events"
            action={
              <Link to="/organizer/registrations">
                <Button variant="ghost" size="sm" className="rounded-xl text-xs">
                  Manage Roster
                </Button>
              </Link>
            }
          >
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {(recentRegs.length > 0 ? recentRegs : registrants.slice(0, 5)).map((r) => (
                <div key={r.id} className="flex items-center justify-between gap-3 p-3.5 text-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft font-semibold text-primary text-xs">
                      {(r.student_name || r.name || "S").split(" ").map((n: string) => n[0]).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground truncate">{r.student_name || r.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {r.student_phone || r.roll || "Roll"} · {r.department_name || r.dept || "Computer Science"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant={(r.status === "Approved" || r.status === "Confirmed") ? "default" : r.status === "Waitlisted" ? "secondary" : "outline"}
                      className="rounded-full text-[11px]"
                    >
                      {r.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Right Column: Performance Cards, Deadlines, Notifications (1 col wide) */}
        <div className="space-y-6">
          {/* Event Performance Cards */}
          <SectionCard title="Event Performance" description="Registrations & Attendance breakdown">
            <div className="space-y-4">
              {/* Quick KPI stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xs text-muted-foreground">Avg. Attendance</p>
                  <p className="mt-1 text-2xl font-bold text-success">88%</p>
                  <p className="text-[10px] text-muted-foreground">+4% vs campus avg</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xs text-muted-foreground">Seat Fill Rate</p>
                  <p className="mt-1 text-2xl font-bold text-primary">91%</p>
                  <p className="text-[10px] text-muted-foreground">High capacity usage</p>
                </div>
              </div>

              {/* Recharts Bar Chart */}
              <div className="h-56 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyStats} margin={{ left: -24, right: 4, top: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={11} stroke="var(--color-muted-foreground)" />
                    <YAxis tickLine={false} axisLine={false} fontSize={11} stroke="var(--color-muted-foreground)" />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", background: "var(--color-card)", fontSize: 11 }} />
                    <Bar dataKey="registrations" fill="var(--color-primary)" radius={[4, 4, 0, 0]} name="Registrations" />
                    <Bar dataKey="attendance" fill="var(--color-success)" radius={[4, 4, 0, 0]} name="Attendance" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </SectionCard>

          {/* Upcoming Deadlines */}
          <SectionCard title="Upcoming Deadlines" description="Urgent action items & milestone cutoffs">
            <div className="space-y-3">
              {organizerDeadlines.map((d) => (
                <div key={d.id} className="flex items-start justify-between gap-2 rounded-xl border border-border p-3">
                  <div className="space-y-0.5 min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">{d.title}</p>
                    <p className="text-[11px] text-muted-foreground">{d.event} · {d.time}</p>
                  </div>
                  <Badge
                    variant={d.urgency === "high" ? "destructive" : "secondary"}
                    className="shrink-0 rounded-full text-[10px]"
                  >
                    {d.due}
                  </Badge>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Notification Panel */}
          <SectionCard title="Organizer Alerts" description="Actionable notifications and warnings">
            <div className="space-y-3">
              {notifications.slice(0, 4).map((n) => (
                <div key={n.id} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary text-xs">
                    <Bell className="size-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-foreground">{n.title}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">{n.body}</p>
                    <p className="mt-1 text-[10px] font-medium text-muted-foreground">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

