import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { EventStatus } from "@/data/mock";

const map: Record<EventStatus, string> = {
  Draft: "bg-muted text-muted-foreground border-border",
  Submitted: "bg-secondary text-secondary-foreground border-border",
  "Pending Approval": "bg-warning-soft text-warning-foreground border-warning/30",
  Published: "bg-primary-soft text-accent-foreground border-primary/20",
  Upcoming: "bg-primary-soft text-accent-foreground border-primary/20",
  Live: "bg-danger-soft text-danger border-danger/30",
  Completed: "bg-success-soft text-success border-success/30",
  Archived: "bg-secondary text-muted-foreground border-border",
};

export function StatusBadge({ status, className }: { status: EventStatus; className?: string }) {
  return (
    <Badge variant="outline" className={cn("gap-1.5 rounded-full border px-2.5 py-1 font-medium", map[status], className)}>
      {status === "Live" && <span className="size-1.5 animate-pulse rounded-full bg-danger" />}
      {status}
    </Badge>
  );
}

function parts(ms: number) {
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s };
}

export function Countdown({ to, compact }: { to: string; compact?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [left, setLeft] = useState(() => new Date(to).getTime() - Date.now());

  useEffect(() => {
    setMounted(true);
    const i = setInterval(() => setLeft(new Date(to).getTime() - Date.now()), 1000);
    return () => clearInterval(i);
  }, [to]);

  if (!mounted) return <span className="text-xs font-medium text-muted-foreground">--:--:--</span>;
  if (left <= 0) return <span className="text-xs font-medium text-muted-foreground">Ended</span>;
  const { d, h, m, s } = parts(left);

  if (compact)
    return (
      <span className="text-xs font-semibold tabular-nums text-primary">
        {d > 0 ? `${d}d ${h}h` : `${h}h ${m}m ${s}s`}
      </span>
    );

  return (
    <div className="flex gap-2">
      {[
        { v: d, l: "days" },
        { v: h, l: "hrs" },
        { v: m, l: "min" },
        { v: s, l: "sec" },
      ].map((p) => (
        <div key={p.l} className="min-w-14 rounded-xl border border-border bg-card px-3 py-2 text-center">
          <div className="text-lg font-semibold tabular-nums text-foreground">{String(p.v).padStart(2, "0")}</div>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{p.l}</div>
        </div>
      ))}
    </div>
  );
}

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [mounted, setMounted] = useState(false);
  const [n, setN] = useState(value);

  useEffect(() => {
    setMounted(true);
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame++;
      const p = 1 - Math.pow(1 - frame / total, 3);
      setN(Math.round(value * p));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [value]);

  if (!mounted)
    return (
      <span className="tabular-nums">
        {value.toLocaleString()}
        {suffix}
      </span>
    );

  return (
    <span className="tabular-nums">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
