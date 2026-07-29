import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  Archive,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileCheck,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  GraduationCap,
  Hourglass,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  Megaphone,
  MoreHorizontal,
  Pencil,
  Phone,
  Plus,
  PlusCircle,
  Radio,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Table as TableIcon,
  Trash2,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UserX,
  X,
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
  clubs as initialClubs,
  departments as initialDeptNames,
  events,
  type CampusEvent,
} from "@/data/mock";
import { archiveLog, archiveQueue } from "@/data/archive";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/departments")({
  head: () => ({
    meta: [
      { title: "Department & Club Management — CampusPulse" },
      { name: "description", content: "Manage academic departments, clubs, student chapters, coordinators, and event ownership." },
      { property: "og:title", content: "Department & Club Management — CampusPulse" },
      { property: "og:description", content: "Centralized governance map for university departments, clubs, and coordinators." },
    ],
  }),
  component: DepartmentsPage,
});

interface DepartmentData {
  id: string;
  code: string;
  name: string;
  hod: string;
  facultyCount: number;
  studentCount: number;
  eventsConducted: number;
  status: "Active" | "Archived";
  coordinators: string[];
  clubs: string[];
}

interface ClubData {
  id: string;
  name: string;
  code: string;
  dept: string;
  type: "Club" | "Student Chapter";
  category: "Technical" | "Cultural" | "Sports" | "Academic" | "Social";
  facultyLead: string;
  studentLead: string;
  members: number;
  events: number;
  status: "Active" | "Inactive";
  description: string;
}

interface CoordinatorData {
  id: string;
  name: string;
  role: "Faculty Lead" | "Student Lead" | "Club Admin";
  dept: string;
  email: string;
  phone: string;
  assignedUnit: string;
  eventsManaged: number;
  status: "Active" | "On Leave";
}

const DEPARTMENTS_MOCK: DepartmentData[] = [
  { id: "d1", code: "CSE", name: "Computer Science & Engineering", hod: "Dr. Rajesh Verma", facultyCount: 42, studentCount: 1840, eventsConducted: 54, status: "Active", coordinators: ["Dr. Rajesh Verma", "Prof. Ananya Roy"], clubs: ["Coding Club", "Robotics Society", "IEEE Chapter"] },
  { id: "d2", code: "IT", name: "Information Technology", hod: "Prof. Vikram Seth", facultyCount: 36, studentCount: 1420, eventsConducted: 38, status: "Active", coordinators: ["Prof. Vikram Seth", "Prof. Meera Joshi"], clubs: ["Cybersecurity Club", "DevOps Guild"] },
  { id: "d3", code: "DES", name: "School of Design & Media", hod: "Prof. Sunita Rao", facultyCount: 24, studentCount: 980, eventsConducted: 29, status: "Active", coordinators: ["Prof. Sunita Rao", "Sneha Pillai"], clubs: ["Design Guild", "Photography Club"] },
  { id: "d4", code: "MECH", name: "Mechanical Engineering", hod: "Dr. Alok Sharma", facultyCount: 38, studentCount: 1560, eventsConducted: 26, status: "Active", coordinators: ["Dr. Alok Sharma"], clubs: ["SAE Racing", "Robotics Society"] },
  { id: "d5", code: "ECE", name: "Electronics & Communication", hod: "Dr. Kavita Nair", facultyCount: 32, studentCount: 1340, eventsConducted: 31, status: "Active", coordinators: ["Dr. Kavita Nair"], clubs: ["IoT Innovations", "IEEE Chapter"] },
  { id: "d6", code: "CIVIL", name: "Civil & Infrastructure", hod: "Prof. Manoj Kumar", facultyCount: 28, studentCount: 1120, eventsConducted: 19, status: "Active", coordinators: ["Prof. Manoj Kumar"], clubs: ["Green Campus Club"] },
  { id: "d7", code: "MBA", name: "School of Management", hod: "Dr. Ritu Agarwal", facultyCount: 30, studentCount: 1250, eventsConducted: 35, status: "Active", coordinators: ["Dr. Ritu Agarwal"], clubs: ["E-Cell", "Rotaract Club"] },
  { id: "d8", code: "BT", name: "Biotechnology & Sciences", hod: "Dr. Sanjay Gupta", facultyCount: 22, studentCount: 890, eventsConducted: 18, status: "Active", coordinators: ["Dr. Sanjay Gupta"], clubs: ["BioTech Forum"] },
];

const CLUBS_MOCK: ClubData[] = [
  { id: "c1", name: "Coding Club", code: "CC-CSE", dept: "Computer Science", type: "Club", category: "Technical", facultyLead: "Dr. Rajesh Verma", studentLead: "Aarav Sharma", members: 340, events: 14, status: "Active", description: "Promoting competitive programming, hackathons, and open source development across campus." },
  { id: "c2", name: "Robotics Society", code: "RS-MECH", dept: "Mechanical Engineering", type: "Student Chapter", category: "Technical", facultyLead: "Dr. Alok Sharma", studentLead: "Prof. Ananya Roy", members: 210, events: 9, status: "Active", description: "Building autonomous robots, quadcopters, and participating in national Robocon competitions." },
  { id: "c3", name: "Design Guild", code: "DG-DES", dept: "School of Design & Media", type: "Club", category: "Cultural", facultyLead: "Prof. Sunita Rao", studentLead: "Sneha Pillai", members: 280, events: 12, status: "Active", description: "UI/UX, visual art, motion design workshops, and annual design exhibition." },
  { id: "c4", name: "IEEE Student Chapter", code: "IEEE-ECE", dept: "Electronics & Communication", type: "Student Chapter", category: "Academic", facultyLead: "Dr. Kavita Nair", studentLead: "Rohan Varma", members: 410, events: 18, status: "Active", description: "International IEEE technical papers, conference symposiums, and research seminars." },
  { id: "c5", name: "Cybersecurity Club", code: "CSC-IT", dept: "Information Technology", type: "Club", category: "Technical", facultyLead: "Prof. Vikram Seth", studentLead: "Tanya Bose", members: 190, events: 8, status: "Active", description: "Ethical hacking, Capture-The-Flag (CTF) challenges, and network defense bootcamps." },
  { id: "c6", name: "Rotaract Club", code: "ROT-MBA", dept: "School of Management", type: "Club", category: "Social", facultyLead: "Dr. Ritu Agarwal", studentLead: "Priya Nair", members: 520, events: 22, status: "Active", description: "Community service, blood donation drives, and youth leadership initiatives." },
];

const COORDINATORS_MOCK: CoordinatorData[] = [
  { id: "coord1", name: "Dr. Rajesh Verma", role: "Faculty Lead", dept: "Computer Science", email: "rajesh.v@campus.edu", phone: "+91 98765 43210", assignedUnit: "Coding Club & HOD", eventsManaged: 18, status: "Active" },
  { id: "coord2", name: "Prof. Ananya Roy", role: "Faculty Lead", dept: "Computer Science", email: "ananya.r@campus.edu", phone: "+91 98765 43211", assignedUnit: "Robotics Society", eventsManaged: 12, status: "Active" },
  { id: "coord3", name: "Sneha Pillai", role: "Student Lead", dept: "School of Design & Media", email: "sneha.p@campus.edu", phone: "+91 98765 43212", assignedUnit: "Design Guild", eventsManaged: 8, status: "Active" },
  { id: "coord4", name: "Prof. Vikram Seth", role: "Faculty Lead", dept: "Information Technology", email: "vikram.s@campus.edu", phone: "+91 98765 43213", assignedUnit: "Cybersecurity Club & HOD", eventsManaged: 14, status: "Active" },
  { id: "coord5", name: "Dr. Alok Sharma", role: "Faculty Lead", dept: "Mechanical Engineering", email: "alok.s@campus.edu", phone: "+91 98765 43214", assignedUnit: "SAE Racing & HOD", eventsManaged: 9, status: "Active" },
  { id: "coord6", name: "Dr. Kavita Nair", role: "Faculty Lead", dept: "Electronics & Communication", email: "kavita.n@campus.edu", phone: "+91 98765 43215", assignedUnit: "IEEE Student Chapter & HOD", eventsManaged: 15, status: "Active" },
];

export function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState("departments");
  const [departmentsList, setDepartmentsList] = useState<DepartmentData[]>(DEPARTMENTS_MOCK);
  const [clubsList, setClubsList] = useState<ClubData[]>(CLUBS_MOCK);
  const [coordinatorsList, setCoordinatorsList] = useState<CoordinatorData[]>(COORDINATORS_MOCK);

  // Search & Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Active");

  // Modals & Drawers
  const [selectedDeptDetail, setSelectedDeptDetail] = useState<DepartmentData | null>(null);
  const [selectedClubDetail, setSelectedClubDetail] = useState<ClubData | null>(null);
  const [showAddDeptModal, setShowAddDeptModal] = useState(false);
  const [showAddClubModal, setShowAddClubModal] = useState(false);
  const [assignModalUnit, setAssignModalUnit] = useState<{ type: "dept" | "club"; name: string } | null>(null);

  // Form State
  const [newDeptName, setNewDeptName] = useState("");
  const [newDeptCode, setNewDeptCode] = useState("");
  const [newDeptHod, setNewDeptHod] = useState("");
  const [newClubName, setNewClubName] = useState("");
  const [newClubCategory, setNewClubCategory] = useState<"Technical" | "Cultural" | "Sports" | "Academic" | "Social">("Technical");
  const [newClubDept, setNewClubDept] = useState("Computer Science");
  const [assignedCoordName, setAssignedCoordName] = useState("Dr. Rajesh Verma");

  // Statistics
  const stats = useMemo(() => {
    const totalDepts = departmentsList.length;
    const totalClubs = clubsList.length;
    const studentChapters = clubsList.filter((c) => c.type === "Student Chapter").length + 8;
    const facultyCoords = coordinatorsList.filter((c) => c.role === "Faculty Lead").length + 10;
    const studentCoords = coordinatorsList.filter((c) => c.role === "Student Lead").length + 26;
    const activeOrgs = totalDepts + totalClubs;
    const totalEvents = events.length * 12;
    const pendingRequests = 5;

    return { totalDepts, totalClubs, studentChapters, facultyCoords, studentCoords, activeOrgs, totalEvents, pendingRequests };
  }, [departmentsList, clubsList, coordinatorsList]);

  // Chart data
  const deptChartData = useMemo(() => {
    return departmentsList.map((d) => ({
      name: d.code,
      events: d.eventsConducted,
      students: Math.round(d.studentCount / 10),
    }));
  }, [departmentsList]);

  const clubChartData = useMemo(() => {
    return clubsList.map((c) => ({
      name: c.name.split(" ")[0],
      events: c.events,
      members: Math.round(c.members / 5),
    }));
  }, [clubsList]);

  // Filtered Departments
  const filteredDepts = useMemo(() => {
    return departmentsList
      .filter((d) => {
        const matchesSearch = !searchTerm.trim() || d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.code.toLowerCase().includes(searchTerm.toLowerCase()) || d.hod.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || d.status === statusFilter;
        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "Most Active") return b.eventsConducted - a.eventsConducted;
        if (sortBy === "Alphabetical") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [departmentsList, searchTerm, statusFilter, sortBy]);

  // Filtered Clubs
  const filteredClubs = useMemo(() => {
    return clubsList
      .filter((c) => {
        const matchesSearch = !searchTerm.trim() || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.dept.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = deptFilter === "All" || c.dept === deptFilter;
        const matchesCat = categoryFilter === "All" || c.category === categoryFilter;
        const matchesStatus = statusFilter === "All" || c.status === statusFilter;
        return matchesSearch && matchesDept && matchesCat && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "Most Active") return b.events - a.events;
        if (sortBy === "Alphabetical") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [clubsList, searchTerm, deptFilter, categoryFilter, statusFilter, sortBy]);

  // Filtered Coordinators
  const filteredCoords = useMemo(() => {
    return coordinatorsList.filter((c) => {
      const matchesSearch = !searchTerm.trim() || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.dept.toLowerCase().includes(searchTerm.toLowerCase()) || c.assignedUnit.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = deptFilter === "All" || c.dept === deptFilter;
      return matchesSearch && matchesDept;
    });
  }, [coordinatorsList, searchTerm, deptFilter]);

  // Handlers
  const handleAddDeptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDeptName || !newDeptCode) {
      toast.error("Please fill in Department Name and Code.");
      return;
    }
    const created: DepartmentData = {
      id: `d-${Date.now()}`,
      code: newDeptCode.toUpperCase(),
      name: newDeptName,
      hod: newDeptHod || "TBD",
      facultyCount: 15,
      studentCount: 650,
      eventsConducted: 0,
      status: "Active",
      coordinators: [newDeptHod || "Faculty Lead"],
      clubs: [],
    };
    setDepartmentsList([...departmentsList, created]);
    setShowAddDeptModal(false);
    setNewDeptName("");
    setNewDeptCode("");
    setNewDeptHod("");
    toast.success(`Department "${created.name}" created successfully.`);
  };

  const handleAddClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClubName) {
      toast.error("Please fill in Club Name.");
      return;
    }
    const created: ClubData = {
      id: `c-${Date.now()}`,
      name: newClubName,
      code: `${newClubName.substring(0, 3).toUpperCase()}-CLUB`,
      dept: newClubDept,
      type: "Club",
      category: newClubCategory,
      facultyLead: "Dr. Rajesh Verma",
      studentLead: "Aarav Sharma",
      members: 120,
      events: 0,
      status: "Active",
      description: "Newly formed student club for campus engagement.",
    };
    setClubsList([...clubsList, created]);
    setShowAddClubModal(false);
    setNewClubName("");
    toast.success(`Club "${created.name}" added to ${created.dept}.`);
  };

  const handleAssignCoordinator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignModalUnit) return;
    toast.success(`Assigned ${assignedCoordName} to ${assignModalUnit.name}.`);
    setAssignModalUnit(null);
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
        title="Department & Club Management"
        subtitle="Manage academic departments, clubs, student chapters, coordinators, and event ownership."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin", to: "/admin" },
          { label: "Departments & Clubs" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => setShowAddClubModal(true)}>
              <Plus className="mr-1.5 size-4 text-primary" /> Add Club
            </Button>
            <Button className="rounded-xl shadow-glow" onClick={() => setShowAddDeptModal(true)}>
              <Building2 className="mr-1.5 size-4" /> Add Department
            </Button>
          </div>
        }
      />

      {/* 2. OVERVIEW CARDS (8 Statistic Cards) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Academic & Organizational Telemetry
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            Hierarchy Map
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Departments" value={stats.totalDepts} icon={Building2} index={0} />
          <StatCard label="Total Clubs" value={stats.totalClubs} icon={Users} tone="primary" index={1} />
          <StatCard label="Chapters" value={stats.studentChapters} icon={Award} tone="success" index={2} />
          <StatCard label="Faculty Leads" value={stats.facultyCoords} icon={GraduationCap} tone="warning" index={3} />
          <StatCard label="Student Leads" value={stats.studentCoords} icon={UserCheck} tone="success" index={4} />
          <StatCard label="Active Orgs" value={stats.activeOrgs} icon={Radio} tone="danger" index={5} />
          <StatCard label="Total Events" value={stats.totalEvents} icon={Layers} index={6} />
          <StatCard label="Pending Req" value={stats.pendingRequests} icon={Hourglass} tone="warning" index={7} />
        </div>
      </div>

      {/* 3. TABS & CONTROLS */}
      <SectionCard title="Campus Organizational Directory" description="Switch between Departments, Clubs, and Coordinators">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b pb-4">
            <TabsList className="rounded-xl bg-secondary/50 p-1">
              <TabsTrigger value="departments" className="rounded-lg text-xs font-bold">
                <Building2 className="mr-1.5 size-3.5" /> Departments ({filteredDepts.length})
              </TabsTrigger>
              <TabsTrigger value="clubs" className="rounded-lg text-xs font-bold">
                <Users className="mr-1.5 size-3.5" /> Clubs & Chapters ({filteredClubs.length})
              </TabsTrigger>
              <TabsTrigger value="coordinators" className="rounded-lg text-xs font-bold">
                <GraduationCap className="mr-1.5 size-3.5" /> Coordinators ({filteredCoords.length})
              </TabsTrigger>
            </TabsList>

            {/* SEARCH & FILTERS */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative min-w-[220px]">
                <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search units, codes, leads..."
                  className="h-9 rounded-xl pl-8 bg-card text-xs"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 w-36 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Most Active">Most Active</SelectItem>
                  <SelectItem value="Alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* TAB 1: DEPARTMENTS */}
          <TabsContent value="departments">
            {filteredDepts.length === 0 ? (
              <EmptyState icon={Building2} title="No departments match your search" description="Try clearing search filters." />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {filteredDepts.map((d) => (
                  <div key={d.id} className="lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary bg-primary-soft px-2.5 py-1 rounded-lg">
                          {d.code}
                        </span>
                        <Badge variant="outline" className="rounded-full text-[10px] bg-success-soft text-success border-success/30">
                          {d.status}
                        </Badge>
                      </div>

                      <h3 className="font-bold text-base text-foreground mt-3 line-clamp-1">{d.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">HOD: <strong className="text-foreground">{d.hod}</strong></p>

                      <div className="grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-2.5 mt-3 text-xs">
                        <div>
                          <p className="text-muted-foreground text-[10px]">Students</p>
                          <p className="font-bold text-foreground">{d.studentCount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-[10px]">Events Conducted</p>
                          <p className="font-bold text-primary">{d.eventsConducted}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t pt-3 gap-1">
                      <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs" onClick={() => setSelectedDeptDetail(d)}>
                        <Eye className="mr-1 size-3.5" /> View
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs bg-card" onClick={() => setAssignModalUnit({ type: "dept", name: d.name })}>
                        Assign Lead
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* TAB 2: CLUBS & CHAPTERS */}
          <TabsContent value="clubs">
            {filteredClubs.length === 0 ? (
              <EmptyState icon={Users} title="No clubs match your search" description="Try clearing category or search filters." />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredClubs.map((c) => (
                  <div key={c.id} className="lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="rounded-full text-[10px] font-bold text-primary bg-primary-soft">
                          {c.category}
                        </Badge>
                        <Badge variant="secondary" className="rounded-full text-[10px]">{c.type}</Badge>
                      </div>

                      <h3 className="font-bold text-base text-foreground mt-3">{c.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.dept}</p>

                      <p className="text-xs text-muted-foreground line-clamp-2 mt-2">{c.description}</p>

                      <div className="grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-2.5 mt-3 text-xs">
                        <div>
                          <p className="text-muted-foreground text-[10px]">Faculty Lead</p>
                          <p className="font-semibold text-foreground line-clamp-1">{c.facultyLead}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-[10px]">Student Lead</p>
                          <p className="font-semibold text-foreground line-clamp-1">{c.studentLead}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-[10px]">Active Members</p>
                          <p className="font-bold text-foreground">{c.members}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-[10px]">Events Hosted</p>
                          <p className="font-bold text-primary">{c.events}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t pt-3 gap-1">
                      <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs" onClick={() => setSelectedClubDetail(c)}>
                        <Eye className="mr-1 size-3.5" /> Details
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs bg-card" onClick={() => setAssignModalUnit({ type: "club", name: c.name })}>
                        Assign Lead
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* TAB 3: COORDINATORS */}
          <TabsContent value="coordinators">
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <Table>
                <TableHeader className="bg-secondary/40">
                  <TableRow>
                    <TableHead>Coordinator Profile</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="hidden md:table-cell">Department</TableHead>
                    <TableHead className="hidden lg:table-cell">Assigned Unit</TableHead>
                    <TableHead>Events Managed</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCoords.map((coord) => (
                    <TableRow key={coord.id} className="hover:bg-secondary/40">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft font-bold text-primary text-xs">
                            {coord.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                          <div className="min-w-0">
                            <p className="font-bold text-sm text-foreground line-clamp-1">{coord.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{coord.email}</p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <Badge variant="outline" className="rounded-full text-[10px]">{coord.role}</Badge>
                      </TableCell>

                      <TableCell className="hidden md:table-cell text-xs text-muted-foreground">{coord.dept}</TableCell>

                      <TableCell className="hidden lg:table-cell text-xs font-semibold text-primary">{coord.assignedUnit}</TableCell>

                      <TableCell className="font-bold text-xs">{coord.eventsManaged}</TableCell>

                      <TableCell>
                        <Badge variant="outline" className="rounded-full text-[10px] bg-success-soft text-success border-success/30">
                          {coord.status}
                        </Badge>
                      </TableCell>

                      <TableCell className="text-right">
                        <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs bg-card" onClick={() => toast.success(`Reassigning ${coord.name}...`)}>
                          Reassign
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </SectionCard>

      {/* 4. PERFORMANCE CHARTS & ANALYTICS */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Events Conducted by Department" description="Comparative event volume across university departments">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptChartData} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="events" fill="#2563EB" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Club Activity & Member Engagement" description="Hosted events vs member density ratios">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clubChartData} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="events" fill="#22C55E" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      {/* DEPARTMENT DETAIL MODAL */}
      <Dialog open={selectedDeptDetail !== null} onOpenChange={() => setSelectedDeptDetail(null)}>
        {selectedDeptDetail && (
          <DialogContent className="max-w-lg rounded-2xl p-6">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xs bg-primary-soft text-primary px-2.5 py-1 rounded-lg">
                  {selectedDeptDetail.code}
                </span>
                <Badge variant="outline" className="rounded-full text-xs">Academic Department</Badge>
              </div>
              <DialogTitle className="text-xl font-bold mt-2">{selectedDeptDetail.name}</DialogTitle>
              <DialogDescription>Head of Department: <strong className="text-foreground">{selectedDeptDetail.hod}</strong></DialogDescription>
            </DialogHeader>

            <div className="space-y-3 py-2 text-xs">
              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-secondary/40 p-3 text-center">
                <div>
                  <p className="text-muted-foreground text-[10px]">Faculty</p>
                  <p className="font-bold text-foreground text-sm">{selectedDeptDetail.facultyCount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Students</p>
                  <p className="font-bold text-foreground text-sm">{selectedDeptDetail.studentCount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Total Events</p>
                  <p className="font-bold text-primary text-sm">{selectedDeptDetail.eventsConducted}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-muted-foreground mb-1">AFFILIATED CLUBS & CHAPTERS</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDeptDetail.clubs.map((cl) => (
                    <Badge key={cl} variant="outline" className="rounded-full bg-card">{cl}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-muted-foreground mb-1">DEPARTMENT FACULTY LEADS</p>
                <div className="space-y-1">
                  {selectedDeptDetail.coordinators.map((co) => (
                    <div key={co} className="flex justify-between rounded-lg bg-secondary/30 p-2">
                      <span className="font-semibold text-foreground">{co}</span>
                      <span className="text-muted-foreground text-[10px]">Faculty Lead</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" className="rounded-xl text-xs" onClick={() => setSelectedDeptDetail(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* CLUB DETAIL MODAL */}
      <Dialog open={selectedClubDetail !== null} onOpenChange={() => setSelectedClubDetail(null)}>
        {selectedClubDetail && (
          <DialogContent className="max-w-lg rounded-2xl p-6">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full text-xs font-bold text-primary bg-primary-soft">
                  {selectedClubDetail.category}
                </Badge>
                <Badge variant="secondary" className="rounded-full text-xs">{selectedClubDetail.type}</Badge>
              </div>
              <DialogTitle className="text-xl font-bold mt-2">{selectedClubDetail.name}</DialogTitle>
              <DialogDescription>{selectedClubDetail.dept}</DialogDescription>
            </DialogHeader>

            <div className="space-y-3 py-2 text-xs">
              <p className="text-muted-foreground">{selectedClubDetail.description}</p>

              <div className="grid grid-cols-2 gap-3 rounded-2xl border p-3">
                <div>
                  <p className="text-muted-foreground text-[10px]">Faculty Coordinator</p>
                  <p className="font-bold text-foreground">{selectedClubDetail.facultyLead}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Student Lead</p>
                  <p className="font-bold text-foreground">{selectedClubDetail.studentLead}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Registered Members</p>
                  <p className="font-bold text-primary">{selectedClubDetail.members}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px]">Events Hosted</p>
                  <p className="font-bold text-success">{selectedClubDetail.events}</p>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" className="rounded-xl text-xs" onClick={() => setSelectedClubDetail(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* ADD DEPARTMENT MODAL */}
      <Dialog open={showAddDeptModal} onOpenChange={setShowAddDeptModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Add Academic Department</DialogTitle>
            <DialogDescription>Create a new department unit for event governance.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddDeptSubmit} className="space-y-4 py-2 text-xs">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">Department Name *</Label>
              <Input
                value={newDeptName}
                onChange={(e) => setNewDeptName(e.target.value)}
                placeholder="e.g. Electrical Engineering"
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Department Code *</Label>
              <Input
                value={newDeptCode}
                onChange={(e) => setNewDeptCode(e.target.value)}
                placeholder="e.g. EEE"
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Head of Department (HOD)</Label>
              <Input
                value={newDeptHod}
                onChange={(e) => setNewDeptHod(e.target.value)}
                placeholder="e.g. Dr. Ramesh Kumar"
                className="rounded-xl"
              />
            </div>

            <DialogFooter className="pt-2">
              <Button variant="outline" type="button" onClick={() => setShowAddDeptModal(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button type="submit" className="rounded-xl shadow-glow">
                Create Department
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ADD CLUB MODAL */}
      <Dialog open={showAddClubModal} onOpenChange={setShowAddClubModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Add Club or Student Chapter</DialogTitle>
            <DialogDescription>Register a new student organization.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddClubSubmit} className="space-y-4 py-2 text-xs">
            <div className="space-y-1">
              <Label className="text-xs font-semibold">Club Name *</Label>
              <Input
                value={newClubName}
                onChange={(e) => setNewClubName(e.target.value)}
                placeholder="e.g. AI & Robotics Club"
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Affiliated Department</Label>
              <Select value={newClubDept} onValueChange={setNewClubDept}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {initialDeptNames.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold">Category</Label>
              <Select value={newClubCategory} onValueChange={(val) => setNewClubCategory(val as any)}>
                <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DialogFooter className="pt-2">
              <Button variant="outline" type="button" onClick={() => setShowAddClubModal(false)} className="rounded-xl">
                Cancel
              </Button>
              <Button type="submit" className="rounded-xl shadow-glow">
                Create Club
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ASSIGN COORDINATOR MODAL */}
      <Dialog open={assignModalUnit !== null} onOpenChange={() => setAssignModalUnit(null)}>
        {assignModalUnit && (
          <DialogContent className="max-w-md rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">Assign Lead / Coordinator</DialogTitle>
              <DialogDescription>Assign a faculty lead for <strong className="text-foreground">{assignModalUnit.name}</strong></DialogDescription>
            </DialogHeader>

            <form onSubmit={handleAssignCoordinator} className="space-y-4 py-2 text-xs">
              <div className="space-y-1">
                <Label className="text-xs font-semibold">Select Faculty Coordinator</Label>
                <Select value={assignedCoordName} onValueChange={setAssignedCoordName}>
                  <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {coordinatorsList.map((c) => (
                      <SelectItem key={c.id} value={c.name}>{c.name} ({c.dept})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter className="pt-2">
                <Button variant="outline" type="button" onClick={() => setAssignModalUnit(null)} className="rounded-xl">
                  Cancel
                </Button>
                <Button type="submit" className="rounded-xl shadow-glow">
                  Confirm Assignment
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
