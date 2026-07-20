import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";

export const metadata: Metadata = {
  title: "How uPVC window installation works",
  description: "From your first enquiry to survey, written quote and uPVC window installation in Manchester.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return <main id="main-content" className="simple-page"><div className="shell simple-shell">
    <Breadcrumbs items={[{ label: "How it works" }]} />
    <h1>From survey to fitted windows</h1>
    <p className="simple-lead">Tell us about the property. We check coverage, arrange a survey and provide a written quote for the windows and fitting work.</p>
    <ol className="numbered-process">
      <li><span>01</span><div><h2>Tell us what you need</h2><p>Share your postcode, approximate window count and preferred timescale. If you know the styles or rooms, include those when we contact you.</p></div></li>
      <li><span>02</span><div><h2>We arrange a survey</h2><p>A window specialist measures the openings, checks access and discusses frame style, colour, glazing, ventilation and hardware.</p></div></li>
      <li><span>03</span><div><h2>You receive a written quote</h2><p>The quote should show the full window specification, fitting scope, VAT, payment stages, timescale, certification and guarantees.</p></div></li>
      <li><span>04</span><div><h2>Your windows are installed</h2><p>Your installer removes the old units, fits and seals the new frames, makes good the agreed areas and removes waste listed in the contract.</p></div></li>
    </ol>
    <section className="plain-section"><h2>Before installation starts</h2><p>Confirm the company named on the quotation, the exact product schedule and who is responsible for making good. Keep the signed quote, guarantee and completion documents with your property records.</p><p>Do not pay outside the agreed payment schedule. Ask questions before accepting any change to the product or fitting scope.</p></section>
    <QuoteBand title="Tell us about your window project" />
    <p className="simple-back"><Link href="/about">Read about our service <span aria-hidden="true">→</span></Link></p>
  </div></main>;
}
