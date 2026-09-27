import type { HeaderMenuItem } from "./header.types";

type HeaderNavProps = {
  items: HeaderMenuItem[];
};

export function HeaderNav({ items }: HeaderNavProps) {
  return (
    <nav aria-label="Principal">
      <ul className="flex items-center gap-3 sm:gap-5 md:gap-7">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-[0.72rem] text-[#2b2b2b] transition-colors hover:text-[#d5803a] sm:text-sm md:text-base"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
