import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { Archive, Award, Copy, Download, FileBarChart, Images, RotateCcw, Star, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArchiveBadge } from "./archive-badge";
import { getArchiveMeta } from "@/data/archive";
import type { CampusEvent } from "@/data/mock";

export function ArchiveCard({
  event,
  index = 0,
  onSummary,
  onGallery,
}: {
  event: CampusEvent;
  index?: number;
  onSummary?: (e: CampusEvent) => void;
  onGallery?: (e: CampusEvent) => void;
}) {
  const meta = getArchiveMeta(event.id);
  const rate = Math.round(((event.attended ?? 0) / Math.max(1, event.registered)) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface lift-on-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.banner}
          alt={event.title}
          loading="lazy"
          width={1280}
          height={720}
          className="size-full object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
          <ArchiveBadge className="bg-card/95 backdrop-blur" />
          <Badge variant="outline" className="rounded-full border-0 bg-card/95 px-2.5 py-1 font-medium backdrop-blur">
            {event.category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">{event.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {event.department} · {event.organizer}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-xs">
          <div>
            <dt className="text-muted-foreground">Started</dt>
            <dd className="font-medium">{format(new Date(event.start), "dd MMM yyyy, h:mm a")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Ended</dt>
            <dd className="font-medium">{format(new Date(event.end), "dd MMM yyyy, h:mm a")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Archived</dt>
            <dd className="font-medium">{format(new Date(meta.archivedAt), "dd MMM yyyy, h:mm a")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Report</dt>
            <dd className="font-medium">PDF · {meta.reportSize}</dd>
          </div>
        </dl>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-secondary p-3 text-center">
            <Users className="mx-auto size-3.5 text-muted-foreground" />
            <p className="mt-1 text-sm font-semibold tabular-nums">{event.attended ?? 0}</p>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{rate}% attended</p>
          </div>
          <div className="rounded-xl bg-secondary p-3 text-center">
            <Award className="mx-auto size-3.5 text-muted-foreground" />
            <p className="mt-1 text-sm font-semibold tabular-nums">{meta.certificates}</p>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">certificates</p>
          </div>
          <div className="rounded-xl bg-secondary p-3 text-center">
            <Star className="mx-auto size-3.5 text-muted-foreground" />
            <p className="mt-1 text-sm font-semibold tabular-nums">{meta.feedbackScore.toFixed(1)}</p>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">feedback</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
          {onSummary ? (
            <Button size="sm" className="rounded-xl" onClick={() => onSummary(event)}>
              <FileBarChart className="mr-1.5 size-3.5" /> View Summary
            </Button>
          ) : (
            <Link to="/summary/$eventId" params={{ eventId: event.id }}>
              <Button size="sm" className="w-full rounded-xl">
                <FileBarChart className="mr-1.5 size-3.5" /> View Summary
              </Button>
            </Link>
          )}
          <Button
            size="sm"
            variant="outline"
            className="rounded-xl bg-card"
            onClick={() => (onGallery ? onGallery(event) : toast.success("Opening event gallery"))}
          >
            <Images className="mr-1.5 size-3.5" /> Gallery
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-xl bg-card"
            onClick={() => toast.success(`Report for ${event.title} downloaded`)}
          >
            <Download className="mr-1.5 size-3.5" /> Report
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-xl bg-card"
            onClick={() => toast.success("Event duplicated into Drafts")}
          >
            <Copy className="mr-1.5 size-3.5" /> Duplicate
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="col-span-2 rounded-xl text-muted-foreground"
            onClick={() => toast.info("Restore requires admin approval (demo only)")}
          >
            <RotateCcw className="mr-1.5 size-3.5" /> Restore event
          </Button>
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Archive className="size-3" /> Registrations permanently closed by automatic expiry
        </p>
      </div>
    </motion.article>
  );
}
