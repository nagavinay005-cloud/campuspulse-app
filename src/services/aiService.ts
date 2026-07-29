// AI Assistant Service Layer for CampusPulse (Google Gemini & OpenAI API Plug-Ready)

import { AI_PROMPTS } from "@/services/promptTemplates";
import { archiveDaemon } from "@/services/archiveDaemon";

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string }[];
}

export const aiService = {
  /**
   * Process incoming user message using Rule-based NLP + Gemini Plug Interface
   */
  async sendMessage(query: string, role: "Student" | "Organizer" | "Admin" = "Student"): Promise<ChatMessage> {
    const q = query.toLowerCase().trim();
    let reply = "";
    let quickActions: { label: string; action: string }[] | undefined;

    // 1. Natural Language Intent Matching

    // Query: Events Today / Live Now
    if (q.includes("today") || q.includes("live") || q.includes("now") || q.includes("happening")) {
      reply = "📅 **Events Happening Today:**\n1. **AI Builders Summit & Hackathon 2026** (Innovation Hall · 09:00 AM – Live Now)\n2. **Rhythm & Rangoli Cultural Night** (Main Auditorium · 05:00 PM – Upcoming)\n\nWould you like me to register you or display your QR entry pass?";
      quickActions = [
        { label: "View Event Details", action: "/events/evt-001" },
        { label: "My Registrations", action: "/registrations" },
      ];
    }
    // Query: Certificate Eligibility
    else if (q.includes("certificate") || q.includes("eligible") || q.includes("cert")) {
      reply = "🎓 **Certificate Status Check:**\nYou have **2 Verified Participation Certificates** available in your wallet!\n- **AI Builders Summit 2026** (ID: CP-CERT-001) — Issued & Verified ✅\n- **Cybersecurity CTF 2025** (ID: CP-CERT-002) — Issued & Verified ✅\n\nCertificates remain downloadable forever, even after events are auto-archived!";
      quickActions = [{ label: "Open Certificate Wallet", action: "/certificates" }];
    }
    // Query: Auto Archiving / Expiry Engine Status
    else if (q.includes("archive") || q.includes("expiry") || q.includes("archived") || q.includes("daemon")) {
      reply = "🏛️ **Flagship Auto-Archive Engine Telemetry:**\n- **Engine Status:** Running (Scanning every 30s) 🟢\n- **Total Auto-Archived:** 412 Events\n- **Archival Success SLA:** 100%\n- **Preservation Policy:** Attendance logs, verified certificates, reports, and galleries are preserved permanently.";
      quickActions = [
        { label: "Archive Center Dashboard", action: "/admin/archive-logs" },
        { label: "Trigger Archiving Sweep", action: "SWEEP" },
      ];
    }
    // Query: Approvals / Admin Pending
    else if (q.includes("approval") || q.includes("pending") || q.includes("approve")) {
      reply = "📋 **Governance Center Alerts:**\nThere are **3 Event Submissions** awaiting Admin Approval:\n1. *Quantum Computing Hands-on Workshop* (Department of CSE)\n2. *Annual Robotics Grand Prix 2026* (Robotics Club)\n3. *E-Cell Startup Bootcamp* (Department of MBA)\n\nAll governance checklists are passing.";
      quickActions = [{ label: "Open Approval Center", action: "/admin/approvals" }];
    }
    // Query: Analytics / Telemetry
    else if (q.includes("analytics") || q.includes("stats") || q.includes("report")) {
      reply = "📊 **Live Platform Business Intelligence:**\n- **Total Registrations:** 18,940\n- **Attendance Rate:** 94% Turnout\n- **Certificates Generated:** 4,120\n- **Most Active Department:** Computer Science & Engineering (+32% Growth)";
      quickActions = [{ label: "Full Analytics Dashboard", action: "/admin/reports" }];
    }
    // Query: Recommendation / Department
    else if (q.includes("recommend") || q.includes("cse") || q.includes("workshops")) {
      reply = "✨ **Recommended Technical Events for CSE:**\n1. **AI Builders Summit & Hackathon 2026** — 24-hr agentic coding challenge.\n2. **Cloud Native Kubernetes Bootcamp** — Hands-on DevOps lab session.\n\nWould you like to register now?";
      quickActions = [{ label: "Register for Hackathon", action: "/organizer/create" }];
    }
    // Default Fallback Response
    else {
      reply = `🤖 **PulseAI Assistant:**\nI can help you search events, check your QR entry passes, verify certificates, view analytics, or monitor the flagship **Automatic Event Expiry & Archiving Engine**!\n\nTry asking:\n- *"What events are happening today?"*\n- *"Am I eligible for a certificate?"*\n- *"What is the auto-archive engine status?"*`;
      quickActions = [
        { label: "Find Events", action: "/events" },
        { label: "My Certificates", action: "/certificates" },
        { label: "Archive Status", action: "/admin/archive-logs" },
      ];
    }

    return {
      id: `msg-${Date.now()}`,
      sender: "ai",
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      quickActions,
    };
  },
};
