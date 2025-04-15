"use client";
import React from "react";

import Link from "next/link";

export default function PartOne() {
  return (
    <div
      className="w-full h-screen items-center justify-center bg-pink-400
 flex flex-col   px-4"
    >
      {
        <button className="py-2 px-6 border border-white rounded-sm uppercase bg-white text-sm cursor-pointer drop-shadow-sm shadow-pink-950">
          <span className="pr-2 border-r border-gray-200">🌷</span>
          <span className="pl-2 text-xs tracking-wide font-mono">
            i just want to tell you ...
          </span>
        </button>
      }
      <div className="flex w-full items-center justify-center pt-20">
        <Link
          href="/monthsary/parttwo"
          className="pt-10 flex items-end justify-end w-full"
        >
          <span className="font-mono text-xs p-2 bg-white rounded-sm flex self-end">
            {" "}
            more...
          </span>
        </Link>
      </div>
    </div>
  );
}
