"use client";

import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = !mounted || theme !== "light";
  const defaultLogoClass = isDark ? "brightness-0 invert" : "brightness-0";
  const nextjsClass = isDark ? "invert" : "";
  const githubClass = isDark ? "brightness-0 invert" : "brightness-0";

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-foreground/10 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-foreground/10" />

      <LogoCard
        className="relative border-r border-b border-foreground/10 bg-foreground/[0.04]"
        logo={{ src: "https://svgl.app/library/figma.svg", alt: "Figma Logo" }}
        defaultLogoClass={defaultLogoClass}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-foreground/30" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="border-b border-foreground/10"
        logo={{ src: "https://svgl.app/library/nextjs_icon_dark.svg", alt: "Next.js Logo" }}
        logoClassName={nextjsClass}
        defaultLogoClass={defaultLogoClass}
      />

      <LogoCard
        className="relative border-r border-b border-foreground/10 bg-foreground/[0.04] md:border-r"
        logo={{ src: "https://svgl.app/library/vercel.svg", alt: "Vercel Logo" }}
        defaultLogoClass={defaultLogoClass}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-foreground/30" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-foreground/30" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="relative border-b border-foreground/10"
        logo={{ src: "https://svgl.app/library/github_light.svg", alt: "GitHub Logo" }}
        logoClassName={githubClass}
        defaultLogoClass={defaultLogoClass}
      />

      <LogoCard
        className="relative border-r border-b border-foreground/10 bg-foreground/[0.04] md:border-b-0"
        logo={{ src: "https://svgl.app/library/wordpress.svg", alt: "WordPress Logo" }}
        defaultLogoClass={defaultLogoClass}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-foreground/30" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="border-b border-foreground/10 md:border-r md:border-b-0 md:bg-foreground/[0.04]"
        logo={{ src: "https://svgl.app/library/shopify.svg", alt: "Shopify Logo" }}
        defaultLogoClass={defaultLogoClass}
      />

      <LogoCard
        className="border-r border-foreground/10"
        logo={{ src: "https://svgl.app/library/claude-ai-icon.svg", alt: "Claude AI Logo" }}
        defaultLogoClass={defaultLogoClass}
      />

      <LogoCard
        className="bg-foreground/[0.04]"
        logo={{ src: "https://svgl.app/library/framer.svg", alt: "Framer Logo" }}
        defaultLogoClass={defaultLogoClass}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-foreground/10" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
  logoClassName?: string;
  defaultLogoClass?: string;
};

function LogoCard({ logo, className, logoClassName, defaultLogoClass = "", children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className={cn(
          "pointer-events-none h-5 select-none md:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300",
          logoClassName !== undefined ? logoClassName : defaultLogoClass
        )}
        height={logo.height || 24}
        src={logo.src}
        width={logo.width || 120}
        unoptimized
      />
      {children}
    </div>
  );
}
