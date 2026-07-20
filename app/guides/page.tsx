import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";
import { guidePages } from "@/lib/content";

export const metadata: Metadata = { title: "Window buying guides", description: "Practical Manchester homeowner guides covering window costs, planning, energy ratings, quote comparison and condensation.", alternates: { canonical: "/guides" } };

export default function GuidesIndexPage() {
  return <main id="main-content">
    <section className="index-hero guide-index-hero"><div className="shell"><Breadcrumbs items={[{ label: "Guides" }]} /><p className="content-label">Homeowner guides</p><h1>Understand the quote before you sign it</h1><p>Plain-English guidance on specifications, permissions and the problems that bring homeowners to a window survey.</p></div></section>
    <section className="shell index-grid-section"><div className="guide-index-grid">{guidePages.map((page) => <article key={page.slug}><Link className="guide-image-link" href={`/guides/${page.slug}`}><Image src={page.image} alt="" fill sizes="(max-width: 700px) 100vw, 40vw" /></Link><div><span>{page.readTime}</span><h2><Link href={`/guides/${page.slug}`}>{page.title}</Link></h2><p>{page.description}</p><Link href={`/guides/${page.slug}`}>Read guide <i aria-hidden="true">→</i></Link></div></article>)}</div><QuoteBand /></section>
  </main>;
}
