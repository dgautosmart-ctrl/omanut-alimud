import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProgress(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getLessonStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    NOT_STARTED: "לא התחיל",
    IN_PROGRESS: "בתהליך",
    COMPLETED: "הושלם",
  };
  return labels[status] ?? status;
}

export function getLessonStatusColor(status: string): string {
  const colors: Record<string, string> = {
    NOT_STARTED: "text-[var(--color-muted)]",
    IN_PROGRESS: "text-[var(--color-gold-600)]",
    COMPLETED: "text-[var(--color-success)]",
  };
  return colors[status] ?? "";
}
