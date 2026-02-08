import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

const projects = {
  "fintech-wallet": {
    title: "Fintech Wallet",
    developer: "NovaLabs",
    ownership: "Licensed",
    stack: ["Flutter", "Firebase", "Razorpay"],
    summary:
      "A production-ready wallet app with KYC onboarding, OTP verification, and transaction history.",
    price: "₹4,80,000"
  }
};

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <div>
        <Badge label={project.ownership} tone="success" />
        <h1 className="mt-4 text-3xl font-semibold text-ink">{project.title}</h1>
        <p className="mt-2 text-sm text-storm">by {project.developer}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-ink/10 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink">Overview</h2>
            <p className="mt-3 text-sm text-storm">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 px-3 py-1 text-xs text-storm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink">Documents</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-storm">
              <li>Project summary PDF</li>
              <li>License terms and legal documents</li>
              <li>Security overview and audit logs</li>
            </ul>
          </div>
        </div>
        <aside className="rounded-3xl border border-ink/10 bg-white p-6">
          <p className="text-sm text-storm">Starting at</p>
          <p className="mt-2 text-2xl font-semibold text-ink">{project.price}</p>
          <div className="mt-6 space-y-3">
            <ButtonLink href="/checkout" className="w-full justify-center">
              Buy now
            </ButtonLink>
            <ButtonLink href="/developers" variant="outline" className="w-full justify-center">
              Call developer
            </ButtonLink>
          </div>
          <p className="mt-4 text-xs text-storm">
            Reviews are available only for licensed ownership projects.
          </p>
        </aside>
      </div>
    </div>
  );
}
