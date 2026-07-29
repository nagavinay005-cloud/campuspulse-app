import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Archive,
  ArrowUpDown,
  Award,
  BarChart3,
  BookMarked,
  Building2,
  Calendar,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Download,
  Eye,
  FileCheck,
  FileEdit,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderArchive,
  Globe,
  Grid,
  Hourglass,
  Layers,
  LayoutGrid,
  List,
  ListChecks,
  Lock,
  MapPin,
  Megaphone,
  MoreHorizontal,
  Pencil,
  PlusCircle,
  QrCode,
  Radio,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  ShieldAlert,
  Sparkles,
  Table as TableIcon,
  Trash2,
  TrendingUp,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EmptyState, PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import {
  archivedEvents,
  categories,
  departments,
  events as mockEvents,
  isExpired,
  resolveStatus,
  type CampusEvent,
  type EventCategory,
  type EventStatus,
} from "@/data/mock";
import { archiveQueue, getArchiveMeta } from "@/data/archive";
import { subscribeEvents, type EventDocument } from "@/lib/firestore";
import { useLiveEvents } from "@/hooks/useLiveEvents";
import { cn } from "@/lib/utils";

/** Helper to convert "10:00 AM" → "10:00" or "02:30 PM" → "14:30" for Date parsing */
function convertTimeTo24hr(time12: string): string {
  const match = time12.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return "10:00";
  let [, hStr, min, period] = match;
  let h = parseInt(hStr, 10);
  if (period.toUpperCase() === "PM" && h !== 12) h += 12;
  if (period.toUpperCase() === "AM" && h === 12) h = 0;
  return `${h.toString().padStart(2, "0")}:${min}`;
}

export const Route = createFileRoute("/_app/organizer/events")({
  head: () => ({
    meta: [
      { title: "Manage Events — CampusPulse" },
      { name: "description", content: "Manage, monitor, publish, archive, and analyze all created events." },
      { property: "og:title", content: "Manage Events — CampusPulse" },
      { property: "og:description", content: "Your club's event command and operations center." },
    ],
  }),
  component: ManageEvents,
});

type ViewMode = "grid" | "table" | "timeline";

export function ManageEvents() {
  // Working events state (allows local mutations like publish, archive, delete, duplicate)
  const { events: liveEvents } = useLiveEvents();
  const [eventsList, setEventsList] = useState<CampusEvent[]>(mockEvents);

  // Sync live events into local state when they load
  useEffect(() => {
    if (liveEvents.length > 0) {
      const liveIds = new Set(liveEvents.map((e) => e.id));
      const uniqueMock = mockEvents.filter((e) => !liveIds.has(e.id));
      setEventsList([...liveEvents, ...uniqueMock]);
    }
  }, [liveEvents]);

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState<string>("All");
  const [catFilter, setCatFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [modeFilter, setModeFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Newest");

  // View Mode State
  const [viewMode, setViewMode] = useState<ViewMode>("table");

  // Bulk Selection State
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Confirmation Modals State
  const [activeModal, setActiveModal] = useState<{
    type: "archive" | "delete" | "publish" | "restore" | null;
    event: CampusEvent | null;
  }>({ type: null, event: null });

  // Calculate Overview Counts
  const counts = useMemo(() => {
    const total = eventsList.length;
    const draft = eventsList.filter((e) => e.status === "Draft").length;
    const pending = eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length;
    const published = eventsList.filter((e) => e.status === "Published").length;
    const upcoming = eventsList.filter((e) => resolveStatus(e) === "Upcoming").length;
    const live = eventsList.filter((e) => resolveStatus(e) === "Live").length;
    const completed = eventsList.filter((e) => resolveStatus(e) === "Completed").length;
    const archived = eventsList.filter((e) => resolveStatus(e) === "Archived" || isExpired(e)).length;

    return { total, draft, pending, published, upcoming, live, completed, archived };
  }, [eventsList]);

  // Filtered & Sorted Active Events
  const filteredEvents = useMemo(() => {
    return eventsList
      .filter((e) => {
        const resolved = resolveStatus(e);

        // Search match
        const matchesSearch =
          !searchTerm.trim() ||
          e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.club.toLowerCase().includes(searchTerm.toLowerCase());

        // Department filter
        const matchesDept = deptFilter === "All" || e.department === deptFilter;

        // Category filter
        const matchesCat = catFilter === "All" || e.category === catFilter;

        // Status filter
        const matchesStatus = statusFilter === "All" || resolved === statusFilter || e.status === statusFilter;

        // Mode filter
        const matchesMode =
          modeFilter === "All" ||
          (modeFilter === "Online" && e.venue.toLowerCase().includes("virtual")) ||
          (modeFilter === "Offline" && !e.venue.toLowerCase().includes("virtual"));

        return matchesSearch && matchesDept && matchesCat && matchesStatus && matchesMode;
      })
      .sort((a, b) => {
        if (sortBy === "Newest") return new Date(b.start).getTime() - new Date(a.start).getTime();
        if (sortBy === "Oldest") return new Date(a.start).getTime() - new Date(b.start).getTime();
        if (sortBy === "Most Registrations") return b.registered - a.registered;
        if (sortBy === "Upcoming") return new Date(a.start).getTime() - new Date(b.start).getTime();
        return 0;
      });
  }, [eventsList, searchTerm, deptFilter, catFilter, statusFilter, modeFilter, sortBy]);

  // Archived events subset
  const archivedEventsSubset = useMemo(() => {
    return eventsList.filter((e) => isExpired(e) || e.status === "Archived");
  }, [eventsList]);

  // Handle Selection Toggles
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredEvents.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredEvents.map((e) => e.id));
    }
  };

  const toggleSelectId = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((x) => x !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Action Handlers
  const handleExecuteAction = async () => {
    const { type, event } = activeModal;
    if (!event || !type) return;

    const numericId = parseInt(event.id, 10);
    const isMock = isNaN(numericId);

    if (!isMock) {
      try {
        const { API_BASE_URL } = await import("@/services/apiClient");
        const token = localStorage.getItem("campuspulse_jwt_token");
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        let url = `${API_BASE_URL}/events/${numericId}`;
        let method = "PATCH";

        if (type === "publish") {
          url += "/publish";
        } else if (type === "archive") {
          url += "/archive";
        } else if (type === "restore") {
          url += "/restore";
        } else if (type === "delete") {
          method = "DELETE";
        }

        const res = await fetch(url, { method, headers });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Failed to update event state on backend");
        }
      } catch (err: any) {
        toast.error(`Backend Error: ${err.message}`);
        setActiveModal({ type: null, event: null });
        return;
      }
    }

    if (type === "publish") {
      setEventsList((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, status: "Published" } : e)),
      );
      toast.success(`Published "${event.title}" to the public campus feed.`);
    }

    if (type === "archive") {
      setEventsList((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, status: "Archived" } : e)),
      );
      toast.success(`Archived "${event.title}". Moved to historical archive.`);
    }

    if (type === "restore") {
      setEventsList((prev) =>
        prev.map((e) => (e.id === event.id ? { ...e, status: "Upcoming" } : e)),
      );
      toast.success(`Restored "${event.title}" to active upcoming events.`);
    }

    if (type === "delete") {
      setEventsList((prev) => prev.filter((e) => e.id !== event.id));
      toast.success(`Deleted "${event.title}".`);
    }

    setActiveModal({ type: null, event: null });
  };

  const handleDuplicate = (event: CampusEvent) => {
    const duplicated: CampusEvent = {
      ...event,
      id: `evt-${Date.now()}`,
      title: `${event.title} (Copy)`,
      status: "Draft",
      registered: 0,
    };
    setEventsList([duplicated, ...eventsList]);
    toast.success(`Duplicated "${event.title}" as a new Draft.`);
  };

  const handleExportSingle = (event: CampusEvent) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(event, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${event.title.replace(/\s+/g, "_")}_export.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success(`Exported data for "${event.title}".`);
  };

  // Bulk Actions
  const handleBulkPublish = () => {
    setEventsList((prev) =>
      prev.map((e) => (selectedIds.includes(e.id) ? { ...e, status: "Published" } : e)),
    );
    toast.success(`Published ${selectedIds.length} selected events.`);
    setSelectedIds([]);
  };

  const handleBulkArchive = () => {
    setEventsList((prev) =>
      prev.map((e) => (selectedIds.includes(e.id) ? { ...e, status: "Archived" } : e)),
    );
    toast.success(`Archived ${selectedIds.length} selected events.`);
    setSelectedIds([]);
  };

  const handleBulkDelete = () => {
    setEventsList((prev) => prev.filter((e) => !selectedIds.includes(e.id)));
    toast.success(`Deleted ${selectedIds.length} selected events.`);
    setSelectedIds([]);
  };

  const handleBulkExport = () => {
    const selectedData = eventsList.filter((e) => selectedIds.includes(e.id));
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `campuspulse_bulk_events_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success(`Exported ${selectedIds.length} selected events.`);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setDeptFilter("All");
    setCatFilter("All");
    setStatusFilter("All");
    setModeFilter("All");
    setSortBy("Newest");
  };

  return (
    <div className="space-y-8 pb-20">
      {/* 1. PAGE HEADER */}
      <PageHeader
        title="Manage Events"
        subtitle="Manage, monitor, publish, archive, and analyze all created events."
        breadcrumb={[
          { label: "CampusPulse", to: "/" },
          { label: "Organizer", to: "/organizer" },
          { label: "Manage Events" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              className="rounded-xl bg-card shadow-sm"
              onClick={() => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(eventsList, null, 2));
                const anchor = document.createElement("a");
                anchor.setAttribute("href", dataStr);
                anchor.setAttribute("download", `all_events_export.json`);
                anchor.click();
                toast.success("Exported full events database.");
              }}
            >
              <Download className="mr-2 size-4 text-muted-foreground" /> Export All
            </Button>
            <Link to="/organizer/create">
              <Button className="rounded-xl shadow-glow">
                <PlusCircle className="mr-2 size-4" /> Create Event
              </Button>
            </Link>
          </div>
        }
      />

      {/* 2. OVERVIEW CARDS (8 Summary Metrics) */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Events Overview Statistics
          </h2>
          <Badge variant="outline" className="rounded-full text-[10px]">
            {eventsList.length} Total Registered Events
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <StatCard label="Total Events" value={counts.total} icon={Layers} index={0} />
          <StatCard label="Draft" value={counts.draft} icon={FileEdit} tone="warning" index={1} />
          <StatCard label="Pending" value={counts.pending} icon={Hourglass} tone="warning" index={2} />
          <StatCard label="Published" value={counts.published} icon={Megaphone} tone="primary" index={3} />
          <StatCard label="Upcoming" value={counts.upcoming} icon={CalendarClock} tone="primary" index={4} />
          <StatCard label="Live" value={counts.live} icon={Radio} tone="danger" index={5} />
          <StatCard label="Completed" value={counts.completed} icon={CheckCircle2} tone="success" index={6} />
          <StatCard label="Archived" value={counts.archived} icon={FolderArchive} tone="warning" index={7} />
        </div>
      </div>

      {/* 3. SEARCH, FILTERS & VIEW SWITCHER */}
      <SectionCard title="Events Controls & Filters" description="Search, filter, sort, and switch layout view modes">
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Global Search */}
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by event title, category, department, venue..."
                className="rounded-xl pl-9 bg-card"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* View Switcher */}
            <div className="flex items-center justify-end gap-1.5 sm:col-span-2">
              <span className="mr-2 text-xs font-semibold text-muted-foreground">View Layout:</span>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-xl text-xs"
              >
                <LayoutGrid className="mr-1.5 size-3.5" /> Grid
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="rounded-xl text-xs"
              >
                <TableIcon className="mr-1.5 size-3.5" /> Table
              </Button>
              <Button
                variant={viewMode === "timeline" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("timeline")}
                className="rounded-xl text-xs"
              >
                <Clock className="mr-1.5 size-3.5" /> Timeline
              </Button>
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Department</Label>
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Departments</SelectItem>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Category</Label>
              <Select value={catFilter} onValueChange={setCatFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Categories</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Statuses</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Pending Approval">Pending Approval</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                  <SelectItem value="Upcoming">Upcoming</SelectItem>
                  <SelectItem value="Live">Live</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Mode</Label>
              <Select value={modeFilter} onValueChange={setModeFilter}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="All">All Modes</SelectItem>
                  <SelectItem value="Offline">Offline</SelectItem>
                  <SelectItem value="Online">Online</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-[11px] font-semibold text-muted-foreground mb-1 block">Sort By</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 rounded-xl bg-card text-xs"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="Newest">Newest First</SelectItem>
                  <SelectItem value="Oldest">Oldest First</SelectItem>
                  <SelectItem value="Most Registrations">Most Signups</SelectItem>
                  <SelectItem value="Upcoming">Soonest Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-9 w-full rounded-xl text-xs text-muted-foreground hover:text-foreground">
                <RotateCcw className="mr-1.5 size-3.5" /> Reset Filters
              </Button>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* 4. BULK ACTION BAR (When items selected) */}
      {selectedIds.length > 0 && (
        <div className="sticky top-20 z-30 flex items-center justify-between rounded-2xl border border-primary bg-primary-soft/90 px-5 py-3 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <CheckCircle2 className="size-4" />
            <span>{selectedIds.length} Event{selectedIds.length > 1 ? "s" : ""} Selected</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" variant="outline" className="rounded-xl bg-card text-xs" onClick={handleBulkPublish}>
              <Megaphone className="mr-1.5 size-3.5 text-primary" /> Bulk Publish
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl bg-card text-xs" onClick={handleBulkArchive}>
              <Archive className="mr-1.5 size-3.5 text-warning" /> Bulk Archive
            </Button>
            <Button size="sm" variant="outline" className="rounded-xl bg-card text-xs" onClick={handleBulkExport}>
              <Download className="mr-1.5 size-3.5 text-muted-foreground" /> Bulk Export
            </Button>
            <Button size="sm" variant="destructive" className="rounded-xl text-xs" onClick={handleBulkDelete}>
              <Trash2 className="mr-1.5 size-3.5" /> Bulk Delete
            </Button>
            <Button size="sm" variant="ghost" className="rounded-xl text-xs" onClick={() => setSelectedIds([])}>
              Clear
            </Button>
          </div>
        </div>
      )}

      {/* 5. MAIN VIEWS (GRID / TABLE / TIMELINE) */}
      <SectionCard
        title={`Events Directory (${filteredEvents.length})`}
        description={`Showing ${filteredEvents.length} of ${eventsList.length} events`}
        action={
          <div className="flex items-center gap-2">
            <Checkbox
              checked={filteredEvents.length > 0 && selectedIds.length === filteredEvents.length}
              onCheckedChange={toggleSelectAll}
              id="select-all"
            />
            <label htmlFor="select-all" className="text-xs font-semibold text-muted-foreground cursor-pointer select-none">
              Select All ({filteredEvents.length})
            </label>
          </div>
        }
      >
        {filteredEvents.length === 0 ? (
          <EmptyState
            icon={Search}
            title="No events match your filters"
            description="Try clearing your search terms or selecting different filters."
            action={
              <Button variant="outline" onClick={resetFilters} className="rounded-xl bg-card">
                Reset Filters
              </Button>
            }
          />
        ) : (
          <>
            {/* GRID VIEW */}
            {viewMode === "grid" && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((e) => {
                  const percent = Math.round((e.registered / e.seats) * 100);
                  const isSelected = selectedIds.includes(e.id);
                  const status = resolveStatus(e);

                  return (
                    <div
                      key={e.id}
                      className={cn(
                        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-md",
                        isSelected ? "border-primary ring-2 ring-primary/20" : "border-border",
                      )}
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                        <img src={e.banner} alt={e.title} className="size-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute left-3 top-3 flex gap-1.5">
                          <Checkbox checked={isSelected} onCheckedChange={() => toggleSelectId(e.id)} className="bg-background/80" />
                          <Badge variant="default" className="rounded-full text-[10px] shadow-sm">
                            {e.category}
                          </Badge>
                        </div>
                        <div className="absolute right-3 top-3">
                          <StatusBadge status={status} />
                        </div>
                      </div>

                      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{e.department} · {e.club}</p>
                          <Link to="/events/$eventId" params={{ eventId: e.id }}>
                            <h3 className="mt-1 font-bold text-foreground text-sm line-clamp-1 hover:underline">{e.title}</h3>
                          </Link>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{e.summary}</p>
                        </div>

                        <div className="space-y-2 pt-2 border-t text-xs">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="size-3.5 text-primary shrink-0" />
                            <span>{format(new Date(e.start), "dd MMM yyyy, h:mm a")}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="size-3.5 text-primary shrink-0" />
                            <span className="truncate">{e.venue}</span>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-muted-foreground">Seats Registered</span>
                              <span className="font-semibold text-foreground">{e.registered} / {e.seats} ({percent}%)</span>
                            </div>
                            <Progress value={percent} className="h-1.5" />
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                            <span className="flex items-center gap-1"><Eye className="size-3" /> 1.2k Views</span>
                            <span className="flex items-center gap-1"><BookMarked className="size-3" /> 142 Saved</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Footer */}
                      <div className="flex items-center justify-between border-t border-border bg-secondary/30 px-4 py-2.5">
                        <Link to="/events/$eventId" params={{ eventId: e.id }}>
                          <Button variant="ghost" size="sm" className="h-7 rounded-lg text-xs">
                            View Event
                          </Button>
                        </Link>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-7 rounded-lg">
                              <MoreHorizontal className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 rounded-2xl">
                            <DropdownMenuLabel>Event Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link to="/events/$eventId" params={{ eventId: e.id }}><Eye className="mr-2 size-4" /> View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link to="/organizer/create"><Pencil className="mr-2 size-4" /> Edit Event</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDuplicate(e)}>
                              <Copy className="mr-2 size-4" /> Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleExportSingle(e)}>
                              <Download className="mr-2 size-4" /> Export Data
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {status !== "Published" && (
                              <DropdownMenuItem onClick={() => setActiveModal({ type: "publish", event: e })}>
                                <Megaphone className="mr-2 size-4 text-primary" /> Publish
                              </DropdownMenuItem>
                            )}
                            {status !== "Archived" ? (
                              <DropdownMenuItem onClick={() => setActiveModal({ type: "archive", event: e })}>
                                <Archive className="mr-2 size-4 text-warning" /> Archive
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem onClick={() => setActiveModal({ type: "restore", event: e })}>
                                <RotateCcw className="mr-2 size-4 text-success" /> Restore
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onClick={() => setActiveModal({ type: "delete", event: e })} className="text-danger">
                              <Trash2 className="mr-2 size-4" /> Delete Event
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TABLE VIEW */}
            {viewMode === "table" && (
              <div className="overflow-x-auto rounded-2xl border border-border bg-card">
                <Table>
                  <TableHeader className="bg-secondary/40">
                    <TableRow>
                      <TableHead className="w-10 text-center">
                        <Checkbox
                          checked={filteredEvents.length > 0 && selectedIds.length === filteredEvents.length}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead className="hidden md:table-cell">Department</TableHead>
                      <TableHead className="hidden lg:table-cell">Venue</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead className="hidden md:table-cell">Registrations</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEvents.map((e) => {
                      const percent = Math.round((e.registered / e.seats) * 100);
                      const isSelected = selectedIds.includes(e.id);
                      const status = resolveStatus(e);

                      return (
                        <TableRow key={e.id} className={cn(isSelected && "bg-primary-soft/30")}>
                          <TableCell className="text-center">
                            <Checkbox checked={isSelected} onCheckedChange={() => toggleSelectId(e.id)} />
                          </TableCell>
                          <TableCell className="max-w-[280px]">
                            <div className="flex items-center gap-3">
                              <img src={e.banner} alt="" className="size-10 rounded-xl object-cover shrink-0 hidden sm:block" />
                              <div className="min-w-0">
                                <Link to="/events/$eventId" params={{ eventId: e.id }} className="font-semibold text-sm hover:text-primary line-clamp-1">
                                  {e.title}
                                </Link>
                                <span className="text-xs text-muted-foreground">{e.category} · {e.club}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-xs text-muted-foreground">{e.department}</TableCell>
                          <TableCell className="hidden lg:table-cell text-xs text-muted-foreground truncate max-w-[140px]">{e.venue}</TableCell>
                          <TableCell className="text-xs font-medium text-foreground whitespace-nowrap">
                            {format(new Date(e.start), "dd MMM yyyy")}
                          </TableCell>
                          <TableCell className="hidden md:table-cell max-w-[140px]">
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px]">
                                <span className="font-semibold">{e.registered}/{e.seats}</span>
                                <span className="text-muted-foreground">{percent}%</span>
                              </div>
                              <Progress value={percent} className="h-1.5" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={status} />
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost" className="size-8 rounded-xl">
                                  <MoreHorizontal className="size-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48 rounded-2xl">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                  <Link to="/events/$eventId" params={{ eventId: e.id }}><Eye className="mr-2 size-4" /> View Details</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link to="/organizer/create"><Pencil className="mr-2 size-4" /> Edit Event</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDuplicate(e)}>
                                  <Copy className="mr-2 size-4" /> Duplicate
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleExportSingle(e)}>
                                  <Download className="mr-2 size-4" /> Export JSON
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {status !== "Published" && (
                                  <DropdownMenuItem onClick={() => setActiveModal({ type: "publish", event: e })}>
                                    <Megaphone className="mr-2 size-4 text-primary" /> Publish
                                  </DropdownMenuItem>
                                )}
                                {status !== "Archived" ? (
                                  <DropdownMenuItem onClick={() => setActiveModal({ type: "archive", event: e })}>
                                    <Archive className="mr-2 size-4 text-warning" /> Archive
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem onClick={() => setActiveModal({ type: "restore", event: e })}>
                                    <RotateCcw className="mr-2 size-4 text-success" /> Restore
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem onClick={() => setActiveModal({ type: "delete", event: e })} className="text-danger">
                                  <Trash2 className="mr-2 size-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}

            {/* TIMELINE VIEW */}
            {viewMode === "timeline" && (
              <div className="relative space-y-6 pl-6 pt-2">
                <span className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
                {filteredEvents.map((e) => {
                  const status = resolveStatus(e);
                  return (
                    <div key={e.id} className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:bg-secondary/40">
                      <span className="absolute -left-6 top-5 size-3.5 rounded-full border-2 border-background bg-primary ring-4 ring-primary/10" />

                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="rounded-lg text-[10px]">
                            {format(new Date(e.start), "dd MMM yyyy, h:mm a")}
                          </Badge>
                          <StatusBadge status={status} />
                        </div>
                        <Link to="/events/$eventId" params={{ eventId: e.id }}>
                          <h4 className="font-bold text-foreground text-sm hover:underline">{e.title}</h4>
                        </Link>
                        <p className="text-xs text-muted-foreground">{e.department} · {e.club} · Organizer: {e.organizer}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Badge variant="secondary" className="rounded-full text-xs">
                          {e.registered} / {e.seats} Seats
                        </Badge>
                        <Link to="/events/$eventId" params={{ eventId: e.id }}>
                          <Button variant="outline" size="sm" className="rounded-xl text-xs bg-card">
                            View Event
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </SectionCard>

      {/* 6. AUTOMATIC ARCHIVE QUEUE PANEL */}
      <SectionCard
        title="Automatic Archive Queue"
        description="Events approaching automatic archival as end datetimes pass"
      >
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <Table>
            <TableHeader className="bg-secondary/40">
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Ends In</TableHead>
                <TableHead>Estimated Archive Time</TableHead>
                <TableHead>Current Status</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {archiveQueue().slice(0, 4).map((q) => (
                <TableRow key={q.event.id}>
                  <TableCell className="font-semibold text-sm">
                    <Link to="/events/$eventId" params={{ eventId: q.event.id }} className="hover:text-primary">
                      {q.event.title}
                    </Link>
                    <p className="text-xs text-muted-foreground">{q.event.department}</p>
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-warning">
                    In {Math.max(1, Math.round(q.endsInMs / 86400000))} days
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {format(new Date(q.estimatedArchive), "dd MMM yyyy, h:mm a")}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={q.status} />
                  </TableCell>
                  <TableCell className="w-36">
                    <Progress value={Math.min(90, Math.round((q.event.registered / q.event.seats) * 100))} className="h-1.5" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SectionCard>

      {/* 7. ARCHIVED EVENTS SECTION */}
      <SectionCard
        title={`Archived Events Record (${archivedEventsSubset.length})`}
        description="Historical events automatically archived upon completion"
        action={
          <Link to="/archive-manager">
            <Button variant="outline" size="sm" className="rounded-xl text-xs bg-card">
              View Archive Manager
            </Button>
          </Link>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archivedEventsSubset.map((e) => {
            const meta = getArchiveMeta(e.id);
            return (
              <div key={e.id} className="rounded-2xl border border-border bg-card p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full text-[10px]">
                    Archived on {format(new Date(meta.archivedAt), "dd MMM yyyy")}
                  </Badge>
                  <StatusBadge status="Archived" />
                </div>

                <div>
                  <h4 className="font-bold text-sm text-foreground line-clamp-1">{e.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{e.department} · {e.club}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-2.5 text-center text-xs">
                  <div>
                    <p className="text-muted-foreground text-[10px]">Attended</p>
                    <p className="font-bold text-foreground">{e.attended ?? e.registered}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px]">Certificates</p>
                    <p className="font-bold text-primary">{meta.certificates}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-[10px]">Rating</p>
                    <p className="font-bold text-success">{meta.feedbackScore} ★</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <Link to="/summary/$eventId" params={{ eventId: e.id }}>
                    <Button variant="ghost" size="sm" className="h-7 text-xs rounded-lg">
                      View Summary
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="h-7 text-xs rounded-lg bg-card" onClick={() => handleDuplicate(e)}>
                    Duplicate
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* CONFIRMATION MODALS */}
      <Dialog open={activeModal.type !== null} onOpenChange={() => setActiveModal({ type: null, event: null })}>
        <DialogContent className="max-w-md rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {activeModal.type === "publish" && "Publish Event"}
              {activeModal.type === "archive" && "Archive Event"}
              {activeModal.type === "restore" && "Restore Event"}
              {activeModal.type === "delete" && "Delete Event"}
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to {activeModal.type} <strong className="text-foreground">"{activeModal.event?.title}"</strong>?
            </DialogDescription>
          </DialogHeader>

          <div className="py-2 text-xs text-muted-foreground">
            {activeModal.type === "publish" && "This event will become immediately visible on the public campus announcement feed."}
            {activeModal.type === "archive" && "This event will be moved out of the active feed into historical archive records."}
            {activeModal.type === "restore" && "This event will be restored back into active upcoming events."}
            {activeModal.type === "delete" && "This action is permanent and will remove event records."}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveModal({ type: null, event: null })} className="rounded-xl">
              Cancel
            </Button>
            <Button
              variant={activeModal.type === "delete" ? "destructive" : "default"}
              onClick={handleExecuteAction}
              className="rounded-xl shadow-sm"
            >
              Confirm {activeModal.type?.toUpperCase()}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
