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
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-[5vw]">
      <div className="relative">
        <h1
          className={`${ntr.className} text-[clamp(3.75rem,7vw,6.75rem)] leading-[0.88] tracking-[-0.04em] text-[#2b2b2b]`}
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p
          className={`${ntr.className} absolute right-0 bottom-0 translate-x-2 translate-y-[58%] rotate-[7deg] bg-[#1e4e9b] px-4 py-2 text-[clamp(0.72rem,1.35vw,1.05rem)] tracking-[0.18em] whitespace-nowrap text-white uppercase`}
        >
          {title.badge}
        </p>
      </div>
    </div>
  );
}
