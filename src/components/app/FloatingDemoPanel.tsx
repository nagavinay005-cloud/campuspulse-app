// Floating Hackathon Judge Demo Simulation Control Panel for CampusPulse
// Allows judges to simulate time passage, trigger instant archiving sweeps, switch roles, and step through guided tours

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  Bell,
  CheckCircle2,
  ChevronUp,
  Clock,
  FastForward,
  FolderArchive,
  Play,
  RotateCcw,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { archiveDaemon } from "@/services/archiveDaemon";
import { certificateService } from "@/services/certificateService";
import { notificationService } from "@/services/notificationService";
import { attendanceService } from "@/services/attendanceService";
import { demoSuite, DEMO_PROFILES, type DemoProfile } from "@/lib/demoPreset";
import { PresentationModeModal } from "@/components/app/PresentationModeModal";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

export function FloatingDemoPanel() {
  const [expanded, setExpanded] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [simulatedOffsetHours, setSimulatedOffsetHours] = useState(0);
  const [showPresentation, setShowPresentation] = useState(false);
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSwitchRole = async (prof: DemoProfile) => {
    if (prof.role === "Admin") {
      const p = await loginWithEmail("admin@campuspulse.edu", "Admin@123456");
      if (p) navigate({ to: "/admin/dashboard" });
    } else if (prof.role === "Organizer") {
      const p = await loginWithEmail("organizer@campus.edu", "Admin@123456");
      if (p) navigate({ to: "/organizer/dashboard" });
    } else {
      const p = await loginWithGoogle("aarav.s@campus.edu");
      if (p) navigate({ to: "/student/dashboard" });
    }
  };

  const handleTimeFastForward = (hours: number, label: string) => {
    setSimulatedOffsetHours((prev) => prev + hours);
    toast.success(`Fast-forwarded time by ${label}! Simulated Server Time updated.`);
  };

  const handleStepTour = async (step: number) => {
    setActiveStep(step);
    switch (step) {
      case 1:
        toast.info("Step 1: Student Aarav Sharma registers for AI Builders Summit.");
        break;
      case 2:
        await attendanceService.processQRCheckIn({
          qrPassCode: "PASS:reg-001:evt-001:std-001",
          verifiedBy: "Gate Scanner #1",
        });
        toast.success("Step 2: Organizer verified QR Pass check-in!");
        break;
      case 3:
        toast.info("Step 3: Admin monitoring live telemetry dashboard.");
        break;
      case 4:
        toast.warning("Step 4: Event reaches scheduled end time.");
        break;
      case 5:
        await archiveDaemon.runArchiveSweep();
        toast.success("Step 5: Flagship Auto-Archive Engine triggered sweep!");
        break;
      case 6:
        toast.success("Step 6: Event archived! Available in permanent search.");
        break;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all">
      {!expanded ? (
        <Button
          onClick={() => setExpanded(true)}
          className="rounded-full shadow-2xl bg-gradient-to-r from-primary to-primary/80 px-5 py-6 font-bold text-xs text-primary-foreground flex items-center gap-2 ring-4 ring-primary/20"
        >
          <Sparkles className="size-4 animate-spin" />
          <span>Hackathon Judge Demo Panel</span>
        </Button>
      ) : (
        <div className="w-[360px] rounded-3xl border border-primary/30 bg-card/95 p-5 shadow-2xl backdrop-blur-2xl space-y-4">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-primary-soft text-primary font-bold text-xs">
                ⚡
              </span>
              <div>
                <h3 className="font-extrabold text-sm text-foreground">Judge Demo Console</h3>
                <p className="text-[10px] text-muted-foreground">5-Minute Automated Lifecycle Simulator</p>
              </div>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="rounded-full p-1 text-muted-foreground hover:bg-secondary"
            >
              <ChevronUp className="size-4 rotate-180" />
            </button>
          </div>

          {/* ONE-CLICK DEMO ACCOUNTS */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
              1-Click Role Switchers
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {DEMO_PROFILES.map((prof) => (
                <button
                  type="button"
                  key={prof.role}
                  onClick={() => handleSwitchRole(prof)}
                  className="rounded-xl border border-border bg-secondary/40 p-2 text-center text-[10px] font-semibold hover:border-primary/50 hover:bg-primary-soft/50 transition-all"
                >
                  <p className="font-bold text-foreground">{prof.role}</p>
                  <p className="text-[9px] text-muted-foreground truncate">{prof.name.split(" ")[0]}</p>
                </button>
              ))}
            </div>
          </div>

          {/* TIME SIMULATION CONTROLS */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Time Fast-Forward
              </p>
              {simulatedOffsetHours > 0 && (
                <Badge variant="outline" className="rounded-full text-[9px] font-mono bg-card">
                  +{simulatedOffsetHours} hrs
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-[10px]">
              <Button size="sm" variant="outline" className="rounded-xl h-7 text-[10px] bg-card" onClick={() => handleTimeFastForward(0.1, "1 Min")}>
                +1 min
              </Button>
              <Button size="sm" variant="outline" className="rounded-xl h-7 text-[10px] bg-card" onClick={() => handleTimeFastForward(1, "1 Hour")}>
                +1 hr
              </Button>
              <Button size="sm" variant="outline" className="rounded-xl h-7 text-[10px] bg-card" onClick={() => handleTimeFastForward(24, "1 Day")}>
                +1 day
              </Button>
              <Button size="sm" variant="outline" className="rounded-xl h-7 text-[10px] bg-card" onClick={() => handleTimeFastForward(168, "1 Week")}>
                +1 wk
              </Button>
            </div>
          </div>

          {/* QUICK SIMULATION ACTIONS */}
          <div className="space-y-2 border-t pt-3">
            <Button
              className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 shadow-glow text-xs font-bold"
              onClick={() => setShowPresentation(true)}
            >
              <Sparkles className="mr-1.5 size-3.5" /> Start Presentation (10 Steps)
            </Button>

            <Button
              variant="outline"
              className="w-full rounded-xl text-xs bg-card"
              onClick={() => demoSuite.runHackathonDemoSequence()}
            >
              <Play className="mr-1.5 size-3.5 fill-current" /> Run Full Demo Sequence
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="rounded-xl text-xs bg-card"
                onClick={async () => {
                  await archiveDaemon.runArchiveSweep();
                }}
              >
                <FolderArchive className="mr-1 size-3 text-primary" /> Auto-Archive
              </Button>
              <Button
                variant="outline"
                className="rounded-xl text-xs bg-card"
                onClick={async () => {
                  await certificateService.generateCertificate({
                    eventId: "evt-001",
                    studentId: "std-001",
                    studentName: "Aarav Sharma",
                    rollNumber: "CS2026-042",
                    department: "Computer Science",
                    eventTitle: "AI Builders Summit 2026",
                    organizerName: "Codecraft Desk",
                  });
                }}
              >
                <Award className="mr-1 size-3 text-warning" /> Issue Cert
              </Button>
            </div>
          </div>

          {/* GUIDED TOUR STEPPER */}
          <div className="border-t pt-3">
            <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground mb-2">
              <span>Interactive Step-by-Step Tour</span>
              <span>Step {activeStep} / 6</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6].map((st) => (
                <button
                  type="button"
                  key={st}
                  onClick={() => handleStepTour(st)}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all",
                    st <= activeStep ? "bg-primary" : "bg-secondary",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 10-Step Interactive Presentation Mode Overlay */}
      <PresentationModeModal isOpen={showPresentation} onClose={() => setShowPresentation(false)} />
    </div>
  );
}
