"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoReorderThreeOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [banner, setBanner] = useState(false);

  const slideDownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!slideDownRef.current?.contains(event.target as Node)) {
        setBanner(false);
        console.log("click");
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSideMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const handleSlideDown = () => {
    setBanner((prev) => !prev);
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
    <section
      className={`fixed ${scrolled || banner ? "bg-black" : "bg-transparent hover:bg-black"} py-8 top-0 z-[999] w-full !mx-auto h-[40px] flex items-center justify-center duration-300 transition-all ease-in-out
      `}
      ref={slideDownRef}
    >
      {navigations && navigations.length > 1 ? (
        <div className="w-full relative flex mx-auto flex-row items-center justify-center">
          <div className="md:w-1/4 w-full flex items-center justify-center px-2">
            <span className="lg:text-3xl text-xl text-yellow-500 text-center font-lobster cursor-pointer">
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

          <div className="web-nav w-3/4 items-center justify-end lg:flex hidden py-2">
            {navigations?.map((nav, idx) => (
              <li key={idx} className="list-none">
                <p className="flex flex-row relaitve items-center justify-center !z-50">
                  <Link
                    href={nav?.nav?.pLink?.link || ""}
                    className={`relative text-white text-base ${nav?.nav?.mlink ? "mr-2 ml-10" : "mx-10"} font-spicy uppercase flex flex-row items-center gap-2`}
                  >
                    {nav?.nav?.pLink?.title}{" "}
                  </Link>

                  {nav?.nav?.mlink && (
                    <IoMdArrowDropdown
                      className="text-white text-2xl cursor-pointer"
                      onClick={handleSlideDown}
                    />
                  )}
                </p>

                {/* {nav?.nav?.mlink && banner && ( */}
                {nav?.nav?.mlink && (
                  <div
                    className={`absolute ${banner ? "translate-y-0 block" : "-translate-y-16 hidden"} top-12 right-0 pt-4 w-full bg-black  flex flex-row gap-6 p-4 transition-all duration-700 ease-linear !z-0`}
                  >
                    <div className="w-full bg-gray-100">
                      <Image
                        src="/assets/logo.jpg"
                        width={50}
                        height={50}
                        alt={"second street logo"}
                        quality={100}
                        className="bg-white"
                      />
                    </div>

                    <div className="w-full flex flex-row">
                      <div className="space-y-2 w-full">
                        {nav?.nav?.mlink.slice(0, 5).map((mLinks, idx) => (
                          <p key={idx} className="hover:underline">
                            <Link
                              href={mLinks?.link || ""}
                              className="text-white uppercase font-work font-semibold tracking-wide"
                            >
                              {mLinks?.title}
                            </Link>
                          </p>
                        ))}
                      </div>

                      <div className="space-y-2 w-full">
                        {nav?.nav?.mlink.slice(5, 10).map((mLinks, idx) => (
                          <p key={idx} className="hover:underline w-max">
                            <Link
                              href={mLinks?.link || ""}
                              className="text-white uppercase font-work font-semibold tracking-wide"
                            >
                              {mLinks?.title}
                            </Link>
                          </p>
                        ))}
                      </div>
                    </div>
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

          {/* Sidebar */}

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
    </section>
  );
}
