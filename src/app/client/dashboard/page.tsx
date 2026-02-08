import { MetricCard } from "@/components/dashboards/metric-card";
import { PageShell } from "@/components/layout/page-shell";

export default function ClientDashboardPage() {
  return (
    <PageShell
      eyebrow="Client"
      title="Your client dashboard"
      description="Track purchases, invoices, and secure downloads in one place."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Active licenses" value="12" icon={<span>📦</span>} />
        <MetricCard label="Pending invoices" value="3" icon={<span>🧾</span>} />
        <MetricCard label="Reviews due" value="5" icon={<span>⭐</span>} />
      </div>
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm font-semibold text-ink">Recent purchases</p>
        <ul className="mt-4 space-y-3 text-sm text-storm">
          <li>Fintech Wallet — Licensed — Download available</li>
          <li>Retail Inventory — Licensed — Review pending</li>
        </ul>
      </div>
    </PageShell>
  );
}
