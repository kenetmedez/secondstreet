import React from "react";
import Heading from "../ui/heading";
import Text from "../ui/text";
// import Image from "next/image";

interface HeaderProps {
  heading?: string;
}

export default function Header({ heading }: HeaderProps) {
  return (
    <section className="w-full relative md:h-screen h-[300px] flex items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full z-10 bg-black/80" />
      <iframe
        width="1024"
        height="800"
        src="https://www.youtube.com/embed/nM3WLF-O_Qs?autoplay=1&mute=1&playsinline=1&modestbranding=1&showinfo=0&controls=0&disablekb=1&rel=0&start=18"
        title="Second Street Video Player"
        frameBorder="0"
        allow="autoplay; encrypted-media;"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute w-full h-full object-cover scale-110"
      />

      <div className="z-50">
        <Heading className="uppercase font-rock">{heading}</Heading>
        <Text></Text>
      </div>
    </section>
  );
}
