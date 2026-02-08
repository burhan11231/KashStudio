import { PageShell } from "@/components/layout/page-shell";

export default function SearchPage() {
  return (
    <PageShell
      eyebrow="Search"
      title="Find the right build in minutes"
      description="Filter by category, platform, price, and ownership model. Search results prioritize approved, available projects."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm font-semibold text-ink">Search filters</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Category", "Platform", "Ownership"].map((label) => (
            <div key={label} className="rounded-2xl border border-ink/10 px-4 py-3 text-sm">
              {label}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
