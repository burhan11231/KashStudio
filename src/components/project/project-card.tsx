import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  developer: string;
  ownership: string;
  href: string;
};

export function ProjectCard({ title, developer, ownership, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Badge label={ownership} tone="highlight" />
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-storm">by {developer}</p>
    </Link>
  );
}
