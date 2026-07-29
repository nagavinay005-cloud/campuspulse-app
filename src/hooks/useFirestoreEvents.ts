import { useEffect, useState, useCallback } from "react";
import { firestoreEventService } from "@/services/firestoreEventService";
import { firestoreEventToCampusEvent } from "@/types/firestoreEvent";
import type { CampusEvent } from "@/data/mock";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export function useFirestoreEvents(pageSize: number = 9) {
  const [events, setEvents] = useState<CampusEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchInitialEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Ensure sample events are seeded in Firestore if collection is empty
      await firestoreEventService.seedSampleEventsIfEmpty();

      // 2. Fetch first page of published, upcoming events
      const res = await firestoreEventService.getPublishedUpcomingEvents(pageSize, null);
      
      const mapped = res.events.map((e) => firestoreEventToCampusEvent(e.id, e.data));
      import("@/data/mock").then(({ events: mockEvents }) => {
        const firestoreIds = new Set(mapped.map((m) => m.id));
        const combined = [...mapped, ...mockEvents.filter((m) => !firestoreIds.has(m.id))];
        setEvents(combined);
      });
      setLastDoc(res.lastDoc);
      setHasMore(res.events.length === pageSize);
    } catch (err: any) {
      console.error("Error loading Firestore events, falling back to mock events:", err);
      import("@/data/mock").then(({ events: mockEvents }) => {
        setEvents(mockEvents);
      });
      setError(err.message || "Failed to load events from Firestore.");
    } finally {
      setLoading(false);
    }
  }, [pageSize]);

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore || !lastDoc) return;
    setLoadingMore(true);
    try {
      const res = await firestoreEventService.getPublishedUpcomingEvents(pageSize, lastDoc);
      const mapped = res.events.map((e) => firestoreEventToCampusEvent(e.id, e.data));
      
      setEvents((prev) => {
        // Prevent duplicate IDs
        const existingIds = new Set(prev.map((e) => e.id));
        const filteredNew = mapped.filter((e) => !existingIds.has(e.id));
        return [...prev, ...filteredNew];
      });
      
      setLastDoc(res.lastDoc);
      setHasMore(res.events.length === pageSize);
    } catch (err: any) {
      console.error("Error loading more Firestore events:", err);
      setError(err.message || "Failed to load more events.");
    } finally {
      setLoadingMore(false);
    }
  }, [pageSize, lastDoc, hasMore, loadingMore]);

  useEffect(() => {
    fetchInitialEvents();
  }, [fetchInitialEvents]);

  return {
    events,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
    refresh: fetchInitialEvents,
  };
}
