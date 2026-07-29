import { useState, useEffect } from "react";
import { registrationService } from "@/services/registrationService";
import type { RegistrationDocument } from "@/lib/firestore";

/**
 * Hook for Student's My Registrations page
 */
export function useMyRegistrations(studentId = "std-001") {
  const [registrations, setRegistrations] = useState<RegistrationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = registrationService.subscribe({ studentId }, (data) => {
      setRegistrations(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [studentId]);

  return { registrations, loading };
}

/**
 * Hook for Organizer / Admin view of event registrations
 */
export function useEventRegistrations(eventId?: string) {
  const [registrations, setRegistrations] = useState<RegistrationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = registrationService.subscribe({ eventId }, (data) => {
      setRegistrations(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [eventId]);

  return { registrations, loading };
}

/**
 * Hook for checking student registration status for single event detail page
 */
export function useRegistrationStatus(eventId: string, studentId = "std-001") {
  const [registration, setRegistration] = useState<RegistrationDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = registrationService.subscribe({ studentId, eventId }, (data) => {
      setRegistration(data[0] || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [eventId, studentId]);

  return { registration, isRegistered: !!registration, loading };
}
