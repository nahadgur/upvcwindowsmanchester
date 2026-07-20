import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";
import { guidePages } from "@/lib/content";

export const metadata: Metadata = { title: "Window buying guides", description: "Practical Manchester homeowner guides covering window costs, planning, energy ratings, quote comparison and condensation.", alternates: { canonical: "/guides" } };

export default function GuidesIndexPage() {
  return <main id="main-content">
    <section className="index-hero guide-index-hero"><div className="shell"><Breadcrumbs items={[{ label: "Guides" }]} /><h1>uPVC window advice for Manchester homeowners</h1><p>Read about costs, specifications, planning, energy ratings and condensation before you book a survey or accept a quote.</p></div></section>
    <section className="shell index-grid-section"><div className="guide-index-grid">{guidePages.map((page) => <article key={page.slug}><Link className="guide-image-link" href={`/guides/${page.slug}`}><Image src={page.image} alt="" fill sizes="(max-width: 700px) 100vw, 40vw" /></Link><div><h2><Link href={`/guides/${page.slug}`}>{page.title}</Link></h2><p>{page.description}</p><p className="guide-read-time">{page.readTime}</p><Link href={`/guides/${page.slug}`}>Read guide <i aria-hidden="true">→</i></Link></div></article>)}</div><QuoteBand /></section>
  </main>;
}
