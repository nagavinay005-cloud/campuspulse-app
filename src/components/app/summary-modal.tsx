import { format } from "date-fns";
import { Award, CalendarClock, Star, Users } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArchiveBadge } from "./archive-badge";
import { getArchiveMeta } from "@/data/archive";
import type { CampusEvent } from "@/data/mock";

export function SummaryModal({
  event,
  open,
  onOpenChange,
}: {
  event: CampusEvent | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!event) return null;
  const meta = getArchiveMeta(event.id);
  const rate = Math.round(((event.attended ?? 0) / Math.max(1, event.registered)) * 100);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto rounded-2xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="pr-6 text-left leading-snug">{event.title}</DialogTitle>
          <DialogDescription className="text-left">
            {event.department} · {event.club} · organised by {event.organizer}
          </DialogDescription>
        </DialogHeader>

        <img
          src={event.banner}
          alt={event.title}
          className="aspect-[16/7] w-full rounded-2xl object-cover"
          loading="lazy"
        />

        <div className="flex flex-wrap items-center gap-2">
          <ArchiveBadge />
          <Badge variant="outline" className="rounded-full">{event.category}</Badge>
          <Badge variant="outline" className="rounded-full">
            Archived {format(new Date(meta.archivedAt), "dd MMM yyyy, h:mm a")}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: Users, label: "Attended", value: `${event.attended ?? 0}` },
            { icon: CalendarClock, label: "Registered", value: `${event.registered}` },
            { icon: Award, label: "Certificates", value: `${meta.certificates}` },
            { icon: Star, label: "Feedback", value: meta.feedbackScore.toFixed(1) },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border p-4">
              <s.icon className="size-4 text-muted-foreground" />
              <p className="mt-2 text-xl font-semibold tabular-nums">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Attendance rate</span>
            <span className="font-medium">{rate}%</span>
          </div>
          <Progress value={rate} className="h-1.5" />
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>

        <div className="flex flex-wrap gap-2">
          <Button className="rounded-xl" onClick={() => toast.success("Summary report downloaded")}>
            Download report
          </Button>
          <Button variant="outline" className="rounded-xl bg-card" onClick={() => toast.success("Attendance sheet exported")}>
            Download attendance
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
