"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useTheme } from "next-themes";

const ExperienceHeroCanvas = dynamic(
  () =>
    import("@/components/ui/experience-hero").then(
      (m) => m.ExperienceHeroCanvas
    ),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#020202] via-[#040d10] to-[#020202]" />
    ),
  }
);

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = !mounted || theme !== "light";

  useEffect(() => {
    if (!ctaRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      const dist = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
      );
      if (dist < 150) {
        gsap.to(ctaRef.current, {
          x: (e.clientX - (rect.left + rect.width / 2)) * 0.35,
          y: (e.clientY - (rect.top + rect.height / 2)) * 0.35,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(ctaRef.current, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Three.js Canvas Background */}
      <ExperienceHeroCanvas isLight={!isDark} />

      {/* Dark overlay for readability — dark mode only */}
      {isDark && <div className="absolute inset-0 z-[1] bg-background/50" />}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-16 text-center">
        {/* Status badge */}
        <div className="flex items-center gap-3 mb-10">
          <div className="relative w-2 h-2 bg-[#DA7757] rounded-full">
            <div className="absolute inset-0 bg-[#DA7757] rounded-full animate-ping opacity-40" />
          </div>
          <span className="font-mono text-[11px] font-bold text-muted-foreground tracking-[0.25em] uppercase">
            Disponible pour missions freelance & équipes produit
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-sans font-bold uppercase leading-none text-foreground mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
        >
          Parlons de
          <br />
          <span className="text-[#DA7757]">votre projet</span>
        </h2>

        {/* Description */}
        <p className="font-mono text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
          Que vous ayez besoin d&apos;un MVP, d&apos;une refonte complète ou d&apos;un design
          system — discutons de ce que je peux apporter à votre équipe.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            ref={ctaRef}
            className="flex items-center gap-3 border border-border text-foreground font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:border-[#DA7757] hover:text-[#DA7757] transition-colors duration-300"
            onClick={() =>
              window.open("mailto:joransaladin@gmail.com", "_blank")
            }
          >
            Envoyer un message
          </button>
        </div>

        {/* Info grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
          {[
            { label: "Disponibilité", value: "Immédiate" },
            { label: "Type de mission", value: "Freelance / CDI" },
            { label: "Localisation", value: "Remote / France" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-panel p-5 text-center rounded-sm"
            >
              <span className="font-mono text-[9px] text-foreground/25 uppercase tracking-widest block mb-2">
                {item.label}
              </span>
              <span className="font-sans font-semibold text-foreground text-sm">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-foreground/20 to-transparent" />
          <p className="font-mono text-[10px] text-foreground/25 uppercase tracking-widest">
            © 2025 Joran Saladin — UI/Web Designer Senior
          </p>
        </div>
      </div>
    </section>
  );
}
