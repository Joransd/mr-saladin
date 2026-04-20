"use client";

import BentoCards from "@/components/ui/ruixen-bento-cards";
import type { BentoCardContent } from "@/components/ui/ruixen-bento-cards";

const IA_CARDS: BentoCardContent[] = [
  {
    title: "Prototypage rapide d'interfaces",
    description:
      "Je génère des maquettes fonctionnelles en quelques heures au lieu de jours, et itère à une vitesse impossible sans IA.",
  },
  {
    title: "Génération de code frontend",
    description:
      "Composants React, animations GSAP, intégrations complexes — structurés et produits avec l'IA comme copilote.",
  },
  {
    title: "Réduction du time-to-market",
    description:
      "Du brief à la mise en ligne en quelques jours plutôt que semaines.",
  },
  {
    title: "Itérations continues",
    description:
      "Plus de cycles de feedback, plus de variantes testées, interfaces plus abouties.",
  },
  {
    title: "Exploration de concepts UI plus rapidement",
    description:
      "L'IA me permet d'explorer 10x plus de directions créatives avant de converger vers la meilleure solution pour votre produit. Moins de temps à tâtonner, plus de temps à concevoir.",
  },
];

export function IASection() {
  return (
    <section id="ia" className="py-24 bg-[#020202] overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              Différenciation
            </span>
            <h2 className="font-sans font-bold uppercase leading-none text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}>
              J&apos;intègre l&apos;IA
              <br />
              pour concevoir
              <br />
              <span className="text-[#DA7757]">plus vite et mieux</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-[rgba(255,255,255,0.45)] max-w-sm leading-relaxed md:pb-2">
            J&apos;utilise des outils comme Claude et Antigravity pour accélérer les
            phases de conception, de prototypage et de développement frontend.
            Résultat : des cycles de production plus courts, plus d&apos;itérations,
            et des interfaces plus abouties.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <BentoCards cards={IA_CARDS} />

      {/* Punchline */}
      <div className="max-w-5xl mx-auto px-6 mt-4">
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans font-bold text-2xl md:text-3xl text-white max-w-lg leading-tight">
            &ldquo;L&apos;IA ne remplace pas le design —{" "}
            <span className="text-[#DA7757]">
              elle amplifie ma capacité à produire des solutions efficaces.
            </span>
            &rdquo;
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#DA7757]" />
            <span className="font-mono text-xs text-[rgba(255,255,255,0.35)] uppercase tracking-widest">
              Approche IA-first
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
