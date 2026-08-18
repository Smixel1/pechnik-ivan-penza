import { TG_URL } from "@/lib/site";

export function telegramShareUrl(message: string): string {
  return `${TG_URL}?text=${encodeURIComponent(message)}`;
}

export function consultationMessage(): string {
  return [
    "Здравствуйте! Хочу получить консультацию по строительству печи.",
    "",
    "Расскажу подробнее о задаче после вашего ответа.",
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
  const lines = [
    "Здравствуйте! Хочу получить предварительную оценку проекта.",
    "",
    `Тип: ${data.type}`,
    `Объект: ${data.place}`,
  ];

  if (data.area?.trim()) lines.push(`Площадь: ${data.area.trim()}`);
  if (data.dimensions?.trim()) lines.push(`Размеры: ${data.dimensions.trim()}`);
  if (data.material?.trim()) lines.push(`Материал: ${data.material.trim()}`);
  if (data.notes?.trim()) lines.push(`Дополнительно: ${data.notes.trim()}`);

  lines.push("", "Готов(а) обсудить детали.");

  return lines.join("\n");
}
