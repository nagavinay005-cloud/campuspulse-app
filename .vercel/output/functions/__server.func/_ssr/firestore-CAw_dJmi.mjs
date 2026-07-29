import { r as __exportAll } from "../_runtime.mjs";
import { f as events } from "./mock-CEuLP2kB.mjs";
import { n as __exportAll$1, t as API_BASE_URL } from "./apiClient-DumwXFEP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firestore-CAw_dJmi.js
var firestore_CAw_dJmi_exports = /* @__PURE__ */ __exportAll({
	i: () => restoreEvent,
	n: () => fetchEvents,
	r: () => firestore_exports,
	t: () => archiveEvent
});
var firestore_exports = /* @__PURE__ */ __exportAll$1({
	archiveEvent: () => archiveEvent,
	fetchEvents: () => fetchEvents,
	readEvent: () => readEvent,
	restoreEvent: () => restoreEvent,
	updateEvent: () => updateEvent
});
var initialEventsStore = events.map((e) => ({
	eventId: e.id,
	title: e.title,
	summary: e.summary,
	description: e.description,
	category: e.category,
	department: e.department,
	club: e.club,
	organizerId: "organizer-1",
	organizerName: e.organizer,
	banner: e.banner,
	gallery: [],
	venue: e.venue,
	mode: "In-Person",
	startDate: e.start.split("T")[0],
	startTime: "10:00 AM",
	endDate: e.end.split("T")[0],
	endTime: "04:00 PM",
	registrationDeadline: e.start,
	maxParticipants: e.seats,
	currentParticipants: e.registered,
	status: e.status === "Pending Approval" ? "PendingApproval" : e.status,
	createdAt: (/* @__PURE__ */ new Date()).toISOString(),
	updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
	tags: e.tags,
	certificateEnabled: e.certificate,
	feedbackEnabled: true,
	visibility: "Public"
}));
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() + 864e5).toISOString(), (/* @__PURE__ */ new Date()).toISOString(), (/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() + 1728e5).toISOString(), (/* @__PURE__ */ new Date()).toISOString();
var initialArchiveLogsStore = [{
	archiveId: "arch-1",
	eventId: "arch-ev-1",
	eventTitle: "Cybersecurity CTF 2025",
	archivedAt: (/* @__PURE__ */ new Date(Date.now() - 36e5)).toISOString(),
	archivedBy: "Auto-Archive Daemon",
	archiveReason: "Event end time passed + 1hr SLA rule",
	attendanceCount: 158,
	certificateCount: 148,
	feedbackCount: 98
}];
var eventListeners = [];
/** Read Event */
async function readEvent(eventId) {
	return initialEventsStore.find((e) => e.eventId === eventId) || null;
}
/** Update Event */
async function updateEvent(eventId, updateData) {
	const idx = initialEventsStore.findIndex((e) => e.eventId === eventId);
	if (idx !== -1) {
		initialEventsStore[idx] = {
			...initialEventsStore[idx],
			...updateData,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		notifyEventListeners();
		try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token && updateData.status) {
				let endpoint = "";
				if (updateData.status === "Approved") endpoint = `/events/${eventId}/approve`;
				else if (updateData.status === "PendingApproval") endpoint = `/events/${eventId}/submit`;
				else if (updateData.status === "Cancelled") endpoint = `/events/${eventId}/cancel`;
				if (endpoint) fetch(`${API_BASE_URL}${endpoint}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`
					}
				}).catch((e) => console.warn("PHP API Status Sync Warning:", e));
			}
		} catch (err) {}
		return initialEventsStore[idx];
	}
	return null;
}
/** Archive Event */
async function archiveEvent(eventId, archiveReason = "End time passed", archivedBy = "Admin") {
	const ev = await readEvent(eventId);
	if (ev) {
		ev.status = "Archived";
		ev.archivedAt = (/* @__PURE__ */ new Date()).toISOString();
		ev.archiveReason = archiveReason;
		initialArchiveLogsStore.unshift({
			archiveId: `arch-${Date.now()}`,
			eventId: ev.eventId,
			eventTitle: ev.title,
			archivedAt: ev.archivedAt,
			archivedBy,
			archiveReason,
			attendanceCount: ev.currentParticipants,
			certificateCount: Math.round(ev.currentParticipants * .9),
			feedbackCount: Math.round(ev.currentParticipants * .6)
		});
		notifyEventListeners();
		return true;
	}
	return false;
}
/** Restore Event */
async function restoreEvent(eventId) {
	const ev = await readEvent(eventId);
	if (ev) {
		ev.status = "Published";
		ev.archivedAt = void 0;
		notifyEventListeners();
		return true;
	}
	return false;
}
/** Fetch Events */
async function fetchEvents(status) {
	if (status) return initialEventsStore.filter((e) => e.status === status);
	return [...initialEventsStore];
}
function notifyEventListeners() {
	eventListeners.forEach((fn) => fn([...initialEventsStore]));
}
//#endregion
export { restoreEvent as i, fetchEvents as n, firestore_CAw_dJmi_exports as r, archiveEvent as t };
