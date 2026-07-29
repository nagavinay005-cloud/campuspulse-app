import { useState, useRef } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  Award,
  Calendar,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  FileEdit,
  Globe,
  ImagePlus,
  Info,
  Link as LinkIcon,
  MapPin,
  Megaphone,
  Plus,
  PlusCircle,
  RotateCcw,
  Save,
  Send,
  Sparkles,
  Tag,
  Trash2,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PageHeader, SectionCard } from "@/components/app/layout-bits";
import { StatusBadge } from "@/components/app/primitives";
import { categories, clubs, departments, type EventCategory } from "@/data/mock";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import defaultBanner from "@/assets/banner-hackathon.jpg";
import workshopBanner from "@/assets/banner-workshop.jpg";
import culturalBanner from "@/assets/banner-cultural.jpg";
import sportsBanner from "@/assets/banner-sports.jpg";

export const Route = createFileRoute("/_app/organizer/create")({
  head: () => ({
    meta: [
      { title: "Create Event — CampusPulse" },
      { name: "description", content: "Multi-step wizard to publish a campus event announcement with real-time live preview." },
      { property: "og:title", content: "Create Event — CampusPulse" },
      { property: "og:description", content: "Publish a campus event through a guided wizard." },
    ],
  }),
  component: CreateEvent,
});

const STEPS = [
  "Basic Information",
  "Schedule & Mode",
  "Registration Rules",
  "Media & Assets",
  "Speakers & Hosts",
  "Contact Info",
  "Tags & Settings",
];

const EVENT_TYPES = [
  "Workshop",
  "Hackathon",
  "Seminar",
  "Conference",
  "Placement Drive",
  "Sports",
  "Cultural",
  "Competition",
];

const PRESET_TAGS = [
  "AI",
  "Cloud",
  "Coding",
  "Innovation",
  "Workshop",
  "Cyber Security",
  "Placement",
  "Leadership",
];

interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  bio: string;
  linkedin: string;
  avatar?: string;
}

export function CreateEvent() {
  const navigate = useNavigate();
  const { userProfile } = useAuth();

  // Wizard state
  const [step, setStep] = useState(0);

  // Step 1: Basic Information
  const [title, setTitle] = useState("AI Builders Summit & Hackathon 2026");
  const [summary, setSummary] = useState("A 24-hour national event for building and deploying AI agents and LLM applications.");
  const [description, setDescription] = useState("Join 300+ student developers, mentors from top tech companies, and AI researchers for a full day of hands-on workshops, keynote sessions, and hackathon challenges. Workstations, meals, and mentorship provided on site.");
  const [category, setCategory] = useState<EventCategory>("Technical");
  const [department, setDepartment] = useState("Computer Science");
  const [club, setClub] = useState("Codecraft Club");
  const [eventType, setEventType] = useState("Hackathon");

  // Step 2: Schedule
  const [startDate, setStartDate] = useState("2026-08-15");
  const [startTime, setStartTime] = useState("09:00");
  const [endDate, setEndDate] = useState("2026-08-16");
  const [endTime, setEndTime] = useState("18:00");
  const [mode, setMode] = useState<"Offline" | "Online" | "Hybrid">("Offline");
  const [venue, setVenue] = useState("Innovation Hall, Block C");
  const [building, setBuilding] = useState("Block C - Tech Complex");
  const [room, setRoom] = useState("Hall 302");
  const [meetingLink, setMeetingLink] = useState("https://meet.campuspulse.edu/ai-summit-2026");

  // Step 3: Registration
  const [regDeadline, setRegDeadline] = useState("2026-08-10");
  const [seats, setSeats] = useState<number>(300);
  const [fee, setFee] = useState<number>(0);
  const [certificate, setCertificate] = useState(true);
  const [attendanceRequired, setAttendanceRequired] = useState(true);
  const [allowWaitlist, setAllowWaitlist] = useState(true);
  const [buttonText, setButtonText] = useState("Register Now");

  // Step 4: Media
  const [selectedBanner, setSelectedBanner] = useState<string>(defaultBanner);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([workshopBanner, culturalBanner]);

  // Device File Picker Input Refs & State
  const bannerInputRef = useRef<HTMLInputElement>(null);
  const posterInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  const [customBannerFile, setCustomBannerFile] = useState<File | null>(null);
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [isDraggingBanner, setIsDraggingBanner] = useState(false);

  const handleBannerFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file (JPG, PNG, WEBP).");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Banner image file size must be less than 5MB.");
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setSelectedBanner(previewUrl);
    setCustomBannerFile(file);
    toast.success(`Loaded custom banner "${file.name}" from device!`);
  };

  const handleBannerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleBannerFileSelect(e.target.files[0]);
    }
  };

  const handlePosterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file for event poster.");
        return;
      }
      const previewUrl = URL.createObjectURL(file);
      setPosterUrl(previewUrl);
      setPosterFile(file);
      toast.success(`Attached poster "${file.name}" from device!`);
    }
  };

  const handleGalleryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newUrls: string[] = [];
      Array.from(e.target.files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          newUrls.push(URL.createObjectURL(file));
        }
      });
      setGalleryImages((prev) => [...prev, ...newUrls]);
      toast.success(`Added ${newUrls.length} image(s) from device to gallery!`);
    }
  };

  // Step 5: Speakers
  const [speakers, setSpeakers] = useState<Speaker[]>([
    {
      id: "sp-1",
      name: "Dr. Ananya Iyer",
      designation: "Principal AI Scientist",
      organization: "Google DeepMind",
      bio: "Leading research on agentic systems and multi-modal models.",
      linkedin: "https://linkedin.com/in/ananya-iyer",
    },
  ]);

  // Step 6: Contact
  const [organizerName, setOrganizerName] = useState("Codecraft Executive Desk");
  const [organizerEmail, setOrganizerEmail] = useState("codecraft@campuspulse.edu");
  const [organizerPhone, setOrganizerPhone] = useState("+91 98450 11223");
  const [organizerDept, setOrganizerDept] = useState("Computer Science & Engineering");
  const [organizerOffice, setOrganizerOffice] = useState("Room 204, Block C");

  // Step 7: Tags & Settings
  const [tags, setTags] = useState<string[]>(["AI", "Coding", "Innovation", "Workshop"]);
  const [customTagInput, setCustomTagInput] = useState("");
  const [featured, setFeatured] = useState(true);
  const [pinAnnouncement, setPinAnnouncement] = useState(true);
  const [visibility, setVisibility] = useState<"Public" | "Department Only">("Public");
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [reminderOneDay, setReminderOneDay] = useState(true);
  const [reminderOneHour, setReminderOneHour] = useState(true);
  const [isDraft, setIsDraft] = useState(false);

  // Validation & Modal State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Compute Event Duration
  const computeDuration = () => {
    try {
      const start = new Date(`${startDate}T${startTime}`);
      const end = new Date(`${endDate}T${endTime}`);
      const diffMs = end.getTime() - start.getTime();
      if (isNaN(diffMs) || diffMs <= 0) return "Invalid date range";
      const totalHours = Math.floor(diffMs / 3600000);
      const days = Math.floor(totalHours / 24);
      const remainingHours = totalHours % 24;

      if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""}${remainingHours > 0 ? `, ${remainingHours} hr${remainingHours > 1 ? "s" : ""}` : ""}`;
      }
      return `${totalHours} hour${totalHours > 1 ? "s" : ""}`;
    } catch {
      return "Unable to calculate duration";
    }
  };

  // Compute Countdown
  const computeCountdown = () => {
    try {
      const start = new Date(`${startDate}T${startTime}`);
      const diffMs = start.getTime() - Date.now();
      if (diffMs <= 0) return "Event Starting Soon";
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      return `Starts in ${days} day${days !== 1 ? "s" : ""}`;
    } catch {
      return "Upcoming Event";
    }
  };

  // Field Validation Logic
  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 0) {
      if (!title.trim()) errs.title = "Event title is required.";
      if (!summary.trim()) errs.summary = "Short description is required.";
      if (!category) errs.category = "Please select an event category.";
      if (!department) errs.department = "Department is required.";
    }

    if (currentStep === 1) {
      if (!startDate) errs.startDate = "Start date is required.";
      if (!startTime) errs.startTime = "Start time is required.";
      if (!endDate) errs.endDate = "End date is required.";
      if (!endTime) errs.endTime = "End time is required.";

      if (startDate && endDate) {
        const start = new Date(`${startDate}T${startTime || "00:00"}`);
        const end = new Date(`${endDate}T${endTime || "23:59"}`);
        if (end.getTime() < start.getTime()) {
          errs.endDate = "End date & time must be after start date & time.";
        }
      }

      if ((mode === "Offline" || mode === "Hybrid") && !venue.trim()) {
        errs.venue = "Venue address is required for offline/hybrid events.";
      }
      if ((mode === "Online" || mode === "Hybrid") && !meetingLink.trim()) {
        errs.meetingLink = "Meeting link is required for online/hybrid events.";
      }
    }

    if (currentStep === 2) {
      if (!regDeadline) errs.regDeadline = "Registration deadline is required.";
      if (regDeadline && startDate) {
        const deadline = new Date(`${regDeadline}T23:59:59`);
        const eventStart = new Date(`${startDate}T${startTime || "00:00:00"}`);
        if (deadline.getTime() > eventStart.getTime()) {
          errs.regDeadline = "Registration deadline must be on or before event start date.";
        }
      }
      if (seats <= 0) errs.seats = "Maximum participants must be greater than 0.";
    }

    if (currentStep === 5) {
      if (!organizerEmail.trim() || !organizerEmail.includes("@")) {
        errs.organizerEmail = "Valid organizer email is required.";
      }
      if (!organizerName.trim()) {
        errs.organizerName = "Organizer name is required.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
    } else {
      toast.error("Please fix the validation errors before proceeding.");
    }
  };

  const [createdEventId, setCreatedEventId] = useState<string>("ev-1");

  const handlePublish = async () => {
    let isValid = true;
    for (let i = 0; i < STEPS.length; i++) {
      if (!validateStep(i)) {
        setStep(i);
        isValid = false;
        toast.error(`Please complete validation in Step ${i + 1}: ${STEPS[i]}`);
        break;
      }
    }

    if (isValid) {
      setIsDraft(false);
      try {
        const { eventService } = await import("@/services/eventService");
        const created = await eventService.create({
          title,
          summary,
          description,
          category,
          department,
          club,
          organizerId: userProfile?.uid || "organizer-1",
          organizerName: userProfile?.name || organizerName,
          banner: selectedBanner,
          venue,
          mode,
          startDate,
          startTime,
          endDate,
          endTime,
          registrationDeadline: regDeadline,
          maxParticipants: seats,
          tags,
          certificateEnabled: certificate,
          status: "PendingApproval",
        });
        if (created?.eventId) {
          setCreatedEventId(created.eventId);
        }
        setShowSuccessModal(true);
        toast.success("Event submitted for Admin approval.");
      } catch (err: any) {
        toast.error(err.message || "Failed to create event in Cloud Firestore.");
      }
    }
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    toast.success("Event saved as draft successfully.");
  };

  const handleAddSpeaker = () => {
    const newSp: Speaker = {
      id: `sp-${Date.now()}`,
      name: "",
      designation: "",
      organization: "",
      bio: "",
      linkedin: "",
    };
    setSpeakers([...speakers, newSp]);
  };

  const handleRemoveSpeaker = (id: string) => {
    setSpeakers(speakers.filter((s) => s.id !== id));
  };

  const handleUpdateSpeaker = (id: string, field: keyof Speaker, value: string) => {
    setSpeakers(speakers.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const toggleTag = (t: string) => {
    if (tags.includes(t)) {
      setTags(tags.filter((x) => x !== t));
    } else {
      setTags([...tags, t]);
    }
  };

  const handleAddCustomTag = () => {
    if (customTagInput.trim() && !tags.includes(customTagInput.trim())) {
      setTags([...tags, customTagInput.trim()]);
      setCustomTagInput("");
    }
  };

  return (
    <div className="space-y-6 pb-24">
      {/* PAGE HEADER */}
      <PageHeader
        title="Create Event"
        subtitle="Create and publish a new campus event announcement."
        breadcrumb={[
          { label: "Organizer Dashboard", to: "/organizer" },
          { label: "Events", to: "/organizer/events" },
          { label: "Create Event" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card shadow-sm" onClick={handleSaveDraft}>
              <Save className="mr-2 size-4 text-muted-foreground" /> Save Draft
            </Button>
            <Button variant="outline" className="rounded-xl bg-card shadow-sm" onClick={() => setShowPreviewModal(true)}>
              <Eye className="mr-2 size-4 text-primary" /> Full Preview
            </Button>
            <Button className="rounded-xl shadow-glow" onClick={handlePublish}>
              <Send className="mr-2 size-4" /> Publish Event
            </Button>
          </div>
        }
      />

      {/* STEPPER NAVIGATION */}
      <div className="card-surface overflow-x-auto p-4">
        <ol className="flex min-w-max items-center gap-2">
          {STEPS.map((s, i) => {
            const isCompleted = i < step;
            const isCurrent = i === step;
            return (
              <li key={s} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (i < step || validateStep(step)) setStep(i);
                  }}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all",
                    isCurrent
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : isCompleted
                        ? "bg-primary-soft text-primary hover:bg-primary-soft/80"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-5 place-items-center rounded-full text-[10px] font-bold border",
                      isCurrent
                        ? "border-primary-foreground bg-primary-foreground text-primary"
                        : isCompleted
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground",
                    )}
                  >
                    {isCompleted ? <Check className="size-3 stroke-[3]" /> : i + 1}
                  </span>
                  <span>{s}</span>
                </button>
                {i < STEPS.length - 1 && <span className="h-px w-4 bg-border shrink-0" />}
              </li>
            );
          })}
        </ol>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        {/* LEFT COLUMN: MULTI-STEP FORM */}
        <div className="space-y-6">
          <SectionCard
            title={`Step ${step + 1}: ${STEPS[step]}`}
            description="Fill out the fields below. Live preview updates automatically on the right."
          >
            {/* STEP 1: BASIC INFORMATION */}
            {step === 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label className="font-semibold">Event Title <span className="text-danger">*</span></Label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. AI Builders Summit & Hackathon 2026"
                    className="rounded-xl"
                  />
                  {errors.title && <p className="text-xs font-medium text-danger">{errors.title}</p>}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label className="font-semibold">Short Summary / Tagline <span className="text-danger">*</span></Label>
                  <Input
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Brief 1-sentence teaser for campus event cards"
                    className="rounded-xl"
                  />
                  {errors.summary && <p className="text-xs font-medium text-danger">{errors.summary}</p>}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label className="font-semibold">Full Event Description</Label>
                  <Textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detailed explanation, prerequisites, rules, and expectations..."
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Category <span className="text-danger">*</span></Label>
                  <Select value={category} onValueChange={(val) => setCategory(val as EventCategory)}>
                    <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Event Type <span className="text-danger">*</span></Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {EVENT_TYPES.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Host Department <span className="text-danger">*</span></Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {departments.map((d) => (
                        <SelectItem key={d} value={d}>{d}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Club / Organization</Label>
                  <Select value={club} onValueChange={setClub}>
                    <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {clubs.map((cl) => (
                        <SelectItem key={cl.name} value={cl.name}>{cl.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* STEP 2: SCHEDULE & MODE */}
            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="font-semibold">Start Date <span className="text-danger">*</span></Label>
                  <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="rounded-xl" />
                  {errors.startDate && <p className="text-xs font-medium text-danger">{errors.startDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Start Time <span className="text-danger">*</span></Label>
                  <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="rounded-xl" />
                  {errors.startTime && <p className="text-xs font-medium text-danger">{errors.startTime}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">End Date <span className="text-danger">*</span></Label>
                  <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="rounded-xl" />
                  {errors.endDate && <p className="text-xs font-medium text-danger">{errors.endDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">End Time <span className="text-danger">*</span></Label>
                  <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="rounded-xl" />
                </div>

                {/* Duration Display Box */}
                <div className="rounded-2xl border border-primary/20 bg-primary-soft/50 p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Clock className="size-4" /> Computed Event Duration: <span className="font-bold text-foreground">{computeDuration()}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    CampusPulse automatically archives this event once the end date and time pass.
                  </p>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label className="font-semibold">Event Mode</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {(["Offline", "Online", "Hybrid"] as const).map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setMode(m)}
                        className={cn(
                          "rounded-xl border py-2.5 text-xs font-semibold transition-all",
                          mode === m
                            ? "border-primary bg-primary-soft text-primary ring-2 ring-primary/20"
                            : "border-border bg-card text-muted-foreground hover:bg-secondary",
                        )}
                      >
                        {m === "Offline" && "🏫 Offline"}
                        {m === "Online" && "🌐 Online"}
                        {m === "Hybrid" && "⚡ Hybrid"}
                      </button>
                    ))}
                  </div>
                </div>

                {(mode === "Offline" || mode === "Hybrid") && (
                  <>
                    <div className="space-y-2 sm:col-span-2">
                      <Label className="font-semibold">Primary Venue Address <span className="text-danger">*</span></Label>
                      <Input value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="e.g. Innovation Hall, Main Campus" className="rounded-xl" />
                      {errors.venue && <p className="text-xs font-medium text-danger">{errors.venue}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="font-semibold">Building / Block</Label>
                      <Input value={building} onChange={(e) => setBuilding(e.target.value)} placeholder="e.g. Block C" className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label className="font-semibold">Room / Lab Number</Label>
                      <Input value={room} onChange={(e) => setRoom(e.target.value)} placeholder="e.g. Hall 302" className="rounded-xl" />
                    </div>
                  </>
                )}

                {(mode === "Online" || mode === "Hybrid") && (
                  <div className="space-y-2 sm:col-span-2">
                    <Label className="font-semibold">Virtual Meeting Link (Zoom / Teams / Meet) <span className="text-danger">*</span></Label>
                    <Input value={meetingLink} onChange={(e) => setMeetingLink(e.target.value)} placeholder="https://meet.campuspulse.edu/..." className="rounded-xl" />
                    {errors.meetingLink && <p className="text-xs font-medium text-danger">{errors.meetingLink}</p>}
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: REGISTRATION */}
            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="font-semibold">Registration Deadline <span className="text-danger">*</span></Label>
                  <Input type="date" value={regDeadline} onChange={(e) => setRegDeadline(e.target.value)} className="rounded-xl" />
                  {errors.regDeadline && <p className="text-xs font-medium text-danger">{errors.regDeadline}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Maximum Participants (Seats) <span className="text-danger">*</span></Label>
                  <Input type="number" value={seats} onChange={(e) => setSeats(Number(e.target.value))} className="rounded-xl" />
                  {errors.seats && <p className="text-xs font-medium text-danger">{errors.seats}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Entry Fee (₹)</Label>
                  <Input type="number" value={fee} onChange={(e) => setFee(Number(e.target.value))} placeholder="0 for Free event" className="rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Custom Button CTA Text</Label>
                  <Input value={buttonText} onChange={(e) => setButtonText(e.target.value)} placeholder="e.g. Apply for Hackathon" className="rounded-xl" />
                </div>

                <div className="space-y-3 sm:col-span-2 pt-2">
                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Issue Participation Certificates</p>
                      <p className="text-xs text-muted-foreground">Digital certificates published upon attendance verification</p>
                    </div>
                    <Switch checked={certificate} onCheckedChange={setCertificate} />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Require QR Code Attendance Check-in</p>
                      <p className="text-xs text-muted-foreground">Only students scanned at venue get attendance marked</p>
                    </div>
                    <Switch checked={attendanceRequired} onCheckedChange={setAttendanceRequired} />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Allow Waitlist When Full</p>
                      <p className="text-xs text-muted-foreground">Automatically waitlist registrants when seats reach capacity</p>
                    </div>
                    <Switch checked={allowWaitlist} onCheckedChange={setAllowWaitlist} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: MEDIA & ASSETS */}
            {step === 3 && (
              <div className="space-y-6">
                {/* Hidden Device File Inputs */}
                <input
                  type="file"
                  ref={bannerInputRef}
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handleBannerInputChange}
                  className="hidden"
                />
                <input
                  type="file"
                  ref={posterInputRef}
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handlePosterInputChange}
                  className="hidden"
                />
                <input
                  type="file"
                  ref={galleryInputRef}
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  multiple
                  onChange={handleGalleryInputChange}
                  className="hidden"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <Label className="font-semibold">Event Banner Image (Main Cover)</Label>
                    {customBannerFile && (
                      <Badge variant="outline" className="rounded-full text-[10px] text-primary border-primary">
                        Custom Device File Active
                      </Badge>
                    )}
                  </div>

                  <div className="mt-2 grid gap-4 sm:grid-cols-3">
                    {[
                      { title: "Hackathon Theme", img: defaultBanner },
                      { title: "Workshop Theme", img: workshopBanner },
                      { title: "Cultural Theme", img: culturalBanner },
                    ].map((preset, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setSelectedBanner(preset.img);
                          setCustomBannerFile(null);
                        }}
                        className={cn(
                          "group relative overflow-hidden rounded-2xl border text-left transition-all",
                          selectedBanner === preset.img && !customBannerFile ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50",
                        )}
                      >
                        <img src={preset.img} alt={preset.title} className="aspect-[16/9] w-full object-cover" />
                        <div className="p-2.5 bg-card">
                          <p className="text-xs font-semibold">{preset.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Device File Drop Zone */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDraggingBanner(true);
                    }}
                    onDragLeave={() => setIsDraggingBanner(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDraggingBanner(false);
                      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                        handleBannerFileSelect(e.dataTransfer.files[0]);
                      }
                    }}
                    className={cn(
                      "mt-4 flex flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center transition-all",
                      isDraggingBanner ? "border-primary bg-primary-soft/50 ring-2 ring-primary/20" : "border-border bg-secondary/20 hover:border-primary/50"
                    )}
                  >
                    {customBannerFile ? (
                      <div className="relative w-full aspect-[16/9] max-h-52 overflow-hidden rounded-xl border border-primary/30 group">
                        <img src={selectedBanner} alt="Uploaded Device Banner" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <Button variant="secondary" size="sm" className="rounded-xl" onClick={() => bannerInputRef.current?.click()}>
                            Change Image
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="rounded-xl"
                            onClick={() => {
                              setCustomBannerFile(null);
                              setSelectedBanner(defaultBanner);
                              toast.info("Reset to default banner.");
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                        <div className="absolute bottom-2 left-2 rounded-lg bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur shadow-sm">
                          📁 {customBannerFile.name} ({(customBannerFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="size-8 text-muted-foreground" />
                        <p className="mt-2 text-sm font-semibold">Drag & Drop custom banner image</p>
                        <p className="text-xs text-muted-foreground">Recommended ratio: 16:9 · JPG, PNG, WEBP (Max 5MB)</p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-3 rounded-xl bg-card"
                          onClick={() => bannerInputRef.current?.click()}
                        >
                          <Upload className="mr-1.5 size-3.5" /> Browse Device Files
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Poster & Gallery */}
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-2xl border border-border p-4 space-y-3">
                    <Label className="font-semibold">Official Event Poster</Label>
                    {posterUrl ? (
                      <div className="relative overflow-hidden rounded-xl border border-primary/30 p-2.5 bg-card flex items-center gap-3">
                        <img src={posterUrl} alt="Poster Preview" className="size-16 object-cover rounded-lg shrink-0 border" />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold truncate">{posterFile ? posterFile.name : "Custom Event Poster"}</p>
                          <p className="text-[10px] text-muted-foreground">Loaded from device</p>
                        </div>
                        <Button variant="ghost" size="icon" className="size-7 text-danger rounded-lg shrink-0" onClick={() => { setPosterUrl(null); setPosterFile(null); }}>
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center">
                        <ImagePlus className="size-6 text-muted-foreground" />
                        <p className="mt-1 text-xs text-muted-foreground">Upload printable event poster from device</p>
                        <Button variant="outline" size="sm" className="mt-2 text-xs rounded-xl bg-card" onClick={() => posterInputRef.current?.click()}>
                          Upload Poster
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl border border-border p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-semibold">Gallery Images Preview ({galleryImages.length})</Label>
                      <Button variant="outline" size="sm" className="h-7 text-xs rounded-xl bg-card" onClick={() => galleryInputRef.current?.click()}>
                        <Plus className="mr-1 size-3" /> Add Device Images
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {galleryImages.map((img, i) => (
                        <div key={i} className="relative size-16 overflow-hidden rounded-xl border group">
                          <img src={img} alt="Gallery" className="size-full object-cover" />
                          <button
                            type="button"
                            onClick={() => setGalleryImages(galleryImages.filter((_, idx) => idx !== i))}
                            className="absolute right-0.5 top-0.5 rounded-full bg-background/80 p-0.5 text-foreground hover:bg-danger hover:text-danger-foreground"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: SPEAKERS & HOSTS */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">Event Speakers & Keynotes</h3>
                    <p className="text-xs text-muted-foreground">Add guest speakers, industry mentors, or faculty hosts</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl bg-card" onClick={handleAddSpeaker}>
                    <Plus className="mr-1.5 size-4" /> Add Speaker
                  </Button>
                </div>

                <div className="space-y-4">
                  {speakers.map((sp, idx) => (
                    <div key={sp.id} className="rounded-2xl border border-border bg-card p-4 space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Speaker #{idx + 1}
                        </span>
                        {speakers.length > 1 && (
                          <Button variant="ghost" size="icon" className="size-7 text-danger rounded-lg" onClick={() => handleRemoveSpeaker(sp.id)}>
                            <Trash2 className="size-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                          <Label className="text-xs">Full Name</Label>
                          <Input
                            value={sp.name}
                            onChange={(e) => handleUpdateSpeaker(sp.id, "name", e.target.value)}
                            placeholder="e.g. Dr. Ananya Iyer"
                            className="rounded-xl h-9 text-xs"
                          />
                        </div>

                        <div className="space-y-1">
                          <Label className="text-xs">Designation / Role</Label>
                          <Input
                            value={sp.designation}
                            onChange={(e) => handleUpdateSpeaker(sp.id, "designation", e.target.value)}
                            placeholder="e.g. Principal AI Scientist"
                            className="rounded-xl h-9 text-xs"
                          />
                        </div>

                        <div className="space-y-1">
                          <Label className="text-xs">Organization / Company</Label>
                          <Input
                            value={sp.organization}
                            onChange={(e) => handleUpdateSpeaker(sp.id, "organization", e.target.value)}
                            placeholder="e.g. Google DeepMind"
                            className="rounded-xl h-9 text-xs"
                          />
                        </div>

                        <div className="space-y-1">
                          <Label className="text-xs">LinkedIn URL</Label>
                          <Input
                            value={sp.linkedin}
                            onChange={(e) => handleUpdateSpeaker(sp.id, "linkedin", e.target.value)}
                            placeholder="https://linkedin.com/in/..."
                            className="rounded-xl h-9 text-xs"
                          />
                        </div>

                        <div className="space-y-1 sm:col-span-2">
                          <Label className="text-xs">Short Biography</Label>
                          <Textarea
                            rows={2}
                            value={sp.bio}
                            onChange={(e) => handleUpdateSpeaker(sp.id, "bio", e.target.value)}
                            placeholder="Brief bio or keynote topic..."
                            className="rounded-xl text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 6: CONTACT INFORMATION */}
            {step === 5 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label className="font-semibold">Lead Organizer Name <span className="text-danger">*</span></Label>
                  <Input
                    value={organizerName}
                    onChange={(e) => setOrganizerName(e.target.value)}
                    placeholder="e.g. Dr. Ananya Iyer / Codecraft Desk"
                    className="rounded-xl"
                  />
                  {errors.organizerName && <p className="text-xs font-medium text-danger">{errors.organizerName}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Official Contact Email <span className="text-danger">*</span></Label>
                  <Input
                    type="email"
                    value={organizerEmail}
                    onChange={(e) => setOrganizerEmail(e.target.value)}
                    placeholder="organizer@campuspulse.edu"
                    className="rounded-xl"
                  />
                  {errors.organizerEmail && <p className="text-xs font-medium text-danger">{errors.organizerEmail}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Contact Phone Number</Label>
                  <Input
                    value={organizerPhone}
                    onChange={(e) => setOrganizerPhone(e.target.value)}
                    placeholder="+91 98450 11223"
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Department Office</Label>
                  <Input
                    value={organizerDept}
                    onChange={(e) => setOrganizerDept(e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold">Cabin / Desk Location</Label>
                  <Input
                    value={organizerOffice}
                    onChange={(e) => setOrganizerOffice(e.target.value)}
                    placeholder="e.g. Room 204, Block C"
                    className="rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* STEP 7: TAGS & SETTINGS */}
            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <Label className="font-semibold">Event Tags</Label>
                  <p className="text-xs text-muted-foreground mb-3">Select preset tags or add custom tags for campus discovery</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {PRESET_TAGS.map((t) => {
                      const isSelected = tags.includes(t);
                      return (
                        <button
                          type="button"
                          key={t}
                          onClick={() => toggleTag(t)}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-semibold transition-all border",
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-muted-foreground hover:bg-secondary",
                          )}
                        >
                          #{t}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-2 max-w-sm">
                    <Input
                      value={customTagInput}
                      onChange={(e) => setCustomTagInput(e.target.value)}
                      placeholder="Add custom tag..."
                      className="rounded-xl text-xs"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddCustomTag();
                        }
                      }}
                    />
                    <Button variant="outline" size="sm" className="rounded-xl bg-card" onClick={handleAddCustomTag}>
                      Add
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Label className="font-semibold">Publishing Settings & Notifications</Label>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Featured Event Banner</p>
                      <p className="text-xs text-muted-foreground">Highlight at the top of campus student feed</p>
                    </div>
                    <Switch checked={featured} onCheckedChange={setFeatured} />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Pin Announcement</p>
                      <p className="text-xs text-muted-foreground">Keep pinned on department landing page</p>
                    </div>
                    <Switch checked={pinAnnouncement} onCheckedChange={setPinAnnouncement} />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Audience Visibility</p>
                      <p className="text-xs text-muted-foreground">{visibility === "Public" ? "Visible to all campus students" : "Restricted to host department only"}</p>
                    </div>
                    <Select value={visibility} onValueChange={(v) => setVisibility(v as "Public" | "Department Only")}>
                      <SelectTrigger className="w-40 rounded-xl bg-card"><SelectValue /></SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        <SelectItem value="Public">Public Campus</SelectItem>
                        <SelectItem value="Department Only">Department Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Send Campus Notifications</p>
                      <p className="text-xs text-muted-foreground">Broadcast push notification to subscribed students</p>
                    </div>
                    <Switch checked={enableNotifications} onCheckedChange={setEnableNotifications} />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Automated 24-Hour Reminder</p>
                      <p className="text-xs text-muted-foreground">Send email & app alert 1 day before event start</p>
                    </div>
                    <Switch checked={reminderOneDay} onCheckedChange={setReminderOneDay} />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">Automated 1-Hour Reminder</p>
                      <p className="text-xs text-muted-foreground">Send alert 1 hour before start with venue details</p>
                    </div>
                    <Switch checked={reminderOneHour} onCheckedChange={setReminderOneHour} />
                  </div>
                </div>
              </div>
            )}

            {/* STEP NAVIGATION BUTTONS */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
              <Button
                variant="outline"
                className="rounded-xl bg-card"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
              >
                <ChevronLeft className="mr-1.5 size-4" /> Back
              </Button>

              <div className="flex gap-2">
                {step < STEPS.length - 1 ? (
                  <Button className="rounded-xl" onClick={handleNextStep}>
                    Continue <ChevronRight className="ml-1.5 size-4" />
                  </Button>
                ) : (
                  <Button className="rounded-xl shadow-glow" onClick={handlePublish}>
                    <Send className="mr-1.5 size-4" /> Publish Announcement
                  </Button>
                )}
              </div>
            </div>
          </SectionCard>
        </div>

        {/* RIGHT COLUMN: STICKY LIVE EVENT PREVIEW */}
        <div className="space-y-4 lg:block">
          <div className="card-surface sticky top-24 overflow-hidden border border-border shadow-sm">
            <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-primary">
                <Eye className="size-4" /> Live Event Preview
              </span>
              <Badge variant="outline" className="rounded-full text-[10px]">
                Realtime Updates
              </Badge>
            </div>

            {/* Banner Preview */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
              <img src={selectedBanner} alt="Event Preview Banner" className="size-full object-cover" />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                <Badge variant="default" className="rounded-full text-[10px] shadow-sm">
                  {category}
                </Badge>
                <Badge variant="secondary" className="rounded-full text-[10px]">
                  {eventType}
                </Badge>
              </div>
              {certificate && (
                <div className="absolute right-3 top-3">
                  <Badge className="rounded-full bg-success text-success-foreground text-[10px] shadow-sm">
                    <Award className="mr-1 size-3" /> Certificate
                  </Badge>
                </div>
              )}
            </div>

            {/* Content Preview */}
            <div className="p-5 space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {department} · {club}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug text-foreground">
                  {title || "Untitled Event"}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
                  {summary || "Short summary preview..."}
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-border bg-card p-3 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="size-3.5 text-primary shrink-0" />
                  <span>{startDate ? new Date(startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Date TBD"} ({startTime || "--:--"} – {endTime || "--:--"})</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-3.5 text-primary shrink-0" />
                  <span className="truncate">{mode === "Online" ? "Online Meeting Link" : `${venue || "Venue TBD"} (${building})`}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t">
                  <span>Entry: <strong className="text-foreground">{fee > 0 ? `₹${fee}` : "FREE"}</strong></span>
                  <span>Seats: <strong className="text-foreground">{seats} Seats</strong></span>
                  <span className="font-semibold text-primary">{computeCountdown()}</span>
                </div>
              </div>

              {/* Speakers Preview */}
              {speakers.length > 0 && speakers[0].name && (
                <div className="border-t pt-3">
                  <p className="text-[11px] font-semibold text-muted-foreground mb-2">Featured Keynote</p>
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-primary-soft text-primary font-bold text-xs">
                      {speakers[0].name[0]}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate">{speakers[0].name}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{speakers[0].designation} · {speakers[0].organization}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Student CTA Preview */}
              <div className="pt-1">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">Student CTA Button Preview</p>
                <Button className="w-full rounded-xl shadow-sm pointer-events-none">{buttonText || "Register Now"}</Button>
              </div>

              <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                <span>Organizer: {organizerName}</span>
                <span>{visibility}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTIONS BAR FOR MOBILE & RESPONSIVE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl lg:pl-[280px]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4">
          <Link to="/organizer">
            <Button variant="ghost" size="sm" className="rounded-xl text-xs">
              Cancel
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-xl text-xs bg-card" onClick={handleSaveDraft}>
              <Save className="mr-1 size-3.5" /> Save Draft
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl text-xs bg-card" onClick={() => setShowPreviewModal(true)}>
              <Eye className="mr-1 size-3.5" /> Preview
            </Button>
            <Button size="sm" className="rounded-xl text-xs shadow-glow" onClick={handlePublish}>
              <Send className="mr-1 size-3.5" /> Publish
            </Button>
          </div>
        </div>
      </div>

      {/* FULL PREVIEW MODAL */}
      <Dialog open={showPreviewModal} onOpenChange={setShowPreviewModal}>
        <DialogContent className="max-w-2xl rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Event Announcement Full Preview</DialogTitle>
            <DialogDescription>This is how students will see your event on the CampusPulse feed.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border">
              <img src={selectedBanner} alt="Full Banner Preview" className="size-full object-cover" />
              <div className="absolute left-3 top-3 flex gap-2">
                <Badge variant="default">{category}</Badge>
                <Badge variant="secondary">{eventType}</Badge>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase">{department} · {club}</span>
              <h2 className="text-xl font-bold mt-1">{title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{description}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 rounded-2xl border bg-secondary/30 p-4 text-xs">
              <div><strong>Date:</strong> {startDate} to {endDate}</div>
              <div><strong>Time:</strong> {startTime} - {endTime}</div>
              <div><strong>Venue:</strong> {venue} ({building}, {room})</div>
              <div><strong>Mode:</strong> {mode}</div>
              <div><strong>Seats:</strong> {seats} Maximum</div>
              <div><strong>Fee:</strong> {fee > 0 ? `₹${fee}` : "Free"}</div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPreviewModal(false)} className="rounded-xl">Close Preview</Button>
            <Button onClick={() => { setShowPreviewModal(false); handlePublish(); }} className="rounded-xl shadow-glow">Publish Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* SUCCESS MODAL */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md rounded-2xl p-6 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-success-soft text-success mb-3">
            <CheckCircle2 className="size-8" />
          </div>

          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Event Published Successfully!</DialogTitle>
            <DialogDescription className="text-center">
              Your event <strong className="text-foreground">"{title}"</strong> is now live on the campus announcement feed.
            </DialogDescription>
          </DialogHeader>

          <div className="my-4 rounded-2xl border border-border bg-card p-4 text-left space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Lifecycle Stage:</span>
              <StatusBadge status="Published" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Category:</span>
              <span className="font-semibold">{category}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Start Date:</span>
              <span className="font-semibold">{startDate} at {startTime}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Venue:</span>
              <span className="font-semibold">{venue}</span>
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Link to="/events/$eventId" params={{ eventId: createdEventId }} className="w-full">
              <Button className="w-full rounded-xl shadow-glow">View Published Event</Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                setShowSuccessModal(false);
                setStep(0);
                setTitle("");
                setSummary("");
                setDescription("");
              }}
              className="w-full rounded-xl bg-card"
            >
              <RotateCcw className="mr-1.5 size-4" /> Create Another Event
            </Button>
            <Link to="/organizer" className="w-full">
              <Button variant="ghost" className="w-full rounded-xl text-xs">Return to Organizer Console</Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

