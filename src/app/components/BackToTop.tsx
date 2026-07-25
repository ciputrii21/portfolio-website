"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop({ isDark }: { isDark: boolean }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-xl shadow-lg transition-colors ${isDark
                            ? "bg-neutral-900/80 border-white/10 text-neutral-300 hover:text-white hover:border-violet-400/50"
                            : "bg-white/80 border-black/10 text-neutral-600 hover:text-neutral-900 hover:border-violet-400/50"
                        }`}
                >
                    <ArrowUp size={16} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
