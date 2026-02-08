import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ownershipModels = [
  {
    title: "Licensed",
    description:
      "Multiple buyers, reviews enabled, and perpetual access for ongoing monetization."
  },
  {
    title: "Full Copyright",
    description:
      "One-time exclusive sale with full ownership transfer. Listings auto-hide after purchase."
  }
];

const platformHighlights = [
  {
    title: "Secure checkout",
    description:
      "Razorpay escrow with automated fee splitting to developer bank or UPI accounts.",
    icon: "₹"
  },
  {
    title: "Verified onboarding",
    description:
      "Role-locked onboarding with identity verification and portfolio checks for developers.",
    icon: "✓"
  },
  {
    title: "Audit-ready",
    description:
      "Server-side payment validation, tamper-safe errors, and Firestore RBAC rules.",
    icon: "🔒"
  }
];

const lifecycle = [
  "Pending review",
  "Admin approval",
  "Live on marketplace",
  "Sale notification",
  "Auto-hide for full copyright"
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge label="Digital Application Marketplace" tone="highlight" />
          <h1 className="mt-6 text-4xl font-semibold text-ink md:text-5xl">
            KashStudio powers trusted app commerce for web, Android, and iOS.
          </h1>
          <p className="mt-4 text-lg text-storm">
            Create, sell, and acquire production-ready digital products with verified
            ownership transfers, instant delivery, and compliance-ready records.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/projects">Explore projects</ButtonLink>
            <ButtonLink href="/register" variant="outline">
              Join as developer
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-[32px] border border-ink/10 bg-white p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-ink">Ownership models enforced</h2>
          <p className="mt-3 text-sm text-storm">
            Clear licensing clarity with automated behavior at the system level.
          </p>
          <div className="mt-6 space-y-4">
            {ownershipModels.map((model) => (
              <div key={model.title} className="rounded-2xl border border-ink/10 p-4">
                <p className="text-sm font-semibold text-ink">{model.title}</p>
                <p className="mt-2 text-sm text-storm">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {platformHighlights.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            icon={<span className="text-lg">{item.icon}</span>}
          />
        ))}
      </section>

      <section className="rounded-[32px] bg-ink p-10 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Developer onboarding
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              From identity verification to payout-ready listings.
            </h2>
          </div>
          <ButtonLink href="/developer/dashboard" variant="outline" className="border-white text-white">
            View dashboard preview
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm font-semibold">Required documents</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Identity type & verification</li>
              <li>Portfolio or demo project submission</li>
              <li>Bank or UPI verification for payouts</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm font-semibold">Lifecycle</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {lifecycle.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[28px] border border-ink/10 bg-white p-8">
          <p className="text-sm font-semibold text-ink">Admin control tower</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Moderation, compliance, and platform controls in one place.
          </h2>
          <p className="mt-3 text-sm text-storm">
            Approve or suspend developers, moderate reviews, and manage legal templates with
            audit-friendly tracking.
          </p>
          <ButtonLink href="/admin/dashboard" variant="outline" className="mt-6">
            Open admin preview
          </ButtonLink>
        </div>
        <div className="space-y-4">
          {[
            "Role-based access policies for every collection",
            "Server-side payment verification and webhook logging",
            "Maintenance mode and platform fee controls",
            "Secure ZIP downloads via Cloud Functions"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-sm text-storm">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
