import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "כניסה",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-surface)] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-navy-900)] mb-2">
            כניסה לחשבון
          </h1>
          <p className="text-[var(--color-muted)]">
            המשך מהמקום שעצרת
          </p>
        </div>

        <LoginForm />

        <p className="text-center mt-6 text-sm text-[var(--color-muted)]">
          עדיין אין לך חשבון?{" "}
          <a href="/register" className="text-[var(--color-navy-700)] font-medium hover:underline">
            הרשמה לקורס
          </a>
        </p>
      </div>
    </div>
  );
}
