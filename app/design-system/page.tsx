import type { Metadata } from "next";
import { DesignSystemPage } from "@/components/DesignSystemPage";

export const metadata: Metadata = {
  title: "Design System — Joran Saladin",
  description: "Visual language, tokens, components and patterns powering this portfolio.",
  robots: { index: false, follow: false },
};

export default function DesignSystemRoute() {
  return <DesignSystemPage />;
}
