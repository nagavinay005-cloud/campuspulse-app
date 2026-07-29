// Cloud Firestore Real-time Analytics Repository Service for CampusPulse
// Aggregates platform KPIs, event lifecycle distribution, attendance trends, certificate statistics, and activity feeds
import { apiRequest } from "./apiClient";

export interface PlatformMetrics {
  totalEvents: number;
  activeEvents: number;
  upcomingEvents: number;
  liveEvents: number;
  completedEvents: number;
  archivedEvents: number;
  totalStudents: number;
  totalOrganizers: number;
  totalRegistrations: number;
  attendanceRate: number;
  certificatesGenerated: number;
  feedbackSubmitted: number;
}

export interface ActivityFeedItem {
  id: string;
  type: "EventCreated" | "RegistrationCompleted" | "AttendanceMarked" | "CertificateIssued" | "EventArchived";
  title: string;
  detail: string;
  timestamp: string;
}

let cachedMetrics: PlatformMetrics = {
  totalEvents: 0,
  activeEvents: 0,
  upcomingEvents: 0,
  liveEvents: 0,
  completedEvents: 0,
  archivedEvents: 0,
  totalStudents: 0,
  totalOrganizers: 0,
  totalRegistrations: 0,
  attendanceRate: 0,
  certificatesGenerated: 0,
  feedbackSubmitted: 0,
};

let cachedActivityFeed: ActivityFeedItem[] = [];

let metricsListeners: ((metrics: PlatformMetrics) => void)[] = [];

async function refreshAnalytics() {
  try {
    const res = await apiRequest("/reports/dashboard");
    const data = res.data || res;
    cachedMetrics = {
      totalEvents: data.total_events ?? 0,
      activeEvents: data.active_events ?? 0,
      upcomingEvents: data.active_events ?? 0,
      liveEvents: data.active_events ?? 0,
      completedEvents: data.completed_events ?? 0,
      archivedEvents: data.archived_events ?? 0,
      totalStudents: data.total_students ?? 0,
      totalOrganizers: data.total_organizers ?? 0,
      totalRegistrations: data.total_registrations ?? 0,
      attendanceRate: Math.round(data.attendance_percentage ?? 0),
      certificatesGenerated: data.certificates_generated ?? 0,
      feedbackSubmitted: data.notifications_sent ?? 0,
    };

    // Also fetch Audit Logs to populate activity feed
    try {
      const logsData = await apiRequest("/audit-logs");
      const list = logsData.data || logsData;
      if (Array.isArray(list)) {
        cachedActivityFeed = list.slice(0, 10).map((log: any) => {
          let type: ActivityFeedItem["type"] = "EventCreated";
          const actionLower = (log.action || "").toLowerCase();
          if (actionLower.includes("register") || actionLower.includes("sign")) {
            type = "RegistrationCompleted";
          } else if (actionLower.includes("attendance") || actionLower.includes("check") || actionLower.includes("scan")) {
            type = "AttendanceMarked";
          } else if (actionLower.includes("cert") || actionLower.includes("issue")) {
            type = "CertificateIssued";
          } else if (actionLower.includes("archive") || actionLower.includes("expire")) {
            type = "EventArchived";
          }
          
          return {
            id: String(log.id),
            type,
            title: log.action || "System Action",
            detail: log.detail || `Module: ${log.action_module}`,
            timestamp: log.created_at ? new Date(log.created_at).toLocaleString() : "Just now",
          };
        });
      }
    } catch (err) {
      console.warn("Failed to fetch audit logs for feed:", err);
    }

    metricsListeners.forEach((fn) => fn({ ...cachedMetrics }));
  } catch (err) {
    console.warn("Failed to refresh analytics:", err);
  }
}

// Start polling
let intervalId: any = null;

export const analyticsService = {
  /** Fetch Live Platform Metrics */
  getMetrics(): PlatformMetrics {
    return { ...cachedMetrics };
  },

  /** Fetch Live Activity Feed */
  getActivityFeed(): ActivityFeedItem[] {
    return [...cachedActivityFeed];
  },

  /** Real-time Metrics Subscription */
  subscribe(callback: (metrics: PlatformMetrics) => void) {
    metricsListeners.push(callback);
    callback({ ...cachedMetrics });

    if (!intervalId) {
      refreshAnalytics();
      intervalId = setInterval(refreshAnalytics, 10000); // Poll every 10 seconds
    }

    return () => {
      metricsListeners = metricsListeners.filter((fn) => fn !== callback);
      if (metricsListeners.length === 0 && intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  },
};
