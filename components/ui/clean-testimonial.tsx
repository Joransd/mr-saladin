"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import NextImage from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const AVATARS = [
  "https://api.dicebear.com/7.x/initials/svg?seed=NB&backgroundColor=2a2a2a&textColor=DA7757",
  "https://api.dicebear.com/7.x/initials/svg?seed=LR&backgroundColor=2a2a2a&textColor=DA7757",
  "https://api.dicebear.com/7.x/initials/svg?seed=MT&backgroundColor=2a2a2a&textColor=DA7757",
  "https://api.dicebear.com/7.x/initials/svg?seed=AL&backgroundColor=2a2a2a&textColor=DA7757",
  "https://api.dicebear.com/7.x/initials/svg?seed=AJ&backgroundColor=2a2a2a&textColor=DA7757",
]

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

const AUTOPLAY_DELAY = 6000

export function Testimonial() {
  const { t } = useLanguage()
  const testimonials = t.testimonials.items.map((item, i) => ({
    ...item,
    avatar: AVATARS[i],
  }))

  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  usePreloadImages(AVATARS)

  useEffect(() => {
    if (isHovered) return
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTOPLAY_DELAY)
    return () => clearTimeout(timer)
  }, [activeIndex, isHovered, testimonials.length])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeIndex]

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl pt-24 pb-24 px-8"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(false)}
      onClick={handleNext}
    >
      {/* Custom magnetic cursor */}
      <motion.div
        className="pointer-events-none absolute z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-foreground flex items-center justify-center"
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-background text-xs font-mono tracking-wider uppercase"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.testimonials.next}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Floating index indicator */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-foreground"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews */}
      <motion.div
        className="absolute top-8 left-8 flex -space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.button
            key={i}
            onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
            className="relative w-8 h-8 rounded-full overflow-hidden focus:outline-none"
            animate={{
              opacity: i === activeIndex ? 1 : 0.35,
              zIndex: i === activeIndex ? 10 : testimonials.length - i,
              filter: i === activeIndex ? "grayscale(0)" : "grayscale(1)",
              boxShadow: i === activeIndex
                ? "0 0 0 2px #DA7757, 0 0 8px rgba(218,119,87,0.4)"
                : "0 0 0 2px var(--background)",
            }}
            whileHover={{
              opacity: i === activeIndex ? 1 : 0.7,
              zIndex: 20,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ cursor: "none" }}
          >
            <NextImage src={t.avatar} alt={t.author} width={32} height={32} className="w-full h-full object-cover" unoptimized />
          </motion.button>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-2xl font-sans font-normal leading-relaxed tracking-tight text-foreground"
          >
            <SplitText text={currentTestimonial.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author */}
        <motion.div className="mt-12 relative" layout>
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute -inset-1.5 rounded-full border border-accent/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar}
                  src={t.avatar}
                  alt={t.author}
                  className="absolute inset-0 w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-accent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                />
                <span className="block text-sm font-sans font-bold text-foreground tracking-wide uppercase">
                  {currentTestimonial.author}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-widest">
                  {currentTestimonial.role} — {currentTestimonial.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-16 h-px bg-border relative overflow-hidden">
          <motion.div
            key={activeIndex}
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
          />
        </div>
      </div>

      {/* Hint navigation */}
      <motion.div
        className="absolute bottom-4 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="hidden md:block text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
          {t.testimonials.clickDesktop}
        </span>
        <span className="block md:hidden text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
          {t.testimonials.clickMobile}
        </span>
      </motion.div>
    </div>
  )
}
