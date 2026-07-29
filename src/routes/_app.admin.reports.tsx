import { useMemo, useState } from "react";
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
  BookOpen,
  Building2,
  Calendar,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileCheck,
  FileBarChart,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  GraduationCap,
  Hourglass,
  Info,
  Layers,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  PieChart as PieChartIcon,
  Printer,
  Radio,
  RefreshCw,
  Search,
  Send,
  Settings,
  Sparkles,
  Star,
  Table as TableIcon,
  ThumbsUp,
  Trash2,
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
  Legend,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { EmptyState, PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import {
  categorySplit,
  departmentPerformance,
  departments,
  events,
  monthlyStats,
} from "@/data/mock";
import { archiveLog, archivePerMonth, archiveQueue } from "@/data/archive";
import { usePlatformMetrics } from "@/hooks/useAnalyticsHooks";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/reports")({
  head: () => ({
    meta: [
      { title: "Reports & Analytics — CampusPulse" },
      { name: "description", content: "Generate reports and monitor platform-wide performance, registrations, attendance, and archived events." },
      { property: "og:title", content: "Reports & Analytics — CampusPulse" },
      { property: "og:description", content: "Comprehensive reporting and analytics center for university event governance." },
    ],
  }),
  component: Reports,
});

interface ReportCategory {
  id: string;
  name: string;
  desc: string;
  icon: any;
  formatCount: string;
  badge: string;
}

const REPORT_CATEGORIES: ReportCategory[] = [
  { id: "event", name: "Event Reports", desc: "Total events, status breakdown, monthly trends, and execution stats", icon: Layers, formatCount: "PDF, Excel, CSV", badge: "Core" },
  { id: "reg", name: "Registration Reports", desc: "Daily/Monthly signups, department split, capacity usage, and top events", icon: TrendingUp, formatCount: "PDF, Excel, CSV", badge: "Popular" },
  { id: "att", name: "Attendance Reports", desc: "QR check-in rates, present vs absent ratios, and department turnout", icon: UserCheck, formatCount: "PDF, Excel, CSV", badge: "NAAC Ready" },
  { id: "cert", name: "Certificate Reports", desc: "Certificates generated, downloaded, pending, and student verification IDs", icon: Award, formatCount: "PDF, Excel, CSV", badge: "Automated" },
  { id: "fb", name: "Feedback Reports", desc: "Rating distributions, sentiment analysis, top rated events, and suggestions", icon: Star, formatCount: "PDF, Excel", badge: "Analytics" },
  { id: "dept", name: "Department Reports", desc: "Department event ownership, faculty lead performance, and club activity", icon: Building2, formatCount: "PDF, Excel, CSV", badge: "Governance" },
  { id: "org", name: "Organizer Reports", desc: "Organizer activity metrics, approval timelines, and submission rates", icon: Users, formatCount: "PDF, Excel", badge: "RBAC" },
  { id: "arch", name: "Archive Reports", desc: "Auto-archived events, archival timeline logs, SLA delay, and frozen summaries", icon: FolderArchive, formatCount: "PDF, Excel, CSV", badge: "Auto Expiry" },
];

export function Reports() {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedReportType, setSelectedReportType] = useState("Event Reports");
  const [scheduleFrequency, setScheduleFrequency] = useState("Weekly");

  const { metrics } = usePlatformMetrics();

  // Statistics
  const stats = useMemo(() => {
    const totalReports = 164;
    const eventsThisMonth = metrics.activeEvents + metrics.upcomingEvents + 28;
    const registrations = metrics.totalRegistrations;
    const attendanceRate = `${metrics.attendanceRate}%`;
    const certsGenerated = metrics.certificatesGenerated;
    const archivedEvents = metrics.archivedEvents;
    const activeDepts = 8;
    const platformGrowth = "+24%";

    return { totalReports, eventsThisMonth, registrations, attendanceRate, certsGenerated, archivedEvents, activeDepts, platformGrowth };
  }, [metrics]);

  const handleExport = (reportName: string, formatType: "PDF" | "Excel" | "CSV" | "Print") => {
    if (formatType === "Print") {
      window.print();
      return;
    }
    const sampleData = "data:text/csv;charset=utf-8," + encodeURIComponent(`Report,Format,Date\n${reportName},${formatType},${new Date().toISOString()}`);
    const link = document.createElement("a");
    link.setAttribute("href", sampleData);
    link.setAttribute("download", `${reportName.toLowerCase().replace(/\s+/g, "_")}_${dateRange.toLowerCase().replace(/\s+/g, "_")}.${formatType.toLowerCase()}`);
    link.click();
    toast.success(`Exported ${reportName} in ${formatType} format.`);
  };

  const handleGenerateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExport(selectedReportType, "PDF");
    setShowGenerateModal(false);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Scheduled ${selectedReportType} to deliver ${scheduleFrequency.toLowerCase()} to admin email.`);
    setShowScheduleModal(false);
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
        title="Reports & Analytics"
        subtitle="Generate reports and monitor platform-wide performance, registrations, attendance, and archived events."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin", to: "/admin" },
          { label: "Reports & Analytics" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => setShowScheduleModal(true)}>
              <CalendarClock className="mr-1.5 size-4 text-primary" /> Schedule Report
            </Button>
            <Button className="rounded-xl shadow-glow" onClick={() => setShowGenerateModal(true)}>
              <Download className="mr-1.5 size-4" /> Generate Report
            </Button>
          </div>
        }
      />

      {/* 2. OVERVIEW CARDS (8 Statistic Cards) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Platform Business Intelligence & Telemetry
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            NAAC / NBA Export Ready
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Total Reports" value={stats.totalReports} icon={FileBarChart} index={0} />
          <StatCard label="Events Month" value={stats.eventsThisMonth} icon={Layers} tone="primary" index={1} />
          <StatCard label="Registrations" value={stats.registrations} icon={TrendingUp} tone="primary" index={2} />
          <StatCard label="Attendance" value={stats.attendanceRate} icon={UserCheck} tone="success" index={3} />
          <StatCard label="Certs Generated" value={stats.certsGenerated} icon={Award} tone="warning" index={4} />
          <StatCard label="Archived Events" value={stats.archivedEvents} icon={FolderArchive} index={5} />
          <StatCard label="Active Depts" value={stats.activeDepts} icon={Building2} index={6} />
          <StatCard label="Growth" value={stats.platformGrowth} icon={Zap} tone="success" index={7} />
        </div>
      </div>

      {/* 3. DATE RANGE SELECTOR & DOWNLOAD CENTER */}
      <SectionCard title="Report Date Filtering & Quick Export" description="Select timeframes for platform-wide data aggregation">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {["Today", "This Week", "This Month", "Last 30 Days", "Custom Date Range"].map((range) => (
              <Button
                key={range}
                variant={dateRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setDateRange(range);
                  toast.info(`Updated report window to ${range}`);
                }}
                className="rounded-xl text-xs"
              >
                {range}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground mr-1">Download Format:</span>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleExport("Platform Summary", "PDF")}>
              PDF
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleExport("Platform Summary", "Excel")}>
              Excel
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleExport("Platform Summary", "CSV")}>
              CSV
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleExport("Platform Summary", "Print")}>
              <Printer className="size-3.5" />
            </Button>
          </div>
        </div>
      </SectionCard>

      {/* 4. 8 REPORT CATEGORIES GRID */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Available Report Suites
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REPORT_CATEGORIES.map((cat) => (
            <div key={cat.id} className="lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <cat.icon className="size-6 text-primary" />
                  <Badge variant="outline" className="rounded-full text-[10px] bg-primary-soft text-primary border-primary/20">
                    {cat.badge}
                  </Badge>
                </div>

                <h3 className="font-bold text-base text-foreground mt-3">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{cat.desc}</p>
              </div>

              <div className="border-t pt-3 flex items-center justify-between gap-2">
                <span className="text-[10px] text-muted-foreground">{cat.formatCount}</span>
                <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs bg-card" onClick={() => handleExport(cat.name, "PDF")}>
                  <Download className="mr-1 size-3.5" /> Export
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. DEDICATED ARCHIVE REPORTS SECTION (Auto-Archive Expiry Telemetry) */}
      <SectionCard
        title="Dedicated Automatic Event Archiving Reports & Telemetry"
        description="Comprehensive audit of automatically expired and archived campus events"
      >
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-4 text-center">
            <div className="rounded-2xl border border-border bg-card p-3.5">
              <p className="text-muted-foreground text-[10px]">Total Auto-Archived</p>
              <p className="font-extrabold text-xl text-foreground mt-1">412 Events</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-3.5">
              <p className="text-muted-foreground text-[10px]">Archival Success Rate</p>
              <p className="font-extrabold text-xl text-success mt-1">100%</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-3.5">
              <p className="text-muted-foreground text-[10px]">Average Archival Time</p>
              <p className="font-extrabold text-xl text-warning mt-1">1.0 Hour</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-3.5">
              <p className="text-muted-foreground text-[10px]">Upcoming Queue</p>
              <p className="font-extrabold text-xl text-primary mt-1">{archiveQueue().length} Events</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-xs text-muted-foreground mb-2">MONTHLY ARCHIVAL TREND</p>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={archivePerMonth} margin={{ left: -20, right: 8, top: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                    <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="archived" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <p className="font-semibold text-xs text-muted-foreground mb-2">ARCHIVE SYSTEM LOGS</p>
              <div className="space-y-2 text-xs">
                {archiveLog.slice(0, 3).map((log) => (
                  <div key={log.id} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                    <FolderArchive className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground">{log.title}</p>
                      <p className="text-[11px] text-muted-foreground">{log.detail}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{log.when}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 6. ANALYTICS CHARTS DASHBOARD */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Monthly Registration & Attendance Growth" description="Student engagement trajectory over time">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyStats} margin={{ left: -20, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="repGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="registrations" stroke="#2563EB" strokeWidth={2} fill="url(#repGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Attendance Rates by Department" description="Actual check-in turnout percentages">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentPerformance} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="dept" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="attendance" fill="#22C55E" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      {/* 7. INSIGHTS PANEL */}
      <SectionCard title="Automatically Generated Platform Insights" description="AI-driven highlights across departments and clubs">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 text-xs">
          {[
            { title: "Most Popular Event", val: "HackFusion 2026", desc: "450 Registrations (100% Filled)", icon: Sparkles },
            { title: "Best Organizer", val: "Dr. Rajesh Verma", desc: "18 Events · 98% Rating", icon: Award },
            { title: "Highest Attendance", val: "Rhythm & Rangoli", desc: "96% Present Check-In Rate", icon: UserCheck },
            { title: "Fastest Growing Dept", val: "Computer Science", desc: "1,840 Signups (+32%)", icon: TrendingUp },
            { title: "Most Active Club", val: "Coding Club", desc: "14 Events Hosted This Term", icon: Globe },
          ].map((ins) => (
            <div key={ins.title} className="rounded-2xl border border-border bg-card p-4 space-y-1.5 flex flex-col justify-between">
              <ins.icon className="size-5 text-primary mb-1" />
              <div>
                <p className="text-muted-foreground text-[10px] uppercase font-bold">{ins.title}</p>
                <p className="font-bold text-sm text-foreground line-clamp-1 mt-0.5">{ins.val}</p>
                <p className="text-[11px] text-muted-foreground mt-1">{ins.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* GENERATE REPORT MODAL */}
      <Dialog open={showGenerateModal} onOpenChange={setShowGenerateModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Generate Custom Report</DialogTitle>
            <DialogDescription>Select parameters to bundle and download instant analytics.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleGenerateSubmit} className="space-y-4 py-2 text-xs">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">Report Suite</Label>
              <Select value={selectedReportType} onValueChange={setSelectedReportType}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {REPORT_CATEGORIES.map((r) => (
                    <SelectItem key={r.name} value={r.name}>{r.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Timeframe</Label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="This Week">This Week</SelectItem>
                  <SelectItem value="This Month">This Month</SelectItem>
                  <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                  <SelectItem value="Custom Date Range">Custom Date Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DialogFooter className="pt-2">
              <Button variant="outline" type="button" onClick={() => setShowGenerateModal(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button type="submit" className="rounded-xl shadow-glow">
                Download PDF Report
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* SCHEDULE REPORT MODAL */}
      <Dialog open={showScheduleModal} onOpenChange={setShowScheduleModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Schedule Recurring Report</DialogTitle>
            <DialogDescription>Automate automated report delivery directly to your inbox.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleScheduleSubmit} className="space-y-4 py-2 text-xs">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">Report Type</Label>
              <Select value={selectedReportType} onValueChange={setSelectedReportType}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {REPORT_CATEGORIES.map((r) => (
                    <SelectItem key={r.name} value={r.name}>{r.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Delivery Frequency</Label>
              <Select value={scheduleFrequency} onValueChange={setScheduleFrequency}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Daily">Daily at Midnight</SelectItem>
                  <SelectItem value="Weekly">Weekly (Monday 8 AM)</SelectItem>
                  <SelectItem value="Monthly">Monthly (1st Day)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DialogFooter className="pt-2">
              <Button variant="outline" type="button" onClick={() => setShowScheduleModal(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button type="submit" className="rounded-xl shadow-glow">
                Schedule Delivery
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
