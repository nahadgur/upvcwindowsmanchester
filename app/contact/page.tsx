import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/content-page-parts";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Get a free uPVC window quote",
  description: "Tell us about your Manchester property and get a free quote for uPVC windows and installation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main id="main-content" className="contact-page"><div className="shell">
    <Breadcrumbs items={[{ label: "Get a quote" }]} />
    <div className="contact-grid"><div>
      <h1>Get a free uPVC window quote</h1>
      <p className="simple-lead">Tell us how many windows you need and where the property is. We will contact you to discuss the styles and arrange a survey.</p>
      <div className="contact-expect"><h2>Before you submit</h2><ul><li>Use the postcode where the work is needed.</li><li>Give a phone number where we can reach you.</li><li>Choose the closest window count and timescale.</li><li>Do not include payment or identity-document details.</li></ul></div>
      <p className="contact-disclosure">The company named on your written quotation will carry out the survey and installation.</p>
    </div><QuoteForm /></div>
  </div></main>;
}
