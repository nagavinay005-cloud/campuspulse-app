import { p as getEvent, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { F as Phone, H as MapPin, Kt as Building2, Qt as Award, St as Copy, U as Mail, Ut as CalendarDays, i as Users, nt as Images, tn as ArrowLeft, v as Star, vt as Download } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { M as notFound, g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { o as galleryCaptions, s as getArchiveMeta } from "./_ssr/archive-D_pmsryf.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { t as ArchiveBadge } from "./_ssr/archive-badge-aLLn6UR_.mjs";
import { t as LifecycleFlow } from "./_ssr/lifecycle-flow-Cs6cRufP.mjs";
import { t as Route } from "./_app.summary._eventId-CfCTO-VR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.summary._eventId-BcKjw8pW.js
var import_jsx_runtime = require_jsx_runtime();
function SummaryPage() {
	const { eventId } = Route.useParams();
	const event = getEvent(eventId);
	if (!event) throw notFound();
	const meta = getArchiveMeta(event.id);
	const attended = event.attended ?? 0;
	const rate = Math.round(attended / Math.max(1, event.registered) * 100);
	const fill = Math.round(event.registered / event.seats * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: event.title,
			subtitle: `${event.department} · ${event.club}`,
			breadcrumb: [
				{
					label: "CampusPulse",
					to: "/"
				},
				{
					label: "Archive",
					to: "/archive-manager"
				},
				{ label: "Summary" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/archive-manager",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 size-4" }), " Archive"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card",
					onClick: () => toast.success("Event duplicated into Drafts"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "mr-2 size-4" }), " Duplicate"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "rounded-xl",
					onClick: () => toast.success("Full report downloaded"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), " Download report"]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: event.banner,
				alt: event.title,
				className: "aspect-[16/6] w-full object-cover",
				width: 1600,
				height: 600
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveBadge, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "rounded-full",
						children: event.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "rounded-full",
						children: resolveStatus(event)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "rounded-full",
						children: ["Archived ", format(new Date(meta.archivedAt), "dd MMM yyyy, h:mm a")]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Attendance",
					value: attended,
					delta: `${rate}% of registrants`,
					icon: Users,
					index: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Registrations",
					value: event.registered,
					delta: `${fill}% of ${event.seats} seats`,
					icon: CalendarDays,
					tone: "success",
					index: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Certificates",
					value: meta.certificates,
					delta: "Issued automatically",
					icon: Award,
					tone: "warning",
					index: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Feedback responses",
					value: meta.feedbackResponses,
					delta: `${meta.feedbackScore.toFixed(1)} / 5 average`,
					icon: Star,
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
						title: "About this event",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: event.description
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted-foreground",
									children: "Schedule"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "text-sm font-medium",
									children: [
										format(new Date(event.start), "dd MMM yyyy, h:mm a"),
										" → ",
										format(new Date(event.end), "dd MMM yyyy, h:mm a")
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-2xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted-foreground",
									children: "Venue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-sm font-medium",
									children: event.venue
								})] })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Registration statistics",
						description: "Frozen at the moment of automatic archival",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-5",
							children: [
								{
									label: "Seats filled",
									value: fill,
									note: `${event.registered} / ${event.seats}`
								},
								{
									label: "Attendance rate",
									value: rate,
									note: `${attended} checked in`
								},
								{
									label: "Certificate coverage",
									value: attended ? Math.round(meta.certificates / Math.max(1, attended) * 100) : 0,
									note: `${meta.certificates} issued`
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1.5 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium",
									children: [
										s.note,
										" · ",
										s.value,
										"%"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: Math.min(100, s.value),
								className: "h-1.5"
							})] }, s.label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Gallery",
						description: `${meta.gallery} photos preserved with the archive`,
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							className: "rounded-xl",
							onClick: () => toast.success("Gallery downloaded as ZIP"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "mr-1.5 size-3.5" }), " Download"]
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
							children: galleryCaptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-2xl border border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: event.banner,
									alt: `${event.title} — ${c}`,
									loading: "lazy",
									className: "aspect-[4/3] w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "px-3 py-2 text-xs text-muted-foreground",
									children: c
								})]
							}, c))
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Lifecycle timeline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifecycleFlow, { current: "Archived" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Feedback",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-secondary p-5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-4xl font-semibold tabular-nums",
									children: meta.feedbackScore.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex justify-center gap-0.5",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: i <= Math.round(meta.feedbackScore) ? "size-4 fill-warning text-warning" : "size-4 text-muted-foreground" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: [meta.feedbackResponses, " responses collected"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
						title: "Organizer details",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }),
											" ",
											event.department
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
											" ",
											event.contact.email
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
											" ",
											event.contact.phone
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "mt-4 w-full rounded-xl bg-card",
								onClick: () => toast.success("Attendance sheet downloaded"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), " Download attendance"]
							})
						]
					})
				]
			})]
		})
	] });
}
//#endregion
export { SummaryPage as component };
