import type { Metadata } from "next";
import { Heebo, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | אומנות הלימוד",
    default: "אומנות הלימוד – ללמוד סוגיא ביעילות ולזכור",
  },
  description:
    "קורס מעשי ומסודר שמלמד איך להבין סוגיא, לנתח סברות, להתקדם כשנתקעים ולזכור את מה שלומדים.",
  keywords: ["לימוד", "תלמוד", "סוגיא", "שיטת לימוד", "אומנות הלימוד"],
  authors: [{ name: "אומנות הלימוד" }],
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "אומנות הלימוד",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${frank.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
