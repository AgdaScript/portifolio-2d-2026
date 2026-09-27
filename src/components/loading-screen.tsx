 "use client";

import { Libre_Baskerville, NTR } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { showHeaderIcon } from "@/components/header/header-icon-state";

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const LOADING_DURATION_MS = 2000;
const EXIT_DURATION_MS = 900;

type LoadingPhase = "loading" | "exiting" | "done";

type LoadingScreenProps = {
  header: ReactNode;
  children: ReactNode;
};

export function LoadingScreen({ header, children }: LoadingScreenProps) {
  const [phase, setPhase] = useState<LoadingPhase>("loading");
  const [progress, setProgress] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

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

      setPhase("exiting");
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (phase !== "exiting") {
      return;
    }

    const image = imageRef.current;
    const target = document.querySelector("#header-icon");

    const revealIcon = () => {
      showHeaderIcon();
      setPhase("done");
    };

    if (!image || !target) {
      const timeoutId = window.setTimeout(revealIcon, EXIT_DURATION_MS);
      return () => window.clearTimeout(timeoutId);
    }

    const imageRect = image.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const dx =
      targetRect.left + targetRect.width / 2 - (imageRect.left + imageRect.width / 2);
    const dy =
      targetRect.top + targetRect.height / 2 - (imageRect.top + imageRect.height / 2);
    const scale = targetRect.width / imageRect.width;

    const animation = image.animate(
      [
        { transform: "translate(0px, 0px) scale(1)" },
        { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
      ],
      {
        duration: EXIT_DURATION_MS,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "forwards",
      },
    );

    let finished = false;
    let cancelled = false;
    const finish = () => {
      if (cancelled || finished) {
        return;
      }
      finished = true;
      revealIcon();
    };

    animation.addEventListener("finish", finish);
    const timeoutId = window.setTimeout(finish, EXIT_DURATION_MS + 80);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      animation.cancel();
      animation.removeEventListener("finish", finish);
    };
  }, [phase]);

  const isExiting = phase === "exiting";

  return (
    <>
      {phase !== "loading" ? header : null}
      {phase === "done" ? children : null}
      {phase !== "done" ? (
      <div className="pointer-events-none fixed inset-0 z-40">
        <div
          className={`absolute inset-0 bg-[#fcf7f1] transition-opacity duration-700 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Carregando"
        >
          <div className="flex items-center justify-center p-8">
            <div
              ref={imageRef}
              className={`w-[min(34vw,11rem)] ${
                isExiting ? "" : "animate-spin [animation-duration:1.5s]"
              }`}
            >
              <Image
                src="/images/loading-cats.png"
                alt=""
                width={912}
                height={955}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
          <p
            className={`text-2xl text-black transition-opacity duration-300 ${
              isExiting ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className={`${ntr.className} tabular-nums`}>{progress}</span>
            <span className={libreBaskerville.className}>%</span>
          </p>
        </div>
      </div>
      ) : null}
    </>
  );
}
