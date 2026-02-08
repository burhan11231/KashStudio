import { PageShell } from "@/components/layout/page-shell";

const developers = [
  { name: "NovaLabs", status: "Approved", focus: "Fintech & commerce" },
  { name: "PixelCraft", status: "Approved", focus: "Healthcare & SaaS" },
  { name: "Studio Orbit", status: "Pending", focus: "Edtech platforms" }
];

export default function DevelopersPage() {
  return (
    <PageShell
      eyebrow="Developers"
      title="Discover verified studios"
      description="Every developer passes identity checks, portfolio validation, and platform guidelines before listing projects."
    >
      <div className="space-y-4">
        {developers.map((developer) => (
          <div
            key={developer.name}
            className="rounded-3xl border border-ink/10 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-ink">{developer.name}</p>
                <p className="mt-1 text-sm text-storm">{developer.focus}</p>
              </div>
              <span className="rounded-full bg-aurora/20 px-3 py-1 text-xs font-semibold text-ink">
                {developer.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
