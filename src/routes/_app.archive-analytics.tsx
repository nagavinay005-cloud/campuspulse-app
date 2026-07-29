import { createFileRoute } from "@tanstack/react-router";
import { Archive, Award, Percent, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { archiveCategorySplit, archivePerMonth, departmentArchive } from "@/data/archive";
import { archivedEvents } from "@/data/mock";

export const Route = createFileRoute("/_app/archive-analytics")({
  head: () => ({
    meta: [
      { title: "Archive Analytics — CampusPulse" },
      { name: "description", content: "Charts for archived events per month, attendance rate, certificates issued and department-wise archive distribution." },
      { property: "og:title", content: "Archive Analytics — CampusPulse" },
      { property: "og:description", content: "Insight into every automatically archived campus event." },
    ],
  }),
  component: ArchiveAnalytics,
});

const pieColors = [
  "var(--color-primary)",
  "var(--color-success)",
  "var(--color-warning)",
  "var(--color-danger)",
  "var(--color-muted-foreground)",
  "var(--color-accent-foreground)",
];

const tooltipStyle = {
  borderRadius: 16,
  border: "1px solid var(--color-border)",
  background: "var(--color-card)",
  fontSize: 12,
};

function ArchiveAnalytics() {
  const totalArchived = archivePerMonth.reduce((s, m) => s + m.archived, 0);
  const totalCerts = archivePerMonth.reduce((s, m) => s + m.certificates, 0);
  const avgRate = Math.round(archivePerMonth.reduce((s, m) => s + m.attendanceRate, 0) / archivePerMonth.length);

  return (
    <div>
      <PageHeader
        title="Archive Analytics"
        subtitle="How campus events perform once the lifecycle completes"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Archive Analytics" }]}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Archived (12 months)" value={totalArchived} icon={Archive} index={0} />
        <StatCard label="Avg. attendance rate" value={avgRate} suffix="%" icon={Percent} tone="success" index={1} />
        <StatCard label="Certificates issued" value={totalCerts} icon={Award} tone="warning" index={2} />
        <StatCard label="Archived this cycle" value={archivedEvents().length} icon={TrendingUp} tone="danger" index={3} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <SectionCard title="Archived events per month" description="Automatic archival volume" className="xl:col-span-2">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={archivePerMonth} margin={{ left: -20, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="archived" stroke="var(--color-primary)" strokeWidth={2} fill="url(#archGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Category distribution" description="Share of the archive by category">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={archiveCategorySplit} dataKey="value" nameKey="name" innerRadius={54} outerRadius={92} paddingAngle={3}>
                  {archiveCategorySplit.map((_, i) => (
                    <Cell key={i} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {archiveCategorySplit.map((c, i) => (
              <li key={c.name} className="flex items-center gap-2">
                <span className="size-2 rounded-full" style={{ background: pieColors[i % pieColors.length] }} />
                {c.name}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Attendance rate trend" description="Percentage of registrants who checked in">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={archivePerMonth} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis domain={[60, 100]} tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="attendanceRate" stroke="var(--color-success)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Certificates issued" description="Generated automatically at archival">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={archivePerMonth} margin={{ left: -20, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="certificates" fill="var(--color-warning)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Department-wise archive" description="Archived events by owning department" className="mt-6">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentArchive} layout="vertical" margin={{ left: 12, right: 16 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="var(--color-border)" horizontal={false} />
              <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <YAxis type="category" dataKey="dept" width={70} tickLine={false} axisLine={false} fontSize={12} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="archived" fill="var(--color-primary)" radius={[0, 8, 8, 0]} barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>
    </div>
  );
}
