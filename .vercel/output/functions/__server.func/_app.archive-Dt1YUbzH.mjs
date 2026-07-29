import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { Qt as Award, T as Search, i as Users, nn as Archive } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader, t as EmptyState } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { t as EventCard } from "./_ssr/event-card-CqUHw6nG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.archive-Dt1YUbzH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchivePage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [archived, setArchived] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const headers = { "Authorization": `Bearer ${localStorage.getItem("campuspulse_jwt_token")}` };
		import("./_ssr/apiClient-DumwXFEP.mjs").then((n) => n.r).then((n) => n.n).then(({ API_BASE_URL }) => {
			fetch(`${API_BASE_URL}/archive/events`, { headers }).then((res) => res.json()).then((data) => {
				if (data.success && data.data?.events) {
					const mapped = data.data.events.map((e) => ({
						id: e.uuid || String(e.id),
						dbId: e.id,
						title: e.title || "Untitled Event",
						banner: e.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
						venue: e.venue || "Campus Main Hall",
						start: e.event_date && e.start_time ? `${e.event_date}T${e.start_time}` : (/* @__PURE__ */ new Date()).toISOString(),
						end: e.event_date && e.end_time ? `${e.event_date}T${e.end_time}` : (/* @__PURE__ */ new Date()).toISOString(),
						seats: e.capacity || 100,
						registered: e.registered_count || 0,
						attended: e.attended_count || 0,
						status: "Archived",
						category: e.category || "Technical",
						department: e.department_name || "Computer Science",
						club: e.club_name || "Campus Club",
						organizer: e.organizer_name || "Event Desk",
						certificate: true
					}));
					setArchived(mapped);
				}
				setLoading(false);
			}).catch((err) => {
				console.warn(err);
				setLoading(false);
			});
		});
	}, []);
	const list = archived.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()));
	const totalAttended = archived.reduce((s, e) => s + (e.attended ?? 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Archived Events",
			subtitle: "Auto-archived the moment their scheduled end time passed",
			breadcrumb: [
				{
					label: "CampusPulse",
					to: "/"
				},
				{
					label: "Student",
					to: "/dashboard"
				},
				{ label: "Archive" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl bg-card",
				onClick: () => toast.success("Archive exported as CSV"),
				children: "Export archive"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface mb-6 flex flex-col gap-3 border-l-4 border-l-primary p-5 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: "Automatic expiry is active"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "When an event's end datetime passes, CampusPulse removes it from the active feed, closes registrations permanently, preserves the full event brief and attendance summary, and applies the Archived badge."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Archived events",
					value: archived.length,
					icon: Archive,
					index: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Total attendance",
					value: totalAttended,
					icon: Users,
					tone: "success",
					index: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Certificates issued",
					value: 422,
					icon: Award,
					tone: "warning",
					index: 2
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative my-6 max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search the archive…",
				className: "h-11 rounded-2xl bg-card pl-10"
			})]
		}),
		list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Archive,
			title: "No archived events found",
			description: "Nothing in the archive matches that search."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
			children: list.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
				event: e,
				index: i
			}, e.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
			title: "Attendance summaries",
			description: "Frozen snapshots retained for reporting",
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border p-4 sm:flex sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: e.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["Ended ", format(new Date(e.end), "dd MMM yyyy, h:mm a")]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "rounded-full",
								children: [e.registered, " registered"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "rounded-full",
								children: [e.attended, " attended"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "rounded-full border-success/30 bg-success-soft text-success",
								children: e.certificate ? "Certificates available" : "No certificate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "rounded-full",
								children: "Archived"
							})
						]
					})]
				}, e.id))
			})
		})] })
	] });
}
//#endregion
export { ArchivePage as component };
