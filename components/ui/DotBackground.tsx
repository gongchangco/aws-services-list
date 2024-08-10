import React from "react";
import { services } from "@/data/services";
import { HoverEffect } from "@/components/ui/CardHoverEffect";

export function DotBackground() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.25] bg-dot-black/[0.25] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        AWS Services
      </p>

      <HoverEffect items={services} />
    </div>
  );
}
