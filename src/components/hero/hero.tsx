import { HeroVideo } from "./hero-video";
import type { HeroProps } from "./hero.types";

export function Hero({ media }: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="flex min-h-svh items-center justify-center bg-[#faf5ed]"
    >
      <HeroVideo media={media} />
    </section>
  );
}
