"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const handleHover = () => setHovering(true);
    const handleLeave = () => setHovering(false);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Dot kecil, ngikutin instan */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none rounded-full bg-violet-400"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          width: 6,
          height: 6,
        }}
        transition={{ type: "tween", duration: 0 }}
      />
      {/* Ring, ngikutin dengan sedikit lag */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none rounded-full border border-violet-400"
        animate={{
          x: pos.x - (hovering ? 24 : 14),
          y: pos.y - (hovering ? 24 : 14),
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          opacity: hovering ? 0.8 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      />
    </>
  );
}