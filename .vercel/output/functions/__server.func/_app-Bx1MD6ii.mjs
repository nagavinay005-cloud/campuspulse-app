import { o as __toESM } from "./_runtime.mjs";
import { _ as notifications } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as useAuth } from "./_ssr/AuthContext-DMw6Al4m.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { B as Menu, Bt as ChartPie, C as Settings, Ct as Compass, Jt as Bookmark, Kt as Building2, M as QrCode, Mt as CirclePlus, O as RotateCcw, Q as Layers, Qt as Award, T as Search, Ut as CalendarDays, Vt as ChartColumn, Xt as Bell, Z as LayoutDashboard, Zt as BadgeCheck, a as User, f as TrendingUp, h as Ticket, ht as FileChartColumnIncreasing, i as Users, kt as ClipboardList, mt as FileCheck, n as X, nn as Archive, q as ListChecks, qt as Bot, r as Workflow, st as GraduationCap, w as Send, x as ShieldCheck, xt as Cpu, y as Sparkles } from "./_libs/lucide-react.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./_ssr/dialog-DIo89e4g.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-Dg1urBTx.mjs";
import { a as DropdownMenuSeparator, i as DropdownMenuLabel, n as DropdownMenuContent, o as DropdownMenuTrigger, r as DropdownMenuItem, t as DropdownMenu } from "./_ssr/dropdown-menu-BtjXROHi.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as AnimatePresence } from "./_libs/framer-motion.mjs";
import { t as motion } from "./_libs/motion.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "./_libs/radix-ui__react-popover.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "./_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-Bx1MD6ii.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var aiService = { 
/**
* Process incoming user message using Rule-based NLP + Gemini Plug Interface
*/
async sendMessage(query, role = "Student") {
	const q = query.toLowerCase().trim();
	let reply = "";
	let quickActions;
	if (q.includes("today") || q.includes("live") || q.includes("now") || q.includes("happening")) {
		reply = "📅 **Events Happening Today:**\n1. **AI Builders Summit & Hackathon 2026** (Innovation Hall · 09:00 AM – Live Now)\n2. **Rhythm & Rangoli Cultural Night** (Main Auditorium · 05:00 PM – Upcoming)\n\nWould you like me to register you or display your QR entry pass?";
		quickActions = [{
			label: "View Event Details",
			action: "/events/evt-001"
		}, {
			label: "My Registrations",
			action: "/registrations"
		}];
	} else if (q.includes("certificate") || q.includes("eligible") || q.includes("cert")) {
		reply = "🎓 **Certificate Status Check:**\nYou have **2 Verified Participation Certificates** available in your wallet!\n- **AI Builders Summit 2026** (ID: CP-CERT-001) — Issued & Verified ✅\n- **Cybersecurity CTF 2025** (ID: CP-CERT-002) — Issued & Verified ✅\n\nCertificates remain downloadable forever, even after events are auto-archived!";
		quickActions = [{
			label: "Open Certificate Wallet",
			action: "/certificates"
		}];
	} else if (q.includes("archive") || q.includes("expiry") || q.includes("archived") || q.includes("daemon")) {
		reply = "🏛️ **Flagship Auto-Archive Engine Telemetry:**\n- **Engine Status:** Running (Scanning every 30s) 🟢\n- **Total Auto-Archived:** 412 Events\n- **Archival Success SLA:** 100%\n- **Preservation Policy:** Attendance logs, verified certificates, reports, and galleries are preserved permanently.";
		quickActions = [{
			label: "Archive Center Dashboard",
			action: "/admin/archive-logs"
		}, {
			label: "Trigger Archiving Sweep",
			action: "SWEEP"
		}];
	} else if (q.includes("approval") || q.includes("pending") || q.includes("approve")) {
		reply = "📋 **Governance Center Alerts:**\nThere are **3 Event Submissions** awaiting Admin Approval:\n1. *Quantum Computing Hands-on Workshop* (Department of CSE)\n2. *Annual Robotics Grand Prix 2026* (Robotics Club)\n3. *E-Cell Startup Bootcamp* (Department of MBA)\n\nAll governance checklists are passing.";
		quickActions = [{
			label: "Open Approval Center",
			action: "/admin/approvals"
		}];
	} else if (q.includes("analytics") || q.includes("stats") || q.includes("report")) {
		reply = "📊 **Live Platform Business Intelligence:**\n- **Total Registrations:** 18,940\n- **Attendance Rate:** 94% Turnout\n- **Certificates Generated:** 4,120\n- **Most Active Department:** Computer Science & Engineering (+32% Growth)";
		quickActions = [{
			label: "Full Analytics Dashboard",
			action: "/admin/reports"
		}];
	} else if (q.includes("recommend") || q.includes("cse") || q.includes("workshops")) {
		reply = "✨ **Recommended Technical Events for CSE:**\n1. **AI Builders Summit & Hackathon 2026** — 24-hr agentic coding challenge.\n2. **Cloud Native Kubernetes Bootcamp** — Hands-on DevOps lab session.\n\nWould you like to register now?";
		quickActions = [{
			label: "Register for Hackathon",
			action: "/organizer/create"
		}];
	} else {
		reply = `🤖 **PulseAI Assistant:**\nI can help you search events, check your QR entry passes, verify certificates, view analytics, or monitor the flagship **Automatic Event Expiry & Archiving Engine**!\n\nTry asking:\n- *"What events are happening today?"*\n- *"Am I eligible for a certificate?"*\n- *"What is the auto-archive engine status?"*`;
		quickActions = [
			{
				label: "Find Events",
				action: "/events"
			},
			{
				label: "My Certificates",
				action: "/certificates"
			},
			{
				label: "Archive Status",
				action: "/admin/archive-logs"
			}
		];
	}
	return {
		id: `msg-${Date.now()}`,
		sender: "ai",
		text: reply,
		timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}),
		quickActions
	};
} };
var AI_PROMPTS = {
	SYSTEM_PROMPT: `You are PulseAI, the intelligent assistant for CampusPulse — the University Event Announcement & Governance Platform featuring Automatic Event Expiry and Archiving.
  You assist Students, Organizers, and Admins with event discovery, registration checks, attendance verification, certificate issuance, analytics insights, and automatic archiving telemetry.`,
	STUDENT_WELCOME: "Hello Aarav! I am PulseAI. How can I help you find events, check your QR passes, or download certificates today?",
	ORGANIZER_WELCOME: "Greetings Executive Desk! PulseAI ready to assist with event descriptions, attendance check-ins, or feedback summaries.",
	ADMIN_WELCOME: "Welcome Director! PulseAI monitoring platform telemetry, pending approvals, and automatic archiving status."
};
function AiAssistantPanel() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [inputMsg, setInputMsg] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "init-1",
		sender: "ai",
		text: AI_PROMPTS.STUDENT_WELCOME,
		timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}),
		quickActions: [
			{
				label: "Find Events",
				action: "/events"
			},
			{
				label: "My Certificates",
				action: "/certificates"
			},
			{
				label: "Archive Status",
				action: "/admin/archive-logs"
			},
			{
				label: "Today's Events",
				action: "QUERY_TODAY"
			}
		]
	}]);
	const handleSend = async (customText) => {
		const textToSend = customText || inputMsg;
		if (!textToSend.trim()) return;
		const userMsg = {
			id: `usr-${Date.now()}`,
			sender: "user",
			text: textToSend,
			timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		setMessages((prev) => [...prev, userMsg]);
		if (!customText) setInputMsg("");
		setIsTyping(true);
		setTimeout(async () => {
			const aiReply = await aiService.sendMessage(textToSend, "Student");
			setMessages((prev) => [...prev, aiReply]);
			setIsTyping(false);
		}, 600);
	};
	const handleActionClick = (action) => {
		if (action.startsWith("/")) {
			navigate({ to: action });
			setIsOpen(false);
		} else if (action === "QUERY_TODAY") handleSend("What events are happening today?");
		else if (action === "SWEEP") toast.info("Triggered Auto-Archiving sweep via PulseAI!");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 left-6 z-50",
		children: !isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => setIsOpen(true),
			className: "rounded-full shadow-2xl bg-primary text-primary-foreground px-4 py-6 font-bold text-xs flex items-center gap-2 ring-4 ring-primary/20 hover:scale-105 transition-all",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "PulseAI Assistant"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "bg-primary-foreground text-primary text-[10px] rounded-full px-1.5 font-extrabold",
					children: "AI"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-[380px] sm:w-[400px] h-[520px] rounded-3xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-primary p-4 text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-xl bg-primary-foreground/20 font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-bold text-sm leading-none flex items-center gap-1.5",
							children: ["PulseAI Assistant ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-warning fill-warning" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-primary-foreground/80 mt-1",
							children: "CampusPulse Event Governance AI"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-7 text-primary-foreground/80 hover:bg-primary-foreground/20 rounded-lg",
							title: "Clear Chat History",
							onClick: () => {
								setMessages([]);
								toast.info("Chat history cleared.");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-7 text-primary-foreground/80 hover:bg-primary-foreground/20 rounded-lg",
							onClick: () => setIsOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs",
					children: [messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex items-start gap-2.5 max-w-[85%]", m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold mt-0.5", m.sender === "user" ? "bg-primary text-primary-foreground" : "bg-primary-soft text-primary border border-primary/20"),
							children: m.sender === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-2xl p-3.5 leading-relaxed text-xs shadow-sm", m.sender === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-secondary/70 border border-border text-foreground rounded-tl-none"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "whitespace-pre-wrap",
									children: m.text
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[9px] opacity-60 text-right mt-1",
									children: m.timestamp
								})]
							}), m.quickActions && m.quickActions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5 pt-1",
								children: m.quickActions.map((qa) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleActionClick(qa.action),
									className: "rounded-full border border-primary/30 bg-primary-soft/50 px-3 py-1 text-[10px] font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all",
									children: qa.label
								}, qa.label))
							})]
						})]
					}, m.id)), isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground italic",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4 animate-bounce text-primary" }), " PulseAI is thinking..."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-card p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleSend();
						},
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: inputMsg,
							onChange: (e) => setInputMsg(e.target.value),
							placeholder: "Ask PulseAI about events, certs, or archiving...",
							className: "h-10 rounded-xl bg-secondary/40 text-xs pl-3"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "icon",
							className: "size-10 shrink-0 rounded-xl shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
						})]
					})
				})
			]
		})
	});
}
function AppRouteWrapper() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
var roles = [
	{
		key: "student",
		label: "Student",
		home: "/dashboard",
		nav: [
			{
				to: "/dashboard",
				label: "Dashboard",
				icon: LayoutDashboard
			},
			{
				to: "/events",
				label: "Event Feed",
				icon: Compass
			},
			{
				to: "/calendar",
				label: "Calendar",
				icon: CalendarDays
			},
			{
				to: "/saved",
				label: "Saved Events",
				icon: Bookmark
			},
			{
				to: "/registrations",
				label: "My Registrations",
				icon: Ticket
			},
			{
				to: "/certificates",
				label: "Certificates",
				icon: Award
			},
			{
				to: "/archive",
				label: "Archived Events",
				icon: ClipboardList
			},
			{
				to: "/lifecycle",
				label: "Event Lifecycle",
				icon: Workflow
			},
			{
				to: "/notifications",
				label: "Notifications",
				icon: Bell
			}
		]
	},
	{
		key: "organizer",
		label: "Organizer",
		home: "/organizer",
		nav: [
			{
				to: "/organizer",
				label: "Dashboard",
				icon: LayoutDashboard
			},
			{
				to: "/organizer/create",
				label: "Create Event",
				icon: CirclePlus
			},
			{
				to: "/organizer/events",
				label: "Manage Events",
				icon: ListChecks
			},
			{
				to: "/organizer/registrations",
				label: "Registrations",
				icon: Users
			},
			{
				to: "/organizer/attendance",
				label: "Attendance & QR",
				icon: QrCode
			},
			{
				to: "/organizer/analytics",
				label: "Analytics",
				icon: ChartColumn
			},
			{
				to: "/archive-manager",
				label: "Archive Manager",
				icon: Archive
			},
			{
				to: "/archive-analytics",
				label: "Archive Analytics",
				icon: ChartPie
			}
		]
	},
	{
		key: "admin",
		label: "Administrator",
		home: "/admin",
		nav: [
			{
				to: "/admin/command-center",
				label: "Command Center",
				icon: Cpu
			},
			{
				to: "/admin/digital-twin",
				label: "Digital Twin",
				icon: Layers
			},
			{
				to: "/admin/predictive-intelligence",
				label: "Predictive Intelligence",
				icon: TrendingUp
			},
			{
				to: "/admin",
				label: "Dashboard",
				icon: LayoutDashboard
			},
			{
				to: "/admin/approvals",
				label: "Event Approval",
				icon: BadgeCheck
			},
			{
				to: "/admin/users",
				label: "Users & Roles",
				icon: ShieldCheck
			},
			{
				to: "/admin/departments",
				label: "Departments & Clubs",
				icon: Building2
			},
			{
				to: "/admin/archive-logs",
				label: "Archive Monitor",
				icon: Archive
			},
			{
				to: "/admin/reports",
				label: "Reports",
				icon: FileChartColumnIncreasing
			},
			{
				to: "/admin/audit",
				label: "Audit Trail",
				icon: FileCheck
			},
			{
				to: "/admin/settings",
				label: "Platform Settings",
				icon: Settings
			}
		]
	}
];
function AppShell() {
	const { user, loading, userProfile, saveUserProfile, logout } = useAuth();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [onboardName, setOnboardName] = (0, import_react.useState)("");
	const [onboardDept, setOnboardDept] = (0, import_react.useState)("Computer Science & Engineering");
	const [onboardYear, setOnboardYear] = (0, import_react.useState)("3rd Year");
	const [isOnboardingSaving, setIsOnboardingSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!loading && (!user || !userProfile)) navigate({ to: "/login" });
		if (userProfile && !userProfile.profileCompleted && userProfile.name) setOnboardName(userProfile.name);
	}, [
		user,
		loading,
		userProfile,
		navigate
	]);
	const needsOnboarding = userProfile && userProfile.profileCompleted === false;
	const handleSaveOnboarding = async (e) => {
		e.preventDefault();
		if (!onboardName.trim()) return;
		setIsOnboardingSaving(true);
		await saveUserProfile({
			name: onboardName.trim(),
			department: onboardDept,
			year: onboardYear,
			profileCompleted: true
		});
		setIsOnboardingSaving(false);
	};
	const activeRoleName = userProfile?.role || null;
	const role = activeRoleName === "Admin" ? roles[2] : activeRoleName === "Organizer" ? roles[1] : roles[0];
	const unread = notifications.filter((n) => n.unread).length;
	const displayName = userProfile?.name || user?.displayName || "Campus User";
	const displayEmail = userProfile?.email || user?.email || "user@campus.edu";
	const initials = displayName.split(" ").filter(Boolean).map((n) => n[0]).join("").slice(0, 2).toUpperCase();
	const isUnauthorized = activeRoleName === "Student" && (pathname.startsWith("/admin") || pathname.startsWith("/organizer")) || activeRoleName === "Organizer" && pathname.startsWith("/admin");
	const nav = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-6 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2.5 px-2 py-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.jpg",
					alt: "CampusPulse Logo",
					className: "size-9 rounded-xl object-cover shadow-glow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-base font-semibold tracking-tight",
					children: "CampusPulse"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
				children: [role.label, " workspace"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "space-y-1",
				children: role.nav.map((item) => {
					const active = pathname === item.to || item.to !== role.home && pathname.startsWith(item.to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						onClick: () => setMobileOpen(false),
						className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground hover:bg-secondary hover:text-foreground"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: item.label
							}),
							item.label === "Notifications" && unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "ml-auto h-5 rounded-full px-1.5 text-[10px]",
								children: unread
							})
						]
					}, item.to);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto space-y-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/settings",
					onClick: () => setMobileOpen(false),
					className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), " Settings"]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "fixed inset-y-0 left-0 z-40 hidden w-[264px] border-r border-sidebar-border bg-sidebar lg:block",
				children: nav
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setMobileOpen(false),
				className: "fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
				initial: { x: -280 },
				animate: { x: 0 },
				exit: { x: -280 },
				transition: {
					type: "spring",
					damping: 26,
					stiffness: 260
				},
				className: "fixed inset-y-0 left-0 z-50 w-[264px] border-r border-sidebar-border bg-sidebar lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Close menu",
					className: "absolute right-2 top-3 size-8",
					onClick: () => setMobileOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				}), nav]
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-[264px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									"aria-label": "Open menu",
									className: "size-9 lg:hidden",
									onClick: () => setMobileOpen(true),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative hidden min-w-0 sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Search events, clubs, departments…",
										className: "h-10 max-w-md rounded-xl border-border bg-card pl-9",
										onKeyDown: (e) => {
											if (e.key === "Enter") {
												const q = e.target.value.trim();
												if (q) navigate({
													to: "/events",
													search: { q }
												});
											}
										}
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-start-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "icon",
											"aria-label": "Notifications",
											className: "relative size-9 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1.5 top-1.5 size-2 rounded-full bg-danger ring-2 ring-background" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
										align: "end",
										className: "w-80 rounded-2xl p-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between border-b border-border px-4 py-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: "Notifications"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													variant: "secondary",
													className: "rounded-full",
													children: [unread, " new"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
												className: "h-72",
												children: notifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "border-b border-border px-4 py-3 last:border-0 hover:bg-secondary/60",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-medium",
															children: n.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-0.5 text-xs text-muted-foreground",
															children: n.body
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-[11px] text-muted-foreground",
															children: n.time
														})
													]
												}, n.id))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/notifications",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														className: "w-full rounded-xl text-sm",
														children: "View all"
													})
												})
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "flex items-center gap-2 rounded-xl border border-border bg-card py-1 pl-1 pr-2.5 transition-colors hover:bg-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-7 place-items-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground",
												children: initials
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden text-sm font-medium sm:block",
												children: displayName.split(" ")[0]
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "end",
										className: "w-56 rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium",
													children: displayName
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-normal text-muted-foreground",
													children: displayEmail
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
													variant: "outline",
													className: "mt-1 text-[10px] rounded-full",
													children: [activeRoleName, " Active"]
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/profile",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 size-4" }), " Profile"]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/settings",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "mr-2 size-4" }), " Settings"]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
												onClick: async () => {
													await logout();
													navigate({ to: "/login" });
												},
												children: "Sign out"
											})
										]
									})] })]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8",
						children: isUnauthorized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-md rounded-3xl border border-danger/30 bg-card p-8 text-center shadow-2xl space-y-4 my-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-2xl bg-danger-soft text-danger font-bold mx-auto text-xl",
									children: "🔒"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-extrabold text-xl text-foreground",
									children: "Access Denied (403)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-1 leading-relaxed",
									children: [
										"Your current active account role is ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: activeRoleName }),
										". This page requires additional role privileges."
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2 pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "rounded-xl shadow-glow text-xs w-full bg-primary",
										onClick: () => navigate({ to: "/login" }),
										children: "Return to Portal Login"
									})
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
						open: !!needsOnboarding,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "sm:max-w-md rounded-2xl p-6 border border-primary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-xl font-bold",
									children: "Welcome to CampusPulse!"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-xs text-muted-foreground pt-1",
								children: "Please complete your basic student profile details to customize your campus experience."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSaveOnboarding,
								className: "space-y-4 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "onboard-name",
											children: "Full Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "onboard-name",
											placeholder: "e.g. Aarav Sharma",
											value: onboardName,
											onChange: (e) => setOnboardName(e.target.value),
											required: true,
											className: "rounded-xl h-11"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Department / Stream" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: onboardDept,
											onValueChange: setOnboardDept,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl h-11",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select Department" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Computer Science & Engineering",
													children: "Computer Science & Engineering"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Information Technology",
													children: "Information Technology"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Electronics & Communication",
													children: "Electronics & Communication"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Mechanical Engineering",
													children: "Mechanical Engineering"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Civil Engineering",
													children: "Civil Engineering"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Management Studies (MBA/BBA)",
													children: "Management Studies (MBA/BBA)"
												})
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Academic Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: onboardYear,
											onValueChange: setOnboardYear,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl h-11",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select Year" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "1st Year",
													children: "1st Year (Freshman)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "2nd Year",
													children: "2nd Year (Sophomore)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "3rd Year",
													children: "3rd Year (Junior)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "4th Year",
													children: "4th Year (Senior)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Postgraduate / PhD",
													children: "Postgraduate / PhD"
												})
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: isOnboardingSaving,
										className: "w-full rounded-xl bg-primary text-primary-foreground font-semibold h-11 shadow-glow",
										children: isOnboardingSaving ? "Saving Profile..." : "Complete Setup & Enter Dashboard"
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiAssistantPanel, {})
				]
			})
		]
	});
}
//#endregion
export { AppRouteWrapper as component };
