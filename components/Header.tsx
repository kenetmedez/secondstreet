import React from "react";

export default function Header() {
  return (
    <section
      className="z-0"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          color: "yellow",
          fontSize: "100px",
          textAlign: "center",
        }}
      >
        coming soon
      </h1>
    </section>
  );
}
