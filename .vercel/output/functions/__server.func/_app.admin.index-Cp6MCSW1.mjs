import { o as __toESM } from "./_runtime.mjs";
import { c as categorySplit, d as departments, f as events, g as monthlyStats, m as isExpired, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { C as Settings, Kt as Building2, Nt as CircleCheck, Ot as Clock, Q as Layers, Vt as ChartColumn, Xt as Bell, Zt as BadgeCheck, bt as Database, ct as Globe, dt as FileText, ft as FileSpreadsheet, gt as Eye, i as Users, j as Radio, l as UserCheck, lt as FolderArchive, nn as Archive, ot as HardDrive, rn as Activity, t as Zap, vt as Download, x as ShieldCheck } from "./_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./_ssr/dialog-DIo89e4g.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { g as Link, m as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { r as StatusBadge } from "./_ssr/primitives-txGWT-aG.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { n as useLiveEvents } from "./_ssr/useLiveEvents-DycTSZ8b.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { i as archiveQueue } from "./_ssr/archive-D_pmsryf.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, s as Area, t as AreaChart } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.admin.index-Cp6MCSW1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Route = createFileRoute("/_app/admin/")({
	head: () => ({ meta: [
		{ title: "Admin Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Monitor, approve, and manage all campus events, users, and departments from one centralized workspace."
		},
		{
			property: "og:title",
			content: "Admin Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Centralized governance command center for campus events, users, and auto-archiving."
		}
	] }),
	component: AdminDashboard
});
var recentNotifications = [
	{
		id: "n1",
		title: "New Event Approval Request",
		detail: "HackFusion 2026 submitted by Computer Science Club",
		time: "10 mins ago",
		type: "approval"
	},
	{
		id: "n2",
		title: "New Organizer Registered",
		detail: "Prof. Ananya Roy assigned to Robotics Society",
		time: "25 mins ago",
		type: "user"
	},
	{
		id: "n3",
		title: "Archive Completed",
		detail: "System Design Bootcamp auto-archived with 100% attendance log",
		time: "1 hour ago",
		type: "archive"
	},
	{
		id: "n4",
		title: "Registration Spike Detected",
		detail: "Rhythm & Rangoli reached 96% capacity in 4 hours",
		time: "2 hours ago",
		type: "system"
	},
	{
		id: "n5",
		title: "System Health Check Passed",
		detail: "Database backup & Cloud Functions operating nominal",
		time: "3 hours ago",
		type: "health"
	}
];
function AdminDashboard() {
	const { events: liveEvents, loading: liveLoading } = useLiveEvents();
	const [selectedPreviewEvent, setSelectedPreviewEvent] = (0, import_react.useState)(null);
	const eventsList = (0, import_react.useMemo)(() => {
		if (liveEvents.length === 0) return events;
		const liveIds = new Set(liveEvents.map((e) => e.id));
		const uniqueMock = events.filter((e) => !liveIds.has(e.id));
		return [...liveEvents, ...uniqueMock];
	}, [liveEvents]);
	const counts = (0, import_react.useMemo)(() => {
		return {
			totalStudents: 12480,
			totalOrganizers: 142,
			totalDepts: departments.length,
			totalClubs: 24,
			totalEvents: eventsList.length,
			activeEvents: eventsList.filter((e) => !isExpired(e) && resolveStatus(e) !== "Archived").length,
			archivedEventsCount: eventsList.filter((e) => isExpired(e) || e.status === "Archived").length,
			pendingApprovalsCount: eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length
		};
	}, [eventsList]);
	const pendingEvents = (0, import_react.useMemo)(() => {
		return eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted");
	}, [eventsList]);
	const handleApproveEvent = (event) => {
		setEventsList((prev) => prev.map((e) => e.id === event.id ? {
			...e,
			status: "Published"
		} : e));
		toast.success(`Approved & Published "${event.title}".`);
	};
	const handleRejectEvent = (event) => {
		setEventsList((prev) => prev.map((e) => e.id === event.id ? {
			...e,
			status: "Rejected"
		} : e));
		toast.error(`Rejected "${event.title}". Returned to organizer.`);
	};
	const handleExportReport = (type) => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(eventsList, null, 2));
		const anchor = document.createElement("a");
		anchor.setAttribute("href", dataStr);
		anchor.setAttribute("download", `admin_${type.toLowerCase().replace(/\s+/g, "_")}_report.json`);
		anchor.click();
		toast.success(`Exported ${type} Report.`);
	};
	const tooltipStyle = {
		borderRadius: 16,
		border: "1px solid var(--color-border)",
		background: "var(--color-card)",
		fontSize: 12
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Admin Dashboard",
				subtitle: "Monitor, approve, and manage all campus events, users, and departments from one centralized workspace.",
				breadcrumb: [{
					label: "CampusPulse",
					to: "/"
				}, { label: "Admin Dashboard" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:flex items-center gap-2 rounded-xl bg-card border px-3 py-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "28 Jul 2026, 11:20 AM" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/approvals",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl shadow-glow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mr-2 size-4" }),
								" Review Approvals (",
								counts.pendingApprovalsCount,
								")"
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Campus Platform Statistics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "Realtime Telemetry"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Students",
						value: counts.totalStudents,
						icon: Users,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Organizers",
						value: counts.totalOrganizers,
						icon: UserCheck,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Departments",
						value: counts.totalDepts,
						icon: Building2,
						tone: "primary",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Clubs",
						value: counts.totalClubs,
						icon: Globe,
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Events",
						value: counts.totalEvents,
						icon: Layers,
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Events",
						value: counts.activeEvents,
						icon: Radio,
						tone: "danger",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived",
						value: counts.archivedEventsCount,
						icon: FolderArchive,
						tone: "warning",
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending",
						value: counts.pendingApprovalsCount,
						icon: BadgeCheck,
						tone: "warning",
						index: 7
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Admin Quick Navigation",
				description: "Instant shortcuts to governance modules",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7",
					children: [
						{
							label: "Approve Events",
							path: "/admin/approvals",
							icon: BadgeCheck,
							badge: `${counts.pendingApprovalsCount}`
						},
						{
							label: "Manage Users",
							path: "/admin/users",
							icon: Users
						},
						{
							label: "Departments",
							path: "/admin/departments",
							icon: Building2
						},
						{
							label: "Reports",
							path: "/admin/reports",
							icon: FileText
						},
						{
							label: "Analytics",
							path: "/organizer/analytics",
							icon: ChartColumn
						},
						{
							label: "Settings",
							path: "/admin/settings",
							icon: Settings
						},
						{
							label: "Archive Center",
							path: "/archive-manager",
							icon: Archive
						}
					].map((act) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: act.path,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-all hover:border-primary hover:bg-primary-soft/30 hover:shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(act.icon, { className: "size-6 text-primary mb-2 transition-transform group-hover:scale-110" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-foreground",
									children: act.label
								}),
								act.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "destructive",
									className: "absolute right-2 top-2 size-5 rounded-full p-0 flex items-center justify-center text-[10px]",
									children: act.badge
								})
							]
						})
					}, act.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `Pending Event Approvals (${pendingEvents.length})`,
				description: "Review and approve event announcements submitted by department organizers",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/approvals",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "rounded-xl text-xs bg-card",
						children: "View All Queue"
					})
				}),
				children: pendingEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 text-success mb-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-sm text-foreground",
							children: "Queue Clear!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: "No pending event approval requests awaiting admin action."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-2xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						className: "bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden md:table-cell",
								children: "Organizer & Club"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden lg:table-cell",
								children: "Department"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Category" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: pendingEvents.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "max-w-[240px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: e.banner,
									alt: "",
									className: "size-10 rounded-xl object-cover shrink-0 hidden sm:block"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-sm text-foreground line-clamp-1",
										children: e.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: ["Start: ", format(new Date(e.start), "dd MMM yyyy")]
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "hidden md:table-cell text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground",
								children: e.organizer
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[11px]",
								children: e.club
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "hidden lg:table-cell text-xs text-muted-foreground",
							children: e.department
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "rounded-full text-[10px]",
							children: e.category
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(e) }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "ghost",
										className: "h-8 rounded-lg text-xs",
										onClick: () => setSelectedPreviewEvent(e),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 mr-1" }), " View"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										className: "h-8 rounded-lg text-xs bg-success text-success-foreground",
										onClick: () => handleApproveEvent(e),
										children: "Approve"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "h-8 rounded-lg text-xs border-danger/30 text-danger bg-card",
										onClick: () => handleRejectEvent(e),
										children: "Reject"
									})
								]
							})
						})
					] }, e.id)) })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Campus Event Lifecycle Workflow",
				description: "Central governance pipeline for all events across every stage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 text-center",
					children: [
						{
							stage: "Draft",
							count: eventsList.filter((e) => e.status === "Draft").length,
							color: "border-muted bg-secondary text-muted-foreground"
						},
						{
							stage: "Pending",
							count: eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length,
							color: "border-warning/30 bg-warning-soft text-warning"
						},
						{
							stage: "Approved",
							count: eventsList.filter((e) => e.status === "Published" && resolveStatus(e) === "Upcoming").length,
							color: "border-primary/30 bg-primary-soft text-primary"
						},
						{
							stage: "Published",
							count: eventsList.filter((e) => e.status === "Published").length,
							color: "border-primary/30 bg-primary-soft text-primary"
						},
						{
							stage: "Upcoming",
							count: eventsList.filter((e) => resolveStatus(e) === "Upcoming").length,
							color: "border-primary/30 bg-primary-soft text-primary"
						},
						{
							stage: "Live Now",
							count: eventsList.filter((e) => resolveStatus(e) === "Live").length,
							color: "border-danger/30 bg-danger-soft text-danger"
						},
						{
							stage: "Completed",
							count: eventsList.filter((e) => resolveStatus(e) === "Completed").length,
							color: "border-success/30 bg-success-soft text-success"
						},
						{
							stage: "Auto Archived",
							count: eventsList.filter((e) => isExpired(e) || e.status === "Archived").length,
							color: "border-border bg-secondary text-muted-foreground"
						}
					].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("rounded-2xl border p-3 flex flex-col justify-between space-y-1.5", item.color),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[9px] font-bold uppercase tracking-wider",
								children: ["Stage ", idx + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-xl",
								children: item.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-xs",
								children: item.stage
							})
						]
					}, item.stage))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "System Health & Telemetry",
					description: "Realtime server infrastructure status",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 text-xs",
						children: [
							{
								label: "Database Cluster",
								status: "Operational",
								sub: "Firebase / PostgreSQL Ready",
								icon: Database
							},
							{
								label: "Cloud Storage",
								status: "14.2 GB / 100 GB (14%)",
								sub: "Banners & Poster Presets",
								icon: HardDrive
							},
							{
								label: "Notification Gateway",
								status: "Active (0 errors)",
								sub: "Email & Web Push Daemon",
								icon: Bell
							},
							{
								label: "Auth & RBAC Service",
								status: "100% Uptime",
								sub: "Student & Admin Auth",
								icon: ShieldCheck
							},
							{
								label: "Cloud Functions",
								status: "Nominal",
								sub: "0% Latency Spike",
								icon: Zap
							},
							{
								label: "Archive Scheduler",
								status: "Active Daemon",
								sub: "Next run in 12 mins",
								icon: FolderArchive
							}
						].map((sh) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-3.5 space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-muted-foreground",
										children: sh.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "rounded-full border-success/30 bg-success-soft text-success text-[10px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 size-1.5 animate-pulse rounded-full bg-success inline-block" }), " Healthy"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-sm text-foreground",
									children: sh.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: sh.sub
								})
							]
						}, sh.label))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Auto-Archive Daemon Monitor",
					description: "Monitoring automatic archival upon event expiration",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-3 text-center text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Queue Size"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-foreground text-sm",
									children: [archiveQueue().length, " Events"]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Archived Today"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary text-sm",
									children: "2 Events"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Success Rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-success text-sm",
									children: "100%"
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-xs text-muted-foreground mb-2",
							children: "NEXT IN ARCHIVE QUEUE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 text-xs",
							children: archiveQueue().slice(0, 2).map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl border border-border bg-card p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: q.event.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: q.event.department
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "rounded-full text-warning text-[10px]",
									children: [
										"Ends in ",
										Math.max(1, Math.round(q.endsInMs / 864e5)),
										"d"
									]
								})]
							}, q.event.id))
						})] })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Campus Event Volume Growth",
					description: "Monthly event submission & approval volume",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: monthlyStats,
								margin: {
									left: -20,
									right: 8,
									top: 8
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "adminGrad",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#2563EB",
											stopOpacity: .35
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#2563EB",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "registrations",
										stroke: "#2563EB",
										strokeWidth: 2,
										fill: "url(#adminGrad)"
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Category Distribution Split",
					description: "Breakdown across all event domains",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: categorySplit,
								dataKey: "value",
								nameKey: "name",
								innerRadius: 50,
								outerRadius: 85,
								paddingAngle: 3,
								children: categorySplit.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: [
									"#2563EB",
									"#22C55E",
									"#F59E0B",
									"#8B5CF6",
									"#EC4899"
								][i % 5] }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] })
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "User Account Summary",
					description: "Platform user role distribution",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Students"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-sm",
									children: "12,480"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Organizers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary text-sm",
									children: "142"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Admins"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-success text-sm",
									children: "6"
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Active Weekly Ratio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "92% (11,481 Active)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: 92,
								className: "h-2"
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Department & Club Summary",
					description: "University academic & cultural units",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-4 gap-2 rounded-xl bg-secondary/40 p-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Departments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-sm",
									children: "8"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Student Chapters"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary text-sm",
									children: "14"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Clubs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-sm",
									children: "24"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Faculty Leads"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-success text-sm",
									children: "16"
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Most Active Department"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-primary",
								children: "Computer Science (1,840 Signups)"
							})]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Platform Reports Center",
					description: "Instant governance & telemetry downloads",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [
							{
								label: "Platform Overview",
								type: "Platform"
							},
							{
								label: "Attendance Summary",
								type: "Attendance"
							},
							{
								label: "Registration Roster",
								type: "Registration"
							},
							{
								label: "Archive Activity",
								type: "Archive"
							},
							{
								label: "Department Metrics",
								type: "Department"
							}
						].map((rep) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "justify-between rounded-xl bg-card text-xs h-10",
							onClick: () => handleExportReport(rep.type),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-4 text-primary" }),
									" ",
									rep.label
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5 text-muted-foreground" })]
						}, rep.type))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Recent Notifications & Audit Log",
					description: "Central system activity timeline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2.5 text-xs",
						children: recentNotifications.slice(0, 4).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: n.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: n.time
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[11px] mt-0.5",
									children: n.detail
								})]
							})]
						}, n.id))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: selectedPreviewEvent !== null,
				onOpenChange: () => setSelectedPreviewEvent(null),
				children: selectedPreviewEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(selectedPreviewEvent) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "rounded-full text-xs",
									children: selectedPreviewEvent.category
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-lg font-bold mt-2",
								children: selectedPreviewEvent.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
								"Submitted by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: selectedPreviewEvent.organizer
								}),
								" (",
								selectedPreviewEvent.department,
								" · ",
								selectedPreviewEvent.club,
								")"
							] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: selectedPreviewEvent.banner,
									alt: "",
									className: "h-36 w-full rounded-xl object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: selectedPreviewEvent.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Start Datetime"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: format(new Date(selectedPreviewEvent.start), "dd MMM yyyy, h:mm a")
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Venue"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: selectedPreviewEvent.venue
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setSelectedPreviewEvent(null),
								className: "rounded-xl text-xs",
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "rounded-xl text-xs bg-success text-success-foreground",
								onClick: () => {
									handleApproveEvent(selectedPreviewEvent);
									setSelectedPreviewEvent(null);
								},
								children: "Approve & Publish"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Route as n, AdminDashboard as t };
