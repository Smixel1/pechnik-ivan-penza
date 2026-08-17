import { createFileRoute } from "@tanstack/react-router";

import fireHero from "@/assets/kirpichnaya-pech-zhivoy-ogon.webp.asset.json";
import kompleksOgon from "@/assets/ulichnyy-kompleks-barbekyu-ogon.webp.asset.json";
import barbekyuNaves from "@/assets/barbekyu-pod-navesom.webp.asset.json";
import otopitelnaya from "@/assets/otopitelnaya-pech-v-dome.png.asset.json";
import mangalnaya from "@/assets/pechnoy-kompleks-mangalnaya-zona.png.asset.json";
import ulichnyy from "@/assets/ulichnyy-pechnoy-kompleks.webp.asset.json";
import kamin from "@/assets/kirpichnyy-kamin-portal.png.asset.json";
import kazan from "@/assets/pechnoy-kompleks-s-kazanom.webp.asset.json";
import interyer from "@/assets/pechnoy-kompleks-interyer.webp.asset.json";

const TG = "https://t.me/Cvd123455";
const TITLE = "Печник Иван | Кирпичные печи в Пензе и Пензенской области";
const DESCRIPTION =
  "Иван — печник с опытом более 20 лет. Кладу кирпичные печи, русские и банные печи, камины, барбекю и печные порталы в Пензе и Пензенской области.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "/#ivan",
              name: "Иван",
              jobTitle: "Печник",
              description:
                "Печник с опытом более 20 лет. Кладка кирпичных печей, каминов и барбекю в Пензе и Пензенской области.",
              knowsAbout: [
                "кладка кирпичных печей",
                "русские печи",
                "банные печи",
                "камины",
                "барбекю",
                "печные порталы",
              ],
              sameAs: [TG],
            },
            {
              "@type": "HomeAndConstructionBusiness",
              "@id": "/#business",
              name: "Печник Иван | Пенза",
              description: DESCRIPTION,
              founder: { "@id": "/#ivan" },
              employee: { "@id": "/#ivan" },
              areaServed: [
                { "@type": "City", name: "Пенза" },
                { "@type": "AdministrativeArea", name: "Пензенская область" },
              ],
              knowsLanguage: "ru",
              sameAs: [TG],
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#about", label: "Обо мне" },
  { href: "#brick", label: "Почему кирпич" },
  { href: "#tech", label: "Технология" },
  { href: "#works", label: "Работы" },
  { href: "#process", label: "Как работаю" },
  { href: "#contact", label: "Контакты" },
];

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

const GALLERY = [
  { src: kompleksOgon.url, alt: "Уличный кирпичный комплекс с горящим очагом" },
  { src: barbekyuNaves.url, alt: "Кирпичное барбекю под навесом с живым огнём" },
  { src: otopitelnaya.url, alt: "Отопительная кирпичная печь в доме" },
  { src: mangalnaya.url, alt: "Кирпичный печной комплекс с мангальной зоной" },
  { src: ulichnyy.url, alt: "Уличный печной комплекс из кирпича" },
  { src: kamin.url, alt: "Кирпичный камин с чугунной топкой" },
  { src: kazan.url, alt: "Печной комплекс с казаном и мангалом" },
  { src: interyer.url, alt: "Кирпичный печной комплекс в интерьере" },
];

function TelegramLink({
  variant = "solid",
  children,
}: {
  variant?: "solid" | "quiet";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-3 text-sm tracking-[0.12em] uppercase transition-colors duration-300";
  return (
    <a
      href={TG}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "solid"
          ? `${base} border border-terracotta/70 bg-terracotta/15 px-7 py-4 text-foreground hover:bg-terracotta/30 hover:border-amber/70`
          : `${base} border-b border-border pb-1 text-muted-foreground hover:text-foreground hover:border-amber`
      }
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-6">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#hero" className="display text-lg text-foreground">
            Печник Иван
          </a>
          <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-amber hover:text-firelight"
          >
            <span className="hidden sm:inline">Написать в Telegram</span>
            <span className="sm:hidden">Telegram</span>
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative isolate overflow-hidden pt-16">
          <div className="absolute inset-0 -z-10">
            <img
              src={fireHero.url}
              alt="Живой огонь в топке кирпичной печи"
              width={1376}
              height={800}
              fetchPriority="high"
              className="h-full w-full object-cover opacity-70"
            />
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
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
          </div>

          <div className="mx-auto flex min-h-[86svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 sm:px-8 sm:pb-28">
            <div className="rise-in max-w-3xl">
              <SectionLabel>Пенза и Пензенская область · более 20 лет у печи</SectionLabel>
              <h1 className="display text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl">
                Я кладу кирпичные печи,
                <br />
                которые служат годами.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Больше двадцати лет строю печи, камины и барбекю из кирпича в Пензе
                и Пензенской области. Кладу сам — от топливника до последнего ряда.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <TelegramLink>Написать в Telegram</TelegramLink>
                <span className="text-sm tracking-widest text-muted-foreground">@Cvd123455</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <SectionLabel>01 — Мастер</SectionLabel>
              <h2 className="display text-3xl sm:text-4xl">Обо мне</h2>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Меня зовут Иван. Печами я занимаюсь больше двадцати лет: сначала
                  помогал, потом стал класть сам. За это время через руки прошли
                  и простые отопительные печи, и большие уличные комплексы.
                </p>
                <p>
                  Работаю по Пензе и области, чаще всего один — так я отвечаю
                  за каждый ряд кладки лично. Для меня печь начинается не
                  с облицовки, а с того, как внутри проходит горячий газ
                  и как массив будет держать тепло.
                </p>
                <p>
                  Красивый фасад сделать несложно. Гораздо важнее, чтобы печь
                  ровно грела, нормально тянула и спокойно переживала сотни
                  циклов нагрева и остывания.
                </p>
              </div>
            </div>
            <figure className="relative">
              <img
                src={interyer.url}
                alt="Кирпичный печной комплекс с топкой, мангалом и казаном в интерьере"
                loading="lazy"
                width={1376}
                height={786}
                className="w-full object-cover"
              />
              <figcaption className="mt-4 text-xs tracking-wide text-muted-foreground">
                Печной комплекс: топка, мангальная ниша и место под казан.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* WHY BRICK */}
        <section id="brick" className="border-y border-border/60 bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionLabel>02 — Материал</SectionLabel>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">
              Почему я выбираю кирпич
            </h2>
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
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
            <p className="mt-14 max-w-2xl border-l border-terracotta/60 pl-6 text-sm leading-relaxed text-muted-foreground">
              При этом я не считаю, что кирпич всегда лучше металла. У металлической
              печи свои задачи: быстрый прогрев, небольшой вес, временные помещения.
              Выбор зависит от объекта, а не от предпочтений.
            </p>
          </div>
        </section>

        {/* TECH */}
        <section id="tech" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionLabel>03 — Технология</SectionLabel>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">
            Из чего складывается хорошая печь
          </h2>

          <div className="mt-16 space-y-20">
            {[
              {
                n: "01",
                t: "Шамотный кирпич",
                img: fireHero.url,
                alt: "Топка кирпичной печи с живым огнём и раскалённым сводом",
                p: [
                  "Шамот — огнеупорный кирпич, рассчитанный на многократный сильный нагрев. Его место там, где температура максимальна: топливник, свод, зона прямого пламени.",
                  "Обычный керамический кирпич работает в других условиях. Он не является автоматической заменой огнеупору в самых горячих узлах, но и класть всю печь из шамота смысла нет: у материалов разное поведение при нагреве, и каждый должен стоять на своём месте.",
                ],
              },
              {
                n: "02",
                t: "Глиняный и огнеупорный раствор",
                img: kamin.url,
                alt: "Кирпичный портал камина с чугунной дверцей",
                p: [
                  "Раствор должен расширяться примерно так же, как кирпич, который он связывает. Поэтому в горячих зонах применяют глиняные и огнеупорные составы, совместимые с кладкой.",
                  "Значение имеют консистенция и толщина шва: тонкий, ровный, полностью заполненный шов работает лучше толстого. Обычный цемент не универсален — он рассчитан на другие условия и в горячих узлах ведёт себя иначе.",
                ],
              },
              {
                n: "03",
                t: "Металл в печи",
                img: ulichnyy.url,
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
                img: mangalnaya.url,
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
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
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
                    width={1376}
                    height={800}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
              </article>
            ))}
          </div>
        </section>

        {/* WORKS TYPES */}
        <section className="border-y border-border/60 bg-card">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionLabel>04 — Что я кладу</SectionLabel>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">Виды работ</h2>
            <div className="mt-14 divide-y divide-border/70 border-y border-border/70">
              {WORKS.map((w) => (
                <article
                  key={w.title}
                  className="grid gap-2 py-7 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10"
                >
                  <h3 className="display text-xl text-foreground sm:text-2xl">{w.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{w.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionLabel>05 — Порядок работы</SectionLabel>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">Как я работаю</h2>
          <ol className="mt-14 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="bg-background p-8">
                <span className="display text-2xl text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-lg text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* GALLERY */}
        <section id="works" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionLabel>06 — Портфолио</SectionLabel>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">Мои работы</h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Печи и комплексы, сложенные из кирпича. Съёмка на объектах,
              без перестановки конструкций и приукрашивания.
            </p>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-6">
              {GALLERY.map((g, i) => (
                <figure
                  key={g.src}
                  className={i % 3 === 0 ? "sm:col-span-2" : undefined}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    width={1376}
                    height={800}
                    className={`w-full object-cover transition-opacity duration-500 hover:opacity-90 ${
                      i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  />
                  <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground">
                    {g.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionLabel>07 — Вопросы</SectionLabel>
            <h2 className="display text-3xl sm:text-4xl">Частые вопросы</h2>
            <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
              {FAQ.map((f) => (
                <article key={f.q} className="py-7">
                  <h3 className="display text-lg text-foreground">{f.q}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative isolate overflow-hidden">
          <img
            src={kompleksOgon.url}
            alt="Кирпичный печной комплекс с горящим очагом"
            loading="lazy"
            width={1376}
            height={800}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/85 to-background" />
          <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-36">
            <h2 className="display text-3xl sm:text-5xl">
              Есть место под печь? Давайте обсудим.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Расскажите, что за помещение и что вы хотите от печи. Отвечу,
              что здесь реально сделать. Работаю по Пензе и Пензенской области.
            </p>
            <div className="mt-11 flex flex-col items-center gap-5">
              <TelegramLink>Написать в Telegram</TelegramLink>
              <a
                href={TG}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest text-muted-foreground transition-colors hover:text-firelight"
              >
                @Cvd123455
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-12 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="display text-base text-foreground">Печник Иван | Пенза</p>
            <p className="mt-2">Кирпичные печи, камины и барбекю</p>
            <p>Пенза и Пензенская область</p>
          </div>
          <a
            href={TG}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-firelight"
          >
            Telegram: @Cvd123455
          </a>
        </div>
      </footer>
    </div>
  );
}
