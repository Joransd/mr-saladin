"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLanguage();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const showSidebar = isDesktop && !scrolled;
  const showBurger = !isDesktop || scrolled;
  const isDark = theme === "dark";

  const NAV_ITEMS = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.ia, href: "#ia" },
    { label: t.nav.competences, href: "#competences" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const navItemsWithClose = NAV_ITEMS.map((item) => ({
    ...item,
    onClick: () => setMenuOpen(false),
  }));

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <>
      {/* ── SIDEBAR (desktop only, top of page) ── */}
      <AnimatePresence>
        {showSidebar && (
          <motion.nav
            key="sidebar"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed right-0 top-0 h-screen w-64 z-40 flex flex-col items-end justify-between py-10 pr-8"
          >
            <div />
            <MenuVertical menuItems={navItemsWithClose} color="#DA7757" skew={-3} align="right" />
            <p className="font-mono text-xs text-muted-foreground">
              © 2025 Joran Saladin
            </p>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── LANG TOGGLE — toujours visible ── */}
      <AnimatePresence>
        {!menuOpen && mounted && (
          <motion.button
            key="lang-toggle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={toggleLang}
            aria-label="Switch language"
            className={`fixed top-4 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground hover:border-accent hover:text-accent transition-colors duration-300 font-mono text-[10px] font-bold tracking-wider ${showBurger ? "right-32" : "right-[4.5rem]"}`}
          >
            {lang === "fr" ? "EN" : "FR"}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── THEME TOGGLE — toujours visible ── */}
      <AnimatePresence>
        {!menuOpen && mounted && (
          <motion.button
            key="theme-toggle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className={`fixed top-4 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground hover:border-accent hover:text-accent transition-colors duration-300 ${showBurger ? "right-[4.5rem]" : "right-4"}`}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── BURGER — visible quand sidebar masquée ── */}
      <AnimatePresence>
        {showBurger && !menuOpen && (
          <motion.button
            key="burger"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="fixed top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── FULL SCREEN OVERLAY (toujours dark) ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#020202]/97 backdrop-blur-xl flex flex-col items-end justify-center pr-10"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-[#DA7757] transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mb-12"
            >
              <Image src="/logo.svg" alt="JS Logo" width={56} height={28} className="brightness-0 invert opacity-60" />
            </motion.div>

            {/* Nav items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <MenuVertical
                menuItems={navItemsWithClose}
                color="#DA7757"
                skew={-5}
                align="right"
                textClass="text-white"
              />
            </motion.div>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute bottom-8 right-10 font-mono text-xs text-[rgba(255,255,255,0.25)]"
            >
              © 2025 Joran Saladin — UI/Web Designer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
