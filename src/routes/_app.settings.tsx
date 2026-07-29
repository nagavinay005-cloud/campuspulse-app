import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PageHeader, SectionCard } from "@/components/app/layout-bits";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CampusPulse" },
      { name: "description", content: "Control notification channels, reminder timing, privacy and display preferences." },
      { property: "og:title", content: "Settings — CampusPulse" },
      { property: "og:description", content: "Notification, privacy and display preferences." },
    ],
  }),
  component: SettingsPage,
});

const toggles = [
  { id: "email", label: "Email announcements", desc: "New events from your department and saved clubs" },
  { id: "push", label: "Push reminders", desc: "24 hours and 1 hour before an event starts" },
  { id: "deadline", label: "Deadline alerts", desc: "When registration is about to close" },
  { id: "archive", label: "Archive digests", desc: "Weekly summary of events that auto-archived" },
  { id: "cert", label: "Certificate releases", desc: "As soon as an organizer issues your certificate" },
];

function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Tune how CampusPulse reaches you"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Settings" }]}
        actions={<Button className="rounded-xl" onClick={() => toast.success("Preferences saved")}>Save preferences</Button>}
      />

      <div className="grid max-w-4xl gap-6">
        <SectionCard title="Notifications" description="Choose which channels stay switched on">
          <div className="space-y-1">
            {toggles.map((t, i) => (
              <div key={t.id}>
                {i > 0 && <Separator className="my-4" />}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <Label htmlFor={t.id} className="text-sm font-medium">{t.label}</Label>
                    <p className="mt-0.5 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                  <Switch id={t.id} defaultChecked={i < 4} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Feed preferences">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Default landing view</Label>
              <Select defaultValue="feed">
                <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="feed">Event feed</SelectItem>
                  <SelectItem value="dashboard">Dashboard</SelectItem>
                  <SelectItem value="calendar">Calendar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Reminder lead time</Label>
              <Select defaultValue="24">
                <SelectTrigger className="rounded-xl bg-card"><SelectValue /></SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="1">1 hour before</SelectItem>
                  <SelectItem value="24">24 hours before</SelectItem>
                  <SelectItem value="72">3 days before</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Privacy">
          <RadioGroup defaultValue="dept" className="space-y-3">
            {[
              { v: "public", l: "Public profile", d: "Any student can see your participation history" },
              { v: "dept", l: "Department only", d: "Visible to students and faculty in Computer Science" },
              { v: "private", l: "Private", d: "Only organizers of events you register for" },
            ].map((o) => (
              <label key={o.v} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary">
                <RadioGroupItem value={o.v} className="mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{o.l}</p>
                  <p className="text-sm text-muted-foreground">{o.d}</p>
                </div>
              </label>
            ))}
          </RadioGroup>
        </SectionCard>

        <SectionCard title="Danger zone">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Deactivate account</p>
              <p className="text-sm text-muted-foreground">Your registrations and certificates stay archived.</p>
            </div>
            <Button variant="outline" className="rounded-xl border-danger/30 bg-card text-danger" onClick={() => toast("Deactivation request sent to admin")}>
              Deactivate
            </Button>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
