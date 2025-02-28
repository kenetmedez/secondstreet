import React from "react";
import Link from "next/link";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  return (
    <nav className={`sticky`}>
      {navigations && navigations.length > 1 ? (
        <div className="w-full flex max-w-[1280px] mx-auto">
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
