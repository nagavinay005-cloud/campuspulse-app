import { useState, useEffect } from "react";
import { eventService, type EventQueryOptions } from "@/services/eventService";
import type { EventDocument } from "@/lib/firestore";

/**
 * Hook for live real-time Firestore Events stream with filter & search
 */
export function useEvents(options: EventQueryOptions = {}) {
  const [events, setEvents] = useState<EventDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = eventService.subscribe(options, (data) => {
      setEvents(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [
    options.status,
    options.department,
    options.category,
    options.searchQuery,
    options.organizerId,
    options.limit,
  ]);

  return { events, loading };
}

/**
 * Hook for Student Event Feed (Approved, Published, Upcoming, Live)
 */
export function useStudentEventFeed(searchQuery?: string, category?: string, department?: string) {
  const [events, setEvents] = useState<EventDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = eventService.subscribe(
      { searchQuery, category, department },
      (allData) => {
        const studentFeed = allData.filter((e) =>
          ["Approved", "Published", "Upcoming", "Live"].includes(e.status),
        );
        setEvents(studentFeed);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [searchQuery, category, department]);

  return { events, loading };
}

/**
 * Hook for Organizer's own events
 */
export function useOrganizerEvents(organizerId = "organizer-1") {
  const [events, setEvents] = useState<EventDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = eventService.subscribe({ organizerId }, (data) => {
      setEvents(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [organizerId]);

  return { events, loading };
}

/**
 * Hook for Admin Approval Center events
 */
export function useAdminApprovalEvents() {
  const [events, setEvents] = useState<EventDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = eventService.subscribe({}, (data) => {
      setEvents(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { events, loading };
}

/**
 * Hook for Single Event Details
 */
export function useEventDetail(eventId: string) {
  const [event, setEvent] = useState<EventDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = eventService.subscribe({}, (allData) => {
      const found = allData.find((e) => e.eventId === eventId) || null;
      setEvent(found);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [eventId]);

  return { event, loading };
}
