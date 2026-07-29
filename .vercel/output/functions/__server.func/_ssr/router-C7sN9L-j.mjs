import { o as __toESM } from "../_runtime.mjs";
import { a as banner_hackathon_default, c as categorySplit, d as departments, f as events, g as monthlyStats, i as banner_cultural_default, l as clubs, m as isExpired, o as banner_workshop_default, p as getEvent, r as archivedEvents, s as categories, u as departmentPerformance, v as registrants, y as resolveStatus } from "./mock-CEuLP2kB.mjs";
import { i as apiRequest, t as API_BASE_URL } from "./apiClient-CVoaAdKq.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { i as useAuth, n as authService, t as AuthProvider } from "./AuthContext-SoGm2Ioc.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { $ as KeyRound, C as Settings, D as Save, Dt as CloudDownload, E as ScanLine, H as MapPin, Ht as Calendar, It as ChevronRight, J as ListCheck, Kt as Building2, L as Pencil, Lt as ChevronLeft, M as QrCode, Mt as CirclePlus, N as Printer, Nt as CircleCheck, O as RotateCcw, Ot as Clock, P as Plus, Pt as CircleAlert, Q as Layers, Qt as Award, R as Palette, St as Copy, T as Search, Tt as CloudUpload, U as Mail, V as Megaphone, Vt as ChartColumn, W as Lock, Wt as CalendarClock, X as LayoutGrid, Xt as Bell, Y as Lightbulb, Yt as BookMarked, Zt as BadgeCheck, _ as Table, _t as Ellipsis, at as History, bt as Database, c as UserMinus, ct as Globe, d as TriangleAlert, dt as FileText, et as Info, f as TrendingUp, ft as FileSpreadsheet, g as ThumbsUp, gt as Eye, h as Ticket, ht as FileChartColumnIncreasing, i as Users, it as Hourglass, j as Radio, jt as CircleX, k as RefreshCw, l as UserCheck, lt as FolderArchive, m as Timer, mt as FileCheck, n as X, nn as Archive, o as UserX, p as Trash2, pt as FilePen, rn as Activity, rt as ImagePlus, s as UserPlus, st as GraduationCap, t as Zap, u as Upload, v as Star, vt as Download, w as Send, wt as Cloud, x as ShieldCheck, xt as Cpu, y as Sparkles, z as MessageSquare, zt as Check } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { a as DropdownMenuSeparator, i as DropdownMenuLabel, n as DropdownMenuContent, o as DropdownMenuTrigger, r as DropdownMenuItem, t as DropdownMenu } from "./dropdown-menu-BtjXROHi.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { r as StatusBadge } from "./primitives-txGWT-aG.mjs";
import { a as StatCard, i as SectionCard, n as LoadingSkeletonState, r as PageHeader, t as EmptyState } from "./layout-bits-D4a4c_iI.mjs";
import { n as useLiveEvents } from "./useLiveEvents-BMkuW3IC.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table$1 } from "./table-C0WYWEQX.mjs";
import { i as archiveQueue, n as archiveLog, r as archivePerMonth, s as getArchiveMeta } from "./archive-D_pmsryf.mjs";
import { n as format } from "../_libs/date-fns.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { n as Route$33 } from "../_app.admin.index-Dq15m6gG.mjs";
import { t as SummaryModal } from "./summary-modal-DRM_yxAG.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
import { n as registrationService, t as Route$34 } from "../_app.events._eventId-BTi0UCvU.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { n as Slider, t as Route$35 } from "../_app.events.index-CxCTEyjK.mjs";
import { t as notificationService } from "./notificationService-BiDQ_ryr.mjs";
import { n as Route$36 } from "../_app.organizer.index-Dnkq5sMl.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
import { n as Route$37 } from "../_app.dashboard-6y7L9glU.mjs";
import { t as Route$38 } from "../_app.summary._eventId-CfCTO-VR.mjs";
import { i as restoreEvent, n as fetchEvents, t as archiveEvent } from "./firestore-vxx1C-QF.mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C7sN9L-j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-L7Z_2EXM.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error("Root Route Error caught:", error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
		const timer = setTimeout(() => {
			try {
				router.invalidate();
				reset();
			} catch (e) {
				console.warn("Auto-recovery reset skipped:", e);
			}
		}, 500);
		return () => clearTimeout(timer);
	}, [
		error,
		reset,
		router
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "size-12 rounded-2xl bg-primary/10 p-3 text-primary flex items-center justify-center mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "size-6 animate-pulse",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 2,
						d: "M13 10V3L4 14h7v7l9-11h-7z"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-bold tracking-tight text-foreground",
				children: "Loading CampusPulse Application..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-xs text-muted-foreground",
				children: "Connecting to backend services and synchronizing campus events..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						if (typeof window !== "undefined") window.location.reload();
					},
					className: "rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90",
					children: "Reload Workspace"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent",
					children: "Return to Home"
				})]
			})
		]
	});
}
var Route$32 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CampusPulse — One Campus. Every Event." },
			{
				name: "description",
				content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform."
			},
			{
				name: "author",
				content: "CampusPulse"
			},
			{
				property: "og:title",
				content: "CampusPulse — One Campus. Every Event."
			},
			{
				property: "og:description",
				content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "CampusPulse — One Campus. Every Event."
			},
			{
				name: "twitter:description",
				content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5902ca3c-b29f-4b24-9ae2-685b46a2639b/id-preview-d743f1f9--2fa1261e-1e26-45bf-b4aa-cc6337b8600d.lovable.app-1785145314698.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5902ca3c-b29f-4b24-9ae2-685b46a2639b/id-preview-d743f1f9--2fa1261e-1e26-45bf-b4aa-cc6337b8600d.lovable.app-1785145314698.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$32.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-right",
			richColors: true,
			closeButton: true
		})] })
	});
}
var $$splitComponentImporter$15 = () => import("./routes-BBctx7NH.mjs");
var Route$31 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CampusPulse — One Campus. Every Event." },
		{
			name: "description",
			content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform."
		},
		{
			property: "og:title",
			content: "CampusPulse — One Campus. Every Event."
		},
		{
			property: "og:description",
			content: "Stop missing campus announcements. CampusPulse brings every college event, registration, reminder and certificate into one polished platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("../_app-DqC2BzlF.mjs");
var Route$30 = createFileRoute("/_app")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./login-BD4_WluT.mjs");
var Route$29 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "Sign in — CampusPulse" },
		{
			name: "description",
			content: "Sign in to CampusPulse as a student, organizer or administrator."
		},
		{
			property: "og:title",
			content: "Sign in — CampusPulse"
		},
		{
			property: "og:description",
			content: "Access your campus event workspace with Firebase Authentication."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("../_app.archive-CxpOU2C9.mjs");
var Route$28 = createFileRoute("/_app/archive")({
	head: () => ({ meta: [
		{ title: "Archived Events — CampusPulse" },
		{
			name: "description",
			content: "Events automatically archived once their end time passed, with attendance summaries preserved."
		},
		{
			property: "og:title",
			content: "Archived Events — CampusPulse"
		},
		{
			property: "og:description",
			content: "Auto-archived events with preserved attendance and certificates."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("../_app.archive-analytics-CE85icAV.mjs");
var Route$27 = createFileRoute("/_app/archive-analytics")({
	head: () => ({ meta: [
		{ title: "Archive Analytics — CampusPulse" },
		{
			name: "description",
			content: "Charts for archived events per month, attendance rate, certificates issued and department-wise archive distribution."
		},
		{
			property: "og:title",
			content: "Archive Analytics — CampusPulse"
		},
		{
			property: "og:description",
			content: "Insight into every automatically archived campus event."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("../_app.archive-manager-AqaRc4nK.mjs");
var Route$26 = createFileRoute("/_app/archive-manager")({
	head: () => ({ meta: [
		{ title: "Archive Management — CampusPulse" },
		{
			name: "description",
			content: "Manage automatically archived events: summaries, galleries, reports, duplication and restore requests."
		},
		{
			property: "og:title",
			content: "Archive Management — CampusPulse"
		},
		{
			property: "og:description",
			content: "Full archive management console for organizers and admins."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_app.calendar-BPCxGuZr.mjs");
var Route$25 = createFileRoute("/_app/calendar")({
	head: () => ({ meta: [
		{ title: "Campus Calendar — CampusPulse" },
		{
			name: "description",
			content: "Month view of every campus event, colour coded by category and status."
		},
		{
			property: "og:title",
			content: "Campus Calendar — CampusPulse"
		},
		{
			property: "og:description",
			content: "Month view of every campus event."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_app.certificates-AQGNfJja.mjs");
var Route$24 = createFileRoute("/_app/certificates")({
	head: () => ({ meta: [
		{ title: "Certificates — CampusPulse" },
		{
			name: "description",
			content: "Download verified participation certificates from every completed event."
		},
		{
			property: "og:title",
			content: "Certificates — CampusPulse"
		},
		{
			property: "og:description",
			content: "Verified participation certificates, downloadable forever."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("../_app.lifecycle-BJoUQyT-.mjs");
var Route$23 = createFileRoute("/_app/lifecycle")({
	head: () => ({ meta: [
		{ title: "Event Lifecycle Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Track every campus event from Draft to Automatically Archived with live stage counts and the auto-archive queue."
		},
		{
			property: "og:title",
			content: "Event Lifecycle Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Visual lifecycle timeline, stage filters and the automatic archive queue."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_app.notifications-DL-D--w4.mjs");
var Route$22 = createFileRoute("/_app/notifications")({
	head: () => ({ meta: [
		{ title: "Notifications — CampusPulse" },
		{
			name: "description",
			content: "Real-time deadline alerts, venue changes, approvals and certificate releases."
		},
		{
			property: "og:title",
			content: "Notifications — CampusPulse"
		},
		{
			property: "og:description",
			content: "Every campus alert in one real-time Firestore inbox."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("../_app.profile-ozbGOTEF.mjs");
var Route$21 = createFileRoute("/_app/profile")({
	head: () => ({ meta: [
		{ title: "Profile — CampusPulse" },
		{
			name: "description",
			content: "Your student profile, interests, participation record and pulse points."
		},
		{
			property: "og:title",
			content: "Profile — CampusPulse"
		},
		{
			property: "og:description",
			content: "Student profile and participation record."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
function apiRegistrationToRegistrationDocument(r) {
	const startISO = r.event_date && r.start_time ? `${r.event_date}T${r.start_time}` : (/* @__PURE__ */ new Date()).toISOString();
	const endISO = r.event_date && r.end_time ? `${r.event_date}T${r.end_time}` : (/* @__PURE__ */ new Date()).toISOString();
	const ev = {
		id: String(r.event_id),
		title: r.event_title || "Untitled Event",
		summary: "",
		description: "",
		banner: r.banner || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
		category: "Technical",
		department: r.department_name || "Computer Science",
		club: "Campus Club",
		organizer: "Event Organizer",
		organizerAvatar: "E",
		venue: r.venue || "Campus Main Hall",
		start: startISO,
		end: endISO,
		seats: 100,
		registered: 1,
		status: r.event_status || "Published",
		certificate: true,
		fee: 0,
		tags: ["Campus"],
		speakers: [],
		contact: {
			email: "events@campus.edu",
			phone: ""
		}
	};
	return {
		registrationId: String(r.id),
		eventId: String(r.event_id),
		studentId: String(r.student_id),
		studentName: r.student_name || "Campus Student",
		studentEmail: r.student_email || r.email || "student@campus.edu",
		email: r.student_email || r.email || "student@campus.edu",
		rollNumber: r.roll_number || "CS-REG-2026",
		department: r.department_name || "Computer Science",
		year: r.student_year || r.year || "3rd Year",
		registrationDate: r.registration_date ? new Date(r.registration_date).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		registeredAt: r.registration_date ? new Date(r.registration_date).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		status: r.status || "Confirmed",
		registrationStatus: r.status || "Confirmed",
		attendanceStatus: r.checked_in ? "Present" : "Pending",
		certificateStatus: "NotIssued",
		qrCode: r.qr_code || "",
		checkedInAt: r.checked_in_at ? new Date(r.checked_in_at).toISOString() : void 0,
		createdAt: r.created_at ? new Date(r.created_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		event: ev
	};
}
var Route$20 = createFileRoute("/_app/registrations")({
	head: () => ({ meta: [
		{ title: "My Registrations — CampusPulse" },
		{
			name: "description",
			content: "Every event you registered for, with entry passes, QR codes, and attendance status."
		},
		{
			property: "og:title",
			content: "My Registrations — CampusPulse"
		},
		{
			property: "og:description",
			content: "Entry passes, QR codes, and history for your registrations."
		}
	] }),
	component: Registrations
});
function Registrations() {
	const { userProfile } = useAuth();
	const studentId = userProfile?.uid || "std-001";
	const [registrations, setRegistrations] = (0, import_react.useState)([]);
	const [loadingRegistrations, setLoadingRegistrations] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let isSubscribed = true;
		let mockUnsubscribe = null;
		const fetchRegistrations = async () => {
			setLoadingRegistrations(true);
			const isMock = studentId.startsWith("std-");
			let list = [];
			if (!isMock) try {
				const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
				const token = localStorage.getItem("campuspulse_jwt_token");
				const headers = {};
				if (token) headers["Authorization"] = `Bearer ${token}`;
				const res = await fetch(`${API_BASE_URL}/students/me/registrations`, { headers });
				const data = await res.json();
				if (res.ok && data.success && data.data) list = data.data.map(apiRegistrationToRegistrationDocument);
			} catch (err) {
				console.warn("Failed to fetch live student registrations:", err);
			}
			if (!isSubscribed) return;
			mockUnsubscribe = registrationService.subscribe({ studentId }, (mockData) => {
				if (!isSubscribed) return;
				const merged = [...list];
				mockData.forEach((mr) => {
					if (!merged.some((r) => r.registrationId === mr.registrationId)) merged.push(mr);
				});
				setRegistrations(merged);
				setLoadingRegistrations(false);
			});
		};
		fetchRegistrations();
		return () => {
			isSubscribed = false;
			if (mockUnsubscribe) mockUnsubscribe();
		};
	}, [studentId]);
	const activeRegs = registrations.filter((r) => r.status?.toLowerCase() === "confirmed" || r.status?.toLowerCase() === "approved");
	const waitlistedRegs = registrations.filter((r) => r.status?.toLowerCase() === "waitlisted");
	const cancelledRegs = registrations.filter((r) => r.status?.toLowerCase() === "cancelled");
	const handleCancelRegistration = async (eventId) => {
		await registrationService.cancelRegistration(eventId, studentId);
	};
	const renderTable = (list) => {
		if (list.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Ticket,
			title: "No registrations found",
			description: "You have no event registrations in this category.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/events",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "rounded-xl",
					children: "Browse Campus Events"
				})
			})
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-2xl border border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
				className: "bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event & Organizer" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "hidden md:table-cell",
						children: "Registered Date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Registration Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Attendance" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Actions / Entry Pass"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: list.map((r) => {
				const ev = r.event || getEvent(r.eventId) || events[0];
				const isCancelled = r.status === "Cancelled";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "hover:bg-secondary/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "max-w-[280px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events/$eventId",
								params: { eventId: ev.id },
								className: "font-bold text-sm text-foreground hover:text-primary line-clamp-1",
								children: ev.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									ev.club,
									" · ",
									ev.department
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "hidden md:table-cell text-xs text-muted-foreground font-mono",
							children: r.registeredAt ? format(new Date(r.registeredAt), "dd MMM yyyy, h:mm a") : "Recently"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
							r.status === "Confirmed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "rounded-full bg-success text-success-foreground font-semibold text-[10px]",
								children: "Confirmed"
							}),
							r.status === "Waitlisted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "rounded-full border-warning text-warning bg-warning-soft text-[10px]",
								children: "Waitlisted"
							}),
							r.status === "Cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "destructive",
								className: "rounded-full text-[10px]",
								children: "Cancelled"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "rounded-full text-[10px]",
							children: r.attendanceStatus
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right",
							children: !isCancelled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										className: "rounded-xl bg-card text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1.5 size-3.5 text-primary" }), " View QR Pass"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
									className: "rounded-3xl sm:max-w-md text-center p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
											className: "text-center font-bold text-lg",
											children: "Digital Campus Entry Pass"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
											className: "text-center text-xs",
											children: ev.title
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-4 py-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mx-auto grid size-48 place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-card p-4 shadow-md",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-36 text-primary" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-sm text-foreground",
														children: r.studentName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-muted-foreground font-mono",
														children: [
															"Roll: ",
															r.rollNumber,
															" · ",
															r.department
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-primary font-mono font-semibold",
														children: ["Pass ID: ", r.qrCode]
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, {
											className: "flex-col gap-2 sm:flex-row",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												className: "w-full rounded-xl text-xs",
												onClick: () => toast.success(`Downloaded QR Pass PDF for ${ev.title}`),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-3.5" }), " Download Pass PDF"]
											})
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "ghost",
									className: "rounded-xl text-xs text-danger hover:bg-danger/10",
									onClick: () => handleCancelRegistration(r.eventId),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-1 size-3.5" }), " Cancel"]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground italic",
								children: "Registration Void"
							})
						})
					]
				}, r.registrationId);
			}) })] })
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "My Registrations & Entry Passes",
				subtitle: "Manage your event passes, digital QR codes, and attendance history.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Student",
						to: "/dashboard"
					},
					{ label: "Registrations" }
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Passes",
						value: activeRegs.length,
						icon: Ticket,
						tone: "primary",
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Waitlisted",
						value: waitlistedRegs.length,
						icon: CircleAlert,
						tone: "warning",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Cancelled / Expired",
						value: cancelledRegs.length,
						icon: CircleX,
						tone: "danger",
						index: 2
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Event Passes Directory",
				description: "Real-time status updates and entry ticket passes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "active",
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "rounded-xl bg-secondary p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "active",
									className: "rounded-lg text-xs",
									children: [
										"Active Passes (",
										activeRegs.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "waitlisted",
									className: "rounded-lg text-xs",
									children: [
										"Waitlisted (",
										waitlistedRegs.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "all",
									className: "rounded-lg text-xs",
									children: [
										"All History (",
										registrations.length,
										")"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "active",
							children: renderTable(activeRegs)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "waitlisted",
							children: renderTable(waitlistedRegs)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "all",
							children: renderTable(registrations)
						})
					]
				})
			})
		]
	});
}
var $$splitComponentImporter$4 = () => import("../_app.saved-CtGQugnj.mjs");
var Route$19 = createFileRoute("/_app/saved")({
	head: () => ({ meta: [
		{ title: "Saved Events — CampusPulse" },
		{
			name: "description",
			content: "Events you bookmarked to decide on later, with live seat counts."
		},
		{
			property: "og:title",
			content: "Saved Events — CampusPulse"
		},
		{
			property: "og:description",
			content: "Your bookmarked campus events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_app.settings-DYm3oJ5b.mjs");
var Route$18 = createFileRoute("/_app/settings")({
	head: () => ({ meta: [
		{ title: "Settings — CampusPulse" },
		{
			name: "description",
			content: "Control notification channels, reminder timing, privacy and display preferences."
		},
		{
			property: "og:title",
			content: "Settings — CampusPulse"
		},
		{
			property: "og:description",
			content: "Notification, privacy and display preferences."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$17 = createFileRoute("/_app/admin/approvals")({
	head: () => ({ meta: [
		{ title: "Event Approval Center — CampusPulse" },
		{
			name: "description",
			content: "Review, approve, reject, and monitor all submitted campus events before publication."
		},
		{
			property: "og:title",
			content: "Event Approval Center — CampusPulse"
		},
		{
			property: "og:description",
			content: "Governance approval pipeline for university campus announcements."
		}
	] }),
	component: Approvals
});
var PREDEFINED_REJECTION_REASONS = [
	"Incomplete Information",
	"Incorrect Schedule / Venue Clash",
	"Duplicate Event Announcement",
	"Campus Policy Violation",
	"Department Approval Pending"
];
var PREDEFINED_CHANGE_NOTES = [
	"Update Event Banner Image",
	"Correct Venue Selection",
	"Fix Event Start/End Schedule",
	"Improve Description Details",
	"Update Registration Deadline"
];
function Approvals() {
	const { events: liveEvents } = useLiveEvents();
	const [eventsList, setEventsList] = (0, import_react.useState)(events);
	const [selectedStage, setSelectedStage] = (0, import_react.useState)("Pending Review");
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [deptFilter, setDeptFilter] = (0, import_react.useState)("All");
	(0, import_react.useEffect)(() => {
		if (liveEvents.length > 0) {
			const liveIds = new Set(liveEvents.map((e) => e.id));
			const uniqueMock = events.filter((e) => !liveIds.has(e.id));
			setEventsList([...liveEvents, ...uniqueMock]);
		}
	}, [liveEvents]);
	const [reviewEvent, setReviewEvent] = (0, import_react.useState)(null);
	const [showGuidelinesModal, setShowGuidelinesModal] = (0, import_react.useState)(false);
	const [rejectModalEvent, setRejectModalEvent] = (0, import_react.useState)(null);
	const [selectedRejectReason, setSelectedRejectReason] = (0, import_react.useState)(PREDEFINED_REJECTION_REASONS[0]);
	const [customRejectReason, setCustomRejectReason] = (0, import_react.useState)("");
	const [changeModalEvent, setChangeModalEvent] = (0, import_react.useState)(null);
	const [selectedChangeNote, setSelectedChangeNote] = (0, import_react.useState)(PREDEFINED_CHANGE_NOTES[0]);
	const [customChangeNotes, setCustomChangeNotes] = (0, import_react.useState)("");
	const extendedEvents = (0, import_react.useMemo)(() => {
		return eventsList.map((e, idx) => ({
			...e,
			priority: idx % 3 === 0 ? "High" : idx % 5 === 0 ? "Urgent" : "Normal",
			submittedDate: format(/* @__PURE__ */ new Date(Date.now() - (idx + 1) * 864e5), "yyyy-MM-dd"),
			checklist: {
				bannerUploaded: !!e.banner,
				venueSelected: !!e.venue,
				registrationConfigured: true,
				scheduleValid: true,
				speakerDetails: idx % 2 === 0,
				contactInfo: true,
				departmentAssigned: !!e.department
			},
			publishSchedule: "Immediately"
		}));
	}, [eventsList]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			pending: extendedEvents.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length,
			approved: extendedEvents.filter((e) => e.status === "Published").length,
			rejected: 3,
			published: extendedEvents.filter((e) => e.status === "Published" && !isExpired(e)).length,
			live: extendedEvents.filter((e) => resolveStatus(e) === "Live").length,
			archived: extendedEvents.filter((e) => isExpired(e) || e.status === "Archived").length,
			avgTime: "2.4 hrs",
			todayRequests: 6
		};
	}, [extendedEvents]);
	const pipelineStages = [
		{
			stage: "All",
			count: extendedEvents.length,
			tone: "bg-secondary text-foreground"
		},
		{
			stage: "Draft",
			count: extendedEvents.filter((e) => e.status === "Draft").length,
			tone: "bg-secondary text-muted-foreground"
		},
		{
			stage: "Submitted",
			count: extendedEvents.filter((e) => e.status === "Submitted").length,
			tone: "bg-warning-soft text-warning"
		},
		{
			stage: "Pending Review",
			count: extendedEvents.filter((e) => e.status === "Pending Approval").length,
			tone: "bg-warning-soft text-warning"
		},
		{
			stage: "Approved",
			count: extendedEvents.filter((e) => e.status === "Published").length,
			tone: "bg-primary-soft text-primary"
		},
		{
			stage: "Upcoming",
			count: extendedEvents.filter((e) => resolveStatus(e) === "Upcoming").length,
			tone: "bg-primary-soft text-primary"
		},
		{
			stage: "Live Now",
			count: extendedEvents.filter((e) => resolveStatus(e) === "Live").length,
			tone: "bg-danger-soft text-danger"
		},
		{
			stage: "Completed",
			count: extendedEvents.filter((e) => resolveStatus(e) === "Completed").length,
			tone: "bg-success-soft text-success"
		},
		{
			stage: "Auto Archived",
			count: extendedEvents.filter((e) => isExpired(e) || e.status === "Archived").length,
			tone: "bg-secondary text-muted-foreground"
		}
	];
	const filteredEvents = (0, import_react.useMemo)(() => {
		return extendedEvents.filter((e) => {
			const matchesSearch = !searchTerm.trim() || e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.organizer.toLowerCase().includes(searchTerm.toLowerCase()) || e.club.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesDept = deptFilter === "All" || e.department === deptFilter;
			let matchesStage = true;
			if (selectedStage === "Draft") matchesStage = e.status === "Draft";
			if (selectedStage === "Submitted") matchesStage = e.status === "Submitted";
			if (selectedStage === "Pending Review") matchesStage = e.status === "Pending Approval";
			if (selectedStage === "Approved") matchesStage = e.status === "Published";
			if (selectedStage === "Upcoming") matchesStage = resolveStatus(e) === "Upcoming";
			if (selectedStage === "Live Now") matchesStage = resolveStatus(e) === "Live";
			if (selectedStage === "Completed") matchesStage = resolveStatus(e) === "Completed";
			if (selectedStage === "Auto Archived") matchesStage = isExpired(e) || e.status === "Archived";
			return matchesSearch && matchesDept && matchesStage;
		});
	}, [
		extendedEvents,
		searchTerm,
		deptFilter,
		selectedStage
	]);
	const handleApprove = async (e) => {
		const numericId = e.dbId || parseInt(e.id, 10);
		if (!isNaN(numericId)) try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const headers = { "Content-Type": "application/json" };
			if (token) headers["Authorization"] = `Bearer ${token}`;
			const res = await fetch(`${API_BASE_URL}/events/${numericId}/approve`, {
				method: "PATCH",
				headers
			});
			const data = await res.json();
			if (!res.ok || !data.success) throw new Error(data.message || "Failed to approve event on backend");
		} catch (err) {
			toast.error(`Backend Error: ${err.message}`);
			return;
		}
		try {
			const { updateEvent } = await import("./firestore-vxx1C-QF.mjs").then((n) => n.r).then((n) => n.r);
			await updateEvent(e.id, { status: "Published" });
		} catch (err) {
			console.warn("Firestore approval sync notice:", err);
		}
		setEventsList((prev) => prev.map((item) => item.id === e.id ? {
			...item,
			status: "Published"
		} : item));
		toast.success(`Approved & Published "${e.title}". It is now live across campus.`);
		if (reviewEvent?.id === e.id) setReviewEvent(null);
	};
	const handleConfirmReject = async () => {
		if (!rejectModalEvent) return;
		const reason = selectedRejectReason === "Custom Reason" ? customRejectReason : selectedRejectReason;
		const numericId = rejectModalEvent.dbId || parseInt(rejectModalEvent.id, 10);
		if (!isNaN(numericId)) try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const headers = { "Content-Type": "application/json" };
			if (token) headers["Authorization"] = `Bearer ${token}`;
			const res = await fetch(`${API_BASE_URL}/events/${numericId}/reject`, {
				method: "PATCH",
				headers,
				body: JSON.stringify({ reason })
			});
			const data = await res.json();
			if (!res.ok || !data.success) throw new Error(data.message || "Failed to reject event on backend");
		} catch (err) {
			toast.error(`Backend Error: ${err.message}`);
			return;
		}
		try {
			const { updateEvent } = await import("./firestore-vxx1C-QF.mjs").then((n) => n.r).then((n) => n.r);
			await updateEvent(rejectModalEvent.id, {
				status: "Rejected",
				rejectionReason: reason
			});
		} catch (err) {
			console.warn("Firestore reject sync notice:", err);
		}
		setEventsList((prev) => prev.map((item) => item.id === rejectModalEvent.id ? {
			...item,
			status: "Rejected"
		} : item));
		toast.error(`Rejected "${rejectModalEvent.title}". Reason: ${reason}`);
		setRejectModalEvent(null);
		setCustomRejectReason("");
		if (reviewEvent?.id === rejectModalEvent.id) setReviewEvent(null);
	};
	const handleConfirmRequestChanges = () => {
		if (!changeModalEvent) return;
		const note = customChangeNotes ? `${selectedChangeNote}: ${customChangeNotes}` : selectedChangeNote;
		toast.warning(`Requested changes for "${changeModalEvent.title}". Notes: ${note}`);
		setChangeModalEvent(null);
		setCustomChangeNotes("");
		if (reviewEvent?.id === changeModalEvent.id) setReviewEvent(null);
	};
	const getChecklistProgress = (item) => {
		const vals = Object.values(item.checklist);
		const passed = vals.filter(Boolean).length;
		return Math.round(passed / vals.length * 100);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Event Approval Center",
				subtitle: "Review, approve, reject, and monitor all submitted campus events before publication.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin",
						to: "/admin"
					},
					{ label: "Event Approval" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						onClick: () => setShowGuidelinesModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mr-1.5 size-4 text-primary" }), " Approval Guidelines"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Approval Metrics & Processing Telemetry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "SLA: 24 Hours"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending",
						value: stats.pending,
						icon: BadgeCheck,
						tone: "warning",
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Approved",
						value: stats.approved,
						icon: CircleCheck,
						tone: "success",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Rejected",
						value: stats.rejected,
						icon: CircleX,
						tone: "danger",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Published",
						value: stats.published,
						icon: Megaphone,
						tone: "primary",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live Now",
						value: stats.live,
						icon: Radio,
						tone: "danger",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived",
						value: stats.archived,
						icon: FolderArchive,
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg SLA Time",
						value: stats.avgTime,
						icon: Clock,
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Req",
						value: stats.todayRequests,
						icon: TrendingUp,
						tone: "primary",
						index: 7
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Horizontal Governance Pipeline",
				description: "Click any stage to filter queue submissions",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9",
					children: pipelineStages.map((ps) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelectedStage(ps.stage),
						className: cn("group relative flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all hover:border-primary", selectedStage === ps.stage ? "border-primary ring-2 ring-primary/20 bg-card shadow-sm" : "border-border bg-card/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
								children: ps.stage
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-lg text-foreground my-1",
								children: ps.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", ps.tone) })
						]
					}, ps.stage))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `Submissions Queue (${filteredEvents.length})`,
				description: "Filter by department or search by event title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-w-[240px] flex-1 max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: searchTerm,
								onChange: (e) => setSearchTerm(e.target.value),
								placeholder: "Search event title, organizer, or club...",
								className: "rounded-xl pl-9 bg-card text-xs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "Department:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: deptFilter,
								onValueChange: setDeptFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 w-40 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "All",
										children: "All Departments"
									}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d,
										children: d
									}, d))]
								})]
							})]
						})]
					}), filteredEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: BadgeCheck,
						title: "No events in this approval stage",
						description: "Select another stage or clear search parameters."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-2xl border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
							className: "bg-secondary/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "hidden md:table-cell",
									children: "Organizer & Club"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "hidden lg:table-cell",
									children: "Department"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Proposed Date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Priority" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredEvents.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-secondary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "max-w-[240px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: e.banner,
											alt: "",
											className: "size-10 rounded-xl object-cover shrink-0 hidden sm:block"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-sm text-foreground line-clamp-1",
												children: e.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: e.category
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "hidden md:table-cell text-xs font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground",
										children: e.organizer
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[11px]",
										children: e.club
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "hidden lg:table-cell text-xs text-muted-foreground",
									children: e.department
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs font-medium",
									children: format(new Date(e.start), "dd MMM yyyy")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: cn("rounded-full text-[10px]", e.priority === "Urgent" && "bg-danger-soft text-danger border-danger/30 font-bold", e.priority === "High" && "bg-warning-soft text-warning border-warning/30"),
									children: e.priority
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(e) }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-8 rounded-lg text-xs",
												onClick: () => setReviewEvent(e),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1 size-3.5" }), " Review"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												className: "h-8 rounded-lg text-xs bg-success text-success-foreground",
												onClick: () => handleApprove(e),
												children: "Approve"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												className: "h-8 rounded-lg text-xs border-warning/30 text-warning bg-card",
												onClick: () => setChangeModalEvent(e),
												children: "Feedback"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-8 rounded-lg text-xs text-danger",
												onClick: () => setRejectModalEvent(e),
												children: "Reject"
											})
										]
									})
								})
							]
						}, e.id)) })] })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Approval vs Rejection Ratios",
					description: "Monthly platform governance outcome split",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pie, {
								data: [
									{
										name: "Approved",
										value: 412
									},
									{
										name: "Changes Requested",
										value: 48
									},
									{
										name: "Rejected",
										value: 14
									}
								],
								dataKey: "value",
								nameKey: "name",
								innerRadius: 50,
								outerRadius: 85,
								paddingAngle: 3,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "#22C55E" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "#F59E0B" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "#EF4444" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								borderRadius: 16,
								border: "1px solid var(--color-border)",
								background: "var(--color-card)",
								fontSize: 12
							} })] })
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Recent Approval Telemetry Feed",
					description: "Realtime activity log of governance decisions",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 text-xs",
						children: [
							{
								title: "HackFusion 2026 Approved",
								time: "15 mins ago",
								desc: "Approved by Admin Priya Nair · Published to public feed",
								icon: CircleCheck,
								tone: "text-success"
							},
							{
								title: "Rhythm & Rangoli Changes Requested",
								time: "1 hour ago",
								desc: "Requested banner update & schedule check from Prof. Rao",
								icon: TriangleAlert,
								tone: "text-warning"
							},
							{
								title: "Cybersecurity CTF Auto-Archived",
								time: "3 hours ago",
								desc: "End time passed — automatically archived with 100% log",
								icon: Archive,
								tone: "text-primary"
							},
							{
								title: "Duplicate Seminar Rejected",
								time: "5 hours ago",
								desc: "Rejected due to duplicate title with CSE Department",
								icon: CircleX,
								tone: "text-danger"
							}
						].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: cn("size-4 shrink-0 mt-0.5", n.tone) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground",
										children: n.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: n.time
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[11px] mt-0.5",
									children: n.desc
								})]
							})]
						}, i))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: reviewEvent !== null,
				onOpenChange: () => setReviewEvent(null),
				children: reviewEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-3xl rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(reviewEvent) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-xs",
											children: reviewEvent.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "rounded-full text-xs bg-warning-soft text-warning border-warning/30 font-bold",
											children: [reviewEvent.priority, " Priority"]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: ["ID: ", reviewEvent.id]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-xl font-bold mt-2",
								children: reviewEvent.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
								"Submitted by ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: reviewEvent.organizer
								}),
								" (",
								reviewEvent.department,
								" · ",
								reviewEvent.club,
								") on ",
								reviewEvent.submittedDate
							] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: reviewEvent.banner,
									alt: "",
									className: "h-44 w-full rounded-2xl object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-muted-foreground mb-1",
									children: "EVENT SUMMARY & DESCRIPTION"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground leading-relaxed bg-secondary/30 p-3 rounded-xl",
									children: reviewEvent.summary
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border p-4 space-y-3 bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListCheck, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-foreground",
													children: "7-Point Governance Approval Checklist"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-xs text-primary",
												children: [getChecklistProgress(reviewEvent), "% Complete"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: getChecklistProgress(reviewEvent),
											className: "h-2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2 pt-1 text-[11px]",
											children: [
												{
													label: "Banner Image Uploaded",
													pass: reviewEvent.checklist.bannerUploaded
												},
												{
													label: "Venue Selected & Confirmed",
													pass: reviewEvent.checklist.venueSelected
												},
												{
													label: "Registration Seats Configured",
													pass: reviewEvent.checklist.registrationConfigured
												},
												{
													label: "Start & End Schedule Valid",
													pass: reviewEvent.checklist.scheduleValid
												},
												{
													label: "Speaker / Guests Detailed",
													pass: reviewEvent.checklist.speakerDetails
												},
												{
													label: "Contact Details Provided",
													pass: reviewEvent.checklist.contactInfo
												},
												{
													label: "Department Assigned",
													pass: reviewEvent.checklist.departmentAssigned
												}
											].map((ck) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [ck.pass ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-success shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5 text-danger shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn(ck.pass ? "text-foreground font-medium" : "text-muted-foreground line-through"),
													children: ck.label
												})]
											}, ck.label))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3 rounded-2xl bg-secondary/40 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Auto-Archive Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground",
										children: format(new Date(reviewEvent.end), "dd MMM yyyy, h:mm a")
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Archival Countdown"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-warning",
										children: "Auto-Archived 1 hr after end"
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => setReviewEvent(null),
									className: "rounded-xl text-xs",
									children: "Close Review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "rounded-xl text-xs border-warning/30 text-warning bg-card",
									onClick: () => setChangeModalEvent(reviewEvent),
									children: "Request Changes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									className: "rounded-xl text-xs text-danger",
									onClick: () => setRejectModalEvent(reviewEvent),
									children: "Reject"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "rounded-xl text-xs bg-success text-success-foreground",
									onClick: () => handleApprove(reviewEvent),
									children: "Approve & Publish"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: rejectModalEvent !== null,
				onOpenChange: () => setRejectModalEvent(null),
				children: rejectModalEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold text-danger",
							children: "Reject Event Announcement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Provide a rejection reason for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-foreground",
								children: [
									"\"",
									rejectModalEvent.title,
									"\""
								]
							}),
							"."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 py-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Predefined Rejection Reason"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedRejectReason,
									onValueChange: setSelectedRejectReason,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
										className: "rounded-2xl",
										children: [PREDEFINED_REJECTION_REASONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: r,
											children: r
										}, r)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Custom Reason",
											children: "Custom Reason"
										})]
									})]
								})]
							}), selectedRejectReason === "Custom Reason" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Custom Rejection Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: customRejectReason,
									onChange: (e) => setCustomRejectReason(e.target.value),
									placeholder: "Provide detailed reasons for rejection...",
									className: "rounded-xl"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setRejectModalEvent(null),
							className: "rounded-xl",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "destructive",
							onClick: handleConfirmReject,
							className: "rounded-xl",
							children: "Confirm Rejection"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: changeModalEvent !== null,
				onOpenChange: () => setChangeModalEvent(null),
				children: changeModalEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold text-warning",
							children: "Request Changes from Organizer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Send feedback to organizer for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-foreground",
								children: [
									"\"",
									changeModalEvent.title,
									"\""
								]
							}),
							"."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 py-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Change Note Pre-set"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedChangeNote,
									onValueChange: setSelectedChangeNote,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
										className: "rounded-2xl",
										children: PREDEFINED_CHANGE_NOTES.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: n,
											children: n
										}, n))
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Additional Comments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: customChangeNotes,
									onChange: (e) => setCustomChangeNotes(e.target.value),
									placeholder: "Specify details to be fixed by the organizer...",
									className: "rounded-xl"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setChangeModalEvent(null),
							className: "rounded-xl",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleConfirmRequestChanges,
							className: "rounded-xl bg-warning text-warning-foreground",
							children: "Send Feedback"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showGuidelinesModal,
				onOpenChange: setShowGuidelinesModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold",
							children: "Campus Approval Policy Guidelines"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Rules for governing campus event announcements." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 py-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"1. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Venue Clashes:" }),
									" Check that no two events share the same hall at overlapping start/end times."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"2. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Banner & Content:" }),
									" Banners must meet 16:9 aspect ratio and follow university conduct standards."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"3. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SLA Response:" }),
									" Approvals or feedback must be processed within 24 hours of submission."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"4. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Auto-Archiving:" }),
									" Events are automatically archived 1 hour post event end time."
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setShowGuidelinesModal(false),
							className: "rounded-xl",
							children: "Close Policy"
						}) })
					]
				})
			})
		]
	});
}
var Route$16 = createFileRoute("/_app/admin/archive-logs")({
	head: () => ({ meta: [
		{ title: "Automatic Event Lifecycle & Archive Center — CampusPulse" },
		{
			name: "description",
			content: "Monitor, automate, and manage the complete lifecycle of every campus event from creation to automatic archiving."
		},
		{
			property: "og:title",
			content: "Automatic Event Lifecycle & Archive Center — CampusPulse"
		},
		{
			property: "og:description",
			content: "Flagship governance engine for automatic event expiration and archival."
		}
	] }),
	component: AdminArchiveLogs
});
function safeFormat(dateVal, fmt) {
	try {
		if (!dateVal) return "N/A";
		const d = new Date(dateVal);
		if (isNaN(d.getTime())) return String(dateVal);
		return format(d, fmt);
	} catch {
		return String(dateVal || "N/A");
	}
}
function AdminArchiveLogs() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [currentTime, setCurrentTime] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("kanban");
	const [selectedStageFilter, setSelectedStageFilter] = (0, import_react.useState)("All");
	const [activeEventDetail, setActiveEventDetail] = (0, import_react.useState)(null);
	const [daemonActive, setDaemonActive] = (0, import_react.useState)(true);
	const [nextScanSeconds, setNextScanSeconds] = (0, import_react.useState)(14);
	const [lastScanAgo, setLastScanAgo] = (0, import_react.useState)(46);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		setCurrentTime(safeFormat(/* @__PURE__ */ new Date(), "dd MMM yyyy, h:mm:ss a"));
		const timer = setInterval(() => {
			setCurrentTime(safeFormat(/* @__PURE__ */ new Date(), "dd MMM yyyy, h:mm:ss a"));
			setNextScanSeconds((prev) => prev <= 1 ? 60 : prev - 1);
			setLastScanAgo((prev) => prev >= 60 ? 1 : prev + 1);
		}, 1e3);
		return () => clearInterval(timer);
	}, []);
	const allArchived = (0, import_react.useMemo)(() => archivedEvents(), []);
	const queue = (0, import_react.useMemo)(() => archiveQueue(), []);
	const kanbanColumns = [
		{
			title: "Draft",
			status: "Draft",
			color: "border-muted-foreground/30 bg-muted/20"
		},
		{
			title: "Pending Approval",
			status: "Pending Approval",
			color: "border-warning/30 bg-warning-soft/20"
		},
		{
			title: "Published",
			status: "Published",
			color: "border-primary/30 bg-primary-soft/20"
		},
		{
			title: "Upcoming",
			status: "Upcoming",
			color: "border-primary/30 bg-primary-soft/20"
		},
		{
			title: "Live Now",
			status: "Live",
			color: "border-danger/30 bg-danger-soft/20"
		},
		{
			title: "Completed",
			status: "Completed",
			color: "border-success/30 bg-success-soft/20"
		},
		{
			title: "Archived",
			status: "Archived",
			color: "border-border bg-card"
		}
	];
	const pipelineStages = [
		{
			stage: "All",
			count: events.length + allArchived.length,
			pct: 100
		},
		{
			stage: "Draft",
			count: events.filter((e) => e.status === "Draft").length,
			pct: 5
		},
		{
			stage: "Pending Approval",
			count: events.filter((e) => e.status === "Pending Approval").length,
			pct: 12
		},
		{
			stage: "Approved",
			count: events.filter((e) => e.status === "Published").length,
			pct: 25
		},
		{
			stage: "Published",
			count: events.filter((e) => e.status === "Published" && !isExpired(e)).length,
			pct: 40
		},
		{
			stage: "Upcoming",
			count: events.filter((e) => resolveStatus(e) === "Upcoming").length,
			pct: 60
		},
		{
			stage: "Live Now",
			count: events.filter((e) => resolveStatus(e) === "Live").length,
			pct: 75
		},
		{
			stage: "Completed",
			count: events.filter((e) => resolveStatus(e) === "Completed").length,
			pct: 90
		},
		{
			stage: "Auto Archived",
			count: allArchived.length,
			pct: 100
		}
	];
	const filteredArchived = (0, import_react.useMemo)(() => {
		return allArchived.filter((e) => {
			if (selectedStageFilter === "All") return true;
			return true;
		});
	}, [allArchived, selectedStageFilter]);
	const tooltipStyle = {
		borderRadius: 16,
		border: "1px solid var(--color-border)",
		background: "var(--color-card)",
		fontSize: 12
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Automatic Event Lifecycle & Archive Center",
				subtitle: "Monitor, automate, and manage the complete lifecycle of every campus event from creation to automatic archiving.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin",
						to: "/admin"
					},
					{ label: "Archive Center" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "rounded-xl px-3 py-1.5 font-mono text-xs bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1.5 size-3.5 text-primary" }),
								" ",
								mounted ? currentTime : "Loading Time..."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "rounded-xl bg-card text-xs",
							onClick: async () => {
								const { archiveDaemon } = await import("./archiveDaemon-B5Mc2zFv.mjs");
								const res = await archiveDaemon.runArchiveSweep();
								toast.success(`Manual sweep executed! Processed ${res.archivedEvents.length} event(s).`);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 size-3.5 text-primary" }), " Run Manual Archiving Sweep"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "rounded-xl bg-card text-xs",
							onClick: () => toast.success("Archive telemetry log exported as CSV"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4" }), " Export Telemetry Log"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-success/30 bg-card p-5 shadow-sm space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 border-b pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex size-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full size-3 bg-success" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-base text-foreground",
								children: "Automatic Archiving Engine Daemon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "rounded-full bg-success-soft text-success border-success/30 font-semibold text-[10px]",
								children: ["Engine Status: ", daemonActive ? "Running" : "Paused"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "The lifecycle engine executes every 30 seconds, auto-expiring announcements and freezing event data 1.0 hour post event end time."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-muted-foreground",
							children: "Daemon Switch:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: daemonActive,
							onCheckedChange: async (val) => {
								setDaemonActive(val);
								const { archiveDaemon } = await import("./archiveDaemon-B5Mc2zFv.mjs");
								if (val) archiveDaemon.startDaemon(3e4);
								else archiveDaemon.pauseDaemon();
							}
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-6 text-center text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Next Scheduled Scan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-extrabold text-foreground text-sm mt-0.5",
								children: [
									"In ",
									nextScanSeconds,
									"s"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Last Scan Sweep"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-extrabold text-foreground text-sm mt-0.5",
								children: [lastScanAgo, "s ago"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Ready For Archive"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-warning text-sm mt-0.5",
								children: "0 Events"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Archive Success Rate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-success text-sm mt-0.5",
								children: "100.0%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Avg Processing SLA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-primary text-sm mt-0.5",
								children: "1.0 Hour"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Queued For Archive"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-extrabold text-primary text-sm mt-0.5",
								children: [queue.length, " Events"]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Governed Event Lifecycle Pipeline",
				description: "Click any stage to filter events across the board",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 text-xs",
					children: pipelineStages.map((ps) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelectedStageFilter(ps.stage),
						className: cn("group relative flex flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all hover:border-primary", selectedStageFilter === ps.stage ? "border-primary ring-2 ring-primary/20 bg-card shadow-sm" : "border-border bg-card/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
								children: ps.stage
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-lg text-foreground my-1",
								children: ps.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: ps.pct,
								className: "h-1 w-full"
							})
						]
					}, ps.stage))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Lifecycle Management Workspace",
				description: "Switch between live views and archiving controls",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: setActiveTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "rounded-xl bg-secondary/50 p-1 mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "kanban",
									className: "rounded-lg text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "mr-1.5 size-3.5" }), " Lifecycle Board (Kanban)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "queue",
									className: "rounded-lg text-xs font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "mr-1.5 size-3.5" }),
										" Auto Archive Queue (",
										queue.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "disappearing",
									className: "rounded-lg text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "mr-1.5 size-3.5" }), " Disappearing Announcements Feed"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "archived",
									className: "rounded-lg text-xs font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "mr-1.5 size-3.5" }),
										" Archived Events (",
										allArchived.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "analytics",
									className: "rounded-lg text-xs font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "mr-1.5 size-3.5" }), " Archive Analytics"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "kanban",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto pb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-4 min-w-[1300px]",
									children: kanbanColumns.map((col) => {
										const items = col.status === "Archived" ? allArchived : events.filter((e) => resolveStatus(e) === col.status || e.status === col.status);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "w-72 shrink-0 rounded-2xl border p-3 space-y-3 bg-secondary/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between border-b pb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-xs text-foreground",
													children: col.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "secondary",
													className: "rounded-full text-[10px]",
													children: items.length
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-3 max-h-[600px] overflow-y-auto pr-1",
												children: items.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "lift-on-hover rounded-xl border border-border bg-card p-3 space-y-2 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: e.banner,
															alt: "",
															className: "h-20 w-full rounded-lg object-cover"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-bold text-foreground line-clamp-1",
															children: e.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[10px] text-muted-foreground",
															children: [
																e.department,
																" · ",
																e.organizer
															]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between border-t pt-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(e) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																size: "sm",
																variant: "ghost",
																className: "h-6 text-[10px] p-1",
																onClick: () => setActiveEventDetail(e),
																children: "Details"
															})]
														})
													]
												}, e.id))
											})]
										}, col.title);
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "queue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded-2xl border border-border bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
									className: "bg-secondary/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Department" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Ends At" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Countdown Until Archive" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Current Status" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Priority" })
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: queue.map((qItem) => {
									const ev = qItem.event;
									const minsLeft = Math.max(1, Math.round(qItem.endsInMs / 6e4));
									const endsFormatted = safeFormat(ev.end, "dd MMM, h:mm a");
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "font-bold text-xs text-foreground",
											children: ev.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "text-xs text-muted-foreground",
											children: ev.department
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "text-xs font-mono",
											children: endsFormatted
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px] bg-warning-soft text-warning border-warning/30 font-bold",
											children: ["In ", minsLeft > 60 ? `${Math.round(minsLeft / 60)} hrs` : `${minsLeft} mins`]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: qItem.status }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px]",
											children: "Normal"
										}) })
									] }, ev.id);
								}) })] })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "disappearing",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-5 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-sm text-foreground",
										children: "Active Announcement Feed Expiry Filter"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Demonstrating how announcements automatically disappear from public student view the moment their end datetime passes."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "rounded-full bg-primary-soft text-primary",
										children: "Live Filter Active"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3 text-xs",
									children: events.slice(0, 4).map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-xl border p-3 bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: ev.banner,
												alt: "",
												className: "size-10 rounded-lg object-cover shrink-0"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: ev.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[10px] text-muted-foreground",
												children: [ev.department, " · Auto-Removes 1 hr post end"]
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground block",
												children: "Auto Remove Time"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs font-semibold",
												children: safeFormat(ev.end, "dd MMM, h:mm a")
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(ev) })]
										})]
									}, ev.id))
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "archived",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: filteredArchived.map((arch) => {
									const meta = getArchiveMeta(arch.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-3 flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: arch.banner,
												alt: "",
												className: "h-32 w-full rounded-xl object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between mt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "rounded-full text-[10px] bg-secondary text-muted-foreground",
													children: "Archived"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] text-muted-foreground font-mono",
													children: ["Archived: ", safeFormat(arch.end, "dd MMM yyyy")]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-bold text-base text-foreground mt-2",
												children: arch.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground mt-0.5",
												children: [
													arch.department,
													" · ",
													arch.organizer
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-2 mt-3 text-center text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-muted-foreground text-[10px]",
														children: "Attended"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground",
														children: arch.attended ?? 180
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-muted-foreground text-[10px]",
														children: "Certificates"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-primary",
														children: meta.certificates
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-muted-foreground text-[10px]",
														children: "Feedback"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "font-bold text-warning",
														children: [meta.feedbackScore, " ★"]
													})] })
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t pt-3 flex items-center justify-between gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-8 rounded-xl text-xs",
												onClick: () => setActiveEventDetail(arch),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1 size-3.5" }), " Summary"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												className: "h-8 rounded-xl text-xs bg-card",
												onClick: () => toast.info("UI Restore request submitted to super-admin."),
												children: "Restore"
											})]
										})]
									}, arch.id);
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "analytics",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-xs text-muted-foreground mb-2",
									children: "MONTHLY AUTOMATIC ARCHIVAL VOLUME"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-64",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
											data: archivePerMonth,
											margin: {
												left: -20,
												right: 8,
												top: 8
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "var(--color-border)",
													vertical: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "month",
													tickLine: false,
													axisLine: false,
													fontSize: 12,
													stroke: "var(--color-muted-foreground)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													tickLine: false,
													axisLine: false,
													fontSize: 12,
													stroke: "var(--color-muted-foreground)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													dataKey: "archived",
													fill: "#8B5CF6",
													radius: [
														8,
														8,
														0,
														0
													]
												})
											]
										})
									})
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-xs text-muted-foreground mb-2",
									children: "ARCHIVE RULES COMPLIANCE RATIO"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-64",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pie, {
											data: [{
												name: "Auto Archived On Time",
												value: 412
											}, {
												name: "Manual Archival Override",
												value: 6
											}],
											dataKey: "value",
											nameKey: "name",
											innerRadius: 50,
											outerRadius: 85,
											paddingAngle: 3,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "#22C55E" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "#F59E0B" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] })
									})
								})] })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Live Archive Execution Timeline",
					description: "Realtime log of engine operations",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 text-xs",
						children: archiveLog.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "size-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground",
										children: log.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground",
										children: log.when
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: log.detail
								})]
							})]
						}, log.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Archive Rules Governance Policies",
					description: "Active rules maintaining project requirements",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2.5 text-xs",
						children: [
							{
								rule: "Automatic Event Archiving",
								desc: "Events move from Completed to Archived after scheduled end time.",
								active: true
							},
							{
								rule: "Disappearing Announcement Feed",
								desc: "Expired announcements automatically vanish from active student feed.",
								active: true
							},
							{
								rule: "Preserved Attendance & Certificates",
								desc: "Archived events retain all attendance logs and claimable certificates.",
								active: true
							},
							{
								rule: "Preserved Analytics & Reports",
								desc: "Historical event metrics remain available for NAAC audit reports.",
								active: true
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl border p-3 bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground",
								children: r.rule
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: r.desc
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "rounded-full bg-success-soft text-success border-success/30 text-[10px]",
								children: "Active Rule"
							})]
						}, r.rule))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryModal, {
				event: activeEventDetail,
				open: activeEventDetail !== null,
				onOpenChange: (v) => !v && setActiveEventDetail(null)
			})
		]
	});
}
function apiAuditLogToAuditLogDocument(log) {
	return {
		id: String(log.id),
		timestamp: log.created_at ? new Date(log.created_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		user: log.user_name || "System",
		role: log.user_role || "System",
		action: log.action || "System Action",
		module: log.module || "Events",
		targetResource: log.user_email || "System Resource",
		status: "Success",
		ipAddress: log.ip_address || "127.0.0.1",
		device: log.device || "API Client",
		beforeValue: void 0,
		afterValue: void 0,
		executionTimeMs: 45
	};
}
var auditService = {
	/** Record an Audit Log Document to Firestore (Backend auto-logs on events) */
	async logAction(params) {
		return {
			id: `aud-${Date.now()}`,
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			user: params.user,
			role: params.role,
			action: params.action,
			module: params.module,
			targetResource: params.targetResource,
			status: params.status,
			ipAddress: "127.0.0.1",
			device: "CampusPulse Client Workstation",
			beforeValue: params.beforeValue,
			afterValue: params.afterValue,
			executionTimeMs: 45
		};
	},
	/** Export Audit Logs (PDF, CSV, Excel) */
	exportLogs(format) {
		toast.success(`Exporting complete system audit logs as ${format.toUpperCase()}...`);
	},
	/** Real-time Subscription via Polling */
	subscribe(callback) {
		let active = true;
		const fetchLogs = async () => {
			try {
				const token = localStorage.getItem("campuspulse_jwt_token");
				if (!token) return;
				const res = await fetch(`${API_BASE_URL}/audit-logs`, { headers: { "Authorization": `Bearer ${token}` } });
				const data = await res.json();
				if (res.ok && data.success && Array.isArray(data.data?.logs) && active) callback(data.data.logs.map(apiAuditLogToAuditLogDocument));
			} catch (err) {
				console.warn("Failed to fetch audit logs stream:", err);
			}
		};
		fetchLogs();
		const interval = setInterval(fetchLogs, 8e3);
		return () => {
			active = false;
			clearInterval(interval);
		};
	}
};
/**
* Hook for live real-time Audit Trail stream
*/
function useAuditLogs() {
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const unsubscribe = auditService.subscribe((data) => {
			setLogs(data);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);
	return {
		logs,
		failedCount: logs.filter((l) => l.status === "Failed").length,
		successCount: logs.filter((l) => l.status === "Success").length,
		loading
	};
}
var Route$15 = createFileRoute("/_app/admin/audit")({
	head: () => ({ meta: [
		{ title: "Audit Trail & Monitoring — CampusPulse" },
		{
			name: "description",
			content: "Track every critical activity across the CampusPulse platform."
		},
		{
			property: "og:title",
			content: "Audit Trail & Monitoring — CampusPulse"
		},
		{
			property: "og:description",
			content: "Platform governance and real-time activity auditing."
		}
	] }),
	component: AuditTrail
});
function AuditTrail() {
	const { logs, failedCount, successCount } = useAuditLogs();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [moduleFilter, setModuleFilter] = (0, import_react.useState)("All");
	const [selectedLog, setSelectedLog] = (0, import_react.useState)(null);
	const filteredLogs = logs.filter((l) => {
		const matchesSearch = l.user.toLowerCase().includes(searchQuery.toLowerCase()) || l.action.toLowerCase().includes(searchQuery.toLowerCase()) || l.targetResource.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesModule = moduleFilter === "All" || l.module === moduleFilter;
		return matchesSearch && matchesModule;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Audit Trail & Monitoring",
				subtitle: "Track every critical activity across the CampusPulse platform.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin Dashboard",
						to: "/admin"
					},
					{ label: "Audit Trail" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: () => auditService.exportLogs("csv"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4" }), " Export CSV Log"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: () => auditService.exportLogs("pdf"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4 text-primary" }), " Export PDF"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Audit Logs",
						value: logs.length + 1820,
						icon: FileCheck,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Activities",
						value: 42,
						icon: Activity,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archive Operations",
						value: 412,
						icon: FolderArchive,
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Failed Operations",
						value: failedCount,
						icon: TriangleAlert,
						tone: "danger",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Successful Ops",
						value: successCount + 1815,
						icon: CircleCheck,
						tone: "success",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Critical Alerts",
						value: 0,
						icon: ShieldCheck,
						tone: "success",
						index: 5
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Live Infrastructure & System Health Status",
				description: "Real-time status of underlying microservices",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-6 text-xs",
					children: [
						{
							name: "Cloud Firestore DB",
							status: "Operational 🟢",
							latency: "12ms"
						},
						{
							name: "Firebase Auth",
							status: "Operational 🟢",
							latency: "24ms"
						},
						{
							name: "Notification Service",
							status: "Operational 🟢",
							latency: "45ms"
						},
						{
							name: "Auto-Archive Engine",
							status: "Daemon Running 🟢",
							latency: "30s Sweep"
						},
						{
							name: "Storage Bucket",
							status: "Operational 🟢",
							latency: "98ms"
						},
						{
							name: "Cloud Functions",
							status: "Operational 🟢",
							latency: "110ms"
						}
					].map((sys) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-3 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground truncate",
								children: sys.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-success font-semibold",
								children: sys.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] text-muted-foreground",
								children: ["SLA: ", sys.latency]
							})
						]
					}, sys.name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Searchable System Audit Logs",
				description: "Full activity trail across all modules and security roles",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search user, action, or target resource...",
								className: "h-10 rounded-xl bg-card pl-9 text-xs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "Module Filter:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: moduleFilter,
								onValueChange: setModuleFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "w-44 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Modules"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Archive Engine",
											children: "Archive Engine"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Authentication",
											children: "Authentication"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Events",
											children: "Events"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Registrations",
											children: "Registrations"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Attendance",
											children: "Attendance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Certificates",
											children: "Certificates"
										})
									]
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border overflow-hidden bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
							className: "bg-secondary/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "Timestamp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "User"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "Role"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "Action"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "Module"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "Target Resource"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-xs font-bold",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right text-xs font-bold",
									children: "Details"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredLogs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: "hover:bg-secondary/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-mono text-[11px] whitespace-nowrap text-muted-foreground",
									children: new Date(l.timestamp).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
										second: "2-digit"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-semibold text-xs",
									children: l.user
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "rounded-full text-[10px] uppercase font-bold",
									children: l.role
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs font-medium text-foreground",
									children: l.action
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "rounded-full text-[10px]",
									children: l.module
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs text-muted-foreground truncate max-w-[200px]",
									children: l.targetResource
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: cn("rounded-full text-[10px] font-bold", l.status === "Success" ? "bg-success-soft text-success border-success/30" : "bg-danger-soft text-danger border-danger/30"),
									children: l.status
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "ghost",
										className: "size-8 p-0 rounded-lg text-primary",
										onClick: () => setSelectedLog(l),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
									})
								})
							]
						}, l.id)) })] })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!selectedLog,
				onOpenChange: () => setSelectedLog(null),
				children: selectedLog && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold",
							children: "Audit Entry Trace Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Full cryptographic payload details for audit log ",
							selectedLog.id,
							"."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b pb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Action:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: selectedLog.action
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b pb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "User / System:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: [
											selectedLog.user,
											" (",
											selectedLog.role,
											")"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b pb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Module:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedLog.module
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b pb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Target Resource:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: selectedLog.targetResource
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-b pb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Execution SLA:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-success",
										children: [selectedLog.executionTimeMs, " ms"]
									})]
								}),
								selectedLog.beforeValue && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border bg-secondary/40 p-2 space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold text-muted-foreground uppercase",
											children: "State Transition:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] font-mono text-danger",
											children: ["Before: ", selectedLog.beforeValue]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] font-mono text-success",
											children: ["After: ", selectedLog.afterValue]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setSelectedLog(null),
							className: "w-full rounded-xl shadow-glow",
							children: "Close Trace"
						}) })
					]
				})
			})
		]
	});
}
var cachedMetrics = {
	totalEvents: 0,
	activeEvents: 0,
	upcomingEvents: 0,
	liveEvents: 0,
	completedEvents: 0,
	archivedEvents: 0,
	totalStudents: 0,
	totalOrganizers: 0,
	totalRegistrations: 0,
	attendanceRate: 0,
	certificatesGenerated: 0,
	feedbackSubmitted: 0
};
var cachedActivityFeed = [];
var metricsListeners = [];
async function refreshAnalytics() {
	try {
		const res = await apiRequest("/reports/dashboard");
		const data = res.data || res;
		cachedMetrics = {
			totalEvents: data.total_events ?? 0,
			activeEvents: data.active_events ?? 0,
			upcomingEvents: data.active_events ?? 0,
			liveEvents: data.active_events ?? 0,
			completedEvents: data.completed_events ?? 0,
			archivedEvents: data.archived_events ?? 0,
			totalStudents: data.total_students ?? 0,
			totalOrganizers: data.total_organizers ?? 0,
			totalRegistrations: data.total_registrations ?? 0,
			attendanceRate: Math.round(data.attendance_percentage ?? 0),
			certificatesGenerated: data.certificates_generated ?? 0,
			feedbackSubmitted: data.notifications_sent ?? 0
		};
		try {
			const logsData = await apiRequest("/audit-logs");
			const list = logsData.data || logsData;
			if (Array.isArray(list)) cachedActivityFeed = list.slice(0, 10).map((log) => {
				let type = "EventCreated";
				const actionLower = (log.action || "").toLowerCase();
				if (actionLower.includes("register") || actionLower.includes("sign")) type = "RegistrationCompleted";
				else if (actionLower.includes("attendance") || actionLower.includes("check") || actionLower.includes("scan")) type = "AttendanceMarked";
				else if (actionLower.includes("cert") || actionLower.includes("issue")) type = "CertificateIssued";
				else if (actionLower.includes("archive") || actionLower.includes("expire")) type = "EventArchived";
				return {
					id: String(log.id),
					type,
					title: log.action || "System Action",
					detail: log.detail || `Module: ${log.action_module}`,
					timestamp: log.created_at ? new Date(log.created_at).toLocaleString() : "Just now"
				};
			});
		} catch (err) {
			console.warn("Failed to fetch audit logs for feed:", err);
		}
		metricsListeners.forEach((fn) => fn({ ...cachedMetrics }));
	} catch (err) {
		console.warn("Failed to refresh analytics:", err);
	}
}
var intervalId = null;
var analyticsService = {
	/** Fetch Live Platform Metrics */
	getMetrics() {
		return { ...cachedMetrics };
	},
	/** Fetch Live Activity Feed */
	getActivityFeed() {
		return [...cachedActivityFeed];
	},
	/** Real-time Metrics Subscription */
	subscribe(callback) {
		metricsListeners.push(callback);
		callback({ ...cachedMetrics });
		if (!intervalId) {
			refreshAnalytics();
			intervalId = setInterval(refreshAnalytics, 1e4);
		}
		return () => {
			metricsListeners = metricsListeners.filter((fn) => fn !== callback);
			if (metricsListeners.length === 0 && intervalId) {
				clearInterval(intervalId);
				intervalId = null;
			}
		};
	}
};
/**
* Hook for live real-time Platform Metrics stream
*/
function usePlatformMetrics() {
	const [metrics, setMetrics] = (0, import_react.useState)(analyticsService.getMetrics());
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const unsubscribe = analyticsService.subscribe((data) => {
			setMetrics(data);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);
	return {
		metrics,
		loading
	};
}
/**
* Hook for live real-time Activity Feed stream
*/
function useActivityFeed() {
	const [feed, setFeed] = (0, import_react.useState)(analyticsService.getActivityFeed());
	return { feed };
}
var daemonTimer = null;
var telemetry = {
	lastScanTime: (/* @__PURE__ */ new Date()).toISOString(),
	scannedEventsCount: 0,
	autoArchivedCount: 0,
	expiredAnnouncementsCount: 0,
	successRate: 100,
	engineStatus: "Running"
};
var telemetryListeners = [];
function notifyTelemetry() {
	telemetryListeners.forEach((fn) => fn({ ...telemetry }));
}
var archiveDaemon = {
	/**
	* Executes a single Archiving Sweep
	* Compares Server Time against event.endDate + event.endTime
	*/
	async runArchiveSweep() {
		const now = Date.now();
		const allEvents = await fetchEvents();
		const archivedIds = [];
		let scannedCount = allEvents.length;
		let archivedCount = 0;
		for (const ev of allEvents) {
			if (ev.status === "Archived" || ev.status === "Deleted" || ev.status === "Draft") continue;
			const endDateTime = (/* @__PURE__ */ new Date(`${ev.endDate}T${ev.endTime || "23:59"}`)).getTime();
			if (!isNaN(endDateTime) && now >= endDateTime + 36e5) {
				if (await archiveEvent(ev.eventId, "Automatic Event Expiry (1-Hour SLA Rule)", "Auto-Archive Engine")) {
					archivedIds.push(ev.eventId);
					archivedCount++;
					await notificationService.sendNotification({
						userId: ev.organizerId || "organizer-1",
						role: "Organizer",
						category: "Archive",
						title: `Event Archived: ${ev.title}`,
						message: `Your event "${ev.title}" completed its end datetime and has been automatically moved to Archived Events.`,
						type: "ArchiveCompleted",
						priority: "medium",
						relatedEventId: ev.eventId,
						actionUrl: "/archive-manager"
					});
					await notificationService.sendNotification({
						userId: "std-001",
						role: "Student",
						category: "Archive",
						title: `Event Completed: ${ev.title}`,
						message: `"${ev.title}" has concluded. Verified certificates and feedback submission are now active.`,
						type: "EventArchived",
						priority: "low",
						relatedEventId: ev.eventId,
						actionUrl: "/certificates"
					});
					await notificationService.sendNotification({
						userId: "admin-1",
						role: "Admin",
						category: "Archive",
						title: `Auto-Archived: ${ev.title}`,
						message: `Event automatically archived post end-time. Attendance frozen at ${ev.currentParticipants} participants.`,
						type: "ArchiveCompleted",
						priority: "low",
						relatedEventId: ev.eventId,
						actionUrl: "/admin/archive-logs"
					});
				}
			}
		}
		telemetry = {
			lastScanTime: (/* @__PURE__ */ new Date()).toISOString(),
			scannedEventsCount: scannedCount,
			autoArchivedCount: telemetry.autoArchivedCount + archivedCount,
			expiredAnnouncementsCount: telemetry.expiredAnnouncementsCount + (archivedCount > 0 ? 1 : 0),
			successRate: 100,
			engineStatus: "Running"
		};
		notifyTelemetry();
		try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token) fetch(`${API_BASE_URL}/archive/process`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				}
			}).catch((e) => console.warn("PHP Auto-Archive Sync Warning:", e));
		} catch (e) {}
		if (archivedCount > 0) toast.info(`Auto-Archive Engine: Archived ${archivedCount} completed event(s).`);
		return {
			archivedEvents: archivedIds,
			expiredAnnouncements: archivedCount
		};
	},
	/** Start Daemon (Runs every 30 seconds for live demo responsiveness) */
	startDaemon(intervalMs = 3e4) {
		if (daemonTimer) clearInterval(daemonTimer);
		telemetry.engineStatus = "Running";
		notifyTelemetry();
		this.runArchiveSweep();
		daemonTimer = setInterval(() => {
			this.runArchiveSweep();
		}, intervalMs);
	},
	/** Pause Daemon */
	pauseDaemon() {
		if (daemonTimer) {
			clearInterval(daemonTimer);
			daemonTimer = null;
		}
		telemetry.engineStatus = "Paused";
		notifyTelemetry();
		toast.warning("Auto-Archive Engine daemon paused.");
	},
	/** Restore Archived Event (Admin Override) */
	async restoreArchivedEvent(eventId) {
		const numericId = parseInt(eventId, 10);
		if (!isNaN(numericId)) try {
			const token = localStorage.getItem("campuspulse_jwt_token");
			const res = await fetch(`${API_BASE_URL}/archive/events/${numericId}/restore`, {
				method: "POST",
				headers: { "Authorization": `Bearer ${token}` }
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.success("Event restored to active feed by Admin.");
				this.runArchiveSweep();
				return true;
			}
		} catch (e) {
			console.warn(e);
		}
		const success = await restoreEvent(eventId);
		if (success) {
			toast.success("Event restored to active feed by Admin.");
			this.runArchiveSweep();
		}
		return success;
	},
	/** Subscribe to Engine Telemetry Stream */
	subscribeTelemetry(callback) {
		telemetryListeners.push(callback);
		callback({ ...telemetry });
		return () => {
			telemetryListeners = telemetryListeners.filter((fn) => fn !== callback);
		};
	}
};
if (typeof window !== "undefined") archiveDaemon.startDaemon(3e4);
var Route$14 = createFileRoute("/_app/admin/command-center")({
	head: () => ({ meta: [
		{ title: "Smart Command Center — CampusPulse" },
		{
			name: "description",
			content: "Real-time operational control center for university event governance."
		},
		{
			property: "og:title",
			content: "Smart Command Center — CampusPulse"
		},
		{
			property: "og:description",
			content: "Real-time executive control center for CampusPulse."
		}
	] }),
	component: SmartCommandCenter
});
function SmartCommandCenter() {
	const { metrics } = usePlatformMetrics();
	const { feed } = useActivityFeed();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [currentTime, setCurrentTime] = (0, import_react.useState)("");
	const [isProvisionOpen, setIsProvisionOpen] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [department, setDepartment] = (0, import_react.useState)("Computer Science & Engineering");
	const [role, setRole] = (0, import_react.useState)("Organizer");
	const [generatedCreds, setGeneratedCreds] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		setCurrentTime((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		}));
		const timer = setInterval(() => {
			setCurrentTime((/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			}));
		}, 1e3);
		return () => clearInterval(timer);
	}, []);
	const handleProvisionSubmit = async (e) => {
		e.preventDefault();
		if (!fullName || !email) {
			toast.error("Please provide both full name and official email address.");
			return;
		}
		const tempPassword = `Campus#${Math.floor(1e5 + Math.random() * 9e5)}`;
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			await fetch(`${API_BASE_URL}/auth/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: fullName.trim(),
					email: email.trim().toLowerCase(),
					password: tempPassword,
					role,
					department
				})
			});
			await authService.registerWithEmail(email.trim().toLowerCase(), tempPassword, fullName.trim(), role, department, "Staff").catch(() => {});
		} catch (err) {
			console.warn("Provisioning sync notice:", err);
		}
		setGeneratedCreds({
			email: email.trim().toLowerCase(),
			pass: tempPassword,
			name: fullName.trim()
		});
		toast.success(`Access Provisioned for ${fullName}! Credentials active for login.`);
	};
	const copyCredentials = () => {
		if (!generatedCreds) return;
		const text = `Institutional Account Provisioned:\nRole: ${role}\nName: ${generatedCreds.name}\nEmail: ${generatedCreds.email}\nTemporary Password: ${generatedCreds.pass}\nLogin Portal: https://congrats-brilliant-dust.ngrok-free.dev/login`;
		navigator.clipboard.writeText(text);
		setCopied(true);
		toast.success("Credentials copied to clipboard!");
		setTimeout(() => setCopied(false), 3e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Smart Command Center",
				subtitle: "Executive administrative control center & institutional governance.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin Dashboard",
						to: "/admin"
					},
					{ label: "Smart Command Center" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "rounded-xl px-3 py-1.5 font-mono text-xs bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1.5 size-3.5 text-primary" }),
								" ",
								mounted ? currentTime : "00:00:00 AM"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "rounded-xl px-3 py-1.5 text-xs bg-success-soft text-success border-success/30 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "mr-1.5 size-3 text-success animate-pulse" }), " Platform Operational 🟢"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold shadow-glow border-none",
							onClick: () => {
								setGeneratedCreds(null);
								setFullName("");
								setEmail("");
								setIsProvisionOpen(true);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "mr-1.5 size-4" }), " Provision Staff / Organizer Credentials"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl shadow-glow text-xs",
							onClick: async () => {
								const res = await archiveDaemon.runArchiveSweep();
								toast.success(`Executed full engine sweep! Archived ${res.archivedEvents.length} completed event(s).`);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "mr-1.5 size-4" }), " Run Archiving Sweep"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isProvisionOpen,
				onOpenChange: setIsProvisionOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-lg rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "flex items-center gap-2 text-lg font-extrabold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-purple-600" }), " Provision Institutional Staff Account"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs text-muted-foreground",
						children: "Generate role-scoped credentials for Faculty, Event Organizers, and Departmental Heads."
					})] }), !generatedCreds ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleProvisionSubmit,
						className: "space-y-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "prov-name",
									children: "Full Name & Honorific"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "prov-name",
									placeholder: "Prof. Ananya Sharma",
									value: fullName,
									onChange: (e) => setFullName(e.target.value),
									required: true,
									className: "rounded-xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "prov-email",
									children: "Official Institutional Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "prov-email",
									type: "email",
									placeholder: "ananya.sharma@campus.edu",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									required: true,
									className: "rounded-xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: department,
										onValueChange: setDepartment,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select Department" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Computer Science & Engineering",
												children: "CSE Department"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Information Technology",
												children: "IT Department"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Electronics & Communication",
												children: "ECE Department"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Mechanical Engineering",
												children: "ME Department"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Management Studies",
												children: "MBA / BBA"
											})
										] })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role Access Scope" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: role,
										onValueChange: setRole,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select Role" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Organizer",
											children: "Event Organizer Desk"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Admin",
											children: "Administrator Desk"
										})] })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									onClick: () => setIsProvisionOpen(false),
									className: "rounded-xl",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold",
									children: "Generate Credentials"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-success/40 bg-success-soft/20 p-4 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-success font-bold text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" }), " Account Successfully Provisioned"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 text-xs text-foreground font-mono bg-card p-3 rounded-xl border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Name:"
										}),
										" ",
										generatedCreds.name
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Email:"
										}),
										" ",
										generatedCreds.email
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Temporary Password:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-purple-600 font-extrabold",
											children: generatedCreds.pass
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Assigned Role:"
										}),
										" ",
										role
									] })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: copyCredentials,
								className: "w-full rounded-xl gap-2 text-xs",
								variant: "outline",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Copied to Clipboard!" : "Copy Credential Dossier"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => setIsProvisionOpen(false),
								className: "w-full rounded-xl bg-primary text-primary-foreground text-xs font-semibold",
								children: "Done"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Live Platform Telemetry & User Activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "Realtime Firestore Streams"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Users",
						value: 1420,
						icon: Users,
						tone: "primary",
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Online Students",
						value: 1380,
						icon: UserCheck,
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Online Organizers",
						value: 40,
						icon: ShieldCheck,
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Events",
						value: metrics.activeEvents + 2,
						icon: Calendar,
						tone: "primary",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live Events Now",
						value: metrics.liveEvents,
						icon: Radio,
						tone: "danger",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Registrations Today",
						value: 482,
						icon: TrendingUp,
						tone: "success",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Attendance Today",
						value: 450,
						icon: QrCode,
						tone: "success",
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certs Generated",
						value: metrics.certificatesGenerated,
						icon: Award,
						tone: "warning",
						index: 7
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Notifications Sent",
						value: 1840,
						icon: Bell,
						index: 8
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Events Archived Today",
						value: metrics.archivedEvents,
						icon: FolderArchive,
						tone: "primary",
						index: 9
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-primary/30 bg-card p-5 shadow-sm space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 border-b pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex size-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full size-3 bg-success" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-extrabold text-base text-foreground",
								children: "Flagship Auto-Archive Engine Daemon"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "rounded-full bg-success text-success-foreground text-[10px] font-bold",
								children: "Status: Running"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Automatically archives completed events and removes expired announcements 1.0 hour post event end time."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/archive-logs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "rounded-xl text-xs bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "mr-1.5 size-3.5 text-primary" }), " Open Archive Monitor"]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-4 text-xs text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-secondary/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Sweep Frequency"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-sm text-foreground mt-0.5",
								children: "Every 30 Seconds"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-secondary/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Queue Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-sm text-primary mt-0.5",
								children: "3 Events Pending"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-secondary/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Avg Processing Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-sm text-warning mt-0.5",
								children: "142 ms"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-secondary/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px]",
								children: "Archival SLA Success"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-sm text-success mt-0.5",
								children: "100.0%"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Real-Time Campus Venue Map",
					description: "Building, venue, and room live occupancy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 text-xs",
						children: [
							{
								bldg: "Block C",
								room: "Innovation Hall 302",
								event: "AI Builders Summit",
								status: "Live Now",
								cap: 300,
								occ: 298,
								pct: 99
							},
							{
								bldg: "Main Block",
								room: "Auditorium Hall A",
								event: "Rhythm & Rangoli Cultural",
								status: "Upcoming",
								cap: 1200,
								occ: 1140,
								pct: 95
							},
							{
								bldg: "Block A",
								room: "Lab 204",
								event: "Cybersecurity CTF",
								status: "Completed",
								cap: 150,
								occ: 150,
								pct: 100
							}
						].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-bold text-foreground",
										children: [
											v.room,
											" (",
											v.bldg,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: v.event
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: cn("rounded-full text-[10px] font-bold", v.status === "Live Now" ? "bg-danger-soft text-danger border-danger/30" : "bg-primary-soft text-primary"),
									children: v.status
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-[10px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Occupancy: ",
										v.occ,
										" / ",
										v.cap,
										" Seats"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-foreground",
										children: [v.pct, "% Capacity"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: v.pct,
									className: "h-1.5 rounded-full"
								})]
							})]
						}, v.room))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Live Operations & System Health",
					description: "Active alerts and microservices health matrix",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-warning/30 bg-warning-soft/20 p-4 flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-warning shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-foreground text-xs",
								children: "3 Events Ready for Automatic Archiving"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground mt-0.5",
								children: "End times have passed. The background daemon will automatically transition them to Archived in next sweep."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: [
								{
									name: "Cloud Firestore DB",
									status: "Healthy 🟢"
								},
								{
									name: "Firebase Auth",
									status: "Healthy 🟢"
								},
								{
									name: "Notification Gateway",
									status: "Healthy 🟢"
								},
								{
									name: "Auto-Archive Scheduler",
									status: "Healthy 🟢"
								},
								{
									name: "Attendance QR Gateway",
									status: "Healthy 🟢"
								},
								{
									name: "Certificate Signing Engine",
									status: "Healthy 🟢"
								}
							].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl border border-border bg-card p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-muted-foreground text-[11px]",
									children: h.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-success text-[11px]",
									children: h.status
								})]
							}, h.name))
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "PulseAI Operational Insights",
						description: "Automated intelligence alerts across departments",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: "Highest Registration Growth"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Computer Science & Engineering (+32% this week)"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5 text-warning" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: "Most Active Department"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Department of CSE · 18 Events hosted"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "size-5 text-success" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: "Upcoming Archival Forecast"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "3 Events scheduled for auto-archiving today"
										})
									]
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Executive Quick Actions",
					description: "Instant admin controls",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/organizer/create",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start rounded-xl text-xs bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "mr-2 size-4 text-primary" }), " Create Event Announcement"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/approvals",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start rounded-xl text-xs bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mr-2 size-4 text-success" }), " Review Pending Approvals"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/reports",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start rounded-xl text-xs bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileChartColumnIncreasing, { className: "mr-2 size-4 text-warning" }), " Generate Reports & Analytics"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/audit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start rounded-xl text-xs bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-2 size-4 text-primary" }), " Open System Audit Trail"]
								})
							})
						]
					})
				})]
			})
		]
	});
}
var $$splitComponentImporter$2 = () => import("../_app.admin.dashboard-gSMubre3.mjs");
var Route$13 = createFileRoute("/_app/admin/dashboard")({
	head: () => ({ meta: [
		{ title: "Admin Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Centralized governance command center for campus events, users, and auto-archiving."
		},
		{
			property: "og:title",
			content: "Admin Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Governance dashboard for CampusPulse administrators."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$12 = createFileRoute("/_app/admin/departments")({
	head: () => ({ meta: [
		{ title: "Department & Club Management — CampusPulse" },
		{
			name: "description",
			content: "Manage academic departments, clubs, student chapters, coordinators, and event ownership."
		},
		{
			property: "og:title",
			content: "Department & Club Management — CampusPulse"
		},
		{
			property: "og:description",
			content: "Centralized governance map for university departments, clubs, and coordinators."
		}
	] }),
	component: DepartmentsPage
});
var DEPARTMENTS_MOCK = [
	{
		id: "d1",
		code: "CSE",
		name: "Computer Science & Engineering",
		hod: "Dr. Rajesh Verma",
		facultyCount: 42,
		studentCount: 1840,
		eventsConducted: 54,
		status: "Active",
		coordinators: ["Dr. Rajesh Verma", "Prof. Ananya Roy"],
		clubs: [
			"Coding Club",
			"Robotics Society",
			"IEEE Chapter"
		]
	},
	{
		id: "d2",
		code: "IT",
		name: "Information Technology",
		hod: "Prof. Vikram Seth",
		facultyCount: 36,
		studentCount: 1420,
		eventsConducted: 38,
		status: "Active",
		coordinators: ["Prof. Vikram Seth", "Prof. Meera Joshi"],
		clubs: ["Cybersecurity Club", "DevOps Guild"]
	},
	{
		id: "d3",
		code: "DES",
		name: "School of Design & Media",
		hod: "Prof. Sunita Rao",
		facultyCount: 24,
		studentCount: 980,
		eventsConducted: 29,
		status: "Active",
		coordinators: ["Prof. Sunita Rao", "Sneha Pillai"],
		clubs: ["Design Guild", "Photography Club"]
	},
	{
		id: "d4",
		code: "MECH",
		name: "Mechanical Engineering",
		hod: "Dr. Alok Sharma",
		facultyCount: 38,
		studentCount: 1560,
		eventsConducted: 26,
		status: "Active",
		coordinators: ["Dr. Alok Sharma"],
		clubs: ["SAE Racing", "Robotics Society"]
	},
	{
		id: "d5",
		code: "ECE",
		name: "Electronics & Communication",
		hod: "Dr. Kavita Nair",
		facultyCount: 32,
		studentCount: 1340,
		eventsConducted: 31,
		status: "Active",
		coordinators: ["Dr. Kavita Nair"],
		clubs: ["IoT Innovations", "IEEE Chapter"]
	},
	{
		id: "d6",
		code: "CIVIL",
		name: "Civil & Infrastructure",
		hod: "Prof. Manoj Kumar",
		facultyCount: 28,
		studentCount: 1120,
		eventsConducted: 19,
		status: "Active",
		coordinators: ["Prof. Manoj Kumar"],
		clubs: ["Green Campus Club"]
	},
	{
		id: "d7",
		code: "MBA",
		name: "School of Management",
		hod: "Dr. Ritu Agarwal",
		facultyCount: 30,
		studentCount: 1250,
		eventsConducted: 35,
		status: "Active",
		coordinators: ["Dr. Ritu Agarwal"],
		clubs: ["E-Cell", "Rotaract Club"]
	},
	{
		id: "d8",
		code: "BT",
		name: "Biotechnology & Sciences",
		hod: "Dr. Sanjay Gupta",
		facultyCount: 22,
		studentCount: 890,
		eventsConducted: 18,
		status: "Active",
		coordinators: ["Dr. Sanjay Gupta"],
		clubs: ["BioTech Forum"]
	}
];
var CLUBS_MOCK = [
	{
		id: "c1",
		name: "Coding Club",
		code: "CC-CSE",
		dept: "Computer Science",
		type: "Club",
		category: "Technical",
		facultyLead: "Dr. Rajesh Verma",
		studentLead: "Aarav Sharma",
		members: 340,
		events: 14,
		status: "Active",
		description: "Promoting competitive programming, hackathons, and open source development across campus."
	},
	{
		id: "c2",
		name: "Robotics Society",
		code: "RS-MECH",
		dept: "Mechanical Engineering",
		type: "Student Chapter",
		category: "Technical",
		facultyLead: "Dr. Alok Sharma",
		studentLead: "Prof. Ananya Roy",
		members: 210,
		events: 9,
		status: "Active",
		description: "Building autonomous robots, quadcopters, and participating in national Robocon competitions."
	},
	{
		id: "c3",
		name: "Design Guild",
		code: "DG-DES",
		dept: "School of Design & Media",
		type: "Club",
		category: "Cultural",
		facultyLead: "Prof. Sunita Rao",
		studentLead: "Sneha Pillai",
		members: 280,
		events: 12,
		status: "Active",
		description: "UI/UX, visual art, motion design workshops, and annual design exhibition."
	},
	{
		id: "c4",
		name: "IEEE Student Chapter",
		code: "IEEE-ECE",
		dept: "Electronics & Communication",
		type: "Student Chapter",
		category: "Academic",
		facultyLead: "Dr. Kavita Nair",
		studentLead: "Rohan Varma",
		members: 410,
		events: 18,
		status: "Active",
		description: "International IEEE technical papers, conference symposiums, and research seminars."
	},
	{
		id: "c5",
		name: "Cybersecurity Club",
		code: "CSC-IT",
		dept: "Information Technology",
		type: "Club",
		category: "Technical",
		facultyLead: "Prof. Vikram Seth",
		studentLead: "Tanya Bose",
		members: 190,
		events: 8,
		status: "Active",
		description: "Ethical hacking, Capture-The-Flag (CTF) challenges, and network defense bootcamps."
	},
	{
		id: "c6",
		name: "Rotaract Club",
		code: "ROT-MBA",
		dept: "School of Management",
		type: "Club",
		category: "Social",
		facultyLead: "Dr. Ritu Agarwal",
		studentLead: "Priya Nair",
		members: 520,
		events: 22,
		status: "Active",
		description: "Community service, blood donation drives, and youth leadership initiatives."
	}
];
var COORDINATORS_MOCK = [
	{
		id: "coord1",
		name: "Dr. Rajesh Verma",
		role: "Faculty Lead",
		dept: "Computer Science",
		email: "rajesh.v@campus.edu",
		phone: "+91 98765 43210",
		assignedUnit: "Coding Club & HOD",
		eventsManaged: 18,
		status: "Active"
	},
	{
		id: "coord2",
		name: "Prof. Ananya Roy",
		role: "Faculty Lead",
		dept: "Computer Science",
		email: "ananya.r@campus.edu",
		phone: "+91 98765 43211",
		assignedUnit: "Robotics Society",
		eventsManaged: 12,
		status: "Active"
	},
	{
		id: "coord3",
		name: "Sneha Pillai",
		role: "Student Lead",
		dept: "School of Design & Media",
		email: "sneha.p@campus.edu",
		phone: "+91 98765 43212",
		assignedUnit: "Design Guild",
		eventsManaged: 8,
		status: "Active"
	},
	{
		id: "coord4",
		name: "Prof. Vikram Seth",
		role: "Faculty Lead",
		dept: "Information Technology",
		email: "vikram.s@campus.edu",
		phone: "+91 98765 43213",
		assignedUnit: "Cybersecurity Club & HOD",
		eventsManaged: 14,
		status: "Active"
	},
	{
		id: "coord5",
		name: "Dr. Alok Sharma",
		role: "Faculty Lead",
		dept: "Mechanical Engineering",
		email: "alok.s@campus.edu",
		phone: "+91 98765 43214",
		assignedUnit: "SAE Racing & HOD",
		eventsManaged: 9,
		status: "Active"
	},
	{
		id: "coord6",
		name: "Dr. Kavita Nair",
		role: "Faculty Lead",
		dept: "Electronics & Communication",
		email: "kavita.n@campus.edu",
		phone: "+91 98765 43215",
		assignedUnit: "IEEE Student Chapter & HOD",
		eventsManaged: 15,
		status: "Active"
	}
];
function DepartmentsPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("departments");
	const [departmentsList, setDepartmentsList] = (0, import_react.useState)(DEPARTMENTS_MOCK);
	const [clubsList, setClubsList] = (0, import_react.useState)(CLUBS_MOCK);
	const [coordinatorsList, setCoordinatorsList] = (0, import_react.useState)(COORDINATORS_MOCK);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [deptFilter, setDeptFilter] = (0, import_react.useState)("All");
	const [categoryFilter, setCategoryFilter] = (0, import_react.useState)("All");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [sortBy, setSortBy] = (0, import_react.useState)("Most Active");
	const [selectedDeptDetail, setSelectedDeptDetail] = (0, import_react.useState)(null);
	const [selectedClubDetail, setSelectedClubDetail] = (0, import_react.useState)(null);
	const [showAddDeptModal, setShowAddDeptModal] = (0, import_react.useState)(false);
	const [showAddClubModal, setShowAddClubModal] = (0, import_react.useState)(false);
	const [assignModalUnit, setAssignModalUnit] = (0, import_react.useState)(null);
	const [newDeptName, setNewDeptName] = (0, import_react.useState)("");
	const [newDeptCode, setNewDeptCode] = (0, import_react.useState)("");
	const [newDeptHod, setNewDeptHod] = (0, import_react.useState)("");
	const [newClubName, setNewClubName] = (0, import_react.useState)("");
	const [newClubCategory, setNewClubCategory] = (0, import_react.useState)("Technical");
	const [newClubDept, setNewClubDept] = (0, import_react.useState)("Computer Science");
	const [assignedCoordName, setAssignedCoordName] = (0, import_react.useState)("Dr. Rajesh Verma");
	const stats = (0, import_react.useMemo)(() => {
		const totalDepts = departmentsList.length;
		const totalClubs = clubsList.length;
		return {
			totalDepts,
			totalClubs,
			studentChapters: clubsList.filter((c) => c.type === "Student Chapter").length + 8,
			facultyCoords: coordinatorsList.filter((c) => c.role === "Faculty Lead").length + 10,
			studentCoords: coordinatorsList.filter((c) => c.role === "Student Lead").length + 26,
			activeOrgs: totalDepts + totalClubs,
			totalEvents: events.length * 12,
			pendingRequests: 5
		};
	}, [
		departmentsList,
		clubsList,
		coordinatorsList
	]);
	const deptChartData = (0, import_react.useMemo)(() => {
		return departmentsList.map((d) => ({
			name: d.code,
			events: d.eventsConducted,
			students: Math.round(d.studentCount / 10)
		}));
	}, [departmentsList]);
	const clubChartData = (0, import_react.useMemo)(() => {
		return clubsList.map((c) => ({
			name: c.name.split(" ")[0],
			events: c.events,
			members: Math.round(c.members / 5)
		}));
	}, [clubsList]);
	const filteredDepts = (0, import_react.useMemo)(() => {
		return departmentsList.filter((d) => {
			const matchesSearch = !searchTerm.trim() || d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.code.toLowerCase().includes(searchTerm.toLowerCase()) || d.hod.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesStatus = statusFilter === "All" || d.status === statusFilter;
			return matchesSearch && matchesStatus;
		}).sort((a, b) => {
			if (sortBy === "Most Active") return b.eventsConducted - a.eventsConducted;
			if (sortBy === "Alphabetical") return a.name.localeCompare(b.name);
			return 0;
		});
	}, [
		departmentsList,
		searchTerm,
		statusFilter,
		sortBy
	]);
	const filteredClubs = (0, import_react.useMemo)(() => {
		return clubsList.filter((c) => {
			const matchesSearch = !searchTerm.trim() || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.dept.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesDept = deptFilter === "All" || c.dept === deptFilter;
			const matchesCat = categoryFilter === "All" || c.category === categoryFilter;
			const matchesStatus = statusFilter === "All" || c.status === statusFilter;
			return matchesSearch && matchesDept && matchesCat && matchesStatus;
		}).sort((a, b) => {
			if (sortBy === "Most Active") return b.events - a.events;
			if (sortBy === "Alphabetical") return a.name.localeCompare(b.name);
			return 0;
		});
	}, [
		clubsList,
		searchTerm,
		deptFilter,
		categoryFilter,
		statusFilter,
		sortBy
	]);
	const filteredCoords = (0, import_react.useMemo)(() => {
		return coordinatorsList.filter((c) => {
			const matchesSearch = !searchTerm.trim() || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.dept.toLowerCase().includes(searchTerm.toLowerCase()) || c.assignedUnit.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesDept = deptFilter === "All" || c.dept === deptFilter;
			return matchesSearch && matchesDept;
		});
	}, [
		coordinatorsList,
		searchTerm,
		deptFilter
	]);
	const handleAddDeptSubmit = (e) => {
		e.preventDefault();
		if (!newDeptName || !newDeptCode) {
			toast.error("Please fill in Department Name and Code.");
			return;
		}
		const created = {
			id: `d-${Date.now()}`,
			code: newDeptCode.toUpperCase(),
			name: newDeptName,
			hod: newDeptHod || "TBD",
			facultyCount: 15,
			studentCount: 650,
			eventsConducted: 0,
			status: "Active",
			coordinators: [newDeptHod || "Faculty Lead"],
			clubs: []
		};
		setDepartmentsList([...departmentsList, created]);
		setShowAddDeptModal(false);
		setNewDeptName("");
		setNewDeptCode("");
		setNewDeptHod("");
		toast.success(`Department "${created.name}" created successfully.`);
	};
	const handleAddClubSubmit = (e) => {
		e.preventDefault();
		if (!newClubName) {
			toast.error("Please fill in Club Name.");
			return;
		}
		const created = {
			id: `c-${Date.now()}`,
			name: newClubName,
			code: `${newClubName.substring(0, 3).toUpperCase()}-CLUB`,
			dept: newClubDept,
			type: "Club",
			category: newClubCategory,
			facultyLead: "Dr. Rajesh Verma",
			studentLead: "Aarav Sharma",
			members: 120,
			events: 0,
			status: "Active",
			description: "Newly formed student club for campus engagement."
		};
		setClubsList([...clubsList, created]);
		setShowAddClubModal(false);
		setNewClubName("");
		toast.success(`Club "${created.name}" added to ${created.dept}.`);
	};
	const handleAssignCoordinator = (e) => {
		e.preventDefault();
		if (!assignModalUnit) return;
		toast.success(`Assigned ${assignedCoordName} to ${assignModalUnit.name}.`);
		setAssignModalUnit(null);
	};
	const tooltipStyle = {
		borderRadius: 16,
		border: "1px solid var(--color-border)",
		background: "var(--color-card)",
		fontSize: 12
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Department & Club Management",
				subtitle: "Manage academic departments, clubs, student chapters, coordinators, and event ownership.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin",
						to: "/admin"
					},
					{ label: "Departments & Clubs" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						onClick: () => setShowAddClubModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 size-4 text-primary" }), " Add Club"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl shadow-glow",
						onClick: () => setShowAddDeptModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "mr-1.5 size-4" }), " Add Department"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Academic & Organizational Telemetry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "Hierarchy Map"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Departments",
						value: stats.totalDepts,
						icon: Building2,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Clubs",
						value: stats.totalClubs,
						icon: Users,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Chapters",
						value: stats.studentChapters,
						icon: Award,
						tone: "success",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Faculty Leads",
						value: stats.facultyCoords,
						icon: GraduationCap,
						tone: "warning",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Student Leads",
						value: stats.studentCoords,
						icon: UserCheck,
						tone: "success",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Orgs",
						value: stats.activeOrgs,
						icon: Radio,
						tone: "danger",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Events",
						value: stats.totalEvents,
						icon: Layers,
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending Req",
						value: stats.pendingRequests,
						icon: Hourglass,
						tone: "warning",
						index: 7
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Campus Organizational Directory",
				description: "Switch between Departments, Clubs, and Coordinators",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: setActiveTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-4 mb-4 border-b pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "rounded-xl bg-secondary/50 p-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "departments",
										className: "rounded-lg text-xs font-bold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "mr-1.5 size-3.5" }),
											" Departments (",
											filteredDepts.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "clubs",
										className: "rounded-lg text-xs font-bold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mr-1.5 size-3.5" }),
											" Clubs & Chapters (",
											filteredClubs.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "coordinators",
										className: "rounded-lg text-xs font-bold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mr-1.5 size-3.5" }),
											" Coordinators (",
											filteredCoords.length,
											")"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative min-w-[220px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: searchTerm,
										onChange: (e) => setSearchTerm(e.target.value),
										placeholder: "Search units, codes, leads...",
										className: "h-9 rounded-xl pl-8 bg-card text-xs"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: sortBy,
									onValueChange: setSortBy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "h-9 w-36 rounded-xl bg-card text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
										className: "rounded-2xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Most Active",
											children: "Most Active"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Alphabetical",
											children: "Alphabetical"
										})]
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "departments",
							children: filteredDepts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Building2,
								title: "No departments match your search",
								description: "Try clearing search filters."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
								children: filteredDepts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs font-bold text-primary bg-primary-soft px-2.5 py-1 rounded-lg",
												children: d.code
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "rounded-full text-[10px] bg-success-soft text-success border-success/30",
												children: d.status
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-base text-foreground mt-3 line-clamp-1",
											children: d.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: ["HOD: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: d.hod
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-2.5 mt-3 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px]",
												children: "Students"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: d.studentCount.toLocaleString()
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px]",
												children: "Events Conducted"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-primary",
												children: d.eventsConducted
											})] })]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t pt-3 gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "ghost",
											className: "h-8 rounded-xl text-xs",
											onClick: () => setSelectedDeptDetail(d),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1 size-3.5" }), " View"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-8 rounded-xl text-xs bg-card",
											onClick: () => setAssignModalUnit({
												type: "dept",
												name: d.name
											}),
											children: "Assign Lead"
										})]
									})]
								}, d.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "clubs",
							children: filteredClubs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Users,
								title: "No clubs match your search",
								description: "Try clearing category or search filters."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
								children: filteredClubs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "rounded-full text-[10px] font-bold text-primary bg-primary-soft",
												children: c.category
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "secondary",
												className: "rounded-full text-[10px]",
												children: c.type
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-bold text-base text-foreground mt-3",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: c.dept
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground line-clamp-2 mt-2",
											children: c.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-2.5 mt-3 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground text-[10px]",
													children: "Faculty Lead"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground line-clamp-1",
													children: c.facultyLead
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground text-[10px]",
													children: "Student Lead"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground line-clamp-1",
													children: c.studentLead
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground text-[10px]",
													children: "Active Members"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-foreground",
													children: c.members
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground text-[10px]",
													children: "Events Hosted"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-primary",
													children: c.events
												})] })
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t pt-3 gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "ghost",
											className: "h-8 rounded-xl text-xs",
											onClick: () => setSelectedClubDetail(c),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1 size-3.5" }), " Details"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-8 rounded-xl text-xs bg-card",
											onClick: () => setAssignModalUnit({
												type: "club",
												name: c.name
											}),
											children: "Assign Lead"
										})]
									})]
								}, c.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "coordinators",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded-2xl border border-border bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
									className: "bg-secondary/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Coordinator Profile" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "hidden md:table-cell",
											children: "Department"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "hidden lg:table-cell",
											children: "Assigned Unit"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Events Managed" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
											className: "text-right",
											children: "Actions"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredCoords.map((coord) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
									className: "hover:bg-secondary/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft font-bold text-primary text-xs",
												children: coord.name.split(" ").map((n) => n[0]).join("")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-bold text-sm text-foreground line-clamp-1",
													children: coord.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground truncate",
													children: coord.email
												})]
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px]",
											children: coord.role
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "hidden md:table-cell text-xs text-muted-foreground",
											children: coord.dept
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "hidden lg:table-cell text-xs font-semibold text-primary",
											children: coord.assignedUnit
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "font-bold text-xs",
											children: coord.eventsManaged
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px] bg-success-soft text-success border-success/30",
											children: coord.status
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
											className: "text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												className: "h-8 rounded-xl text-xs bg-card",
												onClick: () => toast.success(`Reassigning ${coord.name}...`),
												children: "Reassign"
											})
										})
									]
								}, coord.id)) })] })
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Events Conducted by Department",
					description: "Comparative event volume across university departments",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: deptChartData,
								margin: {
									left: -20,
									right: 8,
									top: 8
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "events",
										fill: "#2563EB",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Club Activity & Member Engagement",
					description: "Hosted events vs member density ratios",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: clubChartData,
								margin: {
									left: -20,
									right: 8,
									top: 8
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "events",
										fill: "#22C55E",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: selectedDeptDetail !== null,
				onOpenChange: () => setSelectedDeptDetail(null),
				children: selectedDeptDetail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono font-bold text-xs bg-primary-soft text-primary px-2.5 py-1 rounded-lg",
									children: selectedDeptDetail.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "rounded-full text-xs",
									children: "Academic Department"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-xl font-bold mt-2",
								children: selectedDeptDetail.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: ["Head of Department: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: selectedDeptDetail.hod
							})] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2 rounded-2xl bg-secondary/40 p-3 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Faculty"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground text-sm",
											children: selectedDeptDetail.facultyCount
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Students"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground text-sm",
											children: selectedDeptDetail.studentCount
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Total Events"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-primary text-sm",
											children: selectedDeptDetail.eventsConducted
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-muted-foreground mb-1",
									children: "AFFILIATED CLUBS & CHAPTERS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: selectedDeptDetail.clubs.map((cl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "rounded-full bg-card",
										children: cl
									}, cl))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-muted-foreground mb-1",
									children: "DEPARTMENT FACULTY LEADS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1",
									children: selectedDeptDetail.coordinators.map((co) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between rounded-lg bg-secondary/30 p-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: co
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground text-[10px]",
											children: "Faculty Lead"
										})]
									}, co))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "rounded-xl text-xs",
							onClick: () => setSelectedDeptDetail(null),
							children: "Close"
						}) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: selectedClubDetail !== null,
				onOpenChange: () => setSelectedClubDetail(null),
				children: selectedClubDetail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "rounded-full text-xs font-bold text-primary bg-primary-soft",
									children: selectedClubDetail.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "rounded-full text-xs",
									children: selectedClubDetail.type
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-xl font-bold mt-2",
								children: selectedClubDetail.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: selectedClubDetail.dept })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 py-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: selectedClubDetail.description
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 rounded-2xl border p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Faculty Coordinator"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground",
										children: selectedClubDetail.facultyLead
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Student Lead"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-foreground",
										children: selectedClubDetail.studentLead
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Registered Members"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-primary",
										children: selectedClubDetail.members
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[10px]",
										children: "Events Hosted"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-success",
										children: selectedClubDetail.events
									})] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "rounded-xl text-xs",
							onClick: () => setSelectedClubDetail(null),
							children: "Close"
						}) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showAddDeptModal,
				onOpenChange: setShowAddDeptModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: "Add Academic Department"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Create a new department unit for event governance." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAddDeptSubmit,
						className: "space-y-4 py-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Department Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: newDeptName,
									onChange: (e) => setNewDeptName(e.target.value),
									placeholder: "e.g. Electrical Engineering",
									required: true,
									className: "rounded-xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Department Code *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: newDeptCode,
									onChange: (e) => setNewDeptCode(e.target.value),
									placeholder: "e.g. EEE",
									required: true,
									className: "rounded-xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Head of Department (HOD)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: newDeptHod,
									onChange: (e) => setNewDeptHod(e.target.value),
									placeholder: "e.g. Dr. Ramesh Kumar",
									className: "rounded-xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									type: "button",
									onClick: () => setShowAddDeptModal(false),
									className: "rounded-xl",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl shadow-glow",
									children: "Create Department"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showAddClubModal,
				onOpenChange: setShowAddClubModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: "Add Club or Student Chapter"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Register a new student organization." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAddClubSubmit,
						className: "space-y-4 py-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Club Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: newClubName,
									onChange: (e) => setNewClubName(e.target.value),
									placeholder: "e.g. AI & Robotics Club",
									required: true,
									className: "rounded-xl"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Affiliated Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: newClubDept,
									onValueChange: setNewClubDept,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
										className: "rounded-2xl",
										children: departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: d,
											children: d
										}, d))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: newClubCategory,
									onValueChange: (val) => setNewClubCategory(val),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
										className: "rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Technical",
												children: "Technical"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Cultural",
												children: "Cultural"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Sports",
												children: "Sports"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Academic",
												children: "Academic"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Social",
												children: "Social"
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									type: "button",
									onClick: () => setShowAddClubModal(false),
									className: "rounded-xl",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl shadow-glow",
									children: "Create Club"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: assignModalUnit !== null,
				onOpenChange: () => setAssignModalUnit(null),
				children: assignModalUnit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: "Assign Lead / Coordinator"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: ["Assign a faculty lead for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: assignModalUnit.name
					})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAssignCoordinator,
						className: "space-y-4 py-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-semibold",
								children: "Select Faculty Coordinator"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: assignedCoordName,
								onValueChange: setAssignedCoordName,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "rounded-xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
									className: "rounded-2xl",
									children: coordinatorsList.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: c.name,
										children: [
											c.name,
											" (",
											c.dept,
											")"
										]
									}, c.id))
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								type: "button",
								onClick: () => setAssignModalUnit(null),
								className: "rounded-xl",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "rounded-xl shadow-glow",
								children: "Confirm Assignment"
							})]
						})]
					})]
				})
			})
		]
	});
}
var Route$11 = createFileRoute("/_app/admin/digital-twin")({
	head: () => ({ meta: [
		{ title: "Campus Digital Twin — CampusPulse" },
		{
			name: "description",
			content: "Live spatial visualization of campus venues, event occupancy, and auto-archiving telemetry."
		},
		{
			property: "og:title",
			content: "Campus Digital Twin — CampusPulse"
		},
		{
			property: "og:description",
			content: "Live operational map of university events and venue capacity."
		}
	] }),
	component: CampusDigitalTwin
});
function CampusDigitalTwin() {
	const { metrics } = usePlatformMetrics();
	const [selectedBuilding, setSelectedBuilding] = (0, import_react.useState)("Innovation Lab");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Campus Digital Twin",
				subtitle: "Live visualization of events, venues, occupancy, and campus activity.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin Dashboard",
						to: "/admin"
					},
					{ label: "Digital Twin" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "rounded-xl px-3 py-1.5 text-xs bg-success-soft text-success border-success/30 font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "mr-1.5 size-3 text-success animate-pulse" }), " Live Telemetry Streaming 🟢"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: async () => {
							await archiveDaemon.runArchiveSweep();
							toast.success("Triggered Realtime Digital Twin Archiving Sweep!");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "mr-1.5 size-3.5 text-primary" }), " Sweep Completed Events"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "People On Campus",
						value: 1420,
						icon: Users,
						tone: "primary",
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Events Running",
						value: metrics.liveEvents,
						icon: Radio,
						tone: "danger",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Occupancy",
						value: "92%",
						icon: Activity,
						tone: "success",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Attendance",
						value: 450,
						icon: QrCode,
						tone: "success",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Registrations",
						value: metrics.totalRegistrations,
						icon: TrendingUp,
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certificates",
						value: metrics.certificatesGenerated,
						icon: Award,
						tone: "warning",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived Events",
						value: metrics.archivedEvents,
						icon: FolderArchive,
						tone: "primary",
						index: 6
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Interactive Campus Building Map & Heatmap",
				description: "Click any building card to inspect real-time venue telemetry",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							name: "Innovation Lab",
							block: "Block C",
							room: "Hall 302",
							event: "AI Builders Summit 2026",
							occ: 298,
							cap: 300,
							status: "Occupied",
							heat: "High"
						},
						{
							name: "Main Auditorium",
							block: "Main Block",
							room: "Auditorium A",
							event: "Rhythm & Rangoli Cultural",
							occ: 1140,
							cap: 1200,
							status: "Occupied",
							heat: "High"
						},
						{
							name: "CS Department",
							block: "Block A",
							room: "Lab 204",
							event: "Cloud Kubernetes Workshop",
							occ: 140,
							cap: 150,
							status: "Occupied",
							heat: "High"
						},
						{
							name: "ECE Block",
							block: "Block B",
							room: "Seminar Hall 1",
							event: "Robotics Grand Prix Briefing",
							occ: 80,
							cap: 100,
							status: "Occupied",
							heat: "Medium"
						},
						{
							name: "Seminar Hall B",
							block: "Block D",
							room: "Hall B",
							event: "E-Cell Pitch Practice",
							occ: 45,
							cap: 80,
							status: "Occupied",
							heat: "Medium"
						},
						{
							name: "Central Library",
							block: "Library Wing",
							room: "Quiet Zone 2",
							event: "Study Group Session",
							occ: 20,
							cap: 200,
							status: "Available",
							heat: "Low"
						},
						{
							name: "Open Ground",
							block: "Campus Quad",
							room: "Stage 1",
							event: "Annual Sports Selection",
							occ: 350,
							cap: 1e3,
							status: "Occupied",
							heat: "Medium"
						},
						{
							name: "Conference Hall",
							block: "Admin Block",
							room: "Room 101",
							event: "Faculty Governance Council",
							occ: 30,
							cap: 50,
							status: "Occupied",
							heat: "Medium"
						}
					].map((b) => {
						const isSelected = selectedBuilding === b.name;
						const pct = Math.round(b.occ / b.cap * 100);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							onClick: () => setSelectedBuilding(b.name),
							className: cn("cursor-pointer rounded-2xl border p-4 transition-all duration-200 hover:shadow-lg space-y-3", isSelected ? "border-primary bg-primary-soft/30 ring-2 ring-primary/20" : "border-border bg-card hover:border-primary/50"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-extrabold text-xs text-foreground",
											children: b.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: cn("rounded-full text-[10px] font-bold", b.heat === "High" ? "bg-danger-soft text-danger border-danger/30" : b.heat === "Medium" ? "bg-warning-soft text-warning border-warning/30" : "bg-success-soft text-success border-success/30"),
										children: [b.heat, " Density"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-bold text-foreground truncate",
										children: b.event
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-muted-foreground",
										children: [
											b.room,
											" (",
											b.block,
											")"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 pt-1 border-t",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Occupancy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-foreground",
											children: [
												b.occ,
												" / ",
												b.cap,
												" (",
												pct,
												"%)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: pct,
										className: "h-1.5 rounded-full"
									})]
								})
							]
						}, b.name);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Live Event Lifecycle Digital Timeline",
						description: "Real-time progression from Live -> Completed -> Auto-Archived",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3 text-xs",
							children: [
								{
									time: "NOW (Live)",
									title: "AI Builders Summit & Hackathon",
									venue: "Innovation Lab 302",
									status: "Live",
									pct: "99% Occupied"
								},
								{
									time: "+30 Mins",
									title: "Cybersecurity CTF Awards",
									venue: "CS Department Lab 204",
									status: "Ending Soon",
									pct: "93% Occupied"
								},
								{
									time: "+1 Hour",
									title: "Flagship Archiving Sweep Scheduled",
									venue: "Auto-Archive Daemon",
									status: "Scheduled",
									pct: "3 Events Queued"
								},
								{
									time: "Today 05:00 PM",
									title: "Rhythm & Rangoli Cultural Night",
									venue: "Main Auditorium",
									status: "Upcoming",
									pct: "95% Booked"
								}
							].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-28 text-[11px] font-bold text-primary font-mono shrink-0",
										children: item.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[10px] text-muted-foreground",
											children: [
												item.venue,
												" · ",
												item.pct
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "rounded-full text-[10px] font-bold",
										children: item.status
									})
								]
							}, item.title))
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Digital Twin PulseAI Insights",
					description: "Automated spatial analytics",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-3 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: "Highest Density Zone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Innovation Lab (99% Occupancy)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-3 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: "Low Activity Zone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Central Library Zone 2 (10% Occupancy)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card p-3 space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: "Auto-Archiving Forecast"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "3 Events ready for archival in 45 minutes"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 border-t space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/command-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "w-full justify-start rounded-xl text-xs bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "mr-2 size-4 text-primary" }), " Open Command Center"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/archive-logs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										className: "w-full justify-start rounded-xl text-xs bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "mr-2 size-4 text-success" }), " Open Archive Monitor"]
									})
								})]
							})
						]
					})
				})]
			})
		]
	});
}
var Route$10 = createFileRoute("/_app/admin/predictive-intelligence")({
	head: () => ({ meta: [
		{ title: "Predictive Intelligence Center — CampusPulse" },
		{
			name: "description",
			content: "AI-powered forecasting and predictive telemetry for campus event governance."
		},
		{
			property: "og:title",
			content: "Predictive Intelligence Center — CampusPulse"
		},
		{
			property: "og:description",
			content: "Forecast campus activity, attendance, and auto-archiving volume."
		}
	] }),
	component: PredictiveIntelligenceCenter
});
function PredictiveIntelligenceCenter() {
	const { metrics } = usePlatformMetrics();
	const [simCapacity, setSimCapacity] = (0, import_react.useState)([300]);
	const [simDays, setSimDays] = (0, import_react.useState)([3]);
	const predictedRegistrations = Math.round(simCapacity[0] * .96 * (1 + simDays[0] * .05));
	const predictedTurnout = Math.round(predictedRegistrations * .94);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Predictive Intelligence Center",
				subtitle: "Forecast campus activities using historical event and engagement data.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin Dashboard",
						to: "/admin"
					},
					{ label: "Predictive Intelligence" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: () => toast.success("Exporting Predictive Intelligence Executive Report as CSV..."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4" }), " Export CSV"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: () => toast.success("Exporting Predictive Report as PDF..."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4 text-primary" }), " Export Executive PDF"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Expected Regs Tomorrow",
						value: 540,
						icon: TrendingUp,
						tone: "primary",
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Predicted Attendance",
						value: 482,
						icon: QrCode,
						tone: "success",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Capacity Alert Events",
						value: 2,
						icon: TriangleAlert,
						tone: "warning",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "At Risk of Low Turnout",
						value: 1,
						icon: Activity,
						tone: "danger",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Predicted Certs",
						value: 410,
						icon: Award,
						tone: "warning",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archiving Operations",
						value: 14,
						icon: FolderArchive,
						tone: "primary",
						index: 5
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Interactive What-If Event Simulator",
					description: "Simulate capacity and deadline tweaks to project registration & attendance impact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-muted-foreground",
										children: "Proposed Event Capacity:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-primary font-mono",
										children: [simCapacity[0], " Seats"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									value: simCapacity,
									onValueChange: setSimCapacity,
									min: 50,
									max: 1e3,
									step: 25
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-muted-foreground",
										children: "Registration Days Before Event:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-primary font-mono",
										children: [simDays[0], " Days"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									value: simDays,
									onValueChange: setSimDays,
									min: 1,
									max: 14,
									step: 1
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-primary/30 bg-primary-soft/20 p-4 space-y-2 border-t mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-extrabold text-xs text-foreground flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), " PulseAI Projected Impact"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 text-center pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-card p-2.5 border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground",
											children: "Predicted Regs"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-extrabold text-sm text-foreground",
											children: predictedRegistrations
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-card p-2.5 border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground",
											children: "Predicted Turnout"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-extrabold text-sm text-success",
											children: [predictedTurnout, " (94%)"]
										})]
									})]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 space-y-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Machine Learning Platform Forecasts",
						description: "Predictive modeling on student engagement and event capacity",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "Registration Forecast"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px] bg-success-soft text-success",
											children: "+18% Growth"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "CSE and Robotics workshops will reach 100% capacity within 6 hours of publishing."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "Attendance Turnout Score"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px] bg-primary-soft text-primary",
											children: "94.2% Expected"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Fridays between 2:00 PM – 4:00 PM yield the highest verified QR scan attendance rates."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "Auto-Archiving Volume"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px] bg-warning-soft text-warning",
											children: "14 Events Today"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "The background daemon will process 14 event expiries today with 0% SLA downtime."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "Certificate Verification Rate"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "rounded-full text-[10px] bg-success-soft text-success",
											children: "100% Validated"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "All eligible participants will receive instant verified certificates post-archiving."
									})]
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Predictive Event Health Scores & Risk Analysis",
				description: "AI health score based on registration velocity and venue capacity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card overflow-hidden text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 bg-secondary/40 p-3 font-bold border-b text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-4",
								children: "Event Title"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2",
								children: "Department"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2",
								children: "Health Score"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2",
								children: "Risk Level"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2 text-right",
								children: "Action"
							})
						]
					}), [
						{
							title: "AI Builders Summit 2026",
							dept: "CSE",
							score: "98/100",
							risk: "Low Risk 🟢",
							action: "Capacity Full"
						},
						{
							title: "Cybersecurity CTF Challenge",
							dept: "CSE",
							score: "94/100",
							risk: "Low Risk 🟢",
							action: "On Track"
						},
						{
							title: "Rhythm & Rangoli Cultural",
							dept: "Cultural",
							score: "88/100",
							risk: "Low Risk 🟢",
							action: "On Track"
						},
						{
							title: "Robotics Grand Prix",
							dept: "ECE",
							score: "62/100",
							risk: "Medium Risk 🟠",
							action: "Send Notification"
						}
					].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 p-3.5 items-center border-b hover:bg-secondary/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-4 font-bold text-foreground",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2 text-muted-foreground",
								children: e.dept
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2 font-mono font-bold text-primary",
								children: e.score
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2 font-semibold",
								children: e.risk
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-2 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									className: "rounded-xl text-[10px] bg-card h-7",
									onClick: () => toast.info(`Action triggered for ${e.title}: ${e.action}`),
									children: e.action
								})
							})
						]
					}, e.title))]
				})
			})
		]
	});
}
var Route$9 = createFileRoute("/_app/admin/reports")({
	head: () => ({ meta: [
		{ title: "Reports & Analytics — CampusPulse" },
		{
			name: "description",
			content: "Generate reports and monitor platform-wide performance, registrations, attendance, and archived events."
		},
		{
			property: "og:title",
			content: "Reports & Analytics — CampusPulse"
		},
		{
			property: "og:description",
			content: "Comprehensive reporting and analytics center for university event governance."
		}
	] }),
	component: Reports
});
var REPORT_CATEGORIES = [
	{
		id: "event",
		name: "Event Reports",
		desc: "Total events, status breakdown, monthly trends, and execution stats",
		icon: Layers,
		formatCount: "PDF, Excel, CSV",
		badge: "Core"
	},
	{
		id: "reg",
		name: "Registration Reports",
		desc: "Daily/Monthly signups, department split, capacity usage, and top events",
		icon: TrendingUp,
		formatCount: "PDF, Excel, CSV",
		badge: "Popular"
	},
	{
		id: "att",
		name: "Attendance Reports",
		desc: "QR check-in rates, present vs absent ratios, and department turnout",
		icon: UserCheck,
		formatCount: "PDF, Excel, CSV",
		badge: "NAAC Ready"
	},
	{
		id: "cert",
		name: "Certificate Reports",
		desc: "Certificates generated, downloaded, pending, and student verification IDs",
		icon: Award,
		formatCount: "PDF, Excel, CSV",
		badge: "Automated"
	},
	{
		id: "fb",
		name: "Feedback Reports",
		desc: "Rating distributions, sentiment analysis, top rated events, and suggestions",
		icon: Star,
		formatCount: "PDF, Excel",
		badge: "Analytics"
	},
	{
		id: "dept",
		name: "Department Reports",
		desc: "Department event ownership, faculty lead performance, and club activity",
		icon: Building2,
		formatCount: "PDF, Excel, CSV",
		badge: "Governance"
	},
	{
		id: "org",
		name: "Organizer Reports",
		desc: "Organizer activity metrics, approval timelines, and submission rates",
		icon: Users,
		formatCount: "PDF, Excel",
		badge: "RBAC"
	},
	{
		id: "arch",
		name: "Archive Reports",
		desc: "Auto-archived events, archival timeline logs, SLA delay, and frozen summaries",
		icon: FolderArchive,
		formatCount: "PDF, Excel, CSV",
		badge: "Auto Expiry"
	}
];
function Reports() {
	const [dateRange, setDateRange] = (0, import_react.useState)("Last 30 Days");
	const [showGenerateModal, setShowGenerateModal] = (0, import_react.useState)(false);
	const [showScheduleModal, setShowScheduleModal] = (0, import_react.useState)(false);
	const [selectedReportType, setSelectedReportType] = (0, import_react.useState)("Event Reports");
	const [scheduleFrequency, setScheduleFrequency] = (0, import_react.useState)("Weekly");
	const { metrics } = usePlatformMetrics();
	const stats = (0, import_react.useMemo)(() => {
		return {
			totalReports: 164,
			eventsThisMonth: metrics.activeEvents + metrics.upcomingEvents + 28,
			registrations: metrics.totalRegistrations,
			attendanceRate: `${metrics.attendanceRate}%`,
			certsGenerated: metrics.certificatesGenerated,
			archivedEvents: metrics.archivedEvents,
			activeDepts: 8,
			platformGrowth: "+24%"
		};
	}, [metrics]);
	const handleExport = (reportName, formatType) => {
		if (formatType === "Print") {
			window.print();
			return;
		}
		const sampleData = "data:text/csv;charset=utf-8," + encodeURIComponent(`Report,Format,Date\n${reportName},${formatType},${(/* @__PURE__ */ new Date()).toISOString()}`);
		const link = document.createElement("a");
		link.setAttribute("href", sampleData);
		link.setAttribute("download", `${reportName.toLowerCase().replace(/\s+/g, "_")}_${dateRange.toLowerCase().replace(/\s+/g, "_")}.${formatType.toLowerCase()}`);
		link.click();
		toast.success(`Exported ${reportName} in ${formatType} format.`);
	};
	const handleGenerateSubmit = (e) => {
		e.preventDefault();
		handleExport(selectedReportType, "PDF");
		setShowGenerateModal(false);
	};
	const handleScheduleSubmit = (e) => {
		e.preventDefault();
		toast.success(`Scheduled ${selectedReportType} to deliver ${scheduleFrequency.toLowerCase()} to admin email.`);
		setShowScheduleModal(false);
	};
	const tooltipStyle = {
		borderRadius: 16,
		border: "1px solid var(--color-border)",
		background: "var(--color-card)",
		fontSize: 12
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reports & Analytics",
				subtitle: "Generate reports and monitor platform-wide performance, registrations, attendance, and archived events.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin",
						to: "/admin"
					},
					{ label: "Reports & Analytics" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						onClick: () => setShowScheduleModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "mr-1.5 size-4 text-primary" }), " Schedule Report"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl shadow-glow",
						onClick: () => setShowGenerateModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4" }), " Generate Report"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Platform Business Intelligence & Telemetry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "NAAC / NBA Export Ready"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Reports",
						value: stats.totalReports,
						icon: FileChartColumnIncreasing,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Events Month",
						value: stats.eventsThisMonth,
						icon: Layers,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Registrations",
						value: stats.registrations,
						icon: TrendingUp,
						tone: "primary",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Attendance",
						value: stats.attendanceRate,
						icon: UserCheck,
						tone: "success",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certs Generated",
						value: stats.certsGenerated,
						icon: Award,
						tone: "warning",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived Events",
						value: stats.archivedEvents,
						icon: FolderArchive,
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Depts",
						value: stats.activeDepts,
						icon: Building2,
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Growth",
						value: stats.platformGrowth,
						icon: Zap,
						tone: "success",
						index: 7
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Report Date Filtering & Quick Export",
				description: "Select timeframes for platform-wide data aggregation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-1.5",
						children: [
							"Today",
							"This Week",
							"This Month",
							"Last 30 Days",
							"Custom Date Range"
						].map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: dateRange === range ? "default" : "outline",
							size: "sm",
							onClick: () => {
								setDateRange(range);
								toast.info(`Updated report window to ${range}`);
							},
							className: "rounded-xl text-xs",
							children: range
						}, range))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground mr-1",
								children: "Download Format:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl text-xs bg-card",
								onClick: () => handleExport("Platform Summary", "PDF"),
								children: "PDF"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl text-xs bg-card",
								onClick: () => handleExport("Platform Summary", "Excel"),
								children: "Excel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl text-xs bg-card",
								onClick: () => handleExport("Platform Summary", "CSV"),
								children: "CSV"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl text-xs bg-card",
								onClick: () => handleExport("Platform Summary", "Print"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Available Report Suites"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: REPORT_CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lift-on-hover rounded-2xl border border-border bg-card p-5 space-y-3 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(cat.icon, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "rounded-full text-[10px] bg-primary-soft text-primary border-primary/20",
								children: cat.badge
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-base text-foreground mt-3",
							children: cat.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1 line-clamp-2",
							children: cat.desc
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t pt-3 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: cat.formatCount
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "h-8 rounded-xl text-xs bg-card",
							onClick: () => handleExport(cat.name, "PDF"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-3.5" }), " Export"]
						})]
					})]
				}, cat.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Dedicated Automatic Event Archiving Reports & Telemetry",
				description: "Comprehensive audit of automatically expired and archived campus events",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Total Auto-Archived"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-extrabold text-xl text-foreground mt-1",
									children: "412 Events"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Archival Success Rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-extrabold text-xl text-success mt-1",
									children: "100%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Average Archival Time"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-extrabold text-xl text-warning mt-1",
									children: "1.0 Hour"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Upcoming Queue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-extrabold text-xl text-primary mt-1",
									children: [archiveQueue().length, " Events"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-xs text-muted-foreground mb-2",
							children: "MONTHLY ARCHIVAL TREND"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: archivePerMonth,
									margin: {
										left: -20,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tickLine: false,
											axisLine: false,
											fontSize: 12,
											stroke: "var(--color-muted-foreground)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "archived",
											fill: "#8B5CF6",
											radius: [
												8,
												8,
												0,
												0
											]
										})
									]
								})
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-xs text-muted-foreground mb-2",
							children: "ARCHIVE SYSTEM LOGS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 text-xs",
							children: archiveLog.slice(0, 3).map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-xl border border-border bg-card p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "size-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-foreground",
											children: log.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: log.detail
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground mt-0.5",
											children: log.when
										})
									]
								})]
							}, log.id))
						})] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Monthly Registration & Attendance Growth",
					description: "Student engagement trajectory over time",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: monthlyStats,
								margin: {
									left: -20,
									right: 8,
									top: 8
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "repGrad",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#2563EB",
											stopOpacity: .35
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#2563EB",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "registrations",
										stroke: "#2563EB",
										strokeWidth: 2,
										fill: "url(#repGrad)"
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Attendance Rates by Department",
					description: "Actual check-in turnout percentages",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: departmentPerformance,
								margin: {
									left: -20,
									right: 8,
									top: 8
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "dept",
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "attendance",
										fill: "#22C55E",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Automatically Generated Platform Insights",
				description: "AI-driven highlights across departments and clubs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5 text-xs",
					children: [
						{
							title: "Most Popular Event",
							val: "HackFusion 2026",
							desc: "450 Registrations (100% Filled)",
							icon: Sparkles
						},
						{
							title: "Best Organizer",
							val: "Dr. Rajesh Verma",
							desc: "18 Events · 98% Rating",
							icon: Award
						},
						{
							title: "Highest Attendance",
							val: "Rhythm & Rangoli",
							desc: "96% Present Check-In Rate",
							icon: UserCheck
						},
						{
							title: "Fastest Growing Dept",
							val: "Computer Science",
							desc: "1,840 Signups (+32%)",
							icon: TrendingUp
						},
						{
							title: "Most Active Club",
							val: "Coding Club",
							desc: "14 Events Hosted This Term",
							icon: Globe
						}
					].map((ins) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 space-y-1.5 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ins.icon, { className: "size-5 text-primary mb-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-[10px] uppercase font-bold",
								children: ins.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-sm text-foreground line-clamp-1 mt-0.5",
								children: ins.val
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground mt-1",
								children: ins.desc
							})
						] })]
					}, ins.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showGenerateModal,
				onOpenChange: setShowGenerateModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: "Generate Custom Report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Select parameters to bundle and download instant analytics." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleGenerateSubmit,
						className: "space-y-4 py-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Report Suite"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedReportType,
									onValueChange: setSelectedReportType,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
										className: "rounded-2xl",
										children: REPORT_CATEGORIES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: r.name,
											children: r.name
										}, r.name))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Timeframe"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: dateRange,
									onValueChange: setDateRange,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
										className: "rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Today",
												children: "Today"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "This Week",
												children: "This Week"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "This Month",
												children: "This Month"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Last 30 Days",
												children: "Last 30 Days"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Custom Date Range",
												children: "Custom Date Range"
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									type: "button",
									onClick: () => setShowGenerateModal(false),
									className: "rounded-xl",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl shadow-glow",
									children: "Download PDF Report"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showScheduleModal,
				onOpenChange: setShowScheduleModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: "Schedule Recurring Report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Automate automated report delivery directly to your inbox." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleScheduleSubmit,
						className: "space-y-4 py-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Report Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedReportType,
									onValueChange: setSelectedReportType,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
										className: "rounded-2xl",
										children: REPORT_CATEGORIES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: r.name,
											children: r.name
										}, r.name))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Delivery Frequency"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: scheduleFrequency,
									onValueChange: setScheduleFrequency,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
										className: "rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Daily",
												children: "Daily at Midnight"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Weekly",
												children: "Weekly (Monday 8 AM)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: "Monthly",
												children: "Monthly (1st Day)"
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									type: "button",
									onClick: () => setShowScheduleModal(false),
									className: "rounded-xl",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl shadow-glow",
									children: "Schedule Delivery"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
var Route$8 = createFileRoute("/_app/admin/settings")({
	head: () => ({ meta: [
		{ title: "System Settings — CampusPulse" },
		{
			name: "description",
			content: "Configure platform settings, event lifecycle rules, notifications, security, and integrations."
		},
		{
			property: "og:title",
			content: "System Settings — CampusPulse"
		},
		{
			property: "og:description",
			content: "Administrative settings console for university platform governance."
		}
	] }),
	component: PlatformSettings
});
var CATEGORIES = [
	{
		id: "general",
		label: "General",
		icon: Settings
	},
	{
		id: "branding",
		label: "Branding",
		icon: Palette
	},
	{
		id: "event",
		label: "Event Settings",
		icon: Layers
	},
	{
		id: "notification",
		label: "Notification Settings",
		icon: Bell
	},
	{
		id: "user",
		label: "User Management",
		icon: Users
	},
	{
		id: "archive",
		label: "Archive Settings",
		icon: FolderArchive,
		badge: "Core Rule"
	},
	{
		id: "security",
		label: "Security",
		icon: ShieldCheck
	},
	{
		id: "integrations",
		label: "Integrations",
		icon: Cloud,
		badge: "Firebase"
	},
	{
		id: "backup",
		label: "Backup & Restore",
		icon: Database
	},
	{
		id: "audit",
		label: "Audit Logs",
		icon: History
	}
];
var AUDIT_LOGS_MOCK = [
	{
		id: "log1",
		action: "Archive SLA Changed",
		user: "Admin (Dr. Rajesh)",
		ip: "192.168.1.45",
		timestamp: "Today, 11:15 AM",
		details: "Updated archive delay to 1.0 hour post event end"
	},
	{
		id: "log2",
		action: "Notification Enabled",
		user: "Admin (Priya Nair)",
		ip: "192.168.1.12",
		timestamp: "Today, 09:30 AM",
		details: "Enabled automatic certificate release emails"
	},
	{
		id: "log3",
		action: "Department Added",
		user: "Super Admin",
		ip: "192.168.1.01",
		timestamp: "Yesterday, 04:20 PM",
		details: "Added School of Design & Media"
	},
	{
		id: "log4",
		action: "Admin Login",
		user: "Admin (Dr. Rajesh)",
		ip: "192.168.1.45",
		timestamp: "Yesterday, 09:00 AM",
		details: "Successful 2FA login session initiated"
	}
];
function PlatformSettings() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("general");
	const [hasChanges, setHasChanges] = (0, import_react.useState)(false);
	const [platformName, setPlatformName] = (0, import_react.useState)("CampusPulse");
	const [platformDesc, setPlatformDesc] = (0, import_react.useState)("Centralized University Event Announcement & Expiry Governance System");
	const [institutionName, setInstitutionName] = (0, import_react.useState)("Sri Vidya Institute of Technology");
	const [academicYear, setAcademicYear] = (0, import_react.useState)("2025-26");
	const [timeZone, setTimeZone] = (0, import_react.useState)("Asia/Kolkata (IST)");
	const [language, setLanguage] = (0, import_react.useState)("English (US)");
	const [dateFormat, setDateFormat] = (0, import_react.useState)("DD/MM/YYYY");
	const [supportEmail, setSupportEmail] = (0, import_react.useState)("support@campus.edu");
	const [primaryColor, setPrimaryColor] = (0, import_react.useState)("#2563EB");
	const [secondaryColor, setSecondaryColor] = (0, import_react.useState)("#64748B");
	const [accentColor, setAccentColor] = (0, import_react.useState)("#22C55E");
	const [maxParticipants, setMaxParticipants] = (0, import_react.useState)("500");
	const [approvalRequired, setApprovalRequired] = (0, import_react.useState)(true);
	const [allowWaitlist, setAllowWaitlist] = (0, import_react.useState)(true);
	const [certEnabledDefault, setCertEnabledDefault] = (0, import_react.useState)(true);
	const [feedbackEnabledDefault, setFeedbackEnabledDefault] = (0, import_react.useState)(true);
	const [qrCheckinEnabled, setQrCheckinEnabled] = (0, import_react.useState)(true);
	const [emailNotifs, setEmailNotifs] = (0, import_react.useState)(true);
	const [inAppNotifs, setInAppNotifs] = (0, import_react.useState)(true);
	const [pushNotifs, setPushNotifs] = (0, import_react.useState)(false);
	const [regConfirmations, setRegConfirmations] = (0, import_react.useState)(true);
	const [eventReminders, setEventReminders] = (0, import_react.useState)(true);
	const [archiveNotifs, setArchiveNotifs] = (0, import_react.useState)(true);
	const [autoArchivingEnabled, setAutoArchivingEnabled] = (0, import_react.useState)(true);
	const [archiveDelay, setArchiveDelay] = (0, import_react.useState)("1.0");
	const [autoCloseRegAtStart, setAutoCloseRegAtStart] = (0, import_react.useState)(true);
	const [autoHideExpired, setAutoHideExpired] = (0, import_react.useState)(true);
	const [keepCertsAvailable, setKeepCertsAvailable] = (0, import_react.useState)(true);
	const [keepReportsAvailable, setKeepReportsAvailable] = (0, import_react.useState)(true);
	const [retentionPeriod, setRetentionPeriod] = (0, import_react.useState)("5 Years");
	const [twoFactorAuth, setTwoFactorAuth] = (0, import_react.useState)(true);
	const [passwordStrength, setPasswordStrength] = (0, import_react.useState)("Strong (Min 8 chars, 1 Special)");
	const [maxLoginAttempts, setMaxLoginAttempts] = (0, import_react.useState)("5");
	const [sessionTimeout, setSessionTimeout] = (0, import_react.useState)("30 Minutes");
	const [showRestoreModal, setShowRestoreModal] = (0, import_react.useState)(false);
	const handleSaveAll = () => {
		setHasChanges(false);
		toast.success("System Settings saved and applied successfully across all modules.");
	};
	const handleReset = () => {
		setHasChanges(false);
		toast.info("System settings restored to default baseline.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "System Settings",
				subtitle: "Configure platform settings, event lifecycle rules, notifications, security, and integrations.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin",
						to: "/admin"
					},
					{ label: "System Settings" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						onClick: handleReset,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 size-4 text-muted-foreground" }), " Reset Defaults"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl shadow-glow",
						onClick: handleSaveAll,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-1.5 size-4" }), " Save Changes"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[260px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 rounded-2xl border border-border bg-card p-3 h-fit",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
						children: "Settings Navigation"
					}), CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActiveCategory(cat.id),
						className: cn("w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all", activeCategory === cat.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(cat.icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label })]
						}), cat.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: cn("rounded-full text-[9px] px-2 py-0", activeCategory === cat.id ? "bg-white/20 text-white border-transparent" : "bg-primary-soft text-primary border-primary/20"),
							children: cat.badge
						})]
					}, cat.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						activeCategory === "general" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "General Platform Information",
							description: "Identity and regional configuration for CampusPulse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Platform Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: platformName,
											onChange: (e) => {
												setPlatformName(e.target.value);
												setHasChanges(true);
											},
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Institution Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: institutionName,
											onChange: (e) => {
												setInstitutionName(e.target.value);
												setHasChanges(true);
											},
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Platform Description"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											value: platformDesc,
											onChange: (e) => {
												setPlatformDesc(e.target.value);
												setHasChanges(true);
											},
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Academic Year"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: academicYear,
											onValueChange: (v) => {
												setAcademicYear(v);
												setHasChanges(true);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												className: "rounded-2xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "2024-25",
													children: "2024–25"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "2025-26",
													children: "2025–26"
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Default Time Zone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: timeZone,
											onChange: (e) => {
												setTimeZone(e.target.value);
												setHasChanges(true);
											},
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Support Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: supportEmail,
											onChange: (e) => {
												setSupportEmail(e.target.value);
												setHasChanges(true);
											},
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Date Format"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: dateFormat,
											onValueChange: (v) => {
												setDateFormat(v);
												setHasChanges(true);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												className: "rounded-2xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "DD/MM/YYYY",
													children: "DD/MM/YYYY"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "MM/DD/YYYY",
													children: "MM/DD/YYYY"
												})]
											})]
										})]
									})
								]
							})
						}),
						activeCategory === "branding" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Visual Branding & Color Palette",
							description: "Customize university theme and logos",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-dashed border-border p-4 text-center space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground",
													children: "Platform Logo"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-16 mx-auto rounded-2xl bg-primary-soft text-primary grid place-items-center font-bold text-lg",
													children: "CP"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "outline",
													className: "rounded-xl text-[11px]",
													onClick: () => toast.info("Upload logo file selected."),
													children: "Upload Logo"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-dashed border-border p-4 text-center space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground",
													children: "Favicon Icon"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-12 mx-auto rounded-xl bg-secondary grid place-items-center font-bold text-xs",
													children: "⚡"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "outline",
													className: "rounded-xl text-[11px]",
													onClick: () => toast.info("Upload favicon selected."),
													children: "Upload Favicon"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border bg-card p-4 space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-foreground",
													children: "Theme Palette Preview"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full bg-primary inline-block" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full bg-success inline-block" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full bg-warning inline-block" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full bg-danger inline-block" })
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "White-First SaaS Theme System"
												})
											]
										})
									]
								})
							})
						}),
						activeCategory === "event" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Default Event Rules & Governance",
							description: "Global defaults applied when organizers publish events",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-semibold",
												children: "Maximum Capacity Default"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: maxParticipants,
												onChange: (e) => {
													setMaxParticipants(e.target.value);
													setHasChanges(true);
												},
												className: "rounded-xl"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-semibold",
												children: "Approval SLA Window"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												defaultValue: "24 Hours",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "rounded-xl",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
													className: "rounded-2xl",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "12 Hours",
															children: "12 Hours"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "24 Hours",
															children: "24 Hours"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "48 Hours",
															children: "48 Hours"
														})
													]
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: [
											{
												label: "Require Admin Approval Before Publishing",
												desc: "Blocks events from public feed until approved by admin",
												state: approvalRequired,
												set: setApprovalRequired
											},
											{
												label: "Enable Automated Waitlist Queue",
												desc: "Automatically moves new registrations to waitlist when seats fill",
												state: allowWaitlist,
												set: setAllowWaitlist
											},
											{
												label: "Enable Certificate Generation by Default",
												desc: "Automatically issues verified certificates post attendance lock",
												state: certEnabledDefault,
												set: setCertEnabledDefault
											},
											{
												label: "Enable Participant QR Code Check-In",
												desc: "Generates unique student check-in QR pass for organizers",
												state: qrCheckinEnabled,
												set: setQrCheckinEnabled
											}
										].map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-xl border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-foreground",
												children: rule.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: rule.desc
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: rule.state,
												onCheckedChange: (val) => {
													rule.set(val);
													setHasChanges(true);
												}
											})]
										}, rule.label))
									})
								]
							})
						}),
						activeCategory === "notification" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Notification & Channel Preferences",
							description: "Configure global communication alerts for students and organizers",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 text-xs",
								children: [
									{
										label: "Email Notifications",
										desc: "Send event registration and approval confirmation via email",
										state: emailNotifs,
										set: setEmailNotifs
									},
									{
										label: "In-App Notification Center",
										desc: "Deliver live alert badges inside user dashboard",
										state: inAppNotifs,
										set: setInAppNotifs
									},
									{
										label: "Browser Push Notifications",
										desc: "Web push notifications for upcoming live events",
										state: pushNotifs,
										set: setPushNotifs
									},
									{
										label: "Automatic Event Archiving Alerts",
										desc: "Notify organizers when an event is automatically archived",
										state: archiveNotifs,
										set: setArchiveNotifs
									}
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: n.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: n.desc
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: n.state,
										onCheckedChange: (val) => {
											n.set(val);
											setHasChanges(true);
										}
									})]
								}, n.label))
							})
						}),
						activeCategory === "user" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Default Roles & Access Controls",
							description: "Configure registration policies and default RBAC roles",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Default Student Role"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: "Student Participant",
											disabled: true,
											className: "rounded-xl bg-secondary/40"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Default Organizer Role"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: "Club / Faculty Lead",
											disabled: true,
											className: "rounded-xl bg-secondary/40"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Allowed Email Domain"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											defaultValue: "@campus.edu",
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Account Verification Policy"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											defaultValue: "Email Verification Required",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												className: "rounded-2xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Email Verification Required",
													children: "Email Verification Required"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Instant Approval",
													children: "Instant Approval"
												})]
											})]
										})]
									})
								]
							})
						}),
						activeCategory === "archive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Automatic Event Expiry & Archiving Rules",
							description: "Configure the core automated lifecycle daemon for campus announcements",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-primary/20 bg-primary-soft/40 p-4 space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-primary font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live Automatic Expiry Workflow Diagram" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-2 sm:grid-cols-5 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-card p-2 border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground block",
														children: "1. Event End"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground mt-0.5",
														children: "End Datetime"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-card p-2 border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground block",
														children: "2. SLA Grace"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-warning mt-0.5",
														children: "+1.0 Hour"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-card p-2 border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground block",
														children: "3. Daemon Exec"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-primary mt-0.5",
														children: "Auto-Archive"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-card p-2 border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground block",
														children: "4. Feed Filter"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-foreground mt-0.5",
														children: "Hidden Feed"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-card p-2 border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground block",
														children: "5. Certificates"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-bold text-success mt-0.5",
														children: "Frozen & Kept"
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-semibold",
												children: "Archive Delay After Event Ends"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: archiveDelay,
												onValueChange: (v) => {
													setArchiveDelay(v);
													setHasChanges(true);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "rounded-xl",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
													className: "rounded-2xl",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "0.5",
															children: "30 Minutes Post End"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "1.0",
															children: "1 Hour Post End (Recommended)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "2.0",
															children: "2 Hours Post End"
														})
													]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-semibold",
												children: "Data Retention Period"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: retentionPeriod,
												onValueChange: (v) => {
													setRetentionPeriod(v);
													setHasChanges(true);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "rounded-xl",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
													className: "rounded-2xl",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "3 Years",
															children: "3 Years"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "5 Years",
															children: "5 Years (NAAC Standard)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Permanent",
															children: "Permanent Archival"
														})
													]
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: [
											{
												label: "Automatic Event Archiving Daemon Enabled",
												desc: "Runs background check every 5 mins to auto-expire past events",
												state: autoArchivingEnabled,
												set: setAutoArchivingEnabled
											},
											{
												label: "Automatically Close Registrations at Event Start",
												desc: "Locks student registration forms as soon as event starts",
												state: autoCloseRegAtStart,
												set: setAutoCloseRegAtStart
											},
											{
												label: "Automatically Hide Expired Announcements",
												desc: "Removes ended events from public student announcement feed",
												state: autoHideExpired,
												set: setAutoHideExpired
											},
											{
												label: "Keep Certificates Available Post-Archival",
												desc: "Ensures students can claim certificates even after event is archived",
												state: keepCertsAvailable,
												set: setKeepCertsAvailable
											},
											{
												label: "Keep NAAC Reports Available Post-Archival",
												desc: "Preserves event logs for accreditation audits",
												state: keepReportsAvailable,
												set: setKeepReportsAvailable
											}
										].map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-xl border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-foreground",
												children: rule.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: rule.desc
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: rule.state,
												onCheckedChange: (val) => {
													rule.set(val);
													setHasChanges(true);
												}
											})]
										}, rule.label))
									})
								]
							})
						}),
						activeCategory === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Security & Authentication Controls",
							description: "Configure 2FA, session expiry, and login policies",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Enforce Two-Factor Authentication (2FA) for Admins"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Requires OTP verification for all administrative actions"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: twoFactorAuth,
										onCheckedChange: (val) => {
											setTwoFactorAuth(val);
											setHasChanges(true);
										}
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Max Login Attempts"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: maxLoginAttempts,
											onChange: (e) => {
												setMaxLoginAttempts(e.target.value);
												setHasChanges(true);
											},
											className: "rounded-xl"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Session Timeout"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: sessionTimeout,
											onValueChange: (v) => {
												setSessionTimeout(v);
												setHasChanges(true);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
												className: "rounded-2xl",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "15 Minutes",
														children: "15 Minutes"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "30 Minutes",
														children: "30 Minutes"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "1 Hour",
														children: "1 Hour"
													})
												]
											})]
										})]
									})]
								})]
							})
						}),
						activeCategory === "integrations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "Third-Party Integrations & Cloud Services",
							description: "Connect Firebase, Google Workspace, and Email services",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2 text-xs",
								children: [
									{
										name: "Firebase Auth & Firestore",
										desc: "User authentication, realtime event database, and rule security",
										icon: Cloud,
										status: "Connected",
										tone: "bg-success-soft text-success"
									},
									{
										name: "Google Calendar Sync",
										desc: "Sync event schedules directly to student Google Calendars",
										icon: Calendar,
										status: "Configured",
										tone: "bg-success-soft text-success"
									},
									{
										name: "SendGrid Email API",
										desc: "Automated event confirmation and certificate email delivery",
										icon: Mail,
										status: "Configured",
										tone: "bg-success-soft text-success"
									},
									{
										name: "Twilio SMS Service",
										desc: "Urgent SMS announcement alerts for campus emergencies",
										icon: MessageSquare,
										status: "Disconnected",
										tone: "bg-secondary text-muted-foreground"
									}
								].map((ig) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-4 space-y-2 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ig.icon, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: cn("rounded-full text-[10px]", ig.tone),
												children: ig.status
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-sm text-foreground mt-2",
											children: ig.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mt-0.5",
											children: ig.desc
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "h-8 rounded-xl text-xs mt-2 bg-card",
										onClick: () => toast.info(`Configuring ${ig.name}...`),
										children: "Configure"
									})]
								}, ig.name))
							})
						}),
						activeCategory === "backup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "System Backup & Data Recovery",
							description: "Manage automated backups and restore points",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4 text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-2xl border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-sm text-foreground",
										children: "Master System Backup"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[11px]",
										children: "Last Backup: Today at 04:00 AM (Size: 42.8 MB)"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "rounded-xl text-xs bg-card",
											onClick: () => setShowRestoreModal(true),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "mr-1 size-3.5" }), " Restore"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											className: "rounded-xl text-xs shadow-glow",
											onClick: () => toast.success("Instant system backup created successfully."),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudDownload, { className: "mr-1 size-3.5" }), " Create Backup Now"]
										})]
									})]
								})
							})
						}),
						activeCategory === "audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
							title: "System Activity Audit Log",
							description: "Recent administrative actions and configuration changes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded-2xl border border-border bg-card text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
									className: "bg-secondary/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Action" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Admin User" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "IP Address" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Timestamp" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Details" })
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: AUDIT_LOGS_MOCK.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "font-bold text-foreground",
										children: log.action
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: log.user }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "font-mono text-[11px]",
										children: log.ip
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: log.timestamp }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-muted-foreground",
										children: log.details
									})
								] }, log.id)) })] })
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showRestoreModal,
				onOpenChange: setShowRestoreModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold",
							children: "Restore System Backup"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Select a backup ZIP/JSON file to restore system state." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3 py-2 text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-dashed border-border p-6 text-center space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-8 mx-auto text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Drag & drop backup file here"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Supported formats: .zip, .json"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "rounded-xl text-xs bg-card",
										onClick: () => toast.info("File picker opened."),
										children: "Browse Files"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setShowRestoreModal(false),
							className: "rounded-xl text-xs",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "rounded-xl text-xs shadow-glow",
							onClick: () => {
								toast.success("Backup restored successfully.");
								setShowRestoreModal(false);
							},
							children: "Confirm Restore"
						})] })
					]
				})
			})
		]
	});
}
var Route$7 = createFileRoute("/_app/admin/users")({
	head: () => ({ meta: [
		{ title: "User Management — CampusPulse" },
		{
			name: "description",
			content: "Manage students, organizers, administrators, roles, and permissions from one centralized workspace."
		},
		{
			property: "og:title",
			content: "User Management — CampusPulse"
		},
		{
			property: "og:description",
			content: "Platform user directory, RBAC roles, and account status controls."
		}
	] }),
	component: UserManagement
});
var EXTENDED_USERS = [
	{
		id: "u1",
		userId: "USR-1001",
		name: "Aarav Sharma",
		email: "aarav.s@campus.edu",
		phone: "+91 98765 43210",
		dept: "Computer Science",
		year: "3rd Year",
		role: "Student",
		status: "Active",
		createdDate: "2024-08-15",
		lastLogin: "10 mins ago",
		registeredEventsCount: 14,
		certificatesCount: 8,
		attendanceRate: "94%",
		avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
		assignedEvents: [
			"AI Builders Summit 2026",
			"Campus Hackathon 2026",
			"Robotics Workshop"
		],
		activityHistory: [
			{
				action: "Registered for AI Builders Summit 2026",
				time: "10 mins ago",
				type: "Registered Event"
			},
			{
				action: "Downloaded Certificate for Web Dev Bootcamp",
				time: "2 days ago",
				type: "Downloaded Certificate"
			},
			{
				action: "Logged in via Google Authentication",
				time: "3 days ago",
				type: "Logged In"
			}
		]
	},
	{
		id: "u2",
		userId: "USR-1002",
		name: "Dr. Rajesh Verma",
		email: "rajesh.v@campus.edu",
		phone: "+91 98765 43211",
		dept: "Computer Science",
		year: "Faculty",
		role: "Organizer",
		status: "Active",
		createdDate: "2023-01-10",
		lastLogin: "1 hour ago",
		registeredEventsCount: 42,
		certificatesCount: 0,
		attendanceRate: "98%",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
		assignedEvents: ["AI Builders Summit 2026", "System Design Masterclass"],
		activityHistory: [{
			action: "Created AI Builders Summit 2026",
			time: "1 hour ago",
			type: "Created Event"
		}, {
			action: "Approved 48 Registrations",
			time: "3 hours ago",
			type: "Updated Profile"
		}]
	},
	{
		id: "u3",
		userId: "USR-1003",
		name: "Sneha Pillai",
		email: "sneha.p@campus.edu",
		phone: "+91 98765 43212",
		dept: "Design",
		year: "2nd Year",
		role: "Student",
		status: "Active",
		createdDate: "2024-09-01",
		lastLogin: "3 hours ago",
		registeredEventsCount: 9,
		certificatesCount: 5,
		attendanceRate: "88%",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
		assignedEvents: ["Rhythm & Rangoli Fest", "UI/UX Design Sprint"],
		activityHistory: [{
			action: "Checked in at Rhythm & Rangoli Fest",
			time: "3 hours ago",
			type: "Logged In"
		}]
	},
	{
		id: "u4",
		userId: "USR-1004",
		name: "Priya Nair",
		email: "priya.n@campus.edu",
		phone: "+91 98765 43213",
		dept: "Administration",
		year: "Admin Staff",
		role: "Admin",
		status: "Active",
		createdDate: "2022-05-12",
		lastLogin: "Just now",
		registeredEventsCount: 120,
		certificatesCount: 0,
		attendanceRate: "100%",
		avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
		assignedEvents: ["Governance Review 2026"],
		activityHistory: [{
			action: "Approved event queue batch #402",
			time: "Just now",
			type: "Created Event"
		}, {
			action: "Updated user role for Dr. Verma",
			time: "Yesterday",
			type: "Updated Profile"
		}]
	},
	{
		id: "u5",
		userId: "USR-1005",
		name: "Rohit Das",
		email: "rohit.d@campus.edu",
		phone: "+91 98765 43214",
		dept: "Mechanical Engineering",
		year: "3rd Year",
		role: "Student",
		status: "Suspended",
		createdDate: "2024-07-20",
		lastLogin: "3 days ago",
		registeredEventsCount: 3,
		certificatesCount: 1,
		attendanceRate: "50%",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
		assignedEvents: ["AutoCAD Workshop"],
		activityHistory: [{
			action: "Account suspended due to policy violation",
			time: "3 days ago",
			type: "Updated Profile"
		}]
	},
	{
		id: "u6",
		userId: "USR-1006",
		name: "Tanya Bose",
		email: "tanya.b@campus.edu",
		phone: "+91 98765 43215",
		dept: "Information Technology",
		year: "1st Year",
		role: "Student",
		status: "Pending",
		createdDate: "2026-07-27",
		lastLogin: "Never",
		registeredEventsCount: 1,
		certificatesCount: 0,
		attendanceRate: "0%",
		avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
		assignedEvents: ["Freshers Orientation 2026"],
		activityHistory: [{
			action: "Student account created awaiting email verification",
			time: "1 day ago",
			type: "Registered Event"
		}]
	},
	{
		id: "u7",
		userId: "USR-1007",
		name: "Prof. Vikram Seth",
		email: "vikram.s@campus.edu",
		phone: "+91 98765 43216",
		dept: "Information Technology",
		year: "Faculty",
		role: "Organizer",
		status: "Active",
		createdDate: "2023-03-14",
		lastLogin: "5 hours ago",
		registeredEventsCount: 28,
		certificatesCount: 0,
		attendanceRate: "95%",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
		assignedEvents: ["System Design Bootcamp", "Cloud Computing Summit"],
		activityHistory: [{
			action: "Created System Design Bootcamp",
			time: "5 hours ago",
			type: "Created Event"
		}]
	},
	{
		id: "u8",
		userId: "USR-1008",
		name: "Ananya Gupta",
		email: "ananya.g@campus.edu",
		phone: "+91 98765 43217",
		dept: "Civil Engineering",
		year: "4th Year",
		role: "Student",
		status: "Inactive",
		createdDate: "2023-08-10",
		lastLogin: "2 weeks ago",
		registeredEventsCount: 18,
		certificatesCount: 12,
		attendanceRate: "90%",
		avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
		assignedEvents: ["Structural CAD Expo"],
		activityHistory: [{
			action: "Logged in",
			time: "2 weeks ago",
			type: "Logged In"
		}]
	},
	{
		id: "u9",
		userId: "USR-1009",
		name: "Devendra Patel",
		email: "devendra.p@campus.edu",
		phone: "+91 98765 43218",
		dept: "Electrical Engineering",
		year: "4th Year",
		role: "Student",
		status: "Blocked",
		createdDate: "2023-09-12",
		lastLogin: "1 month ago",
		registeredEventsCount: 4,
		certificatesCount: 2,
		attendanceRate: "40%",
		avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
		assignedEvents: ["Robo Wars 2025"],
		activityHistory: [{
			action: "Account blocked by administrator for unauthorized access attempt",
			time: "1 month ago",
			type: "Updated Profile"
		}]
	}
];
function UserManagement() {
	const [userList, setUserList] = (0, import_react.useState)(EXTENDED_USERS);
	const [viewMode, setViewMode] = (0, import_react.useState)("table");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("All");
	const [deptFilter, setDeptFilter] = (0, import_react.useState)("All");
	const [yearFilter, setYearFilter] = (0, import_react.useState)("All");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [sortBy, setSortBy] = (0, import_react.useState)("Newest");
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [activeProfileUser, setActiveProfileUser] = (0, import_react.useState)(null);
	const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
	const [editingUser, setEditingUser] = (0, import_react.useState)(null);
	const [actionModal, setActionModal] = (0, import_react.useState)({
		type: null,
		user: null
	});
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		dept: "Computer Science",
		year: "1st Year",
		role: "Student",
		status: "Active"
	});
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: userList.length * 156,
			students: userList.filter((u) => u.role === "Student").length * 150,
			organizers: userList.filter((u) => u.role === "Organizer").length * 20,
			admins: userList.filter((u) => u.role === "Admin").length * 4,
			active: userList.filter((u) => u.status === "Active").length * 150,
			inactive: userList.filter((u) => u.status === "Inactive").length * 20,
			suspended: userList.filter((u) => u.status === "Suspended").length * 5,
			blocked: userList.filter((u) => u.status === "Blocked").length * 3,
			pending: userList.filter((u) => u.status === "Pending").length * 6
		};
	}, [userList]);
	const filteredUsers = (0, import_react.useMemo)(() => {
		return userList.filter((u) => {
			const matchesSearch = !searchTerm.trim() || u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()) || u.userId.toLowerCase().includes(searchTerm.toLowerCase()) || u.dept.toLowerCase().includes(searchTerm.toLowerCase()) || u.phone.includes(searchTerm);
			const matchesRole = roleFilter === "All" || u.role === roleFilter;
			const matchesDept = deptFilter === "All" || u.dept === deptFilter;
			const matchesYear = yearFilter === "All" || u.year.includes(yearFilter);
			const matchesStatus = statusFilter === "All" || u.status === statusFilter;
			return matchesSearch && matchesRole && matchesDept && matchesYear && matchesStatus;
		}).sort((a, b) => {
			if (sortBy === "Newest") return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
			if (sortBy === "Oldest") return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime();
			if (sortBy === "Name") return a.name.localeCompare(b.name);
			if (sortBy === "Department") return a.dept.localeCompare(b.dept);
			if (sortBy === "Role") return a.role.localeCompare(b.role);
			if (sortBy === "Status") return a.status.localeCompare(b.status);
			return 0;
		});
	}, [
		userList,
		searchTerm,
		roleFilter,
		deptFilter,
		yearFilter,
		statusFilter,
		sortBy
	]);
	const toggleSelectAll = () => {
		if (selectedIds.length === filteredUsers.length) setSelectedIds([]);
		else setSelectedIds(filteredUsers.map((u) => u.id));
	};
	const toggleSelectId = (id) => {
		if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter((x) => x !== id));
		else setSelectedIds([...selectedIds, id]);
	};
	const handleBulkAction = (action) => {
		if (selectedIds.length === 0) {
			toast.warning("Please select at least one user first.");
			return;
		}
		if (action === "export") {
			toast.success(`Exporting ${selectedIds.length} selected users to CSV...`);
			return;
		}
		if (action === "delete") {
			setUserList((prev) => prev.filter((u) => !selectedIds.includes(u.id)));
			toast.success(`Deleted ${selectedIds.length} user accounts.`);
		} else {
			const newStatus = {
				activate: "Active",
				deactivate: "Inactive",
				suspend: "Suspended"
			}[action];
			setUserList((prev) => prev.map((u) => selectedIds.includes(u.id) ? {
				...u,
				status: newStatus
			} : u));
			toast.success(`Updated ${selectedIds.length} users to status: ${newStatus}.`);
		}
		setSelectedIds([]);
	};
	const handleOpenAddModal = () => {
		setEditingUser(null);
		setFormData({
			name: "",
			email: "",
			phone: "+91 98765 00000",
			dept: "Computer Science",
			year: "1st Year",
			role: "Student",
			status: "Active"
		});
		setShowAddModal(true);
	};
	const handleOpenEditModal = (user) => {
		setEditingUser(user);
		setFormData({
			name: user.name,
			email: user.email,
			phone: user.phone,
			dept: user.dept,
			year: user.year,
			role: user.role,
			status: user.status
		});
		setShowAddModal(true);
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!formData.name.trim() || !formData.email.trim()) {
			toast.error("Please provide both Full Name and Email Address.");
			return;
		}
		if (editingUser) {
			setUserList((prev) => prev.map((u) => u.id === editingUser.id ? {
				...u,
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				dept: formData.dept,
				year: formData.year,
				role: formData.role,
				status: formData.status,
				activityHistory: [{
					action: `Profile updated by Admin`,
					time: "Just now",
					type: "Updated Profile"
				}, ...u.activityHistory]
			} : u));
			toast.success(`Updated user profile for ${formData.name}.`);
		} else {
			const newRecord = {
				id: `u-${Date.now()}`,
				userId: `USR-${Math.floor(1e3 + Math.random() * 9e3)}`,
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				dept: formData.dept,
				year: formData.year,
				role: formData.role,
				status: formData.status,
				createdDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
				lastLogin: "Just created",
				registeredEventsCount: 0,
				certificatesCount: 0,
				attendanceRate: "100%",
				avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
				assignedEvents: [],
				activityHistory: [{
					action: `User account created by Administrator`,
					time: "Just now",
					type: "Updated Profile"
				}]
			};
			setUserList([newRecord, ...userList]);
			toast.success(`User "${newRecord.name}" created successfully as ${newRecord.role}.`);
		}
		setShowAddModal(false);
	};
	const handleRoleChange = (user, newRole) => {
		setUserList((prev) => prev.map((u) => u.id === user.id ? {
			...u,
			role: newRole
		} : u));
		toast.success(`Changed ${user.name}'s role to ${newRole}.`);
	};
	const handleExecuteActionModal = () => {
		const { type, user } = actionModal;
		if (!user || !type) return;
		if (type === "delete") {
			setUserList((prev) => prev.filter((u) => u.id !== user.id));
			toast.success(`Permanently deleted user ${user.name}.`);
		} else {
			const newStatus = {
				activate: "Active",
				deactivate: "Inactive",
				suspend: "Suspended",
				block: "Blocked"
			}[type];
			setUserList((prev) => prev.map((u) => u.id === user.id ? {
				...u,
				status: newStatus
			} : u));
			toast.success(`Updated ${user.name}'s status to ${newStatus}.`);
		}
		setActionModal({
			type: null,
			user: null
		});
	};
	const handleExport = (formatType) => {
		toast.success(`Exporting User Directory to ${formatType}... File download initiated.`);
	};
	const handleImportCSV = () => {
		toast.info("Import CSV Modal: Select a CSV file with columns (Name, Email, Role, Department, Phone) to bulk import users.");
	};
	const renderStatusBadge = (status) => {
		switch (status) {
			case "Active": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				className: "rounded-full bg-success text-success-foreground font-semibold text-[10px]",
				children: "Active"
			});
			case "Inactive": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "secondary",
				className: "rounded-full font-semibold text-[10px]",
				children: "Inactive"
			});
			case "Suspended": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "destructive",
				className: "rounded-full font-semibold text-[10px]",
				children: "Suspended"
			});
			case "Blocked": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				className: "rounded-full bg-slate-900 text-white font-semibold text-[10px]",
				children: "Blocked"
			});
			case "Pending": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: "rounded-full border-warning/40 bg-warning-soft text-warning font-semibold text-[10px]",
				children: "Pending"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "User Management",
				subtitle: "Manage students, organizers, administrators, roles, permissions, and status controls.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Admin",
						to: "/admin"
					},
					{ label: "User Management" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "rounded-xl bg-card text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-3.5" }),
									" Export ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 size-3 rotate-90" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "rounded-2xl w-40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => handleExport("CSV"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-2 size-4" }), " Export CSV"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => handleExport("Excel"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "mr-2 size-4" }), " Export Excel"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									onClick: () => handleExport("PDF"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "mr-2 size-4" }), " Export PDF"]
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "rounded-xl bg-card text-xs",
							onClick: handleImportCSV,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-1.5 size-3.5" }), " Import CSV"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl shadow-glow text-xs font-semibold",
							onClick: handleOpenAddModal,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1.5 size-4" }), " Add User"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "User Telemetry & Role Accounts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-6 rounded-lg text-[10px] text-muted-foreground",
						onClick: () => {
							setIsLoading(true);
							setTimeout(() => setIsLoading(false), 600);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-1 size-3" }), " Simulate Load"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "rounded-full text-[10px] bg-card",
						children: "RBAC v2.4 Enabled"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Users",
						value: stats.total,
						icon: Users,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Students",
						value: stats.students,
						icon: Users,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Organizers",
						value: stats.organizers,
						icon: UserCheck,
						tone: "success",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Admins",
						value: stats.admins,
						icon: ShieldCheck,
						tone: "warning",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active",
						value: stats.active,
						icon: UserCheck,
						tone: "success",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Inactive",
						value: stats.inactive,
						icon: UserMinus,
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Suspended",
						value: stats.suspended,
						icon: UserX,
						tone: "danger",
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending",
						value: stats.pending,
						icon: Hourglass,
						tone: "warning",
						index: 7
					})
				]
			})] }),
			selectedIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/30 bg-primary-soft/40 p-4 shadow-lg animate-in fade-in slide-in-from-top-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-xs",
						children: selectedIds.length
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-foreground",
						children: "Users Selected"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl text-xs bg-card",
							onClick: () => handleBulkAction("activate"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "mr-1 size-3.5 text-success" }), " Activate Selected"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl text-xs bg-card",
							onClick: () => handleBulkAction("deactivate"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMinus, { className: "mr-1 size-3.5 text-muted-foreground" }), " Deactivate"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl text-xs bg-card text-danger border-danger/30",
							onClick: () => handleBulkAction("suspend"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "mr-1 size-3.5" }), " Suspend"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl text-xs bg-card text-danger border-danger/30",
							onClick: () => handleBulkAction("delete"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1 size-3.5" }), " Delete"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl text-xs bg-card",
							onClick: () => handleBulkAction("export"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-3.5" }), " Export Selected"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "rounded-xl text-xs",
							onClick: () => setSelectedIds([]),
							children: "Clear Selection"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "User Directory & Search Controls",
				description: "Filter by role, department, status, academic year, or search keywords",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: searchTerm,
									onChange: (e) => setSearchTerm(e.target.value),
									placeholder: "Search by Name, Email, Department, Role, Phone, User ID...",
									className: "rounded-xl pl-9 bg-card"
								}),
								searchTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchTerm(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-1.5 sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2 text-xs font-semibold text-muted-foreground",
									children: "Layout:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "table" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("table"),
									className: "rounded-xl text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "mr-1.5 size-3.5" }), " Table View"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "grid" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("grid"),
									className: "rounded-xl text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "mr-1.5 size-3.5" }), " Grid View"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: roleFilter,
								onValueChange: setRoleFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Roles"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Student",
											children: "Student"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Organizer",
											children: "Organizer"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Admin",
											children: "Administrator"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Department"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: deptFilter,
								onValueChange: setDeptFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "All",
										children: "All Departments"
									}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d,
										children: d
									}, d))]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: statusFilter,
								onValueChange: setStatusFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Active",
											children: "Active"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Inactive",
											children: "Inactive"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Suspended",
											children: "Suspended"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Blocked",
											children: "Blocked"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Pending",
											children: "Pending"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Academic Year"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: yearFilter,
								onValueChange: setYearFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Years"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "1st",
											children: "1st Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "2nd",
											children: "2nd Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "3rd",
											children: "3rd Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "4th",
											children: "4th Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Faculty",
											children: "Faculty"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Sort By"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: sortBy,
								onValueChange: setSortBy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Newest",
											children: "Recently Joined"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Oldest",
											children: "Oldest Joined"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Name",
											children: "Name A–Z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Department",
											children: "Department"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Role",
											children: "Role"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Status",
											children: "Status"
										})
									]
								})]
							})] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `User Roster (${filteredUsers.length})`,
				description: `Showing ${filteredUsers.length} active and provisioned accounts`,
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingSkeletonState, { count: 4 }) : filteredUsers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Users,
					title: "No users found",
					description: "No user accounts match your search query or filter criteria. Try resetting search filters.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card",
						onClick: () => {
							setSearchTerm("");
							setRoleFilter("All");
							setDeptFilter("All");
							setStatusFilter("All");
							setYearFilter("All");
							setSortBy("Newest");
						},
						children: "Reset All Filters"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [viewMode === "table" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-2xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						className: "bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "w-10 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: filteredUsers.length > 0 && selectedIds.length === filteredUsers.length,
									onCheckedChange: toggleSelectAll
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Profile & User Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User ID" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden md:table-cell",
								children: "Department & Year"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role Management" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Phone" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden lg:table-cell",
								children: "Last Active"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredUsers.map((u) => {
						const isSelected = selectedIds.includes(u.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: cn("cursor-pointer hover:bg-secondary/40 transition-colors", isSelected && "bg-primary-soft/30"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-center",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: isSelected,
										onCheckedChange: () => toggleSelectId(u.id)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									onClick: () => setActiveProfileUser(u),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [u.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: u.avatar,
											alt: u.name,
											className: "size-9 rounded-xl object-cover shrink-0"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft font-bold text-primary text-xs",
											children: u.name.split(" ").map((n) => n[0]).join("")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-sm text-foreground hover:underline line-clamp-1",
												children: u.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground truncate",
												children: u.email
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-mono text-xs font-semibold text-primary",
									onClick: () => setActiveProfileUser(u),
									children: u.userId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "hidden md:table-cell text-xs text-muted-foreground",
									onClick: () => setActiveProfileUser(u),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-foreground",
										children: u.dept
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: u.year
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										defaultValue: u.role,
										onValueChange: (val) => handleRoleChange(u, val),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "h-8 w-32 rounded-xl bg-card text-xs font-semibold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Student",
													children: "Student"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Organizer",
													children: "Organizer"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Admin",
													children: "Administrator"
												})
											]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-xs font-mono text-muted-foreground",
									onClick: () => setActiveProfileUser(u),
									children: u.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									onClick: () => setActiveProfileUser(u),
									children: renderStatusBadge(u.status)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "hidden lg:table-cell text-xs text-muted-foreground",
									onClick: () => setActiveProfileUser(u),
									children: u.lastLogin
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "size-8 rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "end",
										className: "w-48 rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "User Management" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActiveProfileUser(u),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 size-4" }), " View Details Drawer"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => handleOpenEditModal(u),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 size-4" }), " Edit User Info"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => toast.success(`Password reset email sent to ${u.email}`),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "mr-2 size-4" }), " Reset Password (UI)"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											u.status !== "Active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActionModal({
													type: "activate",
													user: u
												}),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "mr-2 size-4 text-success" }), " Activate User"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActionModal({
													type: "deactivate",
													user: u
												}),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMinus, { className: "mr-2 size-4 text-muted-foreground" }), " Deactivate"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActionModal({
													type: "suspend",
													user: u
												}),
												className: "text-danger",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "mr-2 size-4" }), " Suspend Account"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActionModal({
													type: "block",
													user: u
												}),
												className: "text-danger font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mr-2 size-4" }), " Block Account"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActionModal({
													type: "delete",
													user: u
												}),
												className: "text-danger",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 size-4" }), " Delete User"]
											})
										]
									})] })
								})
							]
						}, u.id);
					}) })] })
				}), viewMode === "grid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: filteredUsers.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 space-y-4 flex flex-col justify-between hover:shadow-md transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs font-bold text-primary",
										children: u.userId
									}), renderStatusBadge(u.status)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [u.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: u.avatar,
										alt: u.name,
										className: "size-12 rounded-2xl object-cover shrink-0"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft font-bold text-primary text-sm",
										children: u.name.split(" ").map((n) => n[0]).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-bold text-sm text-foreground line-clamp-1",
												children: u.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground truncate",
												children: u.email
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "mt-1 rounded-full text-[9px]",
												children: u.role
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 text-xs text-muted-foreground border-t pt-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Department:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: u.dept
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground font-mono text-[11px]",
												children: u.phone
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Last Active:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: u.lastLogin })]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t pt-3 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 rounded-xl text-xs flex-1 bg-card",
								onClick: () => setActiveProfileUser(u),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1 size-3.5" }), " Details"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "h-8 rounded-xl text-xs bg-card",
								onClick: () => handleOpenEditModal(u),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-1 size-3.5" }), " Edit"]
							})]
						})]
					}, u.id))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: activeProfileUser !== null,
				onOpenChange: () => setActiveProfileUser(null),
				children: activeProfileUser && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-2xl rounded-3xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 border-b pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [activeProfileUser.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: activeProfileUser.avatar,
									alt: activeProfileUser.name,
									className: "size-14 rounded-2xl object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-14 place-items-center rounded-2xl bg-primary-soft font-bold text-primary text-lg",
									children: activeProfileUser.name.split(" ").map((n) => n[0]).join("")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-xl font-bold",
									children: activeProfileUser.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
									className: "text-xs",
									children: [
										activeProfileUser.userId,
										" · ",
										activeProfileUser.email
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [renderStatusBadge(activeProfileUser.status), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "rounded-full text-xs font-semibold",
									children: activeProfileUser.role
								})]
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
							defaultValue: "overview",
							className: "mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
									className: "grid grid-cols-4 rounded-xl bg-secondary p-1 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
											value: "overview",
											className: "rounded-lg",
											children: "Overview"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
											value: "events",
											className: "rounded-lg",
											children: [
												"Events (",
												activeProfileUser.assignedEvents?.length || 0,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
											value: "certs",
											className: "rounded-lg",
											children: [
												"Certificates (",
												activeProfileUser.certificatesCount,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
											value: "timeline",
											className: "rounded-lg",
											children: "Activity"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
									value: "overview",
									className: "space-y-4 pt-4 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3 rounded-2xl border p-4 bg-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px] uppercase font-semibold",
												children: "Department"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-sm",
												children: activeProfileUser.dept
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px] uppercase font-semibold",
												children: "Academic Year / Level"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-sm",
												children: activeProfileUser.year
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px] uppercase font-semibold",
												children: "Phone Number"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-sm font-mono",
												children: activeProfileUser.phone
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px] uppercase font-semibold",
												children: "Joined Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-sm",
												children: activeProfileUser.createdDate
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px] uppercase font-semibold",
												children: "Registered Events"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-base text-primary",
												children: activeProfileUser.registeredEventsCount
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-[10px] uppercase font-semibold",
												children: "Attendance Rate"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-base text-success",
												children: activeProfileUser.attendanceRate || "92%"
											})] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border p-4 bg-card space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-xs text-foreground",
											children: "Role Transition Control (Admin UI Only)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Current Role:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												defaultValue: activeProfileUser.role,
												onValueChange: (val) => handleRoleChange(activeProfileUser, val),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-8 w-36 rounded-xl bg-card text-xs font-semibold",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
													className: "rounded-2xl",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Student",
															children: "Student"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Organizer",
															children: "Organizer"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
															value: "Admin",
															children: "Administrator"
														})
													]
												})]
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
									value: "events",
									className: "space-y-3 pt-4 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-muted-foreground",
										children: "Assigned & Registered Events"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2",
										children: activeProfileUser.assignedEvents && activeProfileUser.assignedEvents.length > 0 ? activeProfileUser.assignedEvents.map((ev, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-xl border bg-card p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: ev
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "secondary",
												className: "rounded-full text-[10px]",
												children: "Confirmed"
											})]
										}, i)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-center py-6",
											children: "No events currently assigned."
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
									value: "certs",
									className: "space-y-3 pt-4 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-muted-foreground",
										children: "Claimed Certificates Wallet"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-2xl border p-4 bg-card space-y-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: "AI Builders Summit 2026 Certificate"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: "Issued by Codecraft Desk · CS Dept"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "outline",
												className: "rounded-xl text-xs bg-card",
												onClick: () => toast.success("Downloading Certificate PDF..."),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-3.5" }), " PDF"]
											})]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
									value: "timeline",
									className: "space-y-3 pt-4 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-muted-foreground",
										children: "Recent Activity Timeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2",
										children: activeProfileUser.activityHistory.map((act, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-xl bg-secondary/40 p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: act.action
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground font-mono",
												children: act.time
											})]
										}, i))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-wrap gap-2 pt-4 border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "rounded-xl text-xs",
									onClick: () => setActiveProfileUser(null),
									children: "Close"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "rounded-xl text-xs bg-card",
									onClick: () => handleOpenEditModal(activeProfileUser),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-1 size-3.5" }), " Edit Profile"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "rounded-xl text-xs bg-card",
									onClick: () => toast.success(`Password reset email dispatched to ${activeProfileUser.email}`),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "mr-1 size-3.5" }), " Reset Password"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showAddModal,
				onOpenChange: setShowAddModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-3xl p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg font-bold",
						children: editingUser ? "Edit User Account" : "Add New User Account"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: editingUser ? "Update profile details, status, and role access." : "Create and provision a new user profile."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleFormSubmit,
						className: "space-y-4 py-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Full Name *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.name,
									onChange: (e) => setFormData({
										...formData,
										name: e.target.value
									}),
									placeholder: "e.g. Aarav Sharma",
									required: true,
									className: "rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Email Address *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "email",
									value: formData.email,
									onChange: (e) => setFormData({
										...formData,
										email: e.target.value
									}),
									placeholder: "e.g. aarav.s@campus.edu",
									required: true,
									className: "rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Phone Number"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: formData.phone,
									onChange: (e) => setFormData({
										...formData,
										phone: e.target.value
									}),
									placeholder: "+91 98765 43210",
									className: "rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold",
										children: "Department"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: formData.dept,
										onValueChange: (val) => setFormData({
											...formData,
											dept: val
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "rounded-xl bg-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
											className: "rounded-2xl",
											children: departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: d,
												children: d
											}, d))
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold",
										children: "Academic Year / Designation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: formData.year,
										onValueChange: (val) => setFormData({
											...formData,
											year: val
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "rounded-xl bg-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "1st Year",
													children: "1st Year"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "2nd Year",
													children: "2nd Year"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "3rd Year",
													children: "3rd Year"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "4th Year",
													children: "4th Year"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Faculty",
													children: "Faculty"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Admin Staff",
													children: "Admin Staff"
												})
											]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold",
										children: "Role Access"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: formData.role,
										onValueChange: (val) => setFormData({
											...formData,
											role: val
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "rounded-xl bg-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Student",
													children: "Student"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Organizer",
													children: "Organizer"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Admin",
													children: "Administrator"
												})
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-semibold",
										children: "Account Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
										value: formData.status,
										onValueChange: (val) => setFormData({
											...formData,
											status: val
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
											className: "rounded-xl bg-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
											className: "rounded-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Active",
													children: "Active"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Inactive",
													children: "Inactive"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Suspended",
													children: "Suspended"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Blocked",
													children: "Blocked"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Pending",
													children: "Pending"
												})
											]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									type: "button",
									onClick: () => setShowAddModal(false),
									className: "rounded-xl",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "rounded-xl shadow-glow font-semibold",
									children: editingUser ? "Save Changes" : "Create Account"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: actionModal.type !== null,
				onOpenChange: () => setActionModal({
					type: null,
					user: null
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-3xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-bold",
							children: [
								actionModal.type === "delete" && "Delete User Account",
								actionModal.type === "suspend" && "Suspend User Account",
								actionModal.type === "block" && "Block User Account",
								actionModal.type === "activate" && "Activate User Account",
								actionModal.type === "deactivate" && "Deactivate User Account"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-xs",
							children: [
								"Are you sure you want to ",
								actionModal.type,
								" user account ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "text-foreground",
									children: [
										"\"",
										actionModal.user?.name,
										"\""
									]
								}),
								"?"
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-2 text-xs text-muted-foreground leading-relaxed",
							children: [
								actionModal.type === "delete" && "This will permanently purge user profile records, event registrations, and authorizations.",
								actionModal.type === "suspend" && "The user will be immediately logged out and blocked from logging in until reactivated.",
								actionModal.type === "block" && "The user account will be locked indefinitely due to security or policy flags.",
								actionModal.type === "activate" && "The account status will be restored to Active with full feature permissions.",
								actionModal.type === "deactivate" && "The account status will be set to Inactive."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setActionModal({
								type: null,
								user: null
							}),
							className: "rounded-xl",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: actionModal.type === "delete" || actionModal.type === "suspend" || actionModal.type === "block" ? "destructive" : "default",
							onClick: handleExecuteActionModal,
							className: "rounded-xl font-semibold shadow-sm",
							children: ["Confirm ", actionModal.type?.toUpperCase()]
						})] })
					]
				})
			})
		]
	});
}
var Route$6 = createFileRoute("/_app/organizer/analytics")({
	head: () => ({ meta: [
		{ title: "Organizer Analytics — CampusPulse" },
		{
			name: "description",
			content: "Track event performance, registrations, attendance, engagement, and archive statistics."
		},
		{
			property: "og:title",
			content: "Organizer Analytics — CampusPulse"
		},
		{
			property: "og:description",
			content: "Comprehensive charts for event signups, attendance rates, and feedback."
		}
	] }),
	component: AnalyticsDashboard
});
var chartColors = [
	"#2563EB",
	"#22C55E",
	"#F59E0B",
	"#8B5CF6",
	"#EC4899",
	"#14B8A6",
	"#64748B"
];
var peakHoursData = [
	{
		hour: "08:00 AM",
		signups: 42
	},
	{
		hour: "10:00 AM",
		signups: 184
	},
	{
		hour: "12:00 PM",
		signups: 260
	},
	{
		hour: "02:00 PM",
		signups: 310
	},
	{
		hour: "04:00 PM",
		signups: 220
	},
	{
		hour: "06:00 PM",
		signups: 145
	},
	{
		hour: "08:00 PM",
		signups: 89
	}
];
var attendanceRatioData = [{
	name: "Attended (Present)",
	value: 86,
	color: "#22C55E"
}, {
	name: "Absent",
	value: 14,
	color: "#EF4444"
}];
var starDistribution = [
	{
		star: "5 Stars",
		count: 480,
		percentage: 68
	},
	{
		star: "4 Stars",
		count: 160,
		percentage: 22
	},
	{
		star: "3 Stars",
		count: 45,
		percentage: 6
	},
	{
		star: "2 Stars",
		count: 12,
		percentage: 2
	},
	{
		star: "1 Star",
		count: 8,
		percentage: 2
	}
];
function AnalyticsDashboard() {
	const [dateRange, setDateRange] = (0, import_react.useState)("Last 30 Days");
	const [showExportModal, setShowExportModal] = (0, import_react.useState)(false);
	const counts = (0, import_react.useMemo)(() => {
		return {
			totalEvents: events.length,
			upcoming: events.filter((e) => resolveStatus(e) === "Upcoming").length,
			completed: events.filter((e) => resolveStatus(e) === "Completed").length,
			archived: events.filter((e) => resolveStatus(e) === "Archived" || isExpired(e)).length,
			totalRegs: events.reduce((acc, e) => acc + e.registered, 0),
			avgAttendance: 86,
			certsIssued: 3184,
			avgFeedback: 4.8
		};
	}, []);
	const tooltipStyle = {
		borderRadius: 16,
		border: "1px solid var(--color-border)",
		background: "var(--color-card)",
		fontSize: 12
	};
	const handleExportReport = (type) => {
		const reportData = {
			generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			range: dateRange,
			overview: counts,
			monthlyStats,
			departmentPerformance
		};
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
		const anchor = document.createElement("a");
		anchor.setAttribute("href", dataStr);
		anchor.setAttribute("download", `campuspulse_${type.toLowerCase().replace(/\s+/g, "_")}_report.json`);
		anchor.click();
		toast.success(`Exported ${type} Report for ${dateRange}.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Organizer Analytics",
				subtitle: "Track event performance, registrations, attendance, engagement, and archive statistics.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Organizer",
						to: "/organizer"
					},
					{ label: "Analytics" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: dateRange,
						onValueChange: setDateRange,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-40 rounded-xl bg-card text-xs font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							className: "rounded-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Today",
									children: "Today"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Last 7 Days",
									children: "Last 7 Days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Last 30 Days",
									children: "Last 30 Days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Last 90 Days",
									children: "Last 90 Days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "This Year",
									children: "This Year"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl shadow-glow",
						onClick: () => setShowExportModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), " Export Analytics"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: [
						"Core Performance Metrics (",
						dateRange,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "Live Analytics"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Events",
						value: counts.totalEvents,
						icon: Layers,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Upcoming",
						value: counts.upcoming,
						icon: CalendarClock,
						tone: "primary",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Completed",
						value: counts.completed,
						icon: CircleCheck,
						tone: "success",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived",
						value: counts.archived,
						icon: FolderArchive,
						tone: "warning",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Signups",
						value: counts.totalRegs,
						icon: Users,
						tone: "primary",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Attendance %",
						value: counts.avgAttendance,
						suffix: "%",
						icon: TrendingUp,
						tone: "success",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certs Issued",
						value: counts.certsIssued,
						icon: Award,
						tone: "primary",
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Rating",
						value: counts.avgFeedback,
						suffix: " ★",
						icon: Star,
						tone: "danger",
						index: 7
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Key Operational Insights",
				description: "Automated takeaways from registration and attendance velocity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/20 bg-primary-soft/30 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase",
										children: "Most Popular Event"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-sm text-foreground line-clamp-1",
									children: "HackFusion 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "348 registrations (99% capacity)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-success/20 bg-success-soft/30 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase",
										children: "Highest Attendance"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-sm text-foreground line-clamp-1",
									children: "System Design Bootcamp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "94% attendee check-in rate"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-warning/20 bg-warning-soft/30 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-warning",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase",
										children: "Best Feedback"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-sm text-foreground line-clamp-1",
									children: "AI Workshop 2026"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "4.9 ★ average rating"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/20 bg-primary-soft/30 p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase",
										children: "Fastest Filled"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-sm text-foreground line-clamp-1",
									children: "Rhythm & Rangoli"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Filled in 4.2 hours"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4 space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold uppercase text-muted-foreground",
										children: "Top Department"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4 text-muted-foreground" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-sm text-foreground line-clamp-1",
									children: "Computer Science"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "1,840 total participants"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Monthly Registration Growth",
					description: "Total registrations across past 6 months",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: monthlyStats,
								margin: {
									left: -20,
									right: 8,
									top: 12
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "registrations",
										name: "Registrations",
										fill: "#2563EB",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Peak Registration Hours",
					description: "Daily timestamp distribution of student signups",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: peakHoursData,
								margin: {
									left: -20,
									right: 8,
									top: 12
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--color-border)",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "hour",
										tickLine: false,
										axisLine: false,
										fontSize: 11,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tickLine: false,
										axisLine: false,
										fontSize: 12,
										stroke: "var(--color-muted-foreground)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "signups",
										name: "Signups",
										fill: "#22C55E",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
						title: "Event Ranking Highlights",
						description: "Highest and lowest signup performance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-muted-foreground mb-2",
								children: "TOP PERFORMING EVENTS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									{
										title: "HackFusion 2026",
										count: "348 Signups",
										percent: 99
									},
									{
										title: "AI & ML Workshop",
										count: "212 Signups",
										percent: 88
									},
									{
										title: "Rhythm & Rangoli",
										count: "480 Signups",
										percent: 96
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-xl bg-secondary/30 p-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "default",
										className: "rounded-full text-[10px]",
										children: item.count
									})]
								}, item.title))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-muted-foreground mb-2",
									children: "MOST ENGAGED (VIEWS & SAVES)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: [{
										title: "System Design Bootcamp",
										stat: "1.4k Views · 210 Saved"
									}, {
										title: "Cybersecurity CTF",
										stat: "1.1k Views · 185 Saved"
									}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-xl bg-secondary/30 p-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground text-[10px]",
											children: item.stat
										})]
									}, item.title))
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
						title: "Attendance Rate Ratio",
						description: "Present vs. Absent registrant distribution",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: attendanceRatioData,
									dataKey: "value",
									nameKey: "name",
									innerRadius: 55,
									outerRadius: 85,
									paddingAngle: 4,
									children: attendanceRatioData.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, `cell-${index}`))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-center gap-6 text-xs font-semibold pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-success" }), " Present (86%)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-danger",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-danger" }), " Absent (14%)"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
						title: "Category Distribution",
						description: "Events breakdown by genre & domain",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: categorySplit,
									dataKey: "value",
									nameKey: "name",
									innerRadius: 50,
									outerRadius: 80,
									paddingAngle: 3,
									children: categorySplit.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: chartColors[i % chartColors.length] }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 text-[10px] text-muted-foreground pt-1 justify-center",
							children: categorySplit.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2 rounded-full",
										style: { background: chartColors[i % chartColors.length] }
									}),
									" ",
									c.name
								]
							}, c.name))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Feedback Sentiment & Rating Breakdown",
				description: "Student ratings, star distribution, and key highlights",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center rounded-2xl bg-secondary/40 p-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-extrabold text-foreground",
									children: "4.8"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 my-2 text-warning",
									children: [
										1,
										2,
										3,
										4,
										5
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 fill-warning text-warning" }, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-semibold",
									children: "Based on 705 student reviews"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 text-xs",
							children: starDistribution.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-16 font-semibold text-muted-foreground",
										children: item.star
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: item.percentage,
										className: "h-2 flex-1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-10 text-right font-bold",
										children: [item.percentage, "%"]
									})
								]
							}, item.star))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold text-success flex items-center gap-1 mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-3.5" }), " Most Appreciated Aspects"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: [
									"Engaging Speakers",
									"Hands-on Labs",
									"Punctual Schedule",
									"Clear Certificates"
								].map((kw) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "rounded-full border-success/30 bg-success-soft text-success text-[10px]",
									children: ["+ ", kw]
								}, kw))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-2 border-t",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-warning flex items-center gap-1 mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-3.5" }), " Key Improvement Areas"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: [
										"More Seating Capacity",
										"Wi-Fi Bandwidth",
										"Longer Q&A Sessions"
									].map((imp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "rounded-full border-warning/30 bg-warning-soft text-warning text-[10px]",
										children: ["! ", imp]
									}, imp))
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Department Participation & Attendance",
				description: "Event attendance comparison across university departments",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: departmentPerformance,
							margin: {
								left: -10,
								right: 16,
								top: 12
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--color-border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "dept",
									tickLine: false,
									axisLine: false,
									fontSize: 12,
									stroke: "var(--color-muted-foreground)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tickLine: false,
									axisLine: false,
									fontSize: 12,
									stroke: "var(--color-muted-foreground)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "attendance",
									name: "Attendance Count",
									fill: "#2563EB",
									radius: [
										8,
										8,
										0,
										0
									]
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "7-Stage Automatic Event Lifecycle Pipeline",
				description: "Live state tracking from initial draft to automatic archival",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 text-center",
					children: [
						{
							stage: "Draft",
							count: events.filter((e) => e.status === "Draft").length,
							color: "border-warning/30 bg-warning-soft text-warning"
						},
						{
							stage: "Pending Approval",
							count: events.filter((e) => e.status === "Pending Approval").length,
							color: "border-warning/30 bg-warning-soft text-warning"
						},
						{
							stage: "Published",
							count: events.filter((e) => e.status === "Published").length,
							color: "border-primary/30 bg-primary-soft text-primary"
						},
						{
							stage: "Upcoming",
							count: events.filter((e) => resolveStatus(e) === "Upcoming").length,
							color: "border-primary/30 bg-primary-soft text-primary"
						},
						{
							stage: "Live Now",
							count: events.filter((e) => resolveStatus(e) === "Live").length,
							color: "border-danger/30 bg-danger-soft text-danger"
						},
						{
							stage: "Completed",
							count: events.filter((e) => resolveStatus(e) === "Completed").length,
							color: "border-success/30 bg-success-soft text-success"
						},
						{
							stage: "Auto Archived",
							count: events.filter((e) => isExpired(e) || e.status === "Archived").length,
							color: "border-border bg-secondary text-muted-foreground"
						}
					].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("rounded-2xl border p-4 flex flex-col justify-between space-y-2", item.color),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-bold uppercase tracking-wider",
								children: ["Stage ", idx + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-2xl",
								children: item.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-xs",
								children: item.stage
							})
						]
					}, item.stage))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Archive Analytics & Auto-Expiry Queue",
				description: "Tracking events automatically archived upon end datetime expiry",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/archive-manager",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "rounded-xl text-xs bg-card",
						children: "Archive Manager"
					})
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3 rounded-2xl bg-secondary/40 p-4 text-center text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Archived Today"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-base",
									children: "2 Events"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Archived This Month"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary text-base",
									children: "14 Events"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Archive Success"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-success text-base",
									children: "100%"
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-xs text-muted-foreground mb-2",
							children: "UPCOMING AUTO-ARCHIVES QUEUE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: archiveQueue().slice(0, 3).map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-xl border border-border bg-card p-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground",
									children: q.event.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground text-[10px]",
									children: ["Ends: ", format(new Date(q.event.end), "dd MMM yyyy")]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									className: "rounded-full text-warning text-[10px]",
									children: [
										"In ",
										Math.max(1, Math.round(q.endsInMs / 864e5)),
										" days"
									]
								})]
							}, q.event.id))
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-xs text-muted-foreground mb-2",
						children: "RECENT ARCHIVE ACTIVITY LOG"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 text-xs",
						children: archiveLog.slice(0, 4).map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, { className: "size-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: log.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: log.detail
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-muted-foreground mt-0.5",
										children: log.when
									})
								]
							})]
						}, log.id))
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showExportModal,
				onOpenChange: setShowExportModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold",
							children: "Export Analytics Report"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Download comprehensive analytics reports for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: dateRange
							}),
							"."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 py-3",
							children: [
								{
									label: "PDF Executive Report",
									icon: FileCheck,
									type: "PDF Executive"
								},
								{
									label: "Excel Master Roster",
									icon: FileSpreadsheet,
									type: "Excel Master"
								},
								{
									label: "CSV Data Dump",
									icon: Download,
									type: "CSV Raw"
								},
								{
									label: "Attendance Summary",
									icon: QrCode,
									type: "Attendance Summary"
								},
								{
									label: "Certificate Log",
									icon: Award,
									type: "Certificate Log"
								},
								{
									label: "Archive Activity Log",
									icon: FolderArchive,
									type: "Archive Activity"
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									handleExportReport(item.type);
									setShowExportModal(false);
								},
								className: "flex flex-col items-center justify-center rounded-xl border border-border bg-card p-3 transition-all hover:border-primary hover:bg-primary-soft/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-primary mb-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold",
									children: item.label
								})]
							}, item.type))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setShowExportModal(false),
							className: "rounded-xl w-full",
							children: "Cancel"
						}) })
					]
				})
			})
		]
	});
}
var attendanceService = {
	/** Generate Unique Secure QR Pass */
	async generateQrPass(registrationId, eventId, studentId) {
		try {
			const res = await apiRequest(`/registrations/${registrationId}`);
			const qrCode = res.success && res.data?.qr_code || `QR-${eventId}-${studentId}-${registrationId}`;
			return {
				qrId: `qrp-${registrationId}`,
				registrationId,
				eventId,
				studentId,
				qrValue: qrCode,
				expiresAt: new Date(Date.now() + 864e5 * 7).toISOString(),
				generatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
		} catch (e) {
			return {
				qrId: `qrp-${registrationId}`,
				registrationId,
				eventId,
				studentId,
				qrValue: `QR-${eventId}-${studentId}-${registrationId}`,
				expiresAt: new Date(Date.now() + 864e5 * 7).toISOString(),
				generatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
		}
	},
	/** Find QR Pass by Value */
	getPassByValue(qrValue) {
		return null;
	},
	/** Verify QR Pass and Perform Check-In */
	async verifyAndCheckIn(params) {
		const { qrValue, targetEventId } = params;
		try {
			const res = await apiRequest("/attendance/verify-qr", {
				method: "POST",
				body: JSON.stringify({
					qr_token: qrValue,
					event_id: targetEventId ? parseInt(targetEventId, 10) : 0
				})
			});
			if (res.success && res.data) {
				const info = res.data;
				const scanTime = (/* @__PURE__ */ new Date()).toISOString();
				const newAttendance = {
					attendanceId: `att-${Date.now()}`,
					eventId: targetEventId || "0",
					registrationId: "0",
					studentId: String(info.student_id || "0"),
					studentName: info.student_name || "Student",
					scanTime,
					checkedBy: params.scannedBy || "Organizer",
					status: "Present",
					createdAt: scanTime
				};
				toast.success(`Check-in Confirmed: ${info.student_name} at ${info.check_in_time}`);
				return {
					success: true,
					message: "Check-in successful",
					attendance: newAttendance,
					studentName: info.student_name,
					studentId: String(info.student_id),
					rollNumber: info.roll_number || "CS-REG-2026",
					department: info.department_name || "Computer Science",
					checkInTime: info.check_in_time
				};
			}
			return {
				success: false,
				message: res.message || "Failed to check-in"
			};
		} catch (err) {
			toast.error(err.message || "Verification failed.");
			return {
				success: false,
				message: err.message || "Verification failed."
			};
		}
	},
	/** Check if Student is Checked-in */
	getAttendanceRecord(eventId, studentId) {
		return null;
	},
	/** Compute Live Attendance Statistics */
	async getAttendanceMetrics(eventId) {
		const numericId = parseInt(eventId, 10);
		if (isNaN(numericId)) return {
			totalSeats: 100,
			totalRegistered: 0,
			checkedInCount: 0,
			pendingCount: 0,
			noShowCount: 0,
			attendancePercentage: 0
		};
		try {
			const res = await apiRequest(`/events/${numericId}/attendance`);
			if (res.success && res.data && res.data.metrics) {
				const m = res.data.metrics;
				return {
					totalSeats: (m.total_registered || 0) + (m.pending_checkins || 0),
					totalRegistered: m.total_registered || 0,
					checkedInCount: m.checked_in_count || 0,
					pendingCount: m.pending_checkins || 0,
					noShowCount: m.pending_checkins || 0,
					attendancePercentage: Math.round(m.attendance_rate || 0)
				};
			}
		} catch (e) {
			console.warn("Failed to load live metrics:", e);
		}
		return {
			totalSeats: 100,
			totalRegistered: 0,
			checkedInCount: 0,
			pendingCount: 0,
			noShowCount: 0,
			attendancePercentage: 0
		};
	},
	/** Subscribe to Real-Time Attendance Stream */
	subscribe(eventId, callback) {
		const numericId = parseInt(eventId, 10);
		if (isNaN(numericId)) {
			callback([]);
			return () => {};
		}
		let active = true;
		const fetchAttendance = async () => {
			try {
				const res = await apiRequest(`/events/${numericId}/attendance`);
				if (res.success && res.data && Array.isArray(res.data.logs) && active) callback(res.data.logs.map((log) => ({
					attendanceId: String(log.id),
					eventId,
					registrationId: String(log.registration_id),
					studentId: String(log.student_id),
					studentName: log.student_name || "Student",
					scanTime: log.check_in_time ? new Date(log.check_in_time).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
					checkedBy: log.checked_by_name || "Organizer",
					status: log.attendance_status || "Present",
					createdAt: log.check_in_time ? new Date(log.check_in_time).toISOString() : (/* @__PURE__ */ new Date()).toISOString()
				})));
			} catch (err) {
				console.warn("Failed to fetch attendance stream:", err);
			}
		};
		fetchAttendance();
		const interval = setInterval(fetchAttendance, 6e3);
		return () => {
			active = false;
			clearInterval(interval);
		};
	}
};
var Route$5 = createFileRoute("/_app/organizer/attendance")({
	head: () => ({ meta: [
		{ title: "Attendance & QR Check-In — CampusPulse" },
		{
			name: "description",
			content: "Scan entry passes, lock attendance and release certificates."
		},
		{
			property: "og:title",
			content: "Attendance & QR Check-In — CampusPulse"
		},
		{
			property: "og:description",
			content: "QR check-in and certificate release console."
		}
	] }),
	component: Attendance
});
function Attendance() {
	const [selectedEventId, setSelectedEventId] = (0, import_react.useState)("ev-1");
	const [attendanceRecords, setAttendanceRecords] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [qrCodeInput, setQrCodeInput] = (0, import_react.useState)("QR-EV-1-STD-001-20260815");
	const [isScanning, setIsScanning] = (0, import_react.useState)(false);
	const [scanResultModal, setScanResultModal] = (0, import_react.useState)({
		open: false,
		success: false,
		title: ""
	});
	(0, import_react.useEffect)(() => {
		const unsubscribe = attendanceService.subscribe(selectedEventId, (data) => {
			setAttendanceRecords(data);
		});
		return () => unsubscribe();
	}, [selectedEventId]);
	const checkedInCount = attendanceRecords.filter((a) => a.status !== "Absent").length;
	const totalExpected = 300;
	const rate = Math.round(checkedInCount / totalExpected * 100);
	const handleVerifyScan = async (codeToVerify) => {
		const code = codeToVerify || qrCodeInput;
		if (!code.trim()) {
			toast.error("Please enter or scan a valid QR pass code.");
			return;
		}
		setIsScanning(true);
		const res = await attendanceService.verifyAndCheckIn({
			qrValue: code,
			scannedBy: "Gate Scanner #1",
			targetEventId: selectedEventId
		});
		setIsScanning(false);
		if (res.success) setScanResultModal({
			open: true,
			success: true,
			title: "Check-in Verification Confirmed",
			studentName: res.studentName,
			rollNumber: res.rollNumber,
			department: res.department,
			checkInTime: res.checkInTime,
			message: "Digital entry pass verified. Attendance status recorded as Present."
		});
		else setScanResultModal({
			open: true,
			success: false,
			title: "Check-in Verification Rejected",
			studentName: res.studentName,
			rollNumber: res.rollNumber,
			department: res.department,
			checkInTime: res.checkInTime,
			message: res.message
		});
	};
	const filteredRegistrants = registrants.filter((r) => !searchQuery.trim() || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.roll.toLowerCase().includes(searchQuery.toLowerCase()) || r.dept.toLowerCase().includes(searchQuery.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Attendance & QR Check-In Console",
				subtitle: "AI Builders Summit 2026 · Live venue check-in and QR verification engine",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Organizer",
						to: "/organizer"
					},
					{ label: "Attendance" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: () => toast.success("Exported attendance roster to CSV."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4" }), " Export CSV"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl shadow-glow text-xs",
						onClick: () => toast.success("Attendance locked! Release certificates queued for verified attendees."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-1.5 size-4" }), " Release Certificates"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Checked In (Present)",
						value: checkedInCount,
						icon: CircleCheck,
						tone: "success",
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Registered Seats",
						value: totalExpected,
						icon: Users,
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live Check-In Rate",
						value: rate,
						suffix: "%",
						icon: ScanLine,
						tone: "warning",
						index: 2
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Live QR Pass Scanner",
					description: "Scan student QR pass or type pass code to check-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-primary/40 bg-primary-soft/20 p-4 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center z-10 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mx-auto size-20 text-primary animate-pulse" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-foreground",
											children: "Camera Scanner Active"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Scans & verifies Firestore passes in under 300 ms"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-4 top-1/2 h-0.5 bg-primary/80 animate-pulse shadow-glow" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: "Manual Pass Code Input"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: qrCodeInput,
										onChange: (e) => setQrCodeInput(e.target.value),
										placeholder: "e.g. QR-EV-1-STD-001-20260815",
										className: "rounded-xl bg-card font-mono text-xs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "rounded-xl shadow-glow text-xs shrink-0",
										onClick: () => handleVerifyScan(),
										disabled: isScanning,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "mr-1 size-3.5" }), " Verify"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full rounded-xl bg-primary text-xs shadow-glow",
								onClick: () => handleVerifyScan("QR-EV-1-STD-001-20260815"),
								children: "Simulate Instant QR Scan (Student #1)"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
					title: "Live Participant Check-in Roster",
					description: "Real-time check-in stream & attendance status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								placeholder: "Search participant name, roll number, or department...",
								className: "h-10 rounded-xl bg-card pl-9 text-xs"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: rate,
							className: "h-2 rounded-full"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: filteredRegistrants.map((r) => {
							const isCheckedIn = attendanceRecords.some((a) => a.studentName === r.name || a.studentId === r.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 rounded-2xl border border-border p-4 bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary",
										children: r.name.split(" ").map((w) => w[0]).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												r.roll,
												" · ",
												r.dept
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2 shrink-0",
									children: isCheckedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "rounded-full border-success/40 bg-success-soft text-success font-bold text-xs",
										children: "Checked In"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										className: "rounded-xl bg-card text-xs",
										onClick: () => handleVerifyScan(`QR-EV-1-${r.id.toUpperCase()}-20260815`),
										children: "Check In Student"
									})
								})]
							}, r.id);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: scanResultModal.open,
				onOpenChange: (open) => setScanResultModal({
					...scanResultModal,
					open
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-3xl p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-2 flex size-14 items-center justify-center rounded-2xl bg-secondary",
								children: scanResultModal.success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-10 text-danger" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-center font-bold text-lg",
								children: scanResultModal.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "text-center text-xs",
								children: scanResultModal.message
							})
						] }),
						scanResultModal.studentName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-2 space-y-2 rounded-2xl border p-4 bg-card text-left text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Student Name:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: scanResultModal.studentName
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Roll Number / ID:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground font-mono",
										children: scanResultModal.rollNumber || "CS2026-042"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Department:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: scanResultModal.department || "Computer Science"
									})]
								}),
								scanResultModal.checkInTime && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between border-t pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Check-in Timestamp:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-success",
										children: scanResultModal.checkInTime
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full rounded-xl shadow-glow text-xs",
							onClick: () => setScanResultModal({
								...scanResultModal,
								open: false
							}),
							children: "Close Verification Dialog"
						}) })
					]
				})
			})
		]
	});
}
var Route$4 = createFileRoute("/_app/organizer/create")({
	head: () => ({ meta: [
		{ title: "Create Event — CampusPulse" },
		{
			name: "description",
			content: "Multi-step wizard to publish a campus event announcement with real-time live preview."
		},
		{
			property: "og:title",
			content: "Create Event — CampusPulse"
		},
		{
			property: "og:description",
			content: "Publish a campus event through a guided wizard."
		}
	] }),
	component: CreateEvent
});
var STEPS = [
	"Basic Information",
	"Schedule & Mode",
	"Registration Rules",
	"Media & Assets",
	"Speakers & Hosts",
	"Contact Info",
	"Tags & Settings"
];
var EVENT_TYPES = [
	"Workshop",
	"Hackathon",
	"Seminar",
	"Conference",
	"Placement Drive",
	"Sports",
	"Cultural",
	"Competition"
];
var PRESET_TAGS = [
	"AI",
	"Cloud",
	"Coding",
	"Innovation",
	"Workshop",
	"Cyber Security",
	"Placement",
	"Leadership"
];
function CreateEvent() {
	useNavigate();
	const { userProfile } = useAuth();
	const [step, setStep] = (0, import_react.useState)(0);
	const [title, setTitle] = (0, import_react.useState)("AI Builders Summit & Hackathon 2026");
	const [summary, setSummary] = (0, import_react.useState)("A 24-hour national event for building and deploying AI agents and LLM applications.");
	const [description, setDescription] = (0, import_react.useState)("Join 300+ student developers, mentors from top tech companies, and AI researchers for a full day of hands-on workshops, keynote sessions, and hackathon challenges. Workstations, meals, and mentorship provided on site.");
	const [category, setCategory] = (0, import_react.useState)("Technical");
	const [department, setDepartment] = (0, import_react.useState)("Computer Science");
	const [club, setClub] = (0, import_react.useState)("Codecraft Club");
	const [eventType, setEventType] = (0, import_react.useState)("Hackathon");
	const [startDate, setStartDate] = (0, import_react.useState)("2026-08-15");
	const [startTime, setStartTime] = (0, import_react.useState)("09:00");
	const [endDate, setEndDate] = (0, import_react.useState)("2026-08-16");
	const [endTime, setEndTime] = (0, import_react.useState)("18:00");
	const [mode, setMode] = (0, import_react.useState)("Offline");
	const [venue, setVenue] = (0, import_react.useState)("Innovation Hall, Block C");
	const [building, setBuilding] = (0, import_react.useState)("Block C - Tech Complex");
	const [room, setRoom] = (0, import_react.useState)("Hall 302");
	const [meetingLink, setMeetingLink] = (0, import_react.useState)("https://meet.campuspulse.edu/ai-summit-2026");
	const [regDeadline, setRegDeadline] = (0, import_react.useState)("2026-08-10");
	const [seats, setSeats] = (0, import_react.useState)(300);
	const [fee, setFee] = (0, import_react.useState)(0);
	const [certificate, setCertificate] = (0, import_react.useState)(true);
	const [attendanceRequired, setAttendanceRequired] = (0, import_react.useState)(true);
	const [allowWaitlist, setAllowWaitlist] = (0, import_react.useState)(true);
	const [buttonText, setButtonText] = (0, import_react.useState)("Register Now");
	const [selectedBanner, setSelectedBanner] = (0, import_react.useState)(banner_hackathon_default);
	const [posterUrl, setPosterUrl] = (0, import_react.useState)(null);
	const [galleryImages, setGalleryImages] = (0, import_react.useState)([banner_workshop_default, banner_cultural_default]);
	const bannerInputRef = (0, import_react.useRef)(null);
	const posterInputRef = (0, import_react.useRef)(null);
	const galleryInputRef = (0, import_react.useRef)(null);
	const [customBannerFile, setCustomBannerFile] = (0, import_react.useState)(null);
	const [posterFile, setPosterFile] = (0, import_react.useState)(null);
	const [isDraggingBanner, setIsDraggingBanner] = (0, import_react.useState)(false);
	const handleBannerFileSelect = (file) => {
		if (!file.type.startsWith("image/")) {
			toast.error("Please select a valid image file (JPG, PNG, WEBP).");
			return;
		}
		if (file.size > 5 * 1024 * 1024) {
			toast.error("Banner image file size must be less than 5MB.");
			return;
		}
		const previewUrl = URL.createObjectURL(file);
		setSelectedBanner(previewUrl);
		setCustomBannerFile(file);
		toast.success(`Loaded custom banner "${file.name}" from device!`);
	};
	const handleBannerInputChange = (e) => {
		if (e.target.files && e.target.files[0]) handleBannerFileSelect(e.target.files[0]);
	};
	const handlePosterInputChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (!file.type.startsWith("image/")) {
				toast.error("Please select a valid image file for event poster.");
				return;
			}
			const previewUrl = URL.createObjectURL(file);
			setPosterUrl(previewUrl);
			setPosterFile(file);
			toast.success(`Attached poster "${file.name}" from device!`);
		}
	};
	const handleGalleryInputChange = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			const newUrls = [];
			Array.from(e.target.files).forEach((file) => {
				if (file.type.startsWith("image/")) newUrls.push(URL.createObjectURL(file));
			});
			setGalleryImages((prev) => [...prev, ...newUrls]);
			toast.success(`Added ${newUrls.length} image(s) from device to gallery!`);
		}
	};
	const [speakers, setSpeakers] = (0, import_react.useState)([{
		id: "sp-1",
		name: "Dr. Ananya Iyer",
		designation: "Principal AI Scientist",
		organization: "Google DeepMind",
		bio: "Leading research on agentic systems and multi-modal models.",
		linkedin: "https://linkedin.com/in/ananya-iyer"
	}]);
	const [organizerName, setOrganizerName] = (0, import_react.useState)("Codecraft Executive Desk");
	const [organizerEmail, setOrganizerEmail] = (0, import_react.useState)("codecraft@campuspulse.edu");
	const [organizerPhone, setOrganizerPhone] = (0, import_react.useState)("+91 98450 11223");
	const [organizerDept, setOrganizerDept] = (0, import_react.useState)("Computer Science & Engineering");
	const [organizerOffice, setOrganizerOffice] = (0, import_react.useState)("Room 204, Block C");
	const [tags, setTags] = (0, import_react.useState)([
		"AI",
		"Coding",
		"Innovation",
		"Workshop"
	]);
	const [customTagInput, setCustomTagInput] = (0, import_react.useState)("");
	const [featured, setFeatured] = (0, import_react.useState)(true);
	const [pinAnnouncement, setPinAnnouncement] = (0, import_react.useState)(true);
	const [visibility, setVisibility] = (0, import_react.useState)("Public");
	const [enableNotifications, setEnableNotifications] = (0, import_react.useState)(true);
	const [reminderOneDay, setReminderOneDay] = (0, import_react.useState)(true);
	const [reminderOneHour, setReminderOneHour] = (0, import_react.useState)(true);
	const [isDraft, setIsDraft] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [showPreviewModal, setShowPreviewModal] = (0, import_react.useState)(false);
	const [showSuccessModal, setShowSuccessModal] = (0, import_react.useState)(false);
	const computeDuration = () => {
		try {
			const start = /* @__PURE__ */ new Date(`${startDate}T${startTime}`);
			const diffMs = (/* @__PURE__ */ new Date(`${endDate}T${endTime}`)).getTime() - start.getTime();
			if (isNaN(diffMs) || diffMs <= 0) return "Invalid date range";
			const totalHours = Math.floor(diffMs / 36e5);
			const days = Math.floor(totalHours / 24);
			const remainingHours = totalHours % 24;
			if (days > 0) return `${days} day${days > 1 ? "s" : ""}${remainingHours > 0 ? `, ${remainingHours} hr${remainingHours > 1 ? "s" : ""}` : ""}`;
			return `${totalHours} hour${totalHours > 1 ? "s" : ""}`;
		} catch {
			return "Unable to calculate duration";
		}
	};
	const computeCountdown = () => {
		try {
			const diffMs = (/* @__PURE__ */ new Date(`${startDate}T${startTime}`)).getTime() - Date.now();
			if (diffMs <= 0) return "Event Starting Soon";
			const days = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
			return `Starts in ${days} day${days !== 1 ? "s" : ""}`;
		} catch {
			return "Upcoming Event";
		}
	};
	const validateStep = (currentStep) => {
		const errs = {};
		if (currentStep === 0) {
			if (!title.trim()) errs.title = "Event title is required.";
			if (!summary.trim()) errs.summary = "Short description is required.";
			if (!category) errs.category = "Please select an event category.";
			if (!department) errs.department = "Department is required.";
		}
		if (currentStep === 1) {
			if (!startDate) errs.startDate = "Start date is required.";
			if (!startTime) errs.startTime = "Start time is required.";
			if (!endDate) errs.endDate = "End date is required.";
			if (!endTime) errs.endTime = "End time is required.";
			if (startDate && endDate) {
				const start = /* @__PURE__ */ new Date(`${startDate}T${startTime || "00:00"}`);
				if ((/* @__PURE__ */ new Date(`${endDate}T${endTime || "23:59"}`)).getTime() < start.getTime()) errs.endDate = "End date & time must be after start date & time.";
			}
			if ((mode === "Offline" || mode === "Hybrid") && !venue.trim()) errs.venue = "Venue address is required for offline/hybrid events.";
			if ((mode === "Online" || mode === "Hybrid") && !meetingLink.trim()) errs.meetingLink = "Meeting link is required for online/hybrid events.";
		}
		if (currentStep === 2) {
			if (!regDeadline) errs.regDeadline = "Registration deadline is required.";
			if (regDeadline && startDate) {
				const deadline = /* @__PURE__ */ new Date(`${regDeadline}T23:59:59`);
				const eventStart = /* @__PURE__ */ new Date(`${startDate}T${startTime || "00:00:00"}`);
				if (deadline.getTime() > eventStart.getTime()) errs.regDeadline = "Registration deadline must be on or before event start date.";
			}
			if (seats <= 0) errs.seats = "Maximum participants must be greater than 0.";
		}
		if (currentStep === 5) {
			if (!organizerEmail.trim() || !organizerEmail.includes("@")) errs.organizerEmail = "Valid organizer email is required.";
			if (!organizerName.trim()) errs.organizerName = "Organizer name is required.";
		}
		setErrors(errs);
		return Object.keys(errs).length === 0;
	};
	const handleNextStep = () => {
		if (validateStep(step)) setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
		else toast.error("Please fix the validation errors before proceeding.");
	};
	const [createdEventId, setCreatedEventId] = (0, import_react.useState)("ev-1");
	const handlePublish = async () => {
		let isValid = true;
		for (let i = 0; i < STEPS.length; i++) if (!validateStep(i)) {
			setStep(i);
			isValid = false;
			toast.error(`Please complete validation in Step ${i + 1}: ${STEPS[i]}`);
			break;
		}
		if (isValid) {
			setIsDraft(false);
			try {
				const { eventService } = await import("./eventService-DahDEarW.mjs");
				const created = await eventService.create({
					title,
					summary,
					description,
					category,
					department,
					club,
					organizerId: userProfile?.uid || "organizer-1",
					organizerName: userProfile?.name || organizerName,
					banner: selectedBanner,
					venue,
					mode,
					startDate,
					startTime,
					endDate,
					endTime,
					registrationDeadline: regDeadline,
					maxParticipants: seats,
					tags,
					certificateEnabled: certificate,
					status: "PendingApproval"
				});
				if (created?.eventId) setCreatedEventId(created.eventId);
				setShowSuccessModal(true);
				toast.success("Event submitted for Admin approval.");
			} catch (err) {
				toast.error(err.message || "Failed to create event in Cloud Firestore.");
			}
		}
	};
	const handleSaveDraft = () => {
		setIsDraft(true);
		toast.success("Event saved as draft successfully.");
	};
	const handleAddSpeaker = () => {
		const newSp = {
			id: `sp-${Date.now()}`,
			name: "",
			designation: "",
			organization: "",
			bio: "",
			linkedin: ""
		};
		setSpeakers([...speakers, newSp]);
	};
	const handleRemoveSpeaker = (id) => {
		setSpeakers(speakers.filter((s) => s.id !== id));
	};
	const handleUpdateSpeaker = (id, field, value) => {
		setSpeakers(speakers.map((s) => s.id === id ? {
			...s,
			[field]: value
		} : s));
	};
	const toggleTag = (t) => {
		if (tags.includes(t)) setTags(tags.filter((x) => x !== t));
		else setTags([...tags, t]);
	};
	const handleAddCustomTag = () => {
		if (customTagInput.trim() && !tags.includes(customTagInput.trim())) {
			setTags([...tags, customTagInput.trim()]);
			setCustomTagInput("");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Create Event",
				subtitle: "Create and publish a new campus event announcement.",
				breadcrumb: [
					{
						label: "Organizer Dashboard",
						to: "/organizer"
					},
					{
						label: "Events",
						to: "/organizer/events"
					},
					{ label: "Create Event" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "rounded-xl bg-card shadow-sm",
							onClick: handleSaveDraft,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 size-4 text-muted-foreground" }), " Save Draft"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "rounded-xl bg-card shadow-sm",
							onClick: () => setShowPreviewModal(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 size-4 text-primary" }), " Full Preview"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl shadow-glow",
							onClick: handlePublish,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 size-4" }), " Publish Event"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-surface overflow-x-auto p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex min-w-max items-center gap-2",
					children: STEPS.map((s, i) => {
						const isCompleted = i < step;
						const isCurrent = i === step;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									if (i < step || validateStep(step)) setStep(i);
								},
								className: cn("flex items-center gap-2.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all", isCurrent ? "bg-primary text-primary-foreground shadow-sm" : isCompleted ? "bg-primary-soft text-primary hover:bg-primary-soft/80" : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-5 place-items-center rounded-full text-[10px] font-bold border", isCurrent ? "border-primary-foreground bg-primary-foreground text-primary" : isCompleted ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"),
									children: isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[3]" }) : i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
							}), i < STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-4 bg-border shrink-0" })]
						}, s);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
						title: `Step ${step + 1}: ${STEPS[step]}`,
						description: "Fill out the fields below. Live preview updates automatically on the right.",
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Event Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: title,
												onChange: (e) => setTitle(e.target.value),
												placeholder: "e.g. AI Builders Summit & Hackathon 2026",
												className: "rounded-xl"
											}),
											errors.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.title
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Short Summary / Tagline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: summary,
												onChange: (e) => setSummary(e.target.value),
												placeholder: "Brief 1-sentence teaser for campus event cards",
												className: "rounded-xl"
											}),
											errors.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.summary
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Full Event Description"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											rows: 4,
											value: description,
											onChange: (e) => setDescription(e.target.value),
											placeholder: "Detailed explanation, prerequisites, rules, and expectations...",
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "font-semibold",
											children: ["Category ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-danger",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: category,
											onValueChange: (val) => setCategory(val),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl bg-card",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												className: "rounded-2xl",
												children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: c,
													children: c
												}, c))
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "font-semibold",
											children: ["Event Type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-danger",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: eventType,
											onValueChange: setEventType,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl bg-card",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												className: "rounded-2xl",
												children: EVENT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: t,
													children: t
												}, t))
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "font-semibold",
											children: ["Host Department ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-danger",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: department,
											onValueChange: setDepartment,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl bg-card",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												className: "rounded-2xl",
												children: departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: d,
													children: d
												}, d))
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Club / Organization"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: club,
											onValueChange: setClub,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "rounded-xl bg-card",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
												className: "rounded-2xl",
												children: clubs.map((cl) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: cl.name,
													children: cl.name
												}, cl.name))
											})]
										})]
									})
								]
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Start Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "date",
												value: startDate,
												onChange: (e) => setStartDate(e.target.value),
												className: "rounded-xl"
											}),
											errors.startDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.startDate
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Start Time ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "time",
												value: startTime,
												onChange: (e) => setStartTime(e.target.value),
												className: "rounded-xl"
											}),
											errors.startTime && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.startTime
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["End Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "date",
												value: endDate,
												onChange: (e) => setEndDate(e.target.value),
												className: "rounded-xl"
											}),
											errors.endDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.endDate
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											className: "font-semibold",
											children: ["End Time ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-danger",
												children: "*"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "time",
											value: endTime,
											onChange: (e) => setEndTime(e.target.value),
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-primary/20 bg-primary-soft/50 p-4 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-sm font-semibold text-primary",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
												" Computed Event Duration: ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-foreground",
													children: computeDuration()
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "CampusPulse automatically archives this event once the end date and time pass."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Event Mode"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-3",
											children: [
												"Offline",
												"Online",
												"Hybrid"
											].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setMode(m),
												className: cn("rounded-xl border py-2.5 text-xs font-semibold transition-all", mode === m ? "border-primary bg-primary-soft text-primary ring-2 ring-primary/20" : "border-border bg-card text-muted-foreground hover:bg-secondary"),
												children: [
													m === "Offline" && "🏫 Offline",
													m === "Online" && "🌐 Online",
													m === "Hybrid" && "⚡ Hybrid"
												]
											}, m))
										})]
									}),
									(mode === "Offline" || mode === "Hybrid") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "font-semibold",
													children: ["Primary Venue Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-danger",
														children: "*"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: venue,
													onChange: (e) => setVenue(e.target.value),
													placeholder: "e.g. Innovation Hall, Main Campus",
													className: "rounded-xl"
												}),
												errors.venue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-medium text-danger",
													children: errors.venue
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "font-semibold",
												children: "Building / Block"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: building,
												onChange: (e) => setBuilding(e.target.value),
												placeholder: "e.g. Block C",
												className: "rounded-xl"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "font-semibold",
												children: "Room / Lab Number"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: room,
												onChange: (e) => setRoom(e.target.value),
												placeholder: "e.g. Hall 302",
												className: "rounded-xl"
											})]
										})
									] }),
									(mode === "Online" || mode === "Hybrid") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Virtual Meeting Link (Zoom / Teams / Meet) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: meetingLink,
												onChange: (e) => setMeetingLink(e.target.value),
												placeholder: "https://meet.campuspulse.edu/...",
												className: "rounded-xl"
											}),
											errors.meetingLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.meetingLink
											})
										]
									})
								]
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Registration Deadline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "date",
												value: regDeadline,
												onChange: (e) => setRegDeadline(e.target.value),
												className: "rounded-xl"
											}),
											errors.regDeadline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.regDeadline
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Maximum Participants (Seats) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												value: seats,
												onChange: (e) => setSeats(Number(e.target.value)),
												className: "rounded-xl"
											}),
											errors.seats && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.seats
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Entry Fee (₹)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											value: fee,
											onChange: (e) => setFee(Number(e.target.value)),
											placeholder: "0 for Free event",
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Custom Button CTA Text"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: buttonText,
											onChange: (e) => setButtonText(e.target.value),
											placeholder: "e.g. Apply for Hackathon",
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 sm:col-span-2 pt-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: "Issue Participation Certificates"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: "Digital certificates published upon attendance verification"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: certificate,
													onCheckedChange: setCertificate
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: "Require QR Code Attendance Check-in"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: "Only students scanned at venue get attendance marked"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: attendanceRequired,
													onCheckedChange: setAttendanceRequired
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between rounded-2xl border border-border p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold",
													children: "Allow Waitlist When Full"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: "Automatically waitlist registrants when seats reach capacity"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
													checked: allowWaitlist,
													onCheckedChange: setAllowWaitlist
												})]
											})
										]
									})
								]
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										ref: bannerInputRef,
										accept: "image/png,image/jpeg,image/jpg,image/webp",
										onChange: handleBannerInputChange,
										className: "hidden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										ref: posterInputRef,
										accept: "image/png,image/jpeg,image/jpg,image/webp",
										onChange: handlePosterInputChange,
										className: "hidden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										ref: galleryInputRef,
										accept: "image/png,image/jpeg,image/jpg,image/webp",
										multiple: true,
										onChange: handleGalleryInputChange,
										className: "hidden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "font-semibold",
												children: "Event Banner Image (Main Cover)"
											}), customBannerFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												className: "rounded-full text-[10px] text-primary border-primary",
												children: "Custom Device File Active"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 grid gap-4 sm:grid-cols-3",
											children: [
												{
													title: "Hackathon Theme",
													img: "/assets/banner-hackathon-C2AJiMSF.jpg"
												},
												{
													title: "Workshop Theme",
													img: "/assets/banner-workshop-HgU2xa2j.jpg"
												},
												{
													title: "Cultural Theme",
													img: "/assets/banner-cultural-DyEuO6Ds.jpg"
												}
											].map((preset, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													setSelectedBanner(preset.img);
													setCustomBannerFile(null);
												},
												className: cn("group relative overflow-hidden rounded-2xl border text-left transition-all", selectedBanner === preset.img && !customBannerFile ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: preset.img,
													alt: preset.title,
													className: "aspect-[16/9] w-full object-cover"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "p-2.5 bg-card",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold",
														children: preset.title
													})
												})]
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											onDragOver: (e) => {
												e.preventDefault();
												setIsDraggingBanner(true);
											},
											onDragLeave: () => setIsDraggingBanner(false),
											onDrop: (e) => {
												e.preventDefault();
												setIsDraggingBanner(false);
												if (e.dataTransfer.files && e.dataTransfer.files[0]) handleBannerFileSelect(e.dataTransfer.files[0]);
											},
											className: cn("mt-4 flex flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center transition-all", isDraggingBanner ? "border-primary bg-primary-soft/50 ring-2 ring-primary/20" : "border-border bg-secondary/20 hover:border-primary/50"),
											children: customBannerFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative w-full aspect-[16/9] max-h-52 overflow-hidden rounded-xl border border-primary/30 group",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: selectedBanner,
														alt: "Uploaded Device Banner",
														className: "size-full object-cover"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "secondary",
															size: "sm",
															className: "rounded-xl",
															onClick: () => bannerInputRef.current?.click(),
															children: "Change Image"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "destructive",
															size: "sm",
															className: "rounded-xl",
															onClick: () => {
																setCustomBannerFile(null);
																setSelectedBanner("/assets/banner-hackathon-C2AJiMSF.jpg");
																toast.info("Reset to default banner.");
															},
															children: "Remove"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute bottom-2 left-2 rounded-lg bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur shadow-sm",
														children: [
															"📁 ",
															customBannerFile.name,
															" (",
															(customBannerFile.size / (1024 * 1024)).toFixed(2),
															" MB)"
														]
													})
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-8 text-muted-foreground" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm font-semibold",
													children: "Drag & Drop custom banner image"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: "Recommended ratio: 16:9 · JPG, PNG, WEBP (Max 5MB)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													type: "button",
													variant: "outline",
													size: "sm",
													className: "mt-3 rounded-xl bg-card",
													onClick: () => bannerInputRef.current?.click(),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-1.5 size-3.5" }), " Browse Device Files"]
												})
											] })
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border p-4 space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "font-semibold",
												children: "Official Event Poster"
											}), posterUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative overflow-hidden rounded-xl border border-primary/30 p-2.5 bg-card flex items-center gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: posterUrl,
														alt: "Poster Preview",
														className: "size-16 object-cover rounded-lg shrink-0 border"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-semibold truncate",
															children: posterFile ? posterFile.name : "Custom Event Poster"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] text-muted-foreground",
															children: "Loaded from device"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "ghost",
														size: "icon",
														className: "size-7 text-danger rounded-lg shrink-0",
														onClick: () => {
															setPosterUrl(null);
															setPosterFile(null);
														},
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
													})
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-6 text-muted-foreground" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-xs text-muted-foreground",
														children: "Upload printable event poster from device"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														variant: "outline",
														size: "sm",
														className: "mt-2 text-xs rounded-xl bg-card",
														onClick: () => posterInputRef.current?.click(),
														children: "Upload Poster"
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border p-4 space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "font-semibold",
													children: [
														"Gallery Images Preview (",
														galleryImages.length,
														")"
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													variant: "outline",
													size: "sm",
													className: "h-7 text-xs rounded-xl bg-card",
													onClick: () => galleryInputRef.current?.click(),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 size-3" }), " Add Device Images"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-2",
												children: galleryImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative size-16 overflow-hidden rounded-xl border group",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: img,
														alt: "Gallery",
														className: "size-full object-cover"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setGalleryImages(galleryImages.filter((_, idx) => idx !== i)),
														className: "absolute right-0.5 top-0.5 rounded-full bg-background/80 p-0.5 text-foreground hover:bg-danger hover:text-danger-foreground",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
													})]
												}, i))
											})]
										})]
									})
								]
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold",
										children: "Event Speakers & Keynotes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Add guest speakers, industry mentors, or faculty hosts"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										className: "rounded-xl bg-card",
										onClick: handleAddSpeaker,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 size-4" }), " Add Speaker"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: speakers.map((sp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-card p-4 space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-bold text-primary uppercase tracking-wider",
												children: ["Speaker #", idx + 1]
											}), speakers.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												className: "size-7 text-danger rounded-lg",
												onClick: () => handleRemoveSpeaker(sp.id),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-3 sm:grid-cols-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Full Name"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: sp.name,
														onChange: (e) => handleUpdateSpeaker(sp.id, "name", e.target.value),
														placeholder: "e.g. Dr. Ananya Iyer",
														className: "rounded-xl h-9 text-xs"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Designation / Role"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: sp.designation,
														onChange: (e) => handleUpdateSpeaker(sp.id, "designation", e.target.value),
														placeholder: "e.g. Principal AI Scientist",
														className: "rounded-xl h-9 text-xs"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Organization / Company"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: sp.organization,
														onChange: (e) => handleUpdateSpeaker(sp.id, "organization", e.target.value),
														placeholder: "e.g. Google DeepMind",
														className: "rounded-xl h-9 text-xs"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "LinkedIn URL"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: sp.linkedin,
														onChange: (e) => handleUpdateSpeaker(sp.id, "linkedin", e.target.value),
														placeholder: "https://linkedin.com/in/...",
														className: "rounded-xl h-9 text-xs"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1 sm:col-span-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs",
														children: "Short Biography"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														rows: 2,
														value: sp.bio,
														onChange: (e) => handleUpdateSpeaker(sp.id, "bio", e.target.value),
														placeholder: "Brief bio or keynote topic...",
														className: "rounded-xl text-xs"
													})]
												})
											]
										})]
									}, sp.id))
								})]
							}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Lead Organizer Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: organizerName,
												onChange: (e) => setOrganizerName(e.target.value),
												placeholder: "e.g. Dr. Ananya Iyer / Codecraft Desk",
												className: "rounded-xl"
											}),
											errors.organizerName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.organizerName
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												className: "font-semibold",
												children: ["Official Contact Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-danger",
													children: "*"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "email",
												value: organizerEmail,
												onChange: (e) => setOrganizerEmail(e.target.value),
												placeholder: "organizer@campuspulse.edu",
												className: "rounded-xl"
											}),
											errors.organizerEmail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-danger",
												children: errors.organizerEmail
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Contact Phone Number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: organizerPhone,
											onChange: (e) => setOrganizerPhone(e.target.value),
											placeholder: "+91 98450 11223",
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Department Office"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: organizerDept,
											onChange: (e) => setOrganizerDept(e.target.value),
											className: "rounded-xl"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Cabin / Desk Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: organizerOffice,
											onChange: (e) => setOrganizerOffice(e.target.value),
											placeholder: "e.g. Room 204, Block C",
											className: "rounded-xl"
										})]
									})
								]
							}),
							step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "font-semibold",
										children: "Event Tags"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mb-3",
										children: "Select preset tags or add custom tags for campus discovery"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2 mb-3",
										children: PRESET_TAGS.map((t) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => toggleTag(t),
												className: cn("rounded-full px-3 py-1 text-xs font-semibold transition-all border", tags.includes(t) ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:bg-secondary"),
												children: ["#", t]
											}, t);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 max-w-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: customTagInput,
											onChange: (e) => setCustomTagInput(e.target.value),
											placeholder: "Add custom tag...",
											className: "rounded-xl text-xs",
											onKeyDown: (e) => {
												if (e.key === "Enter") {
													e.preventDefault();
													handleAddCustomTag();
												}
											}
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "sm",
											className: "rounded-xl bg-card",
											onClick: handleAddCustomTag,
											children: "Add"
										})]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 pt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "font-semibold",
											children: "Publishing Settings & Notifications"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-2xl border border-border p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: "Featured Event Banner"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Highlight at the top of campus student feed"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: featured,
												onCheckedChange: setFeatured
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-2xl border border-border p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: "Pin Announcement"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Keep pinned on department landing page"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: pinAnnouncement,
												onCheckedChange: setPinAnnouncement
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-2xl border border-border p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: "Audience Visibility"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: visibility === "Public" ? "Visible to all campus students" : "Restricted to host department only"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: visibility,
												onValueChange: (v) => setVisibility(v),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "w-40 rounded-xl bg-card",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
													className: "rounded-2xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "Public",
														children: "Public Campus"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "Department Only",
														children: "Department Only"
													})]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-2xl border border-border p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: "Send Campus Notifications"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Broadcast push notification to subscribed students"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: enableNotifications,
												onCheckedChange: setEnableNotifications
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-2xl border border-border p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: "Automated 24-Hour Reminder"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Send email & app alert 1 day before event start"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: reminderOneDay,
												onCheckedChange: setReminderOneDay
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between rounded-2xl border border-border p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold",
												children: "Automated 1-Hour Reminder"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Send alert 1 hour before start with venue details"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: reminderOneHour,
												onCheckedChange: setReminderOneHour
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "rounded-xl bg-card",
									disabled: step === 0,
									onClick: () => setStep(step - 1),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "mr-1.5 size-4" }), " Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-2",
									children: step < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "rounded-xl",
										onClick: handleNextStep,
										children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1.5 size-4" })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "rounded-xl shadow-glow",
										onClick: handlePublish,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-1.5 size-4" }), " Publish Announcement"]
									})
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface sticky top-24 overflow-hidden border border-border shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3 text-xs font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), " Live Event Preview"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "rounded-full text-[10px]",
									children: "Realtime Updates"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/9] w-full overflow-hidden bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: selectedBanner,
										alt: "Event Preview Banner",
										className: "size-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute left-3 top-3 flex flex-wrap gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "default",
											className: "rounded-full text-[10px] shadow-sm",
											children: category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "rounded-full text-[10px]",
											children: eventType
										})]
									}),
									certificate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute right-3 top-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											className: "rounded-full bg-success text-success-foreground text-[10px] shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-1 size-3" }), " Certificate"]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
											children: [
												department,
												" · ",
												club
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-lg font-bold leading-snug text-foreground",
											children: title || "Untitled Event"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 line-clamp-2 text-xs text-muted-foreground",
											children: summary || "Short summary preview..."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 rounded-xl border border-border bg-card p-3 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													startDate ? new Date(startDate).toLocaleDateString("en-US", {
														month: "short",
														day: "numeric",
														year: "numeric"
													}) : "Date TBD",
													" (",
													startTime || "--:--",
													" – ",
													endTime || "--:--",
													")"
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: mode === "Online" ? "Online Meeting Link" : `${venue || "Venue TBD"} (${building})`
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Entry: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground",
														children: fee > 0 ? `₹${fee}` : "FREE"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Seats: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
														className: "text-foreground",
														children: [seats, " Seats"]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-primary",
														children: computeCountdown()
													})
												]
											})
										]
									}),
									speakers.length > 0 && speakers[0].name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-semibold text-muted-foreground mb-2",
											children: "Featured Keynote"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-8 place-items-center rounded-full bg-primary-soft text-primary font-bold text-xs",
												children: speakers[0].name[0]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold truncate",
													children: speakers[0].name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[10px] text-muted-foreground truncate",
													children: [
														speakers[0].designation,
														" · ",
														speakers[0].organization
													]
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold text-primary uppercase tracking-wider mb-1",
											children: "Student CTA Button Preview"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "w-full rounded-xl shadow-sm pointer-events-none",
											children: buttonText || "Register Now"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[10px] text-muted-foreground pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Organizer: ", organizerName] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: visibility })]
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl lg:pl-[280px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/organizer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "rounded-xl text-xs",
							children: "Cancel"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "rounded-xl text-xs bg-card",
								onClick: handleSaveDraft,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-1 size-3.5" }), " Save Draft"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "rounded-xl text-xs bg-card",
								onClick: () => setShowPreviewModal(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-1 size-3.5" }), " Preview"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "rounded-xl text-xs shadow-glow",
								onClick: handlePublish,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-1 size-3.5" }), " Publish"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showPreviewModal,
				onOpenChange: setShowPreviewModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-2xl rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold",
							children: "Event Announcement Full Preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "This is how students will see your event on the CampusPulse feed." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/9] w-full overflow-hidden rounded-2xl border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: selectedBanner,
										alt: "Full Banner Preview",
										className: "size-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute left-3 top-3 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "default",
											children: category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											children: eventType
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold text-muted-foreground uppercase",
										children: [
											department,
											" · ",
											club
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-bold mt-1",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-2",
										children: description
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2 sm:grid-cols-2 rounded-2xl border bg-secondary/30 p-4 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Date:" }),
											" ",
											startDate,
											" to ",
											endDate
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Time:" }),
											" ",
											startTime,
											" - ",
											endTime
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Venue:" }),
											" ",
											venue,
											" (",
											building,
											", ",
											room,
											")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mode:" }),
											" ",
											mode
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Seats:" }),
											" ",
											seats,
											" Maximum"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fee:" }),
											" ",
											fee > 0 ? `₹${fee}` : "Free"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setShowPreviewModal(false),
							className: "rounded-xl",
							children: "Close Preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => {
								setShowPreviewModal(false);
								handlePublish();
							},
							className: "rounded-xl shadow-glow",
							children: "Publish Event"
						})] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showSuccessModal,
				onOpenChange: setShowSuccessModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-14 place-items-center rounded-full bg-success-soft text-success mb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-xl font-bold text-center",
							children: "Event Published Successfully!"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
							className: "text-center",
							children: [
								"Your event ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "text-foreground",
									children: [
										"\"",
										title,
										"\""
									]
								}),
								" is now live on the campus announcement feed."
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-4 rounded-2xl border border-border bg-card p-4 text-left space-y-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Lifecycle Stage:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: "Published" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Category:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Start Date:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold",
										children: [
											startDate,
											" at ",
											startTime
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Venue:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: venue
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-col gap-2 sm:flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/events/$eventId",
									params: { eventId: createdEventId },
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "w-full rounded-xl shadow-glow",
										children: "View Published Event"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									onClick: () => {
										setShowSuccessModal(false);
										setStep(0);
										setTitle("");
										setSummary("");
										setDescription("");
									},
									className: "w-full rounded-xl bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 size-4" }), " Create Another Event"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/organizer",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										className: "w-full rounded-xl text-xs",
										children: "Return to Organizer Console"
									})
								})
							]
						})
					]
				})
			})
		]
	});
}
var $$splitComponentImporter$1 = () => import("../_app.organizer.dashboard-CLrmk4oe.mjs");
var Route$3 = createFileRoute("/_app/organizer/dashboard")({
	head: () => ({ meta: [
		{ title: "Organizer Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Manage your events, attendee registrations, QR check-ins, and performance."
		},
		{
			property: "og:title",
			content: "Organizer Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Control center for campus event organizers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var Route$2 = createFileRoute("/_app/organizer/events")({
	head: () => ({ meta: [
		{ title: "Manage Events — CampusPulse" },
		{
			name: "description",
			content: "Manage, monitor, publish, archive, and analyze all created events."
		},
		{
			property: "og:title",
			content: "Manage Events — CampusPulse"
		},
		{
			property: "og:description",
			content: "Your club's event command and operations center."
		}
	] }),
	component: ManageEvents
});
function ManageEvents() {
	const { events: liveEvents } = useLiveEvents();
	const [eventsList, setEventsList] = (0, import_react.useState)(events);
	(0, import_react.useEffect)(() => {
		if (liveEvents.length > 0) {
			const liveIds = new Set(liveEvents.map((e) => e.id));
			const uniqueMock = events.filter((e) => !liveIds.has(e.id));
			setEventsList([...liveEvents, ...uniqueMock]);
		}
	}, [liveEvents]);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [deptFilter, setDeptFilter] = (0, import_react.useState)("All");
	const [catFilter, setCatFilter] = (0, import_react.useState)("All");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [modeFilter, setModeFilter] = (0, import_react.useState)("All");
	const [sortBy, setSortBy] = (0, import_react.useState)("Newest");
	const [viewMode, setViewMode] = (0, import_react.useState)("table");
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [activeModal, setActiveModal] = (0, import_react.useState)({
		type: null,
		event: null
	});
	const counts = (0, import_react.useMemo)(() => {
		return {
			total: eventsList.length,
			draft: eventsList.filter((e) => e.status === "Draft").length,
			pending: eventsList.filter((e) => e.status === "Pending Approval" || e.status === "Submitted").length,
			published: eventsList.filter((e) => e.status === "Published").length,
			upcoming: eventsList.filter((e) => resolveStatus(e) === "Upcoming").length,
			live: eventsList.filter((e) => resolveStatus(e) === "Live").length,
			completed: eventsList.filter((e) => resolveStatus(e) === "Completed").length,
			archived: eventsList.filter((e) => resolveStatus(e) === "Archived" || isExpired(e)).length
		};
	}, [eventsList]);
	const filteredEvents = (0, import_react.useMemo)(() => {
		return eventsList.filter((e) => {
			const resolved = resolveStatus(e);
			const matchesSearch = !searchTerm.trim() || e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.category.toLowerCase().includes(searchTerm.toLowerCase()) || e.department.toLowerCase().includes(searchTerm.toLowerCase()) || e.venue.toLowerCase().includes(searchTerm.toLowerCase()) || e.club.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesDept = deptFilter === "All" || e.department === deptFilter;
			const matchesCat = catFilter === "All" || e.category === catFilter;
			const matchesStatus = statusFilter === "All" || resolved === statusFilter || e.status === statusFilter;
			const matchesMode = modeFilter === "All" || modeFilter === "Online" && e.venue.toLowerCase().includes("virtual") || modeFilter === "Offline" && !e.venue.toLowerCase().includes("virtual");
			return matchesSearch && matchesDept && matchesCat && matchesStatus && matchesMode;
		}).sort((a, b) => {
			if (sortBy === "Newest") return new Date(b.start).getTime() - new Date(a.start).getTime();
			if (sortBy === "Oldest") return new Date(a.start).getTime() - new Date(b.start).getTime();
			if (sortBy === "Most Registrations") return b.registered - a.registered;
			if (sortBy === "Upcoming") return new Date(a.start).getTime() - new Date(b.start).getTime();
			return 0;
		});
	}, [
		eventsList,
		searchTerm,
		deptFilter,
		catFilter,
		statusFilter,
		modeFilter,
		sortBy
	]);
	const archivedEventsSubset = (0, import_react.useMemo)(() => {
		return eventsList.filter((e) => isExpired(e) || e.status === "Archived");
	}, [eventsList]);
	const toggleSelectAll = () => {
		if (selectedIds.length === filteredEvents.length) setSelectedIds([]);
		else setSelectedIds(filteredEvents.map((e) => e.id));
	};
	const toggleSelectId = (id) => {
		if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter((x) => x !== id));
		else setSelectedIds([...selectedIds, id]);
	};
	const handleExecuteAction = async () => {
		const { type, event } = activeModal;
		if (!event || !type) return;
		const numericId = parseInt(event.id, 10);
		if (!isNaN(numericId)) try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const headers = { "Content-Type": "application/json" };
			if (token) headers["Authorization"] = `Bearer ${token}`;
			let url = `${API_BASE_URL}/events/${numericId}`;
			let method = "PATCH";
			if (type === "publish") url += "/publish";
			else if (type === "archive") url += "/archive";
			else if (type === "restore") url += "/restore";
			else if (type === "delete") method = "DELETE";
			const res = await fetch(url, {
				method,
				headers
			});
			const data = await res.json();
			if (!res.ok || !data.success) throw new Error(data.message || "Failed to update event state on backend");
		} catch (err) {
			toast.error(`Backend Error: ${err.message}`);
			setActiveModal({
				type: null,
				event: null
			});
			return;
		}
		if (type === "publish") {
			setEventsList((prev) => prev.map((e) => e.id === event.id ? {
				...e,
				status: "Published"
			} : e));
			toast.success(`Published "${event.title}" to the public campus feed.`);
		}
		if (type === "archive") {
			setEventsList((prev) => prev.map((e) => e.id === event.id ? {
				...e,
				status: "Archived"
			} : e));
			toast.success(`Archived "${event.title}". Moved to historical archive.`);
		}
		if (type === "restore") {
			setEventsList((prev) => prev.map((e) => e.id === event.id ? {
				...e,
				status: "Upcoming"
			} : e));
			toast.success(`Restored "${event.title}" to active upcoming events.`);
		}
		if (type === "delete") {
			setEventsList((prev) => prev.filter((e) => e.id !== event.id));
			toast.success(`Deleted "${event.title}".`);
		}
		setActiveModal({
			type: null,
			event: null
		});
	};
	const handleDuplicate = (event) => {
		const duplicated = {
			...event,
			id: `evt-${Date.now()}`,
			title: `${event.title} (Copy)`,
			status: "Draft",
			registered: 0
		};
		setEventsList([duplicated, ...eventsList]);
		toast.success(`Duplicated "${event.title}" as a new Draft.`);
	};
	const handleExportSingle = (event) => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(event, null, 2));
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", dataStr);
		downloadAnchor.setAttribute("download", `${event.title.replace(/\s+/g, "_")}_export.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
		toast.success(`Exported data for "${event.title}".`);
	};
	const handleBulkPublish = () => {
		setEventsList((prev) => prev.map((e) => selectedIds.includes(e.id) ? {
			...e,
			status: "Published"
		} : e));
		toast.success(`Published ${selectedIds.length} selected events.`);
		setSelectedIds([]);
	};
	const handleBulkArchive = () => {
		setEventsList((prev) => prev.map((e) => selectedIds.includes(e.id) ? {
			...e,
			status: "Archived"
		} : e));
		toast.success(`Archived ${selectedIds.length} selected events.`);
		setSelectedIds([]);
	};
	const handleBulkDelete = () => {
		setEventsList((prev) => prev.filter((e) => !selectedIds.includes(e.id)));
		toast.success(`Deleted ${selectedIds.length} selected events.`);
		setSelectedIds([]);
	};
	const handleBulkExport = () => {
		const selectedData = eventsList.filter((e) => selectedIds.includes(e.id));
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedData, null, 2));
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", dataStr);
		downloadAnchor.setAttribute("download", `campuspulse_bulk_events_${Date.now()}.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
		toast.success(`Exported ${selectedIds.length} selected events.`);
	};
	const resetFilters = () => {
		setSearchTerm("");
		setDeptFilter("All");
		setCatFilter("All");
		setStatusFilter("All");
		setModeFilter("All");
		setSortBy("Newest");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Manage Events",
				subtitle: "Manage, monitor, publish, archive, and analyze all created events.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Organizer",
						to: "/organizer"
					},
					{ label: "Manage Events" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card shadow-sm",
						onClick: () => {
							const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(eventsList, null, 2));
							const anchor = document.createElement("a");
							anchor.setAttribute("href", dataStr);
							anchor.setAttribute("download", `all_events_export.json`);
							anchor.click();
							toast.success("Exported full events database.");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4 text-muted-foreground" }), " Export All"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/organizer/create",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "rounded-xl shadow-glow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "mr-2 size-4" }), " Create Event"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Events Overview Statistics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: [eventsList.length, " Total Registered Events"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Events",
						value: counts.total,
						icon: Layers,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Draft",
						value: counts.draft,
						icon: FilePen,
						tone: "warning",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending",
						value: counts.pending,
						icon: Hourglass,
						tone: "warning",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Published",
						value: counts.published,
						icon: Megaphone,
						tone: "primary",
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Upcoming",
						value: counts.upcoming,
						icon: CalendarClock,
						tone: "primary",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live",
						value: counts.live,
						icon: Radio,
						tone: "danger",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Completed",
						value: counts.completed,
						icon: CircleCheck,
						tone: "success",
						index: 6
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Archived",
						value: counts.archived,
						icon: FolderArchive,
						tone: "warning",
						index: 7
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Events Controls & Filters",
				description: "Search, filter, sort, and switch layout view modes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: searchTerm,
									onChange: (e) => setSearchTerm(e.target.value),
									placeholder: "Search by event title, category, department, venue...",
									className: "rounded-xl pl-9 bg-card"
								}),
								searchTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchTerm(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-1.5 sm:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2 text-xs font-semibold text-muted-foreground",
									children: "View Layout:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "grid" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("grid"),
									className: "rounded-xl text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "mr-1.5 size-3.5" }), " Grid"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "table" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("table"),
									className: "rounded-xl text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "mr-1.5 size-3.5" }), " Table"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: viewMode === "timeline" ? "default" : "outline",
									size: "sm",
									onClick: () => setViewMode("timeline"),
									className: "rounded-xl text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1.5 size-3.5" }), " Timeline"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Department"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: deptFilter,
								onValueChange: setDeptFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "All",
										children: "All Departments"
									}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d,
										children: d
									}, d))]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: catFilter,
								onValueChange: setCatFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "All",
										children: "All Categories"
									}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: c,
										children: c
									}, c))]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: statusFilter,
								onValueChange: setStatusFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Draft",
											children: "Draft"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Pending Approval",
											children: "Pending Approval"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Published",
											children: "Published"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Upcoming",
											children: "Upcoming"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Live",
											children: "Live"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Completed",
											children: "Completed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Archived",
											children: "Archived"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Mode"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: modeFilter,
								onValueChange: setModeFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Modes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Offline",
											children: "Offline"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Online",
											children: "Online"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Sort By"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: sortBy,
								onValueChange: setSortBy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Newest",
											children: "Newest First"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Oldest",
											children: "Oldest First"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Most Registrations",
											children: "Most Signups"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Upcoming",
											children: "Soonest Date"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: resetFilters,
									className: "h-9 w-full rounded-xl text-xs text-muted-foreground hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 size-3.5" }), " Reset Filters"]
								})
							})
						]
					})]
				})
			}),
			selectedIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-20 z-30 flex items-center justify-between rounded-2xl border border-primary bg-primary-soft/90 px-5 py-3 shadow-lg backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-semibold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						selectedIds.length,
						" Event",
						selectedIds.length > 1 ? "s" : "",
						" Selected"
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl bg-card text-xs",
							onClick: handleBulkPublish,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "mr-1.5 size-3.5 text-primary" }), " Bulk Publish"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl bg-card text-xs",
							onClick: handleBulkArchive,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "mr-1.5 size-3.5 text-warning" }), " Bulk Archive"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "rounded-xl bg-card text-xs",
							onClick: handleBulkExport,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-3.5 text-muted-foreground" }), " Bulk Export"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "destructive",
							className: "rounded-xl text-xs",
							onClick: handleBulkDelete,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1.5 size-3.5" }), " Bulk Delete"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							className: "rounded-xl text-xs",
							onClick: () => setSelectedIds([]),
							children: "Clear"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `Events Directory (${filteredEvents.length})`,
				description: `Showing ${filteredEvents.length} of ${eventsList.length} events`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						checked: filteredEvents.length > 0 && selectedIds.length === filteredEvents.length,
						onCheckedChange: toggleSelectAll,
						id: "select-all"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "select-all",
						className: "text-xs font-semibold text-muted-foreground cursor-pointer select-none",
						children: [
							"Select All (",
							filteredEvents.length,
							")"
						]
					})]
				}),
				children: filteredEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Search,
					title: "No events match your filters",
					description: "Try clearing your search terms or selecting different filters.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: resetFilters,
						className: "rounded-xl bg-card",
						children: "Reset Filters"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					viewMode === "grid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: filteredEvents.map((e) => {
							const percent = Math.round(e.registered / e.seats * 100);
							const isSelected = selectedIds.includes(e.id);
							const status = resolveStatus(e);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-md", isSelected ? "border-primary ring-2 ring-primary/20" : "border-border"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[16/9] w-full overflow-hidden bg-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: e.banner,
												alt: e.title,
												className: "size-full object-cover transition-transform group-hover:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute left-3 top-3 flex gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
													checked: isSelected,
													onCheckedChange: () => toggleSelectId(e.id),
													className: "bg-background/80"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "default",
													className: "rounded-full text-[10px] shadow-sm",
													children: e.category
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute right-3 top-3",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 space-y-3 flex-1 flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider",
												children: [
													e.department,
													" · ",
													e.club
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/events/$eventId",
												params: { eventId: e.id },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-1 font-bold text-foreground text-sm line-clamp-1 hover:underline",
													children: e.title
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground line-clamp-2",
												children: e.summary
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 pt-2 border-t text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: format(new Date(e.start), "dd MMM yyyy, h:mm a") })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "truncate",
														children: e.venue
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-[11px]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground",
															children: "Seats Registered"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-semibold text-foreground",
															children: [
																e.registered,
																" / ",
																e.seats,
																" (",
																percent,
																"%)"
															]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
														value: percent,
														className: "h-1.5"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-[10px] text-muted-foreground pt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" }), " 1.2k Views"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "size-3" }), " 142 Saved"]
													})]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border bg-secondary/30 px-4 py-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/events/$eventId",
											params: { eventId: e.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "sm",
												className: "h-7 rounded-lg text-xs",
												children: "View Event"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												className: "size-7 rounded-lg",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
											align: "end",
											className: "w-48 rounded-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Event Actions" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
													asChild: true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/events/$eventId",
														params: { eventId: e.id },
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 size-4" }), " View Details"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
													asChild: true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/organizer/create",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 size-4" }), " Edit Event"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => handleDuplicate(e),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "mr-2 size-4" }), " Duplicate"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => handleExportSingle(e),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), " Export Data"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
												status !== "Published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "publish",
														event: e
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "mr-2 size-4 text-primary" }), " Publish"]
												}),
												status !== "Archived" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "archive",
														event: e
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "mr-2 size-4 text-warning" }), " Archive"]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "restore",
														event: e
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 size-4 text-success" }), " Restore"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "delete",
														event: e
													}),
													className: "text-danger",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 size-4" }), " Delete Event"]
												})
											]
										})] })]
									})
								]
							}, e.id);
						})
					}),
					viewMode === "table" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-2xl border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
							className: "bg-secondary/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "w-10 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: filteredEvents.length > 0 && selectedIds.length === filteredEvents.length,
										onCheckedChange: toggleSelectAll
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "hidden md:table-cell",
									children: "Department"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "hidden lg:table-cell",
									children: "Venue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Start Date" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "hidden md:table-cell",
									children: "Registrations"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
									className: "text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredEvents.map((e) => {
							const percent = Math.round(e.registered / e.seats * 100);
							const isSelected = selectedIds.includes(e.id);
							const status = resolveStatus(e);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
								className: cn(isSelected && "bg-primary-soft/30"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											checked: isSelected,
											onCheckedChange: () => toggleSelectId(e.id)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "max-w-[280px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: e.banner,
												alt: "",
												className: "size-10 rounded-xl object-cover shrink-0 hidden sm:block"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/events/$eventId",
													params: { eventId: e.id },
													className: "font-semibold text-sm hover:text-primary line-clamp-1",
													children: e.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-muted-foreground",
													children: [
														e.category,
														" · ",
														e.club
													]
												})]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "hidden md:table-cell text-xs text-muted-foreground",
										children: e.department
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "hidden lg:table-cell text-xs text-muted-foreground truncate max-w-[140px]",
										children: e.venue
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-xs font-medium text-foreground whitespace-nowrap",
										children: format(new Date(e.start), "dd MMM yyyy")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "hidden md:table-cell max-w-[140px]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-[11px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold",
													children: [
														e.registered,
														"/",
														e.seats
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted-foreground",
													children: [percent, "%"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
												value: percent,
												className: "h-1.5"
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
										className: "text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "icon",
												variant: "ghost",
												className: "size-8 rounded-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
											align: "end",
											className: "w-48 rounded-2xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
													asChild: true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/events/$eventId",
														params: { eventId: e.id },
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 size-4" }), " View Details"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
													asChild: true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														to: "/organizer/create",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 size-4" }), " Edit Event"]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => handleDuplicate(e),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "mr-2 size-4" }), " Duplicate"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => handleExportSingle(e),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), " Export JSON"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
												status !== "Published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "publish",
														event: e
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "mr-2 size-4 text-primary" }), " Publish"]
												}),
												status !== "Archived" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "archive",
														event: e
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "mr-2 size-4 text-warning" }), " Archive"]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "restore",
														event: e
													}),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 size-4 text-success" }), " Restore"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
													onClick: () => setActiveModal({
														type: "delete",
														event: e
													}),
													className: "text-danger",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 size-4" }), " Delete"]
												})
											]
										})] })
									})
								]
							}, e.id);
						}) })] })
					}),
					viewMode === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative space-y-6 pl-6 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-border" }), filteredEvents.map((e) => {
							const status = resolveStatus(e);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:bg-secondary/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-6 top-5 size-3.5 rounded-full border-2 border-background bg-primary ring-4 ring-primary/10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "rounded-lg text-[10px]",
													children: format(new Date(e.start), "dd MMM yyyy, h:mm a")
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/events/$eventId",
												params: { eventId: e.id },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-bold text-foreground text-sm hover:underline",
													children: e.title
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													e.department,
													" · ",
													e.club,
													" · Organizer: ",
													e.organizer
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "secondary",
											className: "rounded-full text-xs",
											children: [
												e.registered,
												" / ",
												e.seats,
												" Seats"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/events/$eventId",
											params: { eventId: e.id },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												className: "rounded-xl text-xs bg-card",
												children: "View Event"
											})
										})]
									})
								]
							}, e.id);
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Automatic Archive Queue",
				description: "Events approaching automatic archival as end datetimes pass",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-2xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						className: "bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Event" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Ends In" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estimated Archive Time" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Current Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Progress" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: archiveQueue().slice(0, 4).map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "font-semibold text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events/$eventId",
								params: { eventId: q.event.id },
								className: "hover:text-primary",
								children: q.event.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: q.event.department
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "text-xs font-semibold text-warning",
							children: [
								"In ",
								Math.max(1, Math.round(q.endsInMs / 864e5)),
								" days"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-xs text-muted-foreground",
							children: format(new Date(q.estimatedArchive), "dd MMM yyyy, h:mm a")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: q.status }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "w-36",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: Math.min(90, Math.round(q.event.registered / q.event.seats * 100)),
								className: "h-1.5"
							})
						})
					] }, q.event.id)) })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `Archived Events Record (${archivedEventsSubset.length})`,
				description: "Historical events automatically archived upon completion",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/archive-manager",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "rounded-xl text-xs bg-card",
						children: "View Archive Manager"
					})
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: archivedEventsSubset.map((e) => {
						const meta = getArchiveMeta(e.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "rounded-full text-[10px]",
										children: ["Archived on ", format(new Date(meta.archivedAt), "dd MMM yyyy")]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: "Archived" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-sm text-foreground line-clamp-1",
									children: e.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [
										e.department,
										" · ",
										e.club
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-2.5 text-center text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Attended"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground",
											children: e.attended ?? e.registered
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Certificates"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-primary",
											children: meta.certificates
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Rating"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold text-success",
											children: [meta.feedbackScore, " ★"]
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/summary/$eventId",
										params: { eventId: e.id },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "sm",
											className: "h-7 text-xs rounded-lg",
											children: "View Summary"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										className: "h-7 text-xs rounded-lg bg-card",
										onClick: () => handleDuplicate(e),
										children: "Duplicate"
									})]
								})
							]
						}, e.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: activeModal.type !== null,
				onOpenChange: () => setActiveModal({
					type: null,
					event: null
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-lg font-bold",
							children: [
								activeModal.type === "publish" && "Publish Event",
								activeModal.type === "archive" && "Archive Event",
								activeModal.type === "restore" && "Restore Event",
								activeModal.type === "delete" && "Delete Event"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Are you sure you want to ",
							activeModal.type,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-foreground",
								children: [
									"\"",
									activeModal.event?.title,
									"\""
								]
							}),
							"?"
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-2 text-xs text-muted-foreground",
							children: [
								activeModal.type === "publish" && "This event will become immediately visible on the public campus announcement feed.",
								activeModal.type === "archive" && "This event will be moved out of the active feed into historical archive records.",
								activeModal.type === "restore" && "This event will be restored back into active upcoming events.",
								activeModal.type === "delete" && "This action is permanent and will remove event records."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setActiveModal({
								type: null,
								event: null
							}),
							className: "rounded-xl",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: activeModal.type === "delete" ? "destructive" : "default",
							onClick: handleExecuteAction,
							className: "rounded-xl shadow-sm",
							children: ["Confirm ", activeModal.type?.toUpperCase()]
						})] })
					]
				})
			})
		]
	});
}
var Route$1 = createFileRoute("/_app/organizer/registrations")({
	head: () => ({ meta: [
		{ title: "Registration Management — CampusPulse" },
		{
			name: "description",
			content: "Manage event registrations, attendance, certificates, and participant status."
		},
		{
			property: "og:title",
			content: "Registration Management — CampusPulse"
		},
		{
			property: "og:description",
			content: "Complete registrant operations, QR check-in, and certificate issuance."
		}
	] }),
	component: RegistrationManagement
});
function RegistrationManagement() {
	const { events: liveEvents, loading: loadingEvents } = useLiveEvents();
	const [selectedEventId, setSelectedEventId] = (0, import_react.useState)("evt-001");
	(0, import_react.useEffect)(() => {
		if (liveEvents.length > 0 && selectedEventId === "evt-001") setSelectedEventId(liveEvents[0].id);
	}, [liveEvents, selectedEventId]);
	const selectedEvent = (0, import_react.useMemo)(() => liveEvents.find((e) => e.id === selectedEventId) || liveEvents[0] || events[0], [selectedEventId, liveEvents]);
	const [roster, setRoster] = (0, import_react.useState)([]);
	const [loadingRoster, setLoadingRoster] = (0, import_react.useState)(false);
	function apiRegistrantToDetailedRegistrant(r) {
		return {
			id: String(r.id),
			regId: r.qr_code || `REG-${r.id}`,
			name: r.student_name || "Unknown Student",
			roll: r.student_phone || "Roll Number",
			dept: r.department_name || "Computer Science",
			year: r.student_year ? `${r.student_year}` : "3rd Year",
			email: r.student_email || "",
			phone: r.student_phone || "",
			regDate: r.registration_date ? r.registration_date.split(" ")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			status: r.status === "Confirmed" ? "Approved" : r.status,
			attended: !!r.checked_in || r.status === "Checked In",
			attendanceTime: r.checked_in_time ? new Date(r.checked_in_time).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			}) : void 0,
			paid: true,
			feeAmount: 0,
			certificateStatus: r.certificate_token ? "Issued" : "Pending",
			certificateHash: r.certificate_token || void 0,
			emergencyContact: "+91 98765 00000",
			waitlistPos: r.status === "Waitlisted" ? 1 : void 0,
			notes: r.notes || ""
		};
	}
	const fetchRegistrations = async () => {
		const numericEventId = selectedEvent.dbId || parseInt(selectedEventId, 10);
		if (isNaN(numericEventId)) {
			setRoster([]);
			return;
		}
		setLoadingRoster(true);
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const headers = {};
			if (token) headers["Authorization"] = `Bearer ${token}`;
			const res = await fetch(`${API_BASE_URL}/events/${numericEventId}/registrations`, { headers });
			const data = await res.json();
			if (res.ok && data.success && Array.isArray(data.data)) setRoster(data.data.map(apiRegistrantToDetailedRegistrant));
			else setRoster([]);
		} catch (err) {
			console.warn("Failed to load registrations:", err);
			setRoster([]);
		} finally {
			setLoadingRoster(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchRegistrations();
	}, [selectedEventId, selectedEvent]);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [attendanceFilter, setAttendanceFilter] = (0, import_react.useState)("All");
	const [certFilter, setCertFilter] = (0, import_react.useState)("All");
	const [deptFilter, setDeptFilter] = (0, import_react.useState)("All");
	const [yearFilter, setYearFilter] = (0, import_react.useState)("All");
	const [sortBy, setSortBy] = (0, import_react.useState)("Newest");
	const [selectedIds, setSelectedIds] = (0, import_react.useState)([]);
	const [activeParticipant, setActiveParticipant] = (0, import_react.useState)(null);
	const [organizerNotesInput, setOrganizerNotesInput] = (0, import_react.useState)("");
	const [showExportModal, setShowExportModal] = (0, import_react.useState)(false);
	const [showQrModal, setShowQrModal] = (0, import_react.useState)(false);
	const [showCertPreviewModal, setShowCertPreviewModal] = (0, import_react.useState)(null);
	const [confirmModal, setConfirmModal] = (0, import_react.useState)({
		type: null,
		registrant: null
	});
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: roster.length,
			approved: roster.filter((r) => r.status === "Approved" || r.status === "Confirmed").length,
			pending: roster.filter((r) => r.status === "Pending").length,
			waitlisted: roster.filter((r) => r.status === "Waitlisted").length,
			rejected: roster.filter((r) => r.status === "Rejected").length,
			checkedIn: roster.filter((r) => r.attended).length,
			certsIssued: roster.filter((r) => r.certificateStatus === "Issued").length
		};
	}, [roster]);
	const filteredRoster = (0, import_react.useMemo)(() => {
		return roster.filter((r) => {
			const matchesSearch = !searchTerm.trim() || r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.roll.toLowerCase().includes(searchTerm.toLowerCase()) || r.email.toLowerCase().includes(searchTerm.toLowerCase()) || r.dept.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesStatus = statusFilter === "All" || r.status === statusFilter;
			const matchesAtt = attendanceFilter === "All" || attendanceFilter === "Present" && r.attended || attendanceFilter === "Absent" && !r.attended;
			const matchesCert = certFilter === "All" || r.certificateStatus === certFilter;
			const matchesDept = deptFilter === "All" || r.dept === deptFilter;
			const matchesYear = yearFilter === "All" || r.year === yearFilter;
			return matchesSearch && matchesStatus && matchesAtt && matchesCert && matchesDept && matchesYear;
		}).sort((a, b) => {
			if (sortBy === "Newest") return new Date(b.regDate).getTime() - new Date(a.regDate).getTime();
			if (sortBy === "Oldest") return new Date(a.regDate).getTime() - new Date(b.regDate).getTime();
			if (sortBy === "Alphabetical") return a.name.localeCompare(b.name);
			return 0;
		});
	}, [
		roster,
		searchTerm,
		statusFilter,
		attendanceFilter,
		certFilter,
		deptFilter,
		yearFilter,
		sortBy
	]);
	const toggleSelectAll = () => {
		if (selectedIds.length === filteredRoster.length) setSelectedIds([]);
		else setSelectedIds(filteredRoster.map((r) => r.id));
	};
	const toggleSelectId = (id) => {
		if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter((x) => x !== id));
		else setSelectedIds([...selectedIds, id]);
	};
	const handleApprove = async (r) => {
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const res = await fetch(`${API_BASE_URL}/registrations/${r.id}/approve`, {
				method: "PATCH",
				headers: { "Authorization": `Bearer ${token}` }
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.success(`Approved registration for ${r.name}`);
				fetchRegistrations();
			} else toast.error(data.message || "Failed to approve registration");
		} catch (err) {
			toast.error(err.message || "Request failed");
		}
	};
	const handleReject = async (r) => {
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const res = await fetch(`${API_BASE_URL}/registrations/${r.id}/reject`, {
				method: "PATCH",
				headers: { "Authorization": `Bearer ${token}` }
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.error(`Rejected registration for ${r.name}`);
				fetchRegistrations();
			} else toast.error(data.message || "Failed to reject registration");
		} catch (err) {
			toast.error(err.message || "Request failed");
		}
	};
	const handleWaitlist = (r) => {
		toast.warning("Waitlist placement is auto-managed by database capacity validation.");
	};
	const handleToggleAttendance = async (r) => {
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const res = await fetch(`${API_BASE_URL}/attendance/verify-qr`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify({
					qr_token: r.regId,
					event_id: selectedEvent.dbId || parseInt(selectedEventId, 10)
				})
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.success(`Marked attendance successfully for ${r.name}`);
				fetchRegistrations();
			} else toast.error(data.message || "Attendance verification failed.");
		} catch (err) {
			toast.error(err.message || "Attendance request failed");
		}
	};
	const handleIssueCertificate = async (r) => {
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const res = await fetch(`${API_BASE_URL}/certificates/generate/${r.id}`, {
				method: "POST",
				headers: { "Authorization": `Bearer ${token}` }
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.success(`Issued certificate for ${r.name}`);
				fetchRegistrations();
			} else toast.error(data.message || "Failed to issue certificate");
		} catch (err) {
			toast.error(err.message || "Request failed");
		}
	};
	const handleBatchIssueCertificates = async () => {
		const numericEventId = selectedEvent.dbId || parseInt(selectedEventId, 10);
		if (isNaN(numericEventId)) return;
		try {
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			const token = localStorage.getItem("campuspulse_jwt_token");
			const res = await fetch(`${API_BASE_URL}/events/${numericEventId}/generate-certificates`, {
				method: "POST",
				headers: { "Authorization": `Bearer ${token}` }
			});
			const data = await res.json();
			if (res.ok && data.success) {
				toast.success("Batch certificates issued successfully!");
				fetchRegistrations();
			} else toast.error(data.message || "Failed to generate batch certificates.");
		} catch (err) {
			toast.error(err.message || "Request failed");
		}
	};
	const handleSaveNotes = () => {
		if (!activeParticipant) return;
		setRoster((prev) => prev.map((item) => item.id === activeParticipant.id ? {
			...item,
			notes: organizerNotesInput
		} : item));
		setActiveParticipant({
			...activeParticipant,
			notes: organizerNotesInput
		});
		toast.success("Saved organizer notes.");
	};
	const handleExportReport = (type) => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(roster, null, 2));
		const anchor = document.createElement("a");
		anchor.setAttribute("href", dataStr);
		anchor.setAttribute("download", `${selectedEvent.title.replace(/\s+/g, "_")}_${type.toLowerCase()}_report.json`);
		anchor.click();
		toast.success(`Exported ${type} Report successfully.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Registration Management",
				subtitle: "Manage event registrations, attendance, certificates, and participant status.",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Organizer",
						to: "/organizer"
					},
					{ label: "Registrations" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card shadow-sm",
						onClick: () => setShowExportModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4 text-primary" }), " Export Registrations"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "rounded-xl shadow-glow",
						onClick: () => setShowQrModal(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-2 size-4" }), " QR Check-In"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Select Active Event"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: selectedEventId,
						onValueChange: setSelectedEventId,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "mt-1.5 w-full md:w-80 rounded-xl bg-card font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
							className: "rounded-2xl",
							children: (liveEvents.length > 0 ? liveEvents : events).map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: ev.id,
								children: [
									ev.title,
									" (",
									resolveStatus(ev),
									")"
								]
							}, ev.id))
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: resolveStatus(selectedEvent) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "rounded-full text-xs",
							children: selectedEvent.category
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-[140px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: selectedEvent.banner,
						alt: selectedEvent.title,
						className: "h-24 w-full rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold text-foreground",
									children: selectedEvent.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted-foreground",
									children: ["Deadline: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: format(new Date(selectedEvent.start), "dd MMM yyyy") })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									selectedEvent.department,
									" · ",
									selectedEvent.club,
									" · ",
									selectedEvent.venue
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-4 pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Capacity Usage"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold",
											children: [
												selectedEvent.registered,
												" / ",
												selectedEvent.seats,
												" (",
												Math.round(selectedEvent.registered / selectedEvent.seats * 100),
												"%)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: Math.round(selectedEvent.registered / selectedEvent.seats * 100),
										className: "h-2"
									})]
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Registrant & Attendance Metrics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "rounded-full text-[10px]",
					children: "Realtime Updates"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Signups",
						value: stats.total,
						icon: Users,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Approved",
						value: stats.approved,
						icon: CircleCheck,
						tone: "success",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending Review",
						value: stats.pending,
						icon: Hourglass,
						tone: "warning",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Waitlisted",
						value: stats.waitlisted,
						icon: Clock,
						index: 3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Rejected",
						value: stats.rejected,
						icon: UserX,
						tone: "danger",
						index: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Checked In",
						value: stats.checkedIn,
						icon: QrCode,
						tone: "success",
						index: 5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certs Issued",
						value: stats.certsIssued,
						icon: Award,
						tone: "primary",
						index: 6
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Attendance Control Panel",
					description: "Live check-in statistics & scanning tools",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-4 gap-2 rounded-xl bg-secondary/40 p-3 text-center text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Registered"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-sm",
									children: stats.approved
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Present"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-success text-sm",
									children: stats.checkedIn
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Absent"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-danger text-sm",
									children: stats.approved - stats.checkedIn
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Attendance %"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-primary text-sm",
									children: [stats.approved > 0 ? Math.round(stats.checkedIn / stats.approved * 100) : 0, "%"]
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "rounded-xl text-xs shadow-glow",
								onClick: () => setShowQrModal(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1.5 size-3.5" }), " Launch QR Scanner"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								className: "rounded-xl text-xs bg-card",
								onClick: () => {
									setRoster((prev) => prev.map((r) => ({
										...r,
										attended: true,
										attendanceTime: "10:00 AM"
									})));
									toast.success("Marked all approved registrants as Present.");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "mr-1.5 size-3.5 text-success" }), " Bulk Check-In All"]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
					title: "Certificate Issuance Panel",
					description: "Generate & issue digital completion certificates",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-2 rounded-xl bg-secondary/40 p-3 text-center text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Eligible (Attended)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-foreground text-sm",
									children: stats.checkedIn
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Issued"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-primary text-sm",
									children: stats.certsIssued
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-[10px]",
									children: "Pending"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-warning text-sm",
									children: stats.checkedIn - stats.certsIssued
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								className: "rounded-xl text-xs bg-primary shadow-sm",
								onClick: handleBatchIssueCertificates,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-1.5 size-3.5" }), " Batch Issue Certificates"]
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Registrant Directory Filters",
				description: "Search student records, status, attendance, and department",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: searchTerm,
							onChange: (e) => setSearchTerm(e.target.value),
							placeholder: "Search by student name, roll number, email, department...",
							className: "h-10 rounded-xl bg-card pl-10"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: statusFilter,
								onValueChange: setStatusFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Approved",
											children: "Approved"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Pending",
											children: "Pending Review"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Waitlisted",
											children: "Waitlisted"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Rejected",
											children: "Rejected"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Attendance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: attendanceFilter,
								onValueChange: setAttendanceFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Attendance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Present",
											children: "Present (Checked In)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Absent",
											children: "Absent"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Certificate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: certFilter,
								onValueChange: setCertFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Certificates"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Issued",
											children: "Issued"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Pending",
											children: "Pending"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Department"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: deptFilter,
								onValueChange: setDeptFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "All",
										children: "All Departments"
									}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d,
										children: d
									}, d))]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Academic Year"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: yearFilter,
								onValueChange: setYearFilter,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "All",
											children: "All Years"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "1st",
											children: "1st Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "2nd",
											children: "2nd Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "3rd",
											children: "3rd Year"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "4th",
											children: "4th Year"
										})
									]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
								children: "Sort By"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: sortBy,
								onValueChange: setSortBy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "h-9 rounded-xl bg-card text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
									className: "rounded-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Newest",
											children: "Newest First"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Oldest",
											children: "Oldest First"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: "Alphabetical",
											children: "Alphabetical"
										})
									]
								})]
							})] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `Registrant Roster (${filteredRoster.length})`,
				description: "Click any participant row to open the complete details drawer.",
				children: filteredRoster.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Users,
					title: "No registrants found",
					description: "No student records match the selected search criteria or filters."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-2xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						className: "bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "w-10 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: filteredRoster.length > 0 && selectedIds.length === filteredRoster.length,
									onCheckedChange: toggleSelectAll
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Registration ID" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Student" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden md:table-cell",
								children: "Department & Year"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden lg:table-cell",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden xl:table-cell",
								children: "Reg. Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Attendance" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "hidden lg:table-cell",
								children: "Certificate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filteredRoster.map((r) => {
						const isSelected = selectedIds.includes(r.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
							className: cn("cursor-pointer hover:bg-secondary/40 transition-colors", isSelected && "bg-primary-soft/30"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-center",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: isSelected,
										onCheckedChange: () => toggleSelectId(r.id)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "font-mono text-xs font-semibold text-primary",
									onClick: () => setActiveParticipant(r),
									children: r.regId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									onClick: () => setActiveParticipant(r),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 min-w-[180px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 shrink-0 place-items-center rounded-xl bg-primary-soft font-bold text-primary text-xs",
											children: r.name.split(" ").map((n) => n[0]).join("")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-foreground text-sm hover:underline",
											children: r.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: r.roll
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "hidden md:table-cell text-xs text-muted-foreground",
									onClick: () => setActiveParticipant(r),
									children: [
										r.dept,
										" (",
										r.year,
										" Yr)"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
									className: "hidden lg:table-cell text-xs text-muted-foreground",
									onClick: () => setActiveParticipant(r),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.email }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px]",
										children: r.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "hidden xl:table-cell text-xs text-muted-foreground whitespace-nowrap",
									onClick: () => setActiveParticipant(r),
									children: r.regDate
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									onClick: () => setActiveParticipant(r),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: r.attended ? "default" : "outline",
										className: cn("rounded-full text-[10px]", r.attended ? "bg-success text-success-foreground" : "text-muted-foreground"),
										children: r.attended ? `Present (${r.attendanceTime || "Checked-in"})` : "Absent"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "hidden lg:table-cell",
									onClick: () => setActiveParticipant(r),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: r.certificateStatus === "Issued" ? "default" : "secondary",
										className: "rounded-full text-[10px]",
										children: r.certificateStatus
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									onClick: () => setActiveParticipant(r),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: r.status === "Approved" ? "default" : r.status === "Waitlisted" ? "secondary" : "outline",
										className: "rounded-full text-[11px]",
										children: r.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									onClick: (e) => e.stopPropagation(),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon",
											className: "size-8 rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
										align: "end",
										className: "w-48 rounded-2xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Participant Actions" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setActiveParticipant(r),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 size-4" }), " View Full Profile"]
											}),
											r.status !== "Approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => handleApprove(r),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 size-4 text-success" }), " Approve"]
											}),
											r.status !== "Rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => handleReject(r),
												className: "text-danger",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "mr-2 size-4" }), " Reject"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => handleWaitlist(r),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-2 size-4" }), " Move to Waitlist"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => handleToggleAttendance(r),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-2 size-4 text-primary" }),
													" ",
													r.attended ? "Mark Absent" : "Mark Present"
												]
											}),
											r.attended && r.certificateStatus !== "Issued" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => handleIssueCertificate(r),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-2 size-4 text-primary" }), " Issue Certificate"]
											}),
											r.certificateStatus === "Issued" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
												onClick: () => setShowCertPreviewModal(r),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mr-2 size-4 text-primary" }), " Preview Certificate"]
											})
										]
									})] })
								})
							]
						}, r.id);
					}) })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: `Waitlist Queue (${stats.waitlisted})`,
				description: "Students awaiting seat availability in registration order",
				children: stats.waitlisted === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground p-4 text-center border border-dashed rounded-xl",
					children: "No students currently waitlisted."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-2xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
						className: "bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "w-16",
								children: "Rank"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Student" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Department" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Reg Date" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Action"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: roster.filter((r) => r.status === "Waitlisted").map((r, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "font-bold text-xs text-primary",
							children: ["#", idx + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "font-semibold text-xs",
							children: [
								r.name,
								" (",
								r.roll,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-xs text-muted-foreground",
							children: r.dept
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-xs text-muted-foreground",
							children: r.regDate
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "h-7 text-xs rounded-lg",
								onClick: () => handleApprove(r),
								children: "Promote to Approved"
							})
						})
					] }, r.id)) })] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Export & Reporting Center",
				description: "Download student rosters, attendance logs, and certificates",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
					children: [
						{
							label: "CSV Export",
							icon: FileSpreadsheet,
							type: "CSV"
						},
						{
							label: "Excel Roster",
							icon: FileText,
							type: "Excel"
						},
						{
							label: "PDF Summary",
							icon: FileCheck,
							type: "PDF"
						},
						{
							label: "Attendance Log",
							icon: QrCode,
							type: "Attendance"
						},
						{
							label: "Certificate List",
							icon: Award,
							type: "Certificate"
						},
						{
							label: "Full Report",
							icon: Printer,
							type: "Full"
						}
					].map((exp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleExportReport(exp.type),
						className: "flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary hover:bg-primary-soft/30 hover:shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(exp.icon, { className: "size-6 text-primary mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-foreground",
								children: exp.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground",
								children: "Download file"
							})
						]
					}, exp.type))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: activeParticipant !== null,
				onOpenChange: () => setActiveParticipant(null),
				children: activeParticipant && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-xl rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-full bg-primary-soft font-bold text-primary text-base",
								children: activeParticipant.name.split(" ").map((n) => n[0]).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-lg font-bold",
								children: activeParticipant.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
								activeParticipant.roll,
								" · ",
								activeParticipant.dept,
								" (",
								activeParticipant.year,
								" Year)"
							] })] })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 rounded-xl bg-secondary/40 p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: activeParticipant.status === "Approved" ? "Published" : activeParticipant.status === "Pending" ? "Pending Approval" : "Archived" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: activeParticipant.attended ? "default" : "outline",
											className: "rounded-full",
											children: activeParticipant.attended ? "Attended" : "Absent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "secondary",
											className: "rounded-full",
											children: ["Cert: ", activeParticipant.certificateStatus]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-2 rounded-2xl border p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Registration ID"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: activeParticipant.regId
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Registration Date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: activeParticipant.regDate
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: activeParticipant.email
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Phone Number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: activeParticipant.phone
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Emergency Contact"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: activeParticipant.emergencyContact
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-[10px]",
											children: "Certificate Verification Hash"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[10px] font-bold text-primary",
											children: activeParticipant.certificateHash || "N/A"
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-semibold",
											children: "Organizer Notes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											rows: 3,
											value: organizerNotesInput || activeParticipant.notes || "",
											onChange: (e) => setOrganizerNotesInput(e.target.value),
											placeholder: "Add internal notes about this student's registration or attendance...",
											className: "rounded-xl text-xs"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											className: "rounded-xl text-xs bg-card mt-1",
											onClick: handleSaveNotes,
											children: "Save Notes"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "rounded-xl text-xs",
								onClick: () => setActiveParticipant(null),
								children: "Close"
							}), activeParticipant.status !== "Approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "rounded-xl text-xs bg-success text-success-foreground",
								onClick: () => {
									handleApprove(activeParticipant);
									setActiveParticipant(null);
								},
								children: "Approve Registration"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showQrModal,
				onOpenChange: setShowQrModal,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-2xl p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "text-lg font-bold text-center",
							children: "QR Code Attendance Scanner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "text-center",
							children: "Scan student QR code or select manual check-in"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-4 flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary-soft/30 p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-20 text-primary animate-pulse mb-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold",
									children: "Camera Scanner Active"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground mt-1",
									children: "Align student ticket QR code inside the viewfinder"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full rounded-xl shadow-glow",
								onClick: () => {
									const pending = roster.find((r) => !r.attended);
									if (pending) {
										handleToggleAttendance(pending);
										setShowQrModal(false);
									} else {
										toast.info("All registrants already checked in.");
										setShowQrModal(false);
									}
								},
								children: "Simulate Scan (Check In Next Student)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "w-full rounded-xl bg-card",
								onClick: () => setShowQrModal(false),
								children: "Close Scanner"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: showCertPreviewModal !== null,
				onOpenChange: () => setShowCertPreviewModal(null),
				children: showCertPreviewModal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-xl rounded-2xl p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border-4 border-double border-primary/40 bg-card p-6 text-center space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mx-auto size-12 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-serif font-bold text-foreground",
								children: "Certificate of Completion"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "This is proudly presented to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-primary underline",
								children: showCertPreviewModal.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "for successful participation in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-semibold",
								children: selectedEvent.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t flex justify-between items-center text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Issued by ", selectedEvent.club] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono font-bold text-primary",
									children: showCertPreviewModal.certificateHash
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-xl text-xs",
						onClick: () => setShowCertPreviewModal(null),
						children: "Close Preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "rounded-xl text-xs shadow-glow",
						onClick: () => {
							toast.success(`Downloaded Certificate PDF for ${showCertPreviewModal.name}`);
							setShowCertPreviewModal(null);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 size-3.5" }), " Download PDF"]
					})] })]
				})
			})
		]
	});
}
var $$splitComponentImporter = () => import("../_app.student.dashboard-B45WFYK3.mjs");
var Route = createFileRoute("/_app/student/dashboard")({
	head: () => ({ meta: [
		{ title: "Student Dashboard — CampusPulse" },
		{
			name: "description",
			content: "Your campus events, registrations, deadlines and certificates at a glance."
		},
		{
			property: "og:title",
			content: "Student Dashboard — CampusPulse"
		},
		{
			property: "og:description",
			content: "Track registrations, deadlines and upcoming campus events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$32
});
var AppRoute = Route$30.update({
	id: "/_app",
	getParentRoute: () => Route$32
});
var LoginRoute = Route$29.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$32
});
var AppArchiveRoute = Route$28.update({
	id: "/archive",
	path: "/archive",
	getParentRoute: () => AppRoute
});
var AppArchiveAnalyticsRoute = Route$27.update({
	id: "/archive-analytics",
	path: "/archive-analytics",
	getParentRoute: () => AppRoute
});
var AppArchiveManagerRoute = Route$26.update({
	id: "/archive-manager",
	path: "/archive-manager",
	getParentRoute: () => AppRoute
});
var AppCalendarRoute = Route$25.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => AppRoute
});
var AppCertificatesRoute = Route$24.update({
	id: "/certificates",
	path: "/certificates",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$37.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppLifecycleRoute = Route$23.update({
	id: "/lifecycle",
	path: "/lifecycle",
	getParentRoute: () => AppRoute
});
var AppNotificationsRoute = Route$22.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AppRoute
});
var AppProfileRoute = Route$21.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppRegistrationsRoute = Route$20.update({
	id: "/registrations",
	path: "/registrations",
	getParentRoute: () => AppRoute
});
var AppSavedRoute = Route$19.update({
	id: "/saved",
	path: "/saved",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$18.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppAdminIndexRoute = Route$33.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => AppRoute
});
var AppAdminApprovalsRoute = Route$17.update({
	id: "/admin/approvals",
	path: "/admin/approvals",
	getParentRoute: () => AppRoute
});
var AppAdminArchiveLogsRoute = Route$16.update({
	id: "/admin/archive-logs",
	path: "/admin/archive-logs",
	getParentRoute: () => AppRoute
});
var AppAdminAuditRoute = Route$15.update({
	id: "/admin/audit",
	path: "/admin/audit",
	getParentRoute: () => AppRoute
});
var AppAdminCommandCenterRoute = Route$14.update({
	id: "/admin/command-center",
	path: "/admin/command-center",
	getParentRoute: () => AppRoute
});
var AppAdminDashboardRoute = Route$13.update({
	id: "/admin/dashboard",
	path: "/admin/dashboard",
	getParentRoute: () => AppRoute
});
var AppAdminDepartmentsRoute = Route$12.update({
	id: "/admin/departments",
	path: "/admin/departments",
	getParentRoute: () => AppRoute
});
var AppAdminDigitalTwinRoute = Route$11.update({
	id: "/admin/digital-twin",
	path: "/admin/digital-twin",
	getParentRoute: () => AppRoute
});
var AppAdminPredictiveIntelligenceRoute = Route$10.update({
	id: "/admin/predictive-intelligence",
	path: "/admin/predictive-intelligence",
	getParentRoute: () => AppRoute
});
var AppAdminReportsRoute = Route$9.update({
	id: "/admin/reports",
	path: "/admin/reports",
	getParentRoute: () => AppRoute
});
var AppAdminSettingsRoute = Route$8.update({
	id: "/admin/settings",
	path: "/admin/settings",
	getParentRoute: () => AppRoute
});
var AppAdminUsersRoute = Route$7.update({
	id: "/admin/users",
	path: "/admin/users",
	getParentRoute: () => AppRoute
});
var AppEventsIndexRoute = Route$35.update({
	id: "/events/",
	path: "/events/",
	getParentRoute: () => AppRoute
});
var AppEventsEventIdRoute = Route$34.update({
	id: "/events/$eventId",
	path: "/events/$eventId",
	getParentRoute: () => AppRoute
});
var AppOrganizerIndexRoute = Route$36.update({
	id: "/organizer/",
	path: "/organizer/",
	getParentRoute: () => AppRoute
});
var AppRouteChildren = {
	AppArchiveRoute,
	AppArchiveAnalyticsRoute,
	AppArchiveManagerRoute,
	AppCalendarRoute,
	AppCertificatesRoute,
	AppDashboardRoute,
	AppLifecycleRoute,
	AppNotificationsRoute,
	AppProfileRoute,
	AppRegistrationsRoute,
	AppSavedRoute,
	AppSettingsRoute,
	AppAdminApprovalsRoute,
	AppAdminArchiveLogsRoute,
	AppAdminAuditRoute,
	AppAdminCommandCenterRoute,
	AppAdminDashboardRoute,
	AppAdminDepartmentsRoute,
	AppAdminDigitalTwinRoute,
	AppAdminPredictiveIntelligenceRoute,
	AppAdminReportsRoute,
	AppAdminSettingsRoute,
	AppAdminUsersRoute,
	AppEventsEventIdRoute,
	AppOrganizerAnalyticsRoute: Route$6.update({
		id: "/organizer/analytics",
		path: "/organizer/analytics",
		getParentRoute: () => AppRoute
	}),
	AppOrganizerAttendanceRoute: Route$5.update({
		id: "/organizer/attendance",
		path: "/organizer/attendance",
		getParentRoute: () => AppRoute
	}),
	AppOrganizerCreateRoute: Route$4.update({
		id: "/organizer/create",
		path: "/organizer/create",
		getParentRoute: () => AppRoute
	}),
	AppOrganizerDashboardRoute: Route$3.update({
		id: "/organizer/dashboard",
		path: "/organizer/dashboard",
		getParentRoute: () => AppRoute
	}),
	AppOrganizerEventsRoute: Route$2.update({
		id: "/organizer/events",
		path: "/organizer/events",
		getParentRoute: () => AppRoute
	}),
	AppOrganizerRegistrationsRoute: Route$1.update({
		id: "/organizer/registrations",
		path: "/organizer/registrations",
		getParentRoute: () => AppRoute
	}),
	AppStudentDashboardRoute: Route.update({
		id: "/student/dashboard",
		path: "/student/dashboard",
		getParentRoute: () => AppRoute
	}),
	AppSummaryEventIdRoute: Route$38.update({
		id: "/summary/$eventId",
		path: "/summary/$eventId",
		getParentRoute: () => AppRoute
	}),
	AppAdminIndexRoute,
	AppEventsIndexRoute,
	AppOrganizerIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	LoginRoute
};
var routeTree = Route$32._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, archiveDaemon as t };
