import { MetricCard } from "@/components/dashboards/metric-card";
import { PageShell } from "@/components/layout/page-shell";

export default function DeveloperDashboardPage() {
  return (
    <PageShell
      eyebrow="Developer"
      title="Developer dashboard"
      description="Track approvals, sales, and payout status for every listing."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Active listings" value="8" icon={<span>🗂️</span>} />
        <MetricCard label="Monthly sales" value="₹12.4L" icon={<span>📈</span>} />
        <MetricCard label="Pending reviews" value="2" icon={<span>🧩</span>} />
      </div>
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm font-semibold text-ink">Next payout</p>
        <p className="mt-2 text-sm text-storm">Expected settlement in T+1 cycle.</p>
      </div>
    </PageShell>
  );
}
