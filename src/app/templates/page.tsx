import { TEMPLATE_CATALOG } from '@/lib/templates/catalog';

export default function TemplatesPage() {
  return (
    <div className="container-shell">
      <section className="panel">
        <h1 className="text-3xl font-bold">Template library (50)</h1>
        <p className="mt-2 text-slate-400">Plan-gated, publish-ready sections and content blocks.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {TEMPLATE_CATALOG.map((template) => (
            <div key={template.id} className="rounded-xl border border-slate-800 p-3 text-sm">
              <div className="font-semibold">{template.name}</div>
              <div className="text-slate-400">{template.category} · {template.plan}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
