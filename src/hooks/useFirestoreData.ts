import { useState, useEffect } from "react";
import {
  subscribeEvents,
  fetchAnnouncements,
  fetchRegistrations,
  type EventDocument,
  type FirestoreEventStatus,
  type AnnouncementDocument,
  type RegistrationDocument,
} from "@/lib/firestore";

/**
 * Custom hook for real-time Firestore Events stream
 */
export function useFirestoreEvents(statusFilter?: FirestoreEventStatus) {
  const [events, setEvents] = useState<EventDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeEvents((liveEvents) => {
      if (statusFilter) {
        setEvents(liveEvents.filter((e) => e.status === statusFilter));
      } else {
        setEvents(liveEvents);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [statusFilter]);

  return { events, loading, error };
}

/**
 * Custom hook for single Firestore Event by ID
 */
export function useFirestoreEventDetail(eventId: string) {
  const [event, setEvent] = useState<EventDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeEvents((liveEvents) => {
      const found = liveEvents.find((e) => e.eventId === eventId) || null;
      setEvent(found);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [eventId]);

  return { event, loading };
}

/**
 * Custom hook for Firestore Announcements
 */
export function useFirestoreAnnouncements() {
  const [announcements, setAnnouncements] = useState<AnnouncementDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements()
      .then((data) => setAnnouncements(data))
      .finally(() => setLoading(false));
  }, []);

  return { announcements, loading };
}

/**
 * Custom hook for Firestore Registrations
 */
export function useFirestoreRegistrations(eventId?: string) {
  const [registrations, setRegistrations] = useState<RegistrationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations(eventId)
      .then((data) => setRegistrations(data))
      .finally(() => setLoading(false));
  }, [eventId]);

  return { registrations, loading };
}
