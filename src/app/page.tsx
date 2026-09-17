import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const problems = [
  "לא יודע כיצד לנתח סברא לעומקה",
  "נתקע בסוגיא ואינו יודע כיצד להתקדם",
  "מרגיש שהלימוד אינו מסודר ושיטתי",
  "מתקשה לזכור את מה שלמד",
  "רוצה להגיע להבנה עמוקה יותר",
  "רוצה לפתח חשיבה עצמאית בלימוד",
];

const outcomes = [
  { title: "גישה נכונה לסוגיא", desc: "איך להתחיל ללמוד סוגיא בצורה מסודרת ולא ללכת לאיבוד" },
  { title: "ניתוח סברות", desc: "איך לפרק סברא, להבין את חלקיה ולחשוב לעומק על כל נקודה" },
  { title: "התמודדות עם קושי", desc: "מה עושים כשנתקעים – כיצד לצאת מהתקיעות ולמצוא כיוונים חדשים" },
  { title: "זיכרון ושימור", desc: "שיטות מעשיות לזכירת החומר לאורך זמן" },
  { title: "בדיקה עצמית", desc: "איך לדעת שבאמת הבנת ולא רק נדמה לך שהבנת" },
  { title: "חשיבה עצמאית", desc: "פיתוח היכולת לחשוב בצורה עצמאית ולא רק לשמוע מאחרים" },
];

const steps = [
  { num: "א", title: "הסבר", desc: "כל כלי מוסבר בצורה פשוטה וברורה" },
  { num: "ב", title: "דוגמה", desc: "הדגמה מעשית מהלימוד עצמו" },
  { num: "ג", title: "תרגול", desc: "אתה מתרגל ומכניס את הכלי ללימוד שלך" },
  { num: "ד", title: "בדיקה", desc: "בודק את עצמך ומוודא שהכלי נטמע" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="bg-[var(--color-navy-900)] text-white">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <p className="text-[var(--color-gold-400)] font-semibold tracking-wide mb-4 text-sm uppercase">
              גרסת ביטא – כניסה ללא תשלום
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              אומנות הלימוד
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-navy-100)] mb-4 font-light">
              כיצד ללמוד ביעילות ולזכור
            </p>
            <p className="text-[var(--color-navy-100)]/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              קורס מעשי ומסודר שמלמד איך להבין סוגיא, לנתח סברות,
              להתקדם כשנתקעים ולזכור את מה שלומדים.
              לא ללמוד יותר – ללמוד איך ללמוד.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-[var(--color-gold-500)] text-[var(--color-navy-950)] hover:bg-[var(--color-gold-400)] w-full sm:w-auto">
                  הרשמה לקורס – ללא תשלום
                </Button>
              </Link>
              <Link href="#about">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 w-full sm:w-auto">
                  למה הקורס?
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-navy-900)] mb-4">
                למי הקורס מתאים?
              </h2>
              <p className="text-[var(--color-muted)] text-lg">
                לכל מי שמכיר את עצמו באחד מהמצבים הבאים:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-navy-50)] border border-[var(--color-navy-100)]"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-gold-500)] flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <p className="text-[var(--color-navy-800)]">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section className="py-20 bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-navy-900)] mb-4">
                מה תקבל מהקורס?
              </h2>
              <p className="text-[var(--color-muted)] text-lg">
                שיטה מסודרת ומעשית שתוכל להשתמש בה בכל לימוד
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outcomes.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm"
                >
                  <h3 className="font-bold text-[var(--color-navy-900)] mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-navy-900)] mb-4">
                כיצד הקורס בנוי?
              </h2>
              <p className="text-[var(--color-muted)] text-lg">
                כל שיעור מלמד כלי אחד בצורה מדורגת ומעשית
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-navy-900)] text-white flex items-center justify-center font-bold text-lg">
                    {step.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-[var(--color-navy-900)] text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-muted)]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[var(--color-navy-900)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              מוכן להתחיל ללמוד אחרת?
            </h2>
            <p className="text-[var(--color-navy-100)]/80 mb-8 text-lg">
              הרשמה לגרסת הביטא כרגע ללא תשלום
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-[var(--color-gold-500)] text-[var(--color-navy-950)] hover:bg-[var(--color-gold-400)]">
                התחל את הקורס עכשיו
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
