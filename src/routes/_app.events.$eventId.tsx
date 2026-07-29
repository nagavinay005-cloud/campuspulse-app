import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  AlertCircle,
  Archive,
  Award,
  Bookmark,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  QrCode,
  Share2,
  ShieldCheck,
  FileEdit,
  Ticket,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader, SectionCard, EmptyState } from "@/components/app/layout-bits";
import { Countdown, StatusBadge } from "@/components/app/primitives";
import { LifecycleFlow } from "@/components/app/lifecycle-flow";
import { getEvent, resolveStatus } from "@/data/mock";
import { apiEventToCampusEvent } from "@/hooks/useLiveEvents";
import { registrationService } from "@/services/registrationService";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { firestoreEventToCampusEvent } from "@/types/firestoreEvent";

export const Route = createFileRoute("/_app/events/$eventId")({
  head: () => ({
    meta: [
      { title: "Event details — CampusPulse" },
      { name: "description", content: "Full event brief, schedule, speakers, seats and registration status." },
      { property: "og:title", content: "Event details — CampusPulse" },
      { property: "og:description", content: "Full event brief, schedule, speakers and registration." },
    ],
  }),
  component: EventDetail,
});

function EventDetail() {
  const { eventId } = Route.useParams();
  const { userProfile } = useAuth();
  const [event, setEvent] = useState<CampusEvent | null>(() => getEvent(eventId) || null);
  const [loading, setLoading] = useState(!event);
  const [saved, setSaved] = useState(false);
  const [isReg, setIsReg] = useState<boolean | null>(null);

  // Dynamic API Fetching
  useEffect(() => {
    const isMock = eventId.startsWith("evt-");
    if (!isMock) {
      setLoading(true);
      const tryFirestoreThenMySql = async () => {
        try {
          const docRef = doc(db, "events", eventId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setEvent(firestoreEventToCampusEvent(docSnap.id, docSnap.data() as any));
            setLoading(false);
            return;
          }
        } catch (err) {
          console.warn("Firestore fetch error in event details:", err);
        }

        try {
          const { API_BASE_URL } = await import("@/services/apiClient");
          const token = localStorage.getItem("campuspulse_jwt_token");
          const headers: Record<string, string> = {};
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
          const res = await fetch(`${API_BASE_URL}/events/${eventId}`, { headers });
          const data = await res.json();
          if (data.success && data.data) {
            setEvent(apiEventToCampusEvent(data.data));
          }
        } catch (err) {
          console.warn("Failed to fetch live event detail", err);
        } finally {
          setLoading(false);
        }
      };
      tryFirestoreThenMySql();
    } else {
      setEvent(getEvent(eventId) || null);
      setLoading(false);
    }
  }, [eventId]);

  // Sync registration status when event or userProfile loads
  useEffect(() => {
    if (!event) return;

    const checkReg = async () => {
      const studentId = userProfile?.uid || "std-001";
      const isMockUser = studentId.startsWith("std-");
      const isMockEvent = event.id.startsWith("evt-");

      if (!isMockUser && !isMockEvent) {
        try {
          const { API_BASE_URL } = await import("@/services/apiClient");
          const token = localStorage.getItem("campuspulse_jwt_token");
          const headers: Record<string, string> = {};
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
          const res = await fetch(`${API_BASE_URL}/students/me/registrations`, { headers });
          const data = await res.json();
          if (res.ok && data.success && data.data) {
            const numericEventId = event.dbId || parseInt(event.id, 10);
            const found = data.data.find(
              (r: any) => Number(r.event_id) === numericEventId && r.status !== "Cancelled"
            );
            if (found) {
              setIsReg(true);
              return;
            }
          }
        } catch (err) {
          console.warn("Failed to check registration status from database:", err);
        }
      }

      const registered = registrationService.isRegistered(event.id, studentId);
      setIsReg(!!registered);
    };

    checkReg();
  }, [event, userProfile]);

  const [regDialogOpen, setRegDialogOpen] = useState(false);
  const [regName, setRegName] = useState("");
  const [regRoll, setRegRoll] = useState("");
  const [regDept, setRegDept] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("register") === "true") {
        setRegDialogOpen(true);
      }
    }
  }, []);

  // Sync defaults when userProfile loads
  useEffect(() => {
    if (userProfile) {
      setRegName(userProfile.name || "");
      setRegDept(userProfile.department || "Computer Science");
    }
  }, [userProfile]);

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-muted-foreground">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-8">
        <EmptyState 
          icon={AlertCircle} 
          title="Event Not Found" 
          description="The requested event does not exist or has been deleted." 
          action={
            <Link to="/events">
              <Button>Back to Events</Button>
            </Link>
          }
        />
      </div>
    );
  }

  const status = resolveStatus(event);
  const archived = status === "Archived";
  const full = event.registered >= event.seats;

  return (
    <div>
      <PageHeader
        title={event.title}
        subtitle={`${event.club} · ${event.department}`}
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Event Feed", to: "/events" },
          { label: event.category },
        ]}
        actions={
          <>
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => { setSaved(!saved); toast.success(saved ? "Removed from saved" : "Saved to your list"); }}>
              <Bookmark className={saved ? "mr-2 size-4 fill-primary text-primary" : "mr-2 size-4"} /> {saved ? "Saved" : "Save"}
            </Button>
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => toast.success("Event link copied")}>
              <Share2 className="mr-2 size-4" /> Share
            </Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <div className="card-surface overflow-hidden">
            <div className="relative">
              <img src={event.banner} alt={event.title} width={1280} height={720} className="aspect-[16/7] w-full object-cover" />
              <div className="absolute left-4 top-4 flex gap-2">
                <StatusBadge status={status} className="bg-card/95 backdrop-blur" />
                <Badge className="rounded-full bg-card/95 text-foreground backdrop-blur" variant="outline">{event.category}</Badge>
              </div>
            </div>
            <div className="p-6">
              {archived && (
                <div className="mb-5 flex items-start gap-3 rounded-2xl border border-border bg-secondary p-4">
                  <Archive className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-semibold">Automatically archived</p>
                    <p className="text-sm text-muted-foreground">
                      This event ended on {format(new Date(event.end), "dd MMM yyyy, h:mm a")}. Registrations are
                      permanently closed, but the attendance summary and certificates remain available below.
                    </p>
                  </div>
                </div>
              )}
              <Tabs defaultValue="about">
                <TabsList className="rounded-xl">
                  <TabsTrigger value="about" className="rounded-lg">About</TabsTrigger>
                  <TabsTrigger value="schedule" className="rounded-lg">Schedule</TabsTrigger>
                  <TabsTrigger value="speakers" className="rounded-lg">Speakers</TabsTrigger>
                  <TabsTrigger value="lifecycle" className="rounded-lg">Lifecycle</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="pt-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {event.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">#{t}</Badge>
                    ))}
                  </div>
                  <Separator className="my-6" />
                  <dl className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: CalendarDays, label: "Date", value: format(new Date(event.start), "EEEE, dd MMM yyyy") },
                      { icon: Clock, label: "Time", value: `${format(new Date(event.start), "h:mm a")} – ${format(new Date(event.end), "h:mm a")}` },
                      { icon: MapPin, label: "Venue", value: event.venue },
                      { icon: Building2, label: "Department", value: event.department },
                      { icon: IndianRupee, label: "Fee", value: event.fee === 0 ? "Free entry" : `₹${event.fee}` },
                      { icon: Award, label: "Certificate", value: event.certificate ? "Provided on completion" : "Not provided" },
                    ].map((r) => (
                      <div key={r.label} className="flex items-start gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-muted-foreground">
                          <r.icon className="size-4" />
                        </span>
                        <div className="min-w-0">
                          <dt className="text-xs text-muted-foreground">{r.label}</dt>
                          <dd className="text-sm font-medium">{r.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </TabsContent>
                <TabsContent value="schedule" className="space-y-4 pt-5">
                  {[
                    { t: format(new Date(event.start), "h:mm a"), title: "Check-in & QR scan", d: "Entry passes verified at the venue gate" },
                    { t: format(new Date(+new Date(event.start) + 3600000), "h:mm a"), title: "Opening keynote", d: "Welcome address by the department head" },
                    { t: format(new Date(+new Date(event.start) + 7200000), "h:mm a"), title: "Main programme", d: "Core sessions, rounds and mentoring" },
                    { t: format(new Date(event.end), "h:mm a"), title: "Valedictory & certificates", d: "Winners announced, certificates released" },
                  ].map((s) => (
                    <div key={s.title} className="flex gap-4 rounded-2xl border border-border p-4">
                      <span className="w-20 shrink-0 text-sm font-semibold text-primary">{s.t}</span>
                      <div>
                        <p className="text-sm font-medium">{s.title}</p>
                        <p className="text-xs text-muted-foreground">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="speakers" className="pt-5">
                  {event.speakers.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No speakers listed for this event.</p>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {event.speakers.map((s) => (
                        <div key={s.name} className="flex items-center gap-3 rounded-2xl border border-border p-4">
                          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
                            {s.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{s.name}</p>
                            <p className="truncate text-xs text-muted-foreground">{s.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="lifecycle" className="pt-5">
                  <LifecycleFlow current={status} />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {archived && (
            <SectionCard title="Attendance summary" description="Frozen at the moment the event ended">
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  { l: "Registered", v: event.registered },
                  { l: "Attended", v: event.attended ?? 0 },
                  { l: "Attendance rate", v: `${Math.round(((event.attended ?? 0) / event.registered) * 100)}%` },
                  { l: "Feedback score", v: event.rating ?? "—" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border p-4">
                    <p className="text-xs text-muted-foreground">{s.l}</p>
                    <p className="mt-1 text-2xl font-semibold">{s.v}</p>
                  </div>
                ))}
              </div>
              {event.certificate && (
                <Button className="mt-5 rounded-xl" onClick={() => toast.success("Certificate downloaded")}>
                  <Award className="mr-2 size-4" /> Download certificate
                </Button>
              )}
            </SectionCard>
          )}
        </div>

        <aside className="space-y-6">
          <div className="card-surface sticky top-24 p-6">
            {!archived ? (
              <>
                <p className="text-sm text-muted-foreground">Event starts in</p>
                <div className="mt-3"><Countdown to={event.start} /></div>
                <Separator className="my-5" />
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground"><Users className="size-4" /> Seats</span>
                  <span className="font-medium">{event.registered}/{event.seats}</span>
                </div>
                <Progress value={(event.registered / event.seats) * 100} className="mt-2 h-1.5" />
                <p className="mt-2 text-xs text-muted-foreground">{Math.max(0, event.seats - event.registered)} seats remaining</p>

                {userProfile?.role === "Organizer" || userProfile?.role === "Admin" ? (
                  <div className="mt-5 space-y-2.5 rounded-2xl border border-primary/30 bg-primary-soft/30 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                      <ShieldCheck className="size-4" /> Organizer Controls
                    </div>
                    <p className="text-xs text-muted-foreground">You are managing this event as an Organizer/Admin.</p>
                    <Link to="/organizer/events" className="block">
                      <Button className="w-full rounded-xl text-xs">
                        <FileEdit className="mr-2 size-4" /> Manage & Edit Events
                      </Button>
                    </Link>
                    <Link to="/organizer/attendance" className="block">
                      <Button variant="outline" className="w-full rounded-xl text-xs bg-card">
                        <QrCode className="mr-2 size-4" /> Scan QR Attendance
                      </Button>
                    </Link>
                    <Link to="/organizer/registrations" className="block">
                      <Button variant="outline" className="w-full rounded-xl text-xs bg-card">
                        <Users className="mr-2 size-4" /> View Registered Roster ({event.registered})
                      </Button>
                    </Link>
                  </div>
                ) : isReg ? (
                  <div className="mt-5 space-y-2">
                    <div className="rounded-2xl border border-success/30 bg-success-soft/40 p-4 text-center">
                      <CheckCircle2 className="mx-auto size-6 text-success mb-1" />
                      <p className="text-sm font-bold text-foreground">You are Registered!</p>
                      <p className="text-xs text-muted-foreground">Pass Code: REG-{event.id.toUpperCase()}-2026</p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full rounded-xl shadow-glow text-xs">
                          <QrCode className="mr-2 size-4" /> View Entry QR Pass
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-3xl sm:max-w-md text-center p-6">
                        <DialogHeader>
                          <DialogTitle className="text-center text-lg font-bold">Campus Entry Pass</DialogTitle>
                          <DialogDescription className="text-center text-xs">{event.title}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-3">
                          <div className="mx-auto grid size-48 place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-4 shadow-md">
                            <QrCode className="size-36 text-primary" />
                          </div>
                          <div className="space-y-1 text-xs">
                            <p className="font-bold text-sm text-foreground">{userProfile?.name || "Aarav Sharma"}</p>
                            <p className="text-muted-foreground font-mono">Roll: CS2026-042 · Dept: {event.department}</p>
                            <p className="text-muted-foreground font-mono">Venue: {event.venue}</p>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button className="w-full rounded-xl text-xs" onClick={() => toast.success("QR Pass PDF downloaded to device.")}>
                            Download Pass PDF
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      className="w-full rounded-xl text-xs text-danger border-danger/30 hover:bg-danger/10 bg-card"
                      onClick={async () => {
                        await registrationService.cancelRegistration(event.id, userProfile?.uid || "std-001");
                        setIsReg(null);
                      }}
                    >
                      Cancel Registration
                    </Button>
                  </div>
                ) : (
                  <Dialog open={regDialogOpen} onOpenChange={setRegDialogOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="mt-5 w-full rounded-xl" variant={full ? "secondary" : "default"}>
                        <Ticket className="mr-2 size-4" /> {full ? "Join waitlist" : "Register now"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-3xl sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{full ? "Join the waitlist" : "Confirm registration"}</DialogTitle>
                        <DialogDescription>{event.title}</DialogDescription>
                      </DialogHeader>
                      <form
                        className="space-y-4"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          if (!regName.trim() || !regRoll.trim()) {
                            toast.error("Please fill in your name and roll number.");
                            return;
                          }
                          const res = await registrationService.registerForEvent({
                            eventId: event.id,
                            studentId: userProfile?.uid || "std-001",
                            studentName: regName.trim(),
                            studentEmail: userProfile?.email || "aarav.s@campus.edu",
                            department: regDept.trim() || "Computer Science",
                            rollNumber: regRoll.trim(),
                          });
                          if (res.success && res.registration) {
                            setIsReg(res.registration);
                            setRegDialogOpen(false);
                            toast.success(`Registration successful for ${event.title}!`);
                          }
                        }}
                      >
                        <div className="space-y-2">
                          <Label htmlFor="reg-name">Full name</Label>
                          <Input
                            id="reg-name"
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            placeholder="e.g. Aarav Sharma"
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reg-roll">Roll number / Student ID</Label>
                          <Input
                            id="reg-roll"
                            value={regRoll}
                            onChange={(e) => setRegRoll(e.target.value)}
                            placeholder="e.g. CS2026-042"
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reg-dept">Department</Label>
                          <Input
                            id="reg-dept"
                            value={regDept}
                            onChange={(e) => setRegDept(e.target.value)}
                            placeholder="e.g. Computer Science"
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <DialogFooter className="pt-2">
                          <Button type="submit" className="w-full rounded-xl shadow-glow">
                            <CheckCircle2 className="mr-2 size-4" /> {full ? "Join waitlist" : "Confirm registration"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}

                <Button variant="outline" className="mt-2 w-full rounded-xl bg-card" onClick={() => toast.success("Added to your calendar")}>
                  <CalendarDays className="mr-2 size-4" /> Add to calendar
                </Button>
              </>
            ) : (
              <div className="rounded-2xl bg-secondary p-4 text-center">
                <Archive className="mx-auto size-5 text-muted-foreground" />
                <p className="mt-2 text-sm font-semibold">Registrations closed</p>
                <p className="mt-1 text-xs text-muted-foreground">This event was auto-archived after its end time.</p>
              </div>
            )}

            <Separator className="my-5" />
            <p className="text-sm font-semibold">Organizer</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
                {event.organizerAvatar}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{event.organizer}</p>
                <p className="truncate text-xs text-muted-foreground">{event.club}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <p className="flex items-center gap-2"><Mail className="size-3.5" /> {event.contact.email}</p>
              <p className="flex items-center gap-2"><Phone className="size-3.5" /> {event.contact.phone}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
