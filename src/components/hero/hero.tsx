import { HeroTitle } from "./hero-title";
import { HeroVideo } from "./hero-video";
import type { HeroProps } from "./hero.types";

export function Hero({ media, loop, title }: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative flex h-svh flex-col overflow-x-hidden bg-[#fcf7f1] md:block md:h-auto md:min-h-svh md:overflow-visible"
    >
      <div className="flex h-1/2 w-full items-center justify-center md:contents">
        <HeroTitle title={title} />
      </div>
      <div className="h-1/2 w-full md:absolute md:inset-0 md:flex md:h-auto md:w-full md:items-center md:justify-center">
        <HeroVideo media={media} loop={loop} />
      </div>
    </section>
  );
}
