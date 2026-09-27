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
          className={`${ntr.className} text-[clamp(3rem,12vw,4.25rem)] leading-[0.88] tracking-[-0.04em] text-[#2b2b2b] sm:text-[clamp(3.4rem,10vw,4.75rem)] md:text-[clamp(4rem,8vw,5.5rem)] lg:text-[clamp(4.5rem,7vw,6.5rem)] xl:text-[clamp(5rem,6.2vw,7.5rem)] 2xl:text-[clamp(5.5rem,5.5vw,8.75rem)]`}
          style={{ fontWeight: 700 }}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p
          className={`${ntr.className} absolute right-0 bottom-0 origin-left translate-x-4 translate-y-[58%] -rotate-[8deg] bg-[#d5803a] px-3 py-1.5 text-[clamp(0.62rem,2.6vw,0.78rem)] tracking-[0.14em] whitespace-nowrap text-white uppercase sm:translate-x-8 sm:text-sm md:translate-x-10 lg:translate-x-14 lg:text-[clamp(0.68rem,1.15vw,0.95rem)] xl:text-base`}
        >
          {title.badge}
        </p>
      </div>
    </div>
  );
}
