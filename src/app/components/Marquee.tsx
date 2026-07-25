"use client";

import { marqueeTags } from "@/app/data";

export default function Marquee() {
    return (
        <div className="relative overflow-hidden py-10">
            <div className="-rotate-2 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 py-3 shadow-lg">
                <div className="flex w-max animate-marquee gap-8">
                    {[...marqueeTags, ...marqueeTags].map((tag, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-2 text-sm font-bold text-neutral-950 whitespace-nowrap uppercase tracking-wide"
                        >
                            {tag} <span>✦</span>
                        </span>
                    ))}
                </div>
            </div>
            <div className="rotate-2 -mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 py-3 shadow-lg">
                <div className="flex w-max animate-marquee-reverse gap-8">
                    {[...marqueeTags, ...marqueeTags].map((tag, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-2 text-sm font-bold text-neutral-950 whitespace-nowrap uppercase tracking-wide"
                        >
                            {tag} <span>✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
