import { o as __toESM } from "./_runtime.mjs";
import { d as departments, r as archivedEvents } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { O as RotateCcw, Qt as Award, St as Copy, T as Search, ht as FileChartColumnIncreasing, i as Users, nn as Archive, nt as Images, v as Star, vt as Download } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-Dg1urBTx.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "./_libs/motion.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader, t as EmptyState } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { s as getArchiveMeta } from "./_ssr/archive-D_pmsryf.mjs";
import { n as format } from "./_libs/date-fns.mjs";
import { t as ArchiveBadge } from "./_ssr/archive-badge-aLLn6UR_.mjs";
import { t as SummaryModal } from "./_ssr/summary-modal-DRM_yxAG.mjs";
import { t as ArchiveTimeline } from "./_ssr/archive-timeline-fDYAc4eF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.archive-manager-AqaRc4nK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArchiveCard({ event, index = 0, onSummary, onGallery }) {
	const meta = getArchiveMeta(event.id);
	const rate = Math.round((event.attended ?? 0) / Math.max(1, event.registered) * 100);
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/9] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: event.banner,
				alt: event.title,
				loading: "lazy",
				width: 1280,
				height: 720,
				className: "size-full object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveBadge, { className: "bg-card/95 backdrop-blur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full border-0 bg-card/95 px-2.5 py-1 font-medium backdrop-blur",
					children: event.category
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "line-clamp-2 text-base font-semibold leading-snug",
					children: event.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						event.department,
						" · ",
						event.organizer
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-2 gap-y-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Started"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: format(new Date(event.start), "dd MMM yyyy, h:mm a")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Ended"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: format(new Date(event.end), "dd MMM yyyy, h:mm a")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Archived"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium",
							children: format(new Date(meta.archivedAt), "dd MMM yyyy, h:mm a")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Report"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "font-medium",
							children: ["PDF · ", meta.reportSize]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary p-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mx-auto size-3.5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold tabular-nums",
									children: event.attended ?? 0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] uppercase tracking-wide text-muted-foreground",
									children: [rate, "% attended"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary p-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mx-auto size-3.5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold tabular-nums",
									children: meta.certificates
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-wide text-muted-foreground",
									children: "certificates"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary p-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mx-auto size-3.5 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-semibold tabular-nums",
									children: meta.feedbackScore.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-wide text-muted-foreground",
									children: "feedback"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4",
					children: [
						onSummary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "rounded-xl",
							onClick: () => onSummary(event),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumnIncreasing, { className: "mr-1.5 size-3.5" }), " View Summary"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/summary/$eventId",
							params: { eventId: event.id },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "w-full rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumnIncreasing, { className: "mr-1.5 size-3.5" }), " View Summary"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl bg-card",
							onClick: () => onGallery ? onGallery(event) : toast.success("Opening event gallery"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "mr-1.5 size-3.5" }), " Gallery"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl bg-card",
							onClick: () => toast.success(`Report for ${event.title} downloaded`),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-3.5" }), " Report"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl bg-card",
							onClick: () => toast.success("Event duplicated into Drafts"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "mr-1.5 size-3.5" }), " Duplicate"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							className: "col-span-2 rounded-xl text-muted-foreground",
							onClick: () => toast.info("Restore requires admin approval (demo only)"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 size-3.5" }), " Restore event"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "size-3" }), " Registrations permanently closed by automatic expiry"]
				})
			]
		})]
	});
}
function ArchiveManager() {
	const [q, setQ] = (0, import_react.useState)("");
	const [dept, setDept] = (0, import_react.useState)("all");
	const [active, setActive] = (0, import_react.useState)(null);
	const all = archivedEvents();
	const list = (0, import_react.useMemo)(() => all.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()) && (dept === "all" || e.department === dept)), [
		all,
		q,
		dept
	]);
	const totalCerts = all.reduce((s, e) => s + getArchiveMeta(e.id).certificates, 0);
	const avgFeedback = all.length ? all.reduce((s, e) => s + getArchiveMeta(e.id).feedbackScore, 0) / all.length : 0;
	const totalAttended = all.reduce((s, e) => s + (e.attended ?? 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Archive Management",
			subtitle: "Every event archived automatically the moment its end time passed",
			breadcrumb: [{
				label: "CampusPulse",
				to: "/"
			}, { label: "Archive Management" }],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl bg-card",
				onClick: () => toast.success("Archive bundle exported"),
				children: "Export all reports"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Archived events",
					value: all.length,
					icon: Archive,
					index: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Attendance recorded",
					value: totalAttended,
					icon: Users,
					tone: "success",
					index: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Certificates generated",
					value: totalCerts,
					icon: Award,
					tone: "warning",
					index: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Avg. feedback",
					value: Math.round(avgFeedback * 10) / 10,
					icon: Star,
					tone: "danger",
					index: 3
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-6 flex flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search archived events…",
					className: "h-11 rounded-2xl bg-card pl-10"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: dept,
				onValueChange: setDept,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-11 rounded-2xl bg-card sm:w-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Department" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: "All departments"
				}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: d,
					children: d
				}, d))] })]
			})]
		}),
		list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Archive,
			title: "Nothing archived here yet",
			description: "Adjust your search or department filter to find archived events."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
			children: list.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveCard, {
				event: e,
				index: i,
				onSummary: setActive,
				onGallery: () => toast.success("Gallery opened — 24 photos preserved")
			}, e.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
			title: "Archive activity timeline",
			description: "Automatic lifecycle actions logged by CampusPulse",
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveTimeline, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryModal, {
			event: active,
			open: !!active,
			onOpenChange: (v) => !v && setActive(null)
		})
	] });
}
//#endregion
export { ArchiveManager as component };
