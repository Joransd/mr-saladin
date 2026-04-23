"use client";

import { InteractiveTravelCard } from "@/components/ui/3d-card";
import { useLanguage } from "@/contexts/LanguageContext";

const PROJECTS_STATIC = [
  {
    title: "Le Jardin des Saveurs",
    subtitle: "Design & Prototype IA",
    imageUrl: "/images/restaurant.png",
    href: "/jardin-des-saveurs/index.html",
  },
  {
    title: "Charpentier Couvreur",
    subtitle: "Design & Prototype IA",
    imageUrl: "/images/charpente.png",
    href: "/charpentier-couvreur/index.html",
  },
  {
    title: "Aline Jaulin",
    subtitle: "Design & WordPress",
    imageUrl: "/images/alinejaulin.png",
    href: "https://alinejaulin.fr/",
  },
  {
    title: "Teritori",
    subtitle: "UI Design application Web3",
    imageUrl: "/images/teritori.png",
    href: undefined,
  },
  {
    title: "Wintive",
    subtitle: "Landing page",
    imageUrl: "/images/wintive.png",
    href: "https://www.wintive.com/",
  },
  {
    title: "With Exxa",
    subtitle: "Landing page",
    imageUrl: "/images/withexxa.png",
    href: undefined,
  },
];

export function PortfolioSection() {
  const { t } = useLanguage();

  const projects = PROJECTS_STATIC.map((p, i) => ({
    ...p,
    actionText: t.portfolio.projects[i].actionText,
    context: t.portfolio.projects[i].context,
  }));

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              {t.portfolio.label}
            </span>
            <h2
              className="font-sans font-bold uppercase leading-none text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              {t.portfolio.heading1}
              <br />
              <span className="text-outline">{t.portfolio.heading2}</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed">
            {t.portfolio.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{ perspective: "1200px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full flex flex-col items-center gap-3"
            >
              <InteractiveTravelCard
                title={project.title}
                subtitle={project.subtitle}
                imageUrl={project.imageUrl}
                actionText={project.actionText}
                href={project.href}
              />
              <div className="w-80 flex justify-between">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  {project.context}
                </span>
                {project.href && (
                  <span className="font-mono text-[10px] text-[rgba(218,119,87,0.6)]">

                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-mono text-sm text-muted-foreground mb-6">
            {t.portfolio.cta}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-border text-foreground font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:border-[#DA7757] hover:text-[#DA7757] transition-colors duration-300"
          >
            {t.portfolio.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
