"use-client";

import Link from "next/link";
import React from "react";
import { navigations } from "../lib/navigation";

export default function Footer() {
  return (
    <section className="py-2 bg-black ">
      <div className="max-w-[1500px] mx-auto">
        <div className="md:w-1/4 w-full flex items-center justify-center px-2">
          <Link
            href="/"
            className="lg:text-3xl text-xl text-yellow-500 text-center font-lobster cursor-pointer"
          >
            second street
          </Link>
        </div>

        <div className="web-nav w-3/4 items-center justify-end lg:flex hidden">
          {navigations?.map((nav, idx) => (
            <li key={idx} className="list-none">
              <div className="flex flex-row relaitve items-center justify-center !z-50 w-full">
                <Link
                  href={nav?.nav?.pLink?.link || ""}
                  className={`relative text-white text-base ${nav?.nav?.mLink ? "mr-2 ml-10" : "mx-10"} font-spicy uppercase flex flex-row items-center gap-2`}
                >
                  {nav?.nav?.pLink?.title}{" "}
                </Link>
              </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
