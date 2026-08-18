import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  PERSON_DESCRIPTION,
  SITE_NAME,
  TG_URL,
  absoluteUrl,
  siteOrigin,
} from "./site";

export type FaqItem = { q: string; a: string };

export function buildPageHead(options?: {
  title?: string;
  description?: string;
  path?: string;
  robots?: string;
  preloadHero?: boolean;
}) {
  const title = options?.title ?? PAGE_TITLE;
  const description = options?.description ?? PAGE_DESCRIPTION;
  const path = options?.path ?? "/";
  const pageUrl = absoluteUrl(path);
  const ogImage = absoluteUrl(OG_IMAGE_PATH);
  const hasOrigin = Boolean(siteOrigin());

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: options?.robots ?? "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "ru_RU" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: OG_IMAGE_ALT },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: OG_IMAGE_ALT },
  ];

  if (hasOrigin) {
    meta.push({ property: "og:url", content: pageUrl });
  }

  const links: Array<Record<string, string>> = [];

  if (hasOrigin) {
    links.push({ rel: "canonical", href: pageUrl });
    links.push({ rel: "alternate", hreflang: "ru", href: pageUrl });
  }

  if (options?.preloadHero !== false) {
    links.push({
      rel: "preload",
      href: OG_IMAGE_PATH,
      as: "image",
      type: "image/png",
    });
  }

  return { meta, links };
}

export function buildHomeJsonLd(faq: FaqItem[]) {
  const pageUrl = absoluteUrl("/");
  const ogImage = absoluteUrl(OG_IMAGE_PATH);
  const hasOrigin = Boolean(siteOrigin());
  const id = (suffix: string) => (hasOrigin ? `${pageUrl}${suffix}` : undefined);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        ...(id("#website") ? { "@id": id("#website"), url: pageUrl } : {}),
        name: SITE_NAME,
        inLanguage: "ru-RU",
        ...(hasOrigin ? { publisher: { "@id": id("#ivan") } } : {}),
      },
      {
        "@type": "Person",
        ...(id("#ivan") ? { "@id": id("#ivan"), url: pageUrl } : {}),
        name: "Иван",
        jobTitle: "Печник",
        description: PERSON_DESCRIPTION,
        image: hasOrigin ? ogImage : OG_IMAGE_PATH,
        knowsAbout: [
          "кладка кирпичных печей",
          "русские печи",
          "банные печи",
          "камины",
          "барбекю",
          "печные порталы",
        ],
        sameAs: [TG_URL],
      },
      {
        "@type": "HomeAndConstructionBusiness",
        ...(id("#business") ? { "@id": id("#business"), url: pageUrl } : {}),
        name: SITE_NAME,
        description: PAGE_DESCRIPTION,
        image: hasOrigin ? ogImage : OG_IMAGE_PATH,
        ...(hasOrigin
          ? {
              founder: { "@id": id("#ivan") },
              employee: { "@id": id("#ivan") },
            }
          : {}),
        areaServed: [
          { "@type": "City", name: "Пенза" },
          { "@type": "AdministrativeArea", name: "Пензенская область" },
        ],
        knowsLanguage: "ru",
        sameAs: [TG_URL],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: TG_URL,
          availableLanguage: "Russian",
        },
      },
      {
        "@type": "FAQPage",
        ...(id("#faq") ? { "@id": id("#faq") } : {}),
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function buildSitemapXml(origin?: string): string {
  const base = (origin ?? siteOrigin()).replace(/\/$/, "");
  const loc = base ? `${base}/` : "/";
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

export function buildRobotsTxt(origin?: string): string {
  const base = (origin ?? siteOrigin()).replace(/\/$/, "");
  const sitemapLine = base
    ? `Sitemap: ${base}/sitemap.xml`
    : "# Set VITE_SITE_URL and rebuild to emit an absolute Sitemap URL.";
  return `User-agent: *
Allow: /

${sitemapLine}
`;
}
