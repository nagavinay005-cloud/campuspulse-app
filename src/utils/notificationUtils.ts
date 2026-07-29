import type { FirestoreNotification, NotificationPriority } from "@/types/notificationTypes";

/**
 * Priority tone styling utility for notification UI
 */
export function getPriorityStyle(priority: NotificationPriority) {
  switch (priority) {
    case "urgent":
      return "bg-danger-soft text-danger border-danger/30 font-bold";
    case "high":
      return "bg-warning-soft text-warning border-warning/30 font-semibold";
    case "medium":
      return "bg-primary-soft text-primary border-primary/30";
    case "low":
    default:
      return "bg-secondary text-muted-foreground border-border";
  }
}

/**
 * Filter notifications by date range
 */
export function filterNotificationsByTimeRange(
  notifications: FirestoreNotification[],
  range: "All" | "Today" | "Yesterday" | "ThisWeek",
) {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const yesterdayStart = todayStart - 86400000;
  const weekStart = todayStart - 7 * 86400000;

  return notifications.filter((n) => {
    const time = new Date(n.createdAt).getTime();
    if (range === "Today") return time >= todayStart;
    if (range === "Yesterday") return time >= yesterdayStart && time < todayStart;
    if (range === "ThisWeek") return time >= weekStart;
    return true;
  });
}
