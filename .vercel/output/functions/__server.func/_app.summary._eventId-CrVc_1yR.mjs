import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.summary._eventId-CrVc_1yR.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "py-20 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "That event summary does not exist."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/archive-manager",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-4 rounded-xl",
			children: "Back to archive"
		})
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
