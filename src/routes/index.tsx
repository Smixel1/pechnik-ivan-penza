import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { EditorialFrame } from "@/components/editorial-frame";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import {
  SITE_NAME,
  TG_HANDLE,
  TG_URL,
} from "@/lib/site";
import { buildHomeJsonLd, buildPageHead } from "@/lib/seo";
import {
  consultationMessage,
  projectDiscussionMessage,
  telegramShareUrl,
} from "@/lib/telegram";

const IMG = {
  fireHero: "/images/kirpichnaya-pech-zhivoy-ogon.png",
  kompleksOgon: "/images/ulichnyy-kompleks-barbekyu-ogon.png",
  barbekyuNaves: "/images/barbekyu-pod-navesom.png",
  otopitelnaya: "/images/otopitelnaya-pech-v-dome.png",
  mangalnaya: "/images/pechnoy-kompleks-mangalnaya-zona.png",
  ulichnyy: "/images/ulichnyy-pechnoy-kompleks.png",
  kamin: "/images/kirpichnyy-kamin-portal.png",
  kazan: "/images/pechnoy-kompleks-s-kazanom.png",
  interyer: "/images/pechnoy-kompleks-interyer.png",
} as const;

const FAQ = [
  {
    q: "Чем кирпичная печь отличается от металлической?",
    a: "Основное отличие — в теплоёмкости. Массив кирпича долго набирает тепло и потом отдаёт его постепенно, мягким излучением. Металлическая печь нагревает помещение быстрее, но и остывает быстрее. У каждого решения своя задача: выбор зависит от помещения, режима топки и того, как вы собираетесь пользоваться печью.",
  },
  {
    q: "Зачем нужен шамотный кирпич?",
    a: "Шамот — огнеупорный материал, рассчитанный на многократные циклы сильного нагрева. Его применяют там, где температура самая высокая, прежде всего в топливнике. Обычный керамический кирпич в таких зонах работает иначе и не является автоматической заменой огнеупору.",
  },
  {
    q: "Почему важно правильно подобрать раствор?",
    a: "Раствор должен работать вместе с кирпичом: близко расширяться при нагреве и выдерживать циклы нагрев–остывание. Поэтому в горячих зонах используют глиняные и огнеупорные составы, а не универсальный цемент. Важны и консистенция, и толщина шва.",
  },
  {
    q: "Можно ли использовать металл в конструкции печи?",
    a: "Можно и нужно — дверцы, задвижки, колосники, плиты. Металл и кирпич расширяются по-разному, поэтому крупные жёсткие металлические элементы требуют продуманных зазоров и узлов примыкания. Неконтролируемый жёсткий контакт металла с кладкой со временем приводит к трещинам.",
  },
  {
    q: "Зачем нужна облицовка?",
    a: "Облицовка — это не только внешний вид. Она участвует в теплообмене и защищает поверхности, поэтому её материалы должны быть совместимы с кладкой. Отделка не должна мешать работе конструкции и доступу к обслуживаемым узлам.",
  },
  {
    q: "От чего зависит конструкция печи?",
    a: "От помещения и его теплопотерь, от места установки и основания, от дымохода, от режима использования и от того, что печь должна делать: греть, готовить, топить баню или быть камином. Из этого и складывается схема каналов и размеры массива.",
  },
  {
    q: "Где вы работаете?",
    a: "Работаю по Пензе и Пензенской области. Обсудить задачу удобнее всего в Telegram.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const { meta, links } = buildPageHead();
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildHomeJsonLd(FAQ)),
        },
      ],
    };
  },
});

const NAV = [
  { href: "#about", label: "Обо мне" },
  { href: "#brick", label: "Почему кирпич" },
  { href: "#tech", label: "Технология" },
  { href: "#works", label: "Работы" },
  { href: "#process", label: "Как работаю" },
  { href: "#estimate", label: "Расчёт" },
  { href: "#contact", label: "Контакты" },
];

const ABOUT_HIGHLIGHTS = [
  {
    title: "20+ лет",
    text: "Работаю с печами и комплексами — от простых отопительных до больших уличных.",
  },
  { title: "Пенза и область", text: "Выезжаю по Пензе и Пензенской области. Обсудить задачу удобнее всего в Telegram." },
  { title: "Личная кладка", text: "Кладу сам — от топливника до последнего ряда, без передачи на субподряд." },
];

const CLIENT_INFO = [
  {
    q: "С чего начинается работа?",
    a: "С разговора о задаче: что нужно от печи, как вы будете ею пользоваться и какое у вас помещение.",
  },
  {
    q: "Можно ли сделать индивидуальный проект?",
    a: "Да. Конструкция подбирается под конкретный объект — универсального решения «для всех» здесь не бывает.",
  },
  {
    q: "Как подбираются материалы?",
    a: "По зонам нагрева и задаче печи: керамика, шамот, растворы и печное литьё — каждый материал на своём месте.",
  },
  {
    q: "Сколько занимает работа?",
    a: "Срок зависит от типа печи, объёма кладки и условий на объекте. Точнее — после обсуждения проекта.",
  },
  {
    q: "Можно ли обсудить до заказа?",
    a: "Да. Можно описать задачу заранее — я подскажу, что реально сделать и с чего логичнее начать.",
  },
  {
    q: "В каких районах работаете?",
    a: "По Пензе и Пензенской области.",
  },
];

const COST_FACTORS = [
  ["Тип печи или комплекса", "Отопительная печь, камин, банная, уличный комплекс — у каждого решения свой объём работ."],
  ["Размеры и массив кладки", "Чем больше конструкция и сложнее геометрия каналов, тем больше времени и материала."],
  ["Материалы", "Кирпич, шамот, растворы, дверцы и печное литьё — подбираются под конкретную задачу."],
  ["Сложность проекта", "Ниши, арки, несколько топок, казан, мангал — каждый элемент влияет на конструкцию."],
  ["Фундамент и основание", "Печь должна стоять на подготовленном основании, рассчитанном под её массу."],
  ["Отделка и облицовка", "Внешний вид и тип облицовки влияют на объём отделочных работ."],
  ["Дополнительные элементы", "Дровник, столешница, навес, дымоход — всё это учитывается отдельно."],
  ["Особенности помещения", "Планировка, доступ, дымоход и режим эксплуатации определяют схему печи."],
  ["Монтаж и выезд", "Условия на объекте и логистика также входят в общую картину проекта."],
];

const WORKS = [
  {
    title: "Русские печи",
    text: "Традиционная кладка с вниманием к внутренней геометрии и к тому, как печью будут пользоваться каждый день.",
  },
  {
    title: "Банные печи",
    text: "Кирпичные решения для бани — по конкретному помещению, режиму парения и расположению каменки.",
  },
  {
    title: "Камины",
    text: "Кирпичные камины: тепло, живой огонь и архитектурное присутствие в интерьере.",
  },
  {
    title: "Барбекю",
    text: "Уличные кирпичные комплексы для готовки и отдыха: мангал, рабочая поверхность, дровник.",
  },
  {
    title: "Отопительные печи",
    text: "Печи для дома с продуманным распределением тепла по массиву и спокойным ровным нагревом.",
  },
  {
    title: "Печные порталы",
    text: "Порталы и окружающая кладка — аккуратная работа с кирпичом, швом и пропорциями.",
  },
];

const STEPS = [
  { t: "Обсуждаем задачу", d: "Что нужно от печи и как вы будете ею пользоваться." },
  { t: "Определяем место и требования", d: "Помещение, основание, дымоход, доступ к топке." },
  { t: "Продумываем конструкцию", d: "Размер массива, схема каналов, топливник." },
  { t: "Подбираем материалы", d: "Кирпич, огнеупор, растворы, печное литьё." },
  { t: "Кладу печь", d: "Работаю сам, ряд за рядом, со швом и геометрией." },
  { t: "Проверяем результат", d: "Просушка, первые топки, тяга и работа задвижек." },
];

/*
 * Каждое уникальное фото — в одном основном месте.
 * Hero / контакт: огонь в топке (атмосфера).
 * Обо мне: интерьерный комплекс.
 * Технология: камин, уличный комплекс, мангальная зона.
 * Галерея: только снимки, которых нет в секциях выше.
 */
const GALLERY = [
  {
    src: IMG.barbekyuNaves,
    alt: "Кирпичное барбекю под навесом с живым огнём",
    caption: "Барбекю под навесом",
  },
  {
    src: IMG.kompleksOgon,
    alt: "Уличный кирпичный комплекс с горящим очагом",
    caption: "Уличный комплекс с очагом",
  },
  {
    src: IMG.otopitelnaya,
    alt: "Отопительная кирпичная печь в доме",
    caption: "Отопительная печь",
  },
  {
    src: IMG.kazan,
    alt: "Печной комплекс с казаном и мангалом",
    caption: "Комплекс с казаном",
  },
];

function closeMobileNav(event: { currentTarget: EventTarget & HTMLElement }) {
  const details = event.currentTarget.closest("details");
  if (details) details.open = false;
}

function TelegramLink({
  variant = "primary",
  children,
  href = TG_URL,
}: {
  variant?: "primary" | "outline";
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? "cta-primary" : "cta-primary-outline"}
    >
      {children}
    </a>
  );
}

function SectionCta({
  text,
  label,
  href,
  external,
}: {
  text: string;
  label: string;
  href: string;
  external?: boolean;
}) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <div className="mt-14 flex flex-col gap-5 border-t border-border/60 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <p className="read-width prose-copy text-muted-foreground">{text}</p>
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="cta-primary shrink-0"
      >
        {label}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-6">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-3 px-5 sm:px-8">
          <a href="#hero" className="display shrink-0 text-lg text-foreground">
            Печник Иван
          </a>
          <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <details className="relative lg:hidden">
              <summary className="inline-flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center px-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                Меню
              </summary>
              <nav
                aria-label="Мобильная навигация"
                className="absolute right-0 top-[calc(100%+0.5rem)] z-10 w-52 max-w-[calc(100vw-5rem)] border border-border/70 bg-background py-2"
              >
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={closeMobileNav}
                    className="nav-link block min-h-11 px-5 py-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
            </details>
            <a
              href={telegramShareUrl(consultationMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-4 sm:px-5"
            >
              <span className="hidden sm:inline">Консультация</span>
              <span className="sm:hidden">Telegram</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="hero" className="editorial-section relative isolate overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="hero-zoom absolute inset-0">
              <img
                src={IMG.fireHero}
              alt="Живой огонь в топке кирпичной печи"
              width={1376}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
                className="hero-zoom-img h-full w-full object-cover opacity-90"
              />
            </div>
            <div
              aria-hidden
              className="fire-drift absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background:
                  "radial-gradient(60% 70% at 50% 90%, oklch(0.784 0.121 62 / 0.45), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="fire-flicker absolute left-1/2 bottom-[18%] h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: "oklch(0.653 0.145 47 / 0.55)" }}
            />
            <div aria-hidden className="hero-text-scrim absolute inset-x-0 bottom-0 h-[62%] sm:h-[58%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/35 to-background" />
          </div>

          <div className="editorial-inner mx-auto flex min-h-[86svh] max-w-content flex-col justify-end pb-20 pt-28 sm:pb-28">
            <div className="rise-in max-w-3xl">
              <h1 className="display text-[clamp(2.05rem,8vw,4.5rem)] leading-[1.05]">
                Я кладу кирпичные печи,
                <br />
                которые служат годами.
              </h1>
              <p className="mt-8 read-width prose-copy text-muted-foreground">
                Больше двадцати лет строю печи, камины и барбекю из кирпича в Пензе и Пензенской
                области. Кладу сам — от топливника до последнего ряда.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <TelegramLink href={telegramShareUrl(consultationMessage())}>
                  Получить консультацию
                </TelegramLink>
                <span className="text-sm tracking-widest text-muted-foreground">{TG_HANDLE}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <EditorialFrame id="about" marker="01" innerClassName="py-24 sm:py-32">
          <div className="read-width-wide">
            <SectionLabel>01 — Мастер</SectionLabel>
              <h2 className="display text-3xl sm:text-4xl">Обо мне</h2>
              <div className="mt-8 space-y-5 prose-copy text-muted-foreground">
                <p>
                  Меня зовут Иван. Печами я занимаюсь больше двадцати лет: сначала помогал, потом
                  стал класть сам. За это время через руки прошли и простые отопительные печи, и
                  большие уличные комплексы.
                </p>
                <p>
                  Работаю по Пензе и области, чаще всего один — так я отвечаю за каждый ряд кладки
                  лично. Для меня печь начинается не с облицовки, а с того, как внутри проходит
                  горячий газ и как массив будет держать тепло.
                </p>
              </div>
            <blockquote className="read-width mt-10 border-l border-amber/60 pl-6 prose-copy text-foreground/90">
              Красивый фасад сделать несложно. Гораздо важнее, чтобы печь ровно грела, нормально
              тянула и спокойно переживала сотни циклов нагрева и остывания.
            </blockquote>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className="highlight-card border border-border/70 bg-card/30 p-5 sm:p-6"
              >
                <h3 className="display text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 prose-copy-sm text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-px border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENT_INFO.map((item) => (
              <article key={item.q} className="info-card bg-background p-5 sm:p-6">
                <h3 className="display text-base text-foreground">{item.q}</h3>
                <p className="mt-2 prose-copy-sm text-muted-foreground">{item.a}</p>
              </article>
            ))}
          </div>
        </EditorialFrame>

        {/* CONSULTATION */}
        <section id="consult" className="editorial-section border-y border-border/60 bg-card">
          <div className="editorial-inner mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Консультация</SectionLabel>
              <h2 className="display text-3xl sm:text-4xl">
                Не знаете, какой вариант подойдёт именно вам?
              </h2>
              <p className="mx-auto mt-6 read-width-wide prose-copy text-muted-foreground">
                Расскажите, что вы хотите построить или обновить — мастер подскажет оптимальное
                решение, материалы и примерный порядок работ.
              </p>
              <div className="mt-10">
                <TelegramLink href={telegramShareUrl(consultationMessage())}>
                  Получить консультацию
                </TelegramLink>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BRICK */}
        <section id="brick" className="editorial-section border-y border-border/60 bg-card">
          <div className="editorial-inner mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32">
            <SectionLabel>02 — Материал</SectionLabel>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">Почему я выбираю кирпич</h2>
            <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
              {[
                [
                  "Теплоёмкость массива",
                  "Кирпичная кладка набирает тепло медленно и потом отдаёт его часами. Дом греется ровно, без резких перепадов между топками.",
                ],
                [
                  "Мягкое лучистое тепло",
                  "Прогретый массив излучает тепло поверхностью, а не гонит по комнате горячий воздух. Такое тепло переносится комфортнее.",
                ],
                [
                  "Долговечность при правильной конструкции",
                  "При грамотном проекте, подходящих материалах и нормальной эксплуатации кирпичная печь служит очень долго и ремонтопригодна.",
                ],
                [
                  "Внутренние каналы",
                  "Кладка позволяет выстроить сложный путь горячих газов: тепло остаётся в массиве, а не уходит сразу в трубу.",
                ],
                [
                  "Часть здания",
                  "Печь можно вписать в планировку и интерьер: она становится элементом архитектуры, а не приставленным прибором.",
                ],
                [
                  "Честное ремесло",
                  "Кирпич не прощает спешки. Здесь всё решает рука мастера: ряд, шов, геометрия топливника.",
                ],
              ].map(([t, d]) => (
                <article key={t}>
                  <h3 className="display text-xl text-foreground">{t}</h3>
                  <p className="mt-3 read-width prose-copy text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
            <p className="mt-14 read-width border-l border-terracotta/60 pl-6 prose-copy-sm text-muted-foreground">
              При этом я не считаю, что кирпич всегда лучше металла. У металлической печи свои
              задачи: быстрый прогрев, небольшой вес, временные помещения. Выбор зависит от объекта,
              а не от предпочтений.
            </p>
          </div>
        </section>

        {/* TECH */}
        <EditorialFrame id="tech" marker="03" innerClassName="py-24 sm:py-32">
          <SectionLabel>03 — Технология</SectionLabel>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">
            Из чего складывается хорошая печь
          </h2>

          <div className="mt-16 space-y-20">
            {[
              {
                n: "01",
                t: "Шамотный кирпич",
                img: IMG.fireHero,
                alt: "Топка кирпичной печи с живым огнём и раскалённым сводом",
                p: [
                  "Шамот — огнеупорный кирпич, рассчитанный на многократный сильный нагрев. Его место там, где температура максимальна: топливник, свод, зона прямого пламени.",
                  "Обычный керамический кирпич работает в других условиях. Он не является автоматической заменой огнеупору в самых горячих узлах, но и класть всю печь из шамота смысла нет: у материалов разное поведение при нагреве, и каждый должен стоять на своём месте.",
                ],
              },
              {
                n: "02",
                t: "Глиняный и огнеупорный раствор",
                img: IMG.kamin,
                alt: "Кирпичный портал камина с чугунной дверцей",
                p: [
                  "Раствор должен расширяться примерно так же, как кирпич, который он связывает. Поэтому в горячих зонах применяют глиняные и огнеупорные составы, совместимые с кладкой.",
                  "Значение имеют консистенция и толщина шва: тонкий, ровный, полностью заполненный шов работает лучше толстого. Обычный цемент не универсален — он рассчитан на другие условия и в горячих узлах ведёт себя иначе.",
                ],
              },
              {
                n: "03",
                t: "Металл в печи",
                img: IMG.ulichnyy,
                alt: "Уличный кирпичный печной комплекс с чугунными дверцами",
                p: [
                  "Металл в печи используется всегда: дверцы, задвижки, колосники, плиты, уголки. Вопрос не в том, применять его или нет, а в том, как он встроен в кладку.",
                  "Металл и кирпич расширяются по-разному. Крупные жёсткие металлические элементы требуют зазоров, компенсации и продуманных узлов примыкания. Жёсткая заделка «намертво» со временем даёт трещины в кладке.",
                  "И ещё: металлический ящик не заменяет огнеупорный топливник. Там, где идут постоянные высокие температуры, конструкция и материалы должны быть рассчитаны именно на такие циклы.",
                ],
              },
              {
                n: "04",
                t: "Облицовка",
                img: IMG.mangalnaya,
                alt: "Облицованный кирпичом печной комплекс с мангальной зоной",
                p: [
                  "Облицовка — это не только внешний вид. Она участвует в теплообмене, защищает поверхности и должна быть совместима с основной кладкой по расширению.",
                  "Отделка не должна мешать инженерии печи: перекрывать нужные зазоры, закрывать доступ к прочисткам и задвижкам, менять расчётный режим массива. Красиво — только тогда, когда сначала правильно.",
                ],
              },
            ].map((b, i) => (
              <article
                key={b.n}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  i % 2 ? "lg:[&>figure]:order-first" : ""
                }`}
              >
                <div>
                  <p className="eyebrow">{b.n}</p>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">{b.t}</h3>
                  <div className="read-width mt-5 space-y-4 prose-copy text-muted-foreground">
                    {b.p.map((x) => (
                      <p key={x.slice(0, 24)}>{x}</p>
                    ))}
                  </div>
                </div>
                <figure>
                  <img
                    src={b.img}
                    alt={b.alt}
                    loading="lazy"
                    decoding="async"
                    width={1376}
                    height={800}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
              </article>
            ))}
          </div>

          <SectionCta
            text="Не уверены, что подойдёт именно вам? Можно обсудить задачу до начала работ — без обязательств."
            label="Получить консультацию"
            href={telegramShareUrl(consultationMessage())}
          />
        </EditorialFrame>

        {/* WORKS TYPES */}
        <section className="editorial-section border-y border-border/60 bg-card">
          <div className="editorial-inner mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32">
            <SectionLabel>04 — Что я кладу</SectionLabel>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">Виды работ</h2>
            <div className="mt-14 divide-y divide-border/70 border-y border-border/70">
              {WORKS.map((w) => (
                <article
                  key={w.title}
                  className="grid gap-2 py-7 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10"
                >
                  <h3 className="display text-xl text-foreground sm:text-2xl">{w.title}</h3>
                  <p className="read-width prose-copy text-muted-foreground">{w.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COST */}
        <EditorialFrame id="cost" marker="04" innerClassName="py-24 sm:py-32">
          <SectionLabel>Из чего складывается цена</SectionLabel>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">Из чего складывается стоимость</h2>
          <p className="mt-6 read-width-wide prose-copy text-muted-foreground">
            У каждого проекта свои параметры. Точную стоимость можно назвать только после
            обсуждения — ниже перечислены основные факторы, которые на неё влияют.
          </p>
          <div className="mt-14 grid gap-px border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {COST_FACTORS.map(([title, desc]) => (
              <article key={title} className="info-card bg-background p-5 sm:p-6">
                <h3 className="display text-base text-foreground">{title}</h3>
                <p className="mt-2 prose-copy-sm text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <TelegramLink href={telegramShareUrl(consultationMessage())}>
              Получить предварительный расчёт
            </TelegramLink>
            <a
              href="#estimate"
              className="cta-secondary"
            >
              Заполнить данные для оценки →
            </a>
          </div>
        </EditorialFrame>

        {/* ESTIMATE */}
        <EditorialFrame
          id="estimate"
          marker="05"
          className="border-y border-border/60 bg-card"
          innerClassName="py-24 sm:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Предварительная оценка</SectionLabel>
            <h2 className="display text-3xl sm:text-4xl">Подготовить данные для расчёта</h2>
            <p className="mt-6 read-width prose-copy text-muted-foreground">
              Ответьте на несколько вопросов — и сформируйте сообщение для мастера. Это не
              автоматический расчёт цены: финальную оценку даёт мастер после обсуждения проекта.
            </p>
            <div className="mt-10">
              <EstimateCalculator />
            </div>
          </div>
        </EditorialFrame>

        {/* PROCESS */}
        <section id="process" className="editorial-section">
          <div className="editorial-inner mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32">
          <SectionLabel>05 — Порядок работы</SectionLabel>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">Как я работаю</h2>
          <ol className="mt-14 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="bg-background p-6 sm:p-8">
                <span className="display text-2xl text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-lg text-foreground">{s.t}</h3>
                <p className="mt-2 prose-copy-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
          </div>
        </section>

        {/* GALLERY */}
        <EditorialFrame id="works" marker="02" className="border-t border-border/60" innerClassName="py-24 sm:py-32">
            <SectionLabel>06 — Портфолио</SectionLabel>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">Мои работы</h2>
            <p className="mt-6 read-width prose-copy text-muted-foreground">
              Печи, камины и комплексы из кирпича — отопительные, уличные и для готовки.
            </p>
            <PortfolioGallery items={GALLERY} />

            <SectionCta
              text="Понравился такой вариант? Можно обсудить похожий проект под ваше помещение и задачу."
              label="Обсудить свой проект"
              href={telegramShareUrl(projectDiscussionMessage())}
            />
          </EditorialFrame>

        {/* FAQ */}
        <section id="faq" className="editorial-section border-y border-border/60 bg-card">
          <div className="editorial-inner mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-3xl">
            <SectionLabel>07 — Вопросы</SectionLabel>
            <h2 className="display text-3xl sm:text-4xl">Частые вопросы</h2>
            <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
              {FAQ.map((f) => (
                <article key={f.q} className="py-7">
                  <h3 className="display text-lg text-foreground">{f.q}</h3>
                  <p className="mt-3 read-width prose-copy text-muted-foreground">{f.a}</p>
                </article>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* PRE-CONTACT CTA */}
        <section className="editorial-section">
          <div className="editorial-inner mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
          <SectionCta
            text="Есть идея или только общее понимание задачи? Расскажите, что хотите построить — разберёмся, с чего начать."
            label="Расскажите, что хотите построить"
            href={telegramShareUrl(projectDiscussionMessage())}
          />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="editorial-section relative isolate overflow-hidden">
          <span aria-hidden className="editorial-marker editorial-marker-subtle">
            06
          </span>
          <img
            src={IMG.fireHero}
            alt=""
            loading="lazy"
            decoding="async"
            width={1376}
            height={800}
            sizes="100vw"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background" />
          <div className="editorial-inner mx-auto max-w-content px-5 py-28 sm:px-8 sm:py-36">
            <div className="mx-auto max-w-3xl text-center">
            <h2 className="display text-3xl sm:text-5xl">Есть место под печь? Давайте обсудим.</h2>
            <p className="mx-auto mt-7 read-width prose-copy text-muted-foreground">
              Расскажите, что за помещение и что вы хотите от печи. Отвечу, что здесь реально
              сделать. Работаю по Пензе и Пензенской области.
            </p>
            <div className="mt-11 flex flex-col items-center gap-5">
              <TelegramLink href={telegramShareUrl(projectDiscussionMessage())}>
                Обсудить проект
              </TelegramLink>
              <TelegramLink variant="outline" href={telegramShareUrl(consultationMessage())}>
                Получить консультацию
              </TelegramLink>
              <a
                href={TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm tracking-widest text-muted-foreground transition-colors hover:text-firelight"
              >
                {TG_HANDLE}
              </a>
            </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-12 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="display text-base text-foreground">{SITE_NAME}</p>
            <p className="mt-2">Кирпичные печи, камины и барбекю</p>
            <p>Пенза и Пензенская область</p>
          </div>
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-firelight"
          >
            Telegram: {TG_HANDLE}
          </a>
        </div>
      </footer>
    </div>
  );
}
