import { o as __toESM } from "./_runtime.mjs";
import { _ as notifications, g as monthlyStats, m as isExpired, v as registrants, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { $t as ArrowUpRight, M as QrCode, Mt as CirclePlus, Nt as CircleCheck, Q as Layers, V as Megaphone, Vt as ChartColumn, Wt as CalendarClock, Xt as Bell, i as Users, it as Hourglass, j as Radio, lt as FolderArchive, nn as Archive, pt as FilePen, q as ListChecks } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { g as Link, m as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { r as StatusBadge } from "./_ssr/primitives-txGWT-aG.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { n as useLiveEvents } from "./_ssr/useLiveEvents-DycTSZ8b.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, u as Bar } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.organizer.index-CLzketS_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Route = createFileRoute("/_app/organizer/")({
	head: () => ({ meta: [
		{ title: "Organizer Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Run your club's events: registrations, attendance, certificates and analytics."
		},
		{
			property: "og:title",
			content: "Organizer Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Your club's event operations command centre."
		}
	] }),
	component: OrganizerDashboard
});
var SEVEN_STAGES = [
	{
		key: "Draft",
		label: "Draft",
		icon: FilePen,
		tone: "text-muted-foreground bg-secondary",
		description: "Created in wizard, pending submission"
	},
	{
		key: "Pending Approval",
		label: "Pending Approval",
		icon: Hourglass,
		tone: "text-warning bg-warning-soft",
		description: "Awaiting admin governance review"
	},
	{
		key: "Published",
		label: "Published",
		icon: Megaphone,
		tone: "text-primary bg-primary-soft",
		description: "Publicly visible on campus feed"
	},
	{
		key: "Upcoming",
		label: "Upcoming",
		icon: CalendarClock,
		tone: "text-accent bg-accent-soft",
		description: "Registrations active & ongoing"
	},
	{
		key: "Live",
		label: "Live",
		icon: Radio,
		tone: "text-danger bg-danger-soft animate-pulse",
		description: "Active check-ins and live sessions"
	},
	{
		key: "Completed",
		label: "Completed",
		icon: CircleCheck,
		tone: "text-success bg-success-soft",
		description: "Event finished, attendance locked"
	},
	{
		key: "Archived",
		label: "Archived",
		icon: Archive,
		tone: "text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-300",
		description: "Stored in permanent historical records"
	}
];
var organizerDeadlines = [
	{
		id: "d1",
		title: "HackFusion 2026 Registration Cutoff",
		event: "HackFusion 2026",
		due: "In 2 days",
		urgency: "high",
		time: "Fri, 6:00 PM"
	},
	{
		id: "d2",
		title: "System Design Venue Final Confirmation",
		event: "System Design Bootcamp",
		due: "In 4 days",
		urgency: "medium",
		time: "Sun, 12:00 PM"
	},
	{
		id: "d3",
		title: "Rhythm & Rangoli Certificate Batch Lock",
		event: "Rhythm & Rangoli",
		due: "Tomorrow",
		urgency: "high",
		time: "Thu, 5:00 PM"
	},
	{
		id: "d4",
		title: "Robotics Expo Safety Clearance Filing",
		event: "Robotics Expo",
		due: "In 6 days",
		urgency: "low",
		time: "Mon, 10:00 AM"
	}
];
function OrganizerDashboard() {
	const [selectedStageFilter, setSelectedStageFilter] = (0, import_react.useState)("All");
	const { events: liveEvents } = useLiveEvents();
	const [recentRegs, setRecentRegs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const token = localStorage.getItem("campuspulse_jwt_token");
		if (token) {
			const headers = { "Authorization": `Bearer ${token}` };
			import("./_ssr/apiClient-DumwXFEP.mjs").then((n) => n.r).then((n) => n.n).then(({ API_BASE_URL }) => {
				fetch(`${API_BASE_URL}/registrations`, { headers }).then((res) => res.json()).then((data) => {
					if (data.success && Array.isArray(data.data)) setRecentRegs(data.data.slice(0, 5));
				}).catch((e) => console.warn("Failed to fetch recent regs for dashboard:", e));
			});
		}
	}, []);
	const events = (0, import_react.useMemo)(() => {
		return liveEvents;
	}, [liveEvents]);
	const totalEvents = events.length;
	const upcomingEvents = events.filter((e) => resolveStatus(e) === "Upcoming" || e.status === "Upcoming").length;
	const liveEventsCount = events.filter((e) => resolveStatus(e) === "Live" || e.status === "Live").length;
	const completedEvents = events.filter((e) => resolveStatus(e) === "Completed" || e.status === "Completed").length;
	const archivedEvents = events.filter((e) => resolveStatus(e) === "Archived" || isExpired(e)).length;
	const totalRegistrations = events.reduce((acc, e) => acc + e.registered, 0);
	const displayEvents = selectedStageFilter === "All" ? events.slice(0, 6) : events.filter((e) => resolveStatus(e) === selectedStageFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Organizer Command Center",
				subtitle: "Codecraft Club · Computer Science & Engineering",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{ label: "Organizer" },
					{ label: "Dashboard" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/organizer/attendance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "rounded-xl bg-card shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-2 size-4 text-primary" }), " QR Check-In"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/organizer/create",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl shadow-glow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "mr-2 size-4" }), " Create Event"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Dashboard Overview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-xs font-normal",
					children: "Updated Realtime"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Events",
						value: totalEvents,
						delta: "Across all stages",
						icon: Layers,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Upcoming",
						value: upcomingEvents,
						delta: "Registrations open",
						icon: CalendarClock,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live Events",
						value: liveEventsCount,
						delta: "Check-in active",
						icon: Radio,
						tone: "danger",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Completed",
						value: completedEvents,
						delta: "Feedback stage",
						icon: CircleCheck,
						tone: "success",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived",
						value: archivedEvents,
						delta: "Auto-archived",
						icon: FolderArchive,
						tone: "warning",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Signups",
						value: totalRegistrations,
						delta: "+184 this week",
						icon: Users,
						tone: "success",
						index: 5
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Quick Actions",
				description: "Fast operations & management navigation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/organizer/create",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-xl bg-primary-soft text-primary transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Create Event"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Launch a new event wizard"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/organizer/events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Manage Events"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Edit & update schedules"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/organizer/registrations",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-xl bg-success-soft text-success transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "View Registrations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Student rosters & approvals"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/organizer/analytics",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-xl bg-warning-soft text-warning transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Analytics"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Attendance & growth stats"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/archive-manager",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/40 hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 place-items-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-300 transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Archive Manager"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Past logs & certificates"
									})]
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Event Lifecycle Tracker",
				description: "7-Stage progression pipeline: Draft → Pending Approval → Published → Upcoming → Live → Completed → Archived",
				action: selectedStageFilter !== "All" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => setSelectedStageFilter("All"),
					className: "rounded-xl text-xs",
					children: "Clear Filter"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7",
						children: SEVEN_STAGES.map((s, idx) => {
							const stageCount = events.filter((e) => resolveStatus(e) === s.key).length;
							const isSelected = selectedStageFilter === s.key;
							const Icon = s.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSelectedStageFilter(isSelected ? "All" : s.key),
								className: cn("relative flex flex-col items-start justify-between rounded-2xl border p-3.5 text-left transition-all", isSelected ? "border-primary bg-primary-soft/50 ring-2 ring-primary/20 shadow-sm" : "border-border bg-card hover:border-border/80 hover:bg-secondary/40"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex w-full items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("grid size-8 place-items-center rounded-xl text-xs font-semibold", s.tone),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: stageCount > 0 ? "default" : "secondary",
										className: "h-5 rounded-full px-1.5 text-[11px]",
										children: stageCount
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-semibold text-muted-foreground",
											children: [idx + 1, "."]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold truncate text-foreground",
											children: s.label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 line-clamp-2 text-[10px] text-muted-foreground",
										children: s.description
									})]
								})]
							}, s.key);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-secondary/30 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs font-medium text-muted-foreground mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lifecycle Workflow Pipeline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "7 Total Stages" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-7 gap-1",
							children: SEVEN_STAGES.map((st, i) => {
								const count = events.filter((e) => resolveStatus(e) === st.key).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-2 w-full rounded-full transition-all", count > 0 ? "bg-primary" : "bg-border") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-[10px] text-muted-foreground truncate",
										children: st.label
									})]
								}, st.key);
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: selectedStageFilter === "All" ? "Recent Events" : `Events in '${selectedStageFilter}'`,
						description: "Overview of recent club events and registrations status",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/organizer/events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								className: "rounded-xl text-xs",
								children: "View All Events"
							})
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: displayEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground",
								children: [
									"No events currently found in \"",
									selectedStageFilter,
									"\" stage."
								]
							}) : displayEvents.map((e) => {
								const percent = Math.round(e.registered / e.seats * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:bg-secondary/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1 space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/events/$eventId",
													params: { eventId: e.id },
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate font-semibold text-foreground hover:underline",
														children: e.title
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "rounded-lg text-[10px]",
													children: e.category
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													format(new Date(e.start), "dd MMM yyyy, h:mm a"),
													" · ",
													e.venue
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 pt-1 max-w-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
													value: percent,
													className: "h-1.5"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[11px] font-medium text-muted-foreground whitespace-nowrap",
													children: [
														e.registered,
														"/",
														e.seats,
														" (",
														percent,
														"%)"
													]
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between sm:justify-end gap-3 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(e) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/organizer/events",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												className: "size-8 rounded-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 text-muted-foreground" })
											})
										})]
									})]
								}, e.id);
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Recent Registrations",
						description: "Live feed of student sign-ups across active events",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/organizer/registrations",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "rounded-xl text-xs",
								children: "Manage Roster"
							})
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y divide-border rounded-2xl border border-border bg-card",
							children: (recentRegs.length > 0 ? recentRegs : registrants.slice(0, 5)).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 p-3.5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft font-semibold text-primary text-xs",
										children: (r.student_name || r.name || "S").split(" ").map((n) => n[0]).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-foreground truncate",
											children: r.student_name || r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground truncate",
											children: [
												r.student_phone || r.roll || "Roll",
												" · ",
												r.department_name || r.dept || "Computer Science"
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: r.status === "Approved" || r.status === "Confirmed" ? "default" : r.status === "Waitlisted" ? "secondary" : "outline",
										className: "rounded-full text-[11px]",
										children: r.status
									})
								})]
							}, r.id))
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Event Performance",
							description: "Registrations & Attendance breakdown",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-card p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Avg. Attendance"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-2xl font-bold text-success",
												children: "88%"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "+4% vs campus avg"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-card p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Seat Fill Rate"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-2xl font-bold text-primary",
												children: "91%"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: "High capacity usage"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-56 w-full pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
											data: monthlyStats,
											margin: {
												left: -24,
												right: 4,
												top: 4
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "var(--color-border)",
													vertical: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "month",
													tickLine: false,
													axisLine: false,
													fontSize: 11,
													stroke: "var(--color-muted-foreground)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													tickLine: false,
													axisLine: false,
													fontSize: 11,
													stroke: "var(--color-muted-foreground)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
													borderRadius: 12,
													border: "1px solid var(--color-border)",
													background: "var(--color-card)",
													fontSize: 11
												} }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													dataKey: "registrations",
													fill: "var(--color-primary)",
													radius: [
														4,
														4,
														0,
														0
													],
													name: "Registrations"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													dataKey: "attendance",
													fill: "var(--color-success)",
													radius: [
														4,
														4,
														0,
														0
													],
													name: "Attendance"
												})
											]
										})
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Upcoming Deadlines",
							description: "Urgent action items & milestone cutoffs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: organizerDeadlines.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2 rounded-xl border border-border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-0.5 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-foreground truncate",
											children: d.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-muted-foreground",
											children: [
												d.event,
												" · ",
												d.time
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: d.urgency === "high" ? "destructive" : "secondary",
										className: "shrink-0 rounded-full text-[10px]",
										children: d.due
									})]
								}, d.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Organizer Alerts",
							description: "Actionable notifications and warnings",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: notifications.slice(0, 4).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 rounded-xl border border-border bg-card p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold text-foreground",
												children: n.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[11px] text-muted-foreground leading-snug",
												children: n.body
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[10px] font-medium text-muted-foreground",
												children: n.time
											})
										]
									})]
								}, n.id))
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Route as n, OrganizerDashboard as t };
