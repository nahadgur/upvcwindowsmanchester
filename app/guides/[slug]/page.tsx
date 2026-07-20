import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentHero, DecisionList, PageFaqs, QuoteBand, RelatedPages } from "@/components/content-page-parts";
import { getGuide, guidePages, servicePages } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() { return guidePages.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getGuide((await params).slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/guides/${page.slug}` } };
}

export default async function GuidePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const page = getGuide((await params).slug);
  if (!page) notFound();
  const related = guidePages.filter((item) => item.slug !== page.slug).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: page.title, description: page.description, dateModified: "2026-07-20", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name }, mainEntityOfPage: `${site.url}/guides/${page.slug}` };
  return (
    <main id="main-content">
      <ContentHero label="Guides" title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt}>
        <p className="article-meta">Updated {page.updated} <span /> {page.readTime}</p>
      </ContentHero>
      <div className="shell article-shell">
        <article className="longform guide-article">
          {page.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((text) => <p key={text}>{text}</p>)}</section>)}
          {page.checklist && <DecisionList title="Use this checklist" items={page.checklist} />}
          {page.sources && <section className="source-list"><h2>Official guidance used for this page</h2><p>Rules can change and individual properties differ. Check the current source before ordering work.</p><ul>{page.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true">↗</span></a></li>)}</ul></section>}
          <PageFaqs faqs={page.faqs} />
          <p className="guide-disclosure">This guide provides general information for properties in England. It does not replace advice from the local planning authority, building control or a qualified surveyor.</p>
        </article>
        <aside className="article-aside">
          <strong>Planning a window project?</strong>
          <p>Request a quote from a company serving your Greater Manchester postcode.</p>
          <Link className="button" href="/contact">Get a free quote <span aria-hidden="true">→</span></Link>
          <small>Free to use. No obligation.</small>
        </aside>
      </div>
      <div className="shell content-bottom">
        <RelatedPages title="Continue your research" links={related.map((item) => ({ title: item.title, href: `/guides/${item.slug}`, description: item.description }))} />
        <RelatedPages title="Explore window styles" links={servicePages.slice(0, 3).map((item) => ({ title: item.name, href: `/windows/${item.slug}`, description: item.description }))} />
        <QuoteBand />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
