import { useState, useEffect } from "react";
import { analyticsService, type PlatformMetrics, type ActivityFeedItem } from "@/services/analyticsService";

/**
 * Hook for live real-time Platform Metrics stream
 */
export function usePlatformMetrics() {
  const [metrics, setMetrics] = useState<PlatformMetrics>(analyticsService.getMetrics());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = analyticsService.subscribe((data) => {
      setMetrics(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { metrics, loading };
}

/**
 * Hook for live real-time Activity Feed stream
 */
export function useActivityFeed() {
  const [feed, setFeed] = useState<ActivityFeedItem[]>(analyticsService.getActivityFeed());

  return { feed };
}
