"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FallingPattern } from "@/components/ui/falling-pattern";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-animate]", {
        filter: "blur(20px)",
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1.4,
        ease: "expo.out",
        clearProps: "filter",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden flex items-center"
    >
      {/* Background */}
      <FallingPattern
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#020202_100%)]"
        color="#DA7757"
        backgroundColor="#020202"
        duration={120}
        blurIntensity="0.8em"
      />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(218,119,87,0.07),transparent)]" />

      {/* Logo — centré en haut */}
      <div
        data-animate
        className="absolute top-8 right-8 z-20"
      >
        <Image
          src="/logo.svg"
          alt="Joran Saladin"
          width={56}
          height={28}
          className="brightness-0 invert opacity-70"
          priority
        />
      </div>

      {/* Content — aligné à gauche */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-start text-left pl-12 md:pl-20 max-w-5xl"
      >
        {/* Eyebrow */}
        <div data-animate className="flex items-center gap-3 mb-8">
          <div className="relative w-2 h-2 bg-[#DA7757] rounded-full">
            <div className="absolute inset-0 bg-[#DA7757] rounded-full animate-ping opacity-40" />
          </div>
          <span className="font-mono text-[11px] font-bold text-[rgba(255,255,255,0.5)] tracking-[0.25em] uppercase">
            UI/Web Designer — Joran Saladin
          </span>
        </div>

        {/* Main heading */}
        <h1
          data-animate
          className="font-sans font-bold uppercase leading-[0.9] tracking-tight text-white mb-8"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}
        >
          Concevoir & développer
          <br />
          des interfaces web{" "}
          <span className="text-outline">rapides,</span>
          <span className="text-[#DA7757]"> claires</span>
        </h1>

        {/* Subtitle */}
        <p
          data-animate
          className="font-mono text-base md:text-lg text-[rgba(255,255,255,0.45)] max-w-2xl leading-relaxed mb-12"
        >
          J&apos;aide les entreprises à transformer leurs idées en interfaces claires,
          rapides et efficaces — du design jusqu&apos;à l&apos;intégration frontend.
        </p>

        {/* CTAs */}
        <div data-animate className="flex flex-wrap items-center justify-start gap-4">
          <Link
            href="#portfolio"
            className="group flex items-center gap-3 bg-[#DA7757] text-[#020202] font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors duration-300"
          >
            <span>Voir mes projets</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-3 border border-[rgba(255,255,255,0.2)] text-white font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:border-[#DA7757] hover:text-[#DA7757] transition-colors duration-300"
          >
            Me contacter
          </Link>
        </div>
      </div>

      {/* Scroll indicator — centré en bas */}
      <div
        data-animate
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent" />
      </div>
    </section>
  );
}
