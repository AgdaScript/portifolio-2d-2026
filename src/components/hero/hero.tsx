import { HeroTitle } from "./hero-title";
import { HeroVideo } from "./hero-video";
import type { HeroProps } from "./hero.types";

export function Hero({ media, loop, title }: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-svh flex-col items-center justify-center gap-8 bg-[#faf5ed] px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 md:block md:px-0 md:py-0"
    >
      <HeroTitle title={title} />
      <div className="flex w-full items-center justify-center md:absolute md:inset-0">
        <HeroVideo media={media} loop={loop} />
      </div>
    </section>
  );
}
