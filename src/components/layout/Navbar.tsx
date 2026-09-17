"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import type { Profile } from "@/types";

interface NavbarProps {
  user?: Profile | null;
}

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center gap-2 group"
        >
          <span className="text-xl font-bold text-[var(--color-navy-900)] group-hover:text-[var(--color-navy-700)] transition-colors">
            אומנות הלימוד
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  הקורס שלי
                </Button>
              </Link>
              {user.role === "ADMIN" && (
                <Link href="/admin">
                  <Button variant="ghost" size="sm">
                    ניהול
                  </Button>
                </Link>
              )}
              <Button variant="secondary" size="sm" onClick={handleSignOut}>
                יציאה
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  כניסה
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm">
                  הרשמה לקורס
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
