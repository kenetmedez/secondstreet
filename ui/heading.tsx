import React from "react";

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h1
      className={`md:text-7xl text-3xl text-yellow-400 text-center leading-normal ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
