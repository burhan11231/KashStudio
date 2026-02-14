import { PLAN_PRICING } from '@/lib/plans/features';

export default function PricingPage() {
  return (
    <div className="container-shell grid gap-4 md:grid-cols-3">
      {Object.entries(PLAN_PRICING).map(([plan, price]) => (
        <article key={plan} className="panel">
          <h2 className="text-2xl font-bold capitalize">{plan}</h2>
          <p className="mt-3 text-emerald-300">{price}</p>
        </article>
      ))}
    </div>
  );
}
