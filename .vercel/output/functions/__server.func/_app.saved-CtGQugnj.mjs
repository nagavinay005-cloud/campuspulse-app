import { t as activeEvents } from "./_ssr/mock-CEuLP2kB.mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { Jt as Bookmark } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as PageHeader, t as EmptyState } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { t as EventCard } from "./_ssr/event-card-K2L7tgup.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.saved-CtGQugnj.js
var import_jsx_runtime = require_jsx_runtime();
function Saved() {
	const saved = activeEvents().slice(1, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Saved Events",
		subtitle: `${saved.length} events bookmarked`,
		breadcrumb: [
			{
				label: "CampusPulse",
				to: "/"
			},
			{
				label: "Student",
				to: "/dashboard"
			},
			{ label: "Saved" }
		],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/events",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "rounded-xl bg-card",
				children: "Browse feed"
			})
		})
	}), saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: Bookmark,
		title: "Nothing saved yet",
		description: "Tap the bookmark icon on any event card to keep it here for later.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/events",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "rounded-xl",
				children: "Explore events"
			})
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
		children: saved.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
			event: e,
			index: i
		}, e.id))
	})] });
}
//#endregion
export { Saved as component };
