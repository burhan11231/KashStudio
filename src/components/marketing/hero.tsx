'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="panel">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold tracking-tight md:text-6xl"
      >
        Launch your Kashmir business page in minutes.
      </motion.h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">
        Template-first, schema-driven, admin-governed publishing with optional AI assistant and custom domain support.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/signup" className="rounded-xl bg-emerald-400 px-4 py-2 font-semibold text-slate-950">
          Start free
        </Link>
        <Link href="/templates" className="rounded-xl border border-slate-700 px-4 py-2 text-slate-200">
          Browse templates
        </Link>
      </div>
    </section>
  );
}
