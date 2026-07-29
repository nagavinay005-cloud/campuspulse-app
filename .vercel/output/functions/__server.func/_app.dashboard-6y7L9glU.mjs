import { o as __toESM } from "./_runtime.mjs";
import { _ as notifications, g as monthlyStats, n as activity, t as activeEvents, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as useAuth } from "./_ssr/AuthContext-SoGm2Ioc.mjs";
import { Ct as Compass, Et as CloudSun, M as QrCode, Qt as Award, Ut as CalendarDays, f as TrendingUp, h as Ticket, i as Users, ut as Flame } from "./_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-DIo89e4g.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { g as Link, m as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { n as Countdown, r as StatusBadge } from "./_ssr/primitives-txGWT-aG.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { n as useLiveEvents } from "./_ssr/useLiveEvents-BMkuW3IC.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { a as YAxis, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, s as Area, t as AreaChart } from "./_libs/recharts+[...].mjs";
import { t as EventCard } from "./_ssr/event-card-K2L7tgup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-6y7L9glU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Route = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: [
		{ title: "Student Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Your campus events, registrations, deadlines and certificates at a glance."
		},
		{
			property: "og:title",
			content: "Student Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Track registrations, deadlines and upcoming campus events."
		}
	] }),
	component: Dashboard
});
function Dashboard() {
	const { userProfile } = useAuth();
	const studentId = userProfile?.uid || "std-001";
	const { events: liveEvents } = useLiveEvents({ status: "Published" });
	const [regs, setRegs] = (0, import_react.useState)([]);
	const [certsCount, setCertsCount] = (0, import_react.useState)(0);
	const [notifs, setNotifs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (studentId && !studentId.startsWith("std-")) {
			const headers = { "Authorization": `Bearer ${localStorage.getItem("campuspulse_jwt_token")}` };
			import("./_ssr/apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n).then(({ API_BASE_URL }) => {
				fetch(`${API_BASE_URL}/students/me/registrations`, { headers }).then((res) => res.json()).then((data) => {
					if (data.success && Array.isArray(data.data)) setRegs(data.data.filter((r) => r.status !== "Cancelled"));
				}).catch((e) => console.warn(e));
				fetch(`${API_BASE_URL}/students/me/certificates`, { headers }).then((res) => res.json()).then((data) => {
					if (data.success && Array.isArray(data.data)) setCertsCount(data.data.length);
				}).catch((e) => console.warn(e));
				fetch(`${API_BASE_URL}/notifications`, { headers }).then((res) => res.json()).then((data) => {
					if (data.success && Array.isArray(data.data)) setNotifs(data.data.slice(0, 3));
				}).catch((e) => console.warn(e));
			});
		}
	}, [studentId]);
	const registeredEventIds = (0, import_react.useMemo)(() => new Set(regs.map((r) => String(r.event_id))), [regs]);
	const next = (0, import_react.useMemo)(() => {
		return liveEvents.filter((e) => registeredEventIds.has(String(e.dbId || e.id)));
	}, [liveEvents, registeredEventIds])[0] || liveEvents[0];
	const displayName = userProfile?.name || "Student";
	const displayFirstName = displayName.split(" ")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: `Good morning, ${displayFirstName}`,
			subtitle: "Here's what's happening across campus today.",
			breadcrumb: [
				{
					label: "CampusPulse",
					to: "/"
				},
				{ label: "Student" },
				{ label: "Dashboard" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/calendar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mr-2 size-4" }), " Calendar"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/events",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "mr-2 size-4" }), " Browse events"]
				})
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Registered events",
					value: regs.length,
					delta: "Active registrations",
					icon: Ticket,
					index: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Attended",
					value: regs.filter((r) => r.checked_in || r.status === "Checked In").length,
					delta: "Checked in events",
					icon: Users,
					tone: "success",
					index: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Certificates",
					value: certsCount,
					delta: "Earned credentials",
					icon: Award,
					tone: "warning",
					index: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Pulse points",
					value: regs.length * 15 + certsCount * 50,
					delta: "Earned points",
					icon: Flame,
					tone: "danger",
					index: 3
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 xl:col-span-2",
				children: [
					next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Next up",
						description: "Your closest confirmed registration",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-[200px_minmax(0,1fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: next.banner,
								alt: next.title,
								loading: "lazy",
								width: 1280,
								height: 720,
								className: "h-32 w-full rounded-2xl object-cover sm:h-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(next) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "rounded-full",
											children: next.category
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-semibold leading-snug",
										children: next.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [
											next.venue,
											" · ",
											format(new Date(next.start), "EEE, dd MMM · h:mm a")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { to: next.start })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/events/$eventId",
											params: { eventId: next.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												className: "rounded-xl",
												children: "View details"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "outline",
												className: "rounded-xl bg-card",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-2 size-4 text-primary" }), " Show entry pass"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
											className: "rounded-3xl sm:max-w-md text-center p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
													className: "text-center font-bold text-lg",
													children: "Digital Campus Entry Pass"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
													className: "text-center text-xs",
													children: next.title
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-4 py-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mx-auto grid size-48 place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-4 shadow-md",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-36 text-primary" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1 text-xs",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-bold text-sm text-foreground",
																children: displayName
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-muted-foreground font-mono",
																children: [
																	"Dept: ",
																	userProfile?.department || "Computer Science",
																	" · ",
																	userProfile?.year || "3rd Year"
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-primary font-mono font-semibold",
																children: [
																	"Pass ID: QR-EV-1-",
																	userProfile?.uid?.slice(-6) || "STD",
																	"-2026"
																]
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													className: "w-full rounded-xl text-xs",
													onClick: () => toast.success(`Downloaded Entry Pass PDF for ${next.title}`),
													children: "Download Pass PDF"
												}) })
											]
										})] })]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Registrations & attendance",
						description: "Last 6 months across all campus events",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64 w-full",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "regGrad",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "var(--color-primary)",
												stopOpacity: .35
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "var(--color-primary)",
												stopOpacity: 0
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "attGrad",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "var(--color-success)",
												stopOpacity: .3
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "var(--color-success)",
												stopOpacity: 0
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "4 4",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											borderRadius: 16,
											border: "1px solid var(--color-border)",
											background: "var(--color-card)",
											fontSize: 12
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "registrations",
											stroke: "var(--color-primary)",
											strokeWidth: 2,
											fill: "url(#regGrad)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
											type: "monotone",
											dataKey: "attendance",
											stroke: "var(--color-success)",
											strokeWidth: 2,
											fill: "url(#attGrad)"
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Recommended for you",
						description: "Matched to Computer Science, 3rd year",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "rounded-xl",
								children: "View all"
							})
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: liveEvents.slice(0, 2).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
								event: e,
								index: i,
								isRegistered: registeredEventIds.has(String(e.dbId || e.id))
							}, e.id))
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
						className: "bg-gradient-to-br from-primary to-[oklch(0.5_0.2_282)] text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm/relaxed opacity-90",
									children: "Campus weather"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-4xl font-semibold",
									children: "27°"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm opacity-90",
									children: "Partly cloudy · Outdoor events on schedule"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSun, { className: "size-10 opacity-90" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid grid-cols-4 gap-2 text-center text-xs opacity-90",
							children: [
								"Tue 28°",
								"Wed 26°",
								"Thu 29°",
								"Fri 25°"
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl bg-white/15 py-2",
								children: d
							}, d))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Upcoming deadlines",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: (liveEvents.length > 0 ? liveEvents : activeEvents()).slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 shrink-0 place-items-center rounded-xl bg-warning-soft text-xs font-semibold text-warning",
									children: format(new Date(e.start), "dd")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium",
											children: e.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: ["Closes ", format(new Date(e.start), "dd MMM, h:mm a")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: e.registered / e.seats * 100,
											className: "mt-2 h-1"
										})
									]
								})]
							}, e.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Activity timeline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "relative space-y-5 pl-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[5px] top-1 h-[calc(100%-0.5rem)] w-px bg-border" }), activity.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-5 top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-primary/10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: a.who
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: a.what
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: a.when
									})
								]
							}, a.id))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Notifications",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/notifications",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								className: "rounded-xl",
								children: "All"
							})
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: (notifs.length > 0 ? notifs : notifications.slice(0, 3)).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: n.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: n.message || n.body
								})]
							}, n.id || n.notificationId))
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { Route as n, Dashboard as t };
