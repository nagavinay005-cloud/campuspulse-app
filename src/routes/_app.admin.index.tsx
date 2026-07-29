import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  Archive,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Database,
  Download,
  Eye,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  HardDrive,
  Hourglass,
  Info,
  Layers,
  Megaphone,
  Pencil,
  PlusCircle,
  Printer,
  QrCode,
  Radio,
  RefreshCw,
  Search,
  Send,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UserX,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import {
  activity,
  categorySplit,
  departments,
  events as mockEvents,
  isExpired,
  monthlyStats,
  resolveStatus,
  type CampusEvent,
} from "@/data/mock";
import { archiveLog, archiveQueue } from "@/data/archive";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — CampusPulse" },
      { name: "description", content: "Monitor, approve, and manage all campus events, users, and departments from one centralized workspace." },
      { property: "og:title", content: "Admin Dashboard — CampusPulse" },
      { property: "og:description", content: "Centralized governance command center for campus events, users, and auto-archiving." },
    ],
  }),
  component: AdminDashboard,
});

const recentNotifications = [
  { id: "n1", title: "New Event Approval Request", detail: "HackFusion 2026 submitted by Computer Science Club", time: "10 mins ago", type: "approval" },
  { id: "n2", title: "New Organizer Registered", detail: "Prof. Ananya Roy assigned to Robotics Society", time: "25 mins ago", type: "user" },
  { id: "n3", title: "Archive Completed", detail: "System Design Bootcamp auto-archived with 100% attendance log", time: "1 hour ago", type: "archive" },
  { id: "n4", title: "Registration Spike Detected", detail: "Rhythm & Rangoli reached 96% capacity in 4 hours", time: "2 hours ago", type: "system" },
  { id: "n5", title: "System Health Check Passed", detail: "Database backup & Cloud Functions operating nominal", time: "3 hours ago", type: "health" },
];

export function AdminDashboard() {
  const { events: liveEvents, loading: liveLoading } = useLiveEvents();
  const [selectedPreviewEvent, setSelectedPreviewEvent] = useState<CampusEvent | null>(null);

  // Merge live API events with mock events (live events take priority)
  const eventsList = useMemo(() => {
    if (liveEvents.length === 0) return mockEvents;
    const liveIds = new Set(liveEvents.map((e) => e.id));
    const uniqueMock = mockEvents.filter((e) => !liveIds.has(e.id));
    return [...liveEvents, ...uniqueMock];
  }, [liveEvents]);

  // Compute metrics
  const counts = useMemo(() => {
    const totalStudents = 12480;
    const totalOrganizers = 142;
    const totalDepts = departments.length;
    const totalClubs = 24;
    const totalEvents = eventsList.length;
    const activeEvents = eventsList.filter((e) => !isExpired(e) && resolveStatus(e) !== "Archived").length;
    const archivedEventsCount = eventsList.filter((e) => isExpired(e) || e.status === "Archived").length;
    const pendingApprovalsCount = eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length;

    return { totalStudents, totalOrganizers, totalDepts, totalClubs, totalEvents, activeEvents, archivedEventsCount, pendingApprovalsCount };
  }, [eventsList]);

  // Pending queue
  const pendingEvents = useMemo(() => {
    return eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted");
  }, [eventsList]);

  // Handlers for event approvals
  const handleApproveEvent = (event: CampusEvent) => {
    setEventsList((prev) =>
      prev.map((e) => (e.id === event.id ? { ...e, status: "Published" } : e)),
    );
    toast.success(`Approved & Published "${event.title}".`);
  };

  const handleRejectEvent = (event: CampusEvent) => {
    setEventsList((prev) =>
      prev.map((e) => (e.id === event.id ? { ...e, status: "Rejected" } : e)),
    );
    toast.error(`Rejected "${event.title}". Returned to organizer.`);
  };

  const handleRequestChanges = (event: CampusEvent) => {
    toast.warning(`Requested change notes sent to organizer for "${event.title}".`);
  };

  const handleExportReport = (type: string) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(eventsList, null, 2));
    const anchor = document.createElement("a");
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", `admin_${type.toLowerCase().replace(/\s+/g, "_")}_report.json`);
    anchor.click();
    toast.success(`Exported ${type} Report.`);
  };

  const tooltipStyle = {
    borderRadius: 16,
    border: "1px solid var(--color-border)",
    background: "var(--color-card)",
    fontSize: 12,
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Admin Dashboard"
        subtitle="Monitor, approve, and manage all campus events, users, and departments from one centralized workspace."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin Dashboard" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 rounded-xl bg-card border px-3 py-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5 text-primary" />
              <span>28 Jul 2026, 11:20 AM</span>
            </div>

            <Link to="/admin/approvals">
              <Button className="rounded-xl shadow-glow">
                <BadgeCheck className="mr-2 size-4" /> Review Approvals ({counts.pendingApprovalsCount})
              </Button>
            </Link>
          </div>
        }
      />

      {/* 2. OVERVIEW STATISTICS (8 Metric Cards) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Campus Platform Statistics
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            Realtime Telemetry
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Total Students" value={counts.totalStudents} icon={Users} index={0} />
          <StatCard label="Organizers" value={counts.totalOrganizers} icon={UserCheck} tone="primary" index={1} />
          <StatCard label="Departments" value={counts.totalDepts} icon={Building2} tone="primary" index={2} />
          <StatCard label="Clubs" value={counts.totalClubs} icon={Globe} index={3} />
          <StatCard label="Total Events" value={counts.totalEvents} icon={Layers} index={4} />
          <StatCard label="Active Events" value={counts.activeEvents} icon={Radio} tone="danger" index={5} />
          <StatCard label="Archived" value={counts.archivedEventsCount} icon={FolderArchive} tone="warning" index={6} />
          <StatCard label="Pending" value={counts.pendingApprovalsCount} icon={BadgeCheck} tone="warning" index={7} />
        </div>
      </div>

      {/* 3. QUICK ACTIONS SHORTCUTS */}
      <SectionCard title="Admin Quick Navigation" description="Instant shortcuts to governance modules">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {[
            { label: "Approve Events", path: "/admin/approvals", icon: BadgeCheck, badge: `${counts.pendingApprovalsCount}` },
            { label: "Manage Users", path: "/admin/users", icon: Users },
            { label: "Departments", path: "/admin/departments", icon: Building2 },
            { label: "Reports", path: "/admin/reports", icon: FileText },
            { label: "Analytics", path: "/organizer/analytics", icon: BarChart3 },
            { label: "Settings", path: "/admin/settings", icon: Settings },
            { label: "Archive Center", path: "/archive-manager", icon: Archive },
          ].map((act) => (
            <Link key={act.label} to={act.path}>
              <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-all hover:border-primary hover:bg-primary-soft/30 hover:shadow-sm">
                <act.icon className="size-6 text-primary mb-2 transition-transform group-hover:scale-110" />
                <span className="text-xs font-bold text-foreground">{act.label}</span>
                {act.badge && (
                  <Badge variant="destructive" className="absolute right-2 top-2 size-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                    {act.badge}
                  </Badge>
                )}
              </div>
            </Link>
          ))}
        </div>
      </SectionCard>

      {/* 4. PENDING EVENT APPROVAL TABLE */}
      <SectionCard
        title={`Pending Event Approvals (${pendingEvents.length})`}
        description="Review and approve event announcements submitted by department organizers"
        action={
          <Link to="/admin/approvals">
            <Button variant="outline" size="sm" className="rounded-xl text-xs bg-card">
              View All Queue
            </Button>
          </Link>
        }
      >
        {pendingEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-8 text-center">
            <CheckCircle2 className="size-10 text-success mb-2" />
            <p className="font-bold text-sm text-foreground">Queue Clear!</p>
            <p className="text-xs text-muted-foreground mt-1">No pending event approval requests awaiting admin action.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <Table>
              <TableHeader className="bg-secondary/40">
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead className="hidden md:table-cell">Organizer & Club</TableHead>
                  <TableHead className="hidden lg:table-cell">Department</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingEvents.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell className="max-w-[240px]">
                      <div className="flex items-center gap-3">
                        <img src={e.banner} alt="" className="size-10 rounded-xl object-cover shrink-0 hidden sm:block" />
                        <div className="min-w-0">
                          <p className="font-bold text-sm text-foreground line-clamp-1">{e.title}</p>
                          <p className="text-xs text-muted-foreground">Start: {format(new Date(e.start), "dd MMM yyyy")}</p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="hidden md:table-cell text-xs font-medium">
                      <p className="text-foreground">{e.organizer}</p>
                      <p className="text-muted-foreground text-[11px]">{e.club}</p>
                    </TableCell>

                    <TableCell className="hidden lg:table-cell text-xs text-muted-foreground">{e.department}</TableCell>

                    <TableCell>
                      <Badge variant="outline" className="rounded-full text-[10px]">{e.category}</Badge>
                    </TableCell>

                    <TableCell>
                      <StatusBadge status={resolveStatus(e)} />
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button size="sm" variant="ghost" className="h-8 rounded-lg text-xs" onClick={() => setSelectedPreviewEvent(e)}>
                          <Eye className="size-3.5 mr-1" /> View
                        </Button>
                        <Button size="sm" className="h-8 rounded-lg text-xs bg-success text-success-foreground" onClick={() => handleApproveEvent(e)}>
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 rounded-lg text-xs border-danger/30 text-danger bg-card" onClick={() => handleRejectEvent(e)}>
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </SectionCard>

      {/* 5. EVENT LIFECYCLE WORKFLOW (8-Stage Pipeline) */}
      <SectionCard
        title="Campus Event Lifecycle Workflow"
        description="Central governance pipeline for all events across every stage"
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-center">
          {[
            { stage: "Draft", count: eventsList.filter((e) => e.status === "Draft").length, color: "border-muted bg-secondary text-muted-foreground" },
            { stage: "Pending", count: eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length, color: "border-warning/30 bg-warning-soft text-warning" },
            { stage: "Approved", count: eventsList.filter((e) => e.status === "Published" && resolveStatus(e) === "Upcoming").length, color: "border-primary/30 bg-primary-soft text-primary" },
            { stage: "Published", count: eventsList.filter((e) => e.status === "Published").length, color: "border-primary/30 bg-primary-soft text-primary" },
            { stage: "Upcoming", count: eventsList.filter((e) => resolveStatus(e) === "Upcoming").length, color: "border-primary/30 bg-primary-soft text-primary" },
            { stage: "Live Now", count: eventsList.filter((e) => resolveStatus(e) === "Live").length, color: "border-danger/30 bg-danger-soft text-danger" },
            { stage: "Completed", count: eventsList.filter((e) => resolveStatus(e) === "Completed").length, color: "border-success/30 bg-success-soft text-success" },
            { stage: "Auto Archived", count: eventsList.filter((e) => isExpired(e) || e.status === "Archived").length, color: "border-border bg-secondary text-muted-foreground" },
          ].map((item, idx) => (
            <div key={item.stage} className={cn("rounded-2xl border p-3 flex flex-col justify-between space-y-1.5", item.color)}>
              <span className="text-[9px] font-bold uppercase tracking-wider">Stage {idx + 1}</span>
              <p className="font-extrabold text-xl">{item.count}</p>
              <p className="font-semibold text-xs">{item.stage}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 6. SYSTEM HEALTH & AUTO-ARCHIVE MONITOR */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* System Health Status */}
        <SectionCard title="System Health & Telemetry" description="Realtime server infrastructure status">
          <div className="grid gap-3 sm:grid-cols-2 text-xs">
            {[
              { label: "Database Cluster", status: "Operational", sub: "Firebase / PostgreSQL Ready", icon: Database },
              { label: "Cloud Storage", status: "14.2 GB / 100 GB (14%)", sub: "Banners & Poster Presets", icon: HardDrive },
              { label: "Notification Gateway", status: "Active (0 errors)", sub: "Email & Web Push Daemon", icon: Bell },
              { label: "Auth & RBAC Service", status: "100% Uptime", sub: "Student & Admin Auth", icon: ShieldCheck },
              { label: "Cloud Functions", status: "Nominal", sub: "0% Latency Spike", icon: Zap },
              { label: "Archive Scheduler", status: "Active Daemon", sub: "Next run in 12 mins", icon: FolderArchive },
            ].map((sh) => (
              <div key={sh.label} className="rounded-2xl border border-border bg-card p-3.5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-muted-foreground">{sh.label}</span>
                  <Badge variant="outline" className="rounded-full border-success/30 bg-success-soft text-success text-[10px]">
                    <span className="mr-1 size-1.5 animate-pulse rounded-full bg-success inline-block" /> Healthy
                  </Badge>
                </div>
                <p className="font-bold text-sm text-foreground">{sh.status}</p>
                <p className="text-[10px] text-muted-foreground">{sh.sub}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Auto Archive Monitor */}
        <SectionCard title="Auto-Archive Daemon Monitor" description="Monitoring automatic archival upon event expiration">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-3 text-center text-xs">
              <div>
                <p className="text-muted-foreground text-[10px]">Queue Size</p>
                <p className="font-bold text-foreground text-sm">{archiveQueue().length} Events</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Archived Today</p>
                <p className="font-bold text-primary text-sm">2 Events</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Success Rate</p>
                <p className="font-bold text-success text-sm">100%</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-xs text-muted-foreground mb-2">NEXT IN ARCHIVE QUEUE</p>
              <div className="space-y-2 text-xs">
                {archiveQueue().slice(0, 2).map((q) => (
                  <div key={q.event.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
                    <div>
                      <p className="font-bold text-foreground">{q.event.title}</p>
                      <p className="text-[10px] text-muted-foreground">{q.event.department}</p>
                    </div>
                    <Badge variant="outline" className="rounded-full text-warning text-[10px]">
                      Ends in {Math.max(1, Math.round(q.endsInMs / 86400000))}d
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* 7. SYSTEM ANALYTICS CHARTS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Campus Event Volume Growth" description="Monthly event submission & approval volume">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyStats} margin={{ left: -20, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="adminGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="registrations" stroke="#2563EB" strokeWidth={2} fill="url(#adminGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Category Distribution Split" description="Breakdown across all event domains">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categorySplit} dataKey="value" nameKey="name" innerRadius={50} outerRadius={85} paddingAngle={3}>
                  {categorySplit.map((_, i) => (
                    <Cell key={i} fill={["#2563EB", "#22C55E", "#F59E0B", "#8B5CF6", "#EC4899"][i % 5]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      {/* 8. USER & DEPARTMENT SUMMARIES */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* User Summary */}
        <SectionCard title="User Account Summary" description="Platform user role distribution">
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-3 text-center">
              <div>
                <p className="text-muted-foreground text-[10px]">Students</p>
                <p className="font-bold text-foreground text-sm">12,480</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Organizers</p>
                <p className="font-bold text-primary text-sm">142</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Admins</p>
                <p className="font-bold text-success text-sm">6</p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Weekly Ratio</span>
                <span className="font-semibold text-foreground">92% (11,481 Active)</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </div>
        </SectionCard>

        {/* Department Summary */}
        <SectionCard title="Department & Club Summary" description="University academic & cultural units">
          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-4 gap-2 rounded-xl bg-secondary/40 p-3 text-center">
              <div>
                <p className="text-muted-foreground text-[10px]">Departments</p>
                <p className="font-bold text-foreground text-sm">8</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Student Chapters</p>
                <p className="font-bold text-primary text-sm">14</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Clubs</p>
                <p className="font-bold text-foreground text-sm">24</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Faculty Leads</p>
                <p className="font-bold text-success text-sm">16</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border p-3">
              <span className="text-muted-foreground">Most Active Department</span>
              <span className="font-bold text-primary">Computer Science (1,840 Signups)</span>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* 9. REPORTS DOWNLOAD & AUDIT TRAIL */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Reports Download */}
        <SectionCard title="Platform Reports Center" description="Instant governance & telemetry downloads">
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { label: "Platform Overview", type: "Platform" },
              { label: "Attendance Summary", type: "Attendance" },
              { label: "Registration Roster", type: "Registration" },
              { label: "Archive Activity", type: "Archive" },
              { label: "Department Metrics", type: "Department" },
            ].map((rep) => (
              <Button
                key={rep.type}
                variant="outline"
                className="justify-between rounded-xl bg-card text-xs h-10"
                onClick={() => handleExportReport(rep.type)}
              >
                <span className="flex items-center gap-2">
                  <FileSpreadsheet className="size-4 text-primary" /> {rep.label}
                </span>
                <Download className="size-3.5 text-muted-foreground" />
              </Button>
            ))}
          </div>
        </SectionCard>

        {/* Audit Trail & Notifications */}
        <SectionCard title="Recent Notifications & Audit Log" description="Central system activity timeline">
          <div className="space-y-2.5 text-xs">
            {recentNotifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                <Activity className="size-4 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between">
                    <p className="font-semibold text-foreground">{n.title}</p>
                    <span className="text-[10px] text-muted-foreground">{n.time}</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] mt-0.5">{n.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* EVENT PREVIEW MODAL */}
      <Dialog open={selectedPreviewEvent !== null} onOpenChange={() => setSelectedPreviewEvent(null)}>
        {selectedPreviewEvent && (
          <DialogContent className="max-w-lg rounded-2xl p-6">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <StatusBadge status={resolveStatus(selectedPreviewEvent)} />
                <Badge variant="outline" className="rounded-full text-xs">{selectedPreviewEvent.category}</Badge>
              </div>
              <DialogTitle className="text-lg font-bold mt-2">{selectedPreviewEvent.title}</DialogTitle>
              <DialogDescription>
                Submitted by <strong className="text-foreground">{selectedPreviewEvent.organizer}</strong> ({selectedPreviewEvent.department} · {selectedPreviewEvent.club})
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 py-2 text-xs">
              <img src={selectedPreviewEvent.banner} alt="" className="h-36 w-full rounded-xl object-cover" />
              <p className="text-muted-foreground">{selectedPreviewEvent.summary}</p>
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-3">
                <div>
                  <p className="text-muted-foreground text-[10px]">Start Datetime</p>
                  <p className="font-semibold">{format(new Date(selectedPreviewEvent.start), "dd MMM yyyy, h:mm a")}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Venue</p>
                  <p className="font-semibold">{selectedPreviewEvent.venue}</p>
                </div>
              </div>
            </div>

            <DialogFooter className="flex-wrap gap-2">
              <Button variant="outline" onClick={() => setSelectedPreviewEvent(null)} className="rounded-xl text-xs">
                Close
              </Button>
              <Button
                size="sm"
                className="rounded-xl text-xs bg-success text-success-foreground"
                onClick={() => {
                  handleApproveEvent(selectedPreviewEvent);
                  setSelectedPreviewEvent(null);
                }}
              >
                Approve & Publish
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
