import { useState, useEffect } from "react";
import { Link, Outlet, createFileRoute, useRouterState, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  Archive,
  PieChart,
  Workflow,
  Award,
  BadgeCheck,
  BarChart3,
  Bell,
  Bookmark,
  Building2,
  CalendarDays,
  ClipboardList,
  Compass,
  Cpu,
  FileBarChart,
  FileCheck,
  GraduationCap,
  Layers,
  LayoutDashboard,
  ListChecks,
  Menu,
  PlusCircle,
  QrCode,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Ticket,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { currentUser, notifications } from "@/data/mock";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { FloatingDemoPanel } from "@/components/app/FloatingDemoPanel";
import { AiAssistantPanel } from "@/components/app/AiAssistantPanel";

export const Route = createFileRoute("/_app")({
  component: AppRouteWrapper,
});

function AppRouteWrapper() {
  return <AppShell />;
}

const studentNav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/events", label: "Event Feed", icon: Compass },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/saved", label: "Saved Events", icon: Bookmark },
  { to: "/registrations", label: "My Registrations", icon: Ticket },
  { to: "/certificates", label: "Certificates", icon: Award },
  { to: "/archive", label: "Archived Events", icon: ClipboardList },
  { to: "/lifecycle", label: "Event Lifecycle", icon: Workflow },
  { to: "/notifications", label: "Notifications", icon: Bell },
];

const organizerNav = [
  { to: "/organizer", label: "Dashboard", icon: LayoutDashboard },
  { to: "/organizer/create", label: "Create Event", icon: PlusCircle },
  { to: "/organizer/events", label: "Manage Events", icon: ListChecks },
  { to: "/organizer/registrations", label: "Registrations", icon: Users },
  { to: "/organizer/attendance", label: "Attendance & QR", icon: QrCode },
  { to: "/organizer/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/archive-manager", label: "Archive Manager", icon: Archive },
  { to: "/archive-analytics", label: "Archive Analytics", icon: PieChart },
];

const adminNav = [
  { to: "/admin/command-center", label: "Command Center", icon: Cpu },
  { to: "/admin/digital-twin", label: "Digital Twin", icon: Layers },
  { to: "/admin/predictive-intelligence", label: "Predictive Intelligence", icon: TrendingUp },
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/approvals", label: "Event Approval", icon: BadgeCheck },
  { to: "/admin/users", label: "Users & Roles", icon: ShieldCheck },
  { to: "/admin/departments", label: "Departments & Clubs", icon: Building2 },
  { to: "/admin/archive-logs", label: "Archive Monitor", icon: Archive },
  { to: "/admin/reports", label: "Reports", icon: FileBarChart },
  { to: "/admin/audit", label: "Audit Trail", icon: FileCheck },
  { to: "/admin/settings", label: "Platform Settings", icon: Settings },
];

const roles = [
  { key: "student", label: "Student", home: "/dashboard", nav: studentNav },
  { key: "organizer", label: "Organizer", home: "/organizer", nav: organizerNav },
  { key: "admin", label: "Administrator", home: "/admin", nav: adminNav },
] as const;

function AppShell() {
  const { user, loading, userProfile, saveUserProfile, logout } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Profile onboarding state
  const [onboardName, setOnboardName] = useState("");
  const [onboardDept, setOnboardDept] = useState("Computer Science & Engineering");
  const [onboardYear, setOnboardYear] = useState("3rd Year");
  const [isOnboardingSaving, setIsOnboardingSaving] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !userProfile)) {
      navigate({ to: "/login" });
    }
    if (userProfile && !userProfile.profileCompleted && userProfile.name) {
      setOnboardName(userProfile.name);
    }
  }, [user, loading, userProfile, navigate]);

  const needsOnboarding = userProfile && userProfile.profileCompleted === false;

  const handleSaveOnboarding = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onboardName.trim()) return;
    setIsOnboardingSaving(true);
    await saveUserProfile({
      name: onboardName.trim(),
      department: onboardDept,
      year: onboardYear,
      profileCompleted: true,
    });
    setIsOnboardingSaving(false);
  };

  // Dynamic RBAC Role Resolution: Strictly require active userProfile.role
  const activeRoleName = userProfile?.role || null;
  const role = activeRoleName === "Admin" ? roles[2] : activeRoleName === "Organizer" ? roles[1] : roles[0];
  const unread = notifications.filter((n) => n.unread).length;

  const displayName = userProfile?.name || user?.displayName || "Campus User";
  const displayEmail = userProfile?.email || user?.email || "user@campus.edu";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Route Protection & Role Guard Check
  const isUnauthorized =
    (activeRoleName === "Student" && (pathname.startsWith("/admin") || pathname.startsWith("/organizer"))) ||
    (activeRoleName === "Organizer" && pathname.startsWith("/admin"));

  const nav = (
    <div className="flex h-full flex-col gap-6 p-4">
      <Link to="/" className="flex items-center gap-2.5 px-2 py-1">
        <img src="/logo.jpg" alt="CampusPulse Logo" className="size-9 rounded-xl object-cover shadow-glow" />
        <span className="text-base font-semibold tracking-tight">CampusPulse</span>
      </Link>

      <div>
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {role.label} workspace
        </p>
        <nav className="space-y-1">
          {role.nav.map((item) => {
            const active = pathname === item.to || (item.to !== role.home && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <item.icon className="size-4 shrink-0" />
                <span className="truncate">{item.label}</span>
                {item.label === "Notifications" && unread > 0 && (
                  <Badge className="ml-auto h-5 rounded-full px-1.5 text-[10px]">{unread}</Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto space-y-3">
        <Link
          to="/settings"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-secondary"
        >
          <Settings className="size-4" /> Settings
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-background">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] border-r border-sidebar-border bg-sidebar lg:block">
        {nav}
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed inset-y-0 left-0 z-50 w-[264px] border-r border-sidebar-border bg-sidebar lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="absolute right-2 top-3 size-8"
                onClick={() => setMobileOpen(false)}
              >
                <X className="size-4" />
              </Button>
              {nav}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="lg:pl-[264px]">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="size-9 lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-4" />
            </Button>
            <div className="relative hidden min-w-0 sm:block">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search events, clubs, departments…"
                className="h-10 max-w-md rounded-xl border-border bg-card pl-9"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const q = (e.target as HTMLInputElement).value.trim();
                    if (q) {
                      navigate({ to: "/events", search: { q } });
                    }
                  }
                }}
              />
            </div>
            <div className="col-start-3 flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Notifications" className="relative size-9 rounded-xl">
                    <Bell className="size-4" />
                    {unread > 0 && (
                      <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-danger ring-2 ring-background" />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 rounded-2xl p-0">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <p className="text-sm font-semibold">Notifications</p>
                    <Badge variant="secondary" className="rounded-full">{unread} new</Badge>
                  </div>
                  <ScrollArea className="h-72">
                    {notifications.map((n) => (
                      <div key={n.id} className="border-b border-border px-4 py-3 last:border-0 hover:bg-secondary/60">
                        <p className="text-sm font-medium">{n.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{n.body}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">{n.time}</p>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="p-2">
                    <Link to="/notifications">
                      <Button variant="ghost" className="w-full rounded-xl text-sm">View all</Button>
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-xl border border-border bg-card py-1 pl-1 pr-2.5 transition-colors hover:bg-secondary">
                    <span className="grid size-7 place-items-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
                      {initials}
                    </span>
                    <span className="hidden text-sm font-medium sm:block">{displayName.split(" ")[0]}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-2xl">
                  <DropdownMenuLabel>
                    <p className="text-sm font-medium">{displayName}</p>
                    <p className="text-xs font-normal text-muted-foreground">{displayEmail}</p>
                    <Badge variant="outline" className="mt-1 text-[10px] rounded-full">{activeRoleName} Active</Badge>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile"><User className="mr-2 size-4" /> Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings"><Settings className="mr-2 size-4" /> Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={async () => { await logout(); navigate({ to: "/login" }); }}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
          {isUnauthorized ? (
            <div className="mx-auto max-w-md rounded-3xl border border-danger/30 bg-card p-8 text-center shadow-2xl space-y-4 my-12">
              <span className="grid size-12 place-items-center rounded-2xl bg-danger-soft text-danger font-bold mx-auto text-xl">
                🔒
              </span>
              <div>
                <h2 className="font-extrabold text-xl text-foreground">Access Denied (403)</h2>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Your current active account role is <strong>{activeRoleName}</strong>. This page requires additional role privileges.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <Button className="rounded-xl shadow-glow text-xs w-full bg-primary" onClick={() => navigate({ to: "/login" })}>
                  Return to Portal Login
                </Button>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>

        {/* Onboarding Dialog for Fresh Login Users */}
        <Dialog open={!!needsOnboarding}>
          <DialogContent className="sm:max-w-md rounded-2xl p-6 border border-primary/30">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-6 text-primary" />
                <DialogTitle className="text-xl font-bold">Welcome to CampusPulse!</DialogTitle>
              </div>
              <DialogDescription className="text-xs text-muted-foreground pt-1">
                Please complete your basic student profile details to customize your campus experience.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSaveOnboarding} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <Label htmlFor="onboard-name">Full Name</Label>
                <Input
                  id="onboard-name"
                  placeholder="e.g. Aarav Sharma"
                  value={onboardName}
                  onChange={(e) => setOnboardName(e.target.value)}
                  required
                  className="rounded-xl h-11"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Department / Stream</Label>
                <Select value={onboardDept} onValueChange={setOnboardDept}>
                  <SelectTrigger className="rounded-xl h-11">
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science & Engineering">Computer Science & Engineering</SelectItem>
                    <SelectItem value="Information Technology">Information Technology</SelectItem>
                    <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                    <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                    <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                    <SelectItem value="Management Studies (MBA/BBA)">Management Studies (MBA/BBA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>Academic Year</Label>
                <Select value={onboardYear} onValueChange={setOnboardYear}>
                  <SelectTrigger className="rounded-xl h-11">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Year">1st Year (Freshman)</SelectItem>
                    <SelectItem value="2nd Year">2nd Year (Sophomore)</SelectItem>
                    <SelectItem value="3rd Year">3rd Year (Junior)</SelectItem>
                    <SelectItem value="4th Year">4th Year (Senior)</SelectItem>
                    <SelectItem value="Postgraduate / PhD">Postgraduate / PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isOnboardingSaving}
                className="w-full rounded-xl bg-primary text-primary-foreground font-semibold h-11 shadow-glow"
              >
                {isOnboardingSaving ? "Saving Profile..." : "Complete Setup & Enter Dashboard"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Global PulseAI Assistant Floating Panel */}
        <AiAssistantPanel />
      </div>
    </div>
  );
}
