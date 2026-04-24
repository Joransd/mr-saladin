"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowLeft, Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

// ── Static data (language-independent) ───────────────────────────────────────
const DARK_TOKENS = [
  { cssVar: "--background",       hex: "#020202",                name: "Background",  usage: "Page background" },
  { cssVar: "--foreground",       hex: "#ffffff",                name: "Foreground",  usage: "Primary text" },
  { cssVar: "--accent",           hex: "#DA7757",                name: "Accent",      usage: "CTAs, highlights" },
  { cssVar: "--accent-dim",       hex: "rgba(218,119,87,0.15)",  name: "Accent Dim",  usage: "Accent backgrounds" },
  { cssVar: "--border",           hex: "rgba(255,255,255,0.10)", name: "Border",      usage: "Dividers, outlines" },
  { cssVar: "--card-bg",          hex: "rgba(255,255,255,0.04)", name: "Card BG",     usage: "Glass panels" },
  { cssVar: "--muted-foreground", hex: "rgba(255,255,255,0.40)", name: "Muted",       usage: "Labels, captions" },
  { cssVar: "--secondary",        hex: "rgba(255,255,255,0.06)", name: "Secondary",   usage: "Subtle surfaces" },
];

const LIGHT_TOKENS = [
  { cssVar: "--background",       hex: "#f5f3ef",                name: "Background",  usage: "Page background" },
  { cssVar: "--foreground",       hex: "#171410",                name: "Foreground",  usage: "Primary text" },
  { cssVar: "--accent",           hex: "#DA7757",                name: "Accent",      usage: "CTAs, highlights" },
  { cssVar: "--accent-dim",       hex: "rgba(218,119,87,0.12)",  name: "Accent Dim",  usage: "Accent backgrounds" },
  { cssVar: "--border",           hex: "rgba(23,20,16,0.12)",    name: "Border",      usage: "Dividers, outlines" },
  { cssVar: "--card-bg",          hex: "rgba(23,20,16,0.04)",    name: "Card BG",     usage: "Glass panels" },
  { cssVar: "--muted-foreground", hex: "rgba(23,20,16,0.45)",    name: "Muted",       usage: "Labels, captions" },
  { cssVar: "--secondary",        hex: "rgba(23,20,16,0.05)",    name: "Secondary",   usage: "Subtle surfaces" },
];

const TYPE_SCALE = [
  { size: "clamp(3rem,8vw,8rem)",   weight: "700", family: "Oswald",         label: "Display",   sample: "Design System" },
  { size: "clamp(2rem,5vw,5rem)",   weight: "700", family: "Oswald",         label: "Heading 1", sample: "Visual Language" },
  { size: "clamp(1.5rem,3vw,3rem)", weight: "700", family: "Oswald",         label: "Heading 2", sample: "Design Tokens" },
  { size: "2rem",                   weight: "700", family: "Oswald",         label: "Heading 3", sample: "Components" },
  { size: "1.5rem",                 weight: "600", family: "Oswald",         label: "Heading 4", sample: "UI Patterns" },
  { size: "1rem",                   weight: "400", family: "JetBrains Mono", label: "Body",      sample: "The quick brown fox jumps over the lazy dog." },
  { size: "0.875rem",               weight: "400", family: "JetBrains Mono", label: "Small",     sample: "Caption · Label · Metadata" },
  { size: "0.6875rem",              weight: "700", family: "JetBrains Mono", label: "Eyebrow",   sample: "UPPERCASE · TRACKING · 0.25EM" },
];

const SPACING = [
  { label: "1",  px: 4,   rem: "0.25rem" },
  { label: "2",  px: 8,   rem: "0.5rem" },
  { label: "3",  px: 12,  rem: "0.75rem" },
  { label: "4",  px: 16,  rem: "1rem" },
  { label: "6",  px: 24,  rem: "1.5rem" },
  { label: "8",  px: 32,  rem: "2rem" },
  { label: "12", px: 48,  rem: "3rem" },
  { label: "16", px: 64,  rem: "4rem" },
  { label: "24", px: 96,  rem: "6rem" },
  { label: "32", px: 128, rem: "8rem" },
];

const MOTION_TOKENS = [
  { name: "Fast",    duration: "0.2s",  easing: "easeOut",                   usage: "Micro-interactions, icon swaps",   ms: 200 },
  { name: "Default", duration: "0.3s",  easing: "easeOut",                   usage: "Hover states, transitions",        ms: 300 },
  { name: "Smooth",  duration: "0.5s",  easing: "cubic-bezier(.76,0,.24,1)", usage: "Panel slides, overlays",           ms: 500 },
  { name: "Reveal",  duration: "0.7s",  easing: "cubic-bezier(.22,1,.36,1)", usage: "Scroll-triggered reveals",         ms: 700 },
  { name: "Stagger", duration: "0.15s", easing: "easeOut",                   usage: "Stagger delay between items",      ms: 150 },
  { name: "Spring",  duration: "—",     easing: "damping:15 stiffness:150",  usage: "3D card tilt (Framer Motion)",     ms: 400 },
];

const BORDER_TOKENS = [
  { name: "Default",    value: "1px solid var(--border)",        cls: "border border-border" },
  { name: "Accent",     value: "1px solid #DA7757",              cls: "border border-[#DA7757]" },
  { name: "Accent Dim", value: "1px solid rgba(218,119,87,0.4)", cls: "border border-[rgba(218,119,87,0.4)]" },
  { name: "Foreground", value: "1px solid var(--foreground)",    cls: "border border-foreground" },
];

const SECTION_IDS = ["colors", "typography", "spacing", "components", "motion", "glass", "borders", "logo"];

// ── Helpers ───────────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ index, label, title, outline }: {
  index: string; label: string; title: string; outline?: string;
}) {
  return (
    <FadeUp>
      <div className="mb-16">
        <span className="font-mono text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em] block mb-1">{index}</span>
        <span className="font-mono text-[11px] text-accent uppercase tracking-[0.25em] mb-4 block">{label}</span>
        <h2 className="font-sans font-bold uppercase leading-[0.85] text-foreground" style={{ fontSize: "clamp(2.5rem,5vw,5rem)" }}>
          {title}{outline && <><br /><span className="text-outline">{outline}</span></>}
        </h2>
      </div>
    </FadeUp>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [value]);
  return (
    <button onClick={copy}
      className="p-1.5 border border-border hover:border-accent/40 text-muted-foreground hover:text-accent transition-colors duration-200"
      title={`Copy ${value}`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
    </button>
  );
}

function ColorSwatch({ token }: { token: typeof DARK_TOKENS[0] }) {
  return (
    <FadeUp>
      <div className="glass-panel overflow-hidden">
        <div className="h-20 w-full" style={{ background: token.hex }} />
        <div className="p-4 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest">{token.name}</span>
            <CopyButton value={`var(${token.cssVar})`} />
          </div>
          <p className="font-mono text-[11px] text-muted-foreground truncate">{token.cssVar}</p>
          <p className="font-mono text-[10px] text-muted-foreground/60 truncate">{token.hex}</p>
          {token.usage && (
            <p className="font-mono text-[10px] text-muted-foreground/50 pt-1 border-t border-border">{token.usage}</p>
          )}
        </div>
      </div>
    </FadeUp>
  );
}

// ── Section rail ──────────────────────────────────────────────────────────────
function SectionRail({ activeSection, labels, backLabel }: {
  activeSection: string;
  labels: readonly string[];
  backLabel: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-0 h-screen w-12 hidden xl:flex flex-col items-center z-30 bg-background border-r border-border">
      <Link href="/"
        className="mt-8 mb-6 w-8 h-8 flex items-center justify-center text-muted-foreground/40 hover:text-accent transition-colors duration-200"
        title={backLabel}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
      </Link>

      <div className="w-px flex-1 bg-border relative" style={{ maxHeight: "calc(100% - 180px)" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-around py-2">
          {SECTION_IDS.map((id, i) => (
            <a key={id} href={`#${id}`}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.span
                className="absolute -left-[3px] w-[7px] h-[7px] rounded-full border-2 border-background"
                animate={{
                  backgroundColor: activeSection === id ? "#DA7757" : "rgba(255,255,255,0.15)",
                  scale: activeSection === id ? 1 : 0.7,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="font-sans font-bold select-none cursor-pointer"
                style={{ fontSize: "11px", lineHeight: 1 }}
                animate={{ color: activeSection === id ? "#DA7757" : "rgba(255,255,255,0.18)" }}
                transition={{ duration: 0.2 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>

              <AnimatePresence>
                {hovered === id && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-foreground bg-background border border-border px-2.5 py-1 pointer-events-none z-50"
                    style={{ boxShadow: "4px 4px 0 rgba(218,119,87,0.15)" }}
                  >
                    {labels[i]}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>
      </div>

      <p className="mb-6 mt-4 font-mono text-[9px] text-muted-foreground/20 uppercase tracking-widest"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        v1.0
      </p>
    </aside>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function DesignSystemPage() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const ds = t.designSystem;

  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("colors");
  const [colorTab, setColorTab] = useState<"dark" | "light">("dark");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted) setColorTab(theme === "light" ? "light" : "dark");
  }, [theme, mounted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Theme-aware values (safe after mount)
  const isLight = mounted && theme === "light";
  const heroBg = isLight ? "#f5f3ef" : "#020202";
  const heroLogoClass = isLight ? "brightness-0 opacity-70" : "brightness-0 invert opacity-70";
  const heroContextLine = isLight ? ds.logo.heroContextLight : ds.logo.heroContextDark;

  const colorTokens = colorTab === "dark" ? DARK_TOKENS : LIGHT_TOKENS;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SectionRail activeSection={activeSection} labels={ds.sections} backLabel={ds.back} />

      <main className="xl:pl-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-32">

          {/* ── Hero ─────────────────────────────────────────────────── */}
          <section id="ds-hero" className="pt-8 pb-16 border-b border-border">
            <FadeUp>
              <span className="font-mono text-[11px] text-accent uppercase tracking-[0.25em] block mb-4">
                {mounted ? `v1.0 — ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}` : "v1.0"}
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-sans font-bold uppercase leading-[0.85] text-foreground" style={{ fontSize: "clamp(3.5rem,10vw,11rem)" }}>
                Design<br /><span className="text-outline">System</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-mono text-sm text-muted-foreground max-w-md mt-8 leading-relaxed">{ds.heroSubtitle}</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Next.js 14", "Tailwind CSS v4", "Framer Motion", "GSAP"].map((tag) => (
                  <span key={tag} className="font-mono text-[10px] border border-border px-3 py-1.5 text-muted-foreground uppercase tracking-wider">{tag}</span>
                ))}
                <span className="font-mono text-[10px] border border-accent/40 px-3 py-1.5 text-accent uppercase tracking-wider">v1.0.0</span>
              </div>
            </FadeUp>
          </section>

          {/* ── Colors ───────────────────────────────────────────────── */}
          <section id="colors" className="scroll-mt-8">
            <SectionHeader index="01" label={ds.colors.label} title={ds.colors.title} outline={ds.colors.outline} />
            <FadeUp>
              <div className="flex gap-1 mb-10 border border-border p-1 w-fit">
                {(["dark", "light"] as const).map((tab) => (
                  <button key={tab} onClick={() => setColorTab(tab)}
                    className={cn("font-mono text-[10px] uppercase tracking-widest px-4 py-2 transition-all duration-200",
                      colorTab === tab ? "bg-accent text-background" : "text-muted-foreground hover:text-foreground"
                    )}>
                    {tab === "dark" ? ds.darkTab : ds.lightTab}
                  </button>
                ))}
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {colorTokens.map((token) => <ColorSwatch key={token.cssVar} token={token} />)}
            </div>
          </section>

          {/* ── Typography ───────────────────────────────────────────── */}
          <section id="typography" className="scroll-mt-8">
            <SectionHeader index="02" label={ds.typography.label} title={ds.typography.title} outline={ds.typography.outline} />
            <div className="space-y-0">
              {TYPE_SCALE.map((entry, i) => (
                <FadeUp key={entry.label} delay={i * 0.05}>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 py-6 border-b border-border">
                    <div className="md:w-28 shrink-0">
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">{entry.label}</span>
                      <span className="font-mono text-[10px] text-muted-foreground/50 block mt-1">{entry.family}</span>
                      <span className="font-mono text-[10px] text-muted-foreground/40 block">{entry.size} / {entry.weight}</span>
                    </div>
                    <p className="leading-[1.1] text-foreground" style={{
                      fontSize: entry.size, fontWeight: entry.weight,
                      fontFamily: entry.family === "Oswald" ? "var(--font-oswald)" : "var(--font-jetbrains)",
                      textTransform: entry.family === "Oswald" ? "uppercase" : undefined,
                    }}>
                      {entry.sample}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2}>
              <div className="grid md:grid-cols-2 gap-4 mt-12">
                {[
                  { name: "Oswald",         role: ds.typography.role1, weights: "400 · 500 · 600 · 700", var: "--font-oswald" },
                  { name: "JetBrains Mono", role: ds.typography.role2, weights: "400 · 500 · 600 · 700", var: "--font-jetbrains" },
                ].map((font) => (
                  <div key={font.name} className="glass-panel p-6">
                    <p className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: `var(${font.var})`, textTransform: font.name === "Oswald" ? "uppercase" : undefined }}>{font.name}</p>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest">{font.role}</p>
                    <p className="font-mono text-[10px] text-muted-foreground mt-1">{font.weights}</p>
                    <p className="font-mono text-[10px] text-muted-foreground/50 mt-3 border-t border-border pt-3">var({font.var})</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* ── Spacing ──────────────────────────────────────────────── */}
          <section id="spacing" className="scroll-mt-8">
            <SectionHeader index="03" label={ds.spacing.label} title={ds.spacing.title} outline={ds.spacing.outline} />
            <div className="space-y-3">
              {SPACING.map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.04}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground/50 w-6 text-right shrink-0">{s.label}</span>
                    <div className="flex-1 min-w-0">
                      <div className="h-7 bg-accent/20 border border-accent/30 flex items-center justify-center"
                        style={{ width: `${(s.px / 128) * 100}%`, minWidth: "4px", maxWidth: "100%" }}>
                        <span className={cn("font-mono text-[9px] text-accent/70 px-1", s.px < 24 ? "hidden" : "")}>{s.px}px</span>
                      </div>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <span className="font-mono text-[10px] text-muted-foreground">{s.rem}</span>
                      <span className="font-mono text-[10px] text-muted-foreground/40">{s.px}px</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>

          {/* ── Components ───────────────────────────────────────────── */}
          <section id="components" className="scroll-mt-8">
            <SectionHeader index="04" label={ds.components.label} title={ds.components.title} />

            {/* Buttons */}
            <FadeUp>
              <div className="mb-16">
                <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">{ds.components.buttons}</p>
                <p className="font-mono text-[10px] text-muted-foreground/60 mb-6">{ds.components.buttonsNote}</p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <button className="font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full bg-accent text-background hover:bg-foreground hover:text-background transition-colors duration-300">Primary</button>
                  <button className="font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors duration-300">Secondary</button>
                  <button className="font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200">Ghost</button>
                  <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button disabled className="font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full bg-accent/20 text-accent/30 cursor-not-allowed">Disabled</button>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { label: "rounded-full", value: "9999px", note: ds.components.radii[0] },
                    { label: "rounded-sm",   value: "2px",    note: ds.components.radii[1] },
                    { label: "rounded-none", value: "0px",    note: ds.components.radii[2] },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-3 glass-panel px-4 py-3">
                      <div className="w-8 h-8 border border-accent/40 bg-accent/10 shrink-0" style={{ borderRadius: r.value }} />
                      <div>
                        <p className="font-mono text-[10px] text-foreground uppercase tracking-widest">{r.label}</p>
                        <p className="font-mono text-[10px] text-muted-foreground/60">{r.value} — {r.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Badges */}
            <FadeUp>
              <div className="mb-16">
                <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6">{ds.components.badges}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-accent text-background rounded-sm">Accent</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-border text-muted-foreground rounded-sm">Outline</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-secondary text-muted-foreground rounded-sm">Muted</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-foreground text-foreground rounded-sm">Solid</span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-accent/30 text-accent rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />Live
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Cards */}
            <FadeUp>
              <div className="mb-16">
                <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6">{ds.components.cards}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass-panel p-6">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Glass Panel</p>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{ds.components.cardGlassDesc}</p>
                  </div>
                  <div className="glass-panel p-6 border-accent/20">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">KPI Card</p>
                    <p className="font-sans font-bold text-4xl text-foreground uppercase">10+</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">Years of experience</p>
                  </div>
                  <div className="relative glass-panel p-6 overflow-hidden group hover:border-accent/40 transition-colors duration-300">
                    <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-4 h-0.5 bg-accent" />
                      <div className="absolute top-0 right-0 w-0.5 h-4 bg-accent" />
                    </div>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Feature Card</p>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{ds.components.cardFeatureDesc}</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Input */}
            <FadeUp>
              <div>
                <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6">{ds.components.inputs}</p>
                <div className="max-w-sm space-y-4">
                  <input type="text" placeholder="Your name"
                    className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200" />
                  <input type="email" placeholder="your@email.com"
                    className="w-full bg-transparent border border-accent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
                </div>
              </div>
            </FadeUp>
          </section>

          {/* ── Motion ───────────────────────────────────────────────── */}
          <section id="motion" className="scroll-mt-8">
            <SectionHeader index="05" label={ds.motion.label} title={ds.motion.title} outline={ds.motion.outline} />
            <div className="space-y-0">
              {MOTION_TOKENS.map((token, i) => (
                <FadeUp key={token.name} delay={i * 0.06}>
                  <div className="flex items-center gap-6 py-5 border-b border-border">
                    <div className="shrink-0 w-10 h-10 border border-border flex items-center justify-center overflow-hidden">
                      <motion.div className="w-4 h-4 bg-accent"
                        whileHover={{ scale: 1.4, rotate: 45, transition: { duration: token.ms / 1000, ease: "easeOut" } }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-bold text-sm uppercase text-foreground">{token.name}</p>
                      <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5 truncate">{token.usage}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-[11px] text-accent">{token.duration}</p>
                      <p className="font-mono text-[10px] text-muted-foreground/50 mt-0.5 max-w-[160px] text-right">{token.easing}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>

          {/* ── Glass ────────────────────────────────────────────────── */}
          <section id="glass" className="scroll-mt-8">
            <SectionHeader index="06" label={ds.glass.label} title={ds.glass.title} outline={ds.glass.outline} />
            <FadeUp>
              <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-4 left-4 w-8 h-8">
                  <div className="absolute top-0 left-0 w-5 h-0.5 bg-accent/60" />
                  <div className="absolute top-0 left-0 w-0.5 h-5 bg-accent/60" />
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-5 h-0.5 bg-accent/60" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-5 bg-accent/60" />
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">Preview</p>
                    <p className="font-sans font-bold text-2xl uppercase text-foreground mb-2">{ds.glass.previewTitle}</p>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{ds.glass.previewDesc}</p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <span className="font-mono text-[10px] border border-border px-2 py-1 text-muted-foreground">backdrop-blur-md</span>
                      <span className="font-mono text-[10px] border border-border px-2 py-1 text-muted-foreground">bg-opacity-4</span>
                      <span className="font-mono text-[10px] border border-border px-2 py-1 text-muted-foreground">border-opacity-10</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">CSS</p>
                    <pre className="font-mono text-[11px] text-muted-foreground leading-relaxed bg-background/50 p-4 border border-border overflow-x-auto">{`.glass-panel {
  background: var(--card-bg);
  /* rgba(255,255,255,0.04) */
  border: 1px solid var(--border);
  /* rgba(255,255,255,0.10) */
  backdrop-filter: blur(12px);
}`}</pre>
                  </div>
                </div>
              </div>
            </FadeUp>
          </section>

          {/* ── Borders ──────────────────────────────────────────────── */}
          <section id="borders" className="scroll-mt-8">
            <SectionHeader index="07" label={ds.borders.label} title={ds.borders.title} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {BORDER_TOKENS.map((b, i) => (
                <FadeUp key={b.name} delay={i * 0.08}>
                  <div className="space-y-3">
                    <div className={cn("h-16 bg-card", b.cls)} />
                    <div>
                      <p className="font-mono text-[10px] text-foreground uppercase tracking-widest">{b.name}</p>
                      <p className="font-mono text-[10px] text-muted-foreground/60 mt-1 break-all leading-relaxed">{b.value}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </section>

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <section id="logo" className="scroll-mt-8">
            <SectionHeader index="08" label={ds.logo.label} title={ds.logo.title} outline={ds.logo.outline} />

            {/* Live usages */}
            <FadeUp>
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6">{ds.logo.usagesTitle}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {/* Hero — theme-aware */}
                <div className="glass-panel overflow-hidden">
                  <div
                    className="h-32 flex items-center justify-start px-6 relative transition-colors duration-300"
                    style={{ background: heroBg }}
                  >
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: isLight ? "rgba(23,20,16,0.3)" : "rgba(255,255,255,0.3)" }}>
                        Hero — top left
                      </span>
                    </div>
                    <Image src="/logo.svg" alt="JS Logo" width={44} height={22} className={heroLogoClass} />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">{ds.logo.heroLabel}</p>
                    <p className="font-mono text-[10px] text-muted-foreground/70 leading-relaxed">{heroContextLine}</p>
                  </div>
                </div>

                {/* Nav overlay — always dark */}
                <div className="glass-panel overflow-hidden">
                  <div
                    className="h-32 flex items-center justify-center relative transition-colors duration-300"
                    style={{ background: isLight ? "#f5f3ef" : "rgba(2,2,2,0.97)" }}
                  >
                    <div className="absolute top-3 left-3">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest"
                        style={{ color: isLight ? "rgba(23,20,16,0.3)" : "rgba(255,255,255,0.3)" }}
                      >
                        Nav overlay — centered
                      </span>
                    </div>
                    <Image
                      src="/logo.svg"
                      alt="JS Logo"
                      width={56}
                      height={28}
                      className={isLight ? "brightness-0 opacity-60" : "brightness-0 invert opacity-60"}
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">{ds.logo.navLabel}</p>
                    <p className="font-mono text-[10px] text-muted-foreground/70 leading-relaxed whitespace-pre-line">{ds.logo.navContext}</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Rules */}
            <FadeUp>
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6">{ds.logo.rulesTitle}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {ds.logo.rules.map((item) => (
                  <div key={item.rule} className="glass-panel p-5">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">{item.rule}</p>
                    <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Specs */}
            <FadeUp>
              <div className="glass-panel p-8 relative overflow-hidden">
                <div className="absolute top-4 left-4 w-8 h-8">
                  <div className="absolute top-0 left-0 w-5 h-0.5 bg-accent/60" />
                  <div className="absolute top-0 left-0 w-0.5 h-5 bg-accent/60" />
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-5 h-0.5 bg-accent/60" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-5 bg-accent/60" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex items-center justify-center flex-1">
                    <Image src="/logo.svg" alt="JS Logo" width={160} height={80} className="brightness-0 invert opacity-70" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">{ds.logo.specsTitle}</p>
                    {ds.logo.specs.map(({ label, value }) => (
                      <div key={label} className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                        <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest shrink-0">{label}</span>
                        <span className="font-mono text-[11px] text-foreground text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </section>

          {/* ── Footer ───────────────────────────────────────────────── */}
          <FadeUp>
            <div className="border-t border-border pt-16 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="font-sans font-bold text-xl uppercase text-foreground">Design System</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-1">Joran Saladin · UI/Web Designer · v1.0.0</p>
              </div>
              <Link href="/"
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 border border-border hover:border-accent/40 px-4 py-3">
                <ArrowLeft className="w-3 h-3" />
                {ds.footer}
              </Link>
            </div>
          </FadeUp>

        </div>
      </main>
    </div>
  );
}
