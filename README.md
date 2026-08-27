# Печник Иван

Сайт частного мастера по кирпичным печам, каминам и барбекю в Пензе и Пензенской области.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Preview на Cloudflare:

```bash
npx wrangler dev
```

## Production URL

После публикации задайте origin без слэша в конце:

```env
VITE_SITE_URL=https://your-domain.ru
```

Затем пересоберите проект — canonical, sitemap и Open Graph получат абсолютные URL.

## Стек

React · TypeScript · TanStack Start · Tailwind CSS · Cloudflare Workers
