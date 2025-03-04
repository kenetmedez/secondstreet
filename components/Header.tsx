import React from "react";
import Heading from "../ui/heading";
import Text from "../ui/text";

interface HeaderProps {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  btn?: string;
  style?: string;
}

export default function Header({
  image,
  title,
  subtitle,
  description,
  btn,
  style,
}: HeaderProps) {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={style}>
        <Heading style={style} heading={title} />
        {subtitle && <span className="">{subtitle}</span>}
        {description && <Text text={description} />}
      </div>
      {btn && <div>{btn}</div>}
    </section>
  );
}
