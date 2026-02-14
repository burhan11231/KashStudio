import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-emerald-300">
          Kashpages GoLive
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/templates" className="hover:text-white">Templates</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/login" className="hover:text-white">Login</Link>
          <Link href="/signup" className="hover:text-white">Signup</Link>
        </nav>
      </div>
    </header>
  );
}
