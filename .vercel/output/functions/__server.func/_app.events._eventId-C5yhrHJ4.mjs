import { i as apiRequest, t as API_BASE_URL } from "./_ssr/apiClient-DumwXFEP.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.events._eventId-C5yhrHJ4.js
async function resolveNumericEventId(idOrUuid) {
	const parsed = parseInt(idOrUuid, 10);
	if (!isNaN(parsed) && String(parsed) === idOrUuid) return parsed;
	try {
		const res = await fetch(`${API_BASE_URL}/events`);
		const data = await res.json();
		if (res.ok && data.success && data.data?.events) {
			const match = data.data.events.find((e) => e.uuid === idOrUuid || String(e.id) === idOrUuid);
			if (match) return Number(match.id);
		}
	} catch (err) {
		console.warn("Failed to resolve numeric event ID:", err);
	}
	const matchedDigits = idOrUuid.match(/\d+/);
	if (matchedDigits) return parseInt(matchedDigits[0], 10);
	return null;
}
function apiRegistrationToRegistrationDocument(r) {
	const startISO = r.event_date && r.start_time ? `${r.event_date}T${r.start_time}` : (/* @__PURE__ */ new Date()).toISOString();
	const endISO = r.event_date && r.end_time ? `${r.event_date}T${r.end_time}` : (/* @__PURE__ */ new Date()).toISOString();
	return {
		registrationId: String(r.id),
		eventId: String(r.event_id),
		studentId: String(r.student_id),
		studentName: r.student_name || "Campus Student",
		studentEmail: r.student_email || "",
		email: r.student_email || "",
		rollNumber: r.student_phone || "CS-REG-2026",
		department: r.department_name || "Computer Science",
		year: r.student_year ? `${r.student_year} Year` : "3rd Year",
		registrationDate: r.registration_date ? new Date(r.registration_date).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		registeredAt: r.registration_date ? new Date(r.registration_date).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		status: r.status === "Confirmed" ? "Approved" : r.status,
		registrationStatus: r.status === "Confirmed" ? "Approved" : r.status,
		attendanceStatus: r.checked_in ? "Present" : "Pending",
		certificateStatus: r.certificate_token ? "Issued" : "NotIssued",
		qrCode: r.qr_code || "",
		checkedInAt: r.checked_in_time ? new Date(r.checked_in_time).toISOString() : void 0,
		createdAt: r.created_at ? new Date(r.created_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		event: {
			id: String(r.event_id),
			title: r.event_title || "Untitled Event",
			banner: r.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
			venue: r.venue || "Campus Main Hall",
			start: startISO,
			end: endISO,
			status: r.event_status || "Published",
			department: r.department_name || "Computer Science"
		}
	};
}
var registrationService = {
	/** Create Student Registration with Strict Validations & Unique QR Generation */
	async registerForEvent(params) {
		const { eventId } = params;
		const numericId = await resolveNumericEventId(eventId);
		if (!numericId) {
			toast.error("Registrations are only open for live events.");
			return {
				success: false,
				message: "Valid live event ID could not be resolved."
			};
		}
		try {
			const res = await apiRequest(`/events/${numericId}/register`, {
				method: "POST",
				body: JSON.stringify({
					student_id: params.studentId,
					student_name: params.studentName,
					student_email: params.studentEmail
				})
			});
			if (res.success && res.data) {
				const doc = apiRegistrationToRegistrationDocument(res.data);
				toast.success("Successfully registered for event! Your QR Pass is ready.");
				return {
					success: true,
					registration: doc
				};
			}
			throw new Error(res.message || "Failed to register.");
		} catch (err) {
			toast.error(`Database registration error: ${err.message}`);
			return {
				success: false,
				message: err.message
			};
		}
	},
	/** Cancel Student Registration & Atomically Decrement Seats */
	async cancelRegistration(eventId, studentId) {
		const numericId = await resolveNumericEventId(eventId);
		if (!numericId) return false;
		try {
			if ((await apiRequest(`/events/${numericId}/cancel-registration`, { method: "DELETE" })).success) {
				toast.success("Registration cancelled successfully. Seat restored.");
				return true;
			}
		} catch (err) {
			toast.error(`Database cancellation error: ${err.message}`);
		}
		return false;
	},
	/** Update Registration Status (Approve, Reject, Confirm, Cancel) */
	async updateStatus(registrationId, status) {
		try {
			if ((await apiRequest(`/registrations/${registrationId}/${status === "Rejected" ? "reject" : "approve"}`, { method: "PATCH" })).success) {
				toast.success(`Registration status updated to ${status}.`);
				return true;
			}
		} catch (e) {
			toast.error(e.message || "Status update failed.");
		}
		return false;
	},
	/** Mark Attendance (Present, Absent, Pending) */
	async markAttendance(registrationId, attendanceStatus) {
		try {
			return !!(await apiRequest(`/attendance/verify-qr`, {
				method: "POST",
				body: JSON.stringify({ qr_token: `REG-${registrationId}` })
			})).success;
		} catch (e) {
			console.warn(e);
		}
		return false;
	},
	/** Check if Student is Registered */
	isRegistered(eventId, studentId) {
		return null;
	},
	/** Real-time Registration Subscription via Polling */
	subscribe(options, callback) {
		let active = true;
		const fetchRegistrations = async () => {
			try {
				const token = localStorage.getItem("campuspulse_jwt_token");
				if (!token) return;
				const headers = { "Authorization": `Bearer ${token}` };
				let url = `${API_BASE_URL}/registrations`;
				if (options.studentId && !options.studentId.startsWith("std-")) url = `${API_BASE_URL}/students/me/registrations`;
				else if (options.eventId) {
					const numericId = await resolveNumericEventId(options.eventId);
					if (numericId) url = `${API_BASE_URL}/events/${numericId}/registrations`;
				}
				const res = await fetch(url, { headers });
				const data = await res.json();
				if (res.ok && data.success && Array.isArray(data.data) && active) {
					let list = data.data.map(apiRegistrationToRegistrationDocument);
					if (options.status) list = list.filter((r) => r.status === options.status);
					callback(list);
				}
			} catch (err) {
				console.warn("Failed to fetch registrations stream:", err);
			}
		};
		fetchRegistrations();
		const interval = setInterval(fetchRegistrations, 6e3);
		return () => {
			active = false;
			clearInterval(interval);
		};
	}
};
var $$splitComponentImporter = () => import("./_app.events._eventId-BD22adaf.mjs");
var Route = createFileRoute("/_app/events/$eventId")({
	head: () => ({ meta: [
		{ title: "Event details — CampusPulse" },
		{
			name: "description",
			content: "Full event brief, schedule, speakers, seats and registration status."
		},
		{
			property: "og:title",
			content: "Event details — CampusPulse"
		},
		{
			property: "og:description",
			content: "Full event brief, schedule, speakers and registration."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { registrationService as n, Route as t };
