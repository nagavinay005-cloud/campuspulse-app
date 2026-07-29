import { h as lifecycle } from "./mock-CEuLP2kB.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { zt as Check } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lifecycle-flow-Cs6cRufP.js
var import_jsx_runtime = require_jsx_runtime();
function LifecycleFlow({ current }) {
	const activeIndex = lifecycle.findIndex((l) => l.stage === current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-0",
		children: lifecycle.map((step, i) => {
			const done = i < activeIndex;
			const active = i === activeIndex;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
				initial: {
					opacity: 0,
					x: -8
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: i * .05 },
				className: "relative flex gap-4 pb-6 last:pb-0",
				children: [
					i < lifecycle.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px", done ? "bg-primary" : "bg-border") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("z-10 grid size-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors", done && "border-primary bg-primary text-primary-foreground", active && "border-primary bg-primary-soft text-primary ring-4 ring-primary/10", !done && !active && "border-border bg-card text-muted-foreground"),
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : i + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("text-sm font-medium", active ? "text-primary" : "text-foreground"),
							children: step.stage
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: step.note
						})]
					})
				]
			}, step.stage);
		})
	});
}
//#endregion
export { LifecycleFlow as t };
