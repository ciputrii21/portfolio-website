"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(16px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-neutral-950"
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Rotating gradient ring */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="46" fill="none" strokeWidth="2" className="stroke-white/10" />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="url(#introGradient)"
                strokeDasharray="70 219"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              />
              <defs>
                <linearGradient id="introGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>

            {/* Centered stacked name */}
            <div className="flex flex-col items-center leading-none">
              <span className="text-sm font-semibold tracking-[0.35em] bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                SHALOM
              </span>
              <span className="text-sm font-semibold tracking-[0.35em] text-neutral-500 mt-1.5">
                PUTRI
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
