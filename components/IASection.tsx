"use client";

import BentoCards from "@/components/ui/ruixen-bento-cards";
import { useLanguage } from "@/contexts/LanguageContext";

export function IASection() {
  const { t } = useLanguage();

  return (
    <section id="ia" className="py-24 bg-background overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              {t.ia.label}
            </span>
            <h2 className="font-sans font-bold uppercase leading-none text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}>
              {t.ia.heading1}
              <br />
              {t.ia.heading2}
              <br />
              <span className="text-[#DA7757]">{t.ia.heading3}</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed md:pb-2">
            {t.ia.description}
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <BentoCards cards={[...t.ia.cards]} />

      {/* Punchline */}
      <div className="max-w-5xl mx-auto px-6 mt-4">
        <div className="border-t border-foreground/[0.06] pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans font-bold text-2xl md:text-3xl text-foreground max-w-lg leading-tight">
            <span className="text-[#DA7757]">
              {t.ia.punchline}
            </span>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#DA7757]" />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              {t.ia.punchlineLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
