"use client";

import { CategoryList } from "@/components/ui/category-list";
import { Palette, MousePointer2, Code2, LayoutGrid, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CATEGORY_ICONS = [
  <Palette key="ui" className="w-8 h-8" />,
  <MousePointer2 key="ux" className="w-8 h-8" />,
  <Code2 key="fe" className="w-8 h-8" />,
  <LayoutGrid key="ds" className="w-8 h-8" />,
  <Wrench key="tools" className="w-8 h-8" />,
];

const CATEGORY_IDS = [1, 2, 3, 4, 5];
const CATEGORY_FEATURED = [true, false, false, false, false];
const CATEGORY_HREFS: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
  "/design-system",
  undefined,
];

export function CompetencesSection() {
  const { t } = useLanguage();

  const categories = t.competences.categories.map((cat, i) => ({
    id: CATEGORY_IDS[i],
    title: cat.title,
    subtitle: cat.subtitle,
    icon: CATEGORY_ICONS[i],
    featured: CATEGORY_FEATURED[i],
    href: CATEGORY_HREFS[i],
  }));

  return (
    <section id="competences" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="px-6 mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
              {t.competences.label}
            </span>
            <h2 className="font-sans font-bold text-5xl md:text-6xl text-foreground uppercase leading-none">
              {t.competences.heading1}
              <br />
              <span className="text-outline">{t.competences.heading2}</span>
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm leading-relaxed">
            {t.competences.description}
          </p>
        </div>

        <CategoryList
          title=""
          categories={categories}
          className="py-0"
        />
      </div>
    </section>
  );
}
