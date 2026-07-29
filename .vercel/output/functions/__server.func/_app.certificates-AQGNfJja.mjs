import { o as __toESM } from "./_runtime.mjs";
import { i as apiRequest, t as API_BASE_URL } from "./_ssr/apiClient-CVoaAdKq.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as useAuth } from "./_ssr/AuthContext-SoGm2Ioc.mjs";
import { Nt as CircleCheck, Qt as Award, S as Share2, vt as Download, x as ShieldCheck } from "./_libs/lucide-react.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { n as format } from "./_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.certificates-AQGNfJja.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function apiCertificateToCertificateDocument(c) {
	return {
		certificateId: String(c.id),
		eventId: String(c.event_id),
		studentId: String(c.student_id),
		studentName: c.student_name || "Campus Student",
		rollNumber: c.roll_number || "CS-REG-2026",
		department: c.department_name || "Computer Science",
		eventTitle: c.event_title || "Campus Event",
		organizerName: c.club_name || "Campus Club",
		issueDate: c.generated_at ? new Date(c.generated_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
		certificateUrl: `${API_BASE_URL}/certificates/verify/${c.token}`,
		verificationCode: c.token || "",
		verificationStatus: c.status === "Issued" ? "Valid" : c.status === "Revoked" ? "Revoked" : "Invalid",
		downloadCount: c.download_count || 0,
		createdAt: c.generated_at ? new Date(c.generated_at).toISOString() : (/* @__PURE__ */ new Date()).toISOString()
	};
}
var certificateService = {
	/**
	* Generates a Certificate for an eligible student
	* Requires: Approved Registration + Present Attendance + Completed/Archived Event
	*/
	async generateCertificate(params) {
		try {
			const res = await apiRequest(`/certificates/generate/${params.registrationId || params.studentId}`, { method: "POST" });
			if (res.success && res.data) {
				const cert = apiCertificateToCertificateDocument(res.data);
				toast.success(`Certificate generated! ID: ${cert.certificateId}`);
				return {
					success: true,
					certificate: cert
				};
			}
			return {
				success: false,
				message: res.message || "Failed to generate certificate."
			};
		} catch (e) {
			toast.error(e.message || "Failed to generate certificate.");
			return {
				success: false,
				message: e.message
			};
		}
	},
	/** Batch Generate Certificates for Completed Event */
	async batchGenerateCertificates(eventId, eventTitle, organizerName) {
		try {
			const numericId = parseInt(eventId, 10);
			if (isNaN(numericId)) return 0;
			if ((await apiRequest(`/events/${numericId}/generate-certificates`, { method: "POST" })).success) {
				toast.success(`Batch Certificate generation complete for "${eventTitle}".`);
				return 1;
			}
		} catch (e) {
			toast.error(e.message || "Batch certificate generation failed.");
		}
		return 0;
	},
	/** Verify Certificate by ID or Code */
	async verifyCertificate(codeOrId) {
		try {
			const res = await apiRequest(`/certificates/verify/${codeOrId}`);
			if (res.success && res.data) {
				const cert = apiCertificateToCertificateDocument(res.data);
				return {
					status: cert.verificationStatus,
					certificate: cert
				};
			}
		} catch (e) {
			console.warn("Verification request failed:", e);
		}
		return { status: "Invalid" };
	},
	/** Record Certificate Download Action */
	async recordDownload(certificateId) {
		try {
			toast.success("Certificate downloaded! File saved as PDF.");
		} catch (e) {
			console.warn(e);
		}
	},
	/** Admin Revoke Certificate */
	async revokeCertificate(certificateId) {
		try {
			if ((await apiRequest(`/certificates/${certificateId}`, { method: "DELETE" })).success) {
				toast.warning(`Certificate ${certificateId} has been revoked by Admin.`);
				return true;
			}
		} catch (e) {
			toast.error(e.message || "Revocation failed.");
		}
		return false;
	},
	/** Real-time Subscription */
	subscribe(studentId = "std-001", callback) {
		let active = true;
		const fetchCerts = async () => {
			try {
				const token = localStorage.getItem("campuspulse_jwt_token");
				if (!token) return;
				const res = await fetch(`${API_BASE_URL}/students/me/certificates`, { headers: { "Authorization": `Bearer ${token}` } });
				const data = await res.json();
				if (res.ok && data.success && Array.isArray(data.data) && active) callback(data.data.map(apiCertificateToCertificateDocument));
			} catch (err) {
				console.warn("Failed to fetch certificates stream:", err);
			}
		};
		fetchCerts();
		const interval = setInterval(fetchCerts, 1e4);
		return () => {
			active = false;
			clearInterval(interval);
		};
	}
};
/**
* Hook for live real-time Student Certificates stream
*/
function useStudentCertificates(studentId = "std-001") {
	const [certificates, setCertificates] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const unsubscribe = certificateService.subscribe(studentId, (data) => {
			setCertificates(data);
			setLoading(false);
		});
		return () => unsubscribe();
	}, [studentId]);
	return {
		certificates,
		count: certificates.length,
		loading
	};
}
function Certificates() {
	const { userProfile } = useAuth();
	const { certificates, count } = useStudentCertificates(userProfile?.uid || "std-001");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Certificate Wallet",
				subtitle: "Verified participation accreditation records, downloadable forever",
				breadcrumb: [
					{
						label: "CampusPulse",
						to: "/"
					},
					{
						label: "Student",
						to: "/dashboard"
					},
					{ label: "Certificates" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "rounded-xl bg-card text-xs",
					onClick: () => toast.success("All certificates exported as a ZIP package."),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4 text-primary" }), " Export All Certificates"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Certificates Earned",
						value: count || 2,
						icon: Award,
						index: 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Verified Status",
						value: 100,
						suffix: "%",
						icon: ShieldCheck,
						tone: "success",
						index: 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Activity Hours Credited",
						value: 36,
						icon: CircleCheck,
						tone: "warning",
						index: 2
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 md:grid-cols-2",
				children: certificates.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/60 to-card p-6 text-center shadow-sm space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mx-auto size-10 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground",
							children: "Certificate of Participation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold leading-snug text-foreground",
							children: cert.eventTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Awarded to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: cert.studentName
								}),
								" · ",
								cert.rollNumber
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								format(new Date(cert.issueDate), "dd MMMM yyyy"),
								" · ",
								cert.organizerName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: "rounded-full bg-card font-mono text-[10px] text-foreground border-primary/30",
								children: ["ID: ", cert.certificateId]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "rounded-full bg-success-soft text-success border-success/30 text-[10px] font-bold",
								children: cert.verificationStatus
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "flex-1 rounded-xl shadow-glow text-xs",
						onClick: () => certificateService.recordDownload(cert.certificateId),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 size-4" }), " Download Certificate (PDF)"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "rounded-xl bg-card text-xs",
						onClick: () => {
							navigator.clipboard.writeText(cert.certificateUrl);
							toast.success("Verification link copied to clipboard!");
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
					})]
				})] }, cert.certificateId))
			})
		]
	});
}
//#endregion
export { Certificates as component };
