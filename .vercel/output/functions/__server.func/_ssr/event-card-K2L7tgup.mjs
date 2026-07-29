import { o as __toESM } from "../_runtime.mjs";
import { y as resolveStatus } from "./mock-CEuLP2kB.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useAuth } from "./AuthContext-SoGm2Ioc.mjs";
import { H as MapPin, Jt as Bookmark, Kt as Building2, Ot as Clock, S as Share2, Ut as CalendarDays, i as Users } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { n as Countdown, r as StatusBadge } from "./primitives-txGWT-aG.mjs";
import { n as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/event-card-K2L7tgup.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventCard({ event, index = 0, isRegistered = false }) {
	const status = resolveStatus(event);
	const archived = status === "Archived";
	const [saved, setSaved] = (0, import_react.useState)(false);
	const full = event.registered >= event.seats;
	const { user } = useAuth();
	const isOrganizer = user?.role === "organizer" || user?.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: Math.min(index * .05, .3),
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "card-surface lift-on-hover group flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/events/$eventId",
			params: { eventId: event.id },
			className: "relative block aspect-[16/9] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: event.banner,
					alt: event.title,
					loading: "lazy",
					width: 1280,
					height: 720,
					className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						status,
						className: "bg-card/95 backdrop-blur"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "rounded-full border-0 bg-card/95 px-2.5 py-1 font-medium backdrop-blur",
						children: event.category
					})]
				}),
				!archived && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-foreground/70 to-transparent p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-card/95 px-2.5 py-1 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {
							to: event.start,
							compact: true
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events/$eventId",
						params: { eventId: event.id },
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "line-clamp-2 text-base font-semibold leading-snug transition-colors group-hover:text-primary",
							children: event.title
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Save event",
							className: "size-8 rounded-lg",
							onClick: () => {
								setSaved(!saved);
								toast.success(saved ? "Removed from saved" : "Saved to your list");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: saved ? "size-4 fill-primary text-primary" : "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Share event",
							className: "size-8 rounded-lg",
							onClick: () => toast.success("Event link copied to clipboard"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
					children: event.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-2 gap-y-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: format(new Date(event.start), "dd MMM yyyy")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: format(new Date(event.start), "h:mm a")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: event.venue
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: event.department
							})]
						}),
						event.registrationDeadline && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-2 mt-1 flex items-center gap-1.5 text-red-500 font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 px-2 py-0.5 rounded-md font-semibold",
								children: "Deadline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: (() => {
									try {
										return format(new Date(event.registrationDeadline), "dd MMM yyyy, h:mm a");
									} catch {
										return event.registrationDeadline;
									}
								})()
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }), archived ? `${event.attended ?? 0} attended` : `${event.registered}/${event.seats} seats`]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-foreground",
							children: [Math.round((archived ? event.attended ?? 0 : event.registered) / event.seats * 100), "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: Math.min(100, (archived ? event.attended ?? 0 : event.registered) / event.seats * 100),
						className: "h-1.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between gap-3 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-7 shrink-0 place-items-center rounded-full bg-primary-soft text-[10px] font-semibold text-primary",
							children: event.organizerAvatar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-xs text-muted-foreground",
							children: event.organizer
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events/$eventId",
							params: { eventId: event.id },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl bg-card text-xs",
								children: "View Details"
							})
						}), archived ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/summary/$eventId",
							params: { eventId: event.id },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "rounded-xl text-xs",
								children: "View Summary"
							})
						}) : isOrganizer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events/$eventId",
							params: { eventId: event.id },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl bg-card border-primary/40 text-primary hover:bg-primary-soft text-xs",
								children: "Manage Event"
							})
						}) : isRegistered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl border-success/30 bg-success-soft text-success text-xs font-semibold cursor-default",
							disabled: true,
							children: "✓ Registered"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events/$eventId",
							params: { eventId: event.id },
							search: { register: "true" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "rounded-xl text-xs",
								variant: full ? "secondary" : "default",
								children: full ? "Join waitlist" : "Register"
							})
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { EventCard as t };
