export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-right">
          <p className="font-semibold text-[var(--color-navy-900)]">אומנות הלימוד</p>
          <p className="text-sm text-[var(--color-muted)]">ללמוד סוגיא ביעילות ולזכור</p>
        </div>
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
