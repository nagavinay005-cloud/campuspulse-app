import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Activity,
  AlertTriangle,
  Archive,
  ArrowRight,
  Award,
  BadgeCheck,
  Bell,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  CloudDownload,
  CloudUpload,
  Copy,
  Database,
  Download,
  Eye,
  FileCheck,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  HardDrive,
  History,
  Hourglass,
  Info,
  KeyRound,
  Layers,
  LayoutGrid,
  Link2,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  MoreHorizontal,
  Palette,
  Pencil,
  Phone,
  Plus,
  Printer,
  Radio,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Send,
  Settings as SettingsIcon,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sliders,
  Table as TableIcon,
  Trash2,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UserX,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
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
import { EmptyState, PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/settings")({
  head: () => ({
    meta: [
      { title: "System Settings — CampusPulse" },
      { name: "description", content: "Configure platform settings, event lifecycle rules, notifications, security, and integrations." },
      { property: "og:title", content: "System Settings — CampusPulse" },
      { property: "og:description", content: "Administrative settings console for university platform governance." },
    ],
  }),
  component: PlatformSettings,
});

interface SettingsCategory {
  id: string;
  label: string;
  icon: any;
  badge?: string;
}

const CATEGORIES: SettingsCategory[] = [
  { id: "general", label: "General", icon: SettingsIcon },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "event", label: "Event Settings", icon: Layers },
  { id: "notification", label: "Notification Settings", icon: Bell },
  { id: "user", label: "User Management", icon: Users },
  { id: "archive", label: "Archive Settings", icon: FolderArchive, badge: "Core Rule" },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "integrations", label: "Integrations", icon: Cloud, badge: "Firebase" },
  { id: "backup", label: "Backup & Restore", icon: Database },
  { id: "audit", label: "Audit Logs", icon: History },
];

const AUDIT_LOGS_MOCK = [
  { id: "log1", action: "Archive SLA Changed", user: "Admin (Dr. Rajesh)", ip: "192.168.1.45", timestamp: "Today, 11:15 AM", details: "Updated archive delay to 1.0 hour post event end" },
  { id: "log2", action: "Notification Enabled", user: "Admin (Priya Nair)", ip: "192.168.1.12", timestamp: "Today, 09:30 AM", details: "Enabled automatic certificate release emails" },
  { id: "log3", action: "Department Added", user: "Super Admin", ip: "192.168.1.01", timestamp: "Yesterday, 04:20 PM", details: "Added School of Design & Media" },
  { id: "log4", action: "Admin Login", user: "Admin (Dr. Rajesh)", ip: "192.168.1.45", timestamp: "Yesterday, 09:00 AM", details: "Successful 2FA login session initiated" },
];

export function PlatformSettings() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [hasChanges, setHasChanges] = useState(false);

  // Form State - General
  const [platformName, setPlatformName] = useState("CampusPulse");
  const [platformDesc, setPlatformDesc] = useState("Centralized University Event Announcement & Expiry Governance System");
  const [institutionName, setInstitutionName] = useState("Sri Vidya Institute of Technology");
  const [academicYear, setAcademicYear] = useState("2025-26");
  const [timeZone, setTimeZone] = useState("Asia/Kolkata (IST)");
  const [language, setLanguage] = useState("English (US)");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [supportEmail, setSupportEmail] = useState("support@campus.edu");

  // Form State - Branding
  const [primaryColor, setPrimaryColor] = useState("#2563EB");
  const [secondaryColor, setSecondaryColor] = useState("#64748B");
  const [accentColor, setAccentColor] = useState("#22C55E");

  // Form State - Event Settings
  const [maxParticipants, setMaxParticipants] = useState("500");
  const [approvalRequired, setApprovalRequired] = useState(true);
  const [allowWaitlist, setAllowWaitlist] = useState(true);
  const [certEnabledDefault, setCertEnabledDefault] = useState(true);
  const [feedbackEnabledDefault, setFeedbackEnabledDefault] = useState(true);
  const [qrCheckinEnabled, setQrCheckinEnabled] = useState(true);

  // Form State - Notifications
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [inAppNotifs, setInAppNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [regConfirmations, setRegConfirmations] = useState(true);
  const [eventReminders, setEventReminders] = useState(true);
  const [archiveNotifs, setArchiveNotifs] = useState(true);

  // Form State - Archive Settings (Core Constraint)
  const [autoArchivingEnabled, setAutoArchivingEnabled] = useState(true);
  const [archiveDelay, setArchiveDelay] = useState("1.0"); // 1 hour
  const [autoCloseRegAtStart, setAutoCloseRegAtStart] = useState(true);
  const [autoHideExpired, setAutoHideExpired] = useState(true);
  const [keepCertsAvailable, setKeepCertsAvailable] = useState(true);
  const [keepReportsAvailable, setKeepReportsAvailable] = useState(true);
  const [retentionPeriod, setRetentionPeriod] = useState("5 Years");

  // Form State - Security
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("Strong (Min 8 chars, 1 Special)");
  const [maxLoginAttempts, setMaxLoginAttempts] = useState("5");
  const [sessionTimeout, setSessionTimeout] = useState("30 Minutes");

  // Backup Modal
  const [showRestoreModal, setShowRestoreModal] = useState(false);

  // Handlers
  const handleSaveAll = () => {
    setHasChanges(false);
    toast.success("System Settings saved and applied successfully across all modules.");
  };

  const handleReset = () => {
    setHasChanges(false);
    toast.info("System settings restored to default baseline.");
  };

  return (
    <div className="space-y-8 pb-32">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="System Settings"
        subtitle="Configure platform settings, event lifecycle rules, notifications, security, and integrations."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin", to: "/admin" },
          { label: "System Settings" },
        ]}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card" onClick={handleReset}>
              <RotateCcw className="mr-1.5 size-4 text-muted-foreground" /> Reset Defaults
            </Button>
            <Button className="rounded-xl shadow-glow" onClick={handleSaveAll}>
              <Save className="mr-1.5 size-4" /> Save Changes
            </Button>
          </div>
        }
      />

      {/* 2. MAIN SETTINGS DASHBOARD LAYOUT (Sidebar + Content) */}
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* SIDEBAR NAVIGATION */}
        <div className="space-y-1 rounded-2xl border border-border bg-card p-3 h-fit">
          <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Settings Navigation
          </p>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all",
                activeCategory === cat.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              <div className="flex items-center gap-2.5">
                <cat.icon className="size-4 shrink-0" />
                <span>{cat.label}</span>
              </div>
              {cat.badge && (
                <Badge
                  variant="outline"
                  className={cn(
                    "rounded-full text-[9px] px-2 py-0",
                    activeCategory === cat.id ? "bg-white/20 text-white border-transparent" : "bg-primary-soft text-primary border-primary/20",
                  )}
                >
                  {cat.badge}
                </Badge>
              )}
            </button>
          ))}
        </div>

        {/* CONTENT PANELS */}
        <div className="space-y-6">
          {/* CATEGORY 1: GENERAL */}
          {activeCategory === "general" && (
            <SectionCard title="General Platform Information" description="Identity and regional configuration for CampusPulse">
              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Platform Name</Label>
                  <Input value={platformName} onChange={(e) => { setPlatformName(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Institution Name</Label>
                  <Input value={institutionName} onChange={(e) => { setInstitutionName(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <Label className="text-xs font-semibold">Platform Description</Label>
                  <Textarea value={platformDesc} onChange={(e) => { setPlatformDesc(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Academic Year</Label>
                  <Select value={academicYear} onValueChange={(v) => { setAcademicYear(v); setHasChanges(true); }}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      <SelectItem value="2024-25">2024–25</SelectItem>
                      <SelectItem value="2025-26">2025–26</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Default Time Zone</Label>
                  <Input value={timeZone} onChange={(e) => { setTimeZone(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Support Email</Label>
                  <Input value={supportEmail} onChange={(e) => { setSupportEmail(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Date Format</Label>
                  <Select value={dateFormat} onValueChange={(v) => { setDateFormat(v); setHasChanges(true); }}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 2: BRANDING */}
          {activeCategory === "branding" && (
            <SectionCard title="Visual Branding & Color Palette" description="Customize university theme and logos">
              <div className="space-y-4 text-xs">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-dashed border-border p-4 text-center space-y-2">
                    <p className="font-semibold text-foreground">Platform Logo</p>
                    <div className="size-16 mx-auto rounded-2xl bg-primary-soft text-primary grid place-items-center font-bold text-lg">
                      CP
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl text-[11px]" onClick={() => toast.info("Upload logo file selected.")}>
                      Upload Logo
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-dashed border-border p-4 text-center space-y-2">
                    <p className="font-semibold text-foreground">Favicon Icon</p>
                    <div className="size-12 mx-auto rounded-xl bg-secondary grid place-items-center font-bold text-xs">
                      ⚡
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl text-[11px]" onClick={() => toast.info("Upload favicon selected.")}>
                      Upload Favicon
                    </Button>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                    <p className="font-semibold text-foreground">Theme Palette Preview</p>
                    <div className="flex gap-2">
                      <span className="size-6 rounded-full bg-primary inline-block" />
                      <span className="size-6 rounded-full bg-success inline-block" />
                      <span className="size-6 rounded-full bg-warning inline-block" />
                      <span className="size-6 rounded-full bg-danger inline-block" />
                    </div>
                    <p className="text-[11px] text-muted-foreground">White-First SaaS Theme System</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 3: EVENT SETTINGS */}
          {activeCategory === "event" && (
            <SectionCard title="Default Event Rules & Governance" description="Global defaults applied when organizers publish events">
              <div className="space-y-4 text-xs">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold">Maximum Capacity Default</Label>
                    <Input value={maxParticipants} onChange={(e) => { setMaxParticipants(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-semibold">Approval SLA Window</Label>
                    <Select defaultValue="24 Hours">
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="12 Hours">12 Hours</SelectItem>
                        <SelectItem value="24 Hours">24 Hours</SelectItem>
                        <SelectItem value="48 Hours">48 Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  {[
                    { label: "Require Admin Approval Before Publishing", desc: "Blocks events from public feed until approved by admin", state: approvalRequired, set: setApprovalRequired },
                    { label: "Enable Automated Waitlist Queue", desc: "Automatically moves new registrations to waitlist when seats fill", state: allowWaitlist, set: setAllowWaitlist },
                    { label: "Enable Certificate Generation by Default", desc: "Automatically issues verified certificates post attendance lock", state: certEnabledDefault, set: setCertEnabledDefault },
                    { label: "Enable Participant QR Code Check-In", desc: "Generates unique student check-in QR pass for organizers", state: qrCheckinEnabled, set: setQrCheckinEnabled },
                  ].map((rule) => (
                    <div key={rule.label} className="flex items-center justify-between rounded-xl border p-3">
                      <div>
                        <p className="font-semibold text-foreground">{rule.label}</p>
                        <p className="text-[11px] text-muted-foreground">{rule.desc}</p>
                      </div>
                      <Switch checked={rule.state} onCheckedChange={(val) => { rule.set(val); setHasChanges(true); }} />
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 4: NOTIFICATION SETTINGS */}
          {activeCategory === "notification" && (
            <SectionCard title="Notification & Channel Preferences" description="Configure global communication alerts for students and organizers">
              <div className="space-y-3 text-xs">
                {[
                  { label: "Email Notifications", desc: "Send event registration and approval confirmation via email", state: emailNotifs, set: setEmailNotifs },
                  { label: "In-App Notification Center", desc: "Deliver live alert badges inside user dashboard", state: inAppNotifs, set: setInAppNotifs },
                  { label: "Browser Push Notifications", desc: "Web push notifications for upcoming live events", state: pushNotifs, set: setPushNotifs },
                  { label: "Automatic Event Archiving Alerts", desc: "Notify organizers when an event is automatically archived", state: archiveNotifs, set: setArchiveNotifs },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between rounded-xl border p-3">
                    <div>
                      <p className="font-semibold text-foreground">{n.label}</p>
                      <p className="text-[11px] text-muted-foreground">{n.desc}</p>
                    </div>
                    <Switch checked={n.state} onCheckedChange={(val) => { n.set(val); setHasChanges(true); }} />
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 5: USER MANAGEMENT */}
          {activeCategory === "user" && (
            <SectionCard title="Default Roles & Access Controls" description="Configure registration policies and default RBAC roles">
              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Default Student Role</Label>
                  <Input value="Student Participant" disabled className="rounded-xl bg-secondary/40" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Default Organizer Role</Label>
                  <Input value="Club / Faculty Lead" disabled className="rounded-xl bg-secondary/40" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Allowed Email Domain</Label>
                  <Input defaultValue="@campus.edu" className="rounded-xl" />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">Account Verification Policy</Label>
                  <Select defaultValue="Email Verification Required">
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      <SelectItem value="Email Verification Required">Email Verification Required</SelectItem>
                      <SelectItem value="Instant Approval">Instant Approval</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 6: ARCHIVE SETTINGS (CORE CONSTRAINT SECTION) */}
          {activeCategory === "archive" && (
            <SectionCard
              title="Automatic Event Expiry & Archiving Rules"
              description="Configure the core automated lifecycle daemon for campus announcements"
            >
              <div className="space-y-5 text-xs">
                {/* LIVE ARCHIVE WORKFLOW PREVIEW */}
                <div className="rounded-2xl border border-primary/20 bg-primary-soft/40 p-4 space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Zap className="size-4" />
                    <span>Live Automatic Expiry Workflow Diagram</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-5 text-center">
                    <div className="rounded-xl bg-card p-2 border">
                      <span className="text-[10px] text-muted-foreground block">1. Event End</span>
                      <p className="font-bold text-foreground mt-0.5">End Datetime</p>
                    </div>
                    <div className="rounded-xl bg-card p-2 border">
                      <span className="text-[10px] text-muted-foreground block">2. SLA Grace</span>
                      <p className="font-bold text-warning mt-0.5">+1.0 Hour</p>
                    </div>
                    <div className="rounded-xl bg-card p-2 border">
                      <span className="text-[10px] text-muted-foreground block">3. Daemon Exec</span>
                      <p className="font-bold text-primary mt-0.5">Auto-Archive</p>
                    </div>
                    <div className="rounded-xl bg-card p-2 border">
                      <span className="text-[10px] text-muted-foreground block">4. Feed Filter</span>
                      <p className="font-bold text-foreground mt-0.5">Hidden Feed</p>
                    </div>
                    <div className="rounded-xl bg-card p-2 border">
                      <span className="text-[10px] text-muted-foreground block">5. Certificates</span>
                      <p className="font-bold text-success mt-0.5">Frozen & Kept</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold">Archive Delay After Event Ends</Label>
                    <Select value={archiveDelay} onValueChange={(v) => { setArchiveDelay(v); setHasChanges(true); }}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="0.5">30 Minutes Post End</SelectItem>
                        <SelectItem value="1.0">1 Hour Post End (Recommended)</SelectItem>
                        <SelectItem value="2.0">2 Hours Post End</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-semibold">Data Retention Period</Label>
                    <Select value={retentionPeriod} onValueChange={(v) => { setRetentionPeriod(v); setHasChanges(true); }}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="3 Years">3 Years</SelectItem>
                        <SelectItem value="5 Years">5 Years (NAAC Standard)</SelectItem>
                        <SelectItem value="Permanent">Permanent Archival</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Automatic Event Archiving Daemon Enabled", desc: "Runs background check every 5 mins to auto-expire past events", state: autoArchivingEnabled, set: setAutoArchivingEnabled },
                    { label: "Automatically Close Registrations at Event Start", desc: "Locks student registration forms as soon as event starts", state: autoCloseRegAtStart, set: setAutoCloseRegAtStart },
                    { label: "Automatically Hide Expired Announcements", desc: "Removes ended events from public student announcement feed", state: autoHideExpired, set: setAutoHideExpired },
                    { label: "Keep Certificates Available Post-Archival", desc: "Ensures students can claim certificates even after event is archived", state: keepCertsAvailable, set: setKeepCertsAvailable },
                    { label: "Keep NAAC Reports Available Post-Archival", desc: "Preserves event logs for accreditation audits", state: keepReportsAvailable, set: setKeepReportsAvailable },
                  ].map((rule) => (
                    <div key={rule.label} className="flex items-center justify-between rounded-xl border p-3">
                      <div>
                        <p className="font-semibold text-foreground">{rule.label}</p>
                        <p className="text-[11px] text-muted-foreground">{rule.desc}</p>
                      </div>
                      <Switch checked={rule.state} onCheckedChange={(val) => { rule.set(val); setHasChanges(true); }} />
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 7: SECURITY */}
          {activeCategory === "security" && (
            <SectionCard title="Security & Authentication Controls" description="Configure 2FA, session expiry, and login policies">
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between rounded-xl border p-3">
                  <div>
                    <p className="font-semibold text-foreground">Enforce Two-Factor Authentication (2FA) for Admins</p>
                    <p className="text-[11px] text-muted-foreground">Requires OTP verification for all administrative actions</p>
                  </div>
                  <Switch checked={twoFactorAuth} onCheckedChange={(val) => { setTwoFactorAuth(val); setHasChanges(true); }} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold">Max Login Attempts</Label>
                    <Input value={maxLoginAttempts} onChange={(e) => { setMaxLoginAttempts(e.target.value); setHasChanges(true); }} className="rounded-xl" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold">Session Timeout</Label>
                    <Select value={sessionTimeout} onValueChange={(v) => { setSessionTimeout(v); setHasChanges(true); }}>
                      <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="15 Minutes">15 Minutes</SelectItem>
                        <SelectItem value="30 Minutes">30 Minutes</SelectItem>
                        <SelectItem value="1 Hour">1 Hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 8: INTEGRATIONS (FIREBASE READY) */}
          {activeCategory === "integrations" && (
            <SectionCard title="Third-Party Integrations & Cloud Services" description="Connect Firebase, Google Workspace, and Email services">
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                {[
                  { name: "Firebase Auth & Firestore", desc: "User authentication, realtime event database, and rule security", icon: Cloud, status: "Connected", tone: "bg-success-soft text-success" },
                  { name: "Google Calendar Sync", desc: "Sync event schedules directly to student Google Calendars", icon: Calendar, status: "Configured", tone: "bg-success-soft text-success" },
                  { name: "SendGrid Email API", desc: "Automated event confirmation and certificate email delivery", icon: Mail, status: "Configured", tone: "bg-success-soft text-success" },
                  { name: "Twilio SMS Service", desc: "Urgent SMS announcement alerts for campus emergencies", icon: MessageSquare, status: "Disconnected", tone: "bg-secondary text-muted-foreground" },
                ].map((ig) => (
                  <div key={ig.name} className="rounded-2xl border border-border bg-card p-4 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <ig.icon className="size-5 text-primary" />
                        <Badge variant="outline" className={cn("rounded-full text-[10px]", ig.tone)}>{ig.status}</Badge>
                      </div>
                      <h4 className="font-bold text-sm text-foreground mt-2">{ig.name}</h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{ig.desc}</p>
                    </div>
                    <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs mt-2 bg-card" onClick={() => toast.info(`Configuring ${ig.name}...`)}>
                      Configure
                    </Button>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 9: BACKUP & RESTORE */}
          {activeCategory === "backup" && (
            <SectionCard title="System Backup & Data Recovery" description="Manage automated backups and restore points">
              <div className="space-y-4 text-xs">
                <div className="flex items-center justify-between rounded-2xl border p-4">
                  <div>
                    <p className="font-bold text-sm text-foreground">Master System Backup</p>
                    <p className="text-muted-foreground text-[11px]">Last Backup: Today at 04:00 AM (Size: 42.8 MB)</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => setShowRestoreModal(true)}>
                      <CloudUpload className="mr-1 size-3.5" /> Restore
                    </Button>
                    <Button size="sm" className="rounded-xl text-xs shadow-glow" onClick={() => toast.success("Instant system backup created successfully.")}>
                      <CloudDownload className="mr-1 size-3.5" /> Create Backup Now
                    </Button>
                  </div>
                </div>
              </div>
            </SectionCard>
          )}

          {/* CATEGORY 10: AUDIT LOGS */}
          {activeCategory === "audit" && (
            <SectionCard title="System Activity Audit Log" description="Recent administrative actions and configuration changes">
              <div className="overflow-x-auto rounded-2xl border border-border bg-card text-xs">
                <Table>
                  <TableHeader className="bg-secondary/40">
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead>Admin User</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {AUDIT_LOGS_MOCK.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-bold text-foreground">{log.action}</TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell className="font-mono text-[11px]">{log.ip}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell className="text-muted-foreground">{log.details}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </SectionCard>
          )}
        </div>
      </div>

      {/* RESTORE BACKUP MODAL */}
      <Dialog open={showRestoreModal} onOpenChange={setShowRestoreModal}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Restore System Backup</DialogTitle>
            <DialogDescription>Select a backup ZIP/JSON file to restore system state.</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2 text-xs">
            <div className="rounded-2xl border border-dashed border-border p-6 text-center space-y-2">
              <CloudUpload className="size-8 mx-auto text-primary" />
              <p className="font-semibold text-foreground">Drag & drop backup file here</p>
              <p className="text-[11px] text-muted-foreground">Supported formats: .zip, .json</p>
              <Button size="sm" variant="outline" className="rounded-xl text-xs bg-card" onClick={() => toast.info("File picker opened.")}>
                Browse Files
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRestoreModal(false)} className="rounded-xl text-xs">
              Cancel
            </Button>
            <Button className="rounded-xl text-xs shadow-glow" onClick={() => { toast.success("Backup restored successfully."); setShowRestoreModal(false); }}>
              Confirm Restore
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
