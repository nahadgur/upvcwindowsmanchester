import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Website terms", description: "Terms for using the uPVC Windows Manchester website and quote form.", robots: { index: false, follow: true } };

export default function TermsPage() {
  return <main id="main-content" className="legal-page"><div className="shell legal-shell">
    <p><Link href="/">← Back to home</Link></p>
    <h1>Website terms</h1>
    <p className="legal-intro">These terms cover use of the website and its quote form.</p>
    <h2>Window enquiries and quotations</h2><p>We use your enquiry to check coverage and arrange contact from our team or an installation partner serving your postcode. Submission does not guarantee that every project can be accepted.</p>
    <h2>Surveys and installation contracts</h2><p>The company named on the written quotation is responsible for the survey, contract, installation, certification and guarantees. Check the company, specification and payment terms before agreeing to work.</p>
    <h2>Website information</h2><p>Guides provide general information for properties in England. Planning rules, Building Regulations, product standards and local controls can change. Check current official guidance for the property and project.</p>
    <h2>Acceptable use</h2><p>Submit accurate contact and project information. Do not use the form for spam, unlawful content, false enquiries or attempts to interfere with the service.</p>
    <h2>Operator details</h2><div className="legal-warning"><strong>Launch requirement</strong><p>Add the legal operator name, registered or trading address, company number where applicable, and contact details before publishing.</p></div>
  </div></main>;
}
