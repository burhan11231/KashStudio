import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type CardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

export function Card({ title, description, icon, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/80 bg-white/60 p-6 shadow-sm backdrop-blur",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm text-storm">{description}</p>
        </div>
      </div>
    </div>
  );
}
