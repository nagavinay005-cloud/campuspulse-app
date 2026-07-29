import { o as __toESM } from "../_runtime.mjs";
import { t as API_BASE_URL } from "./apiClient-CVoaAdKq.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useLiveEvents-BMkuW3IC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var API_BASE = API_BASE_URL;
/**
* Convert a MySQL API event record to the CampusEvent shape used across all UI components.
* This avoids changing any UI layouts or component props — only the data source changes.
*/
function apiEventToCampusEvent(e) {
	const startISO = e.event_date && e.start_time ? `${e.event_date}T${e.start_time}` : (/* @__PURE__ */ new Date()).toISOString();
	const endISO = e.event_date && e.end_time ? `${e.event_date}T${e.end_time}` : new Date(Date.now() + 144e5).toISOString();
	return {
		id: e.uuid || String(e.id),
		dbId: e.id ? Number(e.id) : void 0,
		title: e.title || "Untitled Event",
		summary: e.description ? e.description.slice(0, 140) + "…" : "Campus event",
		description: e.description || "",
		banner: e.banner && e.banner !== "/uploads/events/default_banner.png" ? e.banner : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
		category: e.category || "Technical",
		department: e.department_name || "Computer Science",
		club: e.club_name || "Campus Club",
		organizer: e.organizer_name || "Event Desk",
		organizerAvatar: (e.organizer_name || "E")[0],
		venue: e.venue || "Campus Main Hall",
		start: startISO,
		end: endISO,
		seats: e.capacity || 100,
		registered: e.registered_count || 0,
		attended: e.attended_count || 0,
		status: e.status === "Pending Approval" ? "Pending Approval" : e.status || "Published",
		featured: false,
		certificate: true,
		fee: 0,
		tags: e.tags ? Array.isArray(e.tags) ? e.tags : [e.tags] : ["Campus"],
		speakers: [],
		contact: {
			email: e.organizer_email || "events@campus.edu",
			phone: "+91 98450 11223"
		}
	};
}
/**
* Fetch live events from the PHP REST API.
* If a JWT token is available, sends it for role-scoped results.
* Falls back gracefully to mock data on error.
*/
function useLiveEvents(params) {
	const [events, setEvents] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const fetchEvents = async () => {
			setLoading(true);
			try {
				const token = localStorage.getItem("campuspulse_jwt_token");
				const headers = { "Content-Type": "application/json" };
				if (token) headers["Authorization"] = `Bearer ${token}`;
				const qs = new URLSearchParams();
				if (params?.status) qs.set("status", params.status);
				if (params?.organizer_id) qs.set("organizer_id", String(params.organizer_id));
				qs.set("limit", "100");
				const data = await (await fetch(`${API_BASE}/events?${qs.toString()}`, { headers })).json();
				if (data.success && data.data?.events) setEvents(data.data.events.map(apiEventToCampusEvent));
				else setError(data.message || "Failed to fetch events");
			} catch (err) {
				console.warn("Live events fetch error:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchEvents();
	}, [params?.status, params?.organizer_id]);
	return {
		events,
		loading,
		error,
		setEvents
	};
}
//#endregion
export { useLiveEvents as n, apiEventToCampusEvent as t };
