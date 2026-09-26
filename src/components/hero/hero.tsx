import { HeroTitle } from "./hero-title";
import { HeroVideo } from "./hero-video";
import type { HeroProps } from "./hero.types";

export function Hero({ media, loop, title }: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-svh items-center justify-center bg-[#faf5ed]"
    >
      <HeroVideo media={media} loop={loop} />
      <HeroTitle title={title} />
    </section>
  );
}
