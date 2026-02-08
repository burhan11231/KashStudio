import { PageShell } from "@/components/layout/page-shell";

export default function ClientSettingsPage() {
  return (
    <PageShell
      eyebrow="Client"
      title="Account settings"
      description="Manage your profile, security settings, and notification preferences."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">Settings panel coming soon.</p>
      </div>
    </PageShell>
  );
}
