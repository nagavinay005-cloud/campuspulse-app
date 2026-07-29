import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowRight,
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
  FileEdit,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  Hourglass,
  Info,
  Layers,
  LayoutGrid,
  Link2,
  ListCheck,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Phone,
  Plus,
  Printer,
  Radio,
  RefreshCw,
  Search,
  Send,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Table as TableIcon,
  ThumbsUp,
  Time,
  Trash2,
  TrendingUp,
  UserCheck,
  Users,
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
} from "recharts";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
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
  departments,
  events as mockEvents,
  isExpired,
  resolveStatus,
  type CampusEvent,
} from "@/data/mock";
import { archiveLog, archiveQueue } from "@/data/archive";
import { subscribeEvents, type EventDocument } from "@/lib/firestore";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/approvals")({
  head: () => ({
    meta: [
      { title: "Event Approval Center — CampusPulse" },
      { name: "description", content: "Review, approve, reject, and monitor all submitted campus events before publication." },
      { property: "og:title", content: "Event Approval Center — CampusPulse" },
      { property: "og:description", content: "Governance approval pipeline for university campus announcements." },
    ],
  }),
  component: Approvals,
});

interface ExtendedEvent extends CampusEvent {
  priority: "High" | "Normal" | "Urgent";
  submittedDate: string;
  checklist: {
    bannerUploaded: boolean;
    venueSelected: boolean;
    registrationConfigured: boolean;
    scheduleValid: boolean;
    speakerDetails: boolean;
    contactInfo: boolean;
    departmentAssigned: boolean;
  };
  rejectionReason?: string;
  changeNotes?: string;
  publishSchedule: "Immediately" | "Scheduled" | "Manual";
  scheduledPublishTime?: string;
}

const PREDEFINED_REJECTION_REASONS = [
  "Incomplete Information",
  "Incorrect Schedule / Venue Clash",
  "Duplicate Event Announcement",
  "Campus Policy Violation",
  "Department Approval Pending",
];

const PREDEFINED_CHANGE_NOTES = [
  "Update Event Banner Image",
  "Correct Venue Selection",
  "Fix Event Start/End Schedule",
  "Improve Description Details",
  "Update Registration Deadline",
];

/** Helper to convert "10:00 AM" → "10:00" or "02:30 PM" → "14:30" for Date parsing */
function convertTimeTo24hr(time12: string): string {
  const match = time12.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return "10:00";
  let [, hStr, min, period] = match;
  let h = parseInt(hStr, 10);
  if (period.toUpperCase() === "PM" && h !== 12) h += 12;
  if (period.toUpperCase() === "AM" && h === 12) h = 0;
  return `${h.toString().padStart(2, "0")}:${min}`;
}

export function Approvals() {
  const { events: liveEvents } = useLiveEvents();
  const [eventsList, setEventsList] = useState<CampusEvent[]>(mockEvents);
  const [selectedStage, setSelectedStage] = useState<string>("Pending Review");
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");

  // Sync live events into local state when they load
  useEffect(() => {
    if (liveEvents.length > 0) {
      const liveIds = new Set(liveEvents.map((e) => e.id));
      const uniqueMock = mockEvents.filter((e) => !liveIds.has(e.id));
      setEventsList([...liveEvents, ...uniqueMock]);
    }
  }, [liveEvents]);

  // Selected event for review
  const [reviewEvent, setReviewEvent] = useState<ExtendedEvent | null>(null);
  const [showGuidelinesModal, setShowGuidelinesModal] = useState(false);

  // Action Modals State
  const [rejectModalEvent, setRejectModalEvent] = useState<CampusEvent | null>(null);
  const [selectedRejectReason, setSelectedRejectReason] = useState<string>(PREDEFINED_REJECTION_REASONS[0]);
  const [customRejectReason, setCustomRejectReason] = useState<string>("");

  const [changeModalEvent, setChangeModalEvent] = useState<CampusEvent | null>(null);
  const [selectedChangeNote, setSelectedChangeNote] = useState<string>(PREDEFINED_CHANGE_NOTES[0]);
  const [customChangeNotes, setCustomChangeNotes] = useState<string>("");

  // Transform events with approval metadata
  const extendedEvents: ExtendedEvent[] = useMemo(() => {
    return eventsList.map((e, idx) => ({
      ...e,
      priority: idx % 3 === 0 ? "High" : idx % 5 === 0 ? "Urgent" : "Normal",
      submittedDate: format(new Date(Date.now() - (idx + 1) * 86400000), "yyyy-MM-dd"),
      checklist: {
        bannerUploaded: !!e.banner,
        venueSelected: !!e.venue,
        registrationConfigured: true,
        scheduleValid: true,
        speakerDetails: idx % 2 === 0,
        contactInfo: true,
        departmentAssigned: !!e.department,
      },
      publishSchedule: "Immediately",
    }));
  }, [eventsList]);

  // Statistics
  const stats = useMemo(() => {
    const pending = extendedEvents.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length;
    const approved = extendedEvents.filter((e) => e.status === "Published").length;
    const rejected = 3;
    const published = extendedEvents.filter((e) => e.status === "Published" && !isExpired(e)).length;
    const live = extendedEvents.filter((e) => resolveStatus(e) === "Live").length;
    const archived = extendedEvents.filter((e) => isExpired(e) || e.status === "Archived").length;
    const avgTime = "2.4 hrs";
    const todayRequests = 6;

    return { pending, approved, rejected, published, live, archived, avgTime, todayRequests };
  }, [extendedEvents]);

  // Horizontal Workflow Pipeline Stages
  const pipelineStages = [
    { stage: "All", count: extendedEvents.length, tone: "bg-secondary text-foreground" },
    { stage: "Draft", count: extendedEvents.filter((e) => e.status === "Draft").length, tone: "bg-secondary text-muted-foreground" },
    { stage: "Submitted", count: extendedEvents.filter((e) => e.status === "Submitted").length, tone: "bg-warning-soft text-warning" },
    { stage: "Pending Review", count: extendedEvents.filter((e) => e.status === "Pending Approval").length, tone: "bg-warning-soft text-warning" },
    { stage: "Approved", count: extendedEvents.filter((e) => e.status === "Published").length, tone: "bg-primary-soft text-primary" },
    { stage: "Upcoming", count: extendedEvents.filter((e) => resolveStatus(e) === "Upcoming").length, tone: "bg-primary-soft text-primary" },
    { stage: "Live Now", count: extendedEvents.filter((e) => resolveStatus(e) === "Live").length, tone: "bg-danger-soft text-danger" },
    { stage: "Completed", count: extendedEvents.filter((e) => resolveStatus(e) === "Completed").length, tone: "bg-success-soft text-success" },
    { stage: "Auto Archived", count: extendedEvents.filter((e) => isExpired(e) || e.status === "Archived").length, tone: "bg-secondary text-muted-foreground" },
  ];

  // Filtered Queue
  const filteredEvents = useMemo(() => {
    return extendedEvents.filter((e) => {
      const matchesSearch = !searchTerm.trim() || e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.organizer.toLowerCase().includes(searchTerm.toLowerCase()) || e.club.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = deptFilter === "All" || e.department === deptFilter;

      let matchesStage = true;
      if (selectedStage === "Draft") matchesStage = e.status === "Draft";
      if (selectedStage === "Submitted") matchesStage = e.status === "Submitted";
      if (selectedStage === "Pending Review") matchesStage = e.status === "Pending Approval";
      if (selectedStage === "Approved") matchesStage = e.status === "Published";
      if (selectedStage === "Upcoming") matchesStage = resolveStatus(e) === "Upcoming";
      if (selectedStage === "Live Now") matchesStage = resolveStatus(e) === "Live";
      if (selectedStage === "Completed") matchesStage = resolveStatus(e) === "Completed";
      if (selectedStage === "Auto Archived") matchesStage = isExpired(e) || e.status === "Archived";

      return matchesSearch && matchesDept && matchesStage;
    });
  }, [extendedEvents, searchTerm, deptFilter, selectedStage]);

  // Handlers
  const handleApprove = async (e: CampusEvent) => {
    const numericId = e.dbId || parseInt(e.id, 10);
    const isMock = isNaN(numericId);

    if (!isMock) {
      try {
        const { API_BASE_URL } = await import("@/services/apiClient");
        const token = localStorage.getItem("campuspulse_jwt_token");
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const res = await fetch(`${API_BASE_URL}/events/${numericId}/approve`, {
          method: "PATCH",
          headers,
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to approve event on backend");
        }
      } catch (err: any) {
        toast.error(`Backend Error: ${err.message}`);
        return;
      }
    }

    try {
      const { updateEvent } = await import("@/lib/firestore");
      await updateEvent(e.id, { status: "Published" });
    } catch (err) {
      console.warn("Firestore approval sync notice:", err);
    }
    setEventsList((prev) =>
      prev.map((item) => (item.id === e.id ? { ...item, status: "Published" } : item)),
    );
    toast.success(`Approved & Published "${e.title}". It is now live across campus.`);
    if (reviewEvent?.id === e.id) setReviewEvent(null);
  };

  const handleConfirmReject = async () => {
    if (!rejectModalEvent) return;
    const reason = selectedRejectReason === "Custom Reason" ? customRejectReason : selectedRejectReason;

    const numericId = rejectModalEvent.dbId || parseInt(rejectModalEvent.id, 10);
    const isMock = isNaN(numericId);

    if (!isMock) {
      try {
        const { API_BASE_URL } = await import("@/services/apiClient");
        const token = localStorage.getItem("campuspulse_jwt_token");
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const res = await fetch(`${API_BASE_URL}/events/${numericId}/reject`, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ reason }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to reject event on backend");
        }
      } catch (err: any) {
        toast.error(`Backend Error: ${err.message}`);
        return;
      }
    }

    try {
      const { updateEvent } = await import("@/lib/firestore");
      await updateEvent(rejectModalEvent.id, { status: "Rejected", rejectionReason: reason });
    } catch (err) {
      console.warn("Firestore reject sync notice:", err);
    }

    setEventsList((prev) =>
      prev.map((item) => (item.id === rejectModalEvent.id ? { ...item, status: "Rejected" } : item)),
    );

    toast.error(`Rejected "${rejectModalEvent.title}". Reason: ${reason}`);
    setRejectModalEvent(null);
    setCustomRejectReason("");
    if (reviewEvent?.id === rejectModalEvent.id) setReviewEvent(null);
  };

  const handleConfirmRequestChanges = () => {
    if (!changeModalEvent) return;
    const note = customChangeNotes ? `${selectedChangeNote}: ${customChangeNotes}` : selectedChangeNote;

    toast.warning(`Requested changes for "${changeModalEvent.title}". Notes: ${note}`);
    setChangeModalEvent(null);
    setCustomChangeNotes("");
    if (reviewEvent?.id === changeModalEvent.id) setReviewEvent(null);
  };

  // Helper calculation for checklist
  const getChecklistProgress = (item: ExtendedEvent) => {
    const vals = Object.values(item.checklist);
    const passed = vals.filter(Boolean).length;
    return Math.round((passed / vals.length) * 100);
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
        title="Event Approval Center"
        subtitle="Review, approve, reject, and monitor all submitted campus events before publication."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin", to: "/admin" },
          { label: "Event Approval" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => setShowGuidelinesModal(true)}>
              <Info className="mr-1.5 size-4 text-primary" /> Approval Guidelines
            </Button>
          </div>
        }
      />

      {/* 2. OVERVIEW CARDS (8 Statistic Cards) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Approval Metrics & Processing Telemetry
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            SLA: 24 Hours
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Pending" value={stats.pending} icon={BadgeCheck} tone="warning" index={0} />
          <StatCard label="Approved" value={stats.approved} icon={CheckCircle2} tone="success" index={1} />
          <StatCard label="Rejected" value={stats.rejected} icon={XCircle} tone="danger" index={2} />
          <StatCard label="Published" value={stats.published} icon={Megaphone} tone="primary" index={3} />
          <StatCard label="Live Now" value={stats.live} icon={Radio} tone="danger" index={4} />
          <StatCard label="Archived" value={stats.archived} icon={FolderArchive} index={5} />
          <StatCard label="Avg SLA Time" value={stats.avgTime} icon={Clock} index={6} />
          <StatCard label="Today's Req" value={stats.todayRequests} icon={TrendingUp} tone="primary" index={7} />
        </div>
      </div>

      {/* 3. HORIZONTAL APPROVAL PIPELINE (9 Stages) */}
      <SectionCard title="Horizontal Governance Pipeline" description="Click any stage to filter queue submissions">
        <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
          {pipelineStages.map((ps) => (
            <button
              key={ps.stage}
              onClick={() => setSelectedStage(ps.stage)}
              className={cn(
                "group relative flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all hover:border-primary",
                selectedStage === ps.stage ? "border-primary ring-2 ring-primary/20 bg-card shadow-sm" : "border-border bg-card/60",
              )}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{ps.stage}</span>
              <p className="font-extrabold text-lg text-foreground my-1">{ps.count}</p>
              <span className={cn("size-2 rounded-full", ps.tone)} />
            </button>
          ))}
        </div>
      </SectionCard>

      {/* 4. SUBMISSION QUEUE TABLE */}
      <SectionCard
        title={`Submissions Queue (${filteredEvents.length})`}
        description="Filter by department or search by event title"
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="relative min-w-[240px] flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search event title, organizer, or club..."
                className="rounded-xl pl-9 bg-card text-xs"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Department:</span>
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger className="h-9 w-40 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Departments</SelectItem>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <EmptyState icon={BadgeCheck} title="No events in this approval stage" description="Select another stage or clear search parameters." />
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <Table>
                <TableHeader className="bg-secondary/40">
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead className="hidden md:table-cell">Organizer & Club</TableHead>
                    <TableHead className="hidden lg:table-cell">Department</TableHead>
                    <TableHead>Proposed Date</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEvents.map((e) => (
                    <TableRow key={e.id} className="hover:bg-secondary/40">
                      <TableCell className="max-w-[240px]">
                        <div className="flex items-center gap-3">
                          <img src={e.banner} alt="" className="size-10 rounded-xl object-cover shrink-0 hidden sm:block" />
                          <div className="min-w-0">
                            <p className="font-bold text-sm text-foreground line-clamp-1">{e.title}</p>
                            <p className="text-xs text-muted-foreground">{e.category}</p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="hidden md:table-cell text-xs font-medium">
                        <p className="text-foreground">{e.organizer}</p>
                        <p className="text-muted-foreground text-[11px]">{e.club}</p>
                      </TableCell>

                      <TableCell className="hidden lg:table-cell text-xs text-muted-foreground">{e.department}</TableCell>

                      <TableCell className="text-xs font-medium">
                        {format(new Date(e.start), "dd MMM yyyy")}
                      </TableCell>

                      <TableCell>
                        <Badge
                          variant="outline"
                          className={cn(
                            "rounded-full text-[10px]",
                            e.priority === "Urgent" && "bg-danger-soft text-danger border-danger/30 font-bold",
                            e.priority === "High" && "bg-warning-soft text-warning border-warning/30",
                          )}
                        >
                          {e.priority}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <StatusBadge status={resolveStatus(e)} />
                      </TableCell>

                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button size="sm" variant="ghost" className="h-8 rounded-lg text-xs" onClick={() => setReviewEvent(e)}>
                            <Eye className="mr-1 size-3.5" /> Review
                          </Button>
                          <Button size="sm" className="h-8 rounded-lg text-xs bg-success text-success-foreground" onClick={() => handleApprove(e)}>
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 rounded-lg text-xs border-warning/30 text-warning bg-card" onClick={() => setChangeModalEvent(e)}>
                            Feedback
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 rounded-lg text-xs text-danger" onClick={() => setRejectModalEvent(e)}>
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
        </div>
      </SectionCard>

      {/* 5. APPROVAL ANALYTICS & NOTIFICATIONS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Approval vs Rejection Ratios" description="Monthly platform governance outcome split">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Approved", value: 412 },
                    { name: "Changes Requested", value: 48 },
                    { name: "Rejected", value: 14 },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={85}
                  paddingAngle={3}
                >
                  <Cell fill="#22C55E" />
                  <Cell fill="#F59E0B" />
                  <Cell fill="#EF4444" />
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Recent Approval Telemetry Feed" description="Realtime activity log of governance decisions">
          <div className="space-y-3 text-xs">
            {[
              { title: "HackFusion 2026 Approved", time: "15 mins ago", desc: "Approved by Admin Priya Nair · Published to public feed", icon: CheckCircle2, tone: "text-success" },
              { title: "Rhythm & Rangoli Changes Requested", time: "1 hour ago", desc: "Requested banner update & schedule check from Prof. Rao", icon: AlertTriangle, tone: "text-warning" },
              { title: "Cybersecurity CTF Auto-Archived", time: "3 hours ago", desc: "End time passed — automatically archived with 100% log", icon: Archive, tone: "text-primary" },
              { title: "Duplicate Seminar Rejected", time: "5 hours ago", desc: "Rejected due to duplicate title with CSE Department", icon: XCircle, tone: "text-danger" },
            ].map((n, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
                <n.icon className={cn("size-4 shrink-0 mt-0.5", n.tone)} />
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-foreground">{n.title}</p>
                    <span className="text-[10px] text-muted-foreground">{n.time}</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] mt-0.5">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* EVENT REVIEW MODAL / DRAWER */}
      <Dialog open={reviewEvent !== null} onOpenChange={() => setReviewEvent(null)}>
        {reviewEvent && (
          <DialogContent className="max-w-3xl rounded-2xl p-6">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StatusBadge status={resolveStatus(reviewEvent)} />
                  <Badge variant="outline" className="rounded-full text-xs">{reviewEvent.category}</Badge>
                  <Badge variant="outline" className="rounded-full text-xs bg-warning-soft text-warning border-warning/30 font-bold">
                    {reviewEvent.priority} Priority
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">ID: {reviewEvent.id}</span>
              </div>
              <DialogTitle className="text-xl font-bold mt-2">{reviewEvent.title}</DialogTitle>
              <DialogDescription>
                Submitted by <strong className="text-foreground">{reviewEvent.organizer}</strong> ({reviewEvent.department} · {reviewEvent.club}) on {reviewEvent.submittedDate}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2 text-xs">
              <img src={reviewEvent.banner} alt="" className="h-44 w-full rounded-2xl object-cover" />

              <div>
                <p className="font-semibold text-muted-foreground mb-1">EVENT SUMMARY & DESCRIPTION</p>
                <p className="text-foreground leading-relaxed bg-secondary/30 p-3 rounded-xl">{reviewEvent.summary}</p>
              </div>

              {/* 7-POINT APPROVAL CHECKLIST */}
              <div className="rounded-2xl border p-4 space-y-3 bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ListCheck className="size-4 text-primary" />
                    <span className="font-bold text-foreground">7-Point Governance Approval Checklist</span>
                  </div>
                  <span className="font-bold text-xs text-primary">{getChecklistProgress(reviewEvent)}% Complete</span>
                </div>
                <Progress value={getChecklistProgress(reviewEvent)} className="h-2" />

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  {[
                    { label: "Banner Image Uploaded", pass: reviewEvent.checklist.bannerUploaded },
                    { label: "Venue Selected & Confirmed", pass: reviewEvent.checklist.venueSelected },
                    { label: "Registration Seats Configured", pass: reviewEvent.checklist.registrationConfigured },
                    { label: "Start & End Schedule Valid", pass: reviewEvent.checklist.scheduleValid },
                    { label: "Speaker / Guests Detailed", pass: reviewEvent.checklist.speakerDetails },
                    { label: "Contact Details Provided", pass: reviewEvent.checklist.contactInfo },
                    { label: "Department Assigned", pass: reviewEvent.checklist.departmentAssigned },
                  ].map((ck) => (
                    <div key={ck.label} className="flex items-center gap-2">
                      {ck.pass ? <Check className="size-3.5 text-success shrink-0" /> : <X className="size-3.5 text-danger shrink-0" />}
                      <span className={cn(ck.pass ? "text-foreground font-medium" : "text-muted-foreground line-through")}>{ck.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AUTO-ARCHIVE PREVIEW & SCHEDULE */}
              <div className="grid grid-cols-2 gap-3 rounded-2xl bg-secondary/40 p-3">
                <div>
                  <p className="text-muted-foreground text-[10px]">Auto-Archive Date</p>
                  <p className="font-bold text-foreground">{format(new Date(reviewEvent.end), "dd MMM yyyy, h:mm a")}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Archival Countdown</p>
                  <p className="font-bold text-warning">Auto-Archived 1 hr after end</p>
                </div>
              </div>
            </div>

            <DialogFooter className="flex-wrap gap-2">
              <Button variant="outline" onClick={() => setReviewEvent(null)} className="rounded-xl text-xs">
                Close Review
              </Button>
              <Button variant="outline" className="rounded-xl text-xs border-warning/30 text-warning bg-card" onClick={() => setChangeModalEvent(reviewEvent)}>
                Request Changes
              </Button>
              <Button variant="ghost" className="rounded-xl text-xs text-danger" onClick={() => setRejectModalEvent(reviewEvent)}>
                Reject
              </Button>
              <Button className="rounded-xl text-xs bg-success text-success-foreground" onClick={() => handleApprove(reviewEvent)}>
                Approve & Publish
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* REJECTION REASON MODAL */}
      <Dialog open={rejectModalEvent !== null} onOpenChange={() => setRejectModalEvent(null)}>
        {rejectModalEvent && (
          <DialogContent className="max-w-md rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-danger">Reject Event Announcement</DialogTitle>
              <DialogDescription>
                Provide a rejection reason for <strong className="text-foreground">"{rejectModalEvent.title}"</strong>.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 py-2 text-xs">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Predefined Rejection Reason</Label>
                <Select value={selectedRejectReason} onValueChange={setSelectedRejectReason}>
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {PREDEFINED_REJECTION_REASONS.map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                    <SelectItem value="Custom Reason">Custom Reason</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedRejectReason === "Custom Reason" && (
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Custom Rejection Notes</Label>
                  <Textarea
                    value={customRejectReason}
                    onChange={(e) => setCustomRejectReason(e.target.value)}
                    placeholder="Provide detailed reasons for rejection..."
                    className="rounded-xl"
                  />
                </div>
              )}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setRejectModalEvent(null)} className="rounded-xl">
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirmReject} className="rounded-xl">
                Confirm Rejection
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* REQUEST CHANGES MODAL */}
      <Dialog open={changeModalEvent !== null} onOpenChange={() => setChangeModalEvent(null)}>
        {changeModalEvent && (
          <DialogContent className="max-w-md rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-warning">Request Changes from Organizer</DialogTitle>
              <DialogDescription>
                Send feedback to organizer for <strong className="text-foreground">"{changeModalEvent.title}"</strong>.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 py-2 text-xs">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Change Note Pre-set</Label>
                <Select value={selectedChangeNote} onValueChange={setSelectedChangeNote}>
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {PREDEFINED_CHANGE_NOTES.map((n) => (
                      <SelectItem key={n} value={n}>{n}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-semibold">Additional Comments</Label>
                <Textarea
                  value={customChangeNotes}
                  onChange={(e) => setCustomChangeNotes(e.target.value)}
                  placeholder="Specify details to be fixed by the organizer..."
                  className="rounded-xl"
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setChangeModalEvent(null)} className="rounded-xl">
                Cancel
              </Button>
              <Button onClick={handleConfirmRequestChanges} className="rounded-xl bg-warning text-warning-foreground">
                Send Feedback
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* APPROVAL GUIDELINES MODAL */}
      <Dialog open={showGuidelinesModal} onOpenChange={setShowGuidelinesModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Campus Approval Policy Guidelines</DialogTitle>
            <DialogDescription>Rules for governing campus event announcements.</DialogDescription>
          </DialogHeader>

          <div className="space-y-2 py-2 text-xs text-muted-foreground">
            <p>1. <strong>Venue Clashes:</strong> Check that no two events share the same hall at overlapping start/end times.</p>
            <p>2. <strong>Banner & Content:</strong> Banners must meet 16:9 aspect ratio and follow university conduct standards.</p>
            <p>3. <strong>SLA Response:</strong> Approvals or feedback must be processed within 24 hours of submission.</p>
            <p>4. <strong>Auto-Archiving:</strong> Events are automatically archived 1 hour post event end time.</p>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowGuidelinesModal(false)} className="rounded-xl">
              Close Policy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
