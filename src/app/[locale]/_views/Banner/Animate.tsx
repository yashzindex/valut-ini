"use client";
import { motion } from "framer-motion";

export function Animate() {
  return (
    <motion.div
      className="absolute top-0 md:top-5 left-0 z-10 h-full w-full bg-secondary"
      initial={{ scaleY: 1, transformOrigin: "bottom" }}
      animate={{
        scaleY: 0,
        transition: {
          delay: 0.5,
          duration: 2.5,
        },
      }}
    />
  );
}
