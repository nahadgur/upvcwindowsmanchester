import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = { title: "uPVC window styles in Manchester", description: "We supply and install casement, sash-style, bay, tilt-and-turn and replacement uPVC windows in Manchester.", alternates: { canonical: "/windows" } };

export default function WindowsIndexPage() {
  return <main id="main-content">
    <section className="index-hero"><div className="shell"><Breadcrumbs items={[{ label: "Windows" }]} /><h1>uPVC window styles in Manchester</h1><p>We supply and install made-to-measure windows for Manchester homes. Choose a style to see how it opens, where it works and what to include in your quote.</p></div></section>
    <section className="shell index-grid-section"><div className="index-card-grid">{servicePages.map((page) => <Link className="index-card" href={`/windows/${page.slug}`} key={page.slug}><div className="index-card-image"><Image src={page.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div><h2>{page.name}</h2><p>{page.description}</p><span>View option <i aria-hidden="true">→</i></span></div></Link>)}</div><QuoteBand /></section>
  </main>;
}
