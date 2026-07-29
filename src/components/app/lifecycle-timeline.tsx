import { motion } from "motion/react";
import {
  Archive,
  CalendarClock,
  CheckCircle2,
  FileEdit,
  Hourglass,
  Megaphone,
  Radio,
  Send,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { lifecycleStages, stageCount } from "@/data/archive";
import type { EventStatus } from "@/data/mock";

const icons: Record<string, LucideIcon> = {
  FileEdit,
  Send,
  Hourglass,
  Megaphone,
  CalendarClock,
  Radio,
  CheckCircle2,
  Archive,
};

const tones: Record<string, string> = {
  muted: "bg-secondary text-muted-foreground",
  warning: "bg-warning-soft text-warning",
  primary: "bg-primary-soft text-primary",
  success: "bg-success-soft text-success",
  danger: "bg-danger-soft text-danger",
  archive: "bg-secondary text-foreground",
};

const rails: Record<string, string> = {
  muted: "bg-border",
  warning: "bg-warning",
  primary: "bg-primary",
  success: "bg-success",
  danger: "bg-danger",
  archive: "bg-muted-foreground",
};

export function LifecycleTimeline({
  selected,
  onSelect,
}: {
  selected: EventStatus | null;
  onSelect: (stage: EventStatus | null) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {lifecycleStages.map((s, i) => {
        const Icon = icons[s.icon] ?? Archive;
        const active = selected === s.stage;
        const count = stageCount(s.stage);
        return (
          <motion.button
            key={s.stage}
            type="button"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.045, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onSelect(active ? null : s.stage)}
            className={cn(
              "card-surface lift-on-hover relative overflow-hidden p-5 text-left transition-all",
              active && "ring-2 ring-primary/40",
            )}
          >
            <span className={cn("absolute inset-x-0 top-0 h-1", rails[s.tone])} />
            <div className="flex items-start justify-between gap-3">
              <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", tones[s.tone])}>
                <Icon className="size-4" />
              </span>
              <span className="text-2xl font-semibold tabular-nums tracking-tight">{count}</span>
            </div>
            <p className="mt-3 text-sm font-semibold">
              <span className="mr-1.5 text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              {s.stage}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.description}</p>
          </motion.button>
        );
      })}
    </div>
  );
}
