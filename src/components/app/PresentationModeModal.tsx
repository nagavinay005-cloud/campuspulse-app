// 10-Step Interactive Presentation Mode for Hackathon Judges
// Demonstrates end-to-end CampusPulse event lifecycle with emphasis on Automatic Event Expiry & Archiving

import { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  FolderArchive,
  Play,
  Pause,
  PlusCircle,
  QrCode,
  RotateCcw,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { archiveDaemon } from "@/services/archiveDaemon";
import { attendanceService } from "@/services/attendanceService";
import { certificateService } from "@/services/certificateService";
import { cn } from "@/lib/utils";

export interface PresentationStep {
  step: number;
  title: string;
  subtitle: string;
  content: string;
  highlights: string[];
  actionLabel?: string;
  targetRoute?: string;
  autoAction?: () => Promise<void>;
}

export function PresentationModeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps: PresentationStep[] = [
    {
      step: 1,
      title: "Step 1: The Problem & Flagship Core Innovation",
      subtitle: "Eliminating stale announcements with Automatic Event Expiry & Archiving",
      content:
        "University feeds suffer from expired event clutter and lost historical data. CampusPulse solves this by enforcing automatic event expiry and archiving without requiring human intervention.",
      highlights: [
        "Automatic Event Expiry when current time >= end date + time",
        "Automatic Feed Removal for expired announcements",
        "Permanent Data Preservation for attendance, certificates, and reports",
      ],
    },
    {
      step: 2,
      title: "Step 2: Organizer Event Creation",
      subtitle: "Creation of campus event announcement with venue & schedule",
      content:
        "Organizers create structured event announcements specifying start time, end time, capacity, and venue rules.",
      highlights: [
        "Default Status: PendingApproval",
        "Generated createdAt & updatedAt timestamps",
        "Configured venue & schedule boundaries",
      ],
      actionLabel: "View Create Event Form",
      targetRoute: "/organizer/create",
    },
    {
      step: 3,
      title: "Step 3: Governance & Admin Approval",
      subtitle: "Admin approval transitions status to Published",
      content:
        "Administrators review pending submissions against compliance checklists and publish approved events to the live feed.",
      highlights: [
        "Governance checklist validation",
        "Real-time status update to Published",
        "Instant feed broadcast to students",
      ],
      actionLabel: "Open Admin Approvals",
      targetRoute: "/admin/approvals",
    },
    {
      step: 4,
      title: "Step 4: Student Registration & Dynamic QR Pass",
      subtitle: "Student registers and receives cryptographic entry pass",
      content:
        "Students register with one click, generating a unique QR Pass linked to their roll number and registration document.",
      highlights: [
        "Firestore document created in registrations collection",
        "Real-time notification dispatch",
        "QR Pass added to My Registrations",
      ],
      actionLabel: "View My Registrations",
      targetRoute: "/registrations",
    },
    {
      step: 5,
      title: "Step 5: Attendance Verification & QR Check-In",
      subtitle: "Organizer scans QR code for gate check-in",
      content:
        "Organizers scan student QR passes at venue gates, instantly updating attendance status to Present in Firestore.",
      highlights: [
        "Instant QR verification SLA (< 50ms)",
        "Attendance Status updated to Present",
        "Eligibility unlocked for certificate generation",
      ],
      actionLabel: "Simulate Gate Scan",
      autoAction: async () => {
        await attendanceService.processQRCheckIn({
          qrPassCode: "PASS:reg-001:evt-001:std-001",
          verifiedBy: "Gate Scanner #1",
        });
        toast.success("Gate Scanner verified QR Pass!");
      },
    },
    {
      step: 6,
      title: "Step 6: Time Advance & Auto-Archive Engine Sweep",
      subtitle: "Simulating event completion and engine trigger",
      content:
        "When current server time reaches event end time, the Flagship Auto-Archive Daemon triggers a background sweep.",
      highlights: [
        "Compares server time against event.endDate + event.endTime",
        "Transitions status from Live -> Completed -> Archived",
        "Zero human intervention required",
      ],
      actionLabel: "Trigger Auto-Archive Sweep",
      autoAction: async () => {
        await archiveDaemon.runArchiveSweep();
        toast.success("Flagship Auto-Archive Engine executed sweep!");
      },
    },
    {
      step: 7,
      title: "Step 7: Automatic Feed Sweeping & Audit Telemetry",
      subtitle: "Expired announcements removed from active feed",
      content:
        "The active student feed is swept clean, while comprehensive audit logs and notifications document the archival operation.",
      highlights: [
        "Announcement removed from active feed",
        "Audit log document written to Firestore",
        "Notifications sent to participants and organizers",
      ],
      actionLabel: "Open Archive Monitor",
      targetRoute: "/admin/archive-logs",
    },
    {
      step: 8,
      title: "Step 8: Permanent Archive Access & Verified Certificates",
      subtitle: "Archived events remain searchable; certificates preserved",
      content:
        "Archived events are permanently preserved in the Archive Center. Eligible participants retain lifelong access to verified certificates.",
      highlights: [
        "Permanent search & filter capability",
        "Downloadable PDF certificates for eligible students",
        "Preserved feedback and attendance records",
      ],
      actionLabel: "Open Certificate Wallet",
      autoAction: async () => {
        await certificateService.generateCertificate({
          eventId: "evt-001",
          studentId: "std-001",
          studentName: "Aarav Sharma",
          rollNumber: "CS2026-042",
          department: "Computer Science",
          eventTitle: "AI Builders Summit 2026",
          organizerName: "Codecraft Desk",
        });
        toast.success("Preserved Verified Certificate issued!");
      },
    },
    {
      step: 9,
      title: "Step 9: Real-time Analytics & Business Intelligence",
      subtitle: "Archived analytics aggregated across all departments",
      content:
        "Administrators track archive volumes, department growth, and turnout rates in real time via Firestore streams.",
      highlights: [
        "Live KPI counters for Archived Events",
        "Department attendance growth metrics",
        "Turnout SLA reports",
      ],
      actionLabel: "Open Reports & Analytics",
      targetRoute: "/admin/reports",
    },
    {
      step: 10,
      title: "Step 10: Scalability, Impact & Final Summary",
      subtitle: "Enterprise-grade architecture for university governance",
      content:
        "CampusPulse provides a complete, scalable, and automated event governance platform engineered for modern universities.",
      highlights: [
        "Scalable serverless architecture (Firebase Cloud Functions 2nd Gen)",
        "Production-ready security rules and audit logging",
        "Automated lifecycle guarantees zero stale announcements",
      ],
    },
  ];

  // Auto-play timer (10s per step)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 10) {
            setIsPlaying(false);
            return 10;
          }
          return prev + 1;
        });
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  const current = steps[activeStep - 1];

  const handleStepAction = async () => {
    if (current.autoAction) {
      await current.autoAction();
    }
    if (current.targetRoute) {
      navigate({ to: current.targetRoute as any });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-xl">
      <div className="w-full max-w-3xl rounded-3xl border border-primary/30 bg-card p-6 shadow-2xl space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-primary-soft text-primary font-bold">
              <Zap className="size-5" />
            </span>
            <div>
              <h2 className="font-extrabold text-lg text-foreground flex items-center gap-2">
                CampusPulse Judge Presentation Mode <Sparkles className="size-4 text-warning fill-warning" />
              </h2>
              <p className="text-xs text-muted-foreground">5-Minute Interactive Solution Walkthrough</p>
            </div>
          </div>

          <button onClick={onClose} className="rounded-full p-2 text-muted-foreground hover:bg-secondary">
            <X className="size-5" />
          </button>
        </div>

        {/* STEP PROGRESS BAR */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-muted-foreground">
            <span>{current.title}</span>
            <span>Step {activeStep} of 10</span>
          </div>
          <Progress value={(activeStep / 10) * 100} className="h-2 rounded-full" />
        </div>

        {/* STEP MAIN CONTENT CARD */}
        <div className="rounded-2xl border border-border bg-secondary/30 p-6 space-y-4">
          <div>
            <Badge variant="outline" className="rounded-full text-[10px] font-bold uppercase mb-1 bg-card">
              {current.subtitle}
            </Badge>
            <h3 className="font-extrabold text-xl text-foreground mt-1">{current.title}</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{current.content}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-border">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Key Technical Highlights</p>
            <div className="grid gap-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <span className="grid size-4 place-items-center rounded-full bg-success/20 text-success text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {current.actionLabel && (
            <div className="pt-3">
              <Button size="sm" onClick={handleStepAction} className="rounded-xl shadow-glow text-xs">
                <Play className="mr-1.5 size-3.5 fill-current" /> {current.actionLabel}
              </Button>
            </div>
          )}
        </div>

        {/* FOOTER & CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl text-xs bg-card"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="mr-1.5 size-3.5 text-warning" /> : <Play className="mr-1.5 size-3.5 text-success" />}
              {isPlaying ? "Pause Auto-Play" : "Start Auto-Play (10s)"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-xl text-xs"
              onClick={() => {
                setActiveStep(1);
                toast.info("Restarted Presentation Mode.");
              }}
            >
              <RotateCcw className="mr-1.5 size-3.5" /> Restart Demo
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl text-xs bg-card"
              disabled={activeStep <= 1}
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            >
              <ChevronLeft className="mr-1 size-4" /> Previous
            </Button>
            <Button
              size="sm"
              className="rounded-xl shadow-glow text-xs"
              disabled={activeStep >= 10}
              onClick={() => setActiveStep((prev) => Math.min(10, prev + 1))}
            >
              Next Step <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
