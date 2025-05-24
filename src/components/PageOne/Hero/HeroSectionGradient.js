"use client";
import { useEffect } from "react";
import { Gradient } from "../../../utils/gradient";
import "../../../styles/hero/heroSectionGradient.css";

const HeroSectionGradient = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    const handleResize = () => {
      const canvas = document.getElementById("gradient-canvas");
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed", // changed from absolute
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <canvas
        id="gradient-canvas"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default HeroSectionGradient;
