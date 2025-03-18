"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { IoReorderThreeOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const handleSideMenu = () => {
    setSideMenu((prev) => !prev);
  };

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
      className={`fixed ${scrolled ? "bg-black/80 py-8" : "bg-transparent py-8"} top-0 z-[999] w-full !mx-auto h-[40px] flex items-center justify-center duration-300 transition-all ease-in-out
      `}
    >
      {navigations && navigations.length > 1 ? (
        <div className="w-full flex max-w-[1280px] mx-auto flex-row items-center justify-center">
          <div className="md:w-1/4 w-full flex items-center justify-center px-2">
            <span className="lg:text-3xl text-xl text-yellow-500 text-center font-lobster">
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

          <div className="web-nav relative w-3/4 items-center justify-end lg:flex hidden">
            {navigations?.map((nav, idx) => (
              <li key={idx} className="list-none">
                <Link
                  href={nav?.nav?.pLink?.link || ""}
                  className="text-white px-10 font-spicy uppercase"
                >
                  {nav?.nav?.pLink?.title}
                </Link>

                {nav?.nav?.mlink && (
                  <div className="absolute bg-yellow-500 rounded-lg p-2 flex flex-col gap-2">
                    {nav?.nav?.mlink.slice(0, 5).map((mLinks, idx) => (
                      <li key={idx} className="list-none">
                        <Link
                          href={mLinks?.link || ""}
                          className="text-white font-spicy"
                        >
                          {mLinks?.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </div>

          <div className="mobile-nav relative lg:w-3/4 w-full lg:hidden flex items-center justify-end px-4">
            <span className="text-white">
              <IoReorderThreeOutline
                size={25}
                onClick={handleSideMenu}
                className="text-white"
              />
            </span>
          </div>

          <div
            className={`absolute md:flex lg:hidden flex-col top-0 -right-96 bg-black h-screen min-w-[300px] p-4 z-50 gap-4 transition-all duration-300 ease-in-out ${sideMenu ? "scale-100 right-0" : "scale-0"}`}
          >
            <div className="p-2">
              <GrClose
                onClick={handleSideMenu}
                className="relative text-white hover:rotate-180 cursor-pointer"
              />
            </div>

            <div className="w-full flex items-center">
              <Link
                href="/"
                className="w-full font-lobster text-yellow-500 text-center text-xl"
                onClick={handleSideMenu}
              >
                second street
              </Link>
            </div>

            <div className="w-full">
              <ul className="gap-2 flex flex-col">
                {navigations?.map((nav, idx) => (
                  <li key={idx}>
                    <Link
                      href={nav?.nav?.pLink?.link || ""}
                      key={idx}
                      className="text-white px-2 font-spicy hover:underline transform-all duration-300 ease-linear"
                      onClick={handleSideMenu}
                    >
                      {nav?.nav?.pLink?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
