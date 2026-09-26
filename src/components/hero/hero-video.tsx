import type { HeroMedia } from "./hero.types";

type HeroVideoProps = {
  media: HeroMedia;
};

export function HeroVideo({ media }: HeroVideoProps) {
  return (
    <video
      src={media.src}
      width={media.width}
      height={media.height}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Vídeo de apresentação"
      className="h-auto max-h-svh w-auto max-w-full"
    />
  );
}
