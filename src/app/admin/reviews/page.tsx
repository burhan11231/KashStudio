import { PageShell } from "@/components/layout/page-shell";

export default function AdminReviewsPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="Review moderation"
      description="Approve, reject, or flag spam reviews and disputes."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">No reviews awaiting moderation.</p>
      </div>
    </PageShell>
  );
}
