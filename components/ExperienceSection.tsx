"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

const KPI_DATA = [
  {
    value: 230,
    prefix: "+",
    label: "Sites conçus & réalisés",
    description: "De la landing page au design system complet",
    index: "001",
  },
  {
    value: 16,
    prefix: "",
    suffix: " ans",
    label: "D'expérience en design web",
    description: "Depuis les débuts du web responsive jusqu'à l'IA",
    index: "002",
  },
  {
    value: null,
    text: "0 → prod",
    label: "En quelques jours",
    description: "Du brief initial à la mise en ligne opérationnelle",
    index: "003",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    const counters = countersRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            counters.forEach((el, i) => {
              if (!el) return;
              const kpi = KPI_DATA[i];
              if (kpi.value === null) return;
              gsap.fromTo(
                el,
                { innerText: "0" },
                {
                  innerText: kpi.value,
                  duration: 2,
                  snap: { innerText: 1 },
                  ease: "power2.out",
                }
              );
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              En chiffres
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl text-foreground uppercase leading-none">
              Mon
              <br />
              <span className="text-outline">expérience</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed">
            Une approche pragmatique du design : aller à l&apos;essentiel,
            livrer vite, et produire des interfaces utiles.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {KPI_DATA.map((kpi, i) => (
            <div
              key={kpi.index}
              className="group relative border border-foreground/[0.08] bg-foreground/[0.02] p-8 rounded-sm hover:border-[rgba(218,119,87,0.3)] hover:bg-[rgba(218,119,87,0.03)] transition-all duration-500"
            >
              <span className="font-mono text-[9px] text-foreground/25 uppercase tracking-widest block mb-6">
                {kpi.index} {"//"} {kpi.label}
              </span>

              <div className="mb-4">
                {kpi.value !== null ? (
                  <div className="font-sans font-bold text-foreground leading-none" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                    {kpi.prefix}
                    <span ref={(el) => { countersRef.current[i] = el; }}>
                      {kpi.value}
                    </span>
                    {kpi.suffix}
                  </div>
                ) : (
                  <div className="font-sans font-bold text-[#DA7757] leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                    {kpi.text}
                  </div>
                )}
              </div>

              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {kpi.description}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#DA7757] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Logo Cloud */}
        <div>
          <p className="font-mono text-xs text-foreground/25 uppercase tracking-[0.2em] text-center mb-8">
            Outils & environnements maîtrisés
          </p>
          <LogoCloud />
        </div>
      </div>
    </section>
  );
}
