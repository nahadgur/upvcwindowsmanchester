import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/content-page-parts";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = { title: "Request window quotes", description: "Tell us about your Manchester window project and request a no-obligation local quote.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main id="main-content" className="contact-page"><div className="shell"><Breadcrumbs items={[{ label: "Request quotes" }]} /><div className="contact-grid"><div><p className="content-label">Quote request</p><h1>Tell us about the windows</h1><p className="simple-lead">The form asks for the details needed to check coverage. A suitable local installer may contact you to discuss the property and arrange a survey.</p><div className="contact-expect"><h2>Before you submit</h2><ul><li>Use the postcode where the work is needed.</li><li>Give a phone number where an installer can reach you.</li><li>Choose the closest window count and timescale.</li><li>Do not include payment or identity-document details.</li></ul></div><p className="contact-disclosure">Manchester Window Quotes does not fit windows. We may receive a marketing fee from an installer that receives the enquiry.</p></div><QuoteForm /></div></div></main>;
}
