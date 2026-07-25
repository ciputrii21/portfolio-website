"use client";

import { motion } from "framer-motion";

const nodes = [
    { x: 20, y: 30, layer: 0 },
    { x: 20, y: 70, layer: 0 },
    { x: 55, y: 18, layer: 1 },
    { x: 55, y: 50, layer: 1 },
    { x: 55, y: 82, layer: 1 },
    { x: 90, y: 50, layer: 2 },
];

const links: [number, number][] = [
    [0, 2], [0, 3], [1, 3], [1, 4],
    [2, 5], [3, 5], [4, 5],
];

export default function NeuralAvatar() {
    return (
        <svg viewBox="0 0 110 100" className="w-16 h-16">
            <defs>
                <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#c4b5fd" />
                    <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
            </defs>

            {links.map(([a, b], i) => (
                <motion.line
                    key={i}
                    x1={nodes[a].x}
                    y1={nodes[a].y}
                    x2={nodes[b].x}
                    y2={nodes[b].y}
                    stroke="url(#nodeGradient)"
                    strokeWidth={1}
                    initial={{ opacity: 0.15 }}
                    animate={{ opacity: [0.15, 0.6, 0.15] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                />
            ))}

            {nodes.map((n, i) => (
                <motion.circle
                    key={i}
                    cx={n.x}
                    cy={n.y}
                    r={5}
                    fill="url(#nodeGradient)"
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: n.layer * 0.3 }}
                    style={{ filter: "drop-shadow(0 0 3px rgba(139,92,246,0.8))" }}
                />
            ))}
        </svg>
    );
}
