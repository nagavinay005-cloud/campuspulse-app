import {
  archivedEvents,
  events,
  isExpired,
  resolveStatus,
  type CampusEvent,
  type EventStatus,
} from "@/data/mock";

export interface ArchiveMeta {
  eventId: string;
  archivedAt: string; // ISO
  certificates: number;
  feedbackScore: number;
  feedbackResponses: number;
  gallery: number;
  reportSize: string;
}

const hoursAfterEnd = (e: CampusEvent, h: number) =>
  new Date(new Date(e.end).getTime() + h * 3600000).toISOString();

export const archiveMeta: Record<string, ArchiveMeta> = Object.fromEntries(
  archivedEvents().map((e, i) => [
    e.id,
    {
      eventId: e.id,
      archivedAt: hoursAfterEnd(e, 1),
      certificates: e.certificate ? Math.round((e.attended ?? 0) * 0.94) : 0,
      feedbackScore: e.rating ?? [4.5, 4.2, 4.8][i % 3],
      feedbackResponses: Math.round((e.attended ?? 0) * 0.62),
      gallery: [18, 24, 36, 12][i % 4],
      reportSize: ["1.8 MB", "2.4 MB", "3.1 MB"][i % 3],
    },
  ]),
);

export const getArchiveMeta = (id: string): ArchiveMeta => {
  const e = events.find((x) => x.id === id);
  return (
    archiveMeta[id] ?? {
      eventId: id,
      archivedAt: e ? hoursAfterEnd(e, 1) : new Date().toISOString(),
      certificates: e?.certificate ? Math.round((e?.attended ?? 0) * 0.94) : 0,
      feedbackScore: e?.rating ?? 4.5,
      feedbackResponses: Math.round((e?.attended ?? 0) * 0.62),
      gallery: 16,
      reportSize: "2.1 MB",
    }
  );
};

/** Stage definitions for the lifecycle dashboard. */
export const lifecycleStages: {
  stage: EventStatus;
  description: string;
  tone: "muted" | "warning" | "primary" | "success" | "danger" | "archive";
  icon: string;
}[] = [
  { stage: "Draft", description: "Being built in the organizer wizard", tone: "muted", icon: "FileEdit" },
  { stage: "Submitted", description: "Sent to the department desk", tone: "muted", icon: "Send" },
  { stage: "Pending Approval", description: "Awaiting admin governance review", tone: "warning", icon: "Hourglass" },
  { stage: "Published", description: "Live on the public campus feed", tone: "primary", icon: "Megaphone" },
  { stage: "Upcoming", description: "Registrations open, reminders scheduled", tone: "primary", icon: "CalendarClock" },
  { stage: "Live", description: "QR check-in and live announcements", tone: "danger", icon: "Radio" },
  { stage: "Completed", description: "Attendance locked, feedback collected", tone: "success", icon: "CheckCircle2" },
  { stage: "Archived", description: "Auto-archived once end time passed", tone: "archive", icon: "Archive" },
];

export const stageCount = (stage: EventStatus) =>
  events.filter((e) => resolveStatus(e) === stage).length;

/** Events approaching automatic archival, soonest first. */
export const archiveQueue = () =>
  events
    .filter((e) => !isExpired(e) && !["Draft", "Submitted", "Pending Approval"].includes(e.status))
    .map((e) => ({
      event: e,
      endsInMs: new Date(e.end).getTime() - Date.now(),
      status: resolveStatus(e),
      estimatedArchive: hoursAfterEnd(e, 1),
    }))
    .sort((a, b) => a.endsInMs - b.endsInMs);

export const archiveLog = [
  { id: "al1", title: "Cybersecurity CTF archived successfully", detail: "End time passed — moved out of the active feed automatically.", when: "1 hour ago", tone: "success" as const, icon: "Archive" },
  { id: "al2", title: "Certificates generated", detail: "158 participation certificates issued and published to student wallets.", when: "1 hour ago", tone: "primary" as const, icon: "Award" },
  { id: "al3", title: "Attendance finalised", detail: "Attendance snapshot frozen at 158 / 176 registrants.", when: "2 hours ago", tone: "primary" as const, icon: "Users" },
  { id: "al4", title: "Registration automatically closed", detail: "New registrations permanently disabled for Cybersecurity CTF.", when: "2 hours ago", tone: "warning" as const, icon: "Lock" },
  { id: "al5", title: "Green Campus Summit moved to archive", detail: "Event brief, media and attendance summary preserved.", when: "3 days ago", tone: "success" as const, icon: "Archive" },
  { id: "al6", title: "Freshers' Orientation archived", detail: "874 attendance records retained for reporting.", when: "2 weeks ago", tone: "success" as const, icon: "Archive" },
];

export const archivePerMonth = [
  { month: "Aug", archived: 8, attendanceRate: 78, certificates: 340 },
  { month: "Sep", archived: 14, attendanceRate: 81, certificates: 612 },
  { month: "Oct", archived: 19, attendanceRate: 84, certificates: 908 },
  { month: "Nov", archived: 12, attendanceRate: 80, certificates: 544 },
  { month: "Dec", archived: 7, attendanceRate: 76, certificates: 288 },
  { month: "Jan", archived: 21, attendanceRate: 88, certificates: 1120 },
];

export const departmentArchive = [
  { dept: "CSE", archived: 24 },
  { dept: "IT", archived: 18 },
  { dept: "MECH", archived: 12 },
  { dept: "CIVIL", archived: 9 },
  { dept: "DESIGN", archived: 7 },
  { dept: "T&P", archived: 11 },
];

export const archiveCategorySplit = [
  { name: "Technical", value: 32 },
  { name: "Cultural", value: 21 },
  { name: "Workshop", value: 17 },
  { name: "Sports", value: 10 },
  { name: "Seminar", value: 8 },
  { name: "Placement", value: 6 },
];

export const galleryCaptions = [
  "Opening keynote",
  "Team check-in desk",
  "Mentor round",
  "Mid-event showcase",
  "Judging panel",
  "Prize distribution",
];
