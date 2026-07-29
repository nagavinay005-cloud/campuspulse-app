import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-txGWT-aG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var map = {
	Draft: "bg-muted text-muted-foreground border-border",
	Submitted: "bg-secondary text-secondary-foreground border-border",
	"Pending Approval": "bg-warning-soft text-warning-foreground border-warning/30",
	Published: "bg-primary-soft text-accent-foreground border-primary/20",
	Upcoming: "bg-primary-soft text-accent-foreground border-primary/20",
	Live: "bg-danger-soft text-danger border-danger/30",
	Completed: "bg-success-soft text-success border-success/30",
	Archived: "bg-secondary text-muted-foreground border-border"
};
function StatusBadge({ status, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		variant: "outline",
		className: cn("gap-1.5 rounded-full border px-2.5 py-1 font-medium", map[status], className),
		children: [status === "Live" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-danger" }), status]
	});
}
function parts(ms) {
	return {
		d: Math.floor(ms / 864e5),
		h: Math.floor(ms % 864e5 / 36e5),
		m: Math.floor(ms % 36e5 / 6e4),
		s: Math.floor(ms % 6e4 / 1e3)
	};
}
function Countdown({ to, compact }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [left, setLeft] = (0, import_react.useState)(() => new Date(to).getTime() - Date.now());
	(0, import_react.useEffect)(() => {
		setMounted(true);
		const i = setInterval(() => setLeft(new Date(to).getTime() - Date.now()), 1e3);
		return () => clearInterval(i);
	}, [to]);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs font-medium text-muted-foreground",
		children: "--:--:--"
	});
	if (left <= 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs font-medium text-muted-foreground",
		children: "Ended"
	});
	const { d, h, m, s } = parts(left);
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs font-semibold tabular-nums text-primary",
		children: d > 0 ? `${d}d ${h}h` : `${h}h ${m}m ${s}s`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2",
		children: [
			{
				v: d,
				l: "days"
			},
			{
				v: h,
				l: "hrs"
			},
			{
				v: m,
				l: "min"
			},
			{
				v: s,
				l: "sec"
			}
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-14 rounded-xl border border-border bg-card px-3 py-2 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-lg font-semibold tabular-nums text-foreground",
				children: String(p.v).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-wide text-muted-foreground",
				children: p.l
			})]
		}, p.l))
	});
}
function AnimatedCounter({ value, suffix = "" }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [n, setN] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		let frame = 0;
		const total = 40;
		const id = setInterval(() => {
			frame++;
			const p = 1 - Math.pow(1 - frame / total, 3);
			setN(Math.round(value * p));
			if (frame >= total) clearInterval(id);
		}, 16);
		return () => clearInterval(id);
	}, [value]);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "tabular-nums",
		children: [value.toLocaleString(), suffix]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "tabular-nums",
		children: [n.toLocaleString(), suffix]
	});
}
//#endregion
export { Countdown as n, StatusBadge as r, AnimatedCounter as t };
