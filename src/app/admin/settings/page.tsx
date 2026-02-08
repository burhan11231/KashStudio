import { PageShell } from "@/components/layout/page-shell";

export default function AdminSettingsPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="Platform settings"
      description="Manage Razorpay keys, platform fees, and legal templates."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Razorpay key management",
          "Platform fee configuration",
          "Legal document uploads",
          "Maintenance mode toggle"
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-ink/10 bg-white p-6">
            <p className="text-sm text-storm">{item}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
