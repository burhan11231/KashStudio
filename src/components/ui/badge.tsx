import { cn } from "@/utils/cn";

type BadgeProps = {
  label: string;
  tone?: "info" | "highlight" | "success";
};

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  info: "bg-white text-ink",
  highlight: "bg-ember/10 text-ember",
  success: "bg-aurora/10 text-ink"
};

export function Badge({ label, tone = "info" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        toneStyles[tone]
      )}
    >
      {label}
    </span>
  );
}
