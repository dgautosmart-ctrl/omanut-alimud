import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatProgress, getLessonStatusLabel, getLessonStatusColor } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הקורס שלי",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
  });

  // Get the active course (first published course)
  const course = await prisma.course.findFirst({
    where: { isPublished: true },
    orderBy: { orderIndex: "asc" },
    include: {
      lessons: {
        where: { isPublished: true },
        orderBy: { orderIndex: "asc" },
        include: {
          progress: {
            where: { userId: user.id },
            take: 1,
          },
        },
      },
    },
  });

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-[var(--color-navy-900)] mb-4">
          הקורס בהכנה
        </h1>
        <p className="text-[var(--color-muted)]">
          השיעורים הראשונים יפורסמו בקרוב. נשלח לך עדכון.
        </p>
      </div>
    );
  }

  const lessons = course.lessons.map((lesson) => ({
    ...lesson,
    status: lesson.progress[0]?.status ?? "NOT_STARTED",
  }));

  const completedCount = lessons.filter((l) => l.status === "COMPLETED").length;
  const percent = formatProgress(completedCount, lessons.length);

  const nextLesson =
    lessons.find((l) => l.status === "IN_PROGRESS") ??
    lessons.find((l) => l.status === "NOT_STARTED");

  const displayName = profile?.fullName ?? user.email?.split("@")[0] ?? "לומד";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Greeting */}
      <div className="mb-10">
        <p className="text-[var(--color-muted)] mb-1">ברוך שובך,</p>
        <h1 className="text-3xl font-bold text-[var(--color-navy-900)]">
          {displayName}
        </h1>
      </div>

      {/* Progress card */}
      <Card className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[var(--color-navy-900)] mb-1">
              {course.title}
            </h2>
            <p className="text-sm text-[var(--color-muted)] mb-4">
              {completedCount} מתוך {lessons.length} שיעורים הושלמו
            </p>
            <ProgressBar value={percent} showLabel size="md" />
          </div>

          {nextLesson && (
            <div className="sm:text-left flex-shrink-0">
              <p className="text-xs text-[var(--color-muted)] mb-2">
                {nextLesson.status === "IN_PROGRESS" ? "המשך מהמקום שעצרת" : "השיעור הבא"}
              </p>
              <Link href={`/course/${course.slug}/lesson/${nextLesson.slug}`}>
                <Button size="md">
                  {nextLesson.status === "IN_PROGRESS" ? "המשך" : "התחל"} →{" "}
                  {nextLesson.title}
                </Button>
              </Link>
            </div>
          )}

          {!nextLesson && completedCount === lessons.length && lessons.length > 0 && (
            <div className="text-center">
              <p className="text-2xl mb-1">🎓</p>
              <p className="font-semibold text-[var(--color-success)]">הקורס הושלם!</p>
            </div>
          )}
        </div>
      </Card>

      {/* Lesson list */}
      <div>
        <h3 className="text-lg font-bold text-[var(--color-navy-900)] mb-4">
          כל השיעורים
        </h3>
        <div className="flex flex-col gap-3">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/course/${course.slug}/lesson/${lesson.slug}`}
              className="block"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-navy-700)] hover:shadow-sm transition-all">
                {/* Lesson number / status icon */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                    ${lesson.status === "COMPLETED"
                      ? "bg-[var(--color-success)] text-white"
                      : lesson.status === "IN_PROGRESS"
                      ? "bg-[var(--color-gold-500)] text-white"
                      : "bg-[var(--color-navy-100)] text-[var(--color-navy-700)]"
                    }`}
                >
                  {lesson.status === "COMPLETED" ? "✓" : index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[var(--color-navy-900)] truncate">
                    {lesson.title}
                  </p>
                  {lesson.subtitle && (
                    <p className="text-sm text-[var(--color-muted)] truncate">
                      {lesson.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {lesson.estimatedMinutes && (
                    <span className="text-xs text-[var(--color-muted)]">
                      {lesson.estimatedMinutes} דקות
                    </span>
                  )}
                  <span className={`text-xs font-medium ${getLessonStatusColor(lesson.status)}`}>
                    {getLessonStatusLabel(lesson.status)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
