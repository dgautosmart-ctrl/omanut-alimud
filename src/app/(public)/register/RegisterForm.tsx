"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function RegisterForm() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("הסיסמה חייבת להכיל לפחות 6 תווים");
      return;
    }

    setLoading(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: undefined,
      },
    });

    if (signUpError) {
      setError(translateError(signUpError.message));
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="שם מלא"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="ישראל ישראלי"
          required
          autoComplete="name"
        />
        <Input
          label="כתובת אימייל"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="israel@example.com"
          required
          autoComplete="email"
          dir="ltr"
        />
        <Input
          label="סיסמה"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          hint="לפחות 6 תווים"
          required
          autoComplete="new-password"
          dir="ltr"
        />

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-[var(--color-error)]">
            {error}
          </div>
        )}

        <Button type="submit" loading={loading} size="lg" className="w-full mt-1">
          יצירת חשבון והתחלת הקורס
        </Button>
      </form>
    </Card>
  );
}

function translateError(message: string): string {
  if (message.includes("already registered") || message.includes("already been registered")) {
    return "כתובת האימייל הזו כבר רשומה. נסה להתחבר";
  }
  if (message.includes("Invalid email")) {
    return "כתובת האימייל אינה תקינה";
  }
  if (message.includes("weak password") || message.includes("Password should be")) {
    return "הסיסמה חלשה מדי. בחר סיסמה חזקה יותר";
  }
  return "אירעה שגיאה. נסה שוב";
}
