import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-[rgba(255,255,255,0.1)] md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[rgba(255,255,255,0.1)]" />

      <LogoCard
        className="relative border-r border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)]"
        logo={{ src: "https://svgl.app/library/figma.svg", alt: "Figma Logo" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[rgba(255,255,255,0.3)]" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="border-b border-[rgba(255,255,255,0.1)]"
        logo={{ src: "https://svgl.app/library/nextjs_icon_dark.svg", alt: "Next.js Logo" }}
        logoClassName="invert"
      />

      <LogoCard
        className="relative border-r border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] md:border-r"
        logo={{ src: "https://svgl.app/library/vercel.svg", alt: "Vercel Logo" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[rgba(255,255,255,0.3)]" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-[rgba(255,255,255,0.3)]" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="relative border-b border-[rgba(255,255,255,0.1)]"
        logo={{ src: "https://svgl.app/library/github_light.svg", alt: "GitHub Logo" }}
      />

      <LogoCard
        className="relative border-r border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] md:border-b-0"
        logo={{ src: "https://svgl.app/library/wordpress.svg", alt: "WordPress Logo" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-[rgba(255,255,255,0.3)]" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="border-b border-[rgba(255,255,255,0.1)] md:border-r md:border-b-0 md:bg-[rgba(255,255,255,0.04)]"
        logo={{ src: "https://svgl.app/library/shopify.svg", alt: "Shopify Logo" }}
      />

      <LogoCard
        className="border-r border-[rgba(255,255,255,0.1)]"
        logo={{ src: "https://svgl.app/library/claude-ai-icon.svg", alt: "Claude AI Logo" }}
      />

      <LogoCard
        className="bg-[rgba(255,255,255,0.04)]"
        logo={{ src: "https://svgl.app/library/framer.svg", alt: "Framer Logo" }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[rgba(255,255,255,0.1)]" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & { logo: Logo; logoClassName?: string };

function LogoCard({ logo, className, logoClassName, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[#020202] px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className={cn(
          "pointer-events-none h-5 select-none md:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300",
          logoClassName ?? "brightness-0 invert"
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
