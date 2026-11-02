import { TG_URL } from "@/lib/site";

/** Telegram share URLs cap text below the platform limit (4096). */
const TELEGRAM_TEXT_LIMIT = 3800;

const TELEGRAM_FIELD_LIMITS = {
  area: 80,
  dimensions: 80,
  material: 120,
  notes: 500,
} as const;

// eslint-disable-next-line no-control-regex -- Control characters are the input being removed.
const CONTROL_CHARACTERS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

/** Strip control characters and cap length for user-supplied Telegram message fields. */
export function sanitizeTelegramField(value: string, maxLength: number): string {
  return value.replace(CONTROL_CHARACTERS, "").trim().slice(0, maxLength);
}

export function telegramFieldLimit(field: keyof typeof TELEGRAM_FIELD_LIMITS): number {
  return TELEGRAM_FIELD_LIMITS[field];
}

export function telegramShareUrl(message: string): string {
  const safeMessage = message.slice(0, TELEGRAM_TEXT_LIMIT);
  return `${TG_URL}?text=${encodeURIComponent(safeMessage)}`;
}

export function consultationMessage(): string {
  return [
    "Здравствуйте! Хочу получить консультацию по строительству печи.",
    "",
    "Расскажу подробнее о задаче после вашего ответа.",
  ].join("\n");
}

export function costQuestionMessage(): string {
  return [
    "Здравствуйте! Хочу узнать предварительную стоимость печи.",
    "",
    "Расскажу о проекте и размерах после вашего ответа.",
  ].join("\n");
}

export function projectDiscussionMessage(): string {
  return [
    "Здравствуйте! Хочу обсудить свой проект.",
    "",
    "Расскажу подробнее о помещении и пожеланиях после вашего ответа.",
  ].join("\n");
}

export function estimateRequestMessage(data: {
  type: string;
  place: string;
  area?: string;
  dimensions?: string;
  material?: string;
  notes?: string;
}): string {
  const area = data.area ? sanitizeTelegramField(data.area, TELEGRAM_FIELD_LIMITS.area) : "";
  const dimensions = data.dimensions
    ? sanitizeTelegramField(data.dimensions, TELEGRAM_FIELD_LIMITS.dimensions)
    : "";
  const material = data.material
    ? sanitizeTelegramField(data.material, TELEGRAM_FIELD_LIMITS.material)
    : "";
  const notes = data.notes ? sanitizeTelegramField(data.notes, TELEGRAM_FIELD_LIMITS.notes) : "";

  const lines = [
    "Здравствуйте! Хочу получить предварительную оценку проекта.",
    "",
    `Тип: ${data.type}`,
    `Объект: ${data.place}`,
  ];

  if (area) lines.push(`Площадь: ${area}`);
  if (dimensions) lines.push(`Размеры: ${dimensions}`);
  if (material) lines.push(`Материал: ${material}`);
  if (notes) lines.push(`Дополнительно: ${notes}`);

  lines.push("", "Готов(а) обсудить детали.");

  return lines.join("\n");
}
