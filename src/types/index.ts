import type {
  Profile,
  Course,
  Lesson,
  LessonSection,
  Exercise,
  ExerciseResponse,
  LessonProgress,
  Enrollment,
  Role,
  SectionType,
  ExerciseType,
  ProgressStatus,
} from "@prisma/client";

export type {
  Profile,
  Course,
  Lesson,
  LessonSection,
  Exercise,
  ExerciseResponse,
  LessonProgress,
  Enrollment,
  Role,
  SectionType,
  ExerciseType,
  ProgressStatus,
};

// ─── Composed types used across the UI ───

export type LessonWithSections = Lesson & {
  sections: (LessonSection & { exercises: Exercise[] })[];
  exercises: Exercise[];
};

export type LessonWithProgress = Lesson & {
  progress: LessonProgress | null;
};

export type CourseWithLessons = Course & {
  lessons: LessonWithProgress[];
};

export type CourseProgress = {
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  percentComplete: number;
  nextLesson: Lesson | null;
};

export type ExerciseWithResponse = Exercise & {
  response: ExerciseResponse | null;
};

// ─── Section content shapes (stored as JSON) ───

export type ExplanationContent = {
  text: string; // Rich text HTML
};

export type ExampleContent = {
  text: string;
  source?: string;
};

export type ExerciseContent = {
  instructions?: string;
};

export type OralPracticeContent = {
  instructions: string;
  prompt: string;
};

export type SelfCheckContent = {
  questions: string[];
};

export type SummaryContent = {
  points: string[];
};

export type AudioContent = {
  url: string;
  title?: string;
  durationSeconds?: number;
};

export type SectionContent =
  | ExplanationContent
  | ExampleContent
  | ExerciseContent
  | OralPracticeContent
  | SelfCheckContent
  | SummaryContent
  | AudioContent;
