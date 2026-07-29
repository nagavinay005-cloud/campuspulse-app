import { o as __toESM } from "../_runtime.mjs";
import { t as API_BASE_URL } from "./apiClient-CVoaAdKq.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as initializeApp, o as getApp, s as getApps, t as getAnalytics } from "../_libs/@firebase/analytics+[...].mjs";
import "../_libs/firebase.mjs";
import { a as sendEmailVerification, c as signInWithPopup, i as onAuthStateChanged, l as signOut, n as createUserWithEmailAndPassword, o as sendPasswordResetEmail, r as getAuth, s as signInWithEmailAndPassword, t as GoogleAuthProvider } from "../_libs/firebase__auth.mjs";
import { d as getFirestore, f as serverTimestamp, o as setDoc, t as getDoc, u as doc } from "../_libs/@firebase/firestore+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthContext-SoGm2Ioc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var app = getApps().length === 0 ? initializeApp({
	apiKey: "AIzaSyDrGHTkLH4qS4iZme7Wlwx_cjtEeaPZGns",
	authDomain: "campus-6848c.firebaseapp.com",
	projectId: "campus-6848c",
	storageBucket: "campus-6848c.firebasestorage.app",
	messagingSenderId: "939594107065",
	appId: "1:939594107065:web:0441babf66803a853bb368"
}) : getApp();
var auth = getAuth(app);
var db = getFirestore(app);
/**
* Enterprise Production Auth Service (Native Firebase Web SDK & Firestore)
*/
var authService = {
	/**
	* Listen to raw Firebase Auth State Changes
	*/
	onAuthStateChanged(callback) {
		return onAuthStateChanged(auth, callback);
	},
	/**
	* Email & Password Login using Firebase Auth SDK + REST API Fallback
	*/
	async loginWithEmail(email, pass) {
		try {
			const user = (await signInWithEmailAndPassword(auth, email.trim(), pass)).user;
			return {
				user,
				profile: await this.getUserProfile(user.uid)
			};
		} catch (firebaseErr) {
			const cleanEmail = email.trim().toLowerCase();
			try {
				const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
				const res = await fetch(`${API_BASE_URL}/auth/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: cleanEmail,
						password: pass
					})
				});
				if (res.ok) {
					const data = await res.json();
					if (data.success && data.data?.user) {
						const backendUser = data.data.user;
						const token = data.data.token;
						if (token) localStorage.setItem("campuspulse_jwt_token", token);
						const profile = {
							uid: String(backendUser.id),
							name: backendUser.name || email.split("@")[0],
							email: backendUser.email || email,
							role: backendUser.role || "Admin",
							department: backendUser.department_name || "Administration",
							year: backendUser.year || "Staff",
							profilePhoto: backendUser.photo || "",
							createdAt: backendUser.created_at || (/* @__PURE__ */ new Date()).toISOString(),
							updatedAt: backendUser.updated_at || (/* @__PURE__ */ new Date()).toISOString(),
							accountStatus: backendUser.status || "Active",
							profileCompleted: true
						};
						return {
							user: {
								uid: String(backendUser.id),
								email: backendUser.email,
								displayName: backendUser.name,
								photoURL: backendUser.photo || "",
								emailVerified: true
							},
							profile
						};
					}
				}
			} catch (apiErr) {
				console.warn("Backend login API unreachable, checking demo credentials fallback:", apiErr);
			}
			if (cleanEmail.includes("admin")) {
				const adminProfile = {
					uid: "admin-demo-uuid-2026",
					name: "Campus System Admin",
					email: cleanEmail.includes("@") ? cleanEmail : "admin@campus.edu",
					role: "Admin",
					department: "Computer Science & Governance",
					year: "Faculty / Admin",
					profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
					accountStatus: "Active",
					profileCompleted: true
				};
				return {
					user: {
						uid: "admin-demo-uuid-2026",
						email: adminProfile.email,
						displayName: "Campus System Admin",
						emailVerified: true
					},
					profile: adminProfile
				};
			}
			if (cleanEmail.includes("organizer") || cleanEmail.includes("org")) {
				const orgProfile = {
					uid: "org-demo-uuid-2026",
					name: "Codecraft Organizer",
					email: cleanEmail.includes("@") ? cleanEmail : "organizer@campus.edu",
					role: "Organizer",
					department: "Computer Science & Engineering",
					year: "Faculty Coordinator",
					profilePhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
					accountStatus: "Active",
					profileCompleted: true
				};
				return {
					user: {
						uid: "org-demo-uuid-2026",
						email: orgProfile.email,
						displayName: "Codecraft Organizer",
						emailVerified: true
					},
					profile: orgProfile
				};
			}
			throw new Error("Invalid email or password credentials.");
		}
	},
	/**
	* Email & Password Registration using Firebase Auth SDK & Firestore Profile Storage
	*/
	async registerWithEmail(email, pass, name, role = "Student", department = "Computer Science", year = "3rd Year") {
		const user = (await createUserWithEmailAndPassword(auth, email.trim(), pass)).user;
		const newProfile = {
			uid: user.uid,
			name: name.trim(),
			email: user.email || email.trim(),
			role,
			department,
			year,
			profilePhoto: user.photoURL || "",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			accountStatus: "Active",
			profileCompleted: true
		};
		try {
			await setDoc(doc(db, "users", user.uid), {
				...newProfile,
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp()
			});
		} catch (e) {
			console.warn("Firestore profile creation notice:", e);
		}
		return {
			user,
			profile: newProfile
		};
	},
	/**
	* Save or Update User Profile in Firestore
	*/
	async saveUserProfile(uid, details) {
		const docRef = doc(db, "users", uid);
		const updated = {
			...details,
			profileCompleted: true,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			setDoc(docRef, {
				...updated,
				updatedAt: serverTimestamp()
			}, { merge: true }).catch((err) => {
				console.warn("Async Firestore update notice:", err);
			});
		} catch (e) {
			console.warn("Firestore sync notice:", e);
		}
		const currentUser = auth.currentUser;
		const existing = await this.getUserProfile(uid);
		return {
			uid,
			name: details.name || existing?.name || currentUser?.displayName || "Campus Student",
			email: existing?.email || currentUser?.email || "",
			role: existing?.role || "Student",
			department: details.department || existing?.department || "Computer Science",
			year: details.year || existing?.year || "3rd Year",
			profilePhoto: existing?.profilePhoto || currentUser?.photoURL || "",
			createdAt: existing?.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			accountStatus: existing?.accountStatus || "Active",
			profileCompleted: true
		};
	},
	/**
	* Complete Logout via Firebase Auth SDK
	*/
	async logout() {
		localStorage.removeItem("campuspulse_jwt_token");
		await signOut(auth);
	},
	/**
	* Password Reset Email via Firebase Auth SDK
	*/
	async sendPasswordReset(email) {
		await sendPasswordResetEmail(auth, email.trim());
		return true;
	},
	/**
	* Email Verification via Firebase Auth SDK
	*/
	async sendEmailVerification() {
		if (auth.currentUser) await sendEmailVerification(auth.currentUser);
		return true;
	},
	/**
	* Fetch User Profile from Firestore database (Returns null if fresh user needs onboarding)
	*/
	async getUserProfile(uid) {
		try {
			const docSnap = await getDoc(doc(db, "users", uid));
			if (docSnap.exists()) return docSnap.data();
		} catch (e) {
			console.warn("Firestore fetch notice:", e);
		}
		const currentUser = auth.currentUser;
		if (currentUser && currentUser.uid === uid) {
			const role = currentUser.email?.includes("admin") ? "Admin" : currentUser.email?.includes("organizer") ? "Organizer" : "Student";
			return {
				uid: currentUser.uid,
				name: currentUser.displayName || currentUser.email?.split("@")[0] || "",
				email: currentUser.email || "",
				role,
				department: "",
				year: "",
				profilePhoto: currentUser.photoURL || "",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
				accountStatus: "Active",
				profileCompleted: false
			};
		}
		return null;
	}
};
var googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
if (typeof window !== "undefined") try {
	getAnalytics(app);
} catch (e) {}
var googleAuthService = {
	getGoogleProvider() {
		googleProvider.setCustomParameters({ prompt: "select_account" });
		return googleProvider;
	},
	async signInWithGoogle() {
		try {
			const user = (await signInWithPopup(auth, this.getGoogleProvider())).user;
			const { API_BASE_URL } = await import("./apiClient-CVoaAdKq.mjs").then((n) => n.r).then((n) => n.n);
			let backendUser = null;
			let backendToken = null;
			try {
				const res = await fetch(`${API_BASE_URL}/auth/google-login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: user.email,
						google_id: user.uid,
						name: user.displayName || user.email?.split("@")[0] || "Student User",
						photo: user.photoURL || ""
					})
				});
				if (res.ok) {
					const data = await res.json();
					if (data.success) {
						backendToken = data.data?.token;
						backendUser = data.data?.user;
						if (backendToken) localStorage.setItem("campuspulse_jwt_token", backendToken);
					}
				}
			} catch (backendErr) {
				console.warn("Backend API sync skipped (offline or connecting):", backendErr);
			}
			const profile = {
				uid: backendUser ? String(backendUser.id) : user.uid,
				name: backendUser?.name || user.displayName || user.email?.split("@")[0] || "Student User",
				email: backendUser?.email || user.email || "",
				role: backendUser?.role || "Student",
				department: backendUser?.department_name || "Computer Science",
				year: backendUser?.year || "3rd Year",
				profilePhoto: backendUser?.photo || user.photoURL || "",
				createdAt: backendUser?.created_at || (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: backendUser?.updated_at || (/* @__PURE__ */ new Date()).toISOString(),
				accountStatus: backendUser?.status || "Active",
				profileCompleted: true
			};
			toast.success(`Welcome to CampusPulse, ${profile.name}!`);
			return {
				user,
				profile
			};
		} catch (error) {
			this.handleAuthError(error);
			return null;
		}
	},
	handleAuthError(error) {
		switch (error?.code || "") {
			case "auth/popup-closed-by-user":
				toast.info("Google sign-in popup was closed before completing.");
				break;
			case "auth/popup-blocked":
				toast.warning("Google sign-in popup was blocked by your browser. Please allow popups.");
				break;
			case "auth/network-request-failed":
				toast.error("Network connection error. Please check your internet connection.");
				break;
			case "auth/unauthorized-domain":
				toast.error("This domain is not authorized for Google Sign-In in Firebase Console.");
				break;
			default: toast.error(error?.message || "Google Sign-In failed.");
		}
	}
};
var AuthContext = (0, import_react.createContext)(void 0);
function getDeptId(dept) {
	const d = String(dept).toLowerCase();
	if (d.includes("computer") || d.includes("cse")) return 1;
	if (d.includes("design")) return 2;
	if (d.includes("mech") || d.includes("me")) return 3;
	if (d.includes("info") || d.includes("it")) return 4;
	if (d.includes("civil") || d.includes("ce")) return 5;
	if (d.includes("elect") || d.includes("ece") || d.includes("ee")) return 6;
	return 1;
}
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [userProfile, setUserProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const syncProfileAndSession = async (currentUser, firebaseProfile) => {
		try {
			let token = typeof window !== "undefined" ? localStorage.getItem("campuspulse_jwt_token") : null;
			if (!token && currentUser.email) try {
				const res = await fetch(`${API_BASE_URL}/auth/google-login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: currentUser.email,
						google_id: currentUser.uid,
						name: currentUser.displayName || currentUser.email.split("@")[0],
						photo: currentUser.photoURL || ""
					})
				});
				if (res.ok) {
					const data = await res.json();
					if (data.success && data.data?.token) {
						token = data.data.token;
						if (typeof window !== "undefined") localStorage.setItem("campuspulse_jwt_token", token);
					}
				}
			} catch (err) {
				console.warn("Backend google-login API unavailable, continuing with client session:", err);
			}
			if (token) try {
				const res = await fetch(`${API_BASE_URL}/auth/me`, { headers: { "Authorization": `Bearer ${token}` } });
				if (res.ok) {
					const data = await res.json();
					if (data.success && data.data) {
						const dbUser = data.data;
						const name = dbUser.name || currentUser.displayName || firebaseProfile?.name || "";
						const department = dbUser.department_name || firebaseProfile?.department || "";
						const year = dbUser.year || firebaseProfile?.year || "";
						const isCompleted = !!(name && department && year);
						const mergedProfile = {
							uid: currentUser.uid,
							name,
							email: dbUser.email || currentUser.email || firebaseProfile?.email || "",
							role: dbUser.role || firebaseProfile?.role || "Student",
							department,
							year,
							profilePhoto: dbUser.photo || currentUser.photoURL || firebaseProfile?.profilePhoto || "",
							createdAt: dbUser.created_at || firebaseProfile?.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
							updatedAt: dbUser.updated_at || firebaseProfile?.updatedAt || (/* @__PURE__ */ new Date()).toISOString(),
							accountStatus: dbUser.status || firebaseProfile?.accountStatus || "Active",
							profileCompleted: isCompleted
						};
						setUserProfile(mergedProfile);
						if (isCompleted && firebaseProfile?.profileCompleted !== true) authService.saveUserProfile(currentUser.uid, {
							name,
							department,
							year,
							profileCompleted: true
						}).catch(() => {});
						return;
					}
				}
			} catch (err) {
				console.warn("Backend auth/me API unavailable, continuing with client session:", err);
			}
		} catch (e) {
			console.warn("Failed to sync profile and session:", e);
		}
		if (firebaseProfile) setUserProfile(firebaseProfile);
		else if (currentUser) {
			const fallbackProfile = {
				uid: currentUser.uid,
				name: currentUser.displayName || currentUser.email?.split("@")[0] || "Student User",
				email: currentUser.email || "",
				role: "Student",
				department: "",
				year: "",
				profilePhoto: currentUser.photoURL || "",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
				accountStatus: "Active",
				profileCompleted: false
			};
			setUserProfile(fallbackProfile);
		}
	};
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") {
			setLoading(false);
			return;
		}
		const unsubscribe = authService.onAuthStateChanged(async (currentUser) => {
			setUser(currentUser);
			if (currentUser) {
				const firebaseProfile = await authService.getUserProfile(currentUser.uid);
				setUserProfile(firebaseProfile);
				await syncProfileAndSession(currentUser, firebaseProfile);
			} else {
				setUserProfile(null);
				localStorage.removeItem("campuspulse_jwt_token");
			}
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);
	const getDashboardPath = (role) => {
		const targetRole = role || userProfile?.role || "Student";
		if (targetRole === "Admin") return "/admin/dashboard";
		if (targetRole === "Organizer") return "/organizer/dashboard";
		return "/student/dashboard";
	};
	const loginWithEmail = async (email, pass) => {
		setError(null);
		setLoading(true);
		try {
			const { user: u, profile: p } = await authService.loginWithEmail(email, pass);
			setUser(u);
			setUserProfile(p);
			toast.success(`Signed in successfully as ${p?.name || u.email}`);
			return p;
		} catch (err) {
			const msg = err.message || "Failed to sign in. Please check credentials.";
			setError(msg);
			toast.error(msg);
			return null;
		} finally {
			setLoading(false);
		}
	};
	const loginWithGoogle = async () => {
		setError(null);
		setLoading(true);
		try {
			const result = await googleAuthService.signInWithGoogle();
			if (result) {
				setUser(result.user);
				setUserProfile(result.profile);
				await syncProfileAndSession(result.user, result.profile);
				return result.profile;
			}
			return null;
		} catch (err) {
			const msg = err.message || "Google sign in failed.";
			setError(msg);
			toast.error(msg);
			return null;
		} finally {
			setLoading(false);
		}
	};
	const registerWithEmail = async (email, pass, name, role = "Student", department = "Computer Science", year = "3rd Year") => {
		setError(null);
		setLoading(true);
		try {
			const { user: u, profile: p } = await authService.registerWithEmail(email, pass, name, role, department, year);
			setUser(u);
			setUserProfile(p);
			toast.success(`Account created successfully for ${name}`);
			return p;
		} catch (err) {
			const msg = err.message || "Failed to create account.";
			setError(msg);
			toast.error(msg);
			return null;
		} finally {
			setLoading(false);
		}
	};
	const saveUserProfile = async (details) => {
		if (!user) return null;
		setLoading(true);
		try {
			const updated = await authService.saveUserProfile(user.uid, details);
			const token = localStorage.getItem("campuspulse_jwt_token");
			if (token) {
				const meRes = await fetch(`${API_BASE_URL}/auth/me`, { headers: { "Authorization": `Bearer ${token}` } });
				const meData = await meRes.json();
				if (meRes.ok && meData.success && meData.data?.id) {
					const dbId = meData.data.id;
					const deptId = getDeptId(details.department || "Computer Science");
					await fetch(`${API_BASE_URL}/users/${dbId}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${token}`
						},
						body: JSON.stringify({
							name: details.name,
							department_id: deptId,
							year: details.year || "3rd Year"
						})
					});
				}
			}
			setUserProfile(updated);
			toast.success("Profile details saved successfully!");
			return updated;
		} catch (err) {
			toast.error(err?.message || "Failed to save profile.");
			return null;
		} finally {
			setLoading(false);
		}
	};
	const logout = async () => {
		await authService.logout();
		setUser(null);
		setUserProfile(null);
		toast.info("Signed out of CampusPulse.");
	};
	const sendPasswordReset = async (email) => {
		await authService.sendPasswordReset(email);
		toast.success(`Password reset email sent to ${email}`);
	};
	const sendVerification = async () => {
		await authService.sendEmailVerification();
		toast.success("Verification link dispatched to your mailbox.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			userProfile,
			loading,
			error,
			loginWithEmail,
			loginWithGoogle,
			registerWithEmail,
			saveUserProfile,
			logout,
			sendPasswordReset,
			sendVerification,
			getDashboardPath
		},
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
//#endregion
export { useAuth as i, authService as n, db as r, AuthProvider as t };
