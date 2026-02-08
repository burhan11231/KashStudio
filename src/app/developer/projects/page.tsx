import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";

export default function DeveloperProjectsPage() {
  return (
    <PageShell
      eyebrow="Developer"
      title="Manage your projects"
      description="Upload ZIP bundles, summary PDFs, and legal documents. Full copyright projects auto-hide after purchase."
    >
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/developer/projects/new">Add new project</ButtonLink>
        <ButtonLink href="/developer/projects" variant="outline">
          View guidelines
        </ButtonLink>
      </div>
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">No pending uploads.</p>
      </div>
    </PageShell>
  );
}
