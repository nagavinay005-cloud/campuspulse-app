import { useState, useEffect } from "react";
import { attendanceService, type AttendanceDocument } from "@/services/attendanceService";

/**
 * Hook for live real-time Attendance Logs stream
 */
export function useAttendanceList(eventId = "evt-001") {
  const [attendance, setAttendance] = useState<AttendanceDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = attendanceService.subscribe(eventId, (data) => {
      setAttendance(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [eventId]);

  const checkedInCount = attendance.filter((a) => a.attendanceStatus === "Present").length;

  return { attendance, checkedInCount, loading };
}
