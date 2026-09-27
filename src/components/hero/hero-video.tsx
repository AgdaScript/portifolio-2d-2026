"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroMedia } from "./hero.types";

let hasPlayedOnThisPageLoad = false;

const videoClassName =
  "absolute top-0 right-0 h-full w-[calc(100%/0.7)] max-w-none object-cover object-right md:static md:h-auto md:w-auto md:max-h-svh md:max-w-full md:object-contain md:object-center";

type HeroVideoProps = {
  media: HeroMedia;
  loop: HeroMedia;
};

export function HeroVideo({ media, loop }: HeroVideoProps) {
  const introRef = useRef<HTMLVideoElement>(null);
  const loopRef = useRef<HTMLVideoElement>(null);
  const [showLoop, setShowLoop] = useState(hasPlayedOnThisPageLoad);

  useEffect(() => {
    const intro = introRef.current;
    const loopVideo = loopRef.current;
    if (!intro || !loopVideo) {
      return;
    }

    const startLoop = () => {
      const reveal = () => setShowLoop(true);
      loopVideo.addEventListener("playing", reveal, { once: true });
      void loopVideo.play();
    };

    if (hasPlayedOnThisPageLoad) {
      startLoop();
      return;
    }

    const onEnded = () => {
      hasPlayedOnThisPageLoad = true;
      startLoop();
    };

    intro.addEventListener("ended", onEnded);

    const timeoutId = window.setTimeout(() => {
      hasPlayedOnThisPageLoad = true;
      void intro.play();
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
      intro.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden md:h-auto md:w-auto md:overflow-visible">
      <video
        ref={introRef}
        src={media.src}
        width={media.width}
        height={media.height}
        muted
        playsInline
        preload="auto"
        aria-label="Vídeo de apresentação"
        aria-hidden={showLoop}
        className={`${videoClassName} ${showLoop ? "invisible" : ""}`}
      />
      <video
        ref={loopRef}
        src={loop.src}
        width={loop.width}
        height={loop.height}
        muted
        playsInline
        preload="auto"
        loop
        aria-label="Vídeo de digitação"
        aria-hidden={!showLoop}
        className={`absolute top-0 right-0 h-full w-[calc(100%/0.7)] max-w-none object-cover object-right md:inset-0 md:w-full md:object-contain md:object-center ${showLoop ? "" : "invisible"}`}
      />
    </div>
  );
}
