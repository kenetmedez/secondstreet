import React from "react";
import Heading from "../ui/heading";
import Text from "../ui/text";

interface HeaderProps {
  heading?: string;
}

export default function Header({ heading }: HeaderProps) {
  return (
    <section className="w-full h-[656px] flex items-center justify-center bg-black">
      <div>
        <Heading className="uppercase">{heading}</Heading>
        <Text></Text>
      </div>
    </section>
  );
}
