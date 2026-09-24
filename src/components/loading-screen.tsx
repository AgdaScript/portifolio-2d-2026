"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

const LOADING_DURATION_MS = 1500;

type LoadingScreenProps = {
  children: ReactNode;
};

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!isLoading) {
    return children;
  }

  return (
    <div
      className="flex min-h-svh items-center justify-center bg-black"
      role="status"
      aria-live="polite"
      aria-label="Carregando"
    >
      <Image
        src="/images/loading-cats.jpg"
        alt=""
        width={1024}
        height={1024}
        priority
        className="h-auto w-[min(70vw,28rem)]"
      />
    </div>
  );
}
