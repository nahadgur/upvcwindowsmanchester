import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "uPVC Windows Manchester | Compare Local Quotes",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Compare uPVC window quotes in Manchester",
    description: site.description,
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102a2d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <header className="site-header">
          <div className="shell header-inner">
            <Link className="brand" href="/" aria-label={`${site.name} home`}>
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
              <span><b>Manchester</b><small>Window Quotes</small></span>
            </Link>
            <nav aria-label="Primary navigation">
              <a href="/#window-options">Window options</a>
              <a href="/#how-it-works">How it works</a>
              <a href="/#questions">Questions</a>
              <a className="button button-small" href="/#quote">Get quotes</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <Link className="brand brand-footer" href="/">
                <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
                <span><b>Manchester</b><small>Window Quotes</small></span>
              </Link>
              <p>A quote-request service for homeowners across Greater Manchester.</p>
            </div>
            <div>
              <strong>Useful links</strong>
              <Link href="/#how-it-works">How it works</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
            <div>
              <strong>Good to know</strong>
              <p>We are a lead-generation website, not a window installation company. Your request may be passed to a local installer that can quote for the work.</p>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <span>Greater Manchester, UK</span>
          </div>
        </footer>
        <a className="mobile-cta" href="/#quote">Get free quotes <span aria-hidden="true">→</span></a>
      </body>
    </html>
  );
}
