import { PageShell } from "@/components/layout/page-shell";

export default function ClientPurchasesPage() {
  return (
    <PageShell
      eyebrow="Client"
      title="My projects"
      description="Secure ZIP downloads are delivered instantly after payment verification."
    >
      <div className="space-y-4">
        {[
          "Fintech Wallet — Download ready",
          "Healthcare Scheduler — Awaiting email verification"
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-ink/10 bg-white p-6">
            <p className="text-sm text-storm">{item}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
