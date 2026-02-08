import { PageShell } from "@/components/layout/page-shell";

export default function DeveloperSalesPage() {
  return (
    <PageShell
      eyebrow="Developer"
      title="Sales & clients"
      description="Review sales history, client roster, and export invoice data."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">No sales recorded yet.</p>
      </div>
    </PageShell>
  );
}
