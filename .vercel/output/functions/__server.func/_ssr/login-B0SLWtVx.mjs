import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useAuth } from "./AuthContext-DMw6Al4m.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { G as LoaderCircle, en as ArrowRight, i as Users, st as GraduationCap, x as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Checkbox } from "./checkbox-kt6FvQcE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-B0SLWtVx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginRouteWrapper() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {});
}
var portalOptions = [
	{
		key: "student",
		label: "Student Portal",
		icon: GraduationCap,
		badge: "Google OAuth",
		color: "border-primary/40 bg-primary/5"
	},
	{
		key: "organizer",
		label: "Organizer Desk",
		icon: Users,
		badge: "Faculty & Staff",
		color: "border-purple-500/40 bg-purple-500/5"
	},
	{
		key: "admin",
		label: "Admin Command Center",
		icon: ShieldCheck,
		badge: "System Admin",
		color: "border-rose-500/40 bg-rose-500/5"
	}
];
function Login() {
	const { loginWithEmail, loginWithGoogle, sendPasswordReset, getDashboardPath, user, userProfile, loading } = useAuth();
	const [activePortal, setActivePortal] = (0, import_react.useState)("student");
	const [authMode, setAuthMode] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [rememberMe, setRememberMe] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && user && userProfile) {
			const targetPath = userProfile.role === "Admin" ? "/admin/dashboard" : userProfile.role === "Organizer" ? "/organizer/dashboard" : "/student/dashboard";
			navigate({ to: targetPath });
		}
	}, [
		user,
		userProfile,
		loading,
		navigate
	]);
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const profile = await loginWithEmail(email, password);
		setIsSubmitting(false);
		if (profile) {
			if (activePortal === "admin" && profile.role !== "Admin") {
				toast.error(`Access Denied: Your account (${profile.role}) does not have Administrator privileges.`);
				return;
			}
			if (activePortal === "organizer" && profile.role !== "Organizer" && profile.role !== "Admin") {
				toast.error(`Access Denied: Your account (${profile.role}) does not have Event Organizer privileges.`);
				return;
			}
			if (profile.role === "Admin") navigate({ to: "/admin/dashboard" });
			else if (profile.role === "Organizer") navigate({ to: "/organizer/dashboard" });
			else {
				const targetPath = getDashboardPath(profile.role);
				navigate({ to: targetPath });
			}
		}
	};
	const handleForgotSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		await sendPasswordReset(email);
		setIsSubmitting(false);
		setAuthMode("login");
	};
	const handleGoogleSignIn = async () => {
		setIsSubmitting(true);
		try {
			const profile = await loginWithGoogle();
			setIsSubmitting(false);
			if (profile) {
				const targetPath = profile.role === "Admin" ? "/admin/dashboard" : profile.role === "Organizer" ? "/organizer/dashboard" : "/student/dashboard";
				navigate({ to: targetPath });
			}
		} catch (err) {
			setIsSubmitting(false);
			toast.error(err?.message || "Google sign in failed.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-gradient hidden flex-col justify-between border-r border-border p-12 lg:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "CampusPulse Logo",
						className: "size-9 rounded-xl object-cover shadow-glow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-semibold tracking-tight",
						children: "CampusPulse"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "max-w-md text-4xl font-bold leading-tight tracking-tight",
					children: ["One Campus. Every Event. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Role-Scoped Institutional Login."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted-foreground",
					children: "Separate portals for Students, Organizers, and Administrators with Firebase Authentication & Role-Based Access Control."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Firebase Auth Active · SDK v11.3.0"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center p-6 sm:p-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "w-full max-w-md space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 text-center lg:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold tracking-tight",
							children: "Access CampusPulse"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Choose your portal to sign in to your workspace."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 p-1 bg-secondary/50 rounded-2xl border border-border",
						children: portalOptions.map((p) => {
							const Icon = p.icon;
							const isActive = activePortal === p.key;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setActivePortal(p.key);
									setAuthMode("login");
								},
								className: cn("flex flex-col items-center gap-1.5 p-3 rounded-xl text-xs font-semibold transition-all cursor-pointer", isActive ? "bg-card text-foreground shadow-md ring-2 ring-primary/40" : "text-muted-foreground hover:text-foreground hover:bg-card/50"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("size-4", isActive && "text-primary") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.label.split(" ")[0] })]
							}, p.key);
						})
					}),
					activePortal === "student" && authMode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .98
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						className: "rounded-2xl border border-primary/30 bg-primary-soft/30 p-6 text-center space-y-4 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-extrabold text-base text-foreground",
									children: "Student Portal Sign In"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: "Students authenticate exclusively using verified institutional Google Workspace accounts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "lg",
								className: "w-full rounded-xl bg-card text-foreground hover:bg-secondary border shadow-sm h-12 font-semibold text-xs",
								onClick: handleGoogleSignIn,
								disabled: isSubmitting,
								children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									className: "mr-2.5 size-5",
									viewBox: "0 0 24 24",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "currentColor",
											d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "currentColor",
											d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "currentColor",
											d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											fill: "currentColor",
											d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
										})
									]
								}), "Continue with Student Google Sign-In"]
							})
						]
					}),
					activePortal === "organizer" && authMode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							scale: .98
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						className: "space-y-4 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6",
						onSubmit: handleLoginSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pb-2 border-b border-border/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-purple-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-extrabold text-sm text-foreground",
									children: "Organizer Desk Login"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "org-email",
									children: "Organizer Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "org-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "organizer@campus.edu",
									required: true,
									className: "h-11 rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "org-password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "org-password",
									type: "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									required: true,
									className: "h-11 rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: rememberMe,
										onCheckedChange: (val) => setRememberMe(!!val)
									}), " Remember me"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAuthMode("forgot"),
									className: "text-sm font-medium text-purple-500 hover:underline",
									children: "Forgot password?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-glow",
								disabled: isSubmitting,
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Sign In as Organizer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })] })
							})
						]
					}),
					activePortal === "admin" && authMode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							scale: .98
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						className: "space-y-4 rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6",
						onSubmit: handleLoginSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pb-2 border-b border-border/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-extrabold text-sm text-foreground",
									children: "Admin Command Center Login"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "admin-email",
									children: "Admin Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "admin-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "admin@campus.edu",
									required: true,
									className: "h-11 rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "admin-password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "admin-password",
									type: "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									required: true,
									className: "h-11 rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm text-muted-foreground cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: rememberMe,
										onCheckedChange: (val) => setRememberMe(!!val)
									}), " Remember me"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAuthMode("forgot"),
									className: "text-sm font-medium text-rose-500 hover:underline",
									children: "Forgot password?"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-glow",
								disabled: isSubmitting,
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Sign In as Administrator ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })] })
							})
						]
					}),
					authMode === "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-4",
						onSubmit: handleForgotSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "forgot-email",
									children: "College Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "forgot-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "enter registered email",
									required: true,
									className: "h-11 rounded-xl bg-card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full rounded-xl shadow-glow",
								disabled: isSubmitting,
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : "Send Password Reset Link"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								className: "w-full rounded-xl text-xs",
								onClick: () => setAuthMode("login"),
								children: "Back to Sign In"
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { LoginRouteWrapper as component };
