"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { Lang, text } from "@/app/data";
import { createRipple, AnimatedNumber } from "./utils";
import CosmicBackground from "./CosmicBackground";
import NeuralAvatar from "./NeuralAvatar";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
} as const;

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/ciputrii21", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://id.linkedin.com/in/shalom-putri-taringanen-400361235", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shalomputri21@gmail.com", label: "Email" },
  { icon: InstagramIcon, href: "https://instagram.com/shalomputrii.m", label: "Instagram" },
];

export default function Hero({ lang, isDark }: { lang: Lang; isDark: boolean }) {
  const t = text[lang];
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const fullText = t.hero.subtitle;
    setTypedText("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [lang, t.hero.subtitle]);

  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-16 max-w-4xl mx-auto text-center">
      <CosmicBackground isDark={isDark} />

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="w-28 h-28 mx-auto mb-6 relative"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-50 blur-xl" />
          <div className="relative w-28 h-28 rounded-full border border-white/20 bg-neutral-900/60 backdrop-blur-xl flex items-center justify-center">
            <NeuralAvatar />
          </div>
        </motion.div>

        <motion.span
          variants={item}
          className="inline-block text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30 mb-6"
        >
          {t.hero.badge}
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          variants={item}
          className={`max-w-xl mx-auto mb-8 min-h-[3rem] ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div variants={item} className="flex justify-center gap-4 mb-8">
          <a
            href="#projects"
            onClick={createRipple}
            className="relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            onClick={createRipple}
            className={`relative overflow-hidden px-5 py-2 rounded-full border text-sm font-medium ${
              isDark ? "border-neutral-700 hover:border-neutral-400" : "border-neutral-300 hover:border-neutral-500"
            }`}
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        <motion.div variants={item} className="flex justify-center gap-3 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-400"
                  : "border-neutral-300 text-neutral-500 hover:text-neutral-900 hover:border-neutral-500"
              }`}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-4 gap-4">
          {t.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold">
                <AnimatedNumber value={s.value} />
              </div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
