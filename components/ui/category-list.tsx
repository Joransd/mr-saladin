"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
  href?: string;
}

export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full text-foreground p-8", className)}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(218,119,87,0.15)] mb-6 text-[#DA7757]">
              {headerIcon}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-2 tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-muted-foreground">
              {subtitle}
            </h2>
          )}
        </div>

        <div className="space-y-3">
          {categories.map((category) => {
            const isLinked = !!category.href;
            const isHovered = hoveredItem === category.id;

            const inner = (
              <div
                className={cn(
                  "relative overflow-hidden border transition-all duration-300 ease-in-out cursor-pointer",
                  isLinked
                    ? isHovered
                      ? "min-h-[7rem] py-5 border-[#DA7757] shadow-lg shadow-[rgba(218,119,87,0.2)] bg-[rgba(218,119,87,0.06)]"
                      : "min-h-[5rem] py-4 border-border bg-[rgba(218,119,87,0.03)] hover:border-[rgba(218,119,87,0.5)]"
                    : isHovered
                      ? "min-h-[7rem] py-5 border-[#DA7757] shadow-lg shadow-[rgba(218,119,87,0.2)] bg-[rgba(218,119,87,0.05)]"
                      : "min-h-[5rem] py-4 border-border hover:border-[rgba(218,119,87,0.4)] bg-foreground/[0.02]"
                )}
              >
                {/* Persistent left accent bar — linked items only */}
                {isLinked && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                    style={{
                      background: "#DA7757",
                      opacity: isHovered ? 1 : 0.55,
                    }}
                  />
                )}

                {/* Shimmer scan — linked items only, at rest */}
                {isLinked && !isHovered && (
                  <span className="absolute inset-0 pointer-events-none overflow-hidden">
                    <span className="absolute inset-y-0 w-1/3 -translate-x-full animate-loading bg-gradient-to-r from-transparent via-[rgba(218,119,87,0.07)] to-transparent" />
                  </span>
                )}

                {/* Corner brackets — on hover */}
                {isHovered && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-[#DA7757]" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-[#DA7757]" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-[#DA7757]" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-[#DA7757]" />
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between px-6 md:px-8 gap-4">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-sans font-bold transition-colors duration-300",
                        category.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
                        isHovered ? "text-[#DA7757]" : "text-foreground"
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-1 transition-colors duration-300 text-sm md:text-base font-mono",
                          isHovered ? "text-foreground/80" : "text-muted-foreground"
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* CTA arrow — linked items */}
                  {isLinked && (
                    <div
                      className={cn(
                        "flex items-center gap-1.5 shrink-0 transition-all duration-300",
                        isHovered ? "text-[#DA7757]" : "text-[rgba(218,119,87,0.5)]"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-widest whitespace-nowrap transition-all duration-300",
                          isHovered
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-2"
                        )}
                        style={{ transitionProperty: "opacity, transform" }}
                      >
                        Explorer
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "transition-all duration-300",
                          isHovered ? "w-6 h-6" : "w-5 h-5"
                        )}
                      />
                    </div>
                  )}

                  {/* Icon — non-linked items on hover */}
                  {!isLinked && category.icon && isHovered && (
                    <div className="text-[#DA7757] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <div
                key={category.id}
                className="relative group"
                onMouseEnter={() => setHoveredItem(category.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (!category.href) {
                    setHoveredItem((prev) => (prev === category.id ? null : category.id));
                    category.onClick?.();
                  }
                }}
              >
                {isLinked ? (
                  <Link href={category.href!} className="block">
                    {inner}
                  </Link>
                ) : inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
