"use client";

export default function DoodlePattern() {
    return (
        <div className="fixed inset-0 -z-[15] pointer-events-none overflow-hidden opacity-[0.35]">
            {/* Soft wavy blobs */}
            <div
                className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] blur-3xl"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4c1d95)" }}
            />
            <div
                className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-[55%_45%_40%_60%/45%_55%_50%_50%] blur-3xl"
                style={{ background: "linear-gradient(135deg, #0891b2, #312e81)" }}
            />
            <div
                className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-[40%_60%_55%_45%/55%_40%_60%_45%] blur-3xl"
                style={{ background: "linear-gradient(135deg, #6d28d9, #0e7490)" }}
            />

            {/* Decorative line-art shapes, scattered */}
            <svg className="absolute top-[8%] left-[6%] w-10 h-10 text-violet-300/40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" />
            </svg>

            <svg className="absolute top-[15%] right-[12%] w-8 h-8 text-cyan-300/40" viewBox="0 0 40 40" fill="none">
                <polygon points="20,4 36,34 4,34" stroke="currentColor" strokeWidth="1.2" />
            </svg>

            <svg className="absolute top-[45%] left-[4%] w-9 h-9 text-violet-300/30" viewBox="0 0 40 40" fill="none">
                <rect x="6" y="6" width="28" height="28" stroke="currentColor" strokeWidth="1.2" />
            </svg>

            <svg className="absolute bottom-[18%] right-[8%] w-10 h-10 text-cyan-300/30" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.2" />
            </svg>

            {/* Dot grid clusters */}
            <svg className="absolute top-[25%] right-[20%] w-16 h-16 text-white/20" viewBox="0 0 60 60">
                {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                        <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2" fill="currentColor" />
                    ))
                )}
            </svg>

            <svg className="absolute bottom-[10%] left-[10%] w-16 h-16 text-white/15" viewBox="0 0 60 60">
                {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                        <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="2" fill="currentColor" />
                    ))
                )}
            </svg>

            {/* Dashed dot row */}
            <svg className="absolute top-[6%] left-1/2 -translate-x-1/2 w-40 h-4 text-violet-300/30" viewBox="0 0 160 16">
                {Array.from({ length: 8 }).map((_, i) => (
                    <circle key={i} cx={8 + i * 20} cy="8" r="1.6" fill="currentColor" />
                ))}
            </svg>
        </div>
    );
}
