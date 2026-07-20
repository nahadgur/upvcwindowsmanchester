import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";

export const metadata: Metadata = { title: "About Manchester Window Quotes", description: "Learn what Manchester Window Quotes does, how it earns money and what homeowners should check.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <main id="main-content" className="simple-page"><div className="shell simple-shell"><Breadcrumbs items={[{ label: "About" }]} /><p className="content-label">About the website</p><h1>A Manchester window quote-matching service</h1><p className="simple-lead">The website helps Greater Manchester homeowners describe a window project and connect with a company that may be able to quote for it.</p>
    <section className="plain-section"><h2>How the service earns money</h2><p>A participating installer may pay a marketing or lead fee when it receives an enquiry. You do not pay Manchester Window Quotes to submit the form. The installer sets its own prices and contract terms.</p><p>Commercial arrangements do not replace your checks. Confirm the installer’s identity, insurance, certification route, references and written guarantee before accepting work.</p></section>
    <section className="plain-section"><h2>Why the site names its role</h2><p>Homeowners should know who holds their details and who will carry out the work. The site describes itself as a lead-generation service on the quote form, footer, privacy notice and this page.</p><p>We do not publish invented testimonials, membership badges or installation counts. Verified evidence can be added later with its source and date.</p></section>
    <QuoteBand /><p className="simple-back"><Link href="/how-it-works">See the full process <span aria-hidden="true">→</span></Link></p></div></main>;
}
