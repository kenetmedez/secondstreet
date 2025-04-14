import React from "react";

interface HeadingProps {
  children?: React.ReactNode;
  className?: string;
  type?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className, type }) => {
  return (
    <>
      {type === "h1" ? (
        <h1
          className={`md:text-7xl text-3xl text-yellow-400 text-center leading-normal ${className}`}
        >
          {children}
        </h1>
      ) : type === "h2" ? (
        <h2>{children}</h2>
      ) : (
        ""
      )}
    </>
  );
};

export default Heading;
