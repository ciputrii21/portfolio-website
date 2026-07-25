"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function createRipple(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(el.clientWidth, el.clientHeight);
    const rect = el.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.classList.add("ripple-effect");
    const existing = el.getElementsByClassName("ripple-effect")[0];
    if (existing) existing.remove();
    el.appendChild(circle);
}

export function AnimatedNumber({ value }: { value: string }) {
    const numMatch = value.match(/\d+/);

    if (!numMatch) {
        return (
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                {value}
            </motion.span>
        );
    }

    const suffix = value.replace(/\d+/, "");
    const target = parseInt(numMatch[0]);
    const [display, setDisplay] = useState(`0${suffix}`);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
                let start = 0;
                const duration = 1000;
                const stepTime = 16;
                const steps = duration / stepTime;
                const increment = target / steps;
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        setDisplay(target + suffix);
                        clearInterval(timer);
                    } else {
                        setDisplay(Math.floor(start) + suffix);
                    }
                }, stepTime);
            }}
        >
            {display}
        </motion.span>
    );
}
