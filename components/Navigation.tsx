import React from "react";
import Link from "next/link";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  return (
    <nav
      className={`fixed top-0 z-50 bg-transparent w-full max-w-[1280px] mx-auto h-[40px] flex items-center justify-center`}
    >
      {navigations && navigations.length > 1 ? (
        <div className="w-full flex max-w-[1280px] mx-auto flex-row items-center justify-center gap-10">
          {navigations?.map((nav, idx) => (
            <Link key={idx} href={nav?.link} className="uppercase">
              {nav?.title}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
