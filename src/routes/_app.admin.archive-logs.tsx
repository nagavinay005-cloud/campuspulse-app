import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Cpu,
  Database,
  Download,
  Eye,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  GraduationCap,
  History,
  Hourglass,
  Info,
  Layers,
  LayoutGrid,
  Lightbulb,
  Link2,
  ListCheck,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  PieChart as PieChartIcon,
  Play,
  Plus,
  Printer,
  Radio,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Table as TableIcon,
  ThumbsUp,
  Timer,
  Trash2,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UserX,
  Wrench,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "react-charts-mock-safe";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EmptyState, PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import { SummaryModal } from "@/components/app/summary-modal";
import {
  archivedEvents as initialArchivedEvents,
  departments,
  events as initialEvents,
  isExpired,
  resolveStatus,
  type CampusEvent,
} from "@/data/mock";
import {
  archiveLog,
  archivePerMonth,
  archiveQueue,
  getArchiveMeta,
} from "@/data/archive";
import { cn } from "@/lib/utils";

// Mock safe recharts fallback to ensure zero runtime issues
import {
  BarChart as ReBarChart,
  Bar as ReBar,
  CartesianGrid as ReCartesianGrid,
  XAxis as ReXAxis,
  YAxis as ReYAxis,
  Tooltip as ReTooltip,
  ResponsiveContainer as ReResponsiveContainer,
  PieChart as RePieChart,
  Pie as RePie,
  Cell as ReCell,
} from "recharts";

export const Route = createFileRoute("/_app/admin/archive-logs")({
  head: () => ({
    meta: [
      { title: "Automatic Event Lifecycle & Archive Center — CampusPulse" },
      { name: "description", content: "Monitor, automate, and manage the complete lifecycle of every campus event from creation to automatic archiving." },
      { property: "og:title", content: "Automatic Event Lifecycle & Archive Center — CampusPulse" },
      { property: "og:description", content: "Flagship governance engine for automatic event expiration and archival." },
    ],
  }),
  component: AdminArchiveLogs,
});

function safeFormat(dateVal: any, fmt: string) {
  try {
    if (!dateVal) return "N/A";
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);
    return format(d, fmt);
  } catch {
    return String(dateVal || "N/A");
  }
}

export function AdminArchiveLogs() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [activeTab, setActiveTab] = useState("kanban");
  const [selectedStageFilter, setSelectedStageFilter] = useState("All");

  // Selected event modal
  const [activeEventDetail, setActiveEventDetail] = useState<CampusEvent | null>(null);

  // Auto Archive Daemon State
  const [daemonActive, setDaemonActive] = useState(true);
  const [nextScanSeconds, setNextScanSeconds] = useState(14);
  const [lastScanAgo, setLastScanAgo] = useState(46);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(safeFormat(new Date(), "dd MMM yyyy, h:mm:ss a"));

    const timer = setInterval(() => {
      setCurrentTime(safeFormat(new Date(), "dd MMM yyyy, h:mm:ss a"));
      setNextScanSeconds((prev) => (prev <= 1 ? 60 : prev - 1));
      setLastScanAgo((prev) => (prev >= 60 ? 1 : prev + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const allArchived = useMemo(() => initialArchivedEvents(), []);
  const queue = useMemo(() => archiveQueue(), []);

  // Compute Kanban Columns
  const kanbanColumns = [
    { title: "Draft", status: "Draft", color: "border-muted-foreground/30 bg-muted/20" },
    { title: "Pending Approval", status: "Pending Approval", color: "border-warning/30 bg-warning-soft/20" },
    { title: "Published", status: "Published", color: "border-primary/30 bg-primary-soft/20" },
    { title: "Upcoming", status: "Upcoming", color: "border-primary/30 bg-primary-soft/20" },
    { title: "Live Now", status: "Live", color: "border-danger/30 bg-danger-soft/20" },
    { title: "Completed", status: "Completed", color: "border-success/30 bg-success-soft/20" },
    { title: "Archived", status: "Archived", color: "border-border bg-card" },
  ];

  // Lifecycle Stages for Pipeline
  const pipelineStages = [
    { stage: "All", count: initialEvents.length + allArchived.length, pct: 100 },
    { stage: "Draft", count: initialEvents.filter((e) => e.status === "Draft").length, pct: 5 },
    { stage: "Pending Approval", count: initialEvents.filter((e) => e.status === "Pending Approval").length, pct: 12 },
    { stage: "Approved", count: initialEvents.filter((e) => e.status === "Published").length, pct: 25 },
    { stage: "Published", count: initialEvents.filter((e) => e.status === "Published" && !isExpired(e)).length, pct: 40 },
    { stage: "Upcoming", count: initialEvents.filter((e) => resolveStatus(e) === "Upcoming").length, pct: 60 },
    { stage: "Live Now", count: initialEvents.filter((e) => resolveStatus(e) === "Live").length, pct: 75 },
    { stage: "Completed", count: initialEvents.filter((e) => resolveStatus(e) === "Completed").length, pct: 90 },
    { stage: "Auto Archived", count: allArchived.length, pct: 100 },
  ];

  // Filtered Archived Cards
  const filteredArchived = useMemo(() => {
    return allArchived.filter((e) => {
      if (selectedStageFilter === "All") return true;
      return true;
    });
  }, [allArchived, selectedStageFilter]);

  const tooltipStyle = {
    borderRadius: 16,
    border: "1px solid var(--color-border)",
    background: "var(--color-card)",
    fontSize: 12,
  };

  return (
    <div className="space-y-8 pb-24">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Automatic Event Lifecycle & Archive Center"
        subtitle="Monitor, automate, and manage the complete lifecycle of every campus event from creation to automatic archiving."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin", to: "/admin" },
          { label: "Archive Center" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="rounded-xl px-3 py-1.5 font-mono text-xs bg-card">
              <Clock className="mr-1.5 size-3.5 text-primary" /> {mounted ? currentTime : "Loading Time..."}
            </Badge>
            <Button
              variant="outline"
              className="rounded-xl bg-card text-xs"
              onClick={async () => {
                const { archiveDaemon } = await import("@/services/archiveDaemon");
                const res = await archiveDaemon.runArchiveSweep();
                toast.success(`Manual sweep executed! Processed ${res.archivedEvents.length} event(s).`);
              }}
            >
              <RotateCcw className="mr-1.5 size-3.5 text-primary" /> Run Manual Archiving Sweep
            </Button>
            <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={() => toast.success("Archive telemetry log exported as CSV")}>
              <Download className="mr-1.5 size-4" /> Export Telemetry Log
            </Button>
          </div>
        }
      />

      {/* 2. AUTO ARCHIVE ENGINE MONITOR (FLAGSHIP OPERATIONAL BANNER) */}
      <div className="rounded-2xl border border-success/30 bg-card p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full size-3 bg-success"></span>
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base text-foreground">Automatic Archiving Engine Daemon</h2>
                <Badge variant="outline" className="rounded-full bg-success-soft text-success border-success/30 font-semibold text-[10px]">
                  Engine Status: {daemonActive ? "Running" : "Paused"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                The lifecycle engine executes every 30 seconds, auto-expiring announcements and freezing event data 1.0 hour post event end time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-muted-foreground">Daemon Switch:</span>
            <Switch
              checked={daemonActive}
              onCheckedChange={async (val) => {
                setDaemonActive(val);
                const { archiveDaemon } = await import("@/services/archiveDaemon");
                if (val) {
                  archiveDaemon.startDaemon(30000);
                } else {
                  archiveDaemon.pauseDaemon();
                }
              }}
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 text-center text-xs">
          <div className="rounded-xl bg-secondary/40 p-3">
            <p className="text-muted-foreground text-[10px]">Next Scheduled Scan</p>
            <p className="font-extrabold text-foreground text-sm mt-0.5">In {nextScanSeconds}s</p>
          </div>
          <div className="rounded-xl bg-secondary/40 p-3">
            <p className="text-muted-foreground text-[10px]">Last Scan Sweep</p>
            <p className="font-extrabold text-foreground text-sm mt-0.5">{lastScanAgo}s ago</p>
          </div>
          <div className="rounded-xl bg-secondary/40 p-3">
            <p className="text-muted-foreground text-[10px]">Ready For Archive</p>
            <p className="font-extrabold text-warning text-sm mt-0.5">0 Events</p>
          </div>
          <div className="rounded-xl bg-secondary/40 p-3">
            <p className="text-muted-foreground text-[10px]">Archive Success Rate</p>
            <p className="font-extrabold text-success text-sm mt-0.5">100.0%</p>
          </div>
          <div className="rounded-xl bg-secondary/40 p-3">
            <p className="text-muted-foreground text-[10px]">Avg Processing SLA</p>
            <p className="font-extrabold text-primary text-sm mt-0.5">1.0 Hour</p>
          </div>
          <div className="rounded-xl bg-secondary/40 p-3">
            <p className="text-muted-foreground text-[10px]">Queued For Archive</p>
            <p className="font-extrabold text-primary text-sm mt-0.5">{queue.length} Events</p>
          </div>
        </div>
      </div>

      {/* 3. 8-STAGE LIFECYCLE WORKFLOW PIPELINE */}
      <SectionCard title="Governed Event Lifecycle Pipeline" description="Click any stage to filter events across the board">
        <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 text-xs">
          {pipelineStages.map((ps) => (
            <button
              key={ps.stage}
              onClick={() => setSelectedStageFilter(ps.stage)}
              className={cn(
                "group relative flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all hover:border-primary",
                selectedStageFilter === ps.stage ? "border-primary ring-2 ring-primary/20 bg-card shadow-sm" : "border-border bg-card/60",
              )}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{ps.stage}</span>
              <p className="font-extrabold text-lg text-foreground my-1">{ps.count}</p>
              <Progress value={ps.pct} className="h-1 w-full" />
            </button>
          ))}
        </div>
      </SectionCard>

      {/* 4. WORKSPACE TABS (Kanban Board vs Archive Queue vs Disappearing Feed vs Analytics) */}
      <SectionCard title="Lifecycle Management Workspace" description="Switch between live views and archiving controls">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="rounded-xl bg-secondary/50 p-1 mb-6">
            <TabsTrigger value="kanban" className="rounded-lg text-xs font-bold">
              <LayoutGrid className="mr-1.5 size-3.5" /> Lifecycle Board (Kanban)
            </TabsTrigger>
            <TabsTrigger value="queue" className="rounded-lg text-xs font-bold">
              <Timer className="mr-1.5 size-3.5" /> Auto Archive Queue ({queue.length})
            </TabsTrigger>
            <TabsTrigger value="disappearing" className="rounded-lg text-xs font-bold">
              <Megaphone className="mr-1.5 size-3.5" /> Disappearing Announcements Feed
            </TabsTrigger>
            <TabsTrigger value="archived" className="rounded-lg text-xs font-bold">
              <FolderArchive className="mr-1.5 size-3.5" /> Archived Events ({allArchived.length})
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-lg text-xs font-bold">
              <BarChart3 className="mr-1.5 size-3.5" /> Archive Analytics
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: KANBAN BOARD */}
          <TabsContent value="kanban">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-[1300px]">
                {kanbanColumns.map((col) => {
                  const items = col.status === "Archived" ? allArchived : initialEvents.filter((e) => resolveStatus(e) === col.status || e.status === col.status);
                  return (
                    <div key={col.title} className="w-72 shrink-0 rounded-2xl border p-3 space-y-3 bg-secondary/20">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="font-bold text-xs text-foreground">{col.title}</span>
                        <Badge variant="secondary" className="rounded-full text-[10px]">{items.length}</Badge>
                      </div>

                      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                        {items.map((e) => (
                          <div key={e.id} className="lift-on-hover rounded-xl border border-border bg-card p-3 space-y-2 text-xs">
                            <img src={e.banner} alt="" className="h-20 w-full rounded-lg object-cover" />
                            <p className="font-bold text-foreground line-clamp-1">{e.title}</p>
                            <p className="text-[10px] text-muted-foreground">{e.department} · {e.organizer}</p>
                            <div className="flex items-center justify-between border-t pt-2">
                              <StatusBadge status={resolveStatus(e)} />
                              <Button size="sm" variant="ghost" className="h-6 text-[10px] p-1" onClick={() => setActiveEventDetail(e)}>
                                Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: AUTO ARCHIVE QUEUE */}
          <TabsContent value="queue">
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <Table>
                <TableHeader className="bg-secondary/40">
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Ends At</TableHead>
                    <TableHead>Countdown Until Archive</TableHead>
                    <TableHead>Current Status</TableHead>
                    <TableHead>Priority</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {queue.map((qItem) => {
                    const ev = qItem.event;
                    const minsLeft = Math.max(1, Math.round(qItem.endsInMs / 60000));
                    const endsFormatted = safeFormat(ev.end, "dd MMM, h:mm a");
                    return (
                      <TableRow key={ev.id}>
                        <TableCell className="font-bold text-xs text-foreground">{ev.title}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{ev.department}</TableCell>
                        <TableCell className="text-xs font-mono">{endsFormatted}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="rounded-full text-[10px] bg-warning-soft text-warning border-warning/30 font-bold">
                            In {minsLeft > 60 ? `${Math.round(minsLeft / 60)} hrs` : `${minsLeft} mins`}
                          </Badge>
                        </TableCell>
                        <TableCell><StatusBadge status={qItem.status} /></TableCell>
                        <TableCell><Badge variant="outline" className="rounded-full text-[10px]">Normal</Badge></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* TAB 3: DISAPPEARING ANNOUNCEMENTS FEED DEMO */}
          <TabsContent value="disappearing">
            <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <h3 className="font-bold text-sm text-foreground">Active Announcement Feed Expiry Filter</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Demonstrating how announcements automatically disappear from public student view the moment their end datetime passes.
                  </p>
                </div>
                <Badge variant="outline" className="rounded-full bg-primary-soft text-primary">Live Filter Active</Badge>
              </div>

              <div className="space-y-3 text-xs">
                {initialEvents.slice(0, 4).map((ev) => (
                  <div key={ev.id} className="flex items-center justify-between rounded-xl border p-3 bg-card">
                    <div className="flex items-center gap-3">
                      <img src={ev.banner} alt="" className="size-10 rounded-lg object-cover shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">{ev.title}</p>
                        <p className="text-[10px] text-muted-foreground">{ev.department} · Auto-Removes 1 hr post end</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-right">
                      <div>
                        <span className="text-[10px] text-muted-foreground block">Auto Remove Time</span>
                        <span className="font-mono text-xs font-semibold">{safeFormat(ev.end, "dd MMM, h:mm a")}</span>
                      </div>
                      <StatusBadge status={resolveStatus(ev)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: ARCHIVED EVENTS GRID */}
          <TabsContent value="archived">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArchived.map((arch) => {
                const meta = getArchiveMeta(arch.id);
                return (
                  <div key={arch.id} className="lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-3 flex flex-col justify-between">
                    <div>
                      <img src={arch.banner} alt="" className="h-32 w-full rounded-xl object-cover" />
                      <div className="flex items-center justify-between mt-3">
                        <Badge variant="outline" className="rounded-full text-[10px] bg-secondary text-muted-foreground">
                          Archived
                        </Badge>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          Archived: {safeFormat(arch.end, "dd MMM yyyy")}
                        </span>
                      </div>
                      <h4 className="font-bold text-base text-foreground mt-2">{arch.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{arch.department} · {arch.organizer}</p>

                      <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-2 mt-3 text-center text-xs">
                        <div>
                          <p className="text-muted-foreground text-[10px]">Attended</p>
                          <p className="font-bold text-foreground">{arch.attended ?? 180}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-[10px]">Certificates</p>
                          <p className="font-bold text-primary">{meta.certificates}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-[10px]">Feedback</p>
                          <p className="font-bold text-warning">{meta.feedbackScore} ★</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-3 flex items-center justify-between gap-1">
                      <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs" onClick={() => setActiveEventDetail(arch)}>
                        <Eye className="mr-1 size-3.5" /> Summary
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs bg-card" onClick={() => toast.info("UI Restore request submitted to super-admin.")}>
                        Restore
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* TAB 5: ARCHIVE ANALYTICS */}
          <TabsContent value="analytics">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <p className="font-semibold text-xs text-muted-foreground mb-2">MONTHLY AUTOMATIC ARCHIVAL VOLUME</p>
                <div className="h-64">
                  <ReResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={archivePerMonth} margin={{ left: -20, right: 8, top: 8 }}>
                      <ReCartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                      <ReXAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                      <ReYAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                      <ReTooltip contentStyle={tooltipStyle} />
                      <ReBar dataKey="archived" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                    </ReBarChart>
                  </ReResponsiveContainer>
                </div>
              </div>

              <div>
                <p className="font-semibold text-xs text-muted-foreground mb-2">ARCHIVE RULES COMPLIANCE RATIO</p>
                <div className="h-64">
                  <ReResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <RePie
                        data={[
                          { name: "Auto Archived On Time", value: 412 },
                          { name: "Manual Archival Override", value: 6 },
                        ]}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={50}
                        outerRadius={85}
                        paddingAngle={3}
                      >
                        <ReCell fill="#22C55E" />
                        <ReCell fill="#F59E0B" />
                      </RePie>
                      <ReTooltip contentStyle={tooltipStyle} />
                    </RePieChart>
                  </ReResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionCard>

      {/* 5. ARCHIVE TIMELINE & RAW SYSTEM LOGS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Live Archive Execution Timeline" description="Realtime log of engine operations">
          <div className="space-y-3 text-xs">
            {archiveLog.map((log) => (
              <div key={log.id} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                <FolderArchive className="size-4 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-foreground">{log.title}</p>
                    <span className="text-[10px] text-muted-foreground">{log.when}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{log.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Archive Rules Governance Policies" description="Active rules maintaining project requirements">
          <div className="space-y-2.5 text-xs">
            {[
              { rule: "Automatic Event Archiving", desc: "Events move from Completed to Archived after scheduled end time.", active: true },
              { rule: "Disappearing Announcement Feed", desc: "Expired announcements automatically vanish from active student feed.", active: true },
              { rule: "Preserved Attendance & Certificates", desc: "Archived events retain all attendance logs and claimable certificates.", active: true },
              { rule: "Preserved Analytics & Reports", desc: "Historical event metrics remain available for NAAC audit reports.", active: true },
            ].map((r) => (
              <div key={r.rule} className="flex items-center justify-between rounded-xl border p-3 bg-card">
                <div>
                  <p className="font-bold text-foreground">{r.rule}</p>
                  <p className="text-[11px] text-muted-foreground">{r.desc}</p>
                </div>
                <Badge variant="outline" className="rounded-full bg-success-soft text-success border-success/30 text-[10px]">
                  Active Rule
                </Badge>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* EVENT SUMMARY MODAL */}
      <SummaryModal
        event={activeEventDetail}
        open={activeEventDetail !== null}
        onOpenChange={(v) => !v && setActiveEventDetail(null)}
      />
    </div>
  );
}
