import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, QuoteBand } from "@/components/content-page-parts";
import { areaPages } from "@/lib/content";

export const metadata: Metadata = { title: "uPVC window installation across Greater Manchester", description: "We supply and install uPVC windows across Manchester, Salford, Stockport, Trafford, Oldham, Bolton, Bury, Rochdale, Tameside and Wigan.", alternates: { canonical: "/areas" } };

export default function AreasIndexPage() {
  return <main id="main-content">
    <section className="index-hero area-index-hero"><div className="shell"><Breadcrumbs items={[{ label: "Areas" }]} /><h1>uPVC window installation across Greater Manchester</h1><p>We supply and install made-to-measure uPVC windows across all ten boroughs. Choose your area to see local property and planning information.</p></div></section>
    <section className="shell index-grid-section"><div className="area-index-grid">{areaPages.map((page, index) => <Link href={`/areas/${page.slug}`} key={page.slug}><span>{String(index + 1).padStart(2, "0")}</span><h2>{page.name}</h2><p>{page.description}</p><i aria-hidden="true">→</i></Link>)}</div><QuoteBand title="Check coverage for your postcode" /></section>
  </main>;
}
