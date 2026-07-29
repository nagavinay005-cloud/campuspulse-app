import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Award,
  CalendarDays,
  CloudSun,
  Compass,
  Flame,
  QrCode,
  Ticket,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { Countdown, StatusBadge } from "@/components/app/primitives";
import { EventCard } from "@/components/app/event-card";
import { useEffect, useState, useMemo } from "react";
import { activeEvents, activity, currentUser, monthlyStats, notifications, resolveStatus } from "@/data/mock";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — CampusPulse" },
      { name: "description", content: "Your campus events, registrations, deadlines and certificates at a glance." },
      { property: "og:title", content: "Student Dashboard — CampusPulse" },
      { property: "og:description", content: "Track registrations, deadlines and upcoming campus events." },
    ],
  }),
  component: Dashboard,
});

export function Dashboard() {
  const { userProfile } = useAuth();
  const studentId = userProfile?.uid || "std-001";
  const { events: liveEvents } = useLiveEvents({ status: "Published" });
  
  const [regs, setRegs] = useState<any[]>([]);
  const [certsCount, setCertsCount] = useState(0);
  const [notifs, setNotifs] = useState<any[]>([]);

  useEffect(() => {
    if (studentId && !studentId.startsWith("std-")) {
      const token = localStorage.getItem("campuspulse_jwt_token");
      const headers = { "Authorization": `Bearer ${token}` };

      // 1. Registrations
      import("@/services/apiClient").then(({ API_BASE_URL }) => {
        fetch(`${API_BASE_URL}/students/me/registrations`, { headers })
          .then((res) => res.json())
          .then((data) => {
            if (data.success && Array.isArray(data.data)) {
              setRegs(data.data.filter((r: any) => r.status !== "Cancelled"));
            }
          })
          .catch((e) => console.warn(e));

        // 2. Certificates
        fetch(`${API_BASE_URL}/students/me/certificates`, { headers })
          .then((res) => res.json())
          .then((data) => {
            if (data.success && Array.isArray(data.data)) {
              setCertsCount(data.data.length);
            }
          })
          .catch((e) => console.warn(e));

        // 3. Notifications
        fetch(`${API_BASE_URL}/notifications`, { headers })
          .then((res) => res.json())
          .then((data) => {
            if (data.success && Array.isArray(data.data)) {
              setNotifs(data.data.slice(0, 3));
            }
          })
          .catch((e) => console.warn(e));
      });
    }
  }, [studentId]);

  const registeredEventIds = useMemo(() => new Set(regs.map((r) => String(r.event_id))), [regs]);

  const upcomingRegistered = useMemo(() => {
    return liveEvents.filter((e) => registeredEventIds.has(String(e.dbId || e.id)));
  }, [liveEvents, registeredEventIds]);

  const next = upcomingRegistered[0] || liveEvents[0];
  const displayName = userProfile?.name || "Student";
  const displayFirstName = displayName.split(" ")[0];

  return (
    <div>
      <PageHeader
        title={`Good morning, ${displayFirstName}`}
        subtitle="Here's what's happening across campus today."
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student" }, { label: "Dashboard" }]}
        actions={
          <>
            <Link to="/calendar">
              <Button variant="outline" className="rounded-xl bg-card">
                <CalendarDays className="mr-2 size-4" /> Calendar
              </Button>
            </Link>
            <Link to="/events">
              <Button className="rounded-xl">
                <Compass className="mr-2 size-4" /> Browse events
              </Button>
            </Link>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Registered events" value={regs.length} delta="Active registrations" icon={Ticket} index={0} />
        <StatCard label="Attended" value={regs.filter(r => r.checked_in || r.status === "Checked In").length} delta="Checked in events" icon={Users} tone="success" index={1} />
        <StatCard label="Certificates" value={certsCount} delta="Earned credentials" icon={Award} tone="warning" index={2} />
        <StatCard label="Pulse points" value={regs.length * 15 + certsCount * 50} delta="Earned points" icon={Flame} tone="danger" index={3} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          {next && (
            <SectionCard title="Next up" description="Your closest confirmed registration">
              <div className="grid gap-5 sm:grid-cols-[200px_minmax(0,1fr)]">
                <img
                  src={next.banner}
                  alt={next.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-32 w-full rounded-2xl object-cover sm:h-full"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge status={resolveStatus(next)} />
                    <Badge variant="secondary" className="rounded-full">{next.category}</Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{next.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {next.venue} · {format(new Date(next.start), "EEE, dd MMM · h:mm a")}
                  </p>
                  <div className="mt-4">
                    <Countdown to={next.start} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link to="/events/$eventId" params={{ eventId: next.id }}>
                      <Button size="sm" className="rounded-xl">View details</Button>
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="rounded-xl bg-card">
                          <QrCode className="mr-2 size-4 text-primary" /> Show entry pass
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-3xl sm:max-w-md text-center p-6">
                        <DialogHeader>
                          <DialogTitle className="text-center font-bold text-lg">Digital Campus Entry Pass</DialogTitle>
                          <DialogDescription className="text-center text-xs">{next.title}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="mx-auto grid size-48 place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-4 shadow-md">
                            <QrCode className="size-36 text-primary" />
                          </div>
                          <div className="space-y-1 text-xs">
                            <p className="font-bold text-sm text-foreground">{displayName}</p>
                            <p className="text-muted-foreground font-mono">Dept: {userProfile?.department || "Computer Science"} · {userProfile?.year || "3rd Year"}</p>
                            <p className="text-primary font-mono font-semibold">Pass ID: QR-EV-1-{userProfile?.uid?.slice(-6) || "STD"}-2026</p>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button className="w-full rounded-xl text-xs" onClick={() => toast.success(`Downloaded Entry Pass PDF for ${next.title}`)}>
                            Download Pass PDF
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </SectionCard>
          )}

          <SectionCard
            title="Registrations & attendance"
            description="Last 6 months across all campus events"
          >
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyStats} margin={{ left: -20, right: 8, top: 8 }}>
                  <defs>
                    <linearGradient id="regGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="attGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-success)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="var(--color-success)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-card)",
                      fontSize: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="registrations" stroke="var(--color-primary)" strokeWidth={2} fill="url(#regGrad)" />
                  <Area type="monotone" dataKey="attendance" stroke="var(--color-success)" strokeWidth={2} fill="url(#attGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SectionCard>

          <SectionCard
            title="Recommended for you"
            description="Matched to Computer Science, 3rd year"
            action={
              <Link to="/events">
                <Button variant="ghost" size="sm" className="rounded-xl">View all</Button>
              </Link>
            }
          >
            <div className="grid gap-6 md:grid-cols-2">
              {liveEvents.slice(0, 2).map((e, i) => (
                <EventCard key={e.id} event={e} index={i} isRegistered={registeredEventIds.has(String(e.dbId || e.id))} />
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard className="bg-gradient-to-br from-primary to-[oklch(0.5_0.2_282)] text-primary-foreground">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm/relaxed opacity-90">Campus weather</p>
                <p className="mt-2 text-4xl font-semibold">27°</p>
                <p className="mt-1 text-sm opacity-90">Partly cloudy · Outdoor events on schedule</p>
              </div>
              <CloudSun className="size-10 opacity-90" />
            </div>
            <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs opacity-90">
              {["Tue 28°", "Wed 26°", "Thu 29°", "Fri 25°"].map((d) => (
                <div key={d} className="rounded-xl bg-white/15 py-2">{d}</div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Upcoming deadlines">
            <ul className="space-y-4">
              {(liveEvents.length > 0 ? liveEvents : activeEvents()).slice(0, 4).map((e) => (
                <li key={e.id} className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-warning-soft text-xs font-semibold text-warning">
                    {format(new Date(e.start), "dd")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{e.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Closes {format(new Date(e.start), "dd MMM, h:mm a")}
                    </p>
                    <Progress value={(e.registered / e.seats) * 100} className="mt-2 h-1" />
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Activity timeline">
            <ol className="relative space-y-5 pl-5">
              <span className="absolute left-[5px] top-1 h-[calc(100%-0.5rem)] w-px bg-border" />
              {activity.map((a) => (
                <li key={a.id} className="relative">
                  <span className="absolute -left-5 top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-primary/10" />
                  <p className="text-sm">
                    <span className="font-medium">{a.who}</span>{" "}
                    <span className="text-muted-foreground">{a.what}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{a.when}</p>
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="Notifications" action={<Link to="/notifications"><Button variant="ghost" size="sm" className="rounded-xl">All</Button></Link>}>
            <ul className="space-y-3">
              {(notifs.length > 0 ? notifs : notifications.slice(0, 3)).map((n) => (
                <li key={n.id || n.notificationId} className="rounded-2xl border border-border p-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-3.5 text-primary" />
                    <p className="truncate text-sm font-medium">{n.title}</p>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{n.message || n.body}</p>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
