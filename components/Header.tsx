import React from "react";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Image from "next/image";

interface HeaderProps {
  heading?: string;
}

export default function Header({ heading }: HeaderProps) {
  return (
    <section className="w-full relative h-[556px] flex items-center justify-center">
      <div className="absolute h-full w-full z-10 bg-black/80" />
      <Image
        src="/assets/sample.jpeg"
        width={800}
        height={500}
        alt="second street hero"
        className="absolute w-full h-full object-cover"
      />
      <div className="z-50">
        <Heading className="uppercase">{heading}</Heading>
        <Text></Text>
      </div>
    </section>
  );
}
