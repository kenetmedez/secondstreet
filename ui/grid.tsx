import React from "react";

interface GridProps {
  children?: React.ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <div className={`w-full grid md:grid-cols-3 grid-cols-1  ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
