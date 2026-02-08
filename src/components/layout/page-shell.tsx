import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type PageShellProps = {
  title: string;
  description: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function PageShell({ title, description, eyebrow, children }: PageShellProps) {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div>
        {eyebrow ? <Badge label={eyebrow} /> : null}
        <h1 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">{title}</h1>
        <p className="mt-3 text-base text-storm">{description}</p>
      </div>
      {children}
    </section>
  );
}
