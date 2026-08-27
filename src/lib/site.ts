/** Production origin without trailing slash. Empty until VITE_SITE_URL is set. */
export function siteOrigin(): string {
  const env = import.meta.env as Record<string, string | undefined>;
  const raw = env["VITE_SITE_URL"];
  if (!raw) return "";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/"): string {
  const origin = siteOrigin();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${normalized}` : normalized;
}

export const TG_URL = "https://t.me/Cvd123455";
export const TG_HANDLE = "@Cvd123455";

if (import.meta.env.DEV) {
  try {
    const parsed = new URL(TG_URL);
    if (parsed.protocol !== "https:" || parsed.hostname !== "t.me") {
      console.warn("[site] TG_URL should be an https://t.me/ link.");
    }
  } catch {
    console.warn("[site] TG_URL is not a valid URL.");
  }
}
export const SITE_NAME = "Печник Иван | Пенза";
export const PAGE_TITLE = "Печник Иван — кирпичные печи, камины и барбекю в Пензе";
export const PAGE_DESCRIPTION =
  "Иван — печник с опытом более 20 лет. Кладу кирпичные печи, камины и барбекю в Пензе и Пензенской области. На сайте можно посмотреть работы и обсудить проект в Telegram.";
export const PERSON_DESCRIPTION =
  "Печник с опытом более 20 лет. Кладка кирпичных печей, каминов и барбекю в Пензе и Пензенской области.";
export const OG_IMAGE_PATH = "/images/kirpichnaya-pech-zhivoy-ogon.png";
export const OG_IMAGE_ALT = "Живой огонь в топке кирпичной печи";
export const OG_IMAGE_WIDTH = 1376;
export const OG_IMAGE_HEIGHT = 800;
