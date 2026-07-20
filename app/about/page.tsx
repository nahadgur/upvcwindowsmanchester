import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";

export const metadata: Metadata = {
  title: "About uPVC Windows Manchester",
  description: "uPVC window supply, surveys and installation across Manchester and Greater Manchester.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main id="main-content" className="simple-page"><div className="shell simple-shell">
    <Breadcrumbs items={[{ label: "About" }]} />
    <h1>uPVC window supply and installation in Manchester</h1>
    <p className="simple-lead">We help homeowners replace old windows with made-to-measure uPVC frames and modern double glazing across Manchester and Greater Manchester.</p>
    <section className="plain-section"><h2>Our window service</h2><p>Tell us what needs replacing and where the property is. We check coverage, discuss the window styles you need and arrange a property survey. Your written quote should list the frames, glass, hardware, fitting work, waste removal and total price.</p><p>We cover one-window replacements, full-house projects, bay windows, casement windows, sash-style windows, tilt-and-turn windows and double glazing upgrades.</p></section>
    <section className="plain-section"><h2>Who carries out the work</h2><p>We may arrange your survey and installation through a window specialist serving your postcode. The company named on the written quotation is responsible for the survey, contract, installation, certification and guarantee.</p><p>Check the company name, insurance, certification route, payment terms and written guarantee before work starts.</p></section>
    <QuoteBand />
    <p className="simple-back"><Link href="/how-it-works">See how installation works <span aria-hidden="true">→</span></Link></p>
  </div></main>;
}
