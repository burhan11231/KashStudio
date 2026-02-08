import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="Auth"
      title="Welcome back"
      description="Sign in to access dashboards, purchases, and secure downloads."
    >
      <form className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-6">
        <label className="grid gap-2 text-sm">
          Email
          <input
            type="email"
            placeholder="you@studio.com"
            className="rounded-2xl border border-ink/10 px-4 py-2"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Password
          <input
            type="password"
            placeholder="••••••••"
            className="rounded-2xl border border-ink/10 px-4 py-2"
          />
        </label>
        <Button type="submit">Login</Button>
        <p className="text-xs text-storm">
          Email verification is mandatory. Unverified accounts cannot sign in.
        </p>
      </form>
    </PageShell>
  );
}
