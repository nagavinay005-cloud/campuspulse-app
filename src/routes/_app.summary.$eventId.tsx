import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  ArrowLeft,
  Award,
  Building2,
  CalendarDays,
  Copy,
  Download,
  Images,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { ArchiveBadge } from "@/components/app/archive-badge";
import { LifecycleFlow } from "@/components/app/lifecycle-flow";
import { getArchiveMeta, galleryCaptions } from "@/data/archive";
import { getEvent, resolveStatus } from "@/data/mock";

export const Route = createFileRoute("/_app/summary/$eventId")({
  head: () => ({
    meta: [
      { title: "Event Summary — CampusPulse" },
      { name: "description", content: "Preserved event summary with attendance, registration statistics, certificates, feedback and gallery." },
      { property: "og:title", content: "Event Summary — CampusPulse" },
      { property: "og:description", content: "The full record of a completed and archived campus event." },
    ],
  }),
  component: SummaryPage,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <p className="text-sm text-muted-foreground">That event summary does not exist.</p>
      <Link to="/archive-manager"><Button className="mt-4 rounded-xl">Back to archive</Button></Link>
    </div>
  ),
});

function SummaryPage() {
  const { eventId } = Route.useParams();
  const event = getEvent(eventId);
  if (!event) throw notFound();

  const meta = getArchiveMeta(event.id);
  const attended = event.attended ?? 0;
  const rate = Math.round((attended / Math.max(1, event.registered)) * 100);
  const fill = Math.round((event.registered / event.seats) * 100);

  return (
    <div>
      <PageHeader
        title={event.title}
        subtitle={`${event.department} · ${event.club}`}
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Archive", to: "/archive-manager" },
          { label: "Summary" },
        ]}
        actions={
          <>
            <Link to="/archive-manager">
              <Button variant="outline" className="rounded-xl bg-card"><ArrowLeft className="mr-2 size-4" /> Archive</Button>
            </Link>
            <Button variant="outline" className="rounded-xl bg-card" onClick={() => toast.success("Event duplicated into Drafts")}>
              <Copy className="mr-2 size-4" /> Duplicate
            </Button>
            <Button className="rounded-xl" onClick={() => toast.success("Full report downloaded")}>
              <Download className="mr-2 size-4" /> Download report
            </Button>
          </>
        }
      />

      <div className="card-surface overflow-hidden">
        <img src={event.banner} alt={event.title} className="aspect-[16/6] w-full object-cover" width={1600} height={600} />
        <div className="flex flex-wrap items-center gap-2 p-5">
          <ArchiveBadge />
          <Badge variant="outline" className="rounded-full">{event.category}</Badge>
          <Badge variant="outline" className="rounded-full">{resolveStatus(event)}</Badge>
          <Badge variant="outline" className="rounded-full">
            Archived {format(new Date(meta.archivedAt), "dd MMM yyyy, h:mm a")}
          </Badge>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Attendance" value={attended} delta={`${rate}% of registrants`} icon={Users} index={0} />
        <StatCard label="Registrations" value={event.registered} delta={`${fill}% of ${event.seats} seats`} icon={CalendarDays} tone="success" index={1} />
        <StatCard label="Certificates" value={meta.certificates} delta="Issued automatically" icon={Award} tone="warning" index={2} />
        <StatCard label="Feedback responses" value={meta.feedbackResponses} delta={`${meta.feedbackScore.toFixed(1)} / 5 average`} icon={Star} tone="danger" index={3} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <SectionCard title="About this event">
            <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
                <CalendarDays className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <dt className="text-xs text-muted-foreground">Schedule</dt>
                  <dd className="text-sm font-medium">
                    {format(new Date(event.start), "dd MMM yyyy, h:mm a")} → {format(new Date(event.end), "dd MMM yyyy, h:mm a")}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <dt className="text-xs text-muted-foreground">Venue</dt>
                  <dd className="text-sm font-medium">{event.venue}</dd>
                </div>
              </div>
            </dl>
          </SectionCard>

          <SectionCard title="Registration statistics" description="Frozen at the moment of automatic archival">
            <div className="space-y-5">
              {[
                { label: "Seats filled", value: fill, note: `${event.registered} / ${event.seats}` },
                { label: "Attendance rate", value: rate, note: `${attended} checked in` },
                {
                  label: "Certificate coverage",
                  value: attended ? Math.round((meta.certificates / Math.max(1, attended)) * 100) : 0,
                  note: `${meta.certificates} issued`,
                },
              ].map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-medium">{s.note} · {s.value}%</span>
                  </div>
                  <Progress value={Math.min(100, s.value)} className="h-1.5" />
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Gallery"
            description={`${meta.gallery} photos preserved with the archive`}
            action={
              <Button size="sm" variant="ghost" className="rounded-xl" onClick={() => toast.success("Gallery downloaded as ZIP")}>
                <Images className="mr-1.5 size-3.5" /> Download
              </Button>
            }
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {galleryCaptions.map((c) => (
                <figure key={c} className="overflow-hidden rounded-2xl border border-border">
                  <img src={event.banner} alt={`${event.title} — ${c}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <figcaption className="px-3 py-2 text-xs text-muted-foreground">{c}</figcaption>
                </figure>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard title="Lifecycle timeline">
            <LifecycleFlow current="Archived" />
          </SectionCard>

          <SectionCard title="Feedback">
            <div className="rounded-2xl bg-secondary p-5 text-center">
              <p className="text-4xl font-semibold tabular-nums">{meta.feedbackScore.toFixed(1)}</p>
              <div className="mt-1 flex justify-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={i <= Math.round(meta.feedbackScore) ? "size-4 fill-warning text-warning" : "size-4 text-muted-foreground"} />
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{meta.feedbackResponses} responses collected</p>
            </div>
          </SectionCard>

          <SectionCard title="Organizer details">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                {event.organizerAvatar}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{event.organizer}</p>
                <p className="truncate text-xs text-muted-foreground">{event.club}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Building2 className="size-4" /> {event.department}</li>
              <li className="flex items-center gap-2"><Mail className="size-4" /> {event.contact.email}</li>
              <li className="flex items-center gap-2"><Phone className="size-4" /> {event.contact.phone}</li>
            </ul>
            <Button variant="outline" className="mt-4 w-full rounded-xl bg-card" onClick={() => toast.success("Attendance sheet downloaded")}>
              <Download className="mr-2 size-4" /> Download attendance
            </Button>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
