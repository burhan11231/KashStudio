const livePages = [
  { name: 'Srinagar Bakery', slug: '/srinagar-bakery/pages/home' },
  { name: 'Gulmarg Guides', slug: '/gulmarg-guides/pages/adventure' },
  { name: 'Valley Legal Associates', slug: '/valley-legal/pages/firm' },
];

export function LiveDiscovery() {
  return (
    <section className="panel mt-6">
      <h2 className="text-2xl font-semibold">Live businesses</h2>
      <p className="mb-4 text-sm text-slate-400">Discover published pages from across Kashmir.</p>
      <div className="grid gap-3 md:grid-cols-3">
        {livePages.map((page) => (
          <article key={page.slug} className="rounded-xl border border-slate-800 p-4">
            <h3 className="font-medium">{page.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{page.slug}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
