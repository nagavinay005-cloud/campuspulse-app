import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { Qt as Award, Wt as CalendarClock, i as Users, v as Star } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { s as getArchiveMeta } from "./archive-D_pmsryf.mjs";
import { n as format } from "../_libs/date-fns.mjs";
import { t as ArchiveBadge } from "./archive-badge-aLLn6UR_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/summary-modal-DRM_yxAG.js
var import_jsx_runtime = require_jsx_runtime();
function SummaryModal({ event, open, onOpenChange }) {
	if (!event) return null;
	const meta = getArchiveMeta(event.id);
	const rate = Math.round((event.attended ?? 0) / Math.max(1, event.registered) * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] overflow-y-auto rounded-2xl sm:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "pr-6 text-left leading-snug",
					children: event.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
					className: "text-left",
					children: [
						event.department,
						" · ",
						event.club,
						" · organised by ",
						event.organizer
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: event.banner,
					alt: event.title,
					className: "aspect-[16/7] w-full rounded-2xl object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveBadge, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "rounded-full",
							children: event.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "rounded-full",
							children: ["Archived ", format(new Date(meta.archivedAt), "dd MMM yyyy, h:mm a")]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						{
							icon: Users,
							label: "Attended",
							value: `${event.attended ?? 0}`
						},
						{
							icon: CalendarClock,
							label: "Registered",
							value: `${event.registered}`
						},
						{
							icon: Award,
							label: "Certificates",
							value: `${meta.certificates}`
						},
						{
							icon: Star,
							label: "Feedback",
							value: meta.feedbackScore.toFixed(1)
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xl font-semibold tabular-nums",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.label
							})
						]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Attendance rate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: [rate, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: rate,
					className: "h-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: event.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "rounded-xl",
						onClick: () => toast.success("Summary report downloaded"),
						children: "Download report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						onClick: () => toast.success("Attendance sheet exported"),
						children: "Download attendance"
					})]
				})
			]
		})
	});
}
//#endregion
export { SummaryModal as t };
