import { o as __toESM } from "./_runtime.mjs";
import { f as events, y as resolveStatus } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { It as ChevronRight, Lt as ChevronLeft, yt as Dot } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as StatusBadge } from "./_ssr/primitives-txGWT-aG.mjs";
import { i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { n as useLiveEvents } from "./_ssr/useLiveEvents-DycTSZ8b.mjs";
import { a as eachDayOfInterval, c as startOfWeek, i as startOfMonth, l as addMonths, n as format, o as endOfMonth, r as endOfWeek, s as isSameDay, t as isSameMonth } from "./_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.calendar-BeJ-D0EO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CalendarView() {
	const [cursor, setCursor] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	const { events: liveEvents } = useLiveEvents({ status: "Published" });
	const eventsList = (0, import_react.useMemo)(() => {
		const allEvents = [...events];
		liveEvents.forEach((le) => {
			if (!allEvents.some((e) => e.id === le.id)) allEvents.push(le);
		});
		return allEvents;
	}, [liveEvents]);
	const days = eachDayOfInterval({
		start: startOfWeek(startOfMonth(cursor), { weekStartsOn: 1 }),
		end: endOfWeek(endOfMonth(cursor), { weekStartsOn: 1 })
	});
	const eventsOn = (d) => eventsList.filter((e) => isSameDay(new Date(e.start), d));
	const dayEvents = eventsOn(selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Campus Calendar",
		subtitle: "Every event, plotted month by month",
		breadcrumb: [
			{
				label: "CampusPulse",
				to: "/"
			},
			{
				label: "Student",
				to: "/dashboard"
			},
			{ label: "Calendar" }
		],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					"aria-label": "Previous month",
					className: "size-9 rounded-xl bg-card",
					onClick: () => setCursor(addMonths(cursor, -1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-36 text-center text-sm font-semibold",
					children: format(cursor, "MMMM yyyy")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					"aria-label": "Next month",
					className: "size-9 rounded-xl bg-card",
					onClick: () => setCursor(addMonths(cursor, 1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card",
					onClick: () => {
						setCursor(/* @__PURE__ */ new Date());
						setSelected(/* @__PURE__ */ new Date());
					},
					children: "Today"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface p-4 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-1 pb-2 text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
				children: [
					"Mon",
					"Tue",
					"Wed",
					"Thu",
					"Fri",
					"Sat",
					"Sun"
				].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d }, d))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-7 gap-1",
				children: days.map((d) => {
					const list = eventsOn(d);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelected(d),
						className: cn("flex min-h-20 flex-col items-start gap-1 rounded-xl border p-2 text-left transition-colors sm:min-h-24", isSameDay(d, selected) ? "border-primary bg-primary-soft" : "border-transparent hover:bg-secondary", !isSameMonth(d, cursor) && "opacity-40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-xs font-semibold", isSameDay(d, /* @__PURE__ */ new Date()) && "text-primary"),
							children: format(d, "d")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full space-y-1",
							children: [list.slice(0, 2).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate rounded-md bg-card px-1.5 py-0.5 text-[10px] font-medium shadow-soft",
								children: e.title
							}, e.id)), list.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-muted-foreground",
								children: [
									"+",
									list.length - 2,
									" more"
								]
							})]
						})]
					}, d.toISOString());
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
			title: format(selected, "EEEE, dd MMM"),
			description: `${dayEvents.length} event(s) scheduled`,
			children: [dayEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Nothing scheduled. Pick another date to see its agenda."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: dayEvents.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events/$eventId",
					params: { eventId: e.id },
					className: "block rounded-2xl border border-border p-4 transition-colors hover:bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(e) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: format(new Date(e.start), "h:mm a")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-medium leading-snug",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 flex items-center text-xs text-muted-foreground",
							children: [
								e.venue,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { className: "size-3" }),
								" ",
								e.club
							]
						})
					]
				}) }, e.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [
					"Technical",
					"Cultural",
					"Workshop",
					"Sports"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "rounded-full",
					children: c
				}, c))
			})]
		})]
	})] });
}
//#endregion
export { CalendarView as component };
