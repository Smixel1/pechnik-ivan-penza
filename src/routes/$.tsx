import { createFileRoute } from "@tanstack/react-router";

import { NotFoundPage } from "@/components/not-found-page";
import { buildPageHead } from "@/lib/seo";

export const Route = createFileRoute("/$")({
  head: () => {
    const { meta, links } = buildPageHead({
      title: "Страница не найдена — Печник Иван",
      description: "Запрошенная страница не найдена. Вернитесь на главную, чтобы посмотреть работы печника Ивана в Пензе.",
      robots: "noindex, follow",
      preloadHero: false,
    });
    return { meta, links };
  },
  component: NotFoundPage,
});
