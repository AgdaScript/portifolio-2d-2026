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
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-1/2 -translate-y-[6vh] items-center justify-center">
      <div className="relative">
        <h1
          className={`${ntr.className} text-[clamp(5rem,9.5vw,8.75rem)] leading-[0.88] tracking-[-0.04em] text-[#2b2b2b]`}
          style={{ fontWeight: 700 }}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p
          className={`${ntr.className} absolute right-0 bottom-0 origin-left translate-x-2 translate-y-[58%] -rotate-[8deg] bg-[#d5803a] px-3 py-1.5 text-[clamp(0.68rem,1.15vw,0.95rem)] tracking-[0.16em] whitespace-nowrap text-white uppercase`}
        >
          {title.badge}
        </p>
      </div>
    </div>
  );
}
