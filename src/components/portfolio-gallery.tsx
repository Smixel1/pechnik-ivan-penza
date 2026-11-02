import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export function PortfolioGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openingButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      openingButtonRef.current?.focus();
    };
  }, [active, close]);

  return (
    <>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {items.map((item, i) => (
          <figure key={item.src} className={i % 3 === 0 ? "sm:col-span-2" : undefined}>
            <button
              type="button"
              onClick={(event) => {
                openingButtonRef.current = event.currentTarget;
                setActive(item);
              }}
              className={`gallery-thumb group relative w-full ${
                i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
              }`}
              aria-label={`Открыть: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={1376}
                height={800}
                sizes={i % 3 === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden
                className="gallery-view-hint pointer-events-none absolute inset-0 bg-background/15"
              />
              <span
                aria-hidden
                className="gallery-view-hint pointer-events-none absolute bottom-3 right-3 border border-border/60 bg-background/75 p-2 text-muted-foreground backdrop-blur-sm"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 2H2v4M10 2h4v4M10 14h4v-4M6 14H2v-4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <div aria-hidden className="absolute inset-0 bg-background/92 backdrop-blur-sm" />
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-[101] inline-flex min-h-11 min-w-11 items-center justify-center border border-border/70 bg-background/90 text-2xl leading-none text-foreground transition-colors hover:border-amber/60 hover:text-firelight"
            aria-label="Закрыть просмотр"
          >
            ×
          </button>
          <figure
            className="relative z-[101] flex max-h-[90svh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              width={1376}
              height={800}
              className="max-h-[calc(90svh-3rem)] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 mx-auto read-width text-center prose-copy-sm text-muted-foreground">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
