import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader, SectionCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import { events, resolveStatus } from "@/data/mock";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/calendar")({
  head: () => ({
    meta: [
      { title: "Campus Calendar — CampusPulse" },
      { name: "description", content: "Month view of every campus event, colour coded by category and status." },
      { property: "og:title", content: "Campus Calendar — CampusPulse" },
      { property: "og:description", content: "Month view of every campus event." },
    ],
  }),
  component: CalendarView,
});

function CalendarView() {
  const [cursor, setCursor] = useState(new Date());
  const [selected, setSelected] = useState(new Date());
  const { events: liveEvents } = useLiveEvents({ status: "Published" });

  const eventsList = useMemo(() => {
    const allEvents = [...events];
    liveEvents.forEach((le) => {
      if (!allEvents.some((e) => e.id === le.id)) {
        allEvents.push(le);
      }
    });
    return allEvents;
  }, [liveEvents]);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(cursor), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(cursor), { weekStartsOn: 1 }),
  });

  const eventsOn = (d: Date) => eventsList.filter((e) => isSameDay(new Date(e.start), d));
  const dayEvents = eventsOn(selected);

  return (
    <div>
      <PageHeader
        title="Campus Calendar"
        subtitle="Every event, plotted month by month"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student", to: "/dashboard" }, { label: "Calendar" }]}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" aria-label="Previous month" className="size-9 rounded-xl bg-card" onClick={() => setCursor(addMonths(cursor, -1))}>
              <ChevronLeft className="size-4" />
            </Button>
            <span className="min-w-36 text-center text-sm font-semibold">{format(cursor, "MMMM yyyy")}</span>
            <Button variant="outline" size="icon" aria-label="Next month" className="size-9 rounded-xl bg-card" onClick={() => setCursor(addMonths(cursor, 1))}>
              <ChevronRight className="size-4" />
            </Button>
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => { setCursor(new Date()); setSelected(new Date()); }}>Today</Button>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="card-surface p-4 sm:p-6">
          <div className="grid grid-cols-7 gap-1 pb-2 text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => {
              const list = eventsOn(d);
              const active = isSameDay(d, selected);
              return (
                <button
                  key={d.toISOString()}
                  onClick={() => setSelected(d)}
                  className={cn(
                    "flex min-h-20 flex-col items-start gap-1 rounded-xl border p-2 text-left transition-colors sm:min-h-24",
                    active ? "border-primary bg-primary-soft" : "border-transparent hover:bg-secondary",
                    !isSameMonth(d, cursor) && "opacity-40",
                  )}
                >
                  <span className={cn("text-xs font-semibold", isSameDay(d, new Date()) && "text-primary")}>
                    {format(d, "d")}
                  </span>
                  <div className="w-full space-y-1">
                    {list.slice(0, 2).map((e) => (
                      <span key={e.id} className="block truncate rounded-md bg-card px-1.5 py-0.5 text-[10px] font-medium shadow-soft">
                        {e.title}
                      </span>
                    ))}
                    {list.length > 2 && <span className="text-[10px] text-muted-foreground">+{list.length - 2} more</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <SectionCard title={format(selected, "EEEE, dd MMM")} description={`${dayEvents.length} event(s) scheduled`}>
          {dayEvents.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nothing scheduled. Pick another date to see its agenda.</p>
          ) : (
            <ul className="space-y-3">
              {dayEvents.map((e) => (
                <li key={e.id}>
                  <Link to="/events/$eventId" params={{ eventId: e.id }} className="block rounded-2xl border border-border p-4 transition-colors hover:bg-secondary">
                    <div className="flex items-center justify-between gap-2">
                      <StatusBadge status={resolveStatus(e)} />
                      <span className="text-xs text-muted-foreground">{format(new Date(e.start), "h:mm a")}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-snug">{e.title}</p>
                    <p className="mt-1 flex items-center text-xs text-muted-foreground">
                      {e.venue} <Dot className="size-3" /> {e.club}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {["Technical", "Cultural", "Workshop", "Sports"].map((c) => (
              <Badge key={c} variant="secondary" className="rounded-full">{c}</Badge>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
