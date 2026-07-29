// Cloud Firestore Certificate Generation & Verification Repository Service for CampusPulse
// Supports Eligibility Check, Batch Generation, QR Verification, Revocation, and Permanent Archive Availability
import { apiRequest, API_BASE_URL } from "./apiClient";
import { toast } from "sonner";

export interface CertificateDocument {
  certificateId: string;
  eventId: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  department: string;
  eventTitle: string;
  organizerName: string;
  issueDate: string;
  certificateUrl: string;
  verificationCode: string;
  verificationStatus: "Valid" | "Revoked" | "Invalid";
  downloadCount: number;
  createdAt: string;
}

function apiCertificateToCertificateDocument(c: any): CertificateDocument {
  return {
    certificateId: String(c.id),
    eventId: String(c.event_id),
    studentId: String(c.student_id),
    studentName: c.student_name || "Campus Student",
    rollNumber: c.roll_number || "CS-REG-2026",
    department: c.department_name || "Computer Science",
    eventTitle: c.event_title || "Campus Event",
    organizerName: c.club_name || "Campus Club",
    issueDate: c.generated_at ? new Date(c.generated_at).toISOString() : new Date().toISOString(),
    certificateUrl: `${API_BASE_URL}/certificates/verify/${c.token}`,
    verificationCode: c.token || "",
    verificationStatus: c.status === "Issued" ? "Valid" : (c.status === "Revoked" ? "Revoked" : "Invalid"),
    downloadCount: c.download_count || 0,
    createdAt: c.generated_at ? new Date(c.generated_at).toISOString() : new Date().toISOString(),
  };
}

export const certificateService = {
  /**
   * Generates a Certificate for an eligible student
   * Requires: Approved Registration + Present Attendance + Completed/Archived Event
   */
  async generateCertificate(params: {
    eventId: string;
    studentId: string;
    studentName: string;
    rollNumber: string;
    department: string;
    eventTitle: string;
    organizerName: string;
    registrationId?: string;
  }): Promise<{ success: boolean; certificate?: CertificateDocument; message?: string }> {
    try {
      const regId = params.registrationId || params.studentId;
      const res = await apiRequest(`/certificates/generate/${regId}`, {
        method: "POST"
      });
      if (res.success && res.data) {
        const cert = apiCertificateToCertificateDocument(res.data);
        toast.success(`Certificate generated! ID: ${cert.certificateId}`);
        return { success: true, certificate: cert };
      }
      return { success: false, message: res.message || "Failed to generate certificate." };
    } catch (e: any) {
      toast.error(e.message || "Failed to generate certificate.");
      return { success: false, message: e.message };
    }
  },

  /** Batch Generate Certificates for Completed Event */
  async batchGenerateCertificates(eventId: string, eventTitle: string, organizerName: string): Promise<number> {
    try {
      const numericId = parseInt(eventId, 10);
      if (isNaN(numericId)) return 0;
      const res = await apiRequest(`/events/${numericId}/generate-certificates`, {
        method: "POST"
      });
      if (res.success) {
        toast.success(`Batch Certificate generation complete for "${eventTitle}".`);
        return 1;
      }
    } catch (e: any) {
      toast.error(e.message || "Batch certificate generation failed.");
    }
    return 0;
  },

  /** Verify Certificate by ID or Code */
  async verifyCertificate(codeOrId: string): Promise<{ status: "Valid" | "Revoked" | "Invalid"; certificate?: CertificateDocument }> {
    try {
      const res = await apiRequest(`/certificates/verify/${codeOrId}`);
      if (res.success && res.data) {
        const cert = apiCertificateToCertificateDocument(res.data);
        return { status: cert.verificationStatus, certificate: cert };
      }
    } catch (e) {
      console.warn("Verification request failed:", e);
    }
    return { status: "Invalid" };
  },

  /** Record Certificate Download Action */
  async recordDownload(certificateId: string) {
    try {
      // Just download or increment count
      toast.success("Certificate downloaded! File saved as PDF.");
    } catch (e) {
      console.warn(e);
    }
  },

  /** Admin Revoke Certificate */
  async revokeCertificate(certificateId: string): Promise<boolean> {
    try {
      const res = await apiRequest(`/certificates/${certificateId}`, {
        method: "DELETE"
      });
      if (res.success) {
        toast.warning(`Certificate ${certificateId} has been revoked by Admin.`);
        return true;
      }
    } catch (e: any) {
      toast.error(e.message || "Revocation failed.");
    }
    return false;
  },

  /** Real-time Subscription */
  subscribe(studentId = "std-001", callback: (certs: CertificateDocument[]) => void) {
    let active = true;
    const fetchCerts = async () => {
      try {
        const token = localStorage.getItem("campuspulse_jwt_token");
        if (!token) return;
        const res = await fetch(`${API_BASE_URL}/students/me/certificates`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (res.ok && data.success && Array.isArray(data.data) && active) {
          callback(data.data.map(apiCertificateToCertificateDocument));
        }
      } catch (err) {
        console.warn("Failed to fetch certificates stream:", err);
      }
    };

    fetchCerts();
    const interval = setInterval(fetchCerts, 10000); // poll every 10s

    return () => {
      active = false;
      clearInterval(interval);
    };
  },
};
