import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";
import { servicePages } from "@/lib/content";

export const metadata: Metadata = { title: "Window types and glazing options", description: "Compare uPVC casement, sash-style, bay, tilt-and-turn and replacement window options in Manchester.", alternates: { canonical: "/windows" } };

export default function WindowsIndexPage() {
  return <main id="main-content">
    <section className="index-hero"><div className="shell"><Breadcrumbs items={[{ label: "Windows" }]} /><p className="content-label">Window options</p><h1>Choose the frame around the way you live</h1><p>Opening style, glass, ventilation and the existing building all shape a useful specification. Start with the room and property, then compare products.</p></div></section>
    <section className="shell index-grid-section"><div className="index-card-grid">{servicePages.map((page) => <Link className="index-card" href={`/windows/${page.slug}`} key={page.slug}><div className="index-card-image"><Image src={page.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div><h2>{page.name}</h2><p>{page.description}</p><span>View option <i aria-hidden="true">→</i></span></div></Link>)}</div><QuoteBand /></section>
  </main>;
}
