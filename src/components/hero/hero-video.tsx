"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroMedia } from "./hero.types";

let hasPlayedOnThisPageLoad = false;

const videoClassName = "h-auto max-h-svh w-auto max-w-full";

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
    <div className="relative">
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
        className={`absolute inset-0 h-full w-full object-contain ${showLoop ? "" : "invisible"}`}
      />
    </div>
  );
}
