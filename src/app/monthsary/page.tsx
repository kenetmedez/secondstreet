"use client";
import React, { useState } from "react";

import Link from "next/link";

export default function Monthsary() {
  const [surprise, setSurprise] = useState(false);

  const handleSurprise = () => {
    setSurprise((prev) => !prev);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-pink-400
    "
    >
      {!surprise && (
        <button
          onClick={handleSurprise}
          className="py-2 px-6 border border-white rounded-sm uppercase bg-white text-sm cursor-pointer drop-shadow-sm shadow-pink-950"
        >
          <span className="pr-2 border-r border-gray-200">🌷</span>
          <span className="pl-2 text-xs tracking-wide font-mono">click me</span>
        </button>
      )}
      {surprise && (
        <div className="flex w-full items-center justify-center">
          <p className="font-mono text-xs pb-20 font-semibold">
            happy Monthsary, langga!
          </p>

          <Link href="/monthsary/partone" className="pt-10">
            <span className="font-mono text-xs p-2 bg-white rounded-sm">
              {" "}
              more...
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
