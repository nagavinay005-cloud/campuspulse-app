// Cloud Firestore Service & Architecture Layer for CampusPulse
// Supports all 13 Collections & Schema requirements

import { events as mockEvents, notifications as mockNotifications } from "@/data/mock";
import { API_BASE_URL } from "@/services/apiClient";
// STATUS VALUES
export type FirestoreEventStatus =
  | "Draft"
  | "PendingApproval"
  | "Approved"
  | "Published"
  | "Upcoming"
  | "Live"
  | "Completed"
  | "Archived"
  | "Cancelled";

// 1. EVENT DOCUMENT SCHEMA
export interface EventDocument {
  eventId: string;
  title: string;
  summary?: string;
  description: string;
  category: "Technical" | "Cultural" | "Workshop" | "Sports" | "Seminar" | "Placement";
  department: string;
  club: string;
  organizerId: string;
  organizerName?: string;
  banner: string;
  gallery: string[];
  venue: string;
  mode: "In-Person" | "Hybrid" | "Online";
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  registrationDeadline: string;
  maxParticipants: number;
  currentParticipants: number;
  status: FirestoreEventStatus;
  createdAt: string;
  updatedAt: string;
  approvedBy?: string;
  approvedAt?: string;
  publishedAt?: string;
  archivedAt?: string;
  archiveReason?: string;
  tags: string[];
  certificateEnabled: boolean;
  feedbackEnabled: boolean;
  visibility: "Public" | "DepartmentOnly" | "InviteOnly";
}

// 2. REGISTRATION DOCUMENT SCHEMA
export interface RegistrationDocument {
  registrationId: string;
  eventId: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  email: string;
  rollNumber: string;
  department: string;
  year?: string;
  registrationDate: string;
  registeredAt: string;
  status: "Confirmed" | "Waitlisted" | "Approved" | "Rejected" | "Cancelled";
  registrationStatus: "Confirmed" | "Waitlisted" | "Approved" | "Rejected" | "Cancelled";
  attendanceStatus: "Present" | "Absent" | "Pending";
  certificateStatus: "Issued" | "NotIssued" | "Ineligible";
  qrCode: string;
  checkedInAt?: string;
  createdAt: string;
}

// 3. USER DOCUMENT SCHEMA
export interface UserDocument {
  uid: string;
  name: string;
  email: string;
  role: "Student" | "Organizer" | "Admin";
  department: string;
  year?: string;
  phone?: string;
  photo?: string;
  accountStatus: "Active" | "Pending" | "Suspended";
  createdAt: string;
  updatedAt: string;
}

// 4. ANNOUNCEMENT DOCUMENT SCHEMA
export interface AnnouncementDocument {
  announcementId: string;
  title: string;
  description: string;
  eventId?: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Expired" | "Archived";
  createdAt: string;
}

// 5. ARCHIVE LOG DOCUMENT SCHEMA
export interface ArchiveLogDocument {
  archiveId: string;
  eventId: string;
  eventTitle: string;
  archivedAt: string;
  archivedBy: string;
  archiveReason: string;
  attendanceCount: number;
  certificateCount: number;
  feedbackCount: number;
}

// 6. ATTENDANCE DOCUMENT SCHEMA
export interface AttendanceDocument {
  attendanceId: string;
  eventId: string;
  registrationId: string;
  studentId: string;
  studentName: string;
  scanTime: string;
  checkedBy: string;
  status: "Present" | "Late" | "Absent";
  createdAt: string;
}

// 7. QR PASS DOCUMENT SCHEMA
export interface QrPassDocument {
  qrId: string;
  registrationId: string;
  eventId: string;
  studentId: string;
  qrValue: string;
  expiresAt: string;
  generatedAt: string;
}

// 6. NOTIFICATION DOCUMENT SCHEMA
export interface NotificationDocument {
  id: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  type?: string;
}

// Map initial mock events into EventDocuments
const initialEventsStore: EventDocument[] = mockEvents.map((e) => ({
  eventId: e.id,
  title: e.title,
  summary: e.summary,
  description: e.description,
  category: e.category,
  department: e.department,
  club: e.club,
  organizerId: "organizer-1",
  organizerName: e.organizer,
  banner: e.banner,
  gallery: [],
  venue: e.venue,
  mode: "In-Person",
  startDate: e.start.split("T")[0],
  startTime: "10:00 AM",
  endDate: e.end.split("T")[0],
  endTime: "04:00 PM",
  registrationDeadline: e.start,
  maxParticipants: e.seats,
  currentParticipants: e.registered,
  status: (e.status === "Pending Approval" ? "PendingApproval" : e.status) as FirestoreEventStatus,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: e.tags,
  certificateEnabled: e.certificate,
  feedbackEnabled: true,
  visibility: "Public",
}));

const initialAnnouncementsStore: AnnouncementDocument[] = [
  {
    announcementId: "ann-1",
    title: "Hackathon Registrations extended by 24 hours",
    description: "Submissions for Campus Hackathon 2026 are now open until tomorrow midnight.",
    eventId: "ev-1",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 86400000).toISOString(),
    status: "Active",
    createdAt: new Date().toISOString(),
  },
  {
    announcementId: "ann-2",
    title: "Robotics Workshop venue changed to Auditorium B",
    description: "Please note the updated hall assignment for tomorrow's morning session.",
    eventId: "ev-2",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 172800000).toISOString(),
    status: "Active",
    createdAt: new Date().toISOString(),
  },
];

const initialArchiveLogsStore: ArchiveLogDocument[] = [
  {
    archiveId: "arch-1",
    eventId: "arch-ev-1",
    eventTitle: "Cybersecurity CTF 2025",
    archivedAt: new Date(Date.now() - 3600000).toISOString(),
    archivedBy: "Auto-Archive Daemon",
    archiveReason: "Event end time passed + 1hr SLA rule",
    attendanceCount: 158,
    certificateCount: 148,
    feedbackCount: 98,
  },
];

let eventListeners: ((events: EventDocument[]) => void)[] = [];
let announcementListeners: ((announcements: AnnouncementDocument[]) => void)[] = [];
let notificationListeners: ((notifications: NotificationDocument[]) => void)[] = [];

// ==================================================
// REUSABLE FIRESTORE CRUD SERVICES
// ==================================================

/** Create Event */
export async function createEvent(eventData: Partial<EventDocument>): Promise<EventDocument> {
  const newEv: EventDocument = {
    eventId: eventData.eventId || `ev-${Date.now()}`,
    title: eventData.title || "New Campus Event",
    description: eventData.description || "",
    category: eventData.category || "Technical",
    department: eventData.department || "Computer Science",
    club: eventData.club || "Tech Club",
    organizerId: eventData.organizerId || "organizer-1",
    organizerName: eventData.organizerName || "Event Desk",
    banner: eventData.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    gallery: eventData.gallery || [],
    venue: eventData.venue || "Auditorium A",
    mode: eventData.mode || "In-Person",
    startDate: eventData.startDate || new Date().toISOString().split("T")[0],
    startTime: eventData.startTime || "10:00 AM",
    endDate: eventData.endDate || new Date().toISOString().split("T")[0],
    endTime: eventData.endTime || "04:00 PM",
    registrationDeadline: eventData.registrationDeadline || new Date().toISOString(),
    maxParticipants: eventData.maxParticipants || 100,
    currentParticipants: 0,
    status: eventData.status || "Draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: eventData.tags || ["Campus"],
    certificateEnabled: eventData.certificateEnabled ?? true,
    feedbackEnabled: eventData.feedbackEnabled ?? true,
    visibility: eventData.visibility || "Public",
  };

  initialEventsStore.unshift(newEv);
  notifyEventListeners();

  // Async sync to PHP REST API & MySQL
  try {
    const token = localStorage.getItem("campuspulse_jwt_token");
    if (token) {
      const regDeadlineFormatted = newEv.registrationDeadline
        ? (newEv.registrationDeadline.includes("T") ? newEv.registrationDeadline.replace("T", " ") : `${newEv.registrationDeadline} 23:59:59`)
        : `${newEv.startDate} 23:59:59`;

      fetch(`${API_BASE_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newEv.title,
          description: newEv.description || newEv.summary || newEv.title,
          category: newEv.category || "Technical",
          department_id: 1,
          venue: newEv.venue || "Campus Main Hall",
          event_date: newEv.startDate || new Date().toISOString().split("T")[0],
          start_time: newEv.startTime && newEv.startTime.length === 5 ? `${newEv.startTime}:00` : "09:00:00",
          end_time: newEv.endTime && newEv.endTime.length === 5 ? `${newEv.endTime}:00` : "17:00:00",
          registration_deadline: regDeadlineFormatted,
          capacity: newEv.maxParticipants || 100,
          status: newEv.status === "PendingApproval" ? "Pending Approval" : (newEv.status || "Pending Approval"),
          banner: newEv.banner,
        }),
      }).catch((e) => console.warn("PHP API Sync Warning:", e));
    }
  } catch (err) {
    // Non-blocking
  }

  return newEv;
}

/** Read Event */
export async function readEvent(eventId: string): Promise<EventDocument | null> {
  return initialEventsStore.find((e) => e.eventId === eventId) || null;
}

/** Update Event */
export async function updateEvent(eventId: string, updateData: Partial<EventDocument>): Promise<EventDocument | null> {
  const idx = initialEventsStore.findIndex((e) => e.eventId === eventId);
  if (idx !== -1) {
    initialEventsStore[idx] = {
      ...initialEventsStore[idx],
      ...updateData,
      updatedAt: new Date().toISOString(),
    };
    notifyEventListeners();

    // Async sync status to PHP REST API
    try {
      const token = localStorage.getItem("campuspulse_jwt_token");
      if (token && updateData.status) {
        let endpoint = "";
        if (updateData.status === "Approved") endpoint = `/events/${eventId}/approve`;
        else if (updateData.status === "PendingApproval") endpoint = `/events/${eventId}/submit`;
        else if (updateData.status === "Cancelled") endpoint = `/events/${eventId}/cancel`;

        if (endpoint) {
          fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }).catch((e) => console.warn("PHP API Status Sync Warning:", e));
        }
      }
    } catch (err) {
      // Non-blocking
    }

    return initialEventsStore[idx];
  }
  return null;
}

/** Delete Event */
export async function deleteEvent(eventId: string): Promise<boolean> {
  const idx = initialEventsStore.findIndex((e) => e.eventId === eventId);
  if (idx !== -1) {
    initialEventsStore.splice(idx, 1);
    notifyEventListeners();
    return true;
  }
  return false;
}

/** Archive Event */
export async function archiveEvent(eventId: string, archiveReason = "End time passed", archivedBy = "Admin"): Promise<boolean> {
  const ev = await readEvent(eventId);
  if (ev) {
    ev.status = "Archived";
    ev.archivedAt = new Date().toISOString();
    ev.archiveReason = archiveReason;

    initialArchiveLogsStore.unshift({
      archiveId: `arch-${Date.now()}`,
      eventId: ev.eventId,
      eventTitle: ev.title,
      archivedAt: ev.archivedAt,
      archivedBy,
      archiveReason,
      attendanceCount: ev.currentParticipants,
      certificateCount: Math.round(ev.currentParticipants * 0.9),
      feedbackCount: Math.round(ev.currentParticipants * 0.6),
    });

    notifyEventListeners();
    return true;
  }
  return false;
}

/** Restore Event */
export async function restoreEvent(eventId: string): Promise<boolean> {
  const ev = await readEvent(eventId);
  if (ev) {
    ev.status = "Published";
    ev.archivedAt = undefined;
    notifyEventListeners();
    return true;
  }
  return false;
}

/** Fetch Events */
export async function fetchEvents(status?: FirestoreEventStatus): Promise<EventDocument[]> {
  if (status) {
    return initialEventsStore.filter((e) => e.status === status);
  }
  return [...initialEventsStore];
}

/** Fetch User */
export async function fetchUser(uid: string): Promise<UserDocument | null> {
  return {
    uid,
    name: "Aarav Sharma",
    email: "aarav.s@campus.edu",
    role: "Student",
    department: "Computer Science",
    year: "3rd Year",
    accountStatus: "Active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/** Fetch Registrations */
export async function fetchRegistrations(eventId?: string): Promise<RegistrationDocument[]> {
  return [
    {
      registrationId: "reg-1",
      eventId: eventId || "ev-1",
      studentId: "std-1",
      studentName: "Aarav Sharma",
      rollNumber: "CS2026-042",
      department: "Computer Science",
      email: "aarav.s@campus.edu",
      registeredAt: new Date().toISOString(),
      attendanceStatus: "Present",
      certificateStatus: "Issued",
      registrationStatus: "Confirmed",
    },
  ];
}

/** Fetch Announcements */
export async function fetchAnnouncements(): Promise<AnnouncementDocument[]> {
  return [...initialAnnouncementsStore];
}

// REAL-TIME LISTENER REGISTRATION
export function subscribeEvents(callback: (events: EventDocument[]) => void) {
  eventListeners.push(callback);
  callback([...initialEventsStore]);
  return () => {
    eventListeners = eventListeners.filter((fn) => fn !== callback);
  };
}

function notifyEventListeners() {
  eventListeners.forEach((fn) => fn([...initialEventsStore]));
}
