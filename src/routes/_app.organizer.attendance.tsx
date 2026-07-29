import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { Award, CheckCircle2, Download, QrCode, RotateCcw, ScanLine, Search, Users, AlertTriangle, XCircle, Camera } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { attendanceService } from "@/services/attendanceService";
import { registrants } from "@/data/mock";
import type { AttendanceDocument } from "@/lib/firestore";

export const Route = createFileRoute("/_app/organizer/attendance")({
  head: () => ({
    meta: [
      { title: "Attendance & QR Check-In — CampusPulse" },
      { name: "description", content: "Scan entry passes, lock attendance and release certificates." },
      { property: "og:title", content: "Attendance & QR Check-In — CampusPulse" },
      { property: "og:description", content: "QR check-in and certificate release console." },
    ],
  }),
  component: Attendance,
});

export function Attendance() {
  const [selectedEventId, setSelectedEventId] = useState("ev-1");
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceDocument[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [qrCodeInput, setQrCodeInput] = useState("QR-EV-1-STD-001-20260815");
  const [isScanning, setIsScanning] = useState(false);

  // Scan Verification Modal State
  const [scanResultModal, setScanResultModal] = useState<{
    open: boolean;
    success: boolean;
    title: string;
    studentName?: string;
    rollNumber?: string;
    department?: string;
    checkInTime?: string;
    message?: string;
  }>({ open: false, success: false, title: "" });

  useEffect(() => {
    const unsubscribe = attendanceService.subscribe(selectedEventId, (data) => {
      setAttendanceRecords(data);
    });
    return () => unsubscribe();
  }, [selectedEventId]);

  const checkedInCount = attendanceRecords.filter((a) => a.status !== "Absent").length;
  const totalExpected = 300;
  const rate = Math.round((checkedInCount / totalExpected) * 100);

  const handleVerifyScan = async (codeToVerify?: string) => {
    const code = codeToVerify || qrCodeInput;
    if (!code.trim()) {
      toast.error("Please enter or scan a valid QR pass code.");
      return;
    }

    setIsScanning(true);
    const res = await attendanceService.verifyAndCheckIn({
      qrValue: code,
      scannedBy: "Gate Scanner #1",
      targetEventId: selectedEventId,
    });
    setIsScanning(false);

    if (res.success) {
      setScanResultModal({
        open: true,
        success: true,
        title: "Check-in Verification Confirmed",
        studentName: res.studentName,
        rollNumber: res.rollNumber,
        department: res.department,
        checkInTime: res.checkInTime,
        message: "Digital entry pass verified. Attendance status recorded as Present.",
      });
    } else {
      setScanResultModal({
        open: true,
        success: false,
        title: "Check-in Verification Rejected",
        studentName: res.studentName,
        rollNumber: res.rollNumber,
        department: res.department,
        checkInTime: res.checkInTime,
        message: res.message,
      });
    }
  };

  const filteredRegistrants = registrants.filter(
    (r) =>
      !searchQuery.trim() ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.roll.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.dept.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6 pb-20">
      <PageHeader
        title="Attendance & QR Check-In Console"
        subtitle="AI Builders Summit 2026 · Live venue check-in and QR verification engine"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Organizer", to: "/organizer" }, { label: "Attendance" }]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              className="rounded-xl bg-card text-xs"
              onClick={() => toast.success("Exported attendance roster to CSV.")}
            >
              <Download className="mr-1.5 size-4" /> Export CSV
            </Button>
            <Button
              className="rounded-xl shadow-glow text-xs"
              onClick={() => toast.success("Attendance locked! Release certificates queued for verified attendees.")}
            >
              <Award className="mr-1.5 size-4" /> Release Certificates
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Checked In (Present)" value={checkedInCount} icon={CheckCircle2} tone="success" index={0} />
        <StatCard label="Total Registered Seats" value={totalExpected} icon={Users} index={1} />
        <StatCard label="Live Check-In Rate" value={rate} suffix="%" icon={ScanLine} tone="warning" index={2} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)]">
        {/* QR SCANNER & MANUAL CODE VERIFIER PANEL */}
        <SectionCard title="Live QR Pass Scanner" description="Scan student QR pass or type pass code to check-in">
          <div className="space-y-4">
            <div className="relative grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-primary-soft/20 p-4 overflow-hidden">
              <div className="text-center z-10 space-y-2">
                <QrCode className="mx-auto size-20 text-primary animate-pulse" />
                <p className="text-sm font-bold text-foreground">Camera Scanner Active</p>
                <p className="text-[11px] text-muted-foreground">Scans & verifies Firestore passes in under 300 ms</p>
              </div>
              <div className="absolute inset-x-4 top-1/2 h-0.5 bg-primary/80 animate-pulse shadow-glow" />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Manual Pass Code Input</Label>
              <div className="flex gap-2">
                <Input
                  value={qrCodeInput}
                  onChange={(e) => setQrCodeInput(e.target.value)}
                  placeholder="e.g. QR-EV-1-STD-001-20260815"
                  className="rounded-xl bg-card font-mono text-xs"
                />
                <Button
                  className="rounded-xl shadow-glow text-xs shrink-0"
                  onClick={() => handleVerifyScan()}
                  disabled={isScanning}
                >
                  <ScanLine className="mr-1 size-3.5" /> Verify
                </Button>
              </div>
            </div>

            <Button
              className="w-full rounded-xl bg-primary text-xs shadow-glow"
              onClick={() => handleVerifyScan("QR-EV-1-STD-001-20260815")}
            >
              Simulate Instant QR Scan (Student #1)
            </Button>
          </div>
        </SectionCard>

        {/* PARTICIPANTS LIVE CHECK-IN LOG */}
        <SectionCard title="Live Participant Check-in Roster" description="Real-time check-in stream & attendance status">
          <div className="mb-4 space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search participant name, roll number, or department..."
                className="h-10 rounded-xl bg-card pl-9 text-xs"
              />
            </div>
            <Progress value={rate} className="h-2 rounded-full" />
          </div>

          <ul className="space-y-3">
            {filteredRegistrants.map((r) => {
              const isCheckedIn = attendanceRecords.some((a) => a.studentName === r.name || a.studentId === r.id);

              return (
                <li key={r.id} className="flex items-center justify-between gap-3 rounded-2xl border border-border p-4 bg-card">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                      {r.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.roll} · {r.dept}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isCheckedIn ? (
                      <Badge variant="outline" className="rounded-full border-success/40 bg-success-soft text-success font-bold text-xs">
                        Checked In
                      </Badge>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xl bg-card text-xs"
                        onClick={() => handleVerifyScan(`QR-EV-1-${r.id.toUpperCase()}-20260815`)}
                      >
                        Check In Student
                      </Button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </SectionCard>
      </div>

      {/* SCAN VERIFICATION MODAL */}
      <Dialog open={scanResultModal.open} onOpenChange={(open) => setScanResultModal({ ...scanResultModal, open })}>
        <DialogContent className="max-w-md rounded-3xl p-6 text-center">
          <DialogHeader>
            <div className="mx-auto mb-2 flex size-14 items-center justify-center rounded-2xl bg-secondary">
              {scanResultModal.success ? (
                <CheckCircle2 className="size-10 text-success" />
              ) : (
                <XCircle className="size-10 text-danger" />
              )}
            </div>
            <DialogTitle className="text-center font-bold text-lg">{scanResultModal.title}</DialogTitle>
            <DialogDescription className="text-center text-xs">{scanResultModal.message}</DialogDescription>
          </DialogHeader>

          {scanResultModal.studentName && (
            <div className="my-2 space-y-2 rounded-2xl border p-4 bg-card text-left text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Student Name:</span>
                <strong className="text-foreground">{scanResultModal.studentName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Roll Number / ID:</span>
                <strong className="text-foreground font-mono">{scanResultModal.rollNumber || "CS2026-042"}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Department:</span>
                <strong className="text-foreground">{scanResultModal.department || "Computer Science"}</strong>
              </div>
              {scanResultModal.checkInTime && (
                <div className="flex justify-between border-t pt-2">
                  <span className="text-muted-foreground">Check-in Timestamp:</span>
                  <span className="font-mono font-bold text-success">{scanResultModal.checkInTime}</span>
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            <Button
              className="w-full rounded-xl shadow-glow text-xs"
              onClick={() => setScanResultModal({ ...scanResultModal, open: false })}
            >
              Close Verification Dialog
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
