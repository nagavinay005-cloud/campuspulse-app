import { o as __toESM } from "./_runtime.mjs";
import { f as events, r as archivedEvents, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { A as RefreshCcw, Nt as CircleCheck, Q as Layers, V as Megaphone, Wt as CalendarClock, it as Hourglass, j as Radio, m as Timer, nn as Archive, pt as FilePen, rn as Activity, w as Send } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "./_libs/motion.mjs";
import { r as StatusBadge } from "./_ssr/primitives-txGWT-aG.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader, t as EmptyState } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { c as lifecycleStages, i as archiveQueue, l as stageCount } from "./_ssr/archive-D_pmsryf.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { n as formatEndsIn } from "./_ssr/archive-badge-aLLn6UR_.mjs";
import { t as ArchiveTimeline } from "./_ssr/archive-timeline-fDYAc4eF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.lifecycle-BJoUQyT-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	FileEdit: FilePen,
	Send,
	Hourglass,
	Megaphone,
	CalendarClock,
	Radio,
	CheckCircle2: CircleCheck,
	Archive
};
var tones = {
	muted: "bg-secondary text-muted-foreground",
	warning: "bg-warning-soft text-warning",
	primary: "bg-primary-soft text-primary",
	success: "bg-success-soft text-success",
	danger: "bg-danger-soft text-danger",
	archive: "bg-secondary text-foreground"
};
var rails = {
	muted: "bg-border",
	warning: "bg-warning",
	primary: "bg-primary",
	success: "bg-success",
	danger: "bg-danger",
	archive: "bg-muted-foreground"
};
function LifecycleTimeline({ selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
		children: lifecycleStages.map((s, i) => {
			const Icon = icons[s.icon] ?? Archive;
			const active = selected === s.stage;
			const count = stageCount(s.stage);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				type: "button",
				initial: {
					opacity: 0,
					y: 14
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: i * .045,
					duration: .4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				onClick: () => onSelect(active ? null : s.stage),
				className: cn("card-surface lift-on-hover relative overflow-hidden p-5 text-left transition-all", active && "ring-2 ring-primary/40"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute inset-x-0 top-0 h-1", rails[s.tone]) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-9 shrink-0 place-items-center rounded-xl", tones[s.tone]),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold tabular-nums tracking-tight",
							children: count
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-1.5 text-xs text-muted-foreground",
							children: String(i + 1).padStart(2, "0")
						}), s.stage]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground",
						children: s.description
					})
				]
			}, s.stage);
		})
	});
}
function ArchiveQueueTable({ limit }) {
	const rows = limit ? archiveQueue().slice(0, limit) : archiveQueue();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "hidden sm:table-cell",
				children: "Department"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Ends in" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "hidden sm:table-cell",
				children: "Current status"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-right",
				children: "Estimated archive"
			})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "max-w-[220px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/events/$eventId",
					params: { eventId: r.event.id },
					className: "block truncate text-sm font-medium hover:text-primary",
					children: r.event.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: r.event.club
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "hidden sm:table-cell text-sm text-muted-foreground",
				children: r.event.department
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: "rounded-full tabular-nums",
				children: formatEndsIn(r.endsInMs)
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "hidden sm:table-cell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "text-right text-xs text-muted-foreground",
				children: format(new Date(r.estimatedArchive), "dd MMM, h:mm a")
			})
		] }, r.event.id)) })] })
	});
}
function LifecyclePage() {
	const [stage, setStage] = (0, import_react.useState)(null);
	const filtered = stage ? events.filter((e) => resolveStatus(e) === stage) : events;
	const queue = archiveQueue();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Event Lifecycle",
			subtitle: "Every event flows through eight governed stages and archives itself automatically",
			breadcrumb: [{
				label: "CampusPulse",
				to: "/"
			}, { label: "Lifecycle" }],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "rounded-xl bg-card",
				onClick: () => toast.success("Lifecycle states re-evaluated"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "mr-2 size-4" }), " Re-evaluate now"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Total events",
					value: events.length,
					icon: Layers,
					index: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Archived automatically",
					value: archivedEvents().length,
					icon: Archive,
					tone: "success",
					index: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "In archive queue",
					value: queue.length,
					icon: Timer,
					tone: "warning",
					index: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Currently live",
					value: events.filter((e) => resolveStatus(e) === "Live").length,
					icon: Activity,
					tone: "danger",
					index: 3
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
			title: "Lifecycle timeline",
			description: "Click any stage to filter the events below",
			className: "mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifecycleTimeline, {
				selected: stage,
				onSelect: setStage
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				className: "xl:col-span-2",
				title: stage ? `${stage} events` : "All events",
				description: `${filtered.length} event${filtered.length === 1 ? "" : "s"} in this view`,
				action: stage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					className: "rounded-xl",
					onClick: () => setStage(null),
					children: "Clear filter"
				}),
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Layers,
					title: "No events in this stage",
					description: "Pick another stage on the timeline above."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: filtered.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-2xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events/$eventId",
								params: { eventId: e.id },
								className: "block truncate text-sm font-medium hover:text-primary",
								children: e.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									e.department,
									" · ends ",
									format(new Date(e.end), "dd MMM, h:mm a")
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(e) })]
					}, e.id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Archive activity",
				description: "Automatic actions logged by the system",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveTimeline, { limit: 4 })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
			title: "Auto archive queue",
			description: "Events that will archive themselves shortly after their end time",
			className: "mt-6",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/archive-logs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					className: "rounded-xl",
					children: "Open monitor"
				})
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveQueueTable, {})
		})
	] });
}
//#endregion
export { LifecyclePage as component };
