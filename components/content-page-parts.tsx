import Image from "next/image";
import Link from "next/link";
import type { Faq } from "@/lib/content";
import { QuoteForm } from "./quote-form";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} aria-current={item.href ? undefined : "page"}>
            <span aria-hidden="true">/</span>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ContentHero({
  label,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  label: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="content-hero">
      <div className="shell">
        <Breadcrumbs items={[{ label, href: label === "Areas" ? "/areas" : label === "Guides" ? "/guides" : "/windows" }, { label: title }]} />
        <div className="content-hero-grid">
          <div className="content-hero-copy">
            <h1>{title}</h1>
            <p className="content-intro">{intro}</p>
            {children}
          </div>
          <div className="content-hero-image">
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompactQuoteForm() {
  return (
    <aside className="content-quote" aria-label="Get a window quote">
      <QuoteForm />
    </aside>
  );
}

export function DecisionList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="decision-box">
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
    </section>
  );
}

export function PageFaqs({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="page-faqs" aria-labelledby="page-faq-title">
      <h2 id="page-faq-title">{title}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>{faq.question}<span aria-hidden="true">+</span></summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function QuoteBand({ title = "Get a quote based on your property" }: { title?: string }) {
  return (
    <section className="content-cta">
      <div>
        <h2>{title}</h2>
        <p>Share the postcode, window count and timescale. There is no charge and no obligation to proceed.</p>
      </div>
      <Link className="button button-light" href="/contact">Get a free quote <span aria-hidden="true">→</span></Link>
    </section>
  );
}

export function RelatedPages({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string; description: string }[];
}) {
  return (
    <section className="related-pages">
      <h2>{title}</h2>
      <div className="related-grid">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <strong>{link.title}</strong>
            <p>{link.description}</p>
            <span>Read page <i aria-hidden="true">→</i></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
