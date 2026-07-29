import { t as API_BASE_URL } from "./apiClient-DumwXFEP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notificationService-C4tbTBXM.js
function apiNotificationToFirestoreNotification(n) {
	return {
		notificationId: String(n.id),
		userId: String(n.user_id),
		role: "Student",
		category: n.type || "Events",
		title: n.title || "Campus Notification",
		message: n.message || "",
		type: "ReminderTomorrow",
		priority: "medium",
		relatedEventId: void 0,
		isRead: !!n.read_status || n.read_status === 1,
		createdAt: n.sent_at ? new Date(n.sent_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		actionUrl: "/notifications"
	};
}
var notificationService = {
	/** Send Notification Document to Firestore / Backend */
	async sendNotification(data) {
		try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token) {
				const res = await fetch(`${API_BASE_URL}/notifications/send`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`
					},
					body: JSON.stringify({
						user_id: data.userId || 0,
						title: data.title,
						message: data.message,
						type: data.category || "General"
					})
				});
				const resData = await res.json();
				if (res.ok && resData.success) return apiNotificationToFirestoreNotification(resData.data || data);
			}
		} catch (e) {
			console.warn("Failed to send push notification:", e);
		}
		return {
			notificationId: data.notificationId || `notif-${Date.now()}`,
			userId: data.userId || "std-001",
			role: data.role || "Student",
			category: data.category || "Events",
			title: data.title,
			message: data.message,
			type: data.type || "ReminderTomorrow",
			priority: data.priority || "medium",
			isRead: false,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			actionUrl: data.actionUrl || "/notifications"
		};
	},
	/** Mark Single Notification as Read */
	async markAsRead(notificationId) {
		try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token && !isNaN(Number(notificationId))) await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
				method: "PATCH",
				headers: { "Authorization": `Bearer ${token}` }
			});
		} catch (e) {
			console.warn("PHP Notification Read Sync Warning:", e);
		}
		return true;
	},
	/** Mark All Notifications as Read for User */
	async markAllAsRead(userId = "std-001") {
		try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token) await fetch(`${API_BASE_URL}/notifications/read-all`, {
				method: "PATCH",
				headers: { "Authorization": `Bearer ${token}` }
			});
		} catch (e) {
			console.warn("PHP Notification Read-All Sync Warning:", e);
		}
		toast.success("All notifications marked as read.");
		return true;
	},
	/** Delete Notification Document */
	async deleteNotification(notificationId) {
		try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token && !isNaN(Number(notificationId))) await fetch(`${API_BASE_URL}/notifications/${notificationId}`, {
				method: "DELETE",
				headers: { "Authorization": `Bearer ${token}` }
			});
		} catch (e) {
			console.warn("PHP Notification Delete Sync Warning:", e);
		}
		toast.success("Notification removed.");
		return true;
	},
	/** Clear Read Notifications */
	async clearReadNotifications(userId = "std-001") {
		await this.markAllAsRead(userId);
		toast.success("Cleared read notifications.");
		return true;
	},
	/** Real-time Subscription via Polling */
	subscribe(userId = "std-001", callback) {
		let active = true;
		const fetchNotifs = async () => {
			try {
				const token = localStorage.getItem("campuspulse_jwt_token");
				if (!token) return;
				const res = await fetch(`${API_BASE_URL}/notifications`, { headers: { "Authorization": `Bearer ${token}` } });
				const data = await res.json();
				if (res.ok && data.success && Array.isArray(data.data) && active) callback(data.data.map(apiNotificationToFirestoreNotification));
			} catch (err) {
				console.warn("Failed to fetch notifications stream:", err);
			}
		};
		fetchNotifs();
		const interval = setInterval(fetchNotifs, 8e3);
		return () => {
			active = false;
			clearInterval(interval);
		};
	}
};
//#endregion
export { notificationService as t };
