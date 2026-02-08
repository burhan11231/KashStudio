import { PageShell } from "@/components/layout/page-shell";

export default function AdminProjectsPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="Project moderation"
      description="Review submissions, approve listings, and force-hide violations."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">6 projects in review queue.</p>
      </div>
    </PageShell>
  );
}
