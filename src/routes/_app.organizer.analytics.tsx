import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  Archive,
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookMarked,
  Building2,
  Calendar,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  Hourglass,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageSquare,
  PieChart as PieChartIcon,
  Printer,
  QrCode,
  Radio,
  Share2,
  Sparkles,
  Star,
  ThumbsUp,
  TrendingUp,
  UserCheck,
  Users,
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
} from "recharts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  categorySplit,
  departmentPerformance,
  events as initialEvents,
  feedbackTrend,
  isExpired,
  monthlyStats,
  resolveStatus,
} from "@/data/mock";
import { archiveLog, archiveQueue } from "@/data/archive";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/organizer/analytics")({
  head: () => ({
    meta: [
      { title: "Organizer Analytics — CampusPulse" },
      { name: "description", content: "Track event performance, registrations, attendance, engagement, and archive statistics." },
      { property: "og:title", content: "Organizer Analytics — CampusPulse" },
      { property: "og:description", content: "Comprehensive charts for event signups, attendance rates, and feedback." },
    ],
  }),
  component: AnalyticsDashboard,
});

const chartColors = ["#2563EB", "#22C55E", "#F59E0B", "#8B5CF6", "#EC4899", "#14B8A6", "#64748B"];

const peakHoursData = [
  { hour: "08:00 AM", signups: 42 },
  { hour: "10:00 AM", signups: 184 },
  { hour: "12:00 PM", signups: 260 },
  { hour: "02:00 PM", signups: 310 },
  { hour: "04:00 PM", signups: 220 },
  { hour: "06:00 PM", signups: 145 },
  { hour: "08:00 PM", signups: 89 },
];

const attendanceRatioData = [
  { name: "Attended (Present)", value: 86, color: "#22C55E" },
  { name: "Absent", value: 14, color: "#EF4444" },
];

const starDistribution = [
  { star: "5 Stars", count: 480, percentage: 68 },
  { star: "4 Stars", count: 160, percentage: 22 },
  { star: "3 Stars", count: 45, percentage: 6 },
  { star: "2 Stars", count: 12, percentage: 2 },
  { star: "1 Star", count: 8, percentage: 2 },
];

export function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [showExportModal, setShowExportModal] = useState(false);

  // Calculate Overview Counts
  const counts = useMemo(() => {
    const totalEvents = initialEvents.length;
    const upcoming = initialEvents.filter((e) => resolveStatus(e) === "Upcoming").length;
    const completed = initialEvents.filter((e) => resolveStatus(e) === "Completed").length;
    const archived = initialEvents.filter((e) => resolveStatus(e) === "Archived" || isExpired(e)).length;
    const totalRegs = initialEvents.reduce((acc, e) => acc + e.registered, 0);
    const avgAttendance = 86; // %
    const certsIssued = 3184;
    const avgFeedback = 4.8;

    return { totalEvents, upcoming, completed, archived, totalRegs, avgAttendance, certsIssued, avgFeedback };
  }, []);

  const tooltipStyle = {
    borderRadius: 16,
    border: "1px solid var(--color-border)",
    background: "var(--color-card)",
    fontSize: 12,
  };

  const handleExportReport = (type: string) => {
    const reportData = {
      generatedAt: new Date().toISOString(),
      range: dateRange,
      overview: counts,
      monthlyStats,
      departmentPerformance,
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const anchor = document.createElement("a");
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", `campuspulse_${type.toLowerCase().replace(/\s+/g, "_")}_report.json`);
    anchor.click();
    toast.success(`Exported ${type} Report for ${dateRange}.`);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Organizer Analytics"
        subtitle="Track event performance, registrations, attendance, engagement, and archive statistics."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Organizer", to: "/organizer" },
          { label: "Analytics" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40 rounded-xl bg-card text-xs font-semibold">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-2xl">
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
                <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                <SelectItem value="Last 90 Days">Last 90 Days</SelectItem>
                <SelectItem value="This Year">This Year</SelectItem>
              </SelectContent>
            </Select>

            <Button
              className="rounded-xl shadow-glow"
              onClick={() => setShowExportModal(true)}
            >
              <Download className="mr-2 size-4" /> Export Analytics
            </Button>
          </div>
        }
      />

      {/* 2. OVERVIEW CARDS (8 Statistic Cards) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Core Performance Metrics ({dateRange})
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            Live Analytics
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Total Events" value={counts.totalEvents} icon={Layers} index={0} />
          <StatCard label="Upcoming" value={counts.upcoming} icon={CalendarClock} tone="primary" index={1} />
          <StatCard label="Completed" value={counts.completed} icon={CheckCircle2} tone="success" index={2} />
          <StatCard label="Archived" value={counts.archived} icon={FolderArchive} tone="warning" index={3} />
          <StatCard label="Total Signups" value={counts.totalRegs} icon={Users} tone="primary" index={4} />
          <StatCard label="Attendance %" value={counts.avgAttendance} suffix="%" icon={TrendingUp} tone="success" index={5} />
          <StatCard label="Certs Issued" value={counts.certsIssued} icon={Award} tone="primary" index={6} />
          <StatCard label="Avg Rating" value={counts.avgFeedback} suffix=" ★" icon={Star} tone="danger" index={7} />
        </div>
      </div>

      {/* 3. INSIGHTS HIGHLIGHT PANEL */}
      <SectionCard title="Key Operational Insights" description="Automated takeaways from registration and attendance velocity">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-primary/20 bg-primary-soft/30 p-4 space-y-1.5">
            <div className="flex items-center justify-between text-primary">
              <span className="text-[10px] font-bold uppercase">Most Popular Event</span>
              <Sparkles className="size-4" />
            </div>
            <p className="font-bold text-sm text-foreground line-clamp-1">HackFusion 2026</p>
            <p className="text-xs text-muted-foreground">348 registrations (99% capacity)</p>
          </div>

          <div className="rounded-2xl border border-success/20 bg-success-soft/30 p-4 space-y-1.5">
            <div className="flex items-center justify-between text-success">
              <span className="text-[10px] font-bold uppercase">Highest Attendance</span>
              <UserCheck className="size-4" />
            </div>
            <p className="font-bold text-sm text-foreground line-clamp-1">System Design Bootcamp</p>
            <p className="text-xs text-muted-foreground">94% attendee check-in rate</p>
          </div>

          <div className="rounded-2xl border border-warning/20 bg-warning-soft/30 p-4 space-y-1.5">
            <div className="flex items-center justify-between text-warning">
              <span className="text-[10px] font-bold uppercase">Best Feedback</span>
              <Star className="size-4" />
            </div>
            <p className="font-bold text-sm text-foreground line-clamp-1">AI Workshop 2026</p>
            <p className="text-xs text-muted-foreground">4.9 ★ average rating</p>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary-soft/30 p-4 space-y-1.5">
            <div className="flex items-center justify-between text-primary">
              <span className="text-[10px] font-bold uppercase">Fastest Filled</span>
              <Zap className="size-4" />
            </div>
            <p className="font-bold text-sm text-foreground line-clamp-1">Rhythm & Rangoli</p>
            <p className="text-xs text-muted-foreground">Filled in 4.2 hours</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 space-y-1.5">
            <div className="flex items-center justify-between text-foreground">
              <span className="text-[10px] font-bold uppercase text-muted-foreground">Top Department</span>
              <Building2 className="size-4 text-muted-foreground" />
            </div>
            <p className="font-bold text-sm text-foreground line-clamp-1">Computer Science</p>
            <p className="text-xs text-muted-foreground">1,840 total participants</p>
          </div>
        </div>
      </SectionCard>

      {/* 4. REGISTRATION ANALYTICS & PEAK HOURS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Monthly Registration Growth" description="Total registrations across past 6 months">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyStats} margin={{ left: -20, right: 8, top: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="registrations" name="Registrations" fill="#2563EB" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Peak Registration Hours" description="Daily timestamp distribution of student signups">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={peakHoursData} margin={{ left: -20, right: 8, top: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="hour" tickLine={false} axisLine={false} fontSize={11} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="signups" name="Signups" fill="#22C55E" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      {/* 5. EVENT PERFORMANCE CARDS & ATTENDANCE */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top & Lowest Performing Events */}
        <SectionCard title="Event Ranking Highlights" description="Highest and lowest signup performance">
          <div className="space-y-4 text-xs">
            <div>
              <p className="font-semibold text-muted-foreground mb-2">TOP PERFORMING EVENTS</p>
              <div className="space-y-2">
                {[
                  { title: "HackFusion 2026", count: "348 Signups", percent: 99 },
                  { title: "AI & ML Workshop", count: "212 Signups", percent: 88 },
                  { title: "Rhythm & Rangoli", count: "480 Signups", percent: 96 },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between rounded-xl bg-secondary/30 p-2.5">
                    <span className="font-bold text-foreground">{item.title}</span>
                    <Badge variant="default" className="rounded-full text-[10px]">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t">
              <p className="font-semibold text-muted-foreground mb-2">MOST ENGAGED (VIEWS & SAVES)</p>
              <div className="space-y-2">
                {[
                  { title: "System Design Bootcamp", stat: "1.4k Views · 210 Saved" },
                  { title: "Cybersecurity CTF", stat: "1.1k Views · 185 Saved" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between rounded-xl bg-secondary/30 p-2.5">
                    <span className="font-medium text-foreground">{item.title}</span>
                    <span className="text-muted-foreground text-[10px]">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Attendance Ratio Pie Chart */}
        <SectionCard title="Attendance Rate Ratio" description="Present vs. Absent registrant distribution">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={attendanceRatioData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={4}>
                  {attendanceRatioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 text-xs font-semibold pt-2">
            <span className="flex items-center gap-1.5 text-success">
              <span className="size-2.5 rounded-full bg-success" /> Present (86%)
            </span>
            <span className="flex items-center gap-1.5 text-danger">
              <span className="size-2.5 rounded-full bg-danger" /> Absent (14%)
            </span>
          </div>
        </SectionCard>

        {/* Category Split Chart */}
        <SectionCard title="Category Distribution" description="Events breakdown by genre & domain">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categorySplit} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {categorySplit.map((_, i) => (
                    <Cell key={i} fill={chartColors[i % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground pt-1 justify-center">
            {categorySplit.map((c, i) => (
              <span key={c.name} className="flex items-center gap-1">
                <span className="size-2 rounded-full" style={{ background: chartColors[i % chartColors.length] }} /> {c.name}
              </span>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* 6. FEEDBACK ANALYTICS & SENTIMENT */}
      <SectionCard title="Feedback Sentiment & Rating Breakdown" description="Student ratings, star distribution, and key highlights">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Average Rating Scorecard */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary/40 p-6 text-center">
            <span className="text-4xl font-extrabold text-foreground">4.8</span>
            <div className="flex items-center gap-1 my-2 text-warning">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="size-5 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-semibold">Based on 705 student reviews</p>
          </div>

          {/* Star Distribution */}
          <div className="space-y-2 text-xs">
            {starDistribution.map((item) => (
              <div key={item.star} className="flex items-center gap-3">
                <span className="w-16 font-semibold text-muted-foreground">{item.star}</span>
                <Progress value={item.percentage} className="h-2 flex-1" />
                <span className="w-10 text-right font-bold">{item.percentage}%</span>
              </div>
            ))}
          </div>

          {/* Top Positive Keywords & Improvements */}
          <div className="space-y-3 text-xs">
            <div>
              <p className="font-semibold text-success flex items-center gap-1 mb-1.5">
                <ThumbsUp className="size-3.5" /> Most Appreciated Aspects
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Engaging Speakers", "Hands-on Labs", "Punctual Schedule", "Clear Certificates"].map((kw) => (
                  <Badge key={kw} variant="outline" className="rounded-full border-success/30 bg-success-soft text-success text-[10px]">
                    + {kw}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t">
              <p className="font-semibold text-warning flex items-center gap-1 mb-1.5">
                <Lightbulb className="size-3.5" /> Key Improvement Areas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["More Seating Capacity", "Wi-Fi Bandwidth", "Longer Q&A Sessions"].map((imp) => (
                  <Badge key={imp} variant="outline" className="rounded-full border-warning/30 bg-warning-soft text-warning text-[10px]">
                    ! {imp}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 7. DEPARTMENT ANALYTICS */}
      <SectionCard title="Department Participation & Attendance" description="Event attendance comparison across university departments">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentPerformance} margin={{ left: -10, right: 16, top: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="dept" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="attendance" name="Attendance Count" fill="#2563EB" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      {/* 8. AUTOMATIC EVENT LIFECYCLE PIPELINE */}
      <SectionCard
        title="7-Stage Automatic Event Lifecycle Pipeline"
        description="Live state tracking from initial draft to automatic archival"
      >
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 text-center">
          {[
            { stage: "Draft", count: initialEvents.filter((e) => e.status === "Draft").length, color: "border-warning/30 bg-warning-soft text-warning" },
            { stage: "Pending Approval", count: initialEvents.filter((e) => e.status === "Pending Approval").length, color: "border-warning/30 bg-warning-soft text-warning" },
            { stage: "Published", count: initialEvents.filter((e) => e.status === "Published").length, color: "border-primary/30 bg-primary-soft text-primary" },
            { stage: "Upcoming", count: initialEvents.filter((e) => resolveStatus(e) === "Upcoming").length, color: "border-primary/30 bg-primary-soft text-primary" },
            { stage: "Live Now", count: initialEvents.filter((e) => resolveStatus(e) === "Live").length, color: "border-danger/30 bg-danger-soft text-danger" },
            { stage: "Completed", count: initialEvents.filter((e) => resolveStatus(e) === "Completed").length, color: "border-success/30 bg-success-soft text-success" },
            { stage: "Auto Archived", count: initialEvents.filter((e) => isExpired(e) || e.status === "Archived").length, color: "border-border bg-secondary text-muted-foreground" },
          ].map((item, idx) => (
            <div key={item.stage} className={cn("rounded-2xl border p-4 flex flex-col justify-between space-y-2", item.color)}>
              <span className="text-[10px] font-bold uppercase tracking-wider">Stage {idx + 1}</span>
              <p className="font-extrabold text-2xl">{item.count}</p>
              <p className="font-semibold text-xs">{item.stage}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* 9. ARCHIVE ANALYTICS & ACTIVITY LOG */}
      <SectionCard
        title="Archive Analytics & Auto-Expiry Queue"
        description="Tracking events automatically archived upon end datetime expiry"
        action={
          <Link to="/archive-manager">
            <Button variant="outline" size="sm" className="rounded-xl text-xs bg-card">
              Archive Manager
            </Button>
          </Link>
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Archive Metrics */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-secondary/40 p-4 text-center text-xs">
              <div>
                <p className="text-muted-foreground text-[10px]">Archived Today</p>
                <p className="font-bold text-foreground text-base">2 Events</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Archived This Month</p>
                <p className="font-bold text-primary text-base">14 Events</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Archive Success</p>
                <p className="font-bold text-success text-base">100%</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-xs text-muted-foreground mb-2">UPCOMING AUTO-ARCHIVES QUEUE</p>
              <div className="space-y-2">
                {archiveQueue().slice(0, 3).map((q) => (
                  <div key={q.event.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-3 text-xs">
                    <div>
                      <p className="font-bold text-foreground">{q.event.title}</p>
                      <p className="text-muted-foreground text-[10px]">Ends: {format(new Date(q.event.end), "dd MMM yyyy")}</p>
                    </div>
                    <Badge variant="outline" className="rounded-full text-warning text-[10px]">
                      In {Math.max(1, Math.round(q.endsInMs / 86400000))} days
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Archive Activity Log */}
          <div>
            <p className="font-semibold text-xs text-muted-foreground mb-2">RECENT ARCHIVE ACTIVITY LOG</p>
            <div className="space-y-2 text-xs">
              {archiveLog.slice(0, 4).map((log) => (
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
      </SectionCard>

      {/* EXPORT ANALYTICS MODAL */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Export Analytics Report</DialogTitle>
            <DialogDescription>
              Download comprehensive analytics reports for <strong className="text-foreground">{dateRange}</strong>.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-3 py-3">
            {[
              { label: "PDF Executive Report", icon: FileCheck, type: "PDF Executive" },
              { label: "Excel Master Roster", icon: FileSpreadsheet, type: "Excel Master" },
              { label: "CSV Data Dump", icon: Download, type: "CSV Raw" },
              { label: "Attendance Summary", icon: QrCode, type: "Attendance Summary" },
              { label: "Certificate Log", icon: Award, type: "Certificate Log" },
              { label: "Archive Activity Log", icon: FolderArchive, type: "Archive Activity" },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => {
                  handleExportReport(item.type);
                  setShowExportModal(false);
                }}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-3 transition-all hover:border-primary hover:bg-primary-soft/30"
              >
                <item.icon className="size-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold">{item.label}</span>
              </button>
            ))}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowExportModal(false)} className="rounded-xl w-full">
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
