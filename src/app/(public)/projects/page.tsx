import { PageShell } from "@/components/layout/page-shell";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Fintech Wallet",
    description: "Flutter + Firebase stack with KYC-ready onboarding and Razorpay.",
    icon: "📱"
  },
  {
    title: "Healthcare Scheduler",
    description: "React + Node dashboard with appointment management and analytics.",
    icon: "🩺"
  },
  {
    title: "Retail Inventory",
    description: "Multi-tenant POS with barcode support and GST-compliant invoices.",
    icon: "🧾"
  }
];

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Marketplace"
      title="Approved projects ready for acquisition"
      description="Browse vetted projects across web, Android, and iOS. Filters for ownership models, platform, and price."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            icon={<span className="text-lg">{project.icon}</span>}
          />
        ))}
      </div>
    </PageShell>
  );
}
