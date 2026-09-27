"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { isHeaderIconVisible, subscribeHeaderIcon } from "./header-icon-state";

export function HeaderIcon() {
  const [visible, setVisible] = useState(isHeaderIconVisible);

  useEffect(() => subscribeHeaderIcon(() => setVisible(true)), []);

  return (
    <span id="header-icon" className="inline-flex size-6 shrink-0 sm:size-7">
      <Image
        src="/images/loading-cats.png"
        alt=""
        width={912}
        height={955}
        className={`h-full w-full object-contain ${visible ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
}
