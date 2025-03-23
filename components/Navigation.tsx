"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoReorderThreeOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { navigations } from "../lib/navigation";

export interface NavigationProps {
  nav?: {
    pLink?: {
      title?: string;
      link?: string;
    };
    mLink?: { title?: string; link?: string; img?: string }[];
  };
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [banner, setBanner] = useState(false);
  const [toggleMember, setToggleMember] = useState(false);

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const slideDownRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!slideDownRef.current?.contains(event.target as Node)) {
        setBanner(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!sideBarRef.current?.contains(event.target as Node)) {
        setSideMenu(false);
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
    console.log("banner click");
  };

  const handleToggleMember = () => {
    setToggleMember((prev) => !prev);
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
    >
      {navigations && navigations.length > 1 ? (
        <div className="w-full relative flex mx-auto max-w-[1500px] flex-row items-center justify-center">
          <div className="md:w-1/4 w-full flex items-center justify-center px-2">
            <Link
              href="/"
              className="lg:text-3xl text-xl text-yellow-500 text-center font-lobster cursor-pointer"
            >
              second street
            </Link>
          </div>

          <div className="web-nav w-3/4 items-center justify-end lg:flex hidden py-2">
            {navigations?.map((nav, idx) => (
              <li key={idx} className="list-none">
                <div className="flex flex-row relaitve items-center justify-center !z-50 w-full">
                  <Link
                    href={nav?.nav?.pLink?.link || ""}
                    className={`relative text-white text-base ${nav?.nav?.mLink ? "mr-2 ml-10" : "mx-10"} font-spicy uppercase flex flex-row items-center gap-2`}
                  >
                    {nav?.nav?.pLink?.title}{" "}
                  </Link>

                  {nav?.nav?.mLink && (
                    <div onClick={handleSlideDown}>
                      {banner ? (
                        <IoMdArrowDropup className="text-white text-2xl cursor-pointer" />
                      ) : (
                        <IoMdArrowDropdown className="text-white text-2xl cursor-pointer" />
                      )}
                    </div>
                  )}

                  {nav?.nav?.mLink && (
                    <div
                      className={`absolute ${banner ? "scale-y-100" : "scale-y-0"} origin-top  top-12 left-1/2 transform -translate-x-1/2 2xl:w-full w-[80%] bg-black flex flex-row items-center transition-all duration-300 ease-linear z-0 px-6 pb-6`}
                    >
                      {hoveredMember !== null ? (
                        <div className="w-1/2 bg-black p-0 m-0">
                          {nav?.nav?.mLink[hoveredMember]?.img && (
                            <Image
                              src={
                                nav?.nav?.mLink[hoveredMember]?.img ||
                                "/assets/logo.jpg"
                              }
                              width={500}
                              height={500}
                              alt={
                                nav?.nav?.mLink[hoveredMember]?.title ||
                                "Second Street Member"
                              }
                              quality={100}
                              className={`w-full ${hoveredMember !== null ? "scale-x-100" : "scale-x-0"} transition origin-right duration-300 ease-linear`}
                            />
                          )}
                        </div>
                      ) : (
                        <div className="w-1/2 m-0 p-0">
                          <Image
                            src={"/assets/logo.jpg"}
                            width={500}
                            height={500}
                            alt={"second street logo"}
                            quality={100}
                            className="bg-white w-full"
                          />
                        </div>
                      )}

                      <div className="w-full flex flex-row lg:py-8">
                        <div className="w-full flex flex-col items-center space-y-2 md:space-y-4">
                          {nav?.nav?.mLink.slice(0, 5).map((mLinks, idx) => (
                            <p
                              key={idx}
                              className="hover:underline text-center w-max"
                            >
                              <Link
                                href={mLinks?.link || ""}
                                className={`${hoveredMember === idx ? "text-yellow-500 font-rock text-xl animate-ping" : "text-white font-work"}  uppercase font-semibold tracking-wide`}
                                onMouseLeave={() => setHoveredMember(idx)}
                                onMouseEnter={() => setHoveredMember(idx)}
                              >
                                {mLinks?.title}
                              </Link>
                            </p>
                          ))}
                        </div>

                        <div className="w-full flex flex-col items-center space-y-2 md:space-y-4">
                          {nav?.nav?.mLink.slice(5, 10).map((mLinks, idx) => (
                            <p
                              key={idx}
                              className="hover:underline w-max text-center"
                            >
                              <Link
                                href={mLinks?.link || ""}
                                className={`${hoveredMember === idx + 5 ? "text-yellow-500 font-rock text-xl animate-ping" : "text-white font-work"}  uppercase font-semibold tracking-wide`}
                                onMouseLeave={() => setHoveredMember(idx + 5)}
                                onMouseEnter={() => setHoveredMember(idx + 5)}
                              >
                                {mLinks?.title}
                              </Link>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </div>

          <div className="humberger-icon relative lg:w-3/4 w-full lg:hidden flex items-center justify-end px-4">
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
            className={`absolute origin-right md:flex lg:hidden flex-col top-0 -right-96 bg-black h-screen min-w-[300px] p-4 z-50 gap-4 transition-all duration-500 ease-in-out ${sideMenu ? "scale-x-100 right-0" : "scale-x-0"}`}
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

            <div className="w-full" ref={sideBarRef}>
              <ul className="gap-2 flex flex-col">
                {navigations?.map((nav, idx) => (
                  <li key={idx}>
                    <p className="flex flex-row relaitve">
                      <Link
                        href={nav?.nav?.pLink?.link || ""}
                        key={idx}
                        className="text-white px-2 font-spicy hover:underline transform-all duration-300 ease-linear"
                        onClick={handleSideMenu}
                      >
                        {nav?.nav?.pLink?.title}
                      </Link>

                      {nav?.nav?.mLink && (
                        <IoMdArrowDropdown
                          className="text-white text-2xl cursor-pointer"
                          onClick={handleToggleMember}
                        />
                      )}
                    </p>

                    {nav?.nav?.mLink && toggleMember && (
                      <div
                        className={`relative w-full bg-black  flex flex-row gap-6 px-4 transition-all duration-700 ease-linear !z-0`}
                      >
                        <div className="w-full flex flex-col">
                          <div className="space-y-1 w-full">
                            {nav?.nav?.mLink?.slice(0, 5).map((mLinks, idx) => (
                              <p key={idx} className="hover:underline">
                                <Link
                                  href={mLinks?.link || ""}
                                  className="text-white uppercase font-work font-semibold tracking-wide text-sm opacity-70 hover:opacity-100"
                                >
                                  {mLinks?.title}
                                </Link>
                              </p>
                            ))}
                          </div>

                          <div className="space-y-1 w-full">
                            {nav?.nav?.mLink
                              ?.slice(5, 10)
                              .map((mLinks, idx) => (
                                <p key={idx} className="hover:underline w-max">
                                  <Link
                                    href={mLinks?.link || ""}
                                    className="text-white uppercase font-work font-semibold tracking-wide text-sm opacity-70 hover:opacity-100"
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
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
