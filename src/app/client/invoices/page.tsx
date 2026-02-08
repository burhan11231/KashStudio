import { PageShell } from "@/components/layout/page-shell";

export default function ClientInvoicesPage() {
  return (
    <PageShell
      eyebrow="Client"
      title="Invoices"
      description="Export GST-ready invoices for every purchase."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">No invoices generated yet.</p>
      </div>
    </PageShell>
  );
}
