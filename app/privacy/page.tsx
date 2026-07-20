import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Manchester Window Quotes handles information submitted through its quote form.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="legal-page">
      <div className="shell legal-shell">
        <p><Link href="/">← Back to home</Link></p>
        <h1>Privacy notice</h1>
        <p className="legal-intro">This notice explains what happens to the information you provide when requesting a window quote.</p>

        <h2>Information we collect</h2>
        <p>The quote form asks for your name, phone number, postcode, approximate number of windows and preferred timescale. We also record the date, time and source of the request.</p>

        <h2>How we use it</h2>
        <p>We use the information to respond to your enquiry and connect the request with a window installer that serves your area. The installer may contact you by phone to discuss the work and arrange a quote.</p>

        <h2>Who receives it</h2>
        <p>Your quote details may be shared with a suitable local window installer. We do not publish the information or sell it for unrelated marketing.</p>

        <h2>Legal basis and retention</h2>
        <p>We process quote requests with your consent. Enquiry records should be kept only as long as needed to manage the request, resolve questions and meet legal obligations.</p>

        <h2>Your choices</h2>
        <p>You can ask for access to your information, request a correction or withdrawal of consent, and ask for deletion where the law allows it.</p>

        <div className="legal-warning">
          <strong>Launch requirement</strong>
          <p>Add the legal operator name, postal address, privacy contact email, retention period and any named lead recipients before publishing this website.</p>
        </div>
      </div>
    </main>
  );
}
