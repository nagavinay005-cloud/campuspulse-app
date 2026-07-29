import { Archive } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ArchiveBadge({ label = "Archived", className }: { label?: string; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 rounded-full border-border bg-secondary px-2.5 py-1 font-medium text-muted-foreground",
        className,
      )}
    >
      <Archive className="size-3" />
      {label}
    </Badge>
  );
}

export function formatEndsIn(ms: number) {
  if (ms <= 0) return "Ended";
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
