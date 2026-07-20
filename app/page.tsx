import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { WindowVisual } from "@/components/window-visual";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "uPVC Windows Manchester | Compare Local Quotes",
  description:
    "Planning new uPVC windows in Manchester? Tell us what you need and request no-obligation quotes from a local window company.",
};

const windowOptions = [
  { number: "01", title: "Casement windows", copy: "The practical all-rounder. Side- or top-opening designs with secure multi-point locking." },
  { number: "02", title: "Sash-style windows", copy: "Traditional proportions for period terraces, with modern glazing and low-maintenance frames." },
  { number: "03", title: "Bay windows", copy: "Keep the character and extra space of a Manchester bay while improving warmth and security." },
  { number: "04", title: "Tilt and turn", copy: "A flexible choice for ventilation, easy cleaning and rooms above ground level." },
];

const faqs = [
  ["How much do uPVC windows cost in Manchester?", "The price depends on window size, style, glazing, frame colour, access and the number being fitted. A quote based on your property is more useful than a broad online average."],
  ["Is the quote request free?", "Yes. It is free to submit and there is no obligation to accept a quote."],
  ["Who will contact me?", "Your details may be shared with a suitable window installer serving your Manchester postcode. We are a quote-request website, not the company that carries out the installation."],
  ["Can I replace only one or two windows?", "Yes. Select 1–2 windows on the form. Availability will depend on installers working in your area."],
  ["Do you cover Greater Manchester?", "Yes. Requests are welcomed from Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan."],
  ["What should I compare between quotes?", "Check the window specification, glass, security, guarantees, fitting details, waste removal, timescale and whether the total includes VAT. Do not compare on headline price alone."],
];

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "uPVC window quote request service",
    areaServed: site.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
    serviceType: "uPVC window installation quote matching",
    provider: { "@type": "Organization", name: site.name, url: site.url },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="availability"><span /> Quote requests open across Greater Manchester</p>
            <h1>New uPVC windows.<br /><em>Clear local quotes.</em></h1>
            <p className="hero-lead">Tell us about your home and request a no-obligation quote from a window company serving your Manchester postcode.</p>
            <ul className="hero-points">
              <li><span aria-hidden="true">✓</span> Free quote request</li>
              <li><span aria-hidden="true">✓</span> No pressure to proceed</li>
              <li><span aria-hidden="true">✓</span> Local coverage</li>
            </ul>
            <a className="button hero-button" href="#quote">Request free quotes <span aria-hidden="true">→</span></a>
            <p className="disclosure">A lead-generation service. We connect quote requests with window installers and do not fit windows ourselves.</p>
          </div>
          <WindowVisual />
          <div className="hero-form" id="quote"><QuoteForm /></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Service benefits">
        <div className="shell proof-grid">
          <div><strong>60 sec</strong><span>Typical request time</span></div>
          <div><strong>£0</strong><span>Cost to request a quote</span></div>
          <div><strong>10 boroughs</strong><span>Across Greater Manchester</span></div>
          <div><strong>No obligation</strong><span>Your decision stays yours</span></div>
        </div>
      </section>

      <section className="section options" id="window-options">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <h2>Window styles that suit the property</h2>
            </div>
            <p>From Victorian terraces to newer estates, the right frame style should work with the home, not fight it.</p>
          </div>
          <div className="option-grid">
            {windowOptions.map((item) => (
              <article className="option-card" key={item.title}>
                <span>{item.number}</span>
                <div className={`mini-window mini-window-${item.number}`} aria-hidden="true"><i /><i /><i /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section decision-section">
        <div className="shell decision-grid">
          <div className="decision-visual" aria-hidden="true">
            <span className="measure measure-one">A</span>
            <span className="measure measure-two">B</span>
            <div className="frame-diagram"><i /><i /><i /><i /><i /><i /></div>
            <p>Measure twice.<br />Choose once.</p>
          </div>
          <div className="decision-copy">
            <h2>A better quote starts with better questions</h2>
            <p>Price matters, but it is only one part of the job. Give enough detail for an installer to understand the property and ask them to explain exactly what is included.</p>
            <ul className="check-list">
              <li><span>01</span><div><strong>Frame and glass specification</strong><p>Ask about energy rating, glass type, locks and ventilation.</p></div></li>
              <li><span>02</span><div><strong>Fitting and finish</strong><p>Confirm making good, trims, sealant and waste removal.</p></div></li>
              <li><span>03</span><div><strong>Total price and cover</strong><p>Check VAT, payment stages, timescale and guarantees in writing.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section process" id="how-it-works">
        <div className="shell">
          <div className="section-heading centred">
            <h2>From postcode to quote</h2>
            <p>A short request gives a local installer the basics they need to start a useful conversation.</p>
          </div>
          <ol className="process-grid">
            <li><span>1</span><h3>Describe the job</h3><p>Share your postcode, window count and preferred timescale.</p></li>
            <li><span>2</span><h3>Speak to an installer</h3><p>A company serving your area can contact you to discuss the property.</p></li>
            <li><span>3</span><h3>Review the quote</h3><p>Check the specification, fitting details and total before deciding.</p></li>
          </ol>
          <div className="process-action"><a className="button" href="#quote">Start my quote request <span aria-hidden="true">→</span></a><small>No payment. No obligation.</small></div>
        </div>
      </section>

      <section className="section area-section">
        <div className="shell area-grid">
          <div>
            <h2>Manchester knowledge matters</h2>
            <p>Window requirements change from one property to the next. A bay-fronted terrace in Levenshulme is not the same job as a modern flat in Salford Quays or a semi in Didsbury.</p>
            <p>Your postcode helps route the request to a company that covers the area and can discuss the right specification for the building.</p>
          </div>
          <div className="area-card">
            <strong>Areas covered</strong>
            <ul>{site.areas.map((area) => <li key={area}><span aria-hidden="true">↗</span>{area}</li>)}</ul>
            <p>Not sure if your postcode is covered? Send the request and we will check.</p>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="questions">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Sensible questions before you request a quote</h2>
            <p>Clear answers now make it easier to compare options later.</p>
            <a href="#quote">Request free quotes <span aria-hidden="true">→</span></a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div><h2>Ready to price the job properly?</h2><p>Share the basics now. Review the details before you decide.</p></div>
          <a className="button button-light" href="#quote">Request my free quotes <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
