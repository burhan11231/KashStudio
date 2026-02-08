import { Badge } from "@/components/ui/badge";

type ReviewCardProps = {
  reviewer: string;
  rating: number;
  comment: string;
};

export function ReviewCard({ reviewer, rating, comment }: ReviewCardProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">{reviewer}</p>
        <Badge label={`${rating}★`} tone="success" />
      </div>
      <p className="mt-3 text-sm text-storm">{comment}</p>
    </div>
  );
}
