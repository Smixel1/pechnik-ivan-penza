import { useMemo, useState } from "react";

import { estimateRequestMessage, telegramShareUrl } from "@/lib/telegram";

const TYPES = [
  "Печь",
  "Камин",
  "Мангал / уличный комплекс",
  "Печное отопление",
  "Другое",
] as const;

const PLACES = ["Частный дом", "Баня", "Беседка", "Уличная зона", "Другое"] as const;

type TypeOption = (typeof TYPES)[number];
type PlaceOption = (typeof PLACES)[number];

export function EstimateCalculator() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<TypeOption | "">("");
  const [place, setPlace] = useState<PlaceOption | "">("");
  const [area, setArea] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [material, setMaterial] = useState("");
  const [notes, setNotes] = useState("");

  const canNext =
    (step === 1 && type !== "") || (step === 2 && place !== "") || step === 3;

  const telegramUrl = useMemo(() => {
    if (!type || !place) return "";
    return telegramShareUrl(
      estimateRequestMessage({
        type,
        place,
        area,
        dimensions,
        material,
        notes,
      }),
    );
  }, [type, place, area, dimensions, material, notes]);

  return (
    <div className="estimate-calculator border border-border/70 bg-card/40">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 px-5 py-4 sm:px-8">
        <p className="eyebrow">Предварительная оценка</p>
        <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {[1, 2, 3].map((n) => (
            <li
              key={n}
              className={`inline-flex min-h-9 min-w-9 items-center justify-center border px-2 transition-colors ${
                step === n
                  ? "border-amber/70 text-foreground"
                  : step > n
                    ? "border-terracotta/50 text-foreground/80"
                    : "border-border/60"
              }`}
              aria-current={step === n ? "step" : undefined}
            >
              {n}
            </li>
          ))}
        </ol>
      </div>

      <div className="px-5 py-8 sm:px-8 sm:py-10">
        {step === 1 && (
          <fieldset>
            <legend className="display text-xl text-foreground sm:text-2xl">
              Что нужно построить?
            </legend>
            <p className="mt-2 prose-copy-sm text-muted-foreground">
              Выберите тип — это поможет сориентироваться в решении.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {TYPES.map((option) => (
                <label
                  key={option}
                  className={`flex min-h-11 cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors hover:border-amber/50 ${
                    type === option
                      ? "border-amber/70 bg-terracotta/10 text-foreground"
                      : "border-border/70 text-muted-foreground"
                  }`}
                >
                  <input
                    type="radio"
                    name="estimate-type"
                    value={option}
                    checked={type === option}
                    onChange={() => setType(option)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`h-2.5 w-2.5 shrink-0 rounded-full border ${
                      type === option ? "border-amber bg-amber" : "border-border"
                    }`}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="display text-xl text-foreground sm:text-2xl">Где?</legend>
            <p className="mt-2 prose-copy-sm text-muted-foreground">
              Укажите тип помещения или зоны — от этого зависит конструкция.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {PLACES.map((option) => (
                <label
                  key={option}
                  className={`flex min-h-11 cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors hover:border-amber/50 ${
                    place === option
                      ? "border-amber/70 bg-terracotta/10 text-foreground"
                      : "border-border/70 text-muted-foreground"
                  }`}
                >
                  <input
                    type="radio"
                    name="estimate-place"
                    value={option}
                    checked={place === option}
                    onChange={() => setPlace(option)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={`h-2.5 w-2.5 shrink-0 rounded-full border ${
                      place === option ? "border-amber bg-amber" : "border-border"
                    }`}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <div>
            <h3 className="display text-xl text-foreground sm:text-2xl">
              Что уже известно?
            </h3>
            <p className="mt-2 prose-copy-sm text-muted-foreground">
              Все поля необязательны — заполните то, что уже есть.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Площадь
                </span>
                <input
                  type="text"
                  inputMode="text"
                  placeholder="например, 120 м²"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="min-h-11 w-full border border-border/70 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-amber/70 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Размеры
                </span>
                <input
                  type="text"
                  placeholder="например, 120×80 см"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  className="min-h-11 w-full border border-border/70 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-amber/70 focus:outline-none"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Желаемый материал
                </span>
                <input
                  type="text"
                  placeholder="если уже есть предпочтения"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="min-h-11 w-full border border-border/70 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-amber/70 focus:outline-none"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Дополнительные пожелания
                </span>
                <textarea
                  rows={3}
                  placeholder="мангал, казан, дровник, отделка..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full resize-y border border-border/70 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-amber/70 focus:outline-none"
                />
              </label>
            </div>

            <div className="mt-8 border border-border/60 bg-background/60 p-5 sm:p-6">
              <p className="display text-lg text-foreground">Предварительные данные готовы</p>
              <p className="mt-2 prose-copy-sm text-muted-foreground">
                Это не финальный расчёт — мастер уточнит детали и подскажет реалистичный порядок
                работ и материалов.
              </p>
              {type && place && (
                <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="text-foreground/80">Тип:</dt>
                    <dd>{type}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="text-foreground/80">Объект:</dt>
                    <dd>{place}</dd>
                  </div>
                </dl>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="cta-secondary px-5"
            >
              Назад
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              disabled={!canNext}
              onClick={() => setStep((s) => s + 1)}
              className="cta-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Далее
            </button>
          ) : (
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Отправить мастеру
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
