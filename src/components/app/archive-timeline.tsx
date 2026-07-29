import { motion } from "motion/react";
import { Archive, Award, Lock, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { archiveLog } from "@/data/archive";

const icons: Record<string, LucideIcon> = { Archive, Award, Users, Lock };

const tones = {
  success: "bg-success-soft text-success ring-success/10",
  primary: "bg-primary-soft text-primary ring-primary/10",
  warning: "bg-warning-soft text-warning ring-warning/10",
} as const;

export function TimelineCard({
  title,
  detail,
  when,
  tone,
  icon,
  index = 0,
}: {
  title: string;
  detail: string;
  when: string;
  tone: keyof typeof tones;
  icon: string;
  index?: number;
}) {
  const Icon = icons[icon] ?? Archive;
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="relative flex gap-4 pb-6 last:pb-0"
    >
      <span className="absolute left-[17px] top-9 h-[calc(100%-1.5rem)] w-px bg-border last:hidden" />
      <span className={cn("z-10 grid size-9 shrink-0 place-items-center rounded-xl ring-4", tones[tone])}>
        <Icon className="size-4" />
      </span>
      <div className="min-w-0 rounded-2xl border border-border bg-card p-4 pt-3 shadow-sm">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{detail}</p>
        <p className="mt-2 text-[11px] uppercase tracking-wide text-muted-foreground">{when}</p>
      </div>
    </motion.li>
  );
}

export function ArchiveTimeline({ limit }: { limit?: number }) {
  const items = limit ? archiveLog.slice(0, limit) : archiveLog;
  return (
    <ol className="relative">
      {items.map((a, i) => (
        <TimelineCard key={a.id} {...a} index={i} />
      ))}
    </ol>
  );
}
