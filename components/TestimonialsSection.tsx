"use client";

import { Testimonial } from "@/components/ui/clean-testimonial";
import { useLanguage } from "@/contexts/LanguageContext";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-4">
          <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
            {t.testimonials.label}
          </span>
          <h2
            className="font-sans font-bold uppercase leading-none text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {t.testimonials.heading1}
            <br />
            <span className="text-outline">{t.testimonials.heading2}</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <Testimonial />
        </div>
      </div>
    </section>
  );
}
