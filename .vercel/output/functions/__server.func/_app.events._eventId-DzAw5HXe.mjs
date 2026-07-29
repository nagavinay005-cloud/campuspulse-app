import { o as __toESM } from "./_runtime.mjs";
import { p as getEvent, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as useAuth, r as db } from "./_ssr/AuthContext-SoGm2Ioc.mjs";
import { F as Phone, H as MapPin, Jt as Bookmark, Kt as Building2, M as QrCode, Nt as CircleCheck, Ot as Clock, Pt as CircleAlert, Qt as Award, S as Share2, U as Mail, Ut as CalendarDays, h as Ticket, i as Users, nn as Archive, pt as FilePen, tt as IndianRupee, x as ShieldCheck } from "./_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./_ssr/dialog-DIo89e4g.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { n as Countdown, r as StatusBadge } from "./_ssr/primitives-txGWT-aG.mjs";
import { i as SectionCard, r as PageHeader, t as EmptyState } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { t as apiEventToCampusEvent } from "./_ssr/useLiveEvents-BMkuW3IC.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./_ssr/tabs-CCJRliUM.mjs";
import { n as registrationService, t as Route } from "./_app.events._eventId-BTi0UCvU.mjs";
import { t as Separator } from "./_ssr/separator-B3hsz7IR.mjs";
import { t as LifecycleFlow } from "./_ssr/lifecycle-flow-Cs6cRufP.mjs";
import { t as firestoreEventToCampusEvent } from "./_ssr/firestoreEvent-Bcvmsma3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.events._eventId-DzAw5HXe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventDetail() {
	const { eventId } = Route.useParams();
	const { userProfile } = useAuth();
	const [event, setEvent] = (0, import_react.useState)(() => getEvent(eventId) || null);
	const [loading, setLoading] = (0, import_react.useState)(!event);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [isReg, setIsReg] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!eventId.startsWith("evt-")) {
			setLoading(true);
			const tryFirestoreThenMySql = async () => {
				try {
					const docRef = doc(db, "events", eventId);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						setEvent(firestoreEventToCampusEvent(docSnap.id, docSnap.data()));
						setLoading(false);
						return;
					}
				} catch (err) {
					console.warn("Firestore fetch error in event details:", err);
				}
				try {
					const { API_BASE_URL } = await import("./_ssr/apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
					const token = localStorage.getItem("campuspulse_jwt_token");
					const headers = {};
					if (token) headers["Authorization"] = `Bearer ${token}`;
					const data = await (await fetch(`${API_BASE_URL}/events/${eventId}`, { headers })).json();
					if (data.success && data.data) setEvent(apiEventToCampusEvent(data.data));
				} catch (err) {
					console.warn("Failed to fetch live event detail", err);
				} finally {
					setLoading(false);
				}
			};
			tryFirestoreThenMySql();
		} else {
			setEvent(getEvent(eventId) || null);
			setLoading(false);
		}
	}, [eventId]);
	(0, import_react.useEffect)(() => {
		if (!event) return;
		const checkReg = async () => {
			const studentId = userProfile?.uid || "std-001";
			const isMockUser = studentId.startsWith("std-");
			const isMockEvent = event.id.startsWith("evt-");
			if (!isMockUser && !isMockEvent) try {
				const { API_BASE_URL } = await import("./_ssr/apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
				const token = localStorage.getItem("campuspulse_jwt_token");
				const headers = {};
				if (token) headers["Authorization"] = `Bearer ${token}`;
				const res = await fetch(`${API_BASE_URL}/students/me/registrations`, { headers });
				const data = await res.json();
				if (res.ok && data.success && data.data) {
					const numericEventId = event.dbId || parseInt(event.id, 10);
					if (data.data.find((r) => Number(r.event_id) === numericEventId && r.status !== "Cancelled")) {
						setIsReg(true);
						return;
					}
				}
			} catch (err) {
				console.warn("Failed to check registration status from database:", err);
			}
			const registered = registrationService.isRegistered(event.id, studentId);
			setIsReg(!!registered);
		};
		checkReg();
	}, [event, userProfile]);
	const [regDialogOpen, setRegDialogOpen] = (0, import_react.useState)(false);
	const [regName, setRegName] = (0, import_react.useState)("");
	const [regRoll, setRegRoll] = (0, import_react.useState)("");
	const [regDept, setRegDept] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (new URLSearchParams(window.location.search).get("register") === "true") setRegDialogOpen(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (userProfile) {
			setRegName(userProfile.name || "");
			setRegDept(userProfile.department || "Computer Science");
		}
	}, [userProfile]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted-foreground",
			children: "Loading event details..."
		})
	});
	if (!event) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: CircleAlert,
			title: "Event Not Found",
			description: "The requested event does not exist or has been deleted.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/events",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Back to Events" })
			})
		})
	});
	const status = resolveStatus(event);
	const archived = status === "Archived";
	const full = event.registered >= event.seats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: event.title,
		subtitle: `${event.club} · ${event.department}`,
		breadcrumb: [
			{
				label: "CampusPulse",
				to: "/"
			},
			{
				label: "Event Feed",
				to: "/events"
			},
			{ label: event.category }
		],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			className: "rounded-xl bg-card",
			onClick: () => {
				setSaved(!saved);
				toast.success(saved ? "Removed from saved" : "Saved to your list");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: saved ? "mr-2 size-4 fill-primary text-primary" : "mr-2 size-4" }),
				" ",
				saved ? "Saved" : "Save"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			className: "rounded-xl bg-card",
			onClick: () => toast.success("Event link copied"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "mr-2 size-4" }), " Share"]
		})] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: event.banner,
						alt: event.title,
						width: 1280,
						height: 720,
						className: "aspect-[16/7] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute left-4 top-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							status,
							className: "bg-card/95 backdrop-blur"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "rounded-full bg-card/95 text-foreground backdrop-blur",
							variant: "outline",
							children: event.category
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [archived && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-start gap-3 rounded-2xl border border-border bg-secondary p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Automatically archived"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"This event ended on ",
								format(new Date(event.end), "dd MMM yyyy, h:mm a"),
								". Registrations are permanently closed, but the attendance summary and certificates remain available below."
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "about",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "rounded-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "about",
										className: "rounded-lg",
										children: "About"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "schedule",
										className: "rounded-lg",
										children: "Schedule"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "speakers",
										className: "rounded-lg",
										children: "Speakers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "lifecycle",
										className: "rounded-lg",
										children: "Lifecycle"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "about",
								className: "pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: event.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: event.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "secondary",
											className: "rounded-full",
											children: ["#", t]
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											{
												icon: CalendarDays,
												label: "Date",
												value: format(new Date(event.start), "EEEE, dd MMM yyyy")
											},
											{
												icon: Clock,
												label: "Time",
												value: `${format(new Date(event.start), "h:mm a")} – ${format(new Date(event.end), "h:mm a")}`
											},
											{
												icon: MapPin,
												label: "Venue",
												value: event.venue
											},
											{
												icon: Building2,
												label: "Department",
												value: event.department
											},
											{
												icon: IndianRupee,
												label: "Fee",
												value: event.fee === 0 ? "Free entry" : `₹${event.fee}`
											},
											{
												icon: Award,
												label: "Certificate",
												value: event.certificate ? "Provided on completion" : "Not provided"
											}
										].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-xs text-muted-foreground",
													children: r.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "text-sm font-medium",
													children: r.value
												})]
											})]
										}, r.label))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "schedule",
								className: "space-y-4 pt-5",
								children: [
									{
										t: format(new Date(event.start), "h:mm a"),
										title: "Check-in & QR scan",
										d: "Entry passes verified at the venue gate"
									},
									{
										t: format(/* @__PURE__ */ new Date(+new Date(event.start) + 36e5), "h:mm a"),
										title: "Opening keynote",
										d: "Welcome address by the department head"
									},
									{
										t: format(/* @__PURE__ */ new Date(+new Date(event.start) + 72e5), "h:mm a"),
										title: "Main programme",
										d: "Core sessions, rounds and mentoring"
									},
									{
										t: format(new Date(event.end), "h:mm a"),
										title: "Valedictory & certificates",
										d: "Winners announced, certificates released"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4 rounded-2xl border border-border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-20 shrink-0 text-sm font-semibold text-primary",
										children: s.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: s.d
									})] })]
								}, s.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "speakers",
								className: "pt-5",
								children: event.speakers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "No speakers listed for this event."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: event.speakers.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl border border-border p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary",
											children: s.name.split(" ").map((w) => w[0]).join("").slice(0, 2)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-medium",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-xs text-muted-foreground",
												children: s.role
											})]
										})]
									}, s.name))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "lifecycle",
								className: "pt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifecycleFlow, { current: status })
							})
						]
					})]
				})]
			}), archived && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				title: "Attendance summary",
				description: "Frozen at the moment the event ended",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-4",
					children: [
						{
							l: "Registered",
							v: event.registered
						},
						{
							l: "Attended",
							v: event.attended ?? 0
						},
						{
							l: "Attendance rate",
							v: `${Math.round((event.attended ?? 0) / event.registered * 100)}%`
						},
						{
							l: "Feedback score",
							v: event.rating ?? "—"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: s.l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-2xl font-semibold",
							children: s.v
						})]
					}, s.l))
				}), event.certificate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-5 rounded-xl",
					onClick: () => toast.success("Certificate downloaded"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-2 size-4" }), " Download certificate"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "space-y-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface sticky top-24 p-6",
				children: [
					!archived ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Event starts in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { to: event.start })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }), " Seats"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: [
									event.registered,
									"/",
									event.seats
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: event.registered / event.seats * 100,
							className: "mt-2 h-1.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [Math.max(0, event.seats - event.registered), " seats remaining"]
						}),
						userProfile?.role === "Organizer" || userProfile?.role === "Admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2.5 rounded-2xl border border-primary/30 bg-primary-soft/30 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), " Organizer Controls"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "You are managing this event as an Organizer/Admin."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/organizer/events",
									className: "block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "w-full rounded-xl text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePen, { className: "mr-2 size-4" }), " Manage & Edit Events"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/organizer/attendance",
									className: "block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "w-full rounded-xl text-xs bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-2 size-4" }), " Scan QR Attendance"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/organizer/registrations",
									className: "block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "w-full rounded-xl text-xs bg-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mr-2 size-4" }),
											" View Registered Roster (",
											event.registered,
											")"
										]
									})
								})
							]
						}) : isReg ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-success/30 bg-success-soft/40 p-4 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-6 text-success mb-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-foreground",
											children: "You are Registered!"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												"Pass Code: REG-",
												event.id.toUpperCase(),
												"-2026"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "w-full rounded-xl shadow-glow text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-2 size-4" }), " View Entry QR Pass"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
									className: "rounded-3xl sm:max-w-md text-center p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
											className: "text-center text-lg font-bold",
											children: "Campus Entry Pass"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
											className: "text-center text-xs",
											children: event.title
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mx-auto grid size-48 place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-4 shadow-md",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-36 text-primary" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-sm text-foreground",
														children: userProfile?.name || "Aarav Sharma"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground font-mono",
														children: ["Roll: CS2026-042 · Dept: ", event.department]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground font-mono",
														children: ["Venue: ", event.venue]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "w-full rounded-xl text-xs",
											onClick: () => toast.success("QR Pass PDF downloaded to device."),
											children: "Download Pass PDF"
										}) })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-full rounded-xl text-xs text-danger border-danger/30 hover:bg-danger/10 bg-card",
									onClick: async () => {
										await registrationService.cancelRegistration(event.id, userProfile?.uid || "std-001");
										setIsReg(null);
									},
									children: "Cancel Registration"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open: regDialogOpen,
							onOpenChange: setRegDialogOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "mt-5 w-full rounded-xl",
									variant: full ? "secondary" : "default",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "mr-2 size-4" }),
										" ",
										full ? "Join waitlist" : "Register now"
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "rounded-3xl sm:max-w-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: full ? "Join the waitlist" : "Confirm registration" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: event.title })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "space-y-4",
									onSubmit: async (e) => {
										e.preventDefault();
										if (!regName.trim() || !regRoll.trim()) {
											toast.error("Please fill in your name and roll number.");
											return;
										}
										const res = await registrationService.registerForEvent({
											eventId: event.id,
											studentId: userProfile?.uid || "std-001",
											studentName: regName.trim(),
											studentEmail: userProfile?.email || "aarav.s@campus.edu",
											department: regDept.trim() || "Computer Science",
											rollNumber: regRoll.trim()
										});
										if (res.success && res.registration) {
											setIsReg(res.registration);
											setRegDialogOpen(false);
											toast.success(`Registration successful for ${event.title}!`);
										}
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "reg-name",
												children: "Full name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reg-name",
												value: regName,
												onChange: (e) => setRegName(e.target.value),
												placeholder: "e.g. Aarav Sharma",
												required: true,
												className: "rounded-xl"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "reg-roll",
												children: "Roll number / Student ID"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reg-roll",
												value: regRoll,
												onChange: (e) => setRegRoll(e.target.value),
												placeholder: "e.g. CS2026-042",
												required: true,
												className: "rounded-xl"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												htmlFor: "reg-dept",
												children: "Department"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "reg-dept",
												value: regDept,
												onChange: (e) => setRegDept(e.target.value),
												placeholder: "e.g. Computer Science",
												required: true,
												className: "rounded-xl"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
											className: "pt-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "submit",
												className: "w-full rounded-xl shadow-glow",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 size-4" }),
													" ",
													full ? "Join waitlist" : "Confirm registration"
												]
											})
										})
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "mt-2 w-full rounded-xl bg-card",
							onClick: () => toast.success("Added to your calendar"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mr-2 size-4" }), " Add to calendar"]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-secondary p-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "mx-auto size-5 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-semibold",
								children: "Registrations closed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "This event was auto-archived after its end time."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Organizer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary",
							children: event.organizerAvatar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: event.organizer
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: event.club
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }),
								" ",
								event.contact.email
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }),
								" ",
								event.contact.phone
							]
						})]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { EventDetail as component };
