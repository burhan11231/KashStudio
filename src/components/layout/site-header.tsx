import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Developers", href: "/developers" },
  { label: "Search", href: "/search" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-clay/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-ink">
          KashStudio
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-storm md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/login" variant="ghost">
            Login
          </ButtonLink>
          <ButtonLink href="/register">Create account</ButtonLink>
        </div>
      </div>
    </header>
  );
}
