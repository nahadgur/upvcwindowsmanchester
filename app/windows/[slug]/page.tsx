import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompactQuoteForm, ContentHero, DecisionList, PageFaqs, QuoteBand, RelatedPages } from "@/components/content-page-parts";
import { getService, guidePages, servicePages } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getService((await params).slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/windows/${page.slug}` } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getService((await params).slug);
  if (!page) notFound();
  const relatedServices = servicePages.filter((item) => item.slug !== page.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org", "@type": "Service", name: page.title, description: page.description,
    areaServed: site.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
    provider: { "@type": "Organization", name: site.name, url: site.url },
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return (
    <main id="main-content">
      <ContentHero label="Windows" title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt}>
        <a className="button" href="#page-quote">Get a free quote <span aria-hidden="true">→</span></a>
      </ContentHero>
      <div className="shell content-layout">
        <article className="longform">
          <section>
            <h2>{page.name} supplied and installed in Manchester</h2>
            <p>We supply made-to-measure {page.name.toLowerCase()} and install them across Manchester and Greater Manchester. The service covers the survey, window specification, removal of the old frame, fitting, sealing and the finishing work listed in your written quote.</p>
            <p>You can request a quote for one window, several rooms or a full property. Tell us about the postcode, window count, access and any bays or upper floors so we can arrange the right survey.</p>
          </section>
          <DecisionList title={`${page.name} for Manchester homes`} items={page.bestFor} />
          {page.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((text) => <p key={text}>{text}</p>)}</section>)}
          <DecisionList title={`What to include in your ${page.name.toLowerCase()} quote`} items={page.choices} />
          <section>
            <h2>{page.name} survey and written quote</h2>
            <p>Ask each installer to name the frame system, glass, hardware, ventilation, external finish and internal making good. The document should show which panes open and how.</p>
            <p>Keep the survey drawings with the quotation. They make it easier to spot a changed pane layout or missing item before manufacture.</p>
          </section>
          <section>
            <h2>uPVC window installation across Greater Manchester</h2>
            <p>We cover Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton and Wigan. Coverage depends on the postcode, access and size of the job.</p>
            <p>Properties across the region range from Victorian terraces and bay-fronted semis to modern estates and managed apartments. The survey records the wall construction, opening layout and any building or planning restrictions before the windows enter manufacture.</p>
          </section>
          <PageFaqs faqs={page.faqs} title={`${page.name} Manchester: frequently asked questions`} />
        </article>
        <div id="page-quote"><CompactQuoteForm /></div>
      </div>
      <div className="shell content-bottom">
        <RelatedPages title="Other uPVC windows we install in Manchester" links={relatedServices.map((item) => ({ title: item.name, href: `/windows/${item.slug}`, description: item.description }))} />
        <RelatedPages title="uPVC window guides" links={guidePages.slice(0, 3).map((item) => ({ title: item.title, href: `/guides/${item.slug}`, description: item.description }))} />
        <QuoteBand title={`Get a free ${page.name.toLowerCase()} quote in Manchester`} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
