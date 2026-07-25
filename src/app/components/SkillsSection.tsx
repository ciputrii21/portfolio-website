"use client";

import { motion } from "framer-motion";
import { Lang } from "@/app/data";

type Skill = { name: string; level: number };

const hardSkills: Skill[] = [
    { name: "Python", level: 85 },
    { name: "Pandas / NumPy", level: 80 },
    { name: "Machine Learning", level: 65 },
    { name: "Scikit-learn", level: 65 },
    { name: "Matplotlib / Seaborn", level: 80 },
    { name: "SQL / SQLite", level: 75 },
    { name: "Streamlit", level: 80 },
    { name: "Data Visualization", level: 75 },
    { name: "Git / GitHub", level: 70 },
    { name: "Laravel / PHP", level: 45 },
];

const softSkills: Skill[] = [
    { name: "Problem Solving", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Attention to Detail", level: 85 },
    { name: "Continuous Learning", level: 90 },
    { name: "Time Management", level: 70 },
];

function levelBadge(level: number, lang: Lang) {
    const labels =
        lang === "id"
            ? { expert: "Mahir", advanced: "Lanjutan", intermediate: "Menengah", beginner: "Pemula" }
            : { expert: "Expert", advanced: "Advanced", intermediate: "Intermediate", beginner: "Beginner" };

    if (level >= 80) return labels.expert;
    if (level >= 65) return labels.advanced;
    if (level >= 45) return labels.intermediate;
    return labels.beginner;
}

function SkillBar({ skill, lang, isDark, index }: { skill: Skill; lang: Lang; isDark: boolean; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
        >
            <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium">{skill.name}</span>
                <div className="flex items-center gap-2">
                    <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5 text-neutral-400" : "bg-black/5 text-neutral-500"
                            }`}
                    >
                        {levelBadge(skill.level, lang)}
                    </span>
                    <span className="text-xs text-neutral-500 w-9 text-right">{skill.level}%</span>
                </div>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 group-hover:brightness-125 transition-[filter]"
                />
            </div>
        </motion.div>
    );
}

export default function SkillsSection({ lang, isDark }: { lang: Lang; isDark: boolean }) {
    const title = lang === "id" ? "Keahlian" : "Skills";
    const subtitle =
        lang === "id"
            ? "Tingkat kemahiran di tools dan kemampuan yang aku gunakan sehari-hari."
            : "Proficiency across the tools and abilities I use day to day.";
    const hardLabel = lang === "id" ? "Hard Skills" : "Hard Skills";
    const softLabel = lang === "id" ? "Soft Skills" : "Soft Skills";
    const mutedText = isDark ? "text-neutral-400" : "text-neutral-600";

    return (
        <section id="skills" className="px-6 py-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className={`mb-10 ${mutedText}`}>{subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-400 mb-5">{hardLabel}</h3>
                    <div className="space-y-5">
                        {hardSkills.map((s, i) => (
                            <SkillBar key={s.name} skill={s} lang={lang} isDark={isDark} index={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-400 mb-5">{softLabel}</h3>
                    <div className="space-y-5">
                        {softSkills.map((s, i) => (
                            <SkillBar key={s.name} skill={s} lang={lang} isDark={isDark} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
