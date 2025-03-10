"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { IoReorderThreeOutline } from "react-icons/io5";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed ${scrolled ? "bg-black/80 py-8" : "bg-transparent py-8"} top-0 z-[999] w-full !mx-auto h-[40px] flex items-center justify-center duration-300 transition-all ease-in-out`}
    >
      {navigations && navigations.length > 1 ? (
        <div className="w-full flex max-w-[1280px] mx-auto flex-row items-center justify-center">
          <div className="md:w-1/4 w-full flex items-center justify-center px-2">
            <span className="lg:text-3xl text-xl text-yellow-500 text-center">
              second street
            </span>
            {/* <Image
              src="/assets/logo.jpg"
              width={50}
              height={50}
              alt={"second street logo"}
              quality={100}
              className=""
            /> */}
          </div>
          <div className="web-nav w-3/4 items-center justify-end lg:flex hidden">
            {navigations?.map((nav, idx) => (
              <Link
                key={idx}
                href={nav?.link}
                className="uppercase text-white px-10"
              >
                {nav?.title}
              </Link>
            ))}
          </div>

          <div className="mobile-nav lg:w-3/4 w-full lg:hidden flex items-center justify-end px-4">
            <span className="text-white">
              <IoReorderThreeOutline size={25} />
            </span>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
