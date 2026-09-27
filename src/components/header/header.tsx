import { NTR } from "next/font/google";
import { HeaderNav } from "./header-nav";
import type { HeaderProps } from "./header.types";

const ntr = NTR({
  weight: "400",
  subsets: ["latin"],
});

export function Header({ items }: HeaderProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-30 flex justify-center px-4 sm:top-6">
      <div
        className={`${ntr.className} pointer-events-auto rounded-full border border-[#eadfce] bg-[#f4efe9] px-4 py-2.5 shadow-[0_8px_24px_rgba(43,43,43,0.06)] sm:px-6 sm:py-3`}
      >
        <HeaderNav items={items} />
      </div>
    </header>
  );
}
