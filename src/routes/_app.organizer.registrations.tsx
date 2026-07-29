import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  AlertCircle,
  Archive,
  ArrowUpDown,
  Award,
  Bell,
  Calendar,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileCheck,
  FileEdit,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  Hourglass,
  Info,
  Layers,
  ListChecks,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MoreHorizontal,
  Pencil,
  Phone,
  PlusCircle,
  Printer,
  QrCode,
  Radio,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trash2,
  User,
  UserCheck,
  UserPlus,
  Users,
  UserX,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { EmptyState, PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import { useEffect } from "react";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import {
  departments,
  events as initialEvents,
  registrants as initialRegistrants,
  resolveStatus,
  type CampusEvent,
} from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/organizer/registrations")({
  head: () => ({
    meta: [
      { title: "Registration Management — CampusPulse" },
      { name: "description", content: "Manage event registrations, attendance, certificates, and participant status." },
      { property: "og:title", content: "Registration Management — CampusPulse" },
      { property: "og:description", content: "Complete registrant operations, QR check-in, and certificate issuance." },
    ],
  }),
  component: RegistrationManagement,
});

interface DetailedRegistrant {
  id: string;
  regId: string;
  name: string;
  roll: string;
  dept: string;
  year: string;
  email: string;
  phone: string;
  regDate: string;
  status: "Approved" | "Pending" | "Waitlisted" | "Rejected";
  attended: boolean;
  attendanceTime?: string;
  paid: boolean;
  feeAmount: number;
  certificateStatus: "Issued" | "Pending" | "Ineligible";
  certificateHash?: string;
  emergencyContact: string;
  waitlistPos?: number;
  notes?: string;
}

const EXTENDED_REGISTRANTS: DetailedRegistrant[] = [
  { id: "r1", regId: "REG-2026-001", name: "Aarav Sharma", roll: "21CS042", dept: "Computer Science", year: "3rd", email: "aarav.s@campus.edu", phone: "+91 98765 43210", regDate: "2026-07-20", status: "Approved", attended: true, attendanceTime: "09:14 AM", paid: true, feeAmount: 0, certificateStatus: "Issued", certificateHash: "CERT-HF26-88219", emergencyContact: "Ramesh Sharma (+91 98765 00001)" },
  { id: "r2", regId: "REG-2026-002", name: "Sneha Pillai", roll: "22DS118", dept: "Design", year: "2nd", email: "sneha.p@campus.edu", phone: "+91 98765 43211", regDate: "2026-07-21", status: "Approved", attended: true, attendanceTime: "09:22 AM", paid: true, feeAmount: 0, certificateStatus: "Issued", certificateHash: "CERT-HF26-88220", emergencyContact: "Girish Pillai (+91 98765 00002)" },
  { id: "r3", regId: "REG-2026-003", name: "Rohit Das", roll: "21ME077", dept: "Mechanical Engineering", year: "3rd", email: "rohit.d@campus.edu", phone: "+91 98765 43212", regDate: "2026-07-22", status: "Waitlisted", attended: false, paid: false, feeAmount: 0, certificateStatus: "Pending", waitlistPos: 1, emergencyContact: "Sunil Das (+91 98765 00003)" },
  { id: "r4", regId: "REG-2026-004", name: "Tanya Bose", roll: "23IT009", dept: "Information Technology", year: "1st", email: "tanya.b@campus.edu", phone: "+91 98765 43213", regDate: "2026-07-23", status: "Pending", attended: false, paid: true, feeAmount: 0, certificateStatus: "Pending", emergencyContact: "Anita Bose (+91 98765 00004)" },
  { id: "r5", regId: "REG-2026-005", name: "Imran Khan", roll: "21CS103", dept: "Computer Science", year: "3rd", email: "imran.k@campus.edu", phone: "+91 98765 43214", regDate: "2026-07-24", status: "Approved", attended: false, paid: true, feeAmount: 0, certificateStatus: "Pending", emergencyContact: "Farooq Khan (+91 98765 00005)" },
  { id: "r6", regId: "REG-2026-006", name: "Vidya Menon", roll: "22CE054", dept: "Civil Engineering", year: "2nd", email: "vidya.m@campus.edu", phone: "+91 98765 43215", regDate: "2026-07-24", status: "Rejected", attended: false, paid: false, feeAmount: 0, certificateStatus: "Ineligible", emergencyContact: "K. Menon (+91 98765 00006)" },
  { id: "r7", regId: "REG-2026-007", name: "Karthik Reddy", roll: "20EC022", dept: "Information Technology", year: "4th", email: "karthik.r@campus.edu", phone: "+91 98765 43216", regDate: "2026-07-25", status: "Approved", attended: true, attendanceTime: "09:05 AM", paid: true, feeAmount: 0, certificateStatus: "Issued", certificateHash: "CERT-HF26-88221", emergencyContact: "V. Reddy (+91 98765 00007)" },
  { id: "r8", regId: "REG-2026-008", name: "Ananya Gupta", roll: "23CS201", dept: "Computer Science", year: "1st", email: "ananya.g@campus.edu", phone: "+91 98765 43217", regDate: "2026-07-25", status: "Approved", attended: true, attendanceTime: "09:30 AM", paid: true, feeAmount: 0, certificateStatus: "Issued", certificateHash: "CERT-HF26-88222", emergencyContact: "S. Gupta (+91 98765 00008)" },
];

export function RegistrationManagement() {
  const { events: liveEvents, loading: loadingEvents } = useLiveEvents();
  
  // Event selection state
  const [selectedEventId, setSelectedEventId] = useState<string>("evt-001");

  // Default selected event to the first live event when available
  useEffect(() => {
    if (liveEvents.length > 0 && selectedEventId === "evt-001") {
      setSelectedEventId(liveEvents[0].id);
    }
  }, [liveEvents, selectedEventId]);

  const selectedEvent = useMemo(
    () => liveEvents.find((e) => e.id === selectedEventId) || liveEvents[0] || initialEvents[0],
    [selectedEventId, liveEvents],
  );

  // Registrants working list state
  const [roster, setRoster] = useState<DetailedRegistrant[]>([]);
  const [loadingRoster, setLoadingRoster] = useState(false);

  function apiRegistrantToDetailedRegistrant(r: any): DetailedRegistrant {
    return {
      id: String(r.id),
      regId: r.qr_code || `REG-${r.id}`,
      name: r.student_name || "Unknown Student",
      roll: r.student_phone || "Roll Number",
      dept: r.department_name || "Computer Science",
      year: r.student_year ? `${r.student_year}` : "3rd Year",
      email: r.student_email || "",
      phone: r.student_phone || "",
      regDate: r.registration_date ? r.registration_date.split(" ")[0] : new Date().toISOString().split("T")[0],
      status: (r.status === "Confirmed" ? "Approved" : r.status) as any,
      attended: !!r.checked_in || r.status === "Checked In",
      attendanceTime: r.checked_in_time ? new Date(r.checked_in_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : undefined,
      paid: true,
      feeAmount: 0,
      certificateStatus: r.certificate_token ? "Issued" : "Pending",
      certificateHash: r.certificate_token || undefined,
      emergencyContact: "+91 98765 00000",
      waitlistPos: r.status === "Waitlisted" ? 1 : undefined,
      notes: r.notes || "",
    };
  }

  const fetchRegistrations = async () => {
    const numericEventId = selectedEvent.dbId || parseInt(selectedEventId, 10);
    if (isNaN(numericEventId)) {
      setRoster([]);
      return;
    }
    setLoadingRoster(true);
    try {
      const { API_BASE_URL } = await import("@/services/apiClient");
      const token = localStorage.getItem("campuspulse_jwt_token");
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`${API_BASE_URL}/events/${numericEventId}/registrations`, { headers });
      const data = await res.json();
      if (res.ok && data.success && Array.isArray(data.data)) {
        setRoster(data.data.map(apiRegistrantToDetailedRegistrant));
      } else {
        setRoster([]);
      }
    } catch (err) {
      console.warn("Failed to load registrations:", err);
      setRoster([]);
    } finally {
      setLoadingRoster(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, [selectedEventId, selectedEvent]);

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [attendanceFilter, setAttendanceFilter] = useState("All");
  const [certFilter, setCertFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  // Selection state
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Sliding Drawer / Participant Detail Modal state
  const [activeParticipant, setActiveParticipant] = useState<DetailedRegistrant | null>(null);
  const [organizerNotesInput, setOrganizerNotesInput] = useState("");

  // Modals state
  const [showExportModal, setShowExportModal] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showCertPreviewModal, setShowCertPreviewModal] = useState<DetailedRegistrant | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    type: "approve" | "reject" | "attendance" | "certificate" | "remove" | null;
    registrant: DetailedRegistrant | null;
  }>({ type: null, registrant: null });

  // Calculate Overview Statistics
  const stats = useMemo(() => {
    const total = roster.length;
    const approved = roster.filter((r) => r.status === "Approved" || r.status === "Confirmed").length;
    const pending = roster.filter((r) => r.status === "Pending").length;
    const waitlisted = roster.filter((r) => r.status === "Waitlisted").length;
    const rejected = roster.filter((r) => r.status === "Rejected").length;
    const checkedIn = roster.filter((r) => r.attended).length;
    const certsIssued = roster.filter((r) => r.certificateStatus === "Issued").length;

    return { total, approved, pending, waitlisted, rejected, checkedIn, certsIssued };
  }, [roster]);

  // Filtered roster
  const filteredRoster = useMemo(() => {
    return roster
      .filter((r) => {
        const matchesSearch =
          !searchTerm.trim() ||
          r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.roll.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.dept.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "All" || r.status === statusFilter;
        const matchesAtt =
          attendanceFilter === "All" ||
          (attendanceFilter === "Present" && r.attended) ||
          (attendanceFilter === "Absent" && !r.attended);

        const matchesCert = certFilter === "All" || r.certificateStatus === certFilter;
        const matchesDept = deptFilter === "All" || r.dept === deptFilter;
        const matchesYear = yearFilter === "All" || r.year === yearFilter;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesAtt &&
          matchesCert &&
          matchesDept &&
          matchesYear
        );
      })
      .sort((a, b) => {
        if (sortBy === "Newest") return new Date(b.regDate).getTime() - new Date(a.regDate).getTime();
        if (sortBy === "Oldest") return new Date(a.regDate).getTime() - new Date(b.regDate).getTime();
        if (sortBy === "Alphabetical") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [roster, searchTerm, statusFilter, attendanceFilter, certFilter, deptFilter, yearFilter, sortBy]);

  // Selection handlers
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredRoster.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredRoster.map((r) => r.id));
    }
  };

  const toggleSelectId = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Participant Actions
  const handleApprove = async (r: DetailedRegistrant) => {
    try {
      const { API_BASE_URL } = await import("@/services/apiClient");
      const token = localStorage.getItem("campuspulse_jwt_token");
      const res = await fetch(`${API_BASE_URL}/registrations/${r.id}/approve`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(`Approved registration for ${r.name}`);
        fetchRegistrations();
      } else {
        toast.error(data.message || "Failed to approve registration");
      }
    } catch (err: any) {
      toast.error(err.message || "Request failed");
    }
  };

  const handleReject = async (r: DetailedRegistrant) => {
    try {
      const { API_BASE_URL } = await import("@/services/apiClient");
      const token = localStorage.getItem("campuspulse_jwt_token");
      const res = await fetch(`${API_BASE_URL}/registrations/${r.id}/reject`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.error(`Rejected registration for ${r.name}`);
        fetchRegistrations();
      } else {
        toast.error(data.message || "Failed to reject registration");
      }
    } catch (err: any) {
      toast.error(err.message || "Request failed");
    }
  };

  const handleWaitlist = (r: DetailedRegistrant) => {
    toast.warning("Waitlist placement is auto-managed by database capacity validation.");
  };

  const handleToggleAttendance = async (r: DetailedRegistrant) => {
    try {
      const { API_BASE_URL } = await import("@/services/apiClient");
      const token = localStorage.getItem("campuspulse_jwt_token");
      const res = await fetch(`${API_BASE_URL}/attendance/verify-qr`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          qr_token: r.regId,
          event_id: selectedEvent.dbId || parseInt(selectedEventId, 10),
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(`Marked attendance successfully for ${r.name}`);
        fetchRegistrations();
      } else {
        toast.error(data.message || "Attendance verification failed.");
      }
    } catch (err: any) {
      toast.error(err.message || "Attendance request failed");
    }
  };

  const handleIssueCertificate = async (r: DetailedRegistrant) => {
    try {
      const { API_BASE_URL } = await import("@/services/apiClient");
      const token = localStorage.getItem("campuspulse_jwt_token");
      const res = await fetch(`${API_BASE_URL}/certificates/generate/${r.id}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(`Issued certificate for ${r.name}`);
        fetchRegistrations();
      } else {
        toast.error(data.message || "Failed to issue certificate");
      }
    } catch (err: any) {
      toast.error(err.message || "Request failed");
    }
  };

  const handleBatchIssueCertificates = async () => {
    const numericEventId = selectedEvent.dbId || parseInt(selectedEventId, 10);
    if (isNaN(numericEventId)) return;
    try {
      const { API_BASE_URL } = await import("@/services/apiClient");
      const token = localStorage.getItem("campuspulse_jwt_token");
      const res = await fetch(`${API_BASE_URL}/events/${numericEventId}/generate-certificates`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Batch certificates issued successfully!");
        fetchRegistrations();
      } else {
        toast.error(data.message || "Failed to generate batch certificates.");
      }
    } catch (err: any) {
      toast.error(err.message || "Request failed");
    }
  };

  const handleSaveNotes = () => {
    if (!activeParticipant) return;
    setRoster((prev) =>
      prev.map((item) =>
        item.id === activeParticipant.id ? { ...item, notes: organizerNotesInput } : item,
      ),
    );
    setActiveParticipant({ ...activeParticipant, notes: organizerNotesInput });
    toast.success("Saved organizer notes.");
  };

  const handleExportReport = (type: string) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(roster, null, 2));
    const anchor = document.createElement("a");
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", `${selectedEvent.title.replace(/\s+/g, "_")}_${type.toLowerCase()}_report.json`);
    anchor.click();
    toast.success(`Exported ${type} Report successfully.`);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Registration Management"
        subtitle="Manage event registrations, attendance, certificates, and participant status."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Organizer", to: "/organizer" },
          { label: "Registrations" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              className="rounded-xl bg-card shadow-sm"
              onClick={() => setShowExportModal(true)}
            >
              <Download className="mr-2 size-4 text-primary" /> Export Registrations
            </Button>
            <Button className="rounded-xl shadow-glow" onClick={() => setShowQrModal(true)}>
              <QrCode className="mr-2 size-4" /> QR Check-In
            </Button>
          </div>
        }
      />

      {/* 2. EVENT SELECTOR HEADER CARD */}
      <SectionCard className="p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4 mb-4">
          <div>
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Select Active Event</Label>
            <Select value={selectedEventId} onValueChange={setSelectedEventId}>
              <SelectTrigger className="mt-1.5 w-full md:w-80 rounded-xl bg-card font-semibold"><SelectValue /></SelectTrigger>
              <SelectContent className="rounded-2xl">
                {(liveEvents.length > 0 ? liveEvents : initialEvents).map((ev) => (
                  <SelectItem key={ev.id} value={ev.id}>
                    {ev.title} ({resolveStatus(ev)})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <StatusBadge status={resolveStatus(selectedEvent)} />
            <Badge variant="outline" className="rounded-full text-xs">
              {selectedEvent.category}
            </Badge>
          </div>
        </div>

        {/* Selected Event Details Breakdown */}
        <div className="grid gap-4 md:grid-cols-[140px_minmax(0,1fr)]">
          <img src={selectedEvent.banner} alt={selectedEvent.title} className="h-24 w-full rounded-xl object-cover" />
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base font-bold text-foreground">{selectedEvent.title}</h3>
              <span className="text-xs text-muted-foreground">
                Deadline: <strong>{format(new Date(selectedEvent.start), "dd MMM yyyy")}</strong>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{selectedEvent.department} · {selectedEvent.club} · {selectedEvent.venue}</p>

            <div className="flex items-center gap-4 pt-1">
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Capacity Usage</span>
                  <span className="font-semibold">{selectedEvent.registered} / {selectedEvent.seats} ({Math.round((selectedEvent.registered / selectedEvent.seats) * 100)}%)</span>
                </div>
                <Progress value={Math.round((selectedEvent.registered / selectedEvent.seats) * 100)} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 3. OVERVIEW CARDS (7 Summary Metrics) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Registrant & Attendance Metrics
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            Realtime Updates
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <StatCard label="Total Signups" value={stats.total} icon={Users} index={0} />
          <StatCard label="Approved" value={stats.approved} icon={CheckCircle2} tone="success" index={1} />
          <StatCard label="Pending Review" value={stats.pending} icon={Hourglass} tone="warning" index={2} />
          <StatCard label="Waitlisted" value={stats.waitlisted} icon={Clock} index={3} />
          <StatCard label="Rejected" value={stats.rejected} icon={UserX} tone="danger" index={4} />
          <StatCard label="Checked In" value={stats.checkedIn} icon={QrCode} tone="success" index={5} />
          <StatCard label="Certs Issued" value={stats.certsIssued} icon={Award} tone="primary" index={6} />
        </div>
      </div>

      {/* 4. ATTENDANCE & CERTIFICATE MANAGEMENT BAR */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Attendance Dashboard Card */}
        <SectionCard title="Attendance Control Panel" description="Live check-in statistics & scanning tools">
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2 rounded-xl bg-secondary/40 p-3 text-center text-xs">
              <div>
                <p className="text-muted-foreground text-[10px]">Registered</p>
                <p className="font-bold text-foreground text-sm">{stats.approved}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Present</p>
                <p className="font-bold text-success text-sm">{stats.checkedIn}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Absent</p>
                <p className="font-bold text-danger text-sm">{stats.approved - stats.checkedIn}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Attendance %</p>
                <p className="font-bold text-primary text-sm">{stats.approved > 0 ? Math.round((stats.checkedIn / stats.approved) * 100) : 0}%</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm" className="rounded-xl text-xs shadow-glow" onClick={() => setShowQrModal(true)}>
                <QrCode className="mr-1.5 size-3.5" /> Launch QR Scanner
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-xl text-xs bg-card"
                onClick={() => {
                  setRoster((prev) => prev.map((r) => ({ ...r, attended: true, attendanceTime: "10:00 AM" })));
                  toast.success("Marked all approved registrants as Present.");
                }}
              >
                <UserCheck className="mr-1.5 size-3.5 text-success" /> Bulk Check-In All
              </Button>
            </div>
          </div>
        </SectionCard>

        {/* Certificate Control Panel */}
        <SectionCard title="Certificate Issuance Panel" description="Generate & issue digital completion certificates">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-3 text-center text-xs">
              <div>
                <p className="text-muted-foreground text-[10px]">Eligible (Attended)</p>
                <p className="font-bold text-foreground text-sm">{stats.checkedIn}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Issued</p>
                <p className="font-bold text-primary text-sm">{stats.certsIssued}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px]">Pending</p>
                <p className="font-bold text-warning text-sm">{stats.checkedIn - stats.certsIssued}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                className="rounded-xl text-xs bg-primary shadow-sm"
                onClick={handleBatchIssueCertificates}
              >
                <Award className="mr-1.5 size-3.5" /> Batch Issue Certificates
              </Button>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* 5. SEARCH & MULTI-FACETED FILTERS */}
      <SectionCard title="Registrant Directory Filters" description="Search student records, status, attendance, and department">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by student name, roll number, email, department..."
              className="h-10 rounded-xl bg-card pl-10"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Statuses</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Pending">Pending Review</SelectItem>
                  <SelectItem value="Waitlisted">Waitlisted</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Attendance</Label>
              <Select value={attendanceFilter} onValueChange={setAttendanceFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Attendance</SelectItem>
                  <SelectItem value="Present">Present (Checked In)</SelectItem>
                  <SelectItem value="Absent">Absent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Certificate</Label>
              <Select value={certFilter} onValueChange={setCertFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Certificates</SelectItem>
                  <SelectItem value="Issued">Issued</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Department</Label>
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Departments</SelectItem>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Academic Year</Label>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Years</SelectItem>
                  <SelectItem value="1st">1st Year</SelectItem>
                  <SelectItem value="2nd">2nd Year</SelectItem>
                  <SelectItem value="3rd">3rd Year</SelectItem>
                  <SelectItem value="4th">4th Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Newest">Newest First</SelectItem>
                  <SelectItem value="Oldest">Oldest First</SelectItem>
                  <SelectItem value="Alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 6. MAIN REGISTRATION TABLE & ACTIONS */}
      <SectionCard
        title={`Registrant Roster (${filteredRoster.length})`}
        description="Click any participant row to open the complete details drawer."
      >
        {filteredRoster.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No registrants found"
            description="No student records match the selected search criteria or filters."
          />
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <Table>
              <TableHeader className="bg-secondary/40">
                <TableRow>
                  <TableHead className="w-10 text-center">
                    <Checkbox
                      checked={filteredRoster.length > 0 && selectedIds.length === filteredRoster.length}
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Registration ID</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead className="hidden md:table-cell">Department & Year</TableHead>
                  <TableHead className="hidden lg:table-cell">Contact</TableHead>
                  <TableHead className="hidden xl:table-cell">Reg. Date</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead className="hidden lg:table-cell">Certificate</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRoster.map((r) => {
                  const isSelected = selectedIds.includes(r.id);
                  return (
                    <TableRow
                      key={r.id}
                      className={cn("cursor-pointer hover:bg-secondary/40 transition-colors", isSelected && "bg-primary-soft/30")}
                    >
                      <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                        <Checkbox checked={isSelected} onCheckedChange={() => toggleSelectId(r.id)} />
                      </TableCell>

                      <TableCell className="font-mono text-xs font-semibold text-primary" onClick={() => setActiveParticipant(r)}>
                        {r.regId}
                      </TableCell>

                      <TableCell onClick={() => setActiveParticipant(r)}>
                        <div className="flex items-center gap-3 min-w-[180px]">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft font-bold text-primary text-xs">
                            {r.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                          <div>
                            <p className="font-bold text-foreground text-sm hover:underline">{r.name}</p>
                            <p className="text-xs text-muted-foreground">{r.roll}</p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="hidden md:table-cell text-xs text-muted-foreground" onClick={() => setActiveParticipant(r)}>
                        {r.dept} ({r.year} Yr)
                      </TableCell>

                      <TableCell className="hidden lg:table-cell text-xs text-muted-foreground" onClick={() => setActiveParticipant(r)}>
                        <p>{r.email}</p>
                        <p className="text-[11px]">{r.phone}</p>
                      </TableCell>

                      <TableCell className="hidden xl:table-cell text-xs text-muted-foreground whitespace-nowrap" onClick={() => setActiveParticipant(r)}>
                        {r.regDate}
                      </TableCell>

                      <TableCell onClick={() => setActiveParticipant(r)}>
                        <Badge
                          variant={r.attended ? "default" : "outline"}
                          className={cn("rounded-full text-[10px]", r.attended ? "bg-success text-success-foreground" : "text-muted-foreground")}
                        >
                          {r.attended ? `Present (${r.attendanceTime || "Checked-in"})` : "Absent"}
                        </Badge>
                      </TableCell>

                      <TableCell className="hidden lg:table-cell" onClick={() => setActiveParticipant(r)}>
                        <Badge
                          variant={r.certificateStatus === "Issued" ? "default" : "secondary"}
                          className="rounded-full text-[10px]"
                        >
                          {r.certificateStatus}
                        </Badge>
                      </TableCell>

                      <TableCell onClick={() => setActiveParticipant(r)}>
                        <Badge
                          variant={r.status === "Approved" ? "default" : r.status === "Waitlisted" ? "secondary" : "outline"}
                          className="rounded-full text-[11px]"
                        >
                          {r.status}
                        </Badge>
                      </TableCell>

                      <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8 rounded-xl">
                              <MoreHorizontal className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 rounded-2xl">
                            <DropdownMenuLabel>Participant Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setActiveParticipant(r)}>
                              <Eye className="mr-2 size-4" /> View Full Profile
                            </DropdownMenuItem>
                            {r.status !== "Approved" && (
                              <DropdownMenuItem onClick={() => handleApprove(r)}>
                                <CheckCircle2 className="mr-2 size-4 text-success" /> Approve
                              </DropdownMenuItem>
                            )}
                            {r.status !== "Rejected" && (
                              <DropdownMenuItem onClick={() => handleReject(r)} className="text-danger">
                                <UserX className="mr-2 size-4" /> Reject
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => handleWaitlist(r)}>
                              <Clock className="mr-2 size-4" /> Move to Waitlist
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleToggleAttendance(r)}>
                              <QrCode className="mr-2 size-4 text-primary" /> {r.attended ? "Mark Absent" : "Mark Present"}
                            </DropdownMenuItem>
                            {r.attended && r.certificateStatus !== "Issued" && (
                              <DropdownMenuItem onClick={() => handleIssueCertificate(r)}>
                                <Award className="mr-2 size-4 text-primary" /> Issue Certificate
                              </DropdownMenuItem>
                            )}
                            {r.certificateStatus === "Issued" && (
                              <DropdownMenuItem onClick={() => setShowCertPreviewModal(r)}>
                                <Award className="mr-2 size-4 text-primary" /> Preview Certificate
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </SectionCard>

      {/* 7. WAITLIST MANAGEMENT SECTION */}
      <SectionCard
        title={`Waitlist Queue (${stats.waitlisted})`}
        description="Students awaiting seat availability in registration order"
      >
        {stats.waitlisted === 0 ? (
          <p className="text-xs text-muted-foreground p-4 text-center border border-dashed rounded-xl">No students currently waitlisted.</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <Table>
              <TableHeader className="bg-secondary/40">
                <TableRow>
                  <TableHead className="w-16">Rank</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Reg Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roster
                  .filter((r) => r.status === "Waitlisted")
                  .map((r, idx) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-bold text-xs text-primary">#{idx + 1}</TableCell>
                      <TableCell className="font-semibold text-xs">{r.name} ({r.roll})</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{r.dept}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{r.regDate}</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" className="h-7 text-xs rounded-lg" onClick={() => handleApprove(r)}>
                          Promote to Approved
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </SectionCard>

      {/* 8. EXPORT OPTIONS CARDS */}
      <SectionCard title="Export & Reporting Center" description="Download student rosters, attendance logs, and certificates">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "CSV Export", icon: FileSpreadsheet, type: "CSV" },
            { label: "Excel Roster", icon: FileText, type: "Excel" },
            { label: "PDF Summary", icon: FileCheck, type: "PDF" },
            { label: "Attendance Log", icon: QrCode, type: "Attendance" },
            { label: "Certificate List", icon: Award, type: "Certificate" },
            { label: "Full Report", icon: Printer, type: "Full" },
          ].map((exp) => (
            <button
              key={exp.type}
              onClick={() => handleExportReport(exp.type)}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/30 hover:shadow-sm"
            >
              <exp.icon className="size-6 text-primary mb-2" />
              <span className="text-xs font-semibold text-foreground">{exp.label}</span>
              <span className="text-[10px] text-muted-foreground">Download file</span>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* SLIDING PARTICIPANT DETAILS DRAWER (DIALOG MODAL) */}
      <Dialog open={activeParticipant !== null} onOpenChange={() => setActiveParticipant(null)}>
        {activeParticipant && (
          <DialogContent className="max-w-xl rounded-2xl p-6">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-primary-soft font-bold text-primary text-base">
                  {activeParticipant.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <DialogTitle className="text-lg font-bold">{activeParticipant.name}</DialogTitle>
                  <DialogDescription>
                    {activeParticipant.roll} · {activeParticipant.dept} ({activeParticipant.year} Year)
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4 py-3 text-xs">
              {/* Status Badges Header */}
              <div className="flex flex-wrap items-center gap-2 rounded-xl bg-secondary/40 p-3">
                <StatusBadge status={activeParticipant.status === "Approved" ? "Published" : activeParticipant.status === "Pending" ? "Pending Approval" : "Archived"} />
                <Badge variant={activeParticipant.attended ? "default" : "outline"} className="rounded-full">
                  {activeParticipant.attended ? "Attended" : "Absent"}
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  Cert: {activeParticipant.certificateStatus}
                </Badge>
              </div>

              {/* Registration & Contact Info */}
              <div className="grid gap-3 sm:grid-cols-2 rounded-2xl border p-4">
                <div>
                  <p className="text-muted-foreground text-[10px]">Registration ID</p>
                  <p className="font-semibold">{activeParticipant.regId}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Registration Date</p>
                  <p className="font-semibold">{activeParticipant.regDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Email Address</p>
                  <p className="font-semibold">{activeParticipant.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Phone Number</p>
                  <p className="font-semibold">{activeParticipant.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Emergency Contact</p>
                  <p className="font-semibold">{activeParticipant.emergencyContact}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Certificate Verification Hash</p>
                  <p className="font-mono text-[10px] font-bold text-primary">{activeParticipant.certificateHash || "N/A"}</p>
                </div>
              </div>

              {/* Organizer Notes */}
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Organizer Notes</Label>
                <Textarea
                  rows={3}
                  value={organizerNotesInput || activeParticipant.notes || ""}
                  onChange={(e) => setOrganizerNotesInput(e.target.value)}
                  placeholder="Add internal notes about this student's registration or attendance..."
                  className="rounded-xl text-xs"
                />
                <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card mt-1" onClick={handleSaveNotes}>
                  Save Notes
                </Button>
              </div>
            </div>

            <DialogFooter className="flex-wrap gap-2">
              <Button variant="outline" className="rounded-xl text-xs" onClick={() => setActiveParticipant(null)}>
                Close
              </Button>
              {activeParticipant.status !== "Approved" && (
                <Button size="sm" className="rounded-xl text-xs bg-success text-success-foreground" onClick={() => { handleApprove(activeParticipant); setActiveParticipant(null); }}>
                  Approve Registration
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* QR CHECK-IN MODAL SIMULATION */}
      <Dialog open={showQrModal} onOpenChange={setShowQrModal}>
        <DialogContent className="max-w-md rounded-2xl p-6 text-center">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-center">QR Code Attendance Scanner</DialogTitle>
            <DialogDescription className="text-center">Scan student QR code or select manual check-in</DialogDescription>
          </DialogHeader>

          <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary-soft/30 p-8">
            <QrCode className="size-20 text-primary animate-pulse mb-3" />
            <p className="text-xs font-semibold">Camera Scanner Active</p>
            <p className="text-[10px] text-muted-foreground mt-1">Align student ticket QR code inside the viewfinder</p>
          </div>

          <DialogFooter className="flex-col gap-2">
            <Button
              className="w-full rounded-xl shadow-glow"
              onClick={() => {
                const pending = roster.find((r) => !r.attended);
                if (pending) {
                  handleToggleAttendance(pending);
                  setShowQrModal(false);
                } else {
                  toast.info("All registrants already checked in.");
                  setShowQrModal(false);
                }
              }}
            >
              Simulate Scan (Check In Next Student)
            </Button>
            <Button variant="outline" className="w-full rounded-xl bg-card" onClick={() => setShowQrModal(false)}>
              Close Scanner
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* CERTIFICATE PREVIEW MODAL */}
      <Dialog open={showCertPreviewModal !== null} onOpenChange={() => setShowCertPreviewModal(null)}>
        {showCertPreviewModal && (
          <DialogContent className="max-w-xl rounded-2xl p-6 text-center">
            <div className="rounded-2xl border-4 border-double border-primary/40 bg-card p-6 text-center space-y-3">
              <Award className="mx-auto size-12 text-primary" />
              <h2 className="text-xl font-serif font-bold text-foreground">Certificate of Completion</h2>
              <p className="text-xs text-muted-foreground">This is proudly presented to</p>
              <h3 className="text-lg font-bold text-primary underline">{showCertPreviewModal.name}</h3>
              <p className="text-xs text-muted-foreground">for successful participation in</p>
              <h4 className="text-sm font-semibold">{selectedEvent.title}</h4>
              <div className="pt-4 border-t flex justify-between items-center text-[10px] text-muted-foreground">
                <span>Issued by {selectedEvent.club}</span>
                <span className="font-mono font-bold text-primary">{showCertPreviewModal.certificateHash}</span>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" className="rounded-xl text-xs" onClick={() => setShowCertPreviewModal(null)}>
                Close Preview
              </Button>
              <Button size="sm" className="rounded-xl text-xs shadow-glow" onClick={() => { toast.success(`Downloaded Certificate PDF for ${showCertPreviewModal.name}`); setShowCertPreviewModal(null); }}>
                <Download className="mr-1 size-3.5" /> Download PDF
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
