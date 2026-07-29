import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { Award, Download, Share2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader, SectionCard, StatCard } from "@/components/app/layout-bits";
import { useStudentCertificates } from "@/hooks/useCertificateHooks";
import { certificateService } from "@/services/certificateService";

import { useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/_app/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — CampusPulse" },
      { name: "description", content: "Download verified participation certificates from every completed event." },
      { property: "og:title", content: "Certificates — CampusPulse" },
      { property: "og:description", content: "Verified participation certificates, downloadable forever." },
    ],
  }),
  component: Certificates,
});

function Certificates() {
  const { userProfile } = useAuth();
  const { certificates, count } = useStudentCertificates(userProfile?.uid || "std-001");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Certificate Wallet"
        subtitle="Verified participation accreditation records, downloadable forever"
        breadcrumb={[{ label: "CampusPulse", to: "/" }, { label: "Student", to: "/dashboard" }, { label: "Certificates" }]}
        actions={
          <Button variant="outline" className="rounded-xl bg-card text-xs" onClick={() => toast.success("All certificates exported as a ZIP package.")}>
            <Download className="mr-1.5 size-4 text-primary" /> Export All Certificates
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Certificates Earned" value={count || 2} icon={Award} index={0} />
        <StatCard label="Verified Status" value={100} suffix="%" icon={ShieldCheck} tone="success" index={1} />
        <StatCard label="Activity Hours Credited" value={36} icon={CheckCircle2} tone="warning" index={2} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {certificates.map((cert) => (
          <SectionCard key={cert.certificateId}>
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/60 to-card p-6 text-center shadow-sm space-y-3">
              <Award className="mx-auto size-10 text-primary" />
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">Certificate of Participation</p>
              <h3 className="text-lg font-bold leading-snug text-foreground">{cert.eventTitle}</h3>
              <p className="text-xs text-muted-foreground">Awarded to <strong className="text-foreground">{cert.studentName}</strong> · {cert.rollNumber}</p>
              <p className="text-xs text-muted-foreground">{format(new Date(cert.issueDate), "dd MMMM yyyy")} · {cert.organizerName}</p>

              <div className="pt-2 flex items-center justify-center gap-2">
                <Badge variant="outline" className="rounded-full bg-card font-mono text-[10px] text-foreground border-primary/30">
                  ID: {cert.certificateId}
                </Badge>
                <Badge variant="outline" className="rounded-full bg-success-soft text-success border-success/30 text-[10px] font-bold">
                  {cert.verificationStatus}
                </Badge>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                className="flex-1 rounded-xl shadow-glow text-xs"
                onClick={() => certificateService.recordDownload(cert.certificateId)}
              >
                <Download className="mr-1.5 size-4" /> Download Certificate (PDF)
              </Button>
              <Button
                variant="outline"
                className="rounded-xl bg-card text-xs"
                onClick={() => {
                  navigator.clipboard.writeText(cert.certificateUrl);
                  toast.success("Verification link copied to clipboard!");
                }}
              >
                <Share2 className="size-4" />
              </Button>
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
