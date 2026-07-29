import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter, 
  getDocs, 
  doc, 
  setDoc, 
  serverTimestamp,
  type DocumentData,
  type QueryDocumentSnapshot
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { FirestoreEvent } from "@/types/firestoreEvent";

const EVENTS_COLLECTION = "events";

export const firestoreEventService = {
  /**
   * Fetches published, upcoming, non-archived events from Firestore with pagination.
   */
  async getPublishedUpcomingEvents(
    pageSize: number = 9,
    lastVisibleDoc: QueryDocumentSnapshot<DocumentData> | null = null
  ): Promise<{
    events: { id: string; data: FirestoreEvent }[];
    lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  }> {
    const todayStr = new Date().toISOString().split("T")[0];
    
    // Base Query: status == "published", isArchived == false, date >= today, sorted by date asc
    let q = query(
      collection(db, EVENTS_COLLECTION),
      where("status", "==", "published"),
      where("isArchived", "==", false),
      where("date", ">=", todayStr),
      orderBy("date", "asc")
    );

    if (lastVisibleDoc) {
      q = query(q, startAfter(lastVisibleDoc), limit(pageSize));
    } else {
      q = query(q, limit(pageSize));
    }

    const snapshot = await getDocs(q);
    const events: { id: string; data: FirestoreEvent }[] = [];
    snapshot.forEach((doc) => {
      events.push({
        id: doc.id,
        data: doc.data() as FirestoreEvent,
      });
    });

    const lastDoc = snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;

    return {
      events,
      lastDoc,
    };
  },

  /**
   * Automatically seeds sample upcoming published events if the collection is empty.
   */
  async seedSampleEventsIfEmpty(): Promise<void> {
    try {
      const q = query(collection(db, EVENTS_COLLECTION), limit(1));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.log("Firestore 'events' collection is empty. Seeding sample events...");
        
        const now = new Date();
        const formatDate = (daysAhead: number) => {
          const d = new Date(now);
          d.setDate(d.getDate() + daysAhead);
          return d.toISOString().split("T")[0];
        };

        const sampleEvents: FirestoreEvent[] = [
          {
            title: "National AI & Robotics Symposium",
            description: "Join leading minds in artificial intelligence and robotics for a two-day symposium featuring panel discussions, hands-on tutorials, and robotics project demos.",
            department: "Computer Science",
            category: "Technical",
            bannerUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
            venue: "Auditorium A, Main Campus",
            eventMode: "Offline",
            date: formatDate(2), // 2 days ahead
            time: "09:30",
            registrationDeadline: formatDate(1),
            organizerId: "org-ai-symposium",
            organizerName: "AI Research Association",
            status: "published",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            isArchived: false,
            participantsCount: 42,
          },
          {
            title: "Annual Cultural Fusion Dance Showcase",
            description: "Experience the vibrant choreography and rhythm at the Annual Cultural Fusion dance show, celebrating traditional and modern dance forms across departments.",
            department: "Cultural Committee",
            category: "Cultural",
            bannerUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",
            venue: "Open Air Theatre",
            eventMode: "Offline",
            date: formatDate(5), // 5 days ahead
            time: "18:00",
            registrationDeadline: formatDate(4),
            organizerId: "org-cultural",
            organizerName: "Rhythm & Beats Club",
            status: "published",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            isArchived: false,
            participantsCount: 120,
          },
          {
            title: "Web Development Masterclass (Vite & React)",
            description: "Learn how to build production-ready single page applications using Vite, React Router, and TailwindCSS. Ideal for beginner and intermediate frontend enthusiasts.",
            department: "Information Technology",
            category: "Workshop",
            bannerUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
            venue: "Google Meet",
            eventMode: "Online",
            date: formatDate(8), // 8 days ahead
            time: "14:00",
            registrationDeadline: formatDate(7),
            organizerId: "org-it-club",
            organizerName: "ByteCraft Developer Guild",
            status: "published",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            isArchived: false,
            participantsCount: 75,
          },
          {
            title: "Inter-College Cricket Tournament 2026",
            description: "The biggest sports event of the semester is here! Register your department teams to compete for the ultimate championship cup.",
            department: "Physical Education",
            category: "Sports",
            bannerUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800",
            venue: "University Sports Field",
            eventMode: "Offline",
            date: formatDate(12), // 12 days ahead
            time: "08:00",
            registrationDeadline: formatDate(10),
            organizerId: "org-sports-sports",
            organizerName: "Sports Council",
            status: "published",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            isArchived: false,
            participantsCount: 15,
          },
          {
            title: "Campus Placement Strategy Seminar",
            description: "Unlock keys to crack top tier engineering and business analyst roles. Panelists include alumni from Google, McKinsey, and Microsoft.",
            department: "Training and Placement Cell",
            category: "Seminar",
            bannerUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
            venue: "Seminar Hall 4, Placement Block",
            eventMode: "Offline",
            date: formatDate(15), // 15 days ahead
            time: "10:30",
            registrationDeadline: formatDate(14),
            organizerId: "org-placement",
            organizerName: "Placement Cell Board",
            status: "published",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            isArchived: false,
            participantsCount: 88,
          }
        ];

        for (let i = 0; i < sampleEvents.length; i++) {
          const docId = `fsev-sample-${i + 1}`;
          await setDoc(doc(db, EVENTS_COLLECTION, docId), sampleEvents[i]);
        }
        console.log("Successfully seeded 5 sample events into Firestore.");
      }
    } catch (err) {
      console.error("Failed to check/seed sample events in Firestore:", err);
    }
  }
};
