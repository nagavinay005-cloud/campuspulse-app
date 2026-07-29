import bannerHackathon from "@/assets/banner-hackathon.jpg";
import bannerCultural from "@/assets/banner-cultural.jpg";
import bannerWorkshop from "@/assets/banner-workshop.jpg";
import bannerSports from "@/assets/banner-sports.jpg";

export type EventStatus =
  | "Draft"
  | "Submitted"
  | "Pending Approval"
  | "Published"
  | "Upcoming"
  | "Live"
  | "Completed"
  | "Archived";

export type EventCategory =
  | "Technical"
  | "Cultural"
  | "Workshop"
  | "Sports"
  | "Seminar"
  | "Placement";

export interface CampusEvent {
  id: string;
  dbId?: number;
  title: string;
  summary: string;
  description: string;
  banner: string;
  category: EventCategory;
  department: string;
  club: string;
  organizer: string;
  organizerAvatar: string;
  venue: string;
  start: string; // ISO
  end: string; // ISO
  seats: number;
  registered: number;
  attended?: number;
  status: EventStatus;
  featured?: boolean;
  registrationDeadline?: string;
  certificate: boolean;
  fee: number;
  tags: string[];
  speakers: { name: string; role: string }[];
  contact: { email: string; phone: string };
  rating?: number;
}

const day = 86400000;
const now = Date.now();
const iso = (offsetDays: number, hour = 10, durationHrs = 4) => {
  const d = new Date(now + offsetDays * day);
  d.setHours(hour, 0, 0, 0);
  const e = new Date(d.getTime() + durationHrs * 3600000);
  return [d.toISOString(), e.toISOString()] as const;
};

const mk = (
  e: Omit<CampusEvent, "start" | "end"> & { offset: number; hour?: number; hours?: number },
): CampusEvent => {
  const { offset, hour, hours, ...rest } = e;
  const [start, end] = iso(offset, hour, hours);
  return { ...rest, start, end };
};

export const events: CampusEvent[] = [
  mk({
    id: "evt-001",
    offset: 6,
    hour: 9,
    hours: 30,
    title: "HackFusion 2026 — 30 Hour National Hackathon",
    summary: "Build, break and ship products with 400+ builders across 60 colleges.",
    description:
      "HackFusion is the flagship 30-hour hackathon of the Department of Computer Science. Teams of up to 4 compete across AI, FinTech, HealthTech and Sustainability tracks, mentored by engineers from leading product companies. Meals, swag and workstations provided on site.",
    banner: bannerHackathon,
    category: "Technical",
    department: "Computer Science",
    club: "Codecraft Club",
    organizer: "Dr. Ananya Iyer",
    organizerAvatar: "AI",
    venue: "Innovation Hall, Block C",
    seats: 400,
    registered: 348,
    status: "Upcoming",
    featured: true,
    certificate: true,
    fee: 0,
    tags: ["hackathon", "ai", "prizes", "team"],
    speakers: [
      { name: "Rohan Mehta", role: "Principal Engineer, Stripe" },
      { name: "Sara Qureshi", role: "AI Lead, Zoho" },
    ],
    contact: { email: "hackfusion@campuspulse.edu", phone: "+91 98450 11223" },
  }),
  mk({
    id: "evt-002",
    offset: 0,
    hour: 8,
    hours: 12,
    title: "Rhythm & Rangoli — Annual Cultural Night",
    summary: "Dance, music and drama finals with the inter-department trophy on the line.",
    description:
      "The cultural committee presents the grand finale night featuring 18 performing teams, a live band, food stalls and the announcement of the inter-department championship trophy.",
    banner: bannerCultural,
    category: "Cultural",
    department: "Student Affairs",
    club: "Fine Arts Society",
    organizer: "Prof. Kabir Nair",
    organizerAvatar: "KN",
    venue: "Open Air Amphitheatre",
    seats: 1200,
    registered: 1140,
    status: "Live",
    featured: true,
    certificate: false,
    fee: 100,
    tags: ["music", "dance", "fest"],
    speakers: [{ name: "The Midnight Ragas", role: "Headline Band" }],
    contact: { email: "culturals@campuspulse.edu", phone: "+91 98450 55441" },
  }),
  mk({
    id: "evt-003",
    offset: 2,
    hour: 14,
    hours: 3,
    title: "System Design Bootcamp with Ex-Google Engineers",
    summary: "Hands-on session on scaling, caching and interview-grade design writeups.",
    description:
      "A practical bootcamp covering load balancing, database sharding, caching layers and how to structure a system design interview answer. Bring a laptop; worksheets provided.",
    banner: bannerWorkshop,
    category: "Workshop",
    department: "Information Technology",
    club: "IEEE Student Branch",
    organizer: "Meera Raghavan",
    organizerAvatar: "MR",
    venue: "Seminar Hall 2",
    seats: 150,
    registered: 150,
    status: "Upcoming",
    certificate: true,
    fee: 250,
    tags: ["system design", "career", "interview"],
    speakers: [{ name: "Vikram Shetty", role: "Ex-Google, Staff SWE" }],
    contact: { email: "ieee@campuspulse.edu", phone: "+91 90080 71122" },
  }),
  mk({
    id: "evt-004",
    offset: 11,
    hour: 7,
    hours: 10,
    title: "Inter-College Athletics Meet 2026",
    summary: "Track, field and relay finals across 22 colleges at the central stadium.",
    description:
      "Two-day athletics meet with 40+ events. Registration requires a valid sports ID and medical clearance uploaded before the deadline.",
    banner: bannerSports,
    category: "Sports",
    department: "Physical Education",
    club: "Athletics Club",
    organizer: "Coach Rakesh Pillai",
    organizerAvatar: "RP",
    venue: "Central Stadium",
    seats: 600,
    registered: 271,
    status: "Published",
    certificate: true,
    fee: 0,
    tags: ["athletics", "inter-college"],
    speakers: [],
    contact: { email: "sports@campuspulse.edu", phone: "+91 98860 33220" },
  }),
  mk({
    id: "evt-010",
    offset: 25,
    hour: 10,
    hours: 6,
    title: "Quantum Computing & Security Keynote",
    summary: "Exploring post-quantum cryptography standards with IISc researchers.",
    description:
      "A deep-dive technical symposium on quantum algorithms, QKD protocols and the NIST post-quantum standardization roadmap.",
    banner: bannerHackathon,
    category: "Seminar",
    department: "Computer Science",
    club: "IEEE Student Branch",
    organizer: "Dr. Ananya Iyer",
    organizerAvatar: "AI",
    venue: "Main Auditorium",
    seats: 250,
    registered: 142,
    status: "Upcoming",
    certificate: true,
    fee: 0,
    tags: ["quantum", "crypto", "research"],
    speakers: [{ name: "Dr. S. K. Raman", role: "Quantum Research Lead, IISc" }],
    contact: { email: "ieee@campuspulse.edu", phone: "+91 98450 11223" },
  }),
  mk({
    id: "evt-011",
    offset: 1,
    hour: 9,
    hours: 24,
    title: "AI Agentic Coding Challenge 2026",
    summary: "Build autonomous LLM coding agents in a 24-hour sprint with $5,000 in prizes.",
    description:
      "Compete in teams of 2 to 4 to design, build, and benchmark autonomous AI coding agents capable of solving real GitHub issues automatically.",
    banner: bannerHackathon,
    category: "Technical",
    department: "Computer Science",
    club: "Codecraft Club",
    organizer: "Dr. S. R. Murthy",
    organizerAvatar: "SM",
    venue: "AI & Innovation Lab 302",
    seats: 200,
    registered: 188,
    status: "Published",
    featured: true,
    certificate: true,
    fee: 0,
    tags: ["ai", "agents", "hackathon", "python"],
    speakers: [{ name: "Dr. Ananya Roy", role: "AI Research Director" }],
    contact: { email: "aiagents@campuspulse.edu", phone: "+91 98765 00010" },
  }),
  mk({
    id: "evt-012",
    offset: 3,
    hour: 10,
    hours: 5,
    title: "Cloud Native Kubernetes & DevOps Bootcamp",
    summary: "Master Docker, Helm, ArgoCD and Kubernetes cluster deployment hands-on.",
    description:
      "Learn cloud-native container orchestration, CI/CD pipeline automation, and production observability with Grafana and Prometheus.",
    banner: bannerWorkshop,
    category: "Workshop",
    department: "Information Technology",
    club: "Cloud Native Society",
    organizer: "Dr. Ramesh Nair",
    organizerAvatar: "RN",
    venue: "Cloud Computing Lab 4",
    seats: 120,
    registered: 110,
    status: "Upcoming",
    featured: true,
    certificate: true,
    fee: 100,
    tags: ["kubernetes", "docker", "devops", "cloud"],
    speakers: [{ name: "Vikram Shah", role: "Cloud Architect, AWS" }],
    contact: { email: "clouddevops@campuspulse.edu", phone: "+91 98765 00011" },
  }),
  mk({
    id: "evt-013",
    offset: 5,
    hour: 14,
    hours: 8,
    title: "Inter-Department Esports League 2026",
    summary: "Valorant & BGMI tournament with live arena streaming and trophy presentation.",
    description:
      "The annual campus gaming championship featuring 32 teams competing in Valorant and BGMI. Shoutcasted live in the Student Activity Center.",
    banner: bannerSports,
    category: "Sports",
    department: "Student Affairs",
    club: "Gaming & Esports Guild",
    organizer: "Prof. Sneha Menon",
    organizerAvatar: "SM",
    venue: "Student Activity Center Arena",
    seats: 500,
    registered: 490,
    status: "Upcoming",
    featured: true,
    certificate: false,
    fee: 50,
    tags: ["esports", "gaming", "valorant", "tournament"],
    speakers: [{ name: "Team Fnatic Guest", role: "Esports Pro Caster" }],
    contact: { email: "esports@campuspulse.edu", phone: "+91 98765 00012" },
  }),
  mk({
    id: "evt-014",
    offset: 8,
    hour: 11,
    hours: 4,
    title: "Figma Design Systems & UI/UX Masterclass",
    summary: "Architect accessible design tokens, micro-interactions, and component libraries.",
    description:
      "Learn modern product design workflows in Figma: variable modes, auto-layout 5.0, design tokens, and accessible WCAG AA contrast rules.",
    banner: bannerWorkshop,
    category: "Workshop",
    department: "Design & Innovation",
    club: "Design Studio Guild",
    organizer: "Prof. Ananya Roy",
    organizerAvatar: "AR",
    venue: "Design Lab 2",
    seats: 100,
    registered: 89,
    status: "Upcoming",
    featured: true,
    certificate: true,
    fee: 0,
    tags: ["figma", "uiux", "design", "figma"],
    speakers: [{ name: "Priya Nambiar", role: "Staff Designer, CRED" }],
    contact: { email: "design@campuspulse.edu", phone: "+91 98765 00013" },
  }),
  mk({
    id: "evt-005",
    offset: 4,
    hour: 11,
    hours: 5,
    title: "Placement Readiness Summit — Batch of 2026",
    summary: "Mock interviews, resume clinics and recruiter AMA with 12 hiring partners.",
    description:
      "The training and placement cell hosts recruiters from 12 partner companies for resume clinics, mock technical interviews and a live AMA on hiring bars.",
    banner: bannerWorkshop,
    category: "Placement",
    department: "Training & Placement",
    club: "T&P Cell",
    organizer: "Ms. Divya Shankar",
    organizerAvatar: "DS",
    venue: "Auditorium A",
    seats: 500,
    registered: 412,
    status: "Upcoming",
    certificate: true,
    fee: 0,
    tags: ["placement", "resume", "careers"],
    speakers: [{ name: "Hiring Panel", role: "12 partner companies" }],
    contact: { email: "tnp@campuspulse.edu", phone: "+91 99001 22110" },
  }),
  mk({
    id: "evt-006",
    offset: 18,
    hour: 10,
    hours: 6,
    title: "Robotics Expo & Line Follower Championship",
    summary: "Watch 60 bots battle across arenas built by the mechatronics lab.",
    description:
      "Robotics expo with live demos, a line-follower championship and a drone showcase from the mechatronics lab.",
    banner: bannerHackathon,
    category: "Technical",
    department: "Mechanical Engineering",
    club: "Robotics Society",
    organizer: "Dr. Suresh Menon",
    organizerAvatar: "SM",
    venue: "Mechatronics Lab Complex",
    seats: 300,
    registered: 96,
    status: "Pending Approval",
    certificate: true,
    fee: 150,
    tags: ["robotics", "expo", "competition"],
    speakers: [],
    contact: { email: "robotics@campuspulse.edu", phone: "+91 90350 88110" },
  }),
  mk({
    id: "evt-007",
    offset: -3,
    hour: 10,
    hours: 6,
    title: "Cybersecurity CTF — Capture The Flag Sprint",
    summary: "Six hours of web, crypto and forensics challenges. 88 teams competed.",
    description:
      "A six-hour jeopardy-style CTF with web exploitation, cryptography, reverse engineering and forensics categories. Writeups published post-event.",
    banner: bannerWorkshop,
    category: "Technical",
    department: "Computer Science",
    club: "Cyber Cell",
    organizer: "Arjun Verma",
    organizerAvatar: "AV",
    venue: "Networking Lab, Block B",
    seats: 200,
    registered: 176,
    attended: 158,
    status: "Archived",
    certificate: true,
    fee: 0,
    tags: ["security", "ctf"],
    speakers: [],
    contact: { email: "cybercell@campuspulse.edu", phone: "+91 90080 44112" },
    rating: 4.7,
  }),
  mk({
    id: "evt-008",
    offset: -9,
    hour: 9,
    hours: 8,
    title: "Green Campus Sustainability Summit",
    summary: "Panel on circular campuses, plus a tree-plantation drive across 4 blocks.",
    description:
      "A day-long summit on sustainable campus operations, with a keynote from the state pollution control board and a plantation drive across four blocks.",
    banner: bannerCultural,
    category: "Seminar",
    department: "Civil Engineering",
    club: "Eco Club",
    organizer: "Prof. Latha Krishnan",
    organizerAvatar: "LK",
    venue: "Auditorium B",
    seats: 350,
    registered: 302,
    attended: 264,
    status: "Archived",
    certificate: true,
    fee: 0,
    tags: ["sustainability", "summit"],
    speakers: [{ name: "Dr. N. Balaji", role: "State Pollution Control Board" }],
    contact: { email: "ecoclub@campuspulse.edu", phone: "+91 98450 99001" },
    rating: 4.4,
  }),
  mk({
    id: "evt-009",
    offset: -20,
    hour: 16,
    hours: 4,
    title: "Freshers' Orientation & Club Fair 2025",
    summary: "42 clubs, 900 first-years, and the highest signup day of the year.",
    description:
      "Orientation for the incoming batch followed by a club fair with 42 stalls covering technical, cultural, sports and social impact clubs.",
    banner: bannerCultural,
    category: "Cultural",
    department: "Student Affairs",
    club: "Student Council",
    organizer: "Prof. Kabir Nair",
    organizerAvatar: "KN",
    venue: "Main Quadrangle",
    seats: 1000,
    registered: 912,
    attended: 874,
    status: "Archived",
    certificate: false,
    fee: 0,
    tags: ["orientation", "clubs"],
    speakers: [],
    contact: { email: "council@campuspulse.edu", phone: "+91 98450 12000" },
    rating: 4.8,
  }),
  mk({
    id: "evt-010",
    offset: 25,
    hour: 10,
    hours: 5,
    title: "Design Thinking Studio — UI/UX Sprint",
    summary: "From problem framing to a clickable prototype in a single day.",
    description:
      "A studio-format workshop taking participants from problem framing and user interviews to a clickable Figma prototype by evening.",
    banner: bannerWorkshop,
    category: "Workshop",
    department: "Design",
    club: "Design Collective",
    organizer: "Nisha Balan",
    organizerAvatar: "NB",
    venue: "Studio 4, Design Block",
    seats: 80,
    registered: 34,
    status: "Draft",
    certificate: true,
    fee: 199,
    tags: ["design", "figma", "ux"],
    speakers: [{ name: "Nisha Balan", role: "Product Designer, Razorpay" }],
    contact: { email: "design@campuspulse.edu", phone: "+91 90192 33445" },
  }),
];

export const isExpired = (e: CampusEvent) => new Date(e.end).getTime() < Date.now();

/** Automatic expiry rule: anything past its end datetime is archived, no matter its stored status. */
export const resolveStatus = (e: CampusEvent): EventStatus => {
  if (e.status === "Draft" || e.status === "Submitted" || e.status === "Pending Approval") return e.status;
  if (isExpired(e)) return "Archived";
  const s = new Date(e.start).getTime();
  if (Date.now() >= s) return "Live";
  return e.status === "Published" ? "Published" : "Upcoming";
};

export const activeEvents = () =>
  events.filter((e) => !isExpired(e) && !["Draft", "Submitted", "Pending Approval"].includes(e.status));
export const archivedEvents = () => events.filter((e) => isExpired(e));
export const getEvent = (id: string) => events.find((e) => e.id === id);

export const categories: EventCategory[] = [
  "Technical",
  "Cultural",
  "Workshop",
  "Sports",
  "Seminar",
  "Placement",
];

export const departments = [
  "Computer Science",
  "Information Technology",
  "Mechanical Engineering",
  "Civil Engineering",
  "Design",
  "Physical Education",
  "Student Affairs",
  "Training & Placement",
];

export const clubs = [
  { name: "Codecraft Club", dept: "Computer Science", members: 268, lead: "Arjun Verma", events: 14 },
  { name: "Fine Arts Society", dept: "Student Affairs", members: 412, lead: "Ira Sen", events: 22 },
  { name: "IEEE Student Branch", dept: "Information Technology", members: 190, lead: "Meera Raghavan", events: 11 },
  { name: "Robotics Society", dept: "Mechanical Engineering", members: 154, lead: "Dev Anand", events: 9 },
  { name: "Eco Club", dept: "Civil Engineering", members: 121, lead: "Latha Krishnan", events: 7 },
  { name: "Design Collective", dept: "Design", members: 98, lead: "Nisha Balan", events: 6 },
];

export const users = [
  { id: "u1", name: "Aarav Sharma", email: "aarav.s@campus.edu", role: "Student", dept: "Computer Science", status: "Active", joined: "2024-08-12" },
  { id: "u2", name: "Meera Raghavan", email: "meera.r@campus.edu", role: "Organizer", dept: "Information Technology", status: "Active", joined: "2023-06-01" },
  { id: "u3", name: "Dr. Ananya Iyer", email: "ananya.i@campus.edu", role: "Organizer", dept: "Computer Science", status: "Active", joined: "2021-01-19" },
  { id: "u4", name: "Kabir Nair", email: "kabir.n@campus.edu", role: "Administrator", dept: "Student Affairs", status: "Active", joined: "2020-03-04" },
  { id: "u5", name: "Sneha Pillai", email: "sneha.p@campus.edu", role: "Student", dept: "Design", status: "Suspended", joined: "2025-07-22" },
  { id: "u6", name: "Rohit Das", email: "rohit.d@campus.edu", role: "Student", dept: "Mechanical Engineering", status: "Active", joined: "2024-08-12" },
  { id: "u7", name: "Latha Krishnan", email: "latha.k@campus.edu", role: "Organizer", dept: "Civil Engineering", status: "Pending", joined: "2026-01-08" },
];

export const registrants = [
  { id: "r1", name: "Aarav Sharma", roll: "21CS042", dept: "Computer Science", year: "3rd", status: "Approved", attended: true, paid: true },
  { id: "r2", name: "Sneha Pillai", roll: "22DS118", dept: "Design", year: "2nd", status: "Approved", attended: true, paid: true },
  { id: "r3", name: "Rohit Das", roll: "21ME077", dept: "Mechanical Engineering", year: "3rd", status: "Waitlisted", attended: false, paid: false },
  { id: "r4", name: "Tanya Bose", roll: "23IT009", dept: "Information Technology", year: "1st", status: "Pending", attended: false, paid: true },
  { id: "r5", name: "Imran Khan", roll: "21CS103", dept: "Computer Science", year: "3rd", status: "Approved", attended: false, paid: true },
  { id: "r6", name: "Vidya Menon", roll: "22CE054", dept: "Civil Engineering", year: "2nd", status: "Rejected", attended: false, paid: false },
  { id: "r7", name: "Karthik Reddy", roll: "20EC022", dept: "Information Technology", year: "4th", status: "Approved", attended: true, paid: true },
  { id: "r8", name: "Ananya Gupta", roll: "23CS201", dept: "Computer Science", year: "1st", status: "Approved", attended: true, paid: true },
];

export const notifications = [
  { id: "n1", title: "HackFusion 2026 registrations closing", body: "Only 52 seats left. Confirm your team before Friday 6 PM.", time: "12 min ago", type: "warning", unread: true },
  { id: "n2", title: "Certificate available", body: "Your Cybersecurity CTF participation certificate is ready to download.", time: "2 hours ago", type: "success", unread: true },
  { id: "n3", title: "Venue changed", body: "System Design Bootcamp moved to Seminar Hall 2.", time: "Yesterday", type: "info", unread: true },
  { id: "n4", title: "Event archived", body: "Green Campus Sustainability Summit has ended and moved to archives.", time: "3 days ago", type: "info", unread: false },
  { id: "n5", title: "Registration approved", body: "You're confirmed for the Placement Readiness Summit.", time: "4 days ago", type: "success", unread: false },
];

export const activity = [
  { id: "a1", who: "Dr. Ananya Iyer", what: "published HackFusion 2026", when: "10 min ago", tone: "primary" },
  { id: "a2", who: "System", what: "auto-archived Cybersecurity CTF after end time", when: "1 hour ago", tone: "muted" },
  { id: "a3", who: "Kabir Nair", what: "approved Inter-College Athletics Meet", when: "3 hours ago", tone: "success" },
  { id: "a4", who: "Meera Raghavan", what: "issued 158 certificates", when: "Yesterday", tone: "warning" },
  { id: "a5", who: "Admin", what: "added Design Collective to clubs directory", when: "2 days ago", tone: "muted" },
];

export const monthlyStats = [
  { month: "Aug", events: 12, registrations: 640, attendance: 512 },
  { month: "Sep", events: 18, registrations: 980, attendance: 802 },
  { month: "Oct", events: 22, registrations: 1320, attendance: 1104 },
  { month: "Nov", events: 16, registrations: 890, attendance: 731 },
  { month: "Dec", events: 9, registrations: 520, attendance: 402 },
  { month: "Jan", events: 24, registrations: 1610, attendance: 1388 },
];

export const categorySplit = [
  { name: "Technical", value: 38 },
  { name: "Cultural", value: 24 },
  { name: "Workshop", value: 18 },
  { name: "Sports", value: 11 },
  { name: "Seminar", value: 9 },
];

export const departmentPerformance = [
  { dept: "CSE", events: 28, attendance: 91 },
  { dept: "IT", events: 21, attendance: 88 },
  { dept: "MECH", events: 14, attendance: 76 },
  { dept: "CIVIL", events: 11, attendance: 71 },
  { dept: "DESIGN", events: 9, attendance: 84 },
];

export const feedbackTrend = [
  { week: "W1", score: 4.1 },
  { week: "W2", score: 4.3 },
  { week: "W3", score: 4.2 },
  { week: "W4", score: 4.6 },
  { week: "W5", score: 4.7 },
];

export const lifecycle: { stage: EventStatus; note: string }[] = [
  { stage: "Draft", note: "Organizer builds the event in the wizard" },
  { stage: "Submitted", note: "Sent to the department desk" },
  { stage: "Pending Approval", note: "Admin reviews venue, budget and clash" },
  { stage: "Published", note: "Visible on the public campus feed" },
  { stage: "Upcoming", note: "Registrations open, reminders scheduled" },
  { stage: "Live", note: "QR check-in and live announcements" },
  { stage: "Completed", note: "Attendance locked, feedback collected" },
  { stage: "Archived", note: "Auto-archived the moment end time passes" },
];

export const currentUser = {
  name: "Aarav Sharma",
  roll: "21CS042",
  email: "aarav.s@campus.edu",
  dept: "Computer Science",
  year: "3rd Year",
  initials: "AS",
  points: 1240,
  streak: 7,
};
