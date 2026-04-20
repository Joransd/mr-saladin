import type { Metadata, Viewport } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrsaladin.com"),
  title: "Joran Saladin — UI/Web Designer Senior",
  description:
    "Je conçois et développe des interfaces web rapides, claires et orientées conversion. Disponible pour missions freelance.",
  keywords: [
    "UI Design",
    "Web Design",
    "Frontend",
    "Next.js",
    "Figma",
    "Freelance",
    "Designer senior",
    "Portfolio",
  ],
  openGraph: {
    title: "Joran Saladin — UI/Web Designer Senior",
    description:
      "Je conçois et développe des interfaces web rapides, claires et orientées conversion. Disponible pour missions freelance.",
    url: "https://mrsaladin.com",
    siteName: "Mr. Saladin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joran Saladin — UI/Web Designer Senior",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joran Saladin — UI/Web Designer Senior",
    description:
      "Je conçois et développe des interfaces web rapides, claires et orientées conversion. Disponible pour missions freelance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020202",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${oswald.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[#020202] text-white antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
