import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Award,
  Bell,
  CalendarCheck,
  Archive,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/app/event-card";
import { LifecycleFlow } from "@/components/app/lifecycle-flow";
import { AnimatedCounter } from "@/components/app/primitives";
import { activeEvents } from "@/data/mock";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import heroImage from "@/assets/banner-hackathon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusPulse — One Campus. Every Event." },
      {
        name: "description",
        content:
          "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform.",
      },
      { property: "og:title", content: "CampusPulse — One Campus. Every Event." },
      {
        property: "og:description",
        content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Search, title: "Unified discovery", body: "One searchable feed replaces scattered WhatsApp groups, mailers and notice boards." },
  { icon: Bell, title: "Smart reminders", body: "Deadline, venue-change and check-in alerts pushed the moment something changes." },
  { icon: QrCode, title: "QR check-in", body: "Organizers scan, attendance locks itself, and certificates generate instantly." },
  { icon: Archive, title: "Auto archiving", body: "The second an event ends it leaves the feed and lands in a searchable archive." },
  { icon: ShieldCheck, title: "Approval workflow", body: "Draft to published with department and admin gates, clash checks and audit trails." },
  { icon: Award, title: "Certificates & credits", body: "Verified participation certificates that students can download forever." },
];

function Landing() {
  const { events: liveEvents } = useLiveEvents({ status: "Published" });
  // Use live published events if available, fall back to mock
  const allEvents = liveEvents.length > 0 ? liveEvents : activeEvents();
  const featured = allEvents.filter((e) => e.featured).slice(0, 3);
  // If no featured events, show first 3
  const displayEvents = featured.length > 0 ? featured : allEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.jpg" alt="CampusPulse Logo" className="size-9 rounded-xl object-cover shadow-glow" />
            <span className="text-base font-semibold tracking-tight">CampusPulse</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#events" className="transition-colors hover:text-foreground">Events</a>
            <a href="#lifecycle" className="transition-colors hover:text-foreground">Lifecycle</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" className="rounded-xl">Sign in</Button>
            </Link>
            <Link to="/login">
              <Button className="rounded-xl">Open app</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="hero-gradient border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="rounded-full border-primary/20 bg-card px-3 py-1.5 text-xs font-medium">
              <Sparkles className="mr-1.5 size-3.5 text-primary" />
              Built for 12,000+ students across 8 departments
            </Badge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              One Campus.
              <br />
              Every Event.
              <br />
              <span className="text-gradient">Never miss an announcement.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Announcements live in five different places today. CampusPulse centralizes discovery, registration,
              reminders, attendance and certificates into a single campus operating system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/login">
                <Button size="lg" className="rounded-xl">
                  Explore student portal <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="rounded-xl bg-card">
                  See staff portal
                </Button>
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { label: "Events hosted", value: 486 },
                { label: "Registrations", value: 24310 },
                { label: "Certificates issued", value: 9820 },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    <AnimatedCounter value={s.value} />
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="card-surface overflow-hidden p-2 shadow-lift">
              <img
                src={heroImage}
                alt="Students collaborating at a campus hackathon organized through CampusPulse"
                width={1280}
                height={720}
                className="w-full rounded-[1rem] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card-surface absolute -bottom-6 -left-4 hidden w-60 p-4 shadow-lift sm:block"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-success">
                <CalendarCheck className="size-4" /> Registration confirmed
              </div>
              <p className="mt-2 text-sm font-semibold leading-snug">HackFusion 2026</p>
              <p className="text-xs text-muted-foreground">Seat 349 of 400 · Innovation Hall</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="card-surface absolute -right-4 -top-6 hidden w-52 p-4 shadow-lift sm:block"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-warning">
                <Users className="size-4" /> Live attendance
              </div>
              <p className="mt-2 text-2xl font-semibold">1,140</p>
              <p className="text-xs text-muted-foreground">checked in via QR today</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything a campus needs, in one place</h2>
          <p className="mt-3 text-muted-foreground">
            Three connected workspaces — students discover, organizers run, administrators govern.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="card-surface lift-on-hover p-6"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="events" className="border-y border-border bg-card/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured this week</h2>
              <p className="mt-3 text-muted-foreground">Live from the campus feed, updated the moment organizers publish.</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="rounded-xl bg-card">Browse all</Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayEvents.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="lifecycle" className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A lifecycle that closes itself</h2>
          <p className="mt-3 text-muted-foreground">
            Every event walks the same governed path. The final step is automatic: once the scheduled end time passes,
            CampusPulse pulls the event off the active feed, freezes registrations, and files it into the archive with
            its attendance summary and certificate status intact.
          </p>
          <div className="card-surface mt-8 space-y-3 p-6">
            <p className="text-sm font-semibold">Auto-expiry rules</p>
            {[
              "Removed from active feed at end datetime",
              "Registrations permanently closed",
              "Attendance summary preserved",
              "Certificates remain downloadable",
              "Archived badge applied everywhere",
            ].map((r) => (
              <p key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" /> {r}
              </p>
            ))}
            <Link to="/archive" className="inline-block pt-2">
              <Button variant="outline" className="rounded-xl">See archived events</Button>
            </Link>
          </div>
        </div>
        <div className="card-surface p-6 sm:p-8">
          <LifecycleFlow current="Live" />
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <img src="/logo.jpg" alt="CampusPulse Logo" className="size-8 rounded-lg object-cover" />
            <span className="text-sm font-semibold">CampusPulse</span>
          </div>
          <p className="text-xs text-muted-foreground">One Campus. Every Event. Never miss an announcement.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link to="/login" className="hover:text-foreground">Sign in</Link>
            <Link to="/events" className="hover:text-foreground">Events</Link>
            <Link to="/admin" className="hover:text-foreground">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
