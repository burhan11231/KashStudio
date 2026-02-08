import { PageShell } from "@/components/layout/page-shell";

export default function AdminDevelopersPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="Developer approvals"
      description="Approve, suspend, or request more information from onboarding developers."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">14 developers awaiting approval.</p>
      </div>
    </PageShell>
  );
}
