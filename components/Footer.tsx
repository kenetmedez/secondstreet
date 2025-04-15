"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { navigations } from "../lib/navigation";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <section
      className={`py-2 bg-black ${pathname.includes("studio") || pathname.includes("monthsary") ? "hidden" : "block"}`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-center">
        <div className="md:w-1/4 w-full flex items-center justify-center px-2">
          <Link
            href="/"
            className="lg:text-3xl text-xl text-yellow-500 text-center font-lobster cursor-pointer"
          >
            <Image
              src="/assets/logo.jpg"
              width={500}
              height={500}
              alt="second street logo"
            />
          </Link>
        </div>

        <div className="web-nav w-3/4 items-center justify-center flex flex-row">
          <div>
            {navigations?.length > 1 && (
              <div className="">
                <span className="uppercase text-yellow-400">quick links</span>
              </div>
            )}
            {navigations?.map((nav, idx) => (
              <li key={idx} className="list-none">
                <div className="relaitve !z-50 w-full">
                  <Link
                    href={nav?.nav?.pLink?.link || ""}
                    className={`relative text-white text-base ${nav?.nav?.mLink ? "mr-2 ml-10" : "mx-10"} font-spicy uppercase flex flex-row items-center gap-2`}
                  >
                    {nav?.nav?.pLink?.title}{" "}
                  </Link>
                </div>

                {/* {nav?.nav?.mLink && (
                  <div>
                    {nav?.nav?.mLink?.map((mLinks, idx) => (
                      <div key={idx}>
                        <Link href={mLinks?.link}>{mLinks?.title}</Link>
                      </div>
                    ))}
                  </div>
                )} */}
              </li>
            ))}
          </div>
          <div>
            <span>member</span>
          </div>
        </div>
      </div>
    </section>
  );
}
