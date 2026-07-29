import { useState, useEffect } from "react";
import { auditService, type AuditLogDocument } from "@/services/auditService";

/**
 * Hook for live real-time Audit Trail stream
 */
export function useAuditLogs() {
  const [logs, setLogs] = useState<AuditLogDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auditService.subscribe((data) => {
      setLogs(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const failedCount = logs.filter((l) => l.status === "Failed").length;
  const successCount = logs.filter((l) => l.status === "Success").length;

  return { logs, failedCount, successCount, loading };
}
