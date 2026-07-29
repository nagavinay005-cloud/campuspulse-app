import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  Archive,
  ArrowUpRight,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Download,
  FileBarChart,
  FolderArchive,
  Layers,
  LineChart,
  PieChart,
  PlusCircle,
  QrCode,
  Radio,
  ShieldCheck,
  Sparkles,
  Sliders,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { usePlatformMetrics } from "@/hooks/useAnalyticsHooks";
import { archiveDaemon } from "@/services/archiveDaemon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/admin/predictive-intelligence")({
  head: () => ({
    meta: [
      { title: "Predictive Intelligence Center — CampusPulse" },
      { name: "description", content: "AI-powered forecasting and predictive telemetry for campus event governance." },
      { property: "og:title", content: "Predictive Intelligence Center — CampusPulse" },
      { property: "og:description", content: "Forecast campus activity, attendance, and auto-archiving volume." },
    ],
  }),
  component: PredictiveIntelligenceCenter,
});

export function PredictiveIntelligenceCenter() {
  const { metrics } = usePlatformMetrics();
  const [simCapacity, setSimCapacity] = useState([300]);
  const [simDays, setSimDays] = useState([3]);

  // What-if simulator calculations
  const predictedRegistrations = Math.round(simCapacity[0] * 0.96 * (1 + simDays[0] * 0.05));
  const predictedTurnout = Math.round(predictedRegistrations * 0.94);

  return (
    <div className="space-y-6 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Predictive Intelligence Center"
        subtitle="Forecast campus activities using historical event and engagement data."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Admin Dashboard", to: "/admin" },
          { label: "Predictive Intelligence" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={() => toast.success("Exporting Predictive Intelligence Executive Report as CSV...")}>
              <Download className="mr-1.5 size-4" /> Export CSV
            </Button>
            <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={() => toast.success("Exporting Predictive Report as PDF...")}>
              <Download className="mr-1.5 size-4 text-primary" /> Export Executive PDF
            </Button>
          </div>
        }
      />

      {/* 2. PREDICTION CARDS (6 STAT CARDS) */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <StatCard label="Expected Regs Tomorrow" value={540} icon={TrendingUp} tone="primary" index={0} />
        <StatCard label="Predicted Attendance" value={482} icon={QrCode} tone="success" index={1} />
        <StatCard label="Capacity Alert Events" value={2} icon={AlertTriangle} tone="warning" index={2} />
        <StatCard label="At Risk of Low Turnout" value={1} icon={Activity} tone="danger" index={3} />
        <StatCard label="Predicted Certs" value={410} icon={Award} tone="warning" index={4} />
        <StatCard label="Archiving Operations" value={14} icon={FolderArchive} tone="primary" index={5} />
      </div>

      {/* 3. AI FORECASTS & WHAT-IF SIMULATOR */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* WHAT-IF SIMULATOR */}
        <SectionCard title="Interactive What-If Event Simulator" description="Simulate capacity and deadline tweaks to project registration & attendance impact">
          <div className="space-y-4 text-xs">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-muted-foreground">Proposed Event Capacity:</span>
                <span className="font-bold text-primary font-mono">{simCapacity[0]} Seats</span>
              </div>
              <Slider value={simCapacity} onValueChange={setSimCapacity} min={50} max={1000} step={25} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-muted-foreground">Registration Days Before Event:</span>
                <span className="font-bold text-primary font-mono">{simDays[0]} Days</span>
              </div>
              <Slider value={simDays} onValueChange={setSimDays} min={1} max={14} step={1} />
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary-soft/20 p-4 space-y-2 border-t mt-4">
              <p className="font-extrabold text-xs text-foreground flex items-center gap-1.5">
                <Sparkles className="size-4 text-primary" /> PulseAI Projected Impact
              </p>
              <div className="grid grid-cols-2 gap-2 text-center pt-1">
                <div className="rounded-xl bg-card p-2.5 border">
                  <p className="text-[10px] text-muted-foreground">Predicted Regs</p>
                  <p className="font-extrabold text-sm text-foreground">{predictedRegistrations}</p>
                </div>
                <div className="rounded-xl bg-card p-2.5 border">
                  <p className="text-[10px] text-muted-foreground">Predicted Turnout</p>
                  <p className="font-extrabold text-sm text-success">{predictedTurnout} (94%)</p>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* AI FORECAST CARDS */}
        <div className="lg:col-span-2 space-y-4">
          <SectionCard title="Machine Learning Platform Forecasts" description="Predictive modeling on student engagement and event capacity">
            <div className="grid gap-3 sm:grid-cols-2 text-xs">
              <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Registration Forecast</span>
                  <Badge variant="outline" className="rounded-full text-[10px] bg-success-soft text-success">
                    +18% Growth
                  </Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  CSE and Robotics workshops will reach 100% capacity within 6 hours of publishing.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Attendance Turnout Score</span>
                  <Badge variant="outline" className="rounded-full text-[10px] bg-primary-soft text-primary">
                    94.2% Expected
                  </Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Fridays between 2:00 PM – 4:00 PM yield the highest verified QR scan attendance rates.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Auto-Archiving Volume</span>
                  <Badge variant="outline" className="rounded-full text-[10px] bg-warning-soft text-warning">
                    14 Events Today
                  </Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  The background daemon will process 14 event expiries today with 0% SLA downtime.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground">Certificate Verification Rate</span>
                  <Badge variant="outline" className="rounded-full text-[10px] bg-success-soft text-success">
                    100% Validated
                  </Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  All eligible participants will receive instant verified certificates post-archiving.
                </p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* 4. EVENT HEALTH SCORES & RISK ANALYSIS */}
      <SectionCard title="Predictive Event Health Scores & Risk Analysis" description="AI health score based on registration velocity and venue capacity">
        <div className="rounded-2xl border border-border bg-card overflow-hidden text-xs">
          <div className="grid grid-cols-12 bg-secondary/40 p-3 font-bold border-b text-muted-foreground">
            <span className="col-span-4">Event Title</span>
            <span className="col-span-2">Department</span>
            <span className="col-span-2">Health Score</span>
            <span className="col-span-2">Risk Level</span>
            <span className="col-span-2 text-right">Action</span>
          </div>

          {[
            { title: "AI Builders Summit 2026", dept: "CSE", score: "98/100", risk: "Low Risk 🟢", action: "Capacity Full" },
            { title: "Cybersecurity CTF Challenge", dept: "CSE", score: "94/100", risk: "Low Risk 🟢", action: "On Track" },
            { title: "Rhythm & Rangoli Cultural", dept: "Cultural", score: "88/100", risk: "Low Risk 🟢", action: "On Track" },
            { title: "Robotics Grand Prix", dept: "ECE", score: "62/100", risk: "Medium Risk 🟠", action: "Send Notification" },
          ].map((e) => (
            <div key={e.title} className="grid grid-cols-12 p-3.5 items-center border-b hover:bg-secondary/20">
              <span className="col-span-4 font-bold text-foreground">{e.title}</span>
              <span className="col-span-2 text-muted-foreground">{e.dept}</span>
              <span className="col-span-2 font-mono font-bold text-primary">{e.score}</span>
              <span className="col-span-2 font-semibold">{e.risk}</span>
              <span className="col-span-2 text-right">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-xl text-[10px] bg-card h-7"
                  onClick={() => toast.info(`Action triggered for ${e.title}: ${e.action}`)}
                >
                  {e.action}
                </Button>
              </span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
