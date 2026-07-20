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
        <a className="button" href="#page-quote">Request local quotes <span aria-hidden="true">→</span></a>
      </ContentHero>
      <div className="shell content-layout">
        <article className="longform">
          <DecisionList title={`Where ${page.name.charAt(0).toLowerCase()}${page.name.slice(1)} can work well`} items={page.bestFor} />
          {page.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((text) => <p key={text}>{text}</p>)}</section>)}
          <DecisionList title="Decisions to put in the quote" items={page.choices} />
          <section>
            <h2>Get a written, room-by-room specification</h2>
            <p>Ask each installer to name the frame system, glass, hardware, ventilation, external finish and internal making good. The document should show which panes open and how.</p>
            <p>Keep the survey drawings with the quotation. They make it easier to spot a changed pane layout or missing item before manufacture.</p>
          </section>
          <PageFaqs faqs={page.faqs} />
        </article>
        <div id="page-quote"><CompactQuoteForm /></div>
      </div>
      <div className="shell content-bottom">
        <RelatedPages title="Compare other window options" links={relatedServices.map((item) => ({ title: item.name, href: `/windows/${item.slug}`, description: item.description }))} />
        <RelatedPages title="Research before you choose" links={guidePages.slice(0, 3).map((item) => ({ title: item.title, href: `/guides/${item.slug}`, description: item.description }))} />
        <QuoteBand />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
