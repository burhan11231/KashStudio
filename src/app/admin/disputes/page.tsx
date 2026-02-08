import { PageShell } from "@/components/layout/page-shell";

export default function AdminDisputesPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="Disputes"
      description="Track disputes, resolution status, and compliance notes."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">2 disputes open.</p>
      </div>
    </PageShell>
  );
}
