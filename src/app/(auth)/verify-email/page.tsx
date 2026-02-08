import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <PageShell
      eyebrow="Email verification"
      title="Verify your email to unlock access"
      description="We sent a verification link. Confirm your email to proceed to your dashboard."
    >
      <div className="rounded-3xl border border-ink/10 bg-white p-6">
        <p className="text-sm text-storm">
          Email verification is mandatory before login. If you do not see the email, check
          spam or request a new link.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button>Resend email</Button>
          <Button variant="outline">Back to login</Button>
        </div>
      </div>
    </PageShell>
  );
}
