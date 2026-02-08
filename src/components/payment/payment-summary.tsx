import { formatCurrency } from "@/utils/format";

type PaymentSummaryProps = {
  subtotal: number;
  platformFeePercent: number;
};

export function PaymentSummary({ subtotal, platformFeePercent }: PaymentSummaryProps) {
  const fee = Math.round((subtotal * platformFeePercent) / 100);
  const total = subtotal + fee;

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6">
      <p className="text-sm font-semibold text-ink">Payment summary</p>
      <div className="mt-4 space-y-2 text-sm text-storm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform fee</span>
          <span>{formatCurrency(fee)}</span>
        </div>
        <div className="flex justify-between font-semibold text-ink">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}
