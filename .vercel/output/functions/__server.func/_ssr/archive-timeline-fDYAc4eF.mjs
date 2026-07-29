import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { Qt as Award, W as Lock, i as Users, nn as Archive } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as archiveLog } from "./archive-D_pmsryf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive-timeline-fDYAc4eF.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	Archive,
	Award,
	Users,
	Lock
};
var tones = {
	success: "bg-success-soft text-success ring-success/10",
	primary: "bg-primary-soft text-primary ring-primary/10",
	warning: "bg-warning-soft text-warning ring-warning/10"
};
function TimelineCard({ title, detail, when, tone, icon, index = 0 }) {
	const Icon = icons[icon] ?? Archive;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
		initial: {
			opacity: 0,
			x: -8
		},
		animate: {
			opacity: 1,
			x: 0
		},
		transition: {
			delay: index * .05,
			duration: .35
		},
		className: "relative flex gap-4 pb-6 last:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[17px] top-9 h-[calc(100%-1.5rem)] w-px bg-border last:hidden" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("z-10 grid size-9 shrink-0 place-items-center rounded-xl ring-4", tones[tone]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 rounded-2xl border border-border bg-card p-4 pt-3 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs leading-relaxed text-muted-foreground",
						children: detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] uppercase tracking-wide text-muted-foreground",
						children: when
					})
				]
			})
		]
	});
}
function ArchiveTimeline({ limit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative",
		children: (limit ? archiveLog.slice(0, limit) : archiveLog).map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineCard, {
			...a,
			index: i
		}, a.id))
	});
}
//#endregion
export { ArchiveTimeline as t };
