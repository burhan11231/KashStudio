export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-storm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-ink">KashStudio</p>
          <p className="mt-2 max-w-md">
            Audit-ready digital commerce for apps, SaaS, and white-label marketplaces. Built
            for India-first compliance.
          </p>
        </div>
        <div className="flex gap-6">
          <a className="hover:text-ink" href="/legal/terms.pdf">
            Terms
          </a>
          <a className="hover:text-ink" href="/legal/privacy.pdf">
            Privacy
          </a>
          <a className="hover:text-ink" href="mailto:hello@kashstudio.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
