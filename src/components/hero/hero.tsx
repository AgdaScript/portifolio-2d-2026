import { HeroPortrait } from "./hero-portrait";
import { HeroTitle } from "./hero-title";
import type { HeroProps } from "./hero.types";

export function Hero({ title, portrait, className }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className={`bg-[#f6efe6] text-[#2b2118] ${className ?? ""}`}
    >
      <div className="mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        <HeroTitle title={title} />
        <HeroPortrait portrait={portrait} />
      </div>
    </section>
  );
}
