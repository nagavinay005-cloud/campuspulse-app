import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { nn as Archive } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/archive-badge-aLLn6UR_.js
var import_jsx_runtime = require_jsx_runtime();
function ArchiveBadge({ label = "Archived", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		variant: "outline",
		className: cn("gap-1.5 rounded-full border-border bg-secondary px-2.5 py-1 font-medium text-muted-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "size-3" }), label]
	});
}
function formatEndsIn(ms) {
	if (ms <= 0) return "Ended";
	const d = Math.floor(ms / 864e5);
	const h = Math.floor(ms % 864e5 / 36e5);
	const m = Math.floor(ms % 36e5 / 6e4);
	if (d > 0) return `${d}d ${h}h`;
	if (h > 0) return `${h}h ${m}m`;
	return `${m}m`;
}
//#endregion
export { formatEndsIn as n, ArchiveBadge as t };
