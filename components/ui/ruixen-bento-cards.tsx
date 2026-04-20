"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type BentoCardContent = {
  title: string;
  description: string;
};

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`text-[rgba(218,119,87,0.4)] size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export const PlusCard: React.FC<{
  className?: string;
  title: string;
  description: string;
}> = ({ className = "", title, description }) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-[rgba(218,119,87,0.2)] rounded-lg p-6 bg-[rgba(255,255,255,0.03)] min-h-[200px]",
        "flex flex-col justify-between group hover:border-[rgba(218,119,87,0.5)] hover:bg-[rgba(218,119,87,0.05)] transition-all duration-300",
        className
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#DA7757] transition-colors duration-300">
          {title}
        </h3>
        <p className="font-mono text-sm text-[rgba(255,255,255,0.5)] group-hover:text-[rgba(255,255,255,0.7)] transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function BentoCards({ cards }: { cards: BentoCardContent[] }) {
  const [c0, c1, c2, c3, c4] = cards;
  return (
    <section className="bg-transparent">
      <div className="mx-auto container py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <PlusCard {...c0} />
          <PlusCard {...c1} />
          <PlusCard {...c2} />
          <PlusCard {...c3} />
          <PlusCard {...c4} className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
