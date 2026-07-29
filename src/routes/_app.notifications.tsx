import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Award, Bell, CheckCircle2, Trash2, Info, Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader, SectionCard } from "@/components/app/layout-bits";
import { useNotifications } from "@/hooks/useNotificationHooks";
import { notificationService } from "@/services/notificationService";
import { getPriorityStyle } from "@/utils/notificationUtils";
import type { FirestoreNotification } from "@/types/notificationTypes";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — CampusPulse" },
      { name: "description", content: "Real-time deadline alerts, venue changes, approvals and certificate releases." },
      { property: "og:title", content: "Notifications — CampusPulse" },
      { property: "og:description", content: "Every campus alert in one real-time Firestore inbox." },
    ],
  }),
  component: Notifications,
});

function NotificationList({ items }: { items: FirestoreNotification[] }) {
  if (items.length === 0) {
    return (
      <div className="grid place-items-center py-12 text-center border border-dashed rounded-2xl">
        <Bell className="size-8 text-muted-foreground opacity-50 mb-2" />
        <p className="font-semibold text-sm">No notifications found</p>
        <p className="text-xs text-muted-foreground mt-0.5">You are completely up to date.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((n) => (
        <li
          key={n.notificationId}
          onClick={() => notificationService.markAsRead(n.notificationId)}
          className={cn(
            "flex items-start gap-4 rounded-2xl border p-4 transition-colors cursor-pointer hover:bg-secondary/60",
            !n.isRead ? "border-primary/30 bg-primary-soft/30" : "border-border bg-card",
          )}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
            {n.category === "Certificates" ? <Award className="size-4" /> : <Bell className="size-4" />}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-foreground">{n.title}</p>
                {!n.isRead && <Badge className="h-5 rounded-full px-1.5 text-[10px]">New</Badge>}
              </div>
              <Badge variant="outline" className={cn("rounded-full text-[10px] uppercase", getPriorityStyle(n.priority))}>
                {n.priority}
              </Badge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{n.message}</p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{new Date(n.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  notificationService.deleteNotification(n.notificationId);
                }}
                className="text-xs text-muted-foreground hover:text-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Notifications() {
  const { notifications, unreadCount } = useNotifications();
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = notifications.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.message.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const unreadItems = filtered.filter((n) => !n.isRead);
  const eventsItems = filtered.filter((n) => n.category === "Events");
  const regItems = filtered.filter((n) => n.category === "Registrations");
  const certItems = filtered.filter((n) => n.category === "Certificates");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notification Center"
        subtitle={`${unreadCount} unread realtime updates`}
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Notifications" }]}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={() => notificationService.markAllAsRead()}>
              <CheckCircle2 className="mr-1.5 size-4 text-success" /> Mark All Read
            </Button>
            <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={() => notificationService.clearReadNotifications()}>
              <Trash2 className="mr-1.5 size-4 text-danger" /> Clear Read
            </Button>
          </div>
        }
      />

      <SectionCard className="max-w-4xl space-y-4">
        {/* SEARCH BAR */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notification titles, events, or alerts..."
            className="h-10 rounded-xl bg-card pl-9 text-xs"
          />
        </div>

        {/* TABS FILTER */}
        <Tabs defaultValue="all">
          <TabsList className="mb-4 rounded-xl flex-wrap">
            <TabsTrigger value="all" className="rounded-lg text-xs">All ({filtered.length})</TabsTrigger>
            <TabsTrigger value="unread" className="rounded-lg text-xs">Unread ({unreadItems.length})</TabsTrigger>
            <TabsTrigger value="events" className="rounded-lg text-xs">Events ({eventsItems.length})</TabsTrigger>
            <TabsTrigger value="registrations" className="rounded-lg text-xs">Registrations ({regItems.length})</TabsTrigger>
            <TabsTrigger value="certificates" className="rounded-lg text-xs">Certificates ({certItems.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="all"><NotificationList items={filtered} /></TabsContent>
          <TabsContent value="unread"><NotificationList items={unreadItems} /></TabsContent>
          <TabsContent value="events"><NotificationList items={eventsItems} /></TabsContent>
          <TabsContent value="registrations"><NotificationList items={regItems} /></TabsContent>
          <TabsContent value="certificates"><NotificationList items={certItems} /></TabsContent>
        </Tabs>
      </SectionCard>
    </div>
  );
}
