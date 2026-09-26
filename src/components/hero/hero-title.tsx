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
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-1/2 items-center justify-center">
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
          className={`${ntr.className} absolute right-0 bottom-0 translate-x-2 translate-y-[58%] rotate-[7deg] bg-[#1e4e9b] px-5 py-2.5 text-[clamp(0.95rem,1.8vw,1.4rem)] tracking-[0.18em] whitespace-nowrap text-white uppercase`}
        >
          {title.badge}
        </p>
      </div>
    </div>
  );
}
