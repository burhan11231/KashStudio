import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container-shell">
      <section className="panel">
        <h1 className="text-3xl font-bold">User dashboard</h1>
        <div className="mt-4 flex gap-3">
          <Link href="/dashboard/pages" className="rounded-lg border border-slate-700 px-3 py-2">
            Pages
          </Link>
          <Link href="/dashboard/templates" className="rounded-lg border border-slate-700 px-3 py-2">
            Templates
          </Link>
          <Link href="/dashboard/settings" className="rounded-lg border border-slate-700 px-3 py-2">
            Settings
          </Link>
        </div>
      </section>
    </div>
  );
}
