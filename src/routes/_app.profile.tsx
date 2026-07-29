import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Flame, Ticket, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [
      { title: "Profile — CampusPulse" },
      { name: "description", content: "Your student profile, interests, participation record and pulse points." },
      { property: "og:title", content: "Profile — CampusPulse" },
      { property: "og:description", content: "Student profile and participation record." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const { userProfile, saveUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("+91 98860 12345");
  const [bio, setBio] = useState("Third-year CSE student. Hackathon regular, campus club volunteer, and part of the robotics build team.");

  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || "");
      setDepartment(userProfile.department || "Computer Science");
      setYear(userProfile.year || "3rd Year");
    }
  }, [userProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    await saveUserProfile({
      name: name.trim(),
      department,
      year,
    });
  };

  const initials = (name || "Campus Student")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div>
      <PageHeader
        title="Profile"
        subtitle="How organizers see you across campus"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student", to: "/dashboard" }, { label: "Profile" }]}
      />

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-6">
          <SectionCard>
            <div className="flex flex-col items-center text-center">
              <span className="grid size-20 place-items-center rounded-3xl bg-primary text-2xl font-semibold text-primary-foreground shadow-glow">
                {initials}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{name || "Campus User"}</h2>
              <p className="text-sm text-muted-foreground">{year || "3rd Year"}</p>
              <Badge variant="secondary" className="mt-3 rounded-full">{department || "Computer Science"}</Badge>
              <div className="mt-5 w-full rounded-2xl border border-border p-4 text-left">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pulse level 6</span>
                  <span className="font-medium">350 pts</span>
                </div>
                <Progress value={62} className="mt-2 h-1.5" />
                <p className="mt-2 text-xs text-muted-foreground">760 points to Campus Ambassador</p>
              </div>
            </div>
          </SectionCard>
          <SectionCard title="Interests">
            <div className="flex flex-wrap gap-2">
              {["AI/ML", "Hackathons", "Product design", "Open source", "Debate", "Athletics"].map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-4">
            <StatCard label="Registered" value={7} icon={Ticket} index={0} />
            <StatCard label="Attended" value={5} icon={Users} tone="success" index={1} />
            <StatCard label="Certificates" value={4} icon={Award} tone="warning" index={2} />
            <StatCard label="Streak" value={3} suffix=" wks" icon={Flame} tone="danger" index={3} />
          </div>

          <SectionCard title="Personal details" description="Visible to organizers when you register">
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label>Full name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <Label>Academic Year</Label>
                <Input value={year} onChange={(e) => setYear(e.target.value)} className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <Label>College email</Label>
                <Input value={userProfile?.email || ""} disabled className="rounded-xl bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <Label>Department</Label>
                <Input value={department} onChange={(e) => setDepartment(e.target.value)} className="rounded-xl" required />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Bio</Label>
                <Textarea rows={3} value={bio} onChange={(e) => setBio(e.target.value)} className="rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="rounded-xl font-semibold">Save changes</Button>
              </div>
            </form>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
