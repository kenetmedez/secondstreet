"use client";
import React, { useState } from "react";

import Link from "next/link";

export default function PartFour() {
  const [surprise, setSurprise] = useState(false);

  const handleSurprise = () => {
    setSurprise((prev) => !prev);
  };

  return (
    <div
      className="w-full h-screen items-center justify-center bg-pink-400
 flex flex-col   px-4"
    >
      <div className="mb-4">
        {/* <Image src="/assets/gif.gif" width={300} alt="text" height={300} /> */}
      </div>
      {!surprise && (
        <button
          onClick={handleSurprise}
          className="py-2 px-6 text-left border border-white rounded-sm uppercase bg-white text-sm cursor-pointer drop-shadow-sm shadow-pink-950"
        >
          <span className="pl-2 pb-2 border-r text-left border-gray-200">
            🌷
          </span>
          <br />
          <hr className="py-2 text-gray-200" />
          <p className="pl-2 text-xs tracking-wide font-mono">
            thank you kaayo sa imong kaayo langga ha sa akoa
          </p>

          <p className="pl-2 text-xs tracking-wide font-mono">
            sukad sauna naa jud ka
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono">
            wala ko katuo til now nagka lig-on tang duha,
          </p>
          <br />
          <p className="pl-2 text-xs tracking-wide font-mono">
            kblo ko nga cliche na kaayo paminawn, ill keep it simple
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono">
            pero gikan sa ako heart.
          </p>
          <br />
          <p className="pl-2 text-[8px] tracking-wide font-mono">
            {"("}actually karon rani nako gi code pag 12AM{")"} wala ko nalimot
            hehe.
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono">
            happy mothsary langg, even tho everyday is our day.
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono">
            you know how much I admire you.
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono">
            i just hope, we`ll continue fighting and always find a way to solve
            it.
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono">
            i love every inch of you, langga.
          </p>
          <br />
          <p className="pl-2 text-xs tracking-wide font-mono">to my ocean,</p>
          <br />
          <p className="pl-2 text-xs tracking-wide font-mono">
            i still remember andam ko malunos nimo
          </p>
          <p className="pl-2 text-xs tracking-wide font-mono mb-2">
            sa kalawm sa imong paghigugma.
          </p>
          <p className="pl-2 text-[10px] tracking-wide font-mono mb-2">
            see u tomorrow, my date. 🌷
          </p>
          <br />
          <hr className="text-gray-200" />
          <div className="flex w-full items-end justify-end">
            <span className="pt-2 border-l pl-2 border-gray-200"> 🌷</span>
          </div>
          <p className="pl-2 text-xs tracking-wide font-mono"></p>
        </button>
      )}
      <div className="flex w-full items-center justify-center pt-20">
        <Link
          href="/monthsary"
          className="pt-10 flex items-end justify-end w-full"
        >
          <span className="font-mono text-xs p-2 bg-white rounded-sm flex self-end">
            {" "}
            start...
          </span>
        </Link>
      </div>
    </div>
  );
}
