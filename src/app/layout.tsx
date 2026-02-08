import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "KashStudio | Digital Application Marketplace",
  description:
    "KashStudio is a digital application marketplace for licensed and full copyright acquisitions.",
  metadataBase: new URL("https://kashstudio.example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <SiteHeader />
        <main className="px-6 pb-16 pt-8 lg:px-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
