import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const origin = (process.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

function buildSitemapXml(base) {
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

function buildRobotsTxt(base) {
  const sitemapLine = base
    ? `Sitemap: ${base}/sitemap.xml`
    : "# Set VITE_SITE_URL and rebuild to emit an absolute Sitemap URL.";
  return `User-agent: *
Allow: /

${sitemapLine}
`;
}

const outputs = [".output/public", "dist", "public"];
const sitemap = buildSitemapXml(origin);
const robots = buildRobotsTxt(origin);

for (const dir of outputs) {
  if (dir !== "public" && !existsSync(dir)) continue;
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "sitemap.xml"), sitemap, "utf8");
  writeFileSync(join(dir, "robots.txt"), robots, "utf8");
  console.log(`wrote SEO files to ${dir}`);
}

if (!origin) {
  console.warn("VITE_SITE_URL is not set — sitemap.xml and robots.txt use relative placeholders.");
}
