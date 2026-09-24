"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

const LOADING_DURATION_MS = 2000;

type LoadingScreenProps = {
  children: ReactNode;
};

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / LOADING_DURATION_MS) * 100));
      setProgress(next);

      if (elapsed < LOADING_DURATION_MS) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      setIsLoading(false);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!isLoading) {
    return children;
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-white">
      <div
        className="flex flex-col items-center gap-6"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-label="Carregando"
      >
        <div className="flex items-center justify-center p-8">
          <Image
            src="/images/loading-cats.png"
            alt=""
            width={912}
            height={955}
            priority
            className="h-auto w-[min(34vw,11rem)] animate-spin [animation-duration:1.5s]"
          />
        </div>
        <p className="text-2xl font-medium text-black tabular-nums">{progress}%</p>
      </div>
    </div>
  );
}
