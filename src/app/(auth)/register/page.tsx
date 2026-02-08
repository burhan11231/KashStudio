import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <PageShell
      eyebrow="Auth"
      title="Create your KashStudio account"
      description="Select your role once. Roles are locked after onboarding."
    >
      <form className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Full name
            <input
              type="text"
              placeholder="Asha Patel"
              className="rounded-2xl border border-ink/10 px-4 py-2"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input
              type="email"
              placeholder="you@studio.com"
              className="rounded-2xl border border-ink/10 px-4 py-2"
            />
          </label>
        </div>
        <label className="grid gap-2 text-sm">
          Password
          <input
            type="password"
            placeholder="Minimum 8 characters"
            className="rounded-2xl border border-ink/10 px-4 py-2"
          />
        </label>
        <div className="grid gap-3 text-sm">
          <p className="font-semibold text-ink">Select role (one-time)</p>
          <div className="grid gap-3 md:grid-cols-2">
            {["Client", "Developer"].map((role) => (
              <label
                key={role}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 px-4 py-3"
              >
                <input type="radio" name="role" />
                <span>{role}</span>
              </label>
            ))}
          </div>
        </div>
        <Button type="submit">Create account</Button>
      </form>
    </PageShell>
  );
}
