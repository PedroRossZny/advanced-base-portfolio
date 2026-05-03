"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        bgRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        bgRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-30"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--borda) 2px, transparent 1px), linear-gradient(to bottom, var(--borda) 2px, transparent 1px)",
        backgroundSize: "50px 50px",
        maskImage: "radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)",
      }}
    />
  );
}