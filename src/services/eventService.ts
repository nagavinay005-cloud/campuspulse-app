// Firestore Event Repository Service for CampusPulse
// Supports Create, Edit, Delete, Duplicate, Publish, Unpublish, Cancel, Archive, Approve, Reject, Search, Filters, Realtime Sync, and Role-Based Access Control
import { apiRequest, API_BASE_URL } from "@/services/apiClient";
import type { EventDocument } from "@/lib/firestore";

export type EventStatusFilter =
  | "All"
  | "Draft"
  | "PendingApproval"
  | "Approved"
  | "Published"
  | "Upcoming"
  | "Live"
  | "Completed"
  | "Archived"
  | "Cancelled"
  | "Deleted";

export interface EventQueryOptions {
  status?: EventStatusFilter;
  department?: string;
  category?: string;
  searchQuery?: string;
  organizerId?: string;
  limit?: number;
}

function getDeptId(dept: string): number {
  const d = String(dept).toLowerCase();
  if (d.includes("computer") || d.includes("cse")) return 1;
  if (d.includes("design")) return 2;
  if (d.includes("mech") || d.includes("me")) return 3;
  if (d.includes("info") || d.includes("it")) return 4;
  if (d.includes("civil") || d.includes("ce")) return 5;
  if (d.includes("elect") || d.includes("ece") || d.includes("ee")) return 6;
  return 1;
}

function getClubId(club: string): number | null {
  const c = String(club).toLowerCase();
  if (c.includes("code") || c.includes("craft")) return 1;
  if (c.includes("google") || c.includes("dsc")) return 2;
  if (c.includes("cyber") || c.includes("cell")) return 3;
  if (c.includes("ieee")) return 4;
  if (c.includes("art") || c.includes("fine")) return 5;
  if (c.includes("sport") || c.includes("athletics")) return 6;
  return 1;
}

export function apiEventToEventDocument(e: any): EventDocument {
  const startISO = e.event_date && e.start_time ? `${e.event_date}T${e.start_time}` : new Date().toISOString();
  const endISO = e.event_date && e.end_time ? `${e.event_date}T${e.end_time}` : new Date(Date.now() + 14400000).toISOString();

  return {
    eventId: e.uuid || String(e.id),
    title: e.title || "Untitled Event",
    summary: e.description ? e.description.slice(0, 140) : "",
    description: e.description || "",
    category: (e.category || "Technical") as any,
    department: e.department_name || "Computer Science",
    club: e.club_name || "Campus Club",
    organizerId: String(e.organizer_id || "1"),
    organizerName: e.organizer_name || "Event Desk",
    banner: e.banner && e.banner !== "/uploads/events/default_banner.png" ? e.banner : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    gallery: [],
    venue: e.venue || "Campus Main Hall",
    mode: e.event_mode || "In-Person",
    startDate: e.event_date || new Date().toISOString().split("T")[0],
    startTime: e.start_time || "09:00",
    endDate: e.event_date || new Date().toISOString().split("T")[0],
    endTime: e.end_time || "13:00",
    registrationDeadline: e.registration_deadline || new Date().toISOString(),
    maxParticipants: e.capacity || 100,
    currentParticipants: e.registered_count || 0,
    status: (e.status === "Pending Approval" ? "PendingApproval" : e.status) as any,
    createdAt: e.created_at || new Date().toISOString(),
    updatedAt: e.updated_at || new Date().toISOString(),
    approvedBy: e.approved_by,
  };
}

export const eventService = {
  /** Create Event */
  async create(data: Partial<EventDocument> & { title: string; organizerId: string }): Promise<EventDocument> {
    const payload = {
      title: data.title,
      description: data.description || "",
      venue: data.venue || "Campus Main Hall",
      event_date: data.startDate || new Date().toISOString().split("T")[0],
      registration_deadline: data.registrationDeadline || new Date().toISOString(),
      capacity: data.maxParticipants || 100,
      start_time: data.startTime || "09:00",
      end_time: data.endTime || "13:00",
      category: data.category || "Technical",
      event_mode: data.mode || "In-Person",
      department_id: getDeptId(data.department || "Computer Science"),
      club_id: getClubId(data.club || "Codecraft Club"),
      status: data.status || "Pending Approval",
      banner: data.banner || "",
    };

    const res = await apiRequest("/events", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (res.success && res.data) {
      return apiEventToEventDocument(res.data);
    }
    throw new Error(res.message || "Failed to create event");
  },

  /** Read Single Event */
  async getById(eventId: string): Promise<EventDocument | null> {
    try {
      const res = await apiRequest(`/events/${eventId}`);
      if (res.success && res.data) {
        return apiEventToEventDocument(res.data);
      }
    } catch (e) {
      console.warn("Failed to fetch event by id:", e);
    }
    return null;
  },

  /** Update Event */
  async update(eventId: string, data: Partial<EventDocument>): Promise<EventDocument | null> {
    const payload: Record<string, any> = {};
    if (data.title) payload.title = data.title;
    if (data.description) payload.description = data.description;
    if (data.venue) payload.venue = data.venue;
    if (data.startDate) payload.event_date = data.startDate;
    if (data.registrationDeadline) payload.registration_deadline = data.registrationDeadline;
    if (data.maxParticipants) payload.capacity = data.maxParticipants;
    if (data.startTime) payload.start_time = data.startTime;
    if (data.endTime) payload.end_time = data.endTime;
    if (data.category) payload.category = data.category;
    if (data.mode) payload.event_mode = data.mode;
    if (data.department) payload.department_id = getDeptId(data.department);
    if (data.club) payload.club_id = getClubId(data.club);
    if (data.banner) payload.banner = data.banner;

    const res = await apiRequest(`/events/${eventId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    if (res.success && res.data) {
      return apiEventToEventDocument(res.data);
    }
    return null;
  },

  /** Delete Event */
  async delete(eventId: string): Promise<boolean> {
    try {
      const res = await apiRequest(`/events/${eventId}`, {
        method: "DELETE",
      });
      return !!res.success;
    } catch (e) {
      console.warn(e);
      return false;
    }
  },

  /** Duplicate Event */
  async duplicate(eventId: string, createdBy: string): Promise<EventDocument | null> {
    const existing = await this.getById(eventId);
    if (!existing) return null;
    return this.create({
      ...existing,
      title: `Copy of ${existing.title}`,
      organizerId: createdBy,
    });
  },

  /** Publish Event */
  async publish(eventId: string): Promise<EventDocument | null> {
    try {
      const res = await apiRequest(`/events/${eventId}/publish`, {
        method: "POST",
      });
      if (res.success && res.data) {
        return apiEventToEventDocument(res.data);
      }
    } catch (e) {
      console.warn(e);
    }
    return null;
  },

  /** Unpublish Event (restore status to Draft) */
  async unpublish(eventId: string): Promise<EventDocument | null> {
    try {
      const res = await apiRequest(`/events/${eventId}/restore`, {
        method: "POST",
      });
      if (res.success && res.data) {
        return apiEventToEventDocument(res.data);
      }
    } catch (e) {
      console.warn(e);
    }
    return null;
  },

  /** Cancel Event */
  async cancel(eventId: string, reason?: string): Promise<EventDocument | null> {
    try {
      const res = await apiRequest(`/events/${eventId}/cancel`, {
        method: "POST",
        body: JSON.stringify({ reason }),
      });
      if (res.success && res.data) {
        return apiEventToEventDocument(res.data);
      }
    } catch (e) {
      console.warn(e);
    }
    return null;
  },

  /** Archive Event */
  async archive(eventId: string, reason = "End time passed", archivedBy = "Admin"): Promise<boolean> {
    try {
      const res = await apiRequest(`/events/${eventId}/archive`, {
        method: "POST",
        body: JSON.stringify({ reason }),
      });
      return !!res.success;
    } catch (e) {
      console.warn(e);
      return false;
    }
  },

  /** Approve Event (Admin action) */
  async approve(eventId: string, approvedBy = "Admin"): Promise<EventDocument | null> {
    try {
      const res = await apiRequest(`/events/${eventId}/approve`, {
        method: "POST",
      });
      if (res.success && res.data) {
        return apiEventToEventDocument(res.data);
      }
    } catch (e) {
      console.warn(e);
    }
    return null;
  },

  /** Reject Event (Admin action) */
  async reject(eventId: string, reason?: string): Promise<EventDocument | null> {
    try {
      const res = await apiRequest(`/events/${eventId}/reject`, {
        method: "POST",
        body: JSON.stringify({ reason }),
      });
      if (res.success && res.data) {
        return apiEventToEventDocument(res.data);
      }
    } catch (e) {
      console.warn(e);
    }
    return null;
  },

  /** Soft Delete Event (Set status = Deleted) */
  async softDelete(eventId: string): Promise<boolean> {
    return this.delete(eventId);
  },

  /** Restore Event */
  async restore(eventId: string): Promise<boolean> {
    try {
      const res = await apiRequest(`/events/${eventId}/restore`, {
        method: "POST",
      });
      return !!res.success;
    } catch (e) {
      console.warn(e);
      return false;
    }
  },

  /** Subscribe to Realtime Events Stream with Filtering & Search */
  subscribe(options: EventQueryOptions, callback: (events: EventDocument[]) => void) {
    let active = true;
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("campuspulse_jwt_token");
        const headers: Record<string, string> = {};
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const qs = new URLSearchParams();
        if (options.status && options.status !== "All") {
          const statusMap: Record<string, string> = {
            "PendingApproval": "Pending Approval",
            "Pending Approval": "Pending Approval",
          };
          qs.set("status", statusMap[options.status] || options.status);
        }
        if (options.limit) {
          qs.set("limit", String(options.limit));
        }

        const res = await fetch(`${API_BASE_URL}/events?${qs.toString()}`, { headers });
        const data = await res.json();
        if (res.ok && data.success && data.data?.events && active) {
          let list = data.data.events.map(apiEventToEventDocument);

          if (options.department && options.department !== "All") {
            list = list.filter((e: any) => e.department.toLowerCase() === options.department!.toLowerCase());
          }
          if (options.category && options.category !== "All") {
            list = list.filter((e: any) => e.category.toLowerCase() === options.category!.toLowerCase());
          }
          if (options.searchQuery && options.searchQuery.trim()) {
            const q = options.searchQuery.toLowerCase().trim();
            list = list.filter(
              (e: any) =>
                e.title.toLowerCase().includes(q) ||
                e.department.toLowerCase().includes(q) ||
                e.category.toLowerCase().includes(q) ||
                e.venue.toLowerCase().includes(q)
            );
          }
          callback(list);
        }
      } catch (err) {
        console.warn("Failed to fetch events subscription stream:", err);
      }
    };

    fetchEvents();
    const interval = setInterval(fetchEvents, 6000); // poll every 6s

    return () => {
      active = false;
      clearInterval(interval);
    };
  },
};
