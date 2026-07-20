import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompactQuoteForm, ContentHero, DecisionList, PageFaqs, QuoteBand, RelatedPages } from "@/components/content-page-parts";
import { areaPages, getArea, servicePages } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() { return areaPages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getArea((await params).slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/areas/${page.slug}` } };
}

export default async function AreaPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const page = getArea((await params).slug);
  if (!page) notFound();
  const relatedAreas = areaPages.filter((item) => item.slug !== page.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Service", name: page.title, description: page.description, areaServed: { "@type": "AdministrativeArea", name: page.name }, provider: { "@type": "Organization", name: site.name, url: site.url } };
  return (
    <main id="main-content">
      <ContentHero label="Areas" title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt}>
        <a className="button" href="#page-quote">Get a free quote in {page.name} <span aria-hidden="true">→</span></a>
      </ContentHero>
      <div className="shell content-layout">
        <article className="longform">
          <section><h2>uPVC window installation in {page.name}</h2><p>We supply and install made-to-measure uPVC windows in {page.name}. You can request a quote for casement windows, sash-style windows, bay windows, tilt-and-turn windows, replacement frames and double glazing.</p><p>{page.localDetail}</p><p>Send the property postcode, an approximate window count and notes about bays, upper floors or restricted access. We use those details to check coverage and arrange a survey.</p></section>
          <div className="local-facts">
            <div><h2>Areas we cover near {page.name}</h2><ul>{page.neighbourhoods.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h2>Homes we fit windows in around {page.name}</h2><ul>{page.propertyTypes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <DecisionList title={`What to include in your ${page.name} window quote`} items={page.priorities} />
          <section><h2>Planning checks for replacement windows in {page.name}</h2><p>{page.planningNote}</p><p>Building Regulations remain separate from planning permission. Confirm whether the installer will self-certify through a competent person scheme or whether the work needs a building-control application.</p></section>
          <section><h2>What your {page.name} window quote should include</h2><p>Your quote should list each opening, frame style, glass, ventilation, hardware, external finish, internal making good and waste removal. Ask for the total with VAT and any exclusions shown in writing.</p><p>Check the frame drawings before manufacture, especially on front bays and paired windows. A transom moved by a few centimetres can change the appearance across an elevation.</p></section>
          <section><h2>Our uPVC window service in {page.name}</h2><p>We arrange the survey, written quotation and installation for homes across {page.name} and nearby areas. The company named on your quote remains responsible for the measurements, fitting, certification and guarantee.</p><p>Installation normally includes removing the agreed old frames, fitting and sealing the new windows, completing the listed making good and taking away waste included in the contract.</p></section>
          <PageFaqs faqs={page.faqs} title={`${page.name} uPVC windows: frequently asked questions`} />
        </article>
        <div id="page-quote"><CompactQuoteForm /></div>
      </div>
      <div className="shell content-bottom">
        <RelatedPages title={`uPVC window styles available in ${page.name}`} links={servicePages.slice(0, 3).map((item) => ({ title: item.name, href: `/windows/${item.slug}`, description: item.description }))} />
        <RelatedPages title={`Nearby areas we cover from ${page.name}`} links={relatedAreas.map((item) => ({ title: item.name, href: `/areas/${item.slug}`, description: item.description }))} />
        <QuoteBand title={`Get a uPVC window quote in ${page.name}`} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
