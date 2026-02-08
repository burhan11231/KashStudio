import { PageShell } from "@/components/layout/page-shell";

export default function DeveloperPayoutsPage() {
  return (
    <PageShell
      eyebrow="Developer"
      title="Payouts"
      description="Verify your bank or UPI details to enable automatic settlements."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">Bank verification pending.</p>
      </div>
    </PageShell>
  );
}
