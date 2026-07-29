import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { Nt as CircleCheck, Qt as Award, T as Search, Xt as Bell, p as Trash2 } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./_ssr/tabs-CCJRliUM.mjs";
import { t as notificationService } from "./_ssr/notificationService-BiDQ_ryr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.notifications-DL-D--w4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Hook for live real-time Firestore Notifications stream
*/
function useNotifications(userId = "std-001") {
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const unsubscribe = notificationService.subscribe(userId, (data) => {
			setNotifications(data);
			setLoading(false);
		});
		return () => unsubscribe();
	}, [userId]);
	return {
		notifications,
		unreadCount: notifications.filter((n) => !n.isRead).length,
		loading
	};
}
/**
* Priority tone styling utility for notification UI
*/
function getPriorityStyle(priority) {
	switch (priority) {
		case "urgent": return "bg-danger-soft text-danger border-danger/30 font-bold";
		case "high": return "bg-warning-soft text-warning border-warning/30 font-semibold";
		case "medium": return "bg-primary-soft text-primary border-primary/30";
		default: return "bg-secondary text-muted-foreground border-border";
	}
}
function NotificationList({ items }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid place-items-center py-12 text-center border border-dashed rounded-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-8 text-muted-foreground opacity-50 mb-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-sm",
				children: "No notifications found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: "You are completely up to date."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3",
		children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			onClick: () => notificationService.markAsRead(n.notificationId),
			className: cn("flex items-start gap-4 rounded-2xl border p-4 transition-colors cursor-pointer hover:bg-secondary/60", !n.isRead ? "border-primary/30 bg-primary-soft/30" : "border-border bg-card"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary",
				children: n.category === "Certificates" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold text-foreground",
								children: n.title
							}), !n.isRead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "h-5 rounded-full px-1.5 text-[10px]",
								children: "New"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: cn("rounded-full text-[10px] uppercase", getPriorityStyle(n.priority)),
							children: n.priority
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground leading-relaxed",
						children: n.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(n.createdAt).toLocaleTimeString([], {
							hour: "2-digit",
							minute: "2-digit"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: (e) => {
								e.stopPropagation();
								notificationService.deleteNotification(n.notificationId);
							},
							className: "text-xs text-muted-foreground hover:text-danger",
							children: "Delete"
						})]
					})
				]
			})]
		}, n.notificationId))
	});
}
function Notifications() {
	const { notifications, unreadCount } = useNotifications();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const filtered = notifications.filter((n) => n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.message.toLowerCase().includes(searchQuery.toLowerCase()));
	const unreadItems = filtered.filter((n) => !n.isRead);
	const eventsItems = filtered.filter((n) => n.category === "Events");
	const regItems = filtered.filter((n) => n.category === "Registrations");
	const certItems = filtered.filter((n) => n.category === "Certificates");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Notification Center",
			subtitle: `${unreadCount} unread realtime updates`,
			breadcrumb: [{
				label: "CampusPulse",
				to: "/"
			}, { label: "Notifications" }],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card text-xs",
					onClick: () => notificationService.markAllAsRead(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1.5 size-4 text-success" }), " Mark All Read"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card text-xs",
					onClick: () => notificationService.clearReadNotifications(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1.5 size-4 text-danger" }), " Clear Read"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
			className: "max-w-4xl space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: searchQuery,
					onChange: (e) => setSearchQuery(e.target.value),
					placeholder: "Search notification titles, events, or alerts...",
					className: "h-10 rounded-xl bg-card pl-9 text-xs"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "all",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "mb-4 rounded-xl flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "all",
								className: "rounded-lg text-xs",
								children: [
									"All (",
									filtered.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "unread",
								className: "rounded-lg text-xs",
								children: [
									"Unread (",
									unreadItems.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "events",
								className: "rounded-lg text-xs",
								children: [
									"Events (",
									eventsItems.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "registrations",
								className: "rounded-lg text-xs",
								children: [
									"Registrations (",
									regItems.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
								value: "certificates",
								className: "rounded-lg text-xs",
								children: [
									"Certificates (",
									certItems.length,
									")"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "all",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationList, { items: filtered })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "unread",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationList, { items: unreadItems })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "events",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationList, { items: eventsItems })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "registrations",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationList, { items: regItems })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "certificates",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationList, { items: certItems })
					})
				]
			})]
		})]
	});
}
//#endregion
export { Notifications as component };
