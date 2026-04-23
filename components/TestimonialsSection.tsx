"use client";

import { Testimonial } from "@/components/ui/clean-testimonial";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-4">
          <span className="font-mono text-[11px] text-[#DA7757] uppercase tracking-[0.25em] mb-3 block">
            Ce qu&apos;ils disent
          </span>
          <h2
            className="font-sans font-bold uppercase leading-none text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Ils m&apos;ont fait
            <br />
            <span className="text-outline">confiance</span>
          </h2>
        </div>

        <Testimonial />
      </div>
    </section>
  );
}
