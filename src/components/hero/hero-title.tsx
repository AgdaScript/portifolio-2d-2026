import { NTR } from "next/font/google";
import type { HeroTitleContent } from "./hero.types";

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
});

type HeroTitleProps = {
  title: HeroTitleContent;
};

export function HeroTitle({ title }: HeroTitleProps) {
  const lines = title.name.split(" ");

  return (
    <div className="relative z-10 flex w-full justify-center md:pointer-events-none md:absolute md:inset-y-0 md:left-0 md:w-1/2 md:-translate-y-[6vh] md:items-center">
      <div className="relative">
        <h1
          className={`${ntr.className} text-[min(44vw,20svh)] leading-[0.88] tracking-[-0.04em] text-[#2b2b2b] sm:text-[min(38vw,18svh)] md:text-[clamp(4rem,8vw,5.5rem)] lg:text-[clamp(6.25rem,9.5vw,8rem)] xl:text-[clamp(6.75rem,8.5vw,10rem)] 2xl:text-[clamp(8.5rem,8.5vw,12rem)]`}
          style={{ fontWeight: 700 }}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p
          className={`${ntr.className} absolute right-0 bottom-0 origin-left translate-x-3 translate-y-[58%] -rotate-[8deg] bg-[#d5803a] px-3 py-1.5 text-[min(5vw,2.6svh)] tracking-[0.14em] whitespace-nowrap text-white uppercase sm:translate-x-6 sm:text-[min(4vw,2.2svh)] md:translate-x-10 md:text-sm lg:translate-x-14 lg:text-[clamp(0.95rem,1.45vw,1.2rem)] xl:text-[clamp(1.05rem,1.3vw,1.35rem)] 2xl:text-[clamp(1.2rem,1.15vw,1.6rem)]`}
        >
          {title.badge}
        </p>
      </div>
    </div>
  );
}
