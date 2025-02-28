import React from "react";
import Link from "next/link";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  return (
    <nav
      className={``}
      style={{
        backgroundColor: `black`,
        width: "100%",
        position: "fixed",
        display: "top-0",
      }}
    >
      {navigations && navigations.length > 1 ? (
        <div
          className="w-full flex max-w-[1280px] mx-auto"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {navigations?.map((nav, idx) => (
            <Link
              key={idx}
              href={nav?.link}
              className=""
              style={{
                listStyle: "none",
                padding: "0 20px",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {nav?.title}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
