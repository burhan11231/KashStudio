import { MetricCard } from "@/components/dashboards/metric-card";
import { PageShell } from "@/components/layout/page-shell";

export default function AdminDashboardPage() {
  return (
    <PageShell
      eyebrow="Admin"
      title="Control tower"
      description="Manage users, moderation queues, and platform settings with audit-ready controls."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Pending developers" value="14" icon={<span>🧑‍💻</span>} />
        <MetricCard label="Projects to review" value="6" icon={<span>📁</span>} />
        <MetricCard label="Disputes" value="2" icon={<span>⚖️</span>} />
      </div>
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm font-semibold text-ink">Maintenance mode</p>
        <p className="mt-2 text-sm text-storm">Platform running normally.</p>
      </div>
    </PageShell>
  );
}
