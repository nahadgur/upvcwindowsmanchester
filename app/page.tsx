import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { guidePages } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "uPVC Windows Manchester | Supply & Installation",
  description:
    "We supply and install made-to-measure uPVC windows across Manchester and Greater Manchester. Get a free quote for replacement windows and double glazing.",
};

const windowOptions = [
  { number: "01", slug: "casement-windows", title: "Casement windows", copy: "The practical all-rounder. Side- or top-opening designs with secure multi-point locking." },
  { number: "02", slug: "sash-windows", title: "Sash-style windows", copy: "Traditional proportions for period terraces, with modern glazing and low-maintenance frames." },
  { number: "03", slug: "bay-windows", title: "Bay windows", copy: "Keep the character and extra space of a Manchester bay while improving warmth and security." },
  { number: "04", slug: "tilt-and-turn-windows", title: "Tilt and turn", copy: "A flexible choice for ventilation, easy cleaning and rooms above ground level." },
];

const faqs = [
  ["How much do uPVC windows cost in Manchester?", "The price depends on window size, style, glazing, frame colour, access and the number being fitted. A quote based on your property is more useful than a broad online average."],
  ["Is the quote request free?", "Yes. It is free to submit and there is no obligation to accept a quote."],
  ["Who will contact me?", "Our team or an installation partner serving your Manchester postcode will contact you to discuss the property and arrange a survey."],
  ["Can I replace only one or two windows?", "Yes. Select 1–2 windows on the form. Availability will depend on installers working in your area."],
  ["Do you cover Greater Manchester?", "Yes. Requests are welcomed from Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan."],
  ["What should I compare between quotes?", "Check the window specification, glass, security, guarantees, fitting details, waste removal, timescale and whether the total includes VAT. Do not compare on headline price alone."],
];

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "uPVC window supply and installation in Manchester",
    areaServed: site.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
    serviceType: "uPVC window supply and installation",
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
            <h1>uPVC Windows<br /><em>Manchester</em></h1>
            <p className="hero-lead">We supply and install made-to-measure uPVC windows across Manchester and Greater Manchester. Get a free quote for replacement windows, double glazing, casement windows, sash-style windows and bay windows.</p>
            <ul className="hero-points">
              <li><span aria-hidden="true">✓</span> Made to measure</li>
              <li><span aria-hidden="true">✓</span> Supply and installation</li>
              <li><span aria-hidden="true">✓</span> Manchester coverage</li>
            </ul>
            <a className="button hero-button" href="#quote">Get a free quote <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-image">
            <Image src="/images/manchester-window-installers-hero.webp" alt="Two window fitters installing a white uPVC window in a Manchester terraced house" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="hero-form" id="quote"><QuoteForm /></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Service benefits">
        <div className="shell proof-grid">
          <div><strong>60 sec</strong><span>To request a quote</span></div>
          <div><strong>£0</strong><span>For your initial quote</span></div>
          <div><strong>10 boroughs</strong><span>Across Greater Manchester</span></div>
          <div><strong>No obligation</strong><span>Your decision stays yours</span></div>
        </div>
      </section>

      <section className="section home-service-intro">
        <div className="shell split-heading home-service-grid">
          <div><h2>uPVC windows supplied and installed in Manchester</h2></div>
          <div className="home-copy-block">
            <p>We supply made-to-measure uPVC windows and fit them in homes across Manchester and Greater Manchester. Our service covers the property survey, window specification, manufacture, removal of the old frames, installation, sealing and the finishing work agreed in your quote.</p>
            <p>You can ask us to replace one failed window, update a draughty bay or price a full house. We fit casement windows, sash-style windows, bay windows and tilt-and-turn windows with double or triple glazing, coloured frames, security hardware and ventilation selected for the room.</p>
          </div>
        </div>
      </section>

      <section className="section options" id="window-options">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <h2>uPVC window styles we install in Manchester</h2>
            </div>
            <p>Choose the opening style first, then select the glass, frame colour, locks and ventilation for each room.</p>
          </div>
          <div className="option-grid">
            {windowOptions.map((item) => (
              <Link className="option-card" href={`/windows/${item.slug}`} key={item.title}>
                <span>{item.number}</span>
                <div className={`mini-window mini-window-${item.number}`} aria-hidden="true"><i /><i /><i /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <strong className="card-link">Explore option <span aria-hidden="true">→</span></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-installation-detail">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><h2>Replacement windows and double glazing in Manchester</h2></div>
            <p>We replace old timber, aluminium and uPVC windows with made-to-measure uPVC frames. Each window is surveyed, specified and fitted for its opening.</p>
          </div>
          <div className="home-detail-grid">
            <article>
              <h3>Replacement uPVC windows</h3>
              <p>We can replace a single damaged window, several windows on one elevation or every window in the house. The survey checks the frame, sill, reveal, access and signs of water entry before we recommend a specification. Your quote should show which windows open, the frame colour, glass, handles, ventilation and any internal or external finishing work.</p>
            </article>
            <article>
              <h3>Double-glazed windows</h3>
              <p>New double glazing can reduce draughts, improve security and make the inside face of the glass feel warmer. We specify the full window, not the glass alone. That includes the uPVC frame, sealed glass unit, spacer, locks, hinges and background ventilation. Safety, obscure, acoustic and solar-control glass can be added where the room or location needs it.</p>
            </article>
            <article>
              <h3>Window survey and installation</h3>
              <p>We measure every opening before manufacture and agree the pane layout with you. On installation day, the old frame is removed, the opening is prepared and the new window is fixed, glazed, sealed and tested. We check operation and leave the agreed trims and making good complete. Waste removal, VAT, payment stages and guarantees should all appear in the written quote.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-content-links">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><h2>uPVC window guides for Manchester homeowners</h2></div>
            <p>Check costs, planning rules, energy ratings and common window problems before you request a quote.</p>
          </div>
          <div className="home-link-columns">
            <div>
              <div className="home-list-heading"><h3>Buying and planning</h3><Link href="/guides">View all guides</Link></div>
              <ul>{guidePages.slice(0, 3).map((guide) => <li key={guide.slug}><Link href={`/guides/${guide.slug}`}><span>{guide.title}</span><i aria-hidden="true">→</i></Link></li>)}</ul>
            </div>
            <div>
              <div className="home-list-heading"><h3>Quotes and window problems</h3></div>
              <ul>{guidePages.slice(3).map((guide) => <li key={guide.slug}><Link href={`/guides/${guide.slug}`}><span>{guide.title}</span><i aria-hidden="true">→</i></Link></li>)}</ul>
            </div>
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
            <h2>What our uPVC window installation includes</h2>
            <p>We measure each opening and prepare a written window schedule before manufacture. Your quote should state the frame style, glass, hardware, ventilation, fitting work, making good, waste removal, VAT and guarantee.</p>
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
            <h2>How uPVC window installation works</h2>
            <p>Tell us what you need, arrange a property survey and check the written specification before the windows go into manufacture.</p>
          </div>
          <ol className="process-grid">
            <li><span>1</span><h3>Tell us about the windows</h3><p>Share your Manchester postcode, window count and preferred timescale.</p></li>
            <li><span>2</span><h3>Book a window survey</h3><p>We inspect the openings, access, ventilation and finishing work.</p></li>
            <li><span>3</span><h3>Approve the written quote</h3><p>Check the window schedule, fitting details, VAT and total price.</p></li>
          </ol>
          <div className="process-action"><a className="button" href="#quote">Get a free quote <span aria-hidden="true">→</span></a><small>No payment. No obligation.</small></div>
        </div>
      </section>

      <section className="section area-section">
        <div className="shell area-grid">
          <div>
            <h2>Areas we cover in Manchester</h2>
            <p>We install uPVC windows across Manchester and Greater Manchester. Our coverage includes city-centre apartments, Salford terraces, Trafford semis, Stockport family homes and properties throughout Tameside, Oldham, Rochdale, Bury, Bolton and Wigan.</p>
            <p>Your postcode helps us check coverage and plan the survey. Tell us about upper floors, bay windows, parking restrictions or narrow access when you request a quote.</p>
          </div>
          <div className="area-card">
            <h3>Areas covered</h3>
            <ul>{site.areas.map((area) => <li key={area}><span aria-hidden="true">↗</span>{area}</li>)}</ul>
            <p>Not sure if your postcode is covered? Send the request and we will check.</p>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="questions">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>uPVC windows Manchester: frequently asked questions</h2>
            <p>Answers about prices, coverage, surveys and window specifications.</p>
            <a href="#quote">Get a free quote <span aria-hidden="true">→</span></a>
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
          <div><h2>Need new uPVC windows in Manchester?</h2><p>Tell us about the property and get a free quote.</p></div>
          <a className="button button-light" href="#quote">Get a free quote <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
