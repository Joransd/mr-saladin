import type { Metadata, Viewport } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

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
      className={`${oswald.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        <Script id="suppress-extension-errors" strategy="beforeInteractive">{`
          (function(){
            window.addEventListener('unhandledrejection', function(e) {
              var s = (e.reason && e.reason.stack) || '';
              var m = (e.reason && e.reason.message) || '';
              if (s.indexOf('chrome-extension://') !== -1 || m.toLowerCase().indexOf('metamask') !== -1 || m.toLowerCase().indexOf('failed to connect') !== -1) {
                e.preventDefault();
                e.stopImmediatePropagation();
              }
            }, true);
          })();
        `}</Script>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LenisProvider>{children}</LenisProvider>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
