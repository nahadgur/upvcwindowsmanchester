import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";
import { areaPages } from "@/lib/content";

export const metadata: Metadata = { title: "Areas covered across Greater Manchester", description: "Request uPVC window quotes across Manchester, Salford, Stockport, Trafford, Oldham, Bolton, Bury, Rochdale, Tameside and Wigan.", alternates: { canonical: "/areas" } };

export default function AreasIndexPage() {
  return <main id="main-content">
    <section className="index-hero area-index-hero"><div className="shell"><Breadcrumbs items={[{ label: "Areas" }]} /><p className="content-label">Greater Manchester</p><h1>Local window quotes across ten boroughs</h1><p>Property type, access and planning controls change across the region. Choose your area for practical local context before requesting a quote.</p></div></section>
    <section className="shell index-grid-section"><div className="area-index-grid">{areaPages.map((page, index) => <Link href={`/areas/${page.slug}`} key={page.slug}><span>{String(index + 1).padStart(2, "0")}</span><h2>{page.name}</h2><p>{page.description}</p><i aria-hidden="true">→</i></Link>)}</div><QuoteBand title="Check coverage for your postcode" /></section>
  </main>;
}
