import type { CampusEvent } from "@/data/mock";

export interface FirestoreEvent {
  title: string;
  description: string;
  department: string;
  category: string;
  bannerUrl: string;
  venue: string;
  eventMode: "Online" | "Offline";
  date: string; // e.g. "YYYY-MM-DD"
  time: string; // e.g. "HH:MM"
  registrationDeadline: string; // e.g. "YYYY-MM-DD" or ISO string
  organizerId: string;
  organizerName: string;
  status: "published" | "draft" | "pending";
  createdAt: any;
  updatedAt: any;
  isArchived: boolean;
  participantsCount: number;
}

export function firestoreEventToCampusEvent(id: string, doc: Partial<FirestoreEvent>): CampusEvent {
  const startDateTime = doc.date && doc.time ? `${doc.date}T${doc.time}` : new Date().toISOString();
  // Set default duration of 2 hours if end datetime is needed
  const endDateTime = doc.date && doc.time 
    ? new Date(new Date(`${doc.date}T${doc.time}`).getTime() + 7200000).toISOString()
    : new Date().toISOString();

  return {
    id: id,
    title: doc.title || "Untitled Event",
    summary: doc.description ? (doc.description.length > 120 ? doc.description.substring(0, 120) + "..." : doc.description) : "",
    description: doc.description || "",
    banner: doc.bannerUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    category: doc.category || "Technical",
    department: doc.department || "Computer Science",
    club: doc.organizerName || "Campus Club",
    organizer: doc.organizerName || "Campus Organizer",
    organizerAvatar: (doc.organizerName || "O").charAt(0).toUpperCase(),
    venue: doc.venue || "Campus Main Hall",
    start: startDateTime,
    end: endDateTime,
    seats: 100, // default capacity
    registered: doc.participantsCount || 0,
    status: doc.status === "published" ? "Published" : "Draft",
    certificate: true,
    fee: 0,
    tags: [doc.category || "Campus", doc.eventMode || "Offline"],
    speakers: [],
    contact: { email: "events@campus.edu", phone: "" },
  };
}
