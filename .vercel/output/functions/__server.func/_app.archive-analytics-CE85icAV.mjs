import { r as archivedEvents } from "./_ssr/mock-CEuLP2kB.mjs";
import { p as require_jsx_runtime } from "./_libs/@radix-ui/react-checkbox+[...].mjs";
import { I as Percent, Qt as Award, f as TrendingUp, nn as Archive } from "./_libs/lucide-react.mjs";
import { a as StatCard, i as SectionCard, r as PageHeader } from "./_ssr/layout-bits-D4a4c_iI.mjs";
import { a as departmentArchive, r as archivePerMonth, t as archiveCategorySplit } from "./_ssr/archive-D_pmsryf.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.archive-analytics-CE85icAV.js
var import_jsx_runtime = require_jsx_runtime();
var pieColors = [
	"var(--color-primary)",
	"var(--color-success)",
	"var(--color-warning)",
	"var(--color-danger)",
	"var(--color-muted-foreground)",
	"var(--color-accent-foreground)"
];
var tooltipStyle = {
	borderRadius: 16,
	border: "1px solid var(--color-border)",
	background: "var(--color-card)",
	fontSize: 12
};
function ArchiveAnalytics() {
	const totalArchived = archivePerMonth.reduce((s, m) => s + m.archived, 0);
	const totalCerts = archivePerMonth.reduce((s, m) => s + m.certificates, 0);
	const avgRate = Math.round(archivePerMonth.reduce((s, m) => s + m.attendanceRate, 0) / archivePerMonth.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Archive Analytics",
			subtitle: "How campus events perform once the lifecycle completes",
			breadcrumb: [{
				label: "CampusPulse",
				to: "/"
			}, { label: "Archive Analytics" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Archived (12 months)",
					value: totalArchived,
					icon: Archive,
					index: 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Avg. attendance rate",
					value: avgRate,
					suffix: "%",
					icon: Percent,
					tone: "success",
					index: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Certificates issued",
					value: totalCerts,
					icon: Award,
					tone: "warning",
					index: 2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Archived this cycle",
					value: archivedEvents().length,
					icon: TrendingUp,
					tone: "danger",
					index: 3
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Archived events per month",
				description: "Automatic archival volume",
				className: "xl:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: archivePerMonth,
							margin: {
								left: -20,
								right: 8,
								top: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "archGrad",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--color-primary)",
										stopOpacity: .35
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--color-primary)",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "4 4",
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
									dataKey: "archived",
									stroke: "var(--color-primary)",
									strokeWidth: 2,
									fill: "url(#archGrad)"
								})
							]
						})
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionCard, {
				title: "Category distribution",
				description: "Share of the archive by category",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: archiveCategorySplit,
							dataKey: "value",
							nameKey: "name",
							innerRadius: 54,
							outerRadius: 92,
							paddingAngle: 3,
							children: archiveCategorySplit.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: pieColors[i % pieColors.length] }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid grid-cols-2 gap-2 text-xs text-muted-foreground",
					children: archiveCategorySplit.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2 rounded-full",
							style: { background: pieColors[i % pieColors.length] }
						}), c.name]
					}, c.name))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Attendance rate trend",
				description: "Percentage of registrants who checked in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: archivePerMonth,
							margin: {
								left: -20,
								right: 8,
								top: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "4 4",
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
									domain: [60, 100],
									tickLine: false,
									axisLine: false,
									fontSize: 12,
									stroke: "var(--color-muted-foreground)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "attendanceRate",
									stroke: "var(--color-success)",
									strokeWidth: 2,
									dot: { r: 3 }
								})
							]
						})
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionCard, {
				title: "Certificates issued",
				description: "Generated automatically at archival",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
									strokeDasharray: "4 4",
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
									dataKey: "certificates",
									fill: "var(--color-warning)",
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
			title: "Department-wise archive",
			description: "Archived events by owning department",
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-72",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: departmentArchive,
						layout: "vertical",
						margin: {
							left: 12,
							right: 16
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "4 4",
								stroke: "var(--color-border)",
								horizontal: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								type: "number",
								tickLine: false,
								axisLine: false,
								fontSize: 12,
								stroke: "var(--color-muted-foreground)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								type: "category",
								dataKey: "dept",
								width: 70,
								tickLine: false,
								axisLine: false,
								fontSize: 12,
								stroke: "var(--color-muted-foreground)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "archived",
								fill: "var(--color-primary)",
								radius: [
									0,
									8,
									8,
									0
								],
								barSize: 18
							})
						]
					})
				})
			})
		})
	] });
}
//#endregion
export { ArchiveAnalytics as component };
