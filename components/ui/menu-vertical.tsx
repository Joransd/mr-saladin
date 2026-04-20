"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
  onClick?: () => void;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  align?: "left" | "right";
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "var(--accent)",
  skew = 0,
  align = "left",
}: MenuVerticalProps) => {
  const isRight = align === "right";

  return (
    <div className={`flex flex-col gap-4 ${isRight ? "items-end w-full" : "w-fit px-4"}`}>
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className={`group/nav flex items-center gap-2 cursor-pointer text-white ${isRight ? "flex-row-reverse" : ""}`}
          initial="initial"
          whileHover="hover"
          onClick={item.onClick}
        >
          {/* Arrow — slides in from the correct side */}
          <motion.div
            variants={
              isRight
                ? {
                    initial: { x: "100%", opacity: 0 },
                    hover: { x: 0, opacity: 1 },
                  }
                : {
                    initial: { x: "-100%", opacity: 0 },
                    hover: { x: 0, opacity: 1 },
                  }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ color }}
            className="z-0 overflow-hidden"
          >
            {isRight ? (
              <ArrowLeft strokeWidth={3} className="size-8" />
            ) : (
              <ArrowRight strokeWidth={3} className="size-8" />
            )}
          </motion.div>

          <MotionLink
            href={item.href}
            variants={
              isRight
                ? {
                    initial: { x: 40, color: "inherit" },
                    hover: { x: 0, skewX: skew },
                  }
                : {
                    initial: { x: -40, color: "inherit" },
                    hover: { x: 0, skewX: skew },
                  }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ "--hover-color": color } as React.CSSProperties}
            className="font-sans font-semibold text-3xl no-underline hover:text-[var(--hover-color)] transition-colors"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};
