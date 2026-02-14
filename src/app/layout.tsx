import './globals.css';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'Kashpages GoLive',
  description: 'Schema-driven business presence platform for Kashmir.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <SiteHeader />
        <main className="min-h-[calc(100vh-9rem)] bg-slate-950 text-slate-100">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
