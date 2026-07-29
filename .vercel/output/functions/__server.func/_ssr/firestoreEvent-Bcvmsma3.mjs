//#region node_modules/.nitro/vite/services/ssr/assets/firestoreEvent-Bcvmsma3.js
function firestoreEventToCampusEvent(id, doc) {
	const startDateTime = doc.date && doc.time ? `${doc.date}T${doc.time}` : (/* @__PURE__ */ new Date()).toISOString();
	const endDateTime = doc.date && doc.time ? new Date((/* @__PURE__ */ new Date(`${doc.date}T${doc.time}`)).getTime() + 72e5).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
	return {
		id,
		title: doc.title || "Untitled Event",
		summary: doc.description ? doc.description.length > 120 ? doc.description.substring(0, 120) + "..." : doc.description : "",
		description: doc.description || "",
		banner: doc.bannerUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
		category: doc.category || "Technical",
		department: doc.department || "Computer Science",
		club: doc.organizerName || "Campus Club",
		organizer: doc.organizerName || "Campus Organizer",
		organizerAvatar: (doc.organizerName || "O").charAt(0).toUpperCase(),
		venue: doc.venue || "Campus Main Hall",
		start: startDateTime,
		end: endDateTime,
		seats: 100,
		registered: doc.participantsCount || 0,
		status: doc.status === "published" ? "Published" : "Draft",
		certificate: true,
		fee: 0,
		tags: [doc.category || "Campus", doc.eventMode || "Offline"],
		speakers: [],
		contact: {
			email: "events@campus.edu",
			phone: ""
		}
	};
}
//#endregion
export { firestoreEventToCampusEvent as t };
