import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { CheckCircle2, Download, QrCode, Ticket, XCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PageHeader, SectionCard, StatCard, EmptyState } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import { events, getEvent, type CampusEvent } from "@/data/mock";
import { registrationService } from "@/services/registrationService";
import { useAuth } from "@/context/AuthContext";
import type { RegistrationDocument } from "@/lib/firestore";

function apiRegistrationToRegistrationDocument(r: any): RegistrationDocument & { event?: CampusEvent } {
  const startISO = r.event_date && r.start_time ? `${r.event_date}T${r.start_time}` : new Date().toISOString();
  const endISO = r.event_date && r.end_time ? `${r.event_date}T${r.end_time}` : new Date().toISOString();
  const ev: CampusEvent = {
    id: String(r.event_id),
    title: r.event_title || "Untitled Event",
    summary: "",
    description: "",
    banner: r.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    category: "Technical",
    department: r.department_name || "Computer Science",
    club: "Campus Club",
    organizer: "Event Organizer",
    organizerAvatar: "E",
    venue: r.venue || "Campus Main Hall",
    start: startISO,
    end: endISO,
    seats: 100,
    registered: 1,
    status: r.event_status || "Published",
    certificate: true,
    fee: 0,
    tags: ["Campus"],
    speakers: [],
    contact: { email: "events@campus.edu", phone: "" },
  };

  return {
    registrationId: String(r.id),
    eventId: String(r.event_id),
    studentId: String(r.student_id),
    studentName: r.student_name || "Campus Student",
    studentEmail: r.student_email || r.email || "student@campus.edu",
    email: r.student_email || r.email || "student@campus.edu",
    rollNumber: r.roll_number || "CS-REG-2026",
    department: r.department_name || "Computer Science",
    year: r.student_year || r.year || "3rd Year",
    registrationDate: r.registration_date ? new Date(r.registration_date).toISOString() : new Date().toISOString(),
    registeredAt: r.registration_date ? new Date(r.registration_date).toISOString() : new Date().toISOString(),
    status: r.status || "Confirmed",
    registrationStatus: r.status || "Confirmed",
    attendanceStatus: r.checked_in ? "Present" : "Pending",
    certificateStatus: "NotIssued",
    qrCode: r.qr_code || "",
    checkedInAt: r.checked_in_at ? new Date(r.checked_in_at).toISOString() : undefined,
    createdAt: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
    event: ev,
  };
}

export const Route = createFileRoute("/_app/registrations")({
  head: () => ({
    meta: [
      { title: "My Registrations — CampusPulse" },
      { name: "description", content: "Every event you registered for, with entry passes, QR codes, and attendance status." },
      { property: "og:title", content: "My Registrations — CampusPulse" },
      { property: "og:description", content: "Entry passes, QR codes, and history for your registrations." },
    ],
  }),
  component: Registrations,
});

export function Registrations() {
  const { userProfile } = useAuth();
  const studentId = userProfile?.uid || "std-001";
  const [registrations, setRegistrations] = useState<RegistrationDocument[]>([]);
  const [loadingRegistrations, setLoadingRegistrations] = useState(true);

  useEffect(() => {
    let isSubscribed = true;
    let mockUnsubscribe: (() => void) | null = null;

    const fetchRegistrations = async () => {
      setLoadingRegistrations(true);
      const isMock = studentId.startsWith("std-");
      let list: RegistrationDocument[] = [];

      if (!isMock) {
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
            list = data.data.map(apiRegistrationToRegistrationDocument);
          }
        } catch (err) {
          console.warn("Failed to fetch live student registrations:", err);
        }
      }

      if (!isSubscribed) return;

      mockUnsubscribe = registrationService.subscribe({ studentId }, (mockData) => {
        if (!isSubscribed) return;
        const merged = [...list];
        mockData.forEach((mr) => {
          if (!merged.some((r) => r.registrationId === mr.registrationId)) {
            merged.push(mr);
          }
        });
        setRegistrations(merged);
        setLoadingRegistrations(false);
      });
    };

    fetchRegistrations();

    return () => {
      isSubscribed = false;
      if (mockUnsubscribe) {
        mockUnsubscribe();
      }
    };
  }, [studentId]);

  const activeRegs = registrations.filter((r) => r.status?.toLowerCase() === "confirmed" || r.status?.toLowerCase() === "approved");
  const waitlistedRegs = registrations.filter((r) => r.status?.toLowerCase() === "waitlisted");
  const cancelledRegs = registrations.filter((r) => r.status?.toLowerCase() === "cancelled");

  const handleCancelRegistration = async (eventId: string) => {
    await registrationService.cancelRegistration(eventId, studentId);
  };

  const renderTable = (list: RegistrationDocument[]) => {
    if (list.length === 0) {
      return (
        <EmptyState
          icon={Ticket}
          title="No registrations found"
          description="You have no event registrations in this category."
          action={
            <Link to="/events">
              <Button className="rounded-xl">Browse Campus Events</Button>
            </Link>
          }
        />
      );
    }

    return (
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <Table>
          <TableHeader className="bg-secondary/40">
            <TableRow>
              <TableHead>Event & Organizer</TableHead>
              <TableHead className="hidden md:table-cell">Registered Date</TableHead>
              <TableHead>Registration Status</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead className="text-right">Actions / Entry Pass</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((r) => {
              const ev = (r as any).event || getEvent(r.eventId) || events[0];
              const isCancelled = r.status === "Cancelled";

              return (
                <TableRow key={r.registrationId} className="hover:bg-secondary/40">
                  <TableCell className="max-w-[280px]">
                    <Link to="/events/$eventId" params={{ eventId: ev.id }} className="font-bold text-sm text-foreground hover:text-primary line-clamp-1">
                      {ev.title}
                    </Link>
                    <span className="text-xs text-muted-foreground">{ev.club} · {ev.department}</span>
                  </TableCell>

                  <TableCell className="hidden md:table-cell text-xs text-muted-foreground font-mono">
                    {r.registeredAt ? format(new Date(r.registeredAt), "dd MMM yyyy, h:mm a") : "Recently"}
                  </TableCell>

                  <TableCell>
                    {r.status === "Confirmed" && (
                      <Badge className="rounded-full bg-success text-success-foreground font-semibold text-[10px]">Confirmed</Badge>
                    )}
                    {r.status === "Waitlisted" && (
                      <Badge variant="outline" className="rounded-full border-warning text-warning bg-warning-soft text-[10px]">Waitlisted</Badge>
                    )}
                    {r.status === "Cancelled" && (
                      <Badge variant="destructive" className="rounded-full text-[10px]">Cancelled</Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    <Badge variant="outline" className="rounded-full text-[10px]">
                      {r.attendanceStatus}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    {!isCancelled ? (
                      <div className="flex items-center justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" className="rounded-xl bg-card text-xs">
                              <QrCode className="mr-1.5 size-3.5 text-primary" /> View QR Pass
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="rounded-3xl sm:max-w-md text-center p-6">
                            <DialogHeader>
                              <DialogTitle className="text-center font-bold text-lg">Digital Campus Entry Pass</DialogTitle>
                              <DialogDescription className="text-center text-xs">{ev.title}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="mx-auto grid size-48 place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-4 shadow-md">
                                <QrCode className="size-36 text-primary" />
                              </div>
                              <div className="space-y-1 text-xs">
                                <p className="font-bold text-sm text-foreground">{r.studentName}</p>
                                <p className="text-muted-foreground font-mono">Roll: {r.rollNumber} · {r.department}</p>
                                <p className="text-primary font-mono font-semibold">Pass ID: {r.qrCode}</p>
                              </div>
                            </div>
                            <DialogFooter className="flex-col gap-2 sm:flex-row">
                              <Button className="w-full rounded-xl text-xs" onClick={() => toast.success(`Downloaded QR Pass PDF for ${ev.title}`)}>
                                <Download className="mr-1.5 size-3.5" /> Download Pass PDF
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-xl text-xs text-danger hover:bg-danger/10"
                          onClick={() => handleCancelRegistration(r.eventId)}
                        >
                          <XCircle className="mr-1 size-3.5" /> Cancel
                        </Button>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Registration Void</span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <div className="space-y-6 pb-20">
      <PageHeader
        title="My Registrations & Entry Passes"
        subtitle="Manage your event passes, digital QR codes, and attendance history."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Student", to: "/dashboard" },
          { label: "Registrations" },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Active Passes" value={activeRegs.length} icon={Ticket} tone="primary" index={0} />
        <StatCard label="Waitlisted" value={waitlistedRegs.length} icon={AlertCircle} tone="warning" index={1} />
        <StatCard label="Cancelled / Expired" value={cancelledRegs.length} icon={XCircle} tone="danger" index={2} />
      </div>

      <SectionCard title="Event Passes Directory" description="Real-time status updates and entry ticket passes">
        <Tabs defaultValue="active" className="space-y-4">
          <TabsList className="rounded-xl bg-secondary p-1">
            <TabsTrigger value="active" className="rounded-lg text-xs">Active Passes ({activeRegs.length})</TabsTrigger>
            <TabsTrigger value="waitlisted" className="rounded-lg text-xs">Waitlisted ({waitlistedRegs.length})</TabsTrigger>
            <TabsTrigger value="all" className="rounded-lg text-xs">All History ({registrations.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active">{renderTable(activeRegs)}</TabsContent>
          <TabsContent value="waitlisted">{renderTable(waitlistedRegs)}</TabsContent>
          <TabsContent value="all">{renderTable(registrations)}</TabsContent>
        </Tabs>
      </SectionCard>
    </div>
  );
}
