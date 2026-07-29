import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { At as Circle } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-Dg1urBTx.mjs";
import { i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { t as Separator } from "./_ssr/separator-B3hsz7IR.mjs";
import { t as Switch } from "./_ssr/switch-Cn1w-cIH.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "./_libs/radix-ui__react-radio-group.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.settings-DYm3oJ5b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var toggles = [
	{
		id: "email",
		label: "Email announcements",
		desc: "New events from your department and saved clubs"
	},
	{
		id: "push",
		label: "Push reminders",
		desc: "24 hours and 1 hour before an event starts"
	},
	{
		id: "deadline",
		label: "Deadline alerts",
		desc: "When registration is about to close"
	},
	{
		id: "archive",
		label: "Archive digests",
		desc: "Weekly summary of events that auto-archived"
	},
	{
		id: "cert",
		label: "Certificate releases",
		desc: "As soon as an organizer issues your certificate"
	}
];
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Settings",
		subtitle: "Tune how CampusPulse reaches you",
		breadcrumb: [{
			label: "CampusPulse",
			to: "/"
		}, { label: "Settings" }],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "rounded-xl",
			onClick: () => toast.success("Preferences saved"),
			children: "Save preferences"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid max-w-4xl gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Notifications",
				description: "Choose which channels stay switched on",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: toggles.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: t.id,
							className: "text-sm font-medium",
							children: t.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-muted-foreground",
							children: t.desc
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							id: t.id,
							defaultChecked: i < 4
						})]
					})] }, t.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Feed preferences",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Default landing view" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							defaultValue: "feed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "rounded-xl bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								className: "rounded-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "feed",
										children: "Event feed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "dashboard",
										children: "Dashboard"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "calendar",
										children: "Calendar"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Reminder lead time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							defaultValue: "24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "rounded-xl bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								className: "rounded-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "1",
										children: "1 hour before"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "24",
										children: "24 hours before"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "72",
										children: "3 days before"
									})
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Privacy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
					defaultValue: "dept",
					className: "space-y-3",
					children: [
						{
							v: "public",
							l: "Public profile",
							d: "Any student can see your participation history"
						},
						{
							v: "dept",
							l: "Department only",
							d: "Visible to students and faculty in Computer Science"
						},
						{
							v: "private",
							l: "Private",
							d: "Only organizers of events you register for"
						}
					].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-start gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
							value: o.v,
							className: "mt-0.5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: o.l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: o.d
						})] })]
					}, o.v))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Danger zone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Deactivate account"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Your registrations and certificates stay archived."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-xl border-danger/30 bg-card text-danger",
						onClick: () => toast("Deactivation request sent to admin"),
						children: "Deactivate"
					})]
				})
			})
		]
	})] });
}
//#endregion
export { SettingsPage as component };
