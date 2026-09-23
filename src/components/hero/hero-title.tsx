import { Fraunces } from "next/font/google";
import type { HeroTitleContent } from "./hero.types";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
});

type HeroTitleProps = {
  title: HeroTitleContent;
};

export function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1
      id="hero-title"
      className={`${display.className} text-[clamp(3.25rem,7vw,6.75rem)] leading-[0.92] font-medium tracking-[-0.03em] text-[#2b2118]`}
    >
      <span className="block">{title.name}</span>
      <span className="mt-4 block text-[0.38em] leading-tight font-medium tracking-[-0.02em] text-[#a15c38]">
        {title.role}
      </span>
    </h1>
  );
}
