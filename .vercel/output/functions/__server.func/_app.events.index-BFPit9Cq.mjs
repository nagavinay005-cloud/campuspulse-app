import { o as __toESM } from "./_runtime.mjs";
import { d as departments, s as categories } from "./_ssr/mock-CEuLP2kB.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import "./_libs/firebase.mjs";
import { a as query, c as where, f as serverTimestamp, i as orderBy, l as collection, n as getDocs, o as setDoc, r as limit, s as startAfter, u as doc } from "./_libs/@firebase/firestore+[...].mjs";
import { i as useAuth, r as db } from "./_ssr/AuthContext-DMw6Al4m.mjs";
import { t as cva } from "./_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { K as ListFilter, T as Search, X as LayoutGrid, b as SlidersHorizontal, n as X, y as Sparkles } from "./_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./_ssr/select-Dg1urBTx.mjs";
import { r as PageHeader, t as EmptyState } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { t as EventCard } from "./_ssr/event-card-CqUHw6nG.mjs";
import { t as firestoreEventToCampusEvent } from "./_ssr/firestoreEvent-Bcvmsma3.mjs";
import { t as Switch } from "./_ssr/switch-Cn1w-cIH.mjs";
import { n as Slider, t as Route } from "./_app.events.index-hVOBdcQB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.events.index-BFPit9Cq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var EVENTS_COLLECTION = "events";
var firestoreEventService = {
	/**
	* Fetches published, upcoming, non-archived events from Firestore with pagination.
	*/
	async getPublishedUpcomingEvents(pageSize = 9, lastVisibleDoc = null) {
		const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
		let q = query(collection(db, EVENTS_COLLECTION), where("status", "==", "published"), where("isArchived", "==", false), where("date", ">=", todayStr), orderBy("date", "asc"));
		if (lastVisibleDoc) q = query(q, startAfter(lastVisibleDoc), limit(pageSize));
		else q = query(q, limit(pageSize));
		const snapshot = await getDocs(q);
		const events = [];
		snapshot.forEach((doc) => {
			events.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return {
			events,
			lastDoc: snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null
		};
	},
	/**
	* Automatically seeds sample upcoming published events if the collection is empty.
	*/
	async seedSampleEventsIfEmpty() {
		try {
			if ((await getDocs(query(collection(db, EVENTS_COLLECTION), limit(1)))).empty) {
				console.log("Firestore 'events' collection is empty. Seeding sample events...");
				const now = /* @__PURE__ */ new Date();
				const formatDate = (daysAhead) => {
					const d = new Date(now);
					d.setDate(d.getDate() + daysAhead);
					return d.toISOString().split("T")[0];
				};
				const sampleEvents = [
					{
						title: "National AI & Robotics Symposium",
						description: "Join leading minds in artificial intelligence and robotics for a two-day symposium featuring panel discussions, hands-on tutorials, and robotics project demos.",
						department: "Computer Science",
						category: "Technical",
						bannerUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
						venue: "Auditorium A, Main Campus",
						eventMode: "Offline",
						date: formatDate(2),
						time: "09:30",
						registrationDeadline: formatDate(1),
						organizerId: "org-ai-symposium",
						organizerName: "AI Research Association",
						status: "published",
						createdAt: serverTimestamp(),
						updatedAt: serverTimestamp(),
						isArchived: false,
						participantsCount: 42
					},
					{
						title: "Annual Cultural Fusion Dance Showcase",
						description: "Experience the vibrant choreography and rhythm at the Annual Cultural Fusion dance show, celebrating traditional and modern dance forms across departments.",
						department: "Cultural Committee",
						category: "Cultural",
						bannerUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",
						venue: "Open Air Theatre",
						eventMode: "Offline",
						date: formatDate(5),
						time: "18:00",
						registrationDeadline: formatDate(4),
						organizerId: "org-cultural",
						organizerName: "Rhythm & Beats Club",
						status: "published",
						createdAt: serverTimestamp(),
						updatedAt: serverTimestamp(),
						isArchived: false,
						participantsCount: 120
					},
					{
						title: "Web Development Masterclass (Vite & React)",
						description: "Learn how to build production-ready single page applications using Vite, React Router, and TailwindCSS. Ideal for beginner and intermediate frontend enthusiasts.",
						department: "Information Technology",
						category: "Workshop",
						bannerUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
						venue: "Google Meet",
						eventMode: "Online",
						date: formatDate(8),
						time: "14:00",
						registrationDeadline: formatDate(7),
						organizerId: "org-it-club",
						organizerName: "ByteCraft Developer Guild",
						status: "published",
						createdAt: serverTimestamp(),
						updatedAt: serverTimestamp(),
						isArchived: false,
						participantsCount: 75
					},
					{
						title: "Inter-College Cricket Tournament 2026",
						description: "The biggest sports event of the semester is here! Register your department teams to compete for the ultimate championship cup.",
						department: "Physical Education",
						category: "Sports",
						bannerUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800",
						venue: "University Sports Field",
						eventMode: "Offline",
						date: formatDate(12),
						time: "08:00",
						registrationDeadline: formatDate(10),
						organizerId: "org-sports-sports",
						organizerName: "Sports Council",
						status: "published",
						createdAt: serverTimestamp(),
						updatedAt: serverTimestamp(),
						isArchived: false,
						participantsCount: 15
					},
					{
						title: "Campus Placement Strategy Seminar",
						description: "Unlock keys to crack top tier engineering and business analyst roles. Panelists include alumni from Google, McKinsey, and Microsoft.",
						department: "Training and Placement Cell",
						category: "Seminar",
						bannerUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
						venue: "Seminar Hall 4, Placement Block",
						eventMode: "Offline",
						date: formatDate(15),
						time: "10:30",
						registrationDeadline: formatDate(14),
						organizerId: "org-placement",
						organizerName: "Placement Cell Board",
						status: "published",
						createdAt: serverTimestamp(),
						updatedAt: serverTimestamp(),
						isArchived: false,
						participantsCount: 88
					}
				];
				for (let i = 0; i < sampleEvents.length; i++) await setDoc(doc(db, EVENTS_COLLECTION, `fsev-sample-${i + 1}`), sampleEvents[i]);
				console.log("Successfully seeded 5 sample events into Firestore.");
			}
		} catch (err) {
			console.error("Failed to check/seed sample events in Firestore:", err);
		}
	}
};
function useFirestoreEvents(pageSize = 9) {
	const [events, setEvents] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [loadingMore, setLoadingMore] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [lastDoc, setLastDoc] = (0, import_react.useState)(null);
	const [hasMore, setHasMore] = (0, import_react.useState)(true);
	const fetchInitialEvents = (0, import_react.useCallback)(async () => {
		setLoading(true);
		setError(null);
		try {
			await firestoreEventService.seedSampleEventsIfEmpty();
			const res = await firestoreEventService.getPublishedUpcomingEvents(pageSize, null);
			const mapped = res.events.map((e) => firestoreEventToCampusEvent(e.id, e.data));
			setEvents(mapped);
			setLastDoc(res.lastDoc);
			setHasMore(res.events.length === pageSize);
		} catch (err) {
			console.error("Error loading Firestore events:", err);
			setError(err.message || "Failed to load events from Firestore.");
		} finally {
			setLoading(false);
		}
	}, [pageSize]);
	const loadMore = (0, import_react.useCallback)(async () => {
		if (loadingMore || !hasMore || !lastDoc) return;
		setLoadingMore(true);
		try {
			const res = await firestoreEventService.getPublishedUpcomingEvents(pageSize, lastDoc);
			const mapped = res.events.map((e) => firestoreEventToCampusEvent(e.id, e.data));
			setEvents((prev) => {
				const existingIds = new Set(prev.map((e) => e.id));
				const filteredNew = mapped.filter((e) => !existingIds.has(e.id));
				return [...prev, ...filteredNew];
			});
			setLastDoc(res.lastDoc);
			setHasMore(res.events.length === pageSize);
		} catch (err) {
			console.error("Error loading more Firestore events:", err);
			setError(err.message || "Failed to load more events.");
		} finally {
			setLoadingMore(false);
		}
	}, [
		pageSize,
		lastDoc,
		hasMore,
		loadingMore
	]);
	(0, import_react.useEffect)(() => {
		fetchInitialEvents();
	}, [fetchInitialEvents]);
	return {
		events,
		loading,
		loadingMore,
		error,
		hasMore,
		loadMore,
		refresh: fetchInitialEvents
	};
}
function EventFeed() {
	const { q } = Route.useSearch();
	const [query, setQuery] = (0, import_react.useState)(q || "");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [department, setDepartment] = (0, import_react.useState)("all");
	const [dateFilter, setDateFilter] = (0, import_react.useState)("all");
	const [modeFilter, setModeFilter] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("soonest");
	const [freeOnly, setFreeOnly] = (0, import_react.useState)(false);
	const [certOnly, setCertOnly] = (0, import_react.useState)(false);
	const [seats, setSeats] = (0, import_react.useState)([0]);
	const { userProfile } = useAuth();
	const studentId = userProfile?.uid || "std-001";
	const [registeredIds, setRegisteredIds] = (0, import_react.useState)([]);
	const { events: fsEvents, loading, loadingMore, hasMore, loadMore } = useFirestoreEvents(9);
	(0, import_react.useEffect)(() => {
		if (q) setQuery(q);
	}, [q]);
	(0, import_react.useEffect)(() => {
		if (studentId && !studentId.startsWith("std-")) {
			const token = localStorage.getItem("campuspulse_jwt_token");
			const headers = {};
			if (token) headers["Authorization"] = `Bearer ${token}`;
			import("./_ssr/apiClient-DumwXFEP.mjs").then((n) => n.r).then((n) => n.n).then(({ API_BASE_URL }) => {
				fetch(`${API_BASE_URL}/students/me/registrations`, { headers }).then((res) => res.json()).then((data) => {
					if (data.success && data.data) setRegisteredIds(data.data.filter((r) => r.status !== "Cancelled").map((r) => String(r.event_id)));
				}).catch((err) => console.warn("Failed to fetch registrations for feed check:", err));
			});
		}
	}, [studentId]);
	const results = (0, import_react.useMemo)(() => {
		let list = fsEvents.filter((e) => {
			const qStr = query.toLowerCase();
			const matchQ = !qStr || e.title.toLowerCase().includes(qStr) || e.organizer.toLowerCase().includes(qStr) || e.category.toLowerCase().includes(qStr);
			const matchDept = department === "all" || e.department === department;
			const matchCat = category === "all" || e.category === category;
			const isOnline = e.tags.includes("Online") || e.venue.toLowerCase().includes("online") || e.venue.toLowerCase().includes("meet") || e.venue.toLowerCase().includes("zoom");
			const matchMode = modeFilter === "all" || modeFilter === "Online" && isOnline || modeFilter === "Offline" && !isOnline;
			let matchDate = true;
			if (dateFilter !== "all") {
				const eventDate = new Date(e.start);
				const today = /* @__PURE__ */ new Date();
				today.setHours(0, 0, 0, 0);
				if (dateFilter === "today") matchDate = new Date(e.start).toDateString() === today.toDateString();
				else if (dateFilter === "week") {
					const nextWeek = new Date(today.getTime() + 7 * 864e5);
					matchDate = eventDate >= today && eventDate <= nextWeek;
				} else if (dateFilter === "month") {
					const nextMonth = new Date(today.getTime() + 30 * 864e5);
					matchDate = eventDate >= today && eventDate <= nextMonth;
				}
			}
			const matchSeats = e.seats - e.registered >= seats[0];
			const matchFree = !freeOnly || e.fee === 0;
			const matchCert = !certOnly || e.certificate;
			return matchQ && matchDept && matchCat && matchMode && matchDate && matchSeats && matchFree && matchCert;
		});
		list = [...list].sort((a, b) => sort === "soonest" ? +new Date(a.start) - +new Date(b.start) : sort === "popular" ? b.registered - a.registered : a.title.localeCompare(b.title));
		return list;
	}, [
		fsEvents,
		query,
		category,
		department,
		modeFilter,
		dateFilter,
		sort,
		freeOnly,
		certOnly,
		seats
	]);
	const featured = results.filter((e) => e.featured);
	const filters = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: category,
					onValueChange: setCategory,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "rounded-xl bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						className: "rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All categories"
						}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: c,
							children: c
						}, c))]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: department,
					onValueChange: setDepartment,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "rounded-xl bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						className: "rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All departments"
						}), departments.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: d,
							children: d
						}, d))]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date Range" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: dateFilter,
					onValueChange: setDateFilter,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "rounded-xl bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						className: "rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "all",
								children: "All upcoming"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "today",
								children: "Starting Today"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "week",
								children: "Starting This Week"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "month",
								children: "Starting This Month"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Event Mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: modeFilter,
					onValueChange: setModeFilter,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "rounded-xl bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						className: "rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "all",
								children: "All Modes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Online",
								children: "Online Mode"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "Offline",
								children: "Offline Mode"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sort by" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: sort,
					onValueChange: setSort,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "rounded-xl bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
						className: "rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "soonest",
								children: "Starting soonest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "popular",
								children: "Most registered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "az",
								children: "Title A–Z"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: ["Minimum seats left: ", seats[0]] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					value: seats,
					onValueChange: setSeats,
					max: 200,
					step: 10
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 rounded-2xl border border-border p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "free",
						className: "font-normal",
						children: "Free events only"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						id: "free",
						checked: freeOnly,
						onCheckedChange: setFreeOnly
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "cert",
						className: "font-normal",
						children: "Certificate provided"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						id: "cert",
						checked: certOnly,
						onCheckedChange: setCertOnly
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "w-full rounded-xl bg-card",
				onClick: () => {
					setCategory("all");
					setDepartment("all");
					setDateFilter("all");
					setModeFilter("all");
					setFreeOnly(false);
					setCertOnly(false);
					setSeats([0]);
					setQuery("");
				},
				children: "Reset filters"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Event Feed",
			subtitle: `${results.length} active events across campus right now`,
			breadcrumb: [
				{
					label: "CampusPulse",
					to: "/"
				},
				{
					label: "Student",
					to: "/dashboard"
				},
				{ label: "Event Feed" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "mr-2 size-4" }), " Filters"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
				side: "right",
				className: "w-[320px] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Advanced filters" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 px-4 pb-8",
					children: filters
				})]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setCategory("all"),
				className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", category === "all" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-secondary"),
				children: "All"
			}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setCategory(c),
				className: cn("rounded-full border px-4 py-2 text-sm font-medium transition-colors", category === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-secondary"),
				children: c
			}, c))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface sticky top-24 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-5 flex items-center gap-2 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "size-4" }), " Advanced filters"]
					}), filters]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search by title, club, venue or tag…",
						className: "h-12 rounded-2xl bg-card pl-10"
					})]
				}),
				featured.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-2 text-sm font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }),
							" Featured events",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "rounded-full",
								children: featured.length
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: featured.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
							event: e,
							index: i
						}, e.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4 text-muted-foreground" }), " All active events"]
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
					children: [
						0,
						1,
						2
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 w-full rounded-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-4 w-3/4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-1/2" })
						]
					}, i))
				}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Search,
					title: "No events match those filters",
					description: "Try widening the category, clearing the seat threshold, or searching a different keyword.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "rounded-xl",
						onClick: () => {
							setQuery("");
							setCategory("all");
							setDepartment("all");
							setSeats([0]);
						},
						children: "Clear all filters"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
					children: results.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
						event: e,
						index: i
					}, e.id))
				})
			] })]
		})
	] });
}
//#endregion
export { EventFeed as component };
