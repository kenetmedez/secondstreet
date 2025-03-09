import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoReorderThreeOutline } from "react-icons/io5";

import { navigations } from "../lib/navigation";

export default function Navigation() {
  return (
    <nav
      className={`fixed top-0 z-[999] w-full max-w-[1280px] mx-auto h-[40px] flex items-center justify-center`}
    >
      {navigations && navigations.length > 1 ? (
        <div className="w-full flex max-w-[1280px] mx-auto flex-row items-center justify-center py-4">
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
