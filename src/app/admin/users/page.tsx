import { PageShell } from "@/components/layout/page-shell";

export default function AdminUsersPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="User management"
      description="Search users, disable abusive accounts, and reset access."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">User search coming soon.</p>
      </div>
    </PageShell>
  );
}
