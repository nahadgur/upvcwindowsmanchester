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
              <Link href="/windows">Windows</Link>
              <Link href="/areas">Areas</Link>
              <Link href="/guides">Guides</Link>
              <Link href="/how-it-works">How it works</Link>
              <Link className="button button-small" href="/contact">Get quotes</Link>
            </nav>
            <details className="mobile-menu">
              <summary>Menu <span aria-hidden="true">+</span></summary>
              <div>
                <Link href="/windows">Window options</Link>
                <Link href="/areas">Areas covered</Link>
                <Link href="/guides">Buying guides</Link>
                <Link href="/how-it-works">How it works</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Request quotes</Link>
              </div>
            </details>
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
              <strong>Explore</strong>
              <Link href="/windows">Window options</Link>
              <Link href="/areas">Areas covered</Link>
              <Link href="/guides">Buying guides</Link>
              <Link href="/how-it-works">How it works</Link>
            </div>
            <div>
              <strong>Website</strong>
              <Link href="/about">About</Link>
              <Link href="/contact">Request quotes</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
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
        <Link className="mobile-cta" href="/contact">Get free quotes <span aria-hidden="true">→</span></Link>
      </body>
    </html>
  );
}
