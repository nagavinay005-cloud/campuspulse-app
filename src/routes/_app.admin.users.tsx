import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  AlertTriangle,
  Archive,
  Award,
  BadgeCheck,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Download,
  Eye,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Filter,
  Globe,
  Grid,
  Hourglass,
  KeyRound,
  Layers,
  LayoutGrid,
  Lock,
  Mail,
  MoreHorizontal,
  Pencil,
  Phone,
  PlusCircle,
  RefreshCw,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Table as TableIcon,
  Trash2,
  TrendingUp,
  Upload,
  UserCheck,
  UserMinus,
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
import { EmptyState, PageHeader, SectionCard, StatCard, LoadingSkeletonState } from "@/components/app/layout-bits";
import { departments } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/users")({
  head: () => ({
    meta: [
      { title: "User Management — CampusPulse" },
      { name: "description", content: "Manage students, organizers, administrators, roles, and permissions from one centralized workspace." },
      { property: "og:title", content: "User Management — CampusPulse" },
      { property: "og:description", content: "Platform user directory, RBAC roles, and account status controls." },
    ],
  }),
  component: UserManagement,
});

export type UserStatusType = "Active" | "Inactive" | "Suspended" | "Blocked" | "Pending";
export type UserRoleType = "Student" | "Organizer" | "Admin";

export interface ExtendedUser {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  dept: string;
  year: string;
  role: UserRoleType;
  status: UserStatusType;
  createdDate: string;
  lastLogin: string;
  registeredEventsCount: number;
  certificatesCount: number;
  avatar?: string;
  assignedEvents?: string[];
  attendanceRate?: string;
  activityHistory: { action: string; time: string; type?: string }[];
}

const EXTENDED_USERS: ExtendedUser[] = [
  {
    id: "u1",
    userId: "USR-1001",
    name: "Aarav Sharma",
    email: "aarav.s@campus.edu",
    phone: "+91 98765 43210",
    dept: "Computer Science",
    year: "3rd Year",
    role: "Student",
    status: "Active",
    createdDate: "2024-08-15",
    lastLogin: "10 mins ago",
    registeredEventsCount: 14,
    certificatesCount: 8,
    attendanceRate: "94%",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    assignedEvents: ["AI Builders Summit 2026", "Campus Hackathon 2026", "Robotics Workshop"],
    activityHistory: [
      { action: "Registered for AI Builders Summit 2026", time: "10 mins ago", type: "Registered Event" },
      { action: "Downloaded Certificate for Web Dev Bootcamp", time: "2 days ago", type: "Downloaded Certificate" },
      { action: "Logged in via Google Authentication", time: "3 days ago", type: "Logged In" },
    ],
  },
  {
    id: "u2",
    userId: "USR-1002",
    name: "Dr. Rajesh Verma",
    email: "rajesh.v@campus.edu",
    phone: "+91 98765 43211",
    dept: "Computer Science",
    year: "Faculty",
    role: "Organizer",
    status: "Active",
    createdDate: "2023-01-10",
    lastLogin: "1 hour ago",
    registeredEventsCount: 42,
    certificatesCount: 0,
    attendanceRate: "98%",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    assignedEvents: ["AI Builders Summit 2026", "System Design Masterclass"],
    activityHistory: [
      { action: "Created AI Builders Summit 2026", time: "1 hour ago", type: "Created Event" },
      { action: "Approved 48 Registrations", time: "3 hours ago", type: "Updated Profile" },
    ],
  },
  {
    id: "u3",
    userId: "USR-1003",
    name: "Sneha Pillai",
    email: "sneha.p@campus.edu",
    phone: "+91 98765 43212",
    dept: "Design",
    year: "2nd Year",
    role: "Student",
    status: "Active",
    createdDate: "2024-09-01",
    lastLogin: "3 hours ago",
    registeredEventsCount: 9,
    certificatesCount: 5,
    attendanceRate: "88%",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    assignedEvents: ["Rhythm & Rangoli Fest", "UI/UX Design Sprint"],
    activityHistory: [
      { action: "Checked in at Rhythm & Rangoli Fest", time: "3 hours ago", type: "Logged In" },
    ],
  },
  {
    id: "u4",
    userId: "USR-1004",
    name: "Priya Nair",
    email: "priya.n@campus.edu",
    phone: "+91 98765 43213",
    dept: "Administration",
    year: "Admin Staff",
    role: "Admin",
    status: "Active",
    createdDate: "2022-05-12",
    lastLogin: "Just now",
    registeredEventsCount: 120,
    certificatesCount: 0,
    attendanceRate: "100%",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    assignedEvents: ["Governance Review 2026"],
    activityHistory: [
      { action: "Approved event queue batch #402", time: "Just now", type: "Created Event" },
      { action: "Updated user role for Dr. Verma", time: "Yesterday", type: "Updated Profile" },
    ],
  },
  {
    id: "u5",
    userId: "USR-1005",
    name: "Rohit Das",
    email: "rohit.d@campus.edu",
    phone: "+91 98765 43214",
    dept: "Mechanical Engineering",
    year: "3rd Year",
    role: "Student",
    status: "Suspended",
    createdDate: "2024-07-20",
    lastLogin: "3 days ago",
    registeredEventsCount: 3,
    certificatesCount: 1,
    attendanceRate: "50%",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    assignedEvents: ["AutoCAD Workshop"],
    activityHistory: [
      { action: "Account suspended due to policy violation", time: "3 days ago", type: "Updated Profile" },
    ],
  },
  {
    id: "u6",
    userId: "USR-1006",
    name: "Tanya Bose",
    email: "tanya.b@campus.edu",
    phone: "+91 98765 43215",
    dept: "Information Technology",
    year: "1st Year",
    role: "Student",
    status: "Pending",
    createdDate: "2026-07-27",
    lastLogin: "Never",
    registeredEventsCount: 1,
    certificatesCount: 0,
    attendanceRate: "0%",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    assignedEvents: ["Freshers Orientation 2026"],
    activityHistory: [
      { action: "Student account created awaiting email verification", time: "1 day ago", type: "Registered Event" },
    ],
  },
  {
    id: "u7",
    userId: "USR-1007",
    name: "Prof. Vikram Seth",
    email: "vikram.s@campus.edu",
    phone: "+91 98765 43216",
    dept: "Information Technology",
    year: "Faculty",
    role: "Organizer",
    status: "Active",
    createdDate: "2023-03-14",
    lastLogin: "5 hours ago",
    registeredEventsCount: 28,
    certificatesCount: 0,
    attendanceRate: "95%",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    assignedEvents: ["System Design Bootcamp", "Cloud Computing Summit"],
    activityHistory: [
      { action: "Created System Design Bootcamp", time: "5 hours ago", type: "Created Event" },
    ],
  },
  {
    id: "u8",
    userId: "USR-1008",
    name: "Ananya Gupta",
    email: "ananya.g@campus.edu",
    phone: "+91 98765 43217",
    dept: "Civil Engineering",
    year: "4th Year",
    role: "Student",
    status: "Inactive",
    createdDate: "2023-08-10",
    lastLogin: "2 weeks ago",
    registeredEventsCount: 18,
    certificatesCount: 12,
    attendanceRate: "90%",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    assignedEvents: ["Structural CAD Expo"],
    activityHistory: [
      { action: "Logged in", time: "2 weeks ago", type: "Logged In" },
    ],
  },
  {
    id: "u9",
    userId: "USR-1009",
    name: "Devendra Patel",
    email: "devendra.p@campus.edu",
    phone: "+91 98765 43218",
    dept: "Electrical Engineering",
    year: "4th Year",
    role: "Student",
    status: "Blocked",
    createdDate: "2023-09-12",
    lastLogin: "1 month ago",
    registeredEventsCount: 4,
    certificatesCount: 2,
    attendanceRate: "40%",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    assignedEvents: ["Robo Wars 2025"],
    activityHistory: [
      { action: "Account blocked by administrator for unauthorized access attempt", time: "1 month ago", type: "Updated Profile" },
    ],
  },
];

export function UserManagement() {
  const [userList, setUserList] = useState<ExtendedUser[]>(EXTENDED_USERS);
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [isLoading, setIsLoading] = useState(false);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  // Selection & Modals
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeProfileUser, setActiveProfileUser] = useState<ExtendedUser | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState<ExtendedUser | null>(null);
  const [actionModal, setActionModal] = useState<{
    type: "delete" | "suspend" | "block" | "activate" | "deactivate" | null;
    user: ExtendedUser | null;
  }>({ type: null, user: null });

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dept: "Computer Science",
    year: "1st Year",
    role: "Student" as UserRoleType,
    status: "Active" as UserStatusType,
  });

  // Calculate Overview Stats
  const stats = useMemo(() => {
    const total = userList.length * 156;
    const students = userList.filter((u) => u.role === "Student").length * 150;
    const organizers = userList.filter((u) => u.role === "Organizer").length * 20;
    const admins = userList.filter((u) => u.role === "Admin").length * 4;
    const active = userList.filter((u) => u.status === "Active").length * 150;
    const inactive = userList.filter((u) => u.status === "Inactive").length * 20;
    const suspended = userList.filter((u) => u.status === "Suspended").length * 5;
    const blocked = userList.filter((u) => u.status === "Blocked").length * 3;
    const pending = userList.filter((u) => u.status === "Pending").length * 6;

    return { total, students, organizers, admins, active, inactive, suspended, blocked, pending };
  }, [userList]);

  // Filtered & Sorted Users
  const filteredUsers = useMemo(() => {
    return userList
      .filter((u) => {
        const matchesSearch =
          !searchTerm.trim() ||
          u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.phone.includes(searchTerm);

        const matchesRole = roleFilter === "All" || u.role === roleFilter;
        const matchesDept = deptFilter === "All" || u.dept === deptFilter;
        const matchesYear = yearFilter === "All" || u.year.includes(yearFilter);
        const matchesStatus = statusFilter === "All" || u.status === statusFilter;

        return matchesSearch && matchesRole && matchesDept && matchesYear && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "Newest") return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
        if (sortBy === "Oldest") return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime();
        if (sortBy === "Name") return a.name.localeCompare(b.name);
        if (sortBy === "Department") return a.dept.localeCompare(b.dept);
        if (sortBy === "Role") return a.role.localeCompare(b.role);
        if (sortBy === "Status") return a.status.localeCompare(b.status);
        return 0;
      });
  }, [userList, searchTerm, roleFilter, deptFilter, yearFilter, statusFilter, sortBy]);

  // Checkbox Handlers
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredUsers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredUsers.map((u) => u.id));
    }
  };

  const toggleSelectId = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Bulk Actions
  const handleBulkAction = (action: "activate" | "deactivate" | "suspend" | "delete" | "export") => {
    if (selectedIds.length === 0) {
      toast.warning("Please select at least one user first.");
      return;
    }

    if (action === "export") {
      toast.success(`Exporting ${selectedIds.length} selected users to CSV...`);
      return;
    }

    if (action === "delete") {
      setUserList((prev) => prev.filter((u) => !selectedIds.includes(u.id)));
      toast.success(`Deleted ${selectedIds.length} user accounts.`);
    } else {
      const statusMap: Record<string, UserStatusType> = {
        activate: "Active",
        deactivate: "Inactive",
        suspend: "Suspended",
      };
      const newStatus = statusMap[action];
      setUserList((prev) =>
        prev.map((u) => (selectedIds.includes(u.id) ? { ...u, status: newStatus } : u)),
      );
      toast.success(`Updated ${selectedIds.length} users to status: ${newStatus}.`);
    }

    setSelectedIds([]);
  };

  // Add / Edit User Form Handlers
  const handleOpenAddModal = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      phone: "+91 98765 00000",
      dept: "Computer Science",
      year: "1st Year",
      role: "Student",
      status: "Active",
    });
    setShowAddModal(true);
  };

  const handleOpenEditModal = (user: ExtendedUser) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      dept: user.dept,
      year: user.year,
      role: user.role,
      status: user.status,
    });
    setShowAddModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please provide both Full Name and Email Address.");
      return;
    }

    if (editingUser) {
      // Edit User
      setUserList((prev) =>
        prev.map((u) =>
          u.id === editingUser.id
            ? {
                ...u,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                dept: formData.dept,
                year: formData.year,
                role: formData.role,
                status: formData.status,
                activityHistory: [
                  { action: `Profile updated by Admin`, time: "Just now", type: "Updated Profile" },
                  ...u.activityHistory,
                ],
              }
            : u,
        ),
      );
      toast.success(`Updated user profile for ${formData.name}.`);
    } else {
      // Add User
      const newRecord: ExtendedUser = {
        id: `u-${Date.now()}`,
        userId: `USR-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        dept: formData.dept,
        year: formData.year,
        role: formData.role,
        status: formData.status,
        createdDate: new Date().toISOString().split("T")[0],
        lastLogin: "Just created",
        registeredEventsCount: 0,
        certificatesCount: 0,
        attendanceRate: "100%",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
        assignedEvents: [],
        activityHistory: [
          { action: `User account created by Administrator`, time: "Just now", type: "Updated Profile" },
        ],
      };

      setUserList([newRecord, ...userList]);
      toast.success(`User "${newRecord.name}" created successfully as ${newRecord.role}.`);
    }

    setShowAddModal(false);
  };

  // Role Transition
  const handleRoleChange = (user: ExtendedUser, newRole: UserRoleType) => {
    setUserList((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, role: newRole } : u)),
    );
    toast.success(`Changed ${user.name}'s role to ${newRole}.`);
  };

  // Action Confirmation
  const handleExecuteActionModal = () => {
    const { type, user } = actionModal;
    if (!user || !type) return;

    if (type === "delete") {
      setUserList((prev) => prev.filter((u) => u.id !== user.id));
      toast.success(`Permanently deleted user ${user.name}.`);
    } else {
      const statusMap: Record<string, UserStatusType> = {
        activate: "Active",
        deactivate: "Inactive",
        suspend: "Suspended",
        block: "Blocked",
      };
      const newStatus = statusMap[type];
      setUserList((prev) =>
        prev.map((u) => (u.id === user.id ? { ...u, status: newStatus } : u)),
      );
      toast.success(`Updated ${user.name}'s status to ${newStatus}.`);
    }

    setActionModal({ type: null, user: null });
  };

  // Import / Export Feedback
  const handleExport = (formatType: "CSV" | "Excel" | "PDF") => {
    toast.success(`Exporting User Directory to ${formatType}... File download initiated.`);
  };

  const handleImportCSV = () => {
    toast.info("Import CSV Modal: Select a CSV file with columns (Name, Email, Role, Department, Phone) to bulk import users.");
  };

  // Render Status Badge
  const renderStatusBadge = (status: UserStatusType) => {
    switch (status) {
      case "Active":
        return <Badge className="rounded-full bg-success text-success-foreground font-semibold text-[10px]">Active</Badge>;
      case "Inactive":
        return <Badge variant="secondary" className="rounded-full font-semibold text-[10px]">Inactive</Badge>;
      case "Suspended":
        return <Badge variant="destructive" className="rounded-full font-semibold text-[10px]">Suspended</Badge>;
      case "Blocked":
        return <Badge className="rounded-full bg-slate-900 text-white font-semibold text-[10px]">Blocked</Badge>;
      case "Pending":
        return <Badge variant="outline" className="rounded-full border-warning/40 bg-warning-soft text-warning font-semibold text-[10px]">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="User Management"
        subtitle="Manage students, organizers, administrators, roles, permissions, and status controls."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin", to: "/admin" },
          { label: "User Management" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-xl bg-card text-xs">
                  <Download className="mr-1.5 size-3.5" /> Export <ChevronRight className="ml-1 size-3 rotate-90" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-2xl w-40">
                <DropdownMenuItem onClick={() => handleExport("CSV")}>
                  <FileText className="mr-2 size-4" /> Export CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport("Excel")}>
                  <FileSpreadsheet className="mr-2 size-4" /> Export Excel
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport("PDF")}>
                  <FileCheck className="mr-2 size-4" /> Export PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={handleImportCSV}>
              <Upload className="mr-1.5 size-3.5" /> Import CSV
            </Button>

            <Button className="rounded-xl shadow-glow text-xs font-semibold" onClick={handleOpenAddModal}>
              <UserPlus className="mr-1.5 size-4" /> Add User
            </Button>
          </div>
        }
      />

      {/* 2. STATS OVERVIEW CARDS (8 Telemetry Cards) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            User Telemetry & Role Accounts
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-6 rounded-lg text-[10px] text-muted-foreground"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 600);
              }}
            >
              <RefreshCw className="mr-1 size-3" /> Simulate Load
            </Button>
            <Badge variant="outline" className="rounded-full text-[10px] bg-card">
              RBAC v2.4 Enabled
            </Badge>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Total Users" value={stats.total} icon={Users} index={0} />
          <StatCard label="Students" value={stats.students} icon={Users} tone="primary" index={1} />
          <StatCard label="Organizers" value={stats.organizers} icon={UserCheck} tone="success" index={2} />
          <StatCard label="Admins" value={stats.admins} icon={ShieldCheck} tone="warning" index={3} />
          <StatCard label="Active" value={stats.active} icon={UserCheck} tone="success" index={4} />
          <StatCard label="Inactive" value={stats.inactive} icon={UserMinus} index={5} />
          <StatCard label="Suspended" value={stats.suspended} icon={UserX} tone="danger" index={6} />
          <StatCard label="Pending" value={stats.pending} icon={Hourglass} tone="warning" index={7} />
        </div>
      </div>

      {/* 3. BULK ACTIONS TOOLBAR (Appears when rows selected) */}
      {selectedIds.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/30 bg-primary-soft/40 p-4 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              {selectedIds.length}
            </span>
            <span className="text-xs font-semibold text-foreground">Users Selected</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleBulkAction("activate")}>
              <UserCheck className="mr-1 size-3.5 text-success" /> Activate Selected
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleBulkAction("deactivate")}>
              <UserMinus className="mr-1 size-3.5 text-muted-foreground" /> Deactivate
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card text-danger border-danger/30" onClick={() => handleBulkAction("suspend")}>
              <UserX className="mr-1 size-3.5" /> Suspend
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card text-danger border-danger/30" onClick={() => handleBulkAction("delete")}>
              <Trash2 className="mr-1 size-3.5" /> Delete
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleBulkAction("export")}>
              <Download className="mr-1 size-3.5" /> Export Selected
            </Button>
            <Button size="sm" variant="ghost" className="rounded-xl text-xs" onClick={() => setSelectedIds([])}>
              Clear Selection
            </Button>
          </div>
        </div>
      )}

      {/* 4. SEARCH, FILTERS & CONTROLS */}
      <SectionCard title="User Directory & Search Controls" description="Filter by role, department, status, academic year, or search keywords">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Name, Email, Department, Role, Phone, User ID..."
                className="rounded-xl pl-9 bg-card"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-end gap-1.5 sm:col-span-2">
              <span className="mr-2 text-xs font-semibold text-muted-foreground">Layout:</span>
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="rounded-xl text-xs"
              >
                <TableIcon className="mr-1.5 size-3.5" /> Table View
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-xl text-xs"
              >
                <LayoutGrid className="mr-1.5 size-3.5" /> Grid View
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Role</Label>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Roles</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Organizer">Organizer</SelectItem>
                  <SelectItem value="Admin">Administrator</SelectItem>
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
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Suspended">Suspended</SelectItem>
                  <SelectItem value="Blocked">Blocked</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
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
                  <SelectItem value="Faculty">Faculty</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Newest">Recently Joined</SelectItem>
                  <SelectItem value="Oldest">Oldest Joined</SelectItem>
                  <SelectItem value="Name">Name A–Z</SelectItem>
                  <SelectItem value="Department">Department</SelectItem>
                  <SelectItem value="Role">Role</SelectItem>
                  <SelectItem value="Status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 5. USER DIRECTORY LIST (TABLE / GRID / LOADING / EMPTY) */}
      <SectionCard
        title={`User Roster (${filteredUsers.length})`}
        description={`Showing ${filteredUsers.length} active and provisioned accounts`}
      >
        {isLoading ? (
          <LoadingSkeletonState count={4} />
        ) : filteredUsers.length === 0 ? (
          <EmptyState
            icon={Users}
            title="No users found"
            description="No user accounts match your search query or filter criteria. Try resetting search filters."
            action={
              <Button
                variant="outline"
                className="rounded-xl bg-card"
                onClick={() => {
                  setSearchTerm("");
                  setRoleFilter("All");
                  setDeptFilter("All");
                  setStatusFilter("All");
                  setYearFilter("All");
                  setSortBy("Newest");
                }}
              >
                Reset All Filters
              </Button>
            }
          />
        ) : (
          <>
            {/* DATA TABLE VIEW */}
            {viewMode === "table" && (
              <div className="overflow-x-auto rounded-2xl border border-border bg-card">
                <Table>
                  <TableHeader className="bg-secondary/40">
                    <TableRow>
                      <TableHead className="w-10 text-center">
                        <Checkbox
                          checked={filteredUsers.length > 0 && selectedIds.length === filteredUsers.length}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Profile & User Name</TableHead>
                      <TableHead>User ID</TableHead>
                      <TableHead className="hidden md:table-cell">Department & Year</TableHead>
                      <TableHead>Role Management</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden lg:table-cell">Last Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((u) => {
                      const isSelected = selectedIds.includes(u.id);
                      return (
                        <TableRow
                          key={u.id}
                          className={cn("cursor-pointer hover:bg-secondary/40 transition-colors", isSelected && "bg-primary-soft/30")}
                        >
                          <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                            <Checkbox checked={isSelected} onCheckedChange={() => toggleSelectId(u.id)} />
                          </TableCell>

                          <TableCell onClick={() => setActiveProfileUser(u)}>
                            <div className="flex items-center gap-3">
                              {u.avatar ? (
                                <img src={u.avatar} alt={u.name} className="size-9 rounded-xl object-cover shrink-0" />
                              ) : (
                                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft font-bold text-primary text-xs">
                                  {u.name.split(" ").map((n) => n[0]).join("")}
                                </span>
                              )}
                              <div className="min-w-0">
                                <p className="font-bold text-sm text-foreground hover:underline line-clamp-1">{u.name}</p>
                                <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                              </div>
                            </div>
                          </TableCell>

                          <TableCell className="font-mono text-xs font-semibold text-primary" onClick={() => setActiveProfileUser(u)}>
                            {u.userId}
                          </TableCell>

                          <TableCell className="hidden md:table-cell text-xs text-muted-foreground" onClick={() => setActiveProfileUser(u)}>
                            <p className="font-medium text-foreground">{u.dept}</p>
                            <p className="text-[11px] text-muted-foreground">{u.year}</p>
                          </TableCell>

                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Select defaultValue={u.role} onValueChange={(val) => handleRoleChange(u, val as UserRoleType)}>
                              <SelectTrigger className="h-8 w-32 rounded-xl bg-card text-xs font-semibold"><SelectValue /></SelectTrigger>
                              <SelectContent className="rounded-2xl">
                                <SelectItem value="Student">Student</SelectItem>
                                <SelectItem value="Organizer">Organizer</SelectItem>
                                <SelectItem value="Admin">Administrator</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>

                          <TableCell className="text-xs font-mono text-muted-foreground" onClick={() => setActiveProfileUser(u)}>
                            {u.phone}
                          </TableCell>

                          <TableCell onClick={() => setActiveProfileUser(u)}>
                            {renderStatusBadge(u.status)}
                          </TableCell>

                          <TableCell className="hidden lg:table-cell text-xs text-muted-foreground" onClick={() => setActiveProfileUser(u)}>
                            {u.lastLogin}
                          </TableCell>

                          <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="size-8 rounded-xl">
                                  <MoreHorizontal className="size-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48 rounded-2xl">
                                <DropdownMenuLabel>User Management</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setActiveProfileUser(u)}>
                                  <Eye className="mr-2 size-4" /> View Details Drawer
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleOpenEditModal(u)}>
                                  <Pencil className="mr-2 size-4" /> Edit User Info
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => toast.success(`Password reset email sent to ${u.email}`)}>
                                  <KeyRound className="mr-2 size-4" /> Reset Password (UI)
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {u.status !== "Active" ? (
                                  <DropdownMenuItem onClick={() => setActionModal({ type: "activate", user: u })}>
                                    <UserCheck className="mr-2 size-4 text-success" /> Activate User
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem onClick={() => setActionModal({ type: "deactivate", user: u })}>
                                    <UserMinus className="mr-2 size-4 text-muted-foreground" /> Deactivate
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={() => setActionModal({ type: "suspend", user: u })} className="text-danger">
                                  <UserX className="mr-2 size-4" /> Suspend Account
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setActionModal({ type: "block", user: u })} className="text-danger font-semibold">
                                  <Lock className="mr-2 size-4" /> Block Account
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setActionModal({ type: "delete", user: u })} className="text-danger">
                                  <Trash2 className="mr-2 size-4" /> Delete User
                                </DropdownMenuItem>
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

            {/* GRID VIEW */}
            {viewMode === "grid" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredUsers.map((u) => (
                  <div key={u.id} className="rounded-2xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">{u.userId}</span>
                        {renderStatusBadge(u.status)}
                      </div>

                      <div className="flex items-center gap-3">
                        {u.avatar ? (
                          <img src={u.avatar} alt={u.name} className="size-12 rounded-2xl object-cover shrink-0" />
                        ) : (
                          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft font-bold text-primary text-sm">
                            {u.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        )}
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-foreground line-clamp-1">{u.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{u.email}</p>
                          <Badge variant="outline" className="mt-1 rounded-full text-[9px]">{u.role}</Badge>
                        </div>
                      </div>

                      <div className="space-y-1 text-xs text-muted-foreground border-t pt-3">
                        <p className="flex justify-between">
                          <span>Department:</span>
                          <strong className="text-foreground">{u.dept}</strong>
                        </p>
                        <p className="flex justify-between">
                          <span>Phone:</span>
                          <strong className="text-foreground font-mono text-[11px]">{u.phone}</strong>
                        </p>
                        <p className="flex justify-between">
                          <span>Last Active:</span>
                          <span>{u.lastLogin}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t pt-3 gap-2">
                      <Button variant="outline" size="sm" className="h-8 rounded-xl text-xs flex-1 bg-card" onClick={() => setActiveProfileUser(u)}>
                        <Eye className="mr-1 size-3.5" /> Details
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 rounded-xl text-xs bg-card" onClick={() => handleOpenEditModal(u)}>
                        <Pencil className="mr-1 size-3.5" /> Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </SectionCard>

      {/* 6. USER DETAILS SIDE DRAWER / DIALOG */}
      <Dialog open={activeProfileUser !== null} onOpenChange={() => setActiveProfileUser(null)}>
        {activeProfileUser && (
          <DialogContent className="max-w-2xl rounded-3xl p-6 sm:p-8">
            <DialogHeader>
              <div className="flex items-center justify-between gap-4 border-b pb-4">
                <div className="flex items-center gap-3">
                  {activeProfileUser.avatar ? (
                    <img src={activeProfileUser.avatar} alt={activeProfileUser.name} className="size-14 rounded-2xl object-cover" />
                  ) : (
                    <span className="grid size-14 place-items-center rounded-2xl bg-primary-soft font-bold text-primary text-lg">
                      {activeProfileUser.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                  <div>
                    <DialogTitle className="text-xl font-bold">{activeProfileUser.name}</DialogTitle>
                    <DialogDescription className="text-xs">
                      {activeProfileUser.userId} · {activeProfileUser.email}
                    </DialogDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {renderStatusBadge(activeProfileUser.status)}
                  <Badge variant="outline" className="rounded-full text-xs font-semibold">{activeProfileUser.role}</Badge>
                </div>
              </div>
            </DialogHeader>

            <Tabs defaultValue="overview" className="mt-4">
              <TabsList className="grid grid-cols-4 rounded-xl bg-secondary p-1 text-xs">
                <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
                <TabsTrigger value="events" className="rounded-lg">Events ({activeProfileUser.assignedEvents?.length || 0})</TabsTrigger>
                <TabsTrigger value="certs" className="rounded-lg">Certificates ({activeProfileUser.certificatesCount})</TabsTrigger>
                <TabsTrigger value="timeline" className="rounded-lg">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 pt-4 text-xs">
                <div className="grid grid-cols-2 gap-3 rounded-2xl border p-4 bg-card">
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase font-semibold">Department</p>
                    <p className="font-semibold text-sm">{activeProfileUser.dept}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase font-semibold">Academic Year / Level</p>
                    <p className="font-semibold text-sm">{activeProfileUser.year}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase font-semibold">Phone Number</p>
                    <p className="font-semibold text-sm font-mono">{activeProfileUser.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase font-semibold">Joined Date</p>
                    <p className="font-semibold text-sm">{activeProfileUser.createdDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase font-semibold">Registered Events</p>
                    <p className="font-bold text-base text-primary">{activeProfileUser.registeredEventsCount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px] uppercase font-semibold">Attendance Rate</p>
                    <p className="font-bold text-base text-success">{activeProfileUser.attendanceRate || "92%"}</p>
                  </div>
                </div>

                <div className="rounded-2xl border p-4 bg-card space-y-2">
                  <p className="font-semibold text-xs text-foreground">Role Transition Control (Admin UI Only)</p>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Current Role:</span>
                    <Select defaultValue={activeProfileUser.role} onValueChange={(val) => handleRoleChange(activeProfileUser, val as UserRoleType)}>
                      <SelectTrigger className="h-8 w-36 rounded-xl bg-card text-xs font-semibold"><SelectValue /></SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Organizer">Organizer</SelectItem>
                        <SelectItem value="Admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-3 pt-4 text-xs">
                <p className="font-semibold text-muted-foreground">Assigned & Registered Events</p>
                <div className="space-y-2">
                  {activeProfileUser.assignedEvents && activeProfileUser.assignedEvents.length > 0 ? (
                    activeProfileUser.assignedEvents.map((ev, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl border bg-card p-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4 text-primary" />
                          <span className="font-semibold text-foreground">{ev}</span>
                        </div>
                        <Badge variant="secondary" className="rounded-full text-[10px]">Confirmed</Badge>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-6">No events currently assigned.</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="certs" className="space-y-3 pt-4 text-xs">
                <p className="font-semibold text-muted-foreground">Claimed Certificates Wallet</p>
                <div className="rounded-2xl border p-4 bg-card space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground">AI Builders Summit 2026 Certificate</p>
                      <p className="text-[11px] text-muted-foreground">Issued by Codecraft Desk · CS Dept</p>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => toast.success("Downloading Certificate PDF...")}>
                      <Download className="mr-1 size-3.5" /> PDF
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-3 pt-4 text-xs">
                <p className="font-semibold text-muted-foreground">Recent Activity Timeline</p>
                <div className="space-y-2">
                  {activeProfileUser.activityHistory.map((act, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl bg-secondary/40 p-3">
                      <div className="flex items-center gap-2">
                        <Activity className="size-3.5 text-primary" />
                        <span className="font-medium text-foreground">{act.action}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{act.time}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter className="flex-wrap gap-2 pt-4 border-t">
              <Button variant="outline" className="rounded-xl text-xs" onClick={() => setActiveProfileUser(null)}>
                Close
              </Button>
              <Button variant="outline" className="rounded-xl text-xs bg-card" onClick={() => handleOpenEditModal(activeProfileUser)}>
                <Pencil className="mr-1 size-3.5" /> Edit Profile
              </Button>
              <Button variant="outline" className="rounded-xl text-xs bg-card" onClick={() => toast.success(`Password reset email dispatched to ${activeProfileUser.email}`)}>
                <KeyRound className="mr-1 size-3.5" /> Reset Password
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* 7. ADD / EDIT USER MODAL */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent className="max-w-md rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {editingUser ? "Edit User Account" : "Add New User Account"}
            </DialogTitle>
            <DialogDescription className="text-xs">
              {editingUser ? "Update profile details, status, and role access." : "Create and provision a new user profile."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleFormSubmit} className="space-y-4 py-2 text-xs">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">Full Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aarav Sharma"
                required
                className="rounded-xl bg-card"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Email Address *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. aarav.s@campus.edu"
                required
                className="rounded-xl bg-card"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Phone Number</Label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="rounded-xl bg-card"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Department</Label>
                <Select value={formData.dept} onValueChange={(val) => setFormData({ ...formData, dept: val })}>
                  <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {departments.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-semibold">Academic Year / Designation</Label>
                <Select value={formData.year} onValueChange={(val) => setFormData({ ...formData, year: val })}>
                  <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                    <SelectItem value="Faculty">Faculty</SelectItem>
                    <SelectItem value="Admin Staff">Admin Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Role Access</Label>
                <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val as UserRoleType })}>
                  <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Organizer">Organizer</SelectItem>
                    <SelectItem value="Admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-semibold">Account Status</Label>
                <Select value={formData.status} onValueChange={(val) => setFormData({ ...formData, status: val as UserStatusType })}>
                  <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Suspended">Suspended</SelectItem>
                    <SelectItem value="Blocked">Blocked</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter className="pt-3">
              <Button variant="outline" type="button" onClick={() => setShowAddModal(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button type="submit" className="rounded-xl shadow-glow font-semibold">
                {editingUser ? "Save Changes" : "Create Account"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 8. CONFIRMATION ACTION MODAL */}
      <Dialog open={actionModal.type !== null} onOpenChange={() => setActionModal({ type: null, user: null })}>
        <DialogContent className="max-w-md rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {actionModal.type === "delete" && "Delete User Account"}
              {actionModal.type === "suspend" && "Suspend User Account"}
              {actionModal.type === "block" && "Block User Account"}
              {actionModal.type === "activate" && "Activate User Account"}
              {actionModal.type === "deactivate" && "Deactivate User Account"}
            </DialogTitle>
            <DialogDescription className="text-xs">
              Are you sure you want to {actionModal.type} user account <strong className="text-foreground">"{actionModal.user?.name}"</strong>?
            </DialogDescription>
          </DialogHeader>

          <div className="py-2 text-xs text-muted-foreground leading-relaxed">
            {actionModal.type === "delete" && "This will permanently purge user profile records, event registrations, and authorizations."}
            {actionModal.type === "suspend" && "The user will be immediately logged out and blocked from logging in until reactivated."}
            {actionModal.type === "block" && "The user account will be locked indefinitely due to security or policy flags."}
            {actionModal.type === "activate" && "The account status will be restored to Active with full feature permissions."}
            {actionModal.type === "deactivate" && "The account status will be set to Inactive."}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setActionModal({ type: null, user: null })} className="rounded-xl">
              Cancel
            </Button>
            <Button
              variant={actionModal.type === "delete" || actionModal.type === "suspend" || actionModal.type === "block" ? "destructive" : "default"}
              onClick={handleExecuteActionModal}
              className="rounded-xl font-semibold shadow-sm"
            >
              Confirm {actionModal.type?.toUpperCase()}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

