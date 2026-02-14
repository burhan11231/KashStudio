import { SectionBuilder } from '@/components/builder/section-builder';

export default function BuilderPage({ params }: { params: { pageId: string } }) {
  return (
    <div className="container-shell">
      <section className="panel">
        <h1 className="text-3xl font-bold">Builder · {params.pageId}</h1>
        <p className="mt-2 text-slate-400">Strict whitelist rendering with drag reorder and debounced autosave.</p>
      </section>
      <SectionBuilder />
    </div>
  );
}
