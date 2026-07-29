//#region node_modules/.nitro/vite/services/ssr/assets/mock-CEuLP2kB.js
var banner_hackathon_default = "/assets/banner-hackathon-C2AJiMSF.jpg";
var banner_cultural_default = "/assets/banner-cultural-DyEuO6Ds.jpg";
var banner_workshop_default = "/assets/banner-workshop-HgU2xa2j.jpg";
var banner_sports_default = "/assets/banner-sports-CeQTrYE7.jpg";
var day = 864e5;
var now = Date.now();
var iso = (offsetDays, hour = 10, durationHrs = 4) => {
	const d = new Date(now + offsetDays * day);
	d.setHours(hour, 0, 0, 0);
	const e = new Date(d.getTime() + durationHrs * 36e5);
	return [d.toISOString(), e.toISOString()];
};
var mk = (e) => {
	const { offset, hour, hours, ...rest } = e;
	const [start, end] = iso(offset, hour, hours);
	return {
		...rest,
		start,
		end
	};
};
var events = [
	mk({
		id: "evt-001",
		offset: 6,
		hour: 9,
		hours: 30,
		title: "HackFusion 2026 — 30 Hour National Hackathon",
		summary: "Build, break and ship products with 400+ builders across 60 colleges.",
		description: "HackFusion is the flagship 30-hour hackathon of the Department of Computer Science. Teams of up to 4 compete across AI, FinTech, HealthTech and Sustainability tracks, mentored by engineers from leading product companies. Meals, swag and workstations provided on site.",
		banner: banner_hackathon_default,
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
		tags: [
			"hackathon",
			"ai",
			"prizes",
			"team"
		],
		speakers: [{
			name: "Rohan Mehta",
			role: "Principal Engineer, Stripe"
		}, {
			name: "Sara Qureshi",
			role: "AI Lead, Zoho"
		}],
		contact: {
			email: "hackfusion@campuspulse.edu",
			phone: "+91 98450 11223"
		}
	}),
	mk({
		id: "evt-002",
		offset: 0,
		hour: 8,
		hours: 12,
		title: "Rhythm & Rangoli — Annual Cultural Night",
		summary: "Dance, music and drama finals with the inter-department trophy on the line.",
		description: "The cultural committee presents the grand finale night featuring 18 performing teams, a live band, food stalls and the announcement of the inter-department championship trophy.",
		banner: banner_cultural_default,
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
		tags: [
			"music",
			"dance",
			"fest"
		],
		speakers: [{
			name: "The Midnight Ragas",
			role: "Headline Band"
		}],
		contact: {
			email: "culturals@campuspulse.edu",
			phone: "+91 98450 55441"
		}
	}),
	mk({
		id: "evt-003",
		offset: 2,
		hour: 14,
		hours: 3,
		title: "System Design Bootcamp with Ex-Google Engineers",
		summary: "Hands-on session on scaling, caching and interview-grade design writeups.",
		description: "A practical bootcamp covering load balancing, database sharding, caching layers and how to structure a system design interview answer. Bring a laptop; worksheets provided.",
		banner: banner_workshop_default,
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
		tags: [
			"system design",
			"career",
			"interview"
		],
		speakers: [{
			name: "Vikram Shetty",
			role: "Ex-Google, Staff SWE"
		}],
		contact: {
			email: "ieee@campuspulse.edu",
			phone: "+91 90080 71122"
		}
	}),
	mk({
		id: "evt-004",
		offset: 11,
		hour: 7,
		hours: 10,
		title: "Inter-College Athletics Meet 2026",
		summary: "Track, field and relay finals across 22 colleges at the central stadium.",
		description: "Two-day athletics meet with 40+ events. Registration requires a valid sports ID and medical clearance uploaded before the deadline.",
		banner: banner_sports_default,
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
		contact: {
			email: "sports@campuspulse.edu",
			phone: "+91 98860 33220"
		}
	}),
	mk({
		id: "evt-005",
		offset: 4,
		hour: 11,
		hours: 5,
		title: "Placement Readiness Summit — Batch of 2026",
		summary: "Mock interviews, resume clinics and recruiter AMA with 12 hiring partners.",
		description: "The training and placement cell hosts recruiters from 12 partner companies for resume clinics, mock technical interviews and a live AMA on hiring bars.",
		banner: banner_workshop_default,
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
		tags: [
			"placement",
			"resume",
			"careers"
		],
		speakers: [{
			name: "Hiring Panel",
			role: "12 partner companies"
		}],
		contact: {
			email: "tnp@campuspulse.edu",
			phone: "+91 99001 22110"
		}
	}),
	mk({
		id: "evt-006",
		offset: 18,
		hour: 10,
		hours: 6,
		title: "Robotics Expo & Line Follower Championship",
		summary: "Watch 60 bots battle across arenas built by the mechatronics lab.",
		description: "Robotics expo with live demos, a line-follower championship and a drone showcase from the mechatronics lab.",
		banner: banner_hackathon_default,
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
		tags: [
			"robotics",
			"expo",
			"competition"
		],
		speakers: [],
		contact: {
			email: "robotics@campuspulse.edu",
			phone: "+91 90350 88110"
		}
	}),
	mk({
		id: "evt-007",
		offset: -3,
		hour: 10,
		hours: 6,
		title: "Cybersecurity CTF — Capture The Flag Sprint",
		summary: "Six hours of web, crypto and forensics challenges. 88 teams competed.",
		description: "A six-hour jeopardy-style CTF with web exploitation, cryptography, reverse engineering and forensics categories. Writeups published post-event.",
		banner: banner_workshop_default,
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
		contact: {
			email: "cybercell@campuspulse.edu",
			phone: "+91 90080 44112"
		},
		rating: 4.7
	}),
	mk({
		id: "evt-008",
		offset: -9,
		hour: 9,
		hours: 8,
		title: "Green Campus Sustainability Summit",
		summary: "Panel on circular campuses, plus a tree-plantation drive across 4 blocks.",
		description: "A day-long summit on sustainable campus operations, with a keynote from the state pollution control board and a plantation drive across four blocks.",
		banner: banner_cultural_default,
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
		speakers: [{
			name: "Dr. N. Balaji",
			role: "State Pollution Control Board"
		}],
		contact: {
			email: "ecoclub@campuspulse.edu",
			phone: "+91 98450 99001"
		},
		rating: 4.4
	}),
	mk({
		id: "evt-009",
		offset: -20,
		hour: 16,
		hours: 4,
		title: "Freshers' Orientation & Club Fair 2025",
		summary: "42 clubs, 900 first-years, and the highest signup day of the year.",
		description: "Orientation for the incoming batch followed by a club fair with 42 stalls covering technical, cultural, sports and social impact clubs.",
		banner: banner_cultural_default,
		category: "Cultural",
		department: "Student Affairs",
		club: "Student Council",
		organizer: "Prof. Kabir Nair",
		organizerAvatar: "KN",
		venue: "Main Quadrangle",
		seats: 1e3,
		registered: 912,
		attended: 874,
		status: "Archived",
		certificate: false,
		fee: 0,
		tags: ["orientation", "clubs"],
		speakers: [],
		contact: {
			email: "council@campuspulse.edu",
			phone: "+91 98450 12000"
		},
		rating: 4.8
	}),
	mk({
		id: "evt-010",
		offset: 25,
		hour: 10,
		hours: 5,
		title: "Design Thinking Studio — UI/UX Sprint",
		summary: "From problem framing to a clickable prototype in a single day.",
		description: "A studio-format workshop taking participants from problem framing and user interviews to a clickable Figma prototype by evening.",
		banner: banner_workshop_default,
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
		tags: [
			"design",
			"figma",
			"ux"
		],
		speakers: [{
			name: "Nisha Balan",
			role: "Product Designer, Razorpay"
		}],
		contact: {
			email: "design@campuspulse.edu",
			phone: "+91 90192 33445"
		}
	})
];
var isExpired = (e) => new Date(e.end).getTime() < Date.now();
/** Automatic expiry rule: anything past its end datetime is archived, no matter its stored status. */
var resolveStatus = (e) => {
	if (e.status === "Draft" || e.status === "Submitted" || e.status === "Pending Approval") return e.status;
	if (isExpired(e)) return "Archived";
	const s = new Date(e.start).getTime();
	if (Date.now() >= s) return "Live";
	return e.status === "Published" ? "Published" : "Upcoming";
};
var activeEvents = () => events.filter((e) => !isExpired(e) && ![
	"Draft",
	"Submitted",
	"Pending Approval"
].includes(e.status));
var archivedEvents = () => events.filter((e) => isExpired(e));
var getEvent = (id) => events.find((e) => e.id === id);
var categories = [
	"Technical",
	"Cultural",
	"Workshop",
	"Sports",
	"Seminar",
	"Placement"
];
var departments = [
	"Computer Science",
	"Information Technology",
	"Mechanical Engineering",
	"Civil Engineering",
	"Design",
	"Physical Education",
	"Student Affairs",
	"Training & Placement"
];
var clubs = [
	{
		name: "Codecraft Club",
		dept: "Computer Science",
		members: 268,
		lead: "Arjun Verma",
		events: 14
	},
	{
		name: "Fine Arts Society",
		dept: "Student Affairs",
		members: 412,
		lead: "Ira Sen",
		events: 22
	},
	{
		name: "IEEE Student Branch",
		dept: "Information Technology",
		members: 190,
		lead: "Meera Raghavan",
		events: 11
	},
	{
		name: "Robotics Society",
		dept: "Mechanical Engineering",
		members: 154,
		lead: "Dev Anand",
		events: 9
	},
	{
		name: "Eco Club",
		dept: "Civil Engineering",
		members: 121,
		lead: "Latha Krishnan",
		events: 7
	},
	{
		name: "Design Collective",
		dept: "Design",
		members: 98,
		lead: "Nisha Balan",
		events: 6
	}
];
var registrants = [
	{
		id: "r1",
		name: "Aarav Sharma",
		roll: "21CS042",
		dept: "Computer Science",
		year: "3rd",
		status: "Approved",
		attended: true,
		paid: true
	},
	{
		id: "r2",
		name: "Sneha Pillai",
		roll: "22DS118",
		dept: "Design",
		year: "2nd",
		status: "Approved",
		attended: true,
		paid: true
	},
	{
		id: "r3",
		name: "Rohit Das",
		roll: "21ME077",
		dept: "Mechanical Engineering",
		year: "3rd",
		status: "Waitlisted",
		attended: false,
		paid: false
	},
	{
		id: "r4",
		name: "Tanya Bose",
		roll: "23IT009",
		dept: "Information Technology",
		year: "1st",
		status: "Pending",
		attended: false,
		paid: true
	},
	{
		id: "r5",
		name: "Imran Khan",
		roll: "21CS103",
		dept: "Computer Science",
		year: "3rd",
		status: "Approved",
		attended: false,
		paid: true
	},
	{
		id: "r6",
		name: "Vidya Menon",
		roll: "22CE054",
		dept: "Civil Engineering",
		year: "2nd",
		status: "Rejected",
		attended: false,
		paid: false
	},
	{
		id: "r7",
		name: "Karthik Reddy",
		roll: "20EC022",
		dept: "Information Technology",
		year: "4th",
		status: "Approved",
		attended: true,
		paid: true
	},
	{
		id: "r8",
		name: "Ananya Gupta",
		roll: "23CS201",
		dept: "Computer Science",
		year: "1st",
		status: "Approved",
		attended: true,
		paid: true
	}
];
var notifications = [
	{
		id: "n1",
		title: "HackFusion 2026 registrations closing",
		body: "Only 52 seats left. Confirm your team before Friday 6 PM.",
		time: "12 min ago",
		type: "warning",
		unread: true
	},
	{
		id: "n2",
		title: "Certificate available",
		body: "Your Cybersecurity CTF participation certificate is ready to download.",
		time: "2 hours ago",
		type: "success",
		unread: true
	},
	{
		id: "n3",
		title: "Venue changed",
		body: "System Design Bootcamp moved to Seminar Hall 2.",
		time: "Yesterday",
		type: "info",
		unread: true
	},
	{
		id: "n4",
		title: "Event archived",
		body: "Green Campus Sustainability Summit has ended and moved to archives.",
		time: "3 days ago",
		type: "info",
		unread: false
	},
	{
		id: "n5",
		title: "Registration approved",
		body: "You're confirmed for the Placement Readiness Summit.",
		time: "4 days ago",
		type: "success",
		unread: false
	}
];
var activity = [
	{
		id: "a1",
		who: "Dr. Ananya Iyer",
		what: "published HackFusion 2026",
		when: "10 min ago",
		tone: "primary"
	},
	{
		id: "a2",
		who: "System",
		what: "auto-archived Cybersecurity CTF after end time",
		when: "1 hour ago",
		tone: "muted"
	},
	{
		id: "a3",
		who: "Kabir Nair",
		what: "approved Inter-College Athletics Meet",
		when: "3 hours ago",
		tone: "success"
	},
	{
		id: "a4",
		who: "Meera Raghavan",
		what: "issued 158 certificates",
		when: "Yesterday",
		tone: "warning"
	},
	{
		id: "a5",
		who: "Admin",
		what: "added Design Collective to clubs directory",
		when: "2 days ago",
		tone: "muted"
	}
];
var monthlyStats = [
	{
		month: "Aug",
		events: 12,
		registrations: 640,
		attendance: 512
	},
	{
		month: "Sep",
		events: 18,
		registrations: 980,
		attendance: 802
	},
	{
		month: "Oct",
		events: 22,
		registrations: 1320,
		attendance: 1104
	},
	{
		month: "Nov",
		events: 16,
		registrations: 890,
		attendance: 731
	},
	{
		month: "Dec",
		events: 9,
		registrations: 520,
		attendance: 402
	},
	{
		month: "Jan",
		events: 24,
		registrations: 1610,
		attendance: 1388
	}
];
var categorySplit = [
	{
		name: "Technical",
		value: 38
	},
	{
		name: "Cultural",
		value: 24
	},
	{
		name: "Workshop",
		value: 18
	},
	{
		name: "Sports",
		value: 11
	},
	{
		name: "Seminar",
		value: 9
	}
];
var departmentPerformance = [
	{
		dept: "CSE",
		events: 28,
		attendance: 91
	},
	{
		dept: "IT",
		events: 21,
		attendance: 88
	},
	{
		dept: "MECH",
		events: 14,
		attendance: 76
	},
	{
		dept: "CIVIL",
		events: 11,
		attendance: 71
	},
	{
		dept: "DESIGN",
		events: 9,
		attendance: 84
	}
];
var lifecycle = [
	{
		stage: "Draft",
		note: "Organizer builds the event in the wizard"
	},
	{
		stage: "Submitted",
		note: "Sent to the department desk"
	},
	{
		stage: "Pending Approval",
		note: "Admin reviews venue, budget and clash"
	},
	{
		stage: "Published",
		note: "Visible on the public campus feed"
	},
	{
		stage: "Upcoming",
		note: "Registrations open, reminders scheduled"
	},
	{
		stage: "Live",
		note: "QR check-in and live announcements"
	},
	{
		stage: "Completed",
		note: "Attendance locked, feedback collected"
	},
	{
		stage: "Archived",
		note: "Auto-archived the moment end time passes"
	}
];
//#endregion
export { notifications as _, banner_hackathon_default as a, categorySplit as c, departments as d, events as f, monthlyStats as g, lifecycle as h, banner_cultural_default as i, clubs as l, isExpired as m, activity as n, banner_workshop_default as o, getEvent as p, archivedEvents as r, categories as s, activeEvents as t, departmentPerformance as u, registrants as v, resolveStatus as y };
