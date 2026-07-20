import type { MetadataRoute } from "next";
import { areaPages, guidePages, servicePages } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const fixedPages = [
    { path: "", priority: 1 },
    { path: "/windows", priority: 0.9 },
    { path: "/areas", priority: 0.85 },
    { path: "/guides", priority: 0.8 },
    { path: "/how-it-works", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return [
    ...fixedPages.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...servicePages.map((page) => ({
      url: `${site.url}/windows/${page.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areaPages.map((page) => ({
      url: `${site.url}/areas/${page.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...guidePages.map((page) => ({
      url: `${site.url}/guides/${page.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
