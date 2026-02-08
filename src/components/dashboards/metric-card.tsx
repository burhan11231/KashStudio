import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type MetricCardProps = {
  label: string;
  value: string;
  icon?: ReactNode;
  className?: string;
};

export function MetricCard({ label, value, icon, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-ink/10 bg-white p-5 shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-storm">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-ink">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-white">
          {icon}
        </div>
      </div>
    </div>
  );
}
