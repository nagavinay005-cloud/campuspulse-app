import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid, ListFilter, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader, EmptyState } from "@/components/app/layout-bits";
import { EventCard } from "@/components/app/event-card";
import { useFirestoreEvents } from "@/hooks/useFirestoreEvents";
import { useAuth } from "@/context/AuthContext";
import { categories, departments } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/events/")({
  head: () => ({
    meta: [
      { title: "Event Feed — CampusPulse" },
      { name: "description", content: "Search, filter and register for every active event across campus." },
      { property: "og:title", content: "Event Feed — CampusPulse" },
      { property: "og:description", content: "Every live and upcoming campus event in one feed." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || "",
  }),
  component: EventFeed,
});

function EventFeed() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q || "");
  const [category, setCategory] = useState("all");
  const [department, setDepartment] = useState("all");
  const [dateFilter, setDateFilter] = useState("all"); // "all", "today", "week", "month"
  const [modeFilter, setModeFilter] = useState("all"); // "all", "Online", "Offline"
  const [sort, setSort] = useState("soonest");
  const [freeOnly, setFreeOnly] = useState(false);
  const [certOnly, setCertOnly] = useState(false);
  const [seats, setSeats] = useState([0]);

  const { userProfile } = useAuth();
  const studentId = userProfile?.uid || "std-001";
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);

  // 1. Fetch live published upcoming events from Firestore with pagination
  const { events: fsEvents, loading, loadingMore, hasMore, loadMore } = useFirestoreEvents(9);

  // Sync query when URL search param changes (e.g., from global search bar)
  useEffect(() => {
    if (q) setQuery(q);
  }, [q]);

  // Sync registered event IDs from backend database
  useEffect(() => {
    if (studentId && !studentId.startsWith("std-")) {
      const token = localStorage.getItem("campuspulse_jwt_token");
      const headers: Record<string, string> = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      import("@/services/apiClient").then(({ API_BASE_URL }) => {
        fetch(`${API_BASE_URL}/students/me/registrations`, { headers })
          .then((res) => res.json())
          .then((data) => {
            if (data.success && data.data) {
              setRegisteredIds(data.data.filter((r: any) => r.status !== "Cancelled").map((r: any) => String(r.event_id)));
            }
          })
          .catch((err) => console.warn("Failed to fetch registrations for feed check:", err));
      });
    }
  }, [studentId]);

  const results = useMemo(() => {
    let list = fsEvents.filter((e) => {
      // 1. Search Query matches title, organizer/club, or category
      const qStr = query.trim().toLowerCase();
      const matchQ =
        !qStr ||
        e.title.toLowerCase().includes(qStr) ||
        e.summary.toLowerCase().includes(qStr) ||
        e.description.toLowerCase().includes(qStr) ||
        e.organizer.toLowerCase().includes(qStr) ||
        e.club.toLowerCase().includes(qStr) ||
        e.department.toLowerCase().includes(qStr) ||
        e.category.toLowerCase().includes(qStr) ||
        e.tags.some((t) => t.toLowerCase().includes(qStr));

      // 2. Department filter
      const matchDept = department === "all" || e.department === department;

      // 3. Category filter
      const matchCat = category === "all" || e.category === category;

      // 4. Mode Filter (Online / Offline)
      const isOnline = e.tags.includes("Online") || e.venue.toLowerCase().includes("online") || e.venue.toLowerCase().includes("meet") || e.venue.toLowerCase().includes("zoom");
      const matchMode =
        modeFilter === "all" ||
        (modeFilter === "Online" && isOnline) ||
        (modeFilter === "Offline" && !isOnline);

      // 5. Date Filter
      let matchDate = true;
      if (dateFilter !== "all") {
        const eventDate = new Date(e.start);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (dateFilter === "today") {
          const check = new Date(e.start);
          matchDate = check.toDateString() === today.toDateString();
        } else if (dateFilter === "week") {
          const nextWeek = new Date(today.getTime() + 7 * 86400000);
          matchDate = eventDate >= today && eventDate <= nextWeek;
        } else if (dateFilter === "month") {
          const nextMonth = new Date(today.getTime() + 30 * 86400000);
          matchDate = eventDate >= today && eventDate <= nextMonth;
        }
      }

      // 6. Seats Capacity & free/certificate options
      const matchSeats = e.seats - e.registered >= seats[0];
      const matchFree = !freeOnly || e.fee === 0;
      const matchCert = !certOnly || e.certificate;

      return matchQ && matchDept && matchCat && matchMode && matchDate && matchSeats && matchFree && matchCert;
    });

    list = [...list].sort((a, b) =>
      sort === "soonest"
        ? +new Date(a.start) - +new Date(b.start)
        : sort === "popular"
          ? b.registered - a.registered
          : a.title.localeCompare(b.title),
    );
    return list;
  }, [fsEvents, query, category, department, modeFilter, dateFilter, sort, freeOnly, certOnly, seats]);

  const featured = results.filter((e) => e.featured);

  const filters = (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Department</Label>
        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="all">All departments</SelectItem>
            {departments.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Date Range</Label>
        <Select value={dateFilter} onValueChange={setDateFilter}>
          <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="all">All upcoming</SelectItem>
            <SelectItem value="today">Starting Today</SelectItem>
            <SelectItem value="week">Starting This Week</SelectItem>
            <SelectItem value="month">Starting This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Event Mode</Label>
        <Select value={modeFilter} onValueChange={setModeFilter}>
          <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="all">All Modes</SelectItem>
            <SelectItem value="Online">Online Mode</SelectItem>
            <SelectItem value="Offline">Offline Mode</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Sort by</Label>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectItem value="soonest">Starting soonest</SelectItem>
            <SelectItem value="popular">Most registered</SelectItem>
            <SelectItem value="az">Title A–Z</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-3">
        <Label>Minimum seats left: {seats[0]}</Label>
        <Slider value={seats} onValueChange={setSeats} max={200} step={10} />
      </div>
      <div className="space-y-3 rounded-2xl border border-border p-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="free" className="font-normal">Free events only</Label>
          <Switch id="free" checked={freeOnly} onCheckedChange={setFreeOnly} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="cert" className="font-normal">Certificate provided</Label>
          <Switch id="cert" checked={certOnly} onCheckedChange={setCertOnly} />
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full rounded-xl bg-card"
        onClick={() => {
          setCategory("all");
          setDepartment("all");
          setDateFilter("all");
          setModeFilter("all");
          setFreeOnly(false);
          setCertOnly(false);
          setSeats([0]);
          setQuery("");
        }}
      >
        Reset filters
      </Button>
    </div>
  );

  return (
    <div>
      <PageHeader
        title="Event Feed"
        subtitle={`${results.length} active events across campus right now`}
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student", to: "/dashboard" }, { label: "Event Feed" }]}
        actions={
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-xl bg-card lg:hidden">
                <SlidersHorizontal className="mr-2 size-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] overflow-y-auto">
              <SheetHeader><SheetTitle>Advanced filters</SheetTitle></SheetHeader>
              <div className="mt-6 px-4 pb-8">{filters}</div>
            </SheetContent>
          </Sheet>
        }
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCategory("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            category === "all" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-secondary",
          )}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-secondary",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="card-surface sticky top-24 p-5">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold">
              <ListFilter className="size-4" /> Advanced filters
            </p>
            {filters}
          </div>
        </aside>

        <div>
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, club, venue or tag…"
              className="h-12 rounded-2xl bg-card pl-10"
            />
          </div>

          {featured.length > 0 && (
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-primary" /> Featured events
                <Badge variant="secondary" className="rounded-full">{featured.length}</Badge>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {featured.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
              </div>
            </div>
          )}

          <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <LayoutGrid className="size-4 text-muted-foreground" /> All active events
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="card-surface p-4">
                  <Skeleton className="h-40 w-full rounded-2xl" />
                  <Skeleton className="mt-4 h-4 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : results.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No events match those filters"
              description="Try widening the category, clearing the seat threshold, or searching a different keyword."
              action={<Button className="rounded-xl" onClick={() => { setQuery(""); setCategory("all"); setDepartment("all"); setSeats([0]); }}>Clear all filters</Button>}
            />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {results.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
