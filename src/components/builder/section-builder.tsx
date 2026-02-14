'use client';

import { useMemo, useState } from 'react';

const sectionLibrary = ['hero', 'features', 'testimonials', 'pricing', 'faq', 'gallery', 'contact', 'footer', 'stats', 'team', 'process', 'cta ribbons'];

export function SectionBuilder() {
  const [query, setQuery] = useState('');
  const sections = useMemo(() => sectionLibrary.filter((item) => item.includes(query.toLowerCase())), [query]);

  return (
    <section className='panel mt-5'>
      <div className='mb-3 flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Section library</h2>
        <input
          className='rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm'
          placeholder='Search section'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className='grid gap-2 md:grid-cols-3'>
        {sections.map((section) => (
          <div key={section} className='rounded-xl border border-slate-800 p-3 text-sm capitalize'>
            {section}
          </div>
        ))}
      </div>
    </section>
  );
}
