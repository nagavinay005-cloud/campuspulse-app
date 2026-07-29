import { useState, useEffect } from "react";
import { certificateService, type CertificateDocument } from "@/services/certificateService";

/**
 * Hook for live real-time Student Certificates stream
 */
export function useStudentCertificates(studentId = "std-001") {
  const [certificates, setCertificates] = useState<CertificateDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = certificateService.subscribe(studentId, (data) => {
      setCertificates(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [studentId]);

  return { certificates, count: certificates.length, loading };
}
