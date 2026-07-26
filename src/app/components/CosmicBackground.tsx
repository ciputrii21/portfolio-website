"use client";

import { motion } from "framer-motion";
import { stars, sparkles } from "@/app/data";

export default function CosmicBackground({ isDark }: { isDark: boolean }) {
    const ringCount = 5;

    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Base wash across the whole section so it's never plain black */}
            <div
                className={`absolute inset-0 ${isDark ? "opacity-100" : "opacity-0"}`}
                style={{
                    background:
                        "radial-gradient(ellipse 100% 80% at 50% 20%, rgba(139,92,246,0.18) 0%, rgba(34,211,238,0.10) 45%, transparent 80%)",
                }}
            />

            {/* Radial glow center, less blur so color reads stronger */}
            <div
                className={`absolute left-1/2 top-0 -translate-x-1/2 w-[380px] h-[380px] sm:w-[800px] sm:h-[800px] rounded-full blur-2xl ${isDark ? "opacity-60" : "opacity-15"
                    }`}
                style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 60%)" }}
            />
            <div
                className={`absolute left-1/2 top-16 -translate-x-1/2 w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] rounded-full blur-2xl ${isDark ? "opacity-50" : "opacity-15"
                    }`}
                style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 60%)" }}
            />
            <div
                className={`absolute left-1/2 top-40 -translate-x-1/2 w-[320px] h-[320px] rounded-full blur-xl ${isDark ? "opacity-70" : "opacity-20"
                    }`}
                style={{ background: "radial-gradient(circle, #c4b5fd 0%, transparent 60%)" }}
            />

            {/* Ripple / orbital rings expanding outward from center */}
            {Array.from({ length: ringCount }).map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full border ${isDark ? "border-violet-400/30" : "border-violet-400/15"
                        }`}
                    style={{ width: 200 + i * 140, height: 200 + i * 140 }}
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                    }}
                />
            ))}

            {/* Twinkling stars, dark mode only — bigger and brighter so they actually read */}
            {isDark &&
                stars.map((s, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]"
                        style={{ top: s.top, left: s.left, width: s.size * 2, height: s.size * 2 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                    />
                ))}

            {/* Floating particles, drift slowly upward */}
            {isDark &&
                stars.map((s, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute rounded-full bg-violet-300/80"
                        style={{ top: s.top, left: s.left, width: 4, height: 4 }}
                        animate={{ y: [0, -30, 0], x: [0, i % 2 === 0 ? 10 : -10, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 8 + (i % 6), repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
                    />
                ))}

            {/* Sparkles ✦ */}
            {isDark &&
                sparkles.map((s, i) => (
                    <motion.span
                        key={i}
                        className="absolute text-violet-300"
                        style={{ top: s.top, left: s.left, fontSize: s.size }}
                        animate={{ opacity: [0.4, 1, 0.4], rotate: [0, 90, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
                    >
                        ✦
                    </motion.span>
                ))}
        </div>
    );
}
