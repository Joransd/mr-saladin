"use client";

import { CategoryList } from "@/components/ui/category-list";
import type { Category } from "@/components/ui/category-list";
import { Palette, MousePointer2, Code2, LayoutGrid, Wrench } from "lucide-react";

const COMPETENCES: Category[] = [
  {
    id: 1,
    title: "UI Design",
    featured: true,
    subtitle:
      "Figma · Framer · Adobe XD · Webflow · Design orienté conversion · Hiérarchie visuelle · Mobile & Web",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "UX Design",
    subtitle:
      "Wireframing · Prototypage interactif · User journey mapping · Tests utilisateur · Heuristiques Nielsen",
    icon: <MousePointer2 className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Frontend",
    subtitle:
      "Next.js · React · TypeScript · TailwindCSS · GSAP · Framer Motion · HTML/CSS/JS · Optimisation performance",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Design Systems",
    subtitle:
      "Création de composants · Tokens de design · Documentation · Architecture scalable · Storybook",
    icon: <LayoutGrid className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Outils & environnement",
    subtitle:
      "Figma · Claude Code · Antigravity · Stitch · GitHub · WordPress · Vercel · Cursor",
    icon: <Wrench className="w-8 h-8" />,
  },
];

export function CompetencesSection() {
  return (
    <section id="competences" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="px-6 mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              Expertise
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl text-foreground uppercase leading-none">
              Mes
              <br />
              <span className="text-outline">compétences</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed">
            Capable de concevoir, prototyper et intégrer — sans dépendre d&apos;une
            chaîne de production complexe.
          </p>
        </div>

        <CategoryList
          title=""
          categories={COMPETENCES}
          className="py-0"
        />
      </div>
    </section>
  );
}
