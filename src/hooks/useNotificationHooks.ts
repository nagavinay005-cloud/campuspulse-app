import { useState, useEffect } from "react";
import { notificationService } from "@/services/notificationService";
import type { FirestoreNotification } from "@/types/notificationTypes";

/**
 * Hook for live real-time Firestore Notifications stream
 */
export function useNotifications(userId = "std-001") {
  const [notifications, setNotifications] = useState<FirestoreNotification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = notificationService.subscribe(userId, (data) => {
      setNotifications(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return { notifications, unreadCount, loading };
}

/**
 * Hook for Unread Notification Counter
 */
export function useUnreadCount(userId = "std-001") {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = notificationService.subscribe(userId, (data) => {
      setCount(data.filter((n) => !n.isRead).length);
    });

    return () => unsubscribe();
  }, [userId]);

  return count;
}
