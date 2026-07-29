import { a as banner_hackathon_default, t as activeEvents } from "./mock-CEuLP2kB.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { Gt as CalendarCheck, M as QrCode, Qt as Award, T as Search, Xt as Bell, en as ArrowRight, i as Users, nn as Archive, x as ShieldCheck, y as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as AnimatedCounter } from "./primitives-txGWT-aG.mjs";
import { n as useLiveEvents } from "./useLiveEvents-DycTSZ8b.mjs";
import { t as EventCard } from "./event-card-CqUHw6nG.mjs";
import { t as LifecycleFlow } from "./lifecycle-flow-Cs6cRufP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-FpQ6cyuv.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		icon: Search,
		title: "Unified discovery",
		body: "One searchable feed replaces scattered WhatsApp groups, mailers and notice boards."
	},
	{
		icon: Bell,
		title: "Smart reminders",
		body: "Deadline, venue-change and check-in alerts pushed the moment something changes."
	},
	{
		icon: QrCode,
		title: "QR check-in",
		body: "Organizers scan, attendance locks itself, and certificates generate instantly."
	},
	{
		icon: Archive,
		title: "Auto archiving",
		body: "The second an event ends it leaves the feed and lands in a searchable archive."
	},
	{
		icon: ShieldCheck,
		title: "Approval workflow",
		body: "Draft to published with department and admin gates, clash checks and audit trails."
	},
	{
		icon: Award,
		title: "Certificates & credits",
		body: "Verified participation certificates that students can download forever."
	}
];
function Landing() {
	const { events: liveEvents } = useLiveEvents({ status: "Published" });
	const allEvents = liveEvents.length > 0 ? liveEvents : activeEvents();
	const featured = allEvents.filter((e) => e.featured).slice(0, 3);
	const displayEvents = featured.length > 0 ? featured : allEvents.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.jpg",
								alt: "CampusPulse Logo",
								className: "size-9 rounded-xl object-cover shadow-glow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-semibold tracking-tight",
								children: "CampusPulse"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "transition-colors hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#events",
									className: "transition-colors hover:text-foreground",
									children: "Events"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#lifecycle",
									className: "transition-colors hover:text-foreground",
									children: "Lifecycle"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									className: "rounded-xl",
									children: "Sign in"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "rounded-xl",
									children: "Open app"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "hero-gradient border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "rounded-full border-primary/20 bg-card px-3 py-1.5 text-xs font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1.5 size-3.5 text-primary" }), "Built for 12,000+ students across 8 departments"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl",
								children: [
									"One Campus.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Every Event.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "Never miss an announcement."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "Announcements live in five different places today. CampusPulse centralizes discovery, registration, reminders, attendance and certificates into a single campus operating system."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										className: "rounded-xl",
										children: ["Explore student portal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "lg",
										variant: "outline",
										className: "rounded-xl bg-card",
										children: "See staff portal"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-12 grid max-w-lg grid-cols-3 gap-6",
								children: [
									{
										label: "Events hosted",
										value: 486
									},
									{
										label: "Registrations",
										value: 24310
									},
									{
										label: "Certificates issued",
										value: 9820
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-2xl font-semibold tracking-tight sm:text-3xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, { value: s.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-xs text-muted-foreground",
									children: s.label
								})] }, s.label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "card-surface overflow-hidden p-2 shadow-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: banner_hackathon_default,
									alt: "Students collaborating at a campus hackathon organized through CampusPulse",
									width: 1280,
									height: 720,
									className: "w-full rounded-[1rem] object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .5 },
								className: "card-surface absolute -bottom-6 -left-4 hidden w-60 p-4 shadow-lift sm:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-medium text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "size-4" }), " Registration confirmed"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-semibold leading-snug",
										children: "HackFusion 2026"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Seat 349 of 400 · Innovation Hall"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .65 },
								className: "card-surface absolute -right-4 -top-6 hidden w-52 p-4 shadow-lift sm:block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-medium text-warning",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" }), " Live attendance"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl font-semibold",
										children: "1,140"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "checked in via QR today"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "mx-auto max-w-7xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Everything a campus needs, in one place"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Three connected workspaces — students discover, organizers run, administrators govern."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .05,
							duration: .4
						},
						className: "card-surface lift-on-hover p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-base font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
								children: f.body
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "events",
				className: "border-y border-border bg-card/50 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-semibold tracking-tight sm:text-4xl",
								children: "Featured this week"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Live from the campus feed, updated the moment organizers publish."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "rounded-xl bg-card",
								children: "Browse all"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: displayEvents.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
							event: e,
							index: i
						}, e.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "lifecycle",
				className: "mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "A lifecycle that closes itself"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Every event walks the same governed path. The final step is automatic: once the scheduled end time passes, CampusPulse pulls the event off the active feed, freezes registrations, and files it into the archive with its attendance summary and certificate status intact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface mt-8 space-y-3 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Auto-expiry rules"
							}),
							[
								"Removed from active feed at end datetime",
								"Registrations permanently closed",
								"Attendance summary preserved",
								"Certificates remain downloadable",
								"Archived badge applied everywhere"
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary" }),
									" ",
									r
								]
							}, r)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/archive",
								className: "inline-block pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "rounded-xl",
									children: "See archived events"
								})
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-surface p-6 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifecycleFlow, { current: "Live" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.jpg",
								alt: "CampusPulse Logo",
								className: "size-8 rounded-lg object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: "CampusPulse"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "One Campus. Every Event. Never miss an announcement."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-5 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									className: "hover:text-foreground",
									children: "Sign in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/events",
									className: "hover:text-foreground",
									children: "Events"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									className: "hover:text-foreground",
									children: "Admin"
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
