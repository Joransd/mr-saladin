"use client";

import { InteractiveTravelCard } from "@/components/ui/3d-card";

const PROJECTS = [
  {
    title: "Le Jardin des Saveurs",
    subtitle: "Design & Prototype IA",
    imageUrl: "/images/restaurant.png",
    actionText: "Voir le projet",
    href: "/jardin-des-saveurs/index.html",
    context: "Restaurant — Design & Prototype IA",
  },
  {
    title: "Charpentier Couvreur",
    subtitle: "Design & Prototype IA",
    imageUrl: "/images/charpente.png",
    actionText: "Voir le projet",
    href: "/charpentier-couvreur/index.html",
    context: "Artisan — Design & Prototype IA",
  },
  {
    title: "Aline Jaulin",
    subtitle: "Design & WordPress",
    imageUrl: "/images/alinejaulin.png",
    actionText: "Voir le site",
    href: "https://alinejaulin.fr/",
    context: "Art-thérapeute — Design & WordPress",
  },
  {
    title: "Teritori",
    subtitle: "UI Design application Web3",
    imageUrl: "/images/teritori.png",
    actionText: "Voir le projet",
    href: undefined,
    context: "Web3 — UI Design application",
  },
  {
    title: "Wintive",
    subtitle: "Landing page",
    imageUrl: "/images/wintive.png",
    actionText: "Voir le site",
    href: "https://www.wintive.com/",
    context: "SaaS — Landing page",
  },
  {
    title: "With Exxa",
    subtitle: "Landing page",
    imageUrl: "/images/withexxa.png",
    actionText: "Voir le projet",
    href: undefined,
    context: "Startup — Landing page",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              Projets sélectionnés
            </span>
            <h2
              className="font-sans font-bold uppercase leading-none text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Mes travaux
              <br />
              <span className="text-outline">récents</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-[rgba(255,255,255,0.4)] max-w-sm leading-relaxed">
            Une sélection de projets récents, du design à l&apos;intégration, avec
            une attention particulière portée à la clarté et à l&apos;efficacité.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{ perspective: "1200px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {PROJECTS.map((project) => (
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
                <span className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] uppercase tracking-wider">
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
          <p className="font-mono text-sm text-[rgba(255,255,255,0.3)] mb-6">
            Vous avez un projet en tête ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-[rgba(255,255,255,0.15)] text-white font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:border-[#DA7757] hover:text-[#DA7757] transition-colors duration-300"
          >
            Parlons-en
          </a>
        </div>
      </div>
    </section>
  );
}
