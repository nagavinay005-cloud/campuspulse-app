import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { i as useAuth } from "./_ssr/AuthContext-DMw6Al4m.mjs";
import { Qt as Award, h as Ticket, i as Users, ut as Flame } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
import { t as Progress } from "./_ssr/progress-DOIEKRJF.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { t as Textarea } from "./_ssr/textarea-kko37XEX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.profile-icZYBRbu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const { userProfile, saveUserProfile } = useAuth();
	const [name, setName] = (0, import_react.useState)("");
	const [department, setDepartment] = (0, import_react.useState)("");
	const [year, setYear] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("+91 98860 12345");
	const [bio, setBio] = (0, import_react.useState)("Third-year CSE student. Hackathon regular, campus club volunteer, and part of the robotics build team.");
	(0, import_react.useEffect)(() => {
		if (userProfile) {
			setName(userProfile.name || "");
			setDepartment(userProfile.department || "Computer Science");
			setYear(userProfile.year || "3rd Year");
		}
	}, [userProfile]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim()) return;
		await saveUserProfile({
			name: name.trim(),
			department,
			year
		});
	};
	const initials = (name || "Campus Student").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Profile",
		subtitle: "How organizers see you across campus",
		breadcrumb: [
			{
				label: "CampusPulse",
				to: "/"
			},
			{
				label: "Student",
				to: "/dashboard"
			},
			{ label: "Profile" }
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-20 place-items-center rounded-3xl bg-primary text-2xl font-semibold text-primary-foreground shadow-glow",
						children: initials
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-lg font-semibold",
						children: name || "Campus User"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: year || "3rd Year"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "mt-3 rounded-full",
						children: department || "Computer Science"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 w-full rounded-2xl border border-border p-4 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Pulse level 6"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "350 pts"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: 62,
								className: "mt-2 h-1.5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "760 points to Campus Ambassador"
							})
						]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Interests",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"AI/ML",
						"Hackathons",
						"Product design",
						"Open source",
						"Debate",
						"Athletics"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						className: "rounded-full",
						children: t
					}, t))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Registered",
						value: 7,
						icon: Ticket,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Attended",
						value: 5,
						icon: Users,
						tone: "success",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certificates",
						value: 4,
						icon: Award,
						tone: "warning",
						index: 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Streak",
						value: 3,
						suffix: " wks",
						icon: Flame,
						tone: "danger",
						index: 3
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Personal details",
				description: "Visible to organizers when you register",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4 sm:grid-cols-2",
					onSubmit: handleSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "rounded-xl",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Academic Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: year,
								onChange: (e) => setYear(e.target.value),
								className: "rounded-xl",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "College email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: userProfile?.email || "",
								disabled: true,
								className: "rounded-xl bg-secondary/50"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: department,
								onChange: (e) => setDepartment(e.target.value),
								className: "rounded-xl",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Bio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 3,
								value: bio,
								onChange: (e) => setBio(e.target.value),
								className: "rounded-xl"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "rounded-xl font-semibold",
								children: "Save changes"
							})
						})
					]
				})
			})]
		})]
	})] });
}
//#endregion
export { Profile as component };
