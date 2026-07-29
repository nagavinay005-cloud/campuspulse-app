import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { format } from "date-fns";
import { Bookmark, Building2, CalendarDays, Clock, MapPin, Share2, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Countdown, StatusBadge } from "./primitives";
import { resolveStatus, type CampusEvent } from "@/data/mock";
import { useAuth } from "@/context/AuthContext";

export function EventCard({ event, index = 0, isRegistered = false }: { event: CampusEvent; index?: number; isRegistered?: boolean }) {
  const status = resolveStatus(event);
  const archived = status === "Archived";
  const [saved, setSaved] = useState(false);
  const full = event.registered >= event.seats;
  const { user } = useAuth();
  const isOrganizer = user?.role === "organizer" || user?.role === "admin";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface lift-on-hover group flex flex-col overflow-hidden"
    >
      <Link to="/events/$eventId" params={{ eventId: event.id }} className="relative block aspect-[16/9] overflow-hidden">
        <img
          src={event.banner}
          alt={event.title}
          loading="lazy"
          width={1280}
          height={720}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
          <StatusBadge status={status} className="bg-card/95 backdrop-blur" />
          <Badge variant="outline" className="rounded-full border-0 bg-card/95 px-2.5 py-1 font-medium backdrop-blur">
            {event.category}
          </Badge>
        </div>
        {!archived && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-foreground/70 to-transparent p-3">
            <span className="rounded-full bg-card/95 px-2.5 py-1 backdrop-blur">
              <Countdown to={event.start} compact />
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <Link to="/events/$eventId" params={{ eventId: event.id }} className="min-w-0">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug transition-colors group-hover:text-primary">
              {event.title}
            </h3>
          </Link>
          <div className="flex shrink-0 gap-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Save event"
              className="size-8 rounded-lg"
              onClick={() => {
                setSaved(!saved);
                toast.success(saved ? "Removed from saved" : "Saved to your list");
              }}
            >
              <Bookmark className={saved ? "size-4 fill-primary text-primary" : "size-4"} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Share event"
              className="size-8 rounded-lg"
              onClick={() => toast.success("Event link copied to clipboard")}
            >
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{event.summary}</p>

        <dl className="mt-4 grid grid-cols-2 gap-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5 shrink-0" />
            <span className="truncate">{format(new Date(event.start), "dd MMM yyyy")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5 shrink-0" />
            <span className="truncate">{format(new Date(event.start), "h:mm a")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="size-3.5 shrink-0" />
            <span className="truncate">{event.department}</span>
          </div>
          {event.registrationDeadline && (
            <div className="col-span-2 mt-1 flex items-center gap-1.5 text-red-500 font-medium">
              <span className="text-[10px] bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 px-2 py-0.5 rounded-md font-semibold">Deadline</span>
              <span className="truncate">
                {(() => {
                  try {
                    return format(new Date(event.registrationDeadline), "dd MMM yyyy, h:mm a");
                  } catch {
                    return event.registrationDeadline;
                  }
                })()}
              </span>
            </div>
          )}
        </dl>

        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="size-3.5" />
              {archived ? `${event.attended ?? 0} attended` : `${event.registered}/${event.seats} seats`}
            </span>
            <span className="font-medium text-foreground">
              {Math.round(((archived ? (event.attended ?? 0) : event.registered) / event.seats) * 100)}%
            </span>
          </div>
          <Progress value={Math.min(100, ((archived ? (event.attended ?? 0) : event.registered) / event.seats) * 100)} className="h-1.5" />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary-soft text-[10px] font-semibold text-primary">
              {event.organizerAvatar}
            </span>
            <span className="truncate text-xs text-muted-foreground">{event.organizer}</span>
          </div>
          <div className="flex gap-2">
            <Link to="/events/$eventId" params={{ eventId: event.id }}>
              <Button size="sm" variant="outline" className="rounded-xl bg-card text-xs">
                View Details
              </Button>
            </Link>
            {archived ? (
              <Link to="/summary/$eventId" params={{ eventId: event.id }}>
                <Button size="sm" variant="secondary" className="rounded-xl text-xs">
                  View Summary
                </Button>
              </Link>
            ) : isOrganizer ? (
              <Link to="/events/$eventId" params={{ eventId: event.id }}>
                <Button size="sm" variant="outline" className="rounded-xl bg-card border-primary/40 text-primary hover:bg-primary-soft text-xs">
                  Manage Event
                </Button>
              </Link>
            ) : isRegistered ? (
              <Button size="sm" variant="outline" className="rounded-xl border-success/30 bg-success-soft text-success text-xs font-semibold cursor-default" disabled>
                ✓ Registered
              </Button>
            ) : (
              <Link to="/events/$eventId" params={{ eventId: event.id }} search={{ register: "true" }}>
                <Button
                  size="sm"
                  className="rounded-xl text-xs"
                  variant={full ? "secondary" : "default"}
                >
                  {full ? "Join waitlist" : "Register"}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
