"use client";

import { motion } from "framer-motion";

export default function PlanetGraphic() {
    return (
        <div className="relative w-40 h-40 mx-auto mb-6">
            <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.6)] top-1/2 -left-2 -translate-y-1/2" />
            </motion.div>
            <div
                className="absolute inset-0 rounded-full border border-violet-400/30"
                style={{ transform: "scale(1.35) rotateX(70deg)" }}
            />
            <motion.div
                className="w-40 h-40 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle at 35% 30%, #c4b5fd 0%, #8b5cf6 35%, #6d28d9 65%, #3730a3 100%)",
                    boxShadow: "0 0 60px 10px rgba(139,92,246,0.35)",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
