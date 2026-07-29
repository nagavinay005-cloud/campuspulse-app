import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { lifecycle, type EventStatus } from "@/data/mock";

export function LifecycleFlow({ current }: { current: EventStatus }) {
  const activeIndex = lifecycle.findIndex((l) => l.stage === current);

  return (
    <ol className="relative space-y-0">
      {lifecycle.map((step, i) => {
        const done = i < activeIndex;
        const active = i === activeIndex;
        return (
          <motion.li
            key={step.stage}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="relative flex gap-4 pb-6 last:pb-0"
          >
            {i < lifecycle.length - 1 && (
              <span
                className={cn(
                  "absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px",
                  done ? "bg-primary" : "bg-border",
                )}
              />
            )}
            <span
              className={cn(
                "z-10 grid size-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors",
                done && "border-primary bg-primary text-primary-foreground",
                active && "border-primary bg-primary-soft text-primary ring-4 ring-primary/10",
                !done && !active && "border-border bg-card text-muted-foreground",
              )}
            >
              {done ? <Check className="size-4" /> : i + 1}
            </span>
            <div className="min-w-0 pt-1">
              <p className={cn("text-sm font-medium", active ? "text-primary" : "text-foreground")}>{step.stage}</p>
              <p className="text-xs text-muted-foreground">{step.note}</p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
