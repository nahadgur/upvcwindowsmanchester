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
        <a className="button" href="#page-quote">Check installer coverage <span aria-hidden="true">→</span></a>
      </ContentHero>
      <div className="shell content-layout">
        <article className="longform">
          <section><h2>Homes and window projects around {page.name}</h2><p>{page.localDetail}</p><p>A useful quote starts with photographs, an approximate count and notes about bays, upper floors or restricted access. The installer can use those details to decide whether the project fits their coverage before arranging a survey.</p></section>
          <div className="local-facts">
            <div><h2>Places covered</h2><ul>{page.neighbourhoods.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h2>Common property types</h2><ul>{page.propertyTypes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <DecisionList title={`Points to cover in a ${page.name} quote`} items={page.priorities} />
          <section><h2>Planning and property checks</h2><p>{page.planningNote}</p><p>Building Regulations remain separate from planning permission. Confirm whether the installer will self-certify through a competent person scheme or whether the work needs a building-control application.</p></section>
          <section><h2>Compare the same scope</h2><p>Give each company the same list of openings, glass requirements and finishing work. Ask for a VAT-inclusive total and written exclusions.</p><p>Check frame drawings before manufacture, especially on front bays and paired windows. A transom moved by a few centimetres can change the appearance across an elevation.</p></section>
          <PageFaqs faqs={page.faqs} />
        </article>
        <div id="page-quote"><CompactQuoteForm /></div>
      </div>
      <div className="shell content-bottom">
        <RelatedPages title="Popular window options" links={servicePages.slice(0, 3).map((item) => ({ title: item.name, href: `/windows/${item.slug}`, description: item.description }))} />
        <RelatedPages title="Nearby coverage" links={relatedAreas.map((item) => ({ title: item.name, href: `/areas/${item.slug}`, description: item.description }))} />
        <QuoteBand title={`Get a uPVC window quote in ${page.name}`} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
