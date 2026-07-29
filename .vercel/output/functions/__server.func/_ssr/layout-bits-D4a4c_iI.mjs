import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { It as ChevronRight } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as AnimatedCounter } from "./primitives-txGWT-aG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-bits-D4a4c_iI.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, subtitle, breadcrumb, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8",
		children: [breadcrumb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mb-3 flex items-center gap-1 text-xs text-muted-foreground",
			children: breadcrumb.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3" }), b.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: b.to,
					className: "transition-colors hover:text-foreground",
					children: b.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground",
					children: b.label
				})]
			}, b.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-2xl font-semibold tracking-tight sm:text-3xl",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: subtitle
				})]
			}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2",
				children: actions
			})]
		})]
	});
}
function StatCard({ label, value, delta, icon: Icon, tone = "primary", suffix, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: index * .06,
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "card-surface lift-on-hover p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid size-9 shrink-0 place-items-center rounded-xl", {
						primary: "bg-primary-soft text-primary",
						success: "bg-success-soft text-success",
						warning: "bg-warning-soft text-warning",
						danger: "bg-danger-soft text-danger"
					}[tone]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-3xl font-semibold tracking-tight",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
					value,
					suffix
				})
			}),
			delta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: delta
			})
		]
	});
}
function SectionCard({ title, description, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("card-surface p-6", className),
		children: [(title || action) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate text-base font-semibold",
					children: title
				}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-sm text-muted-foreground",
					children: description
				})]
			}), action]
		}), children]
	});
}
function EmptyState({ icon: Icon, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-12 place-items-center rounded-2xl bg-secondary text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-base font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-sm text-sm text-muted-foreground",
				children: description
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: action
			})
		]
	});
}
function LoadingSkeletonState({ count = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface p-5 space-y-3 animate-pulse",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 w-full rounded-xl bg-secondary/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-3/4 rounded-lg bg-secondary/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-1/2 rounded-lg bg-secondary/60" })
			]
		}, i))
	});
}
//#endregion
export { StatCard as a, SectionCard as i, LoadingSkeletonState as n, PageHeader as r, EmptyState as t };
