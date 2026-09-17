import type { Metadata } from "next";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = {
  title: "הרשמה לקורס",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-surface)] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-navy-900)] mb-2">
            הרשמה לקורס
          </h1>
          <p className="text-[var(--color-muted)]">
            צור חשבון ותתחיל ללמוד – בחינם
          </p>
        </div>

        <RegisterForm />

        <p className="text-center mt-6 text-sm text-[var(--color-muted)]">
          כבר יש לך חשבון?{" "}
          <a href="/login" className="text-[var(--color-navy-700)] font-medium hover:underline">
            כניסה
          </a>
        </p>
      </div>
    </div>
  );
}
