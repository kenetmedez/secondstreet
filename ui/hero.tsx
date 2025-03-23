import React from "react";
import Heading from "../ui/heading";
import Text from "../ui/text";

interface HeaderProps {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  btn?: string;
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  image,
  title,
  subtitle,
  description,
  btn,
  className,
}: HeaderProps) => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={className}>
        <Heading className={className}>{title}</Heading>
        {subtitle && <span className="">{subtitle}</span>}
        {description && <Text>{description}</Text>}
      </div>
      {btn && <div>{btn}</div>}
    </section>
  );
};

export default Header;
