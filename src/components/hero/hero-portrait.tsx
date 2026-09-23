import Image from "next/image";
import type { HeroPortraitContent } from "./hero.types";

type HeroPortraitProps = {
  portrait: HeroPortraitContent;
};

export function HeroPortrait({ portrait }: HeroPortraitProps) {
  return (
    <figure className="relative mx-auto w-full max-w-xl">
      <Image
        src={portrait.src}
        alt={portrait.alt}
        width={portrait.width}
        height={portrait.height}
        priority
        className="h-auto w-full bg-transparent object-contain"
      />
    </figure>
  );
}
