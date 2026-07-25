"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Award,
  Church,
  MapPin,
  Code2,
  Database,
  Brain,
  BarChart3,
  Terminal,
  GitBranch,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Lang, text } from "@/app/data";
import { createRipple } from "./utils";

function CardShell({
  title,
  icon: Icon,
  isDark,
  className = "",
  children,
}: {
  title: string;
  icon: React.ElementType;
  isDark: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={`h-full flex flex-col rounded-2xl border p-7 backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "bg-white/[0.03] border-white/10 hover:border-violet-400/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
          : "bg-black/[0.02] border-black/10 hover:border-violet-400/50"
      } ${className}`}
    >
      <div className="flex flex-col items-center text-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 flex items-center justify-center text-violet-400 shrink-0">
          <Icon size={16} />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

const tools = [
  { name: "Python", level: "Advanced", icon: Code2, color: "text-yellow-400 bg-yellow-500/10" },
  { name: "Pandas / NumPy", level: "Advanced", icon: BarChart3, color: "text-blue-400 bg-blue-500/10" },
  { name: "SQL / SQLite", level: "Advanced", icon: Database, color: "text-emerald-400 bg-emerald-500/10" },
  { name: "Scikit-learn", level: "Intermediate", icon: Brain, color: "text-orange-400 bg-orange-500/10" },
  { name: "Streamlit", level: "Advanced", icon: Terminal, color: "text-red-400 bg-red-500/10" },
  { name: "Git / GitHub", level: "Intermediate", icon: GitBranch, color: "text-violet-400 bg-violet-500/10" },
];

function ToolChip({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <div className="flex items-center gap-2 shrink-0 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03]">
      <span className={`w-6 h-6 rounded-md flex items-center justify-center ${tool.color}`}>
        <tool.icon size={14} />
      </span>
      <span className="text-sm font-medium whitespace-nowrap">{tool.name}</span>
      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 whitespace-nowrap">
        {tool.level}
      </span>
    </div>
  );
}

const hobbiesFull = [
  { id: "Journaling", en: "Journaling", emoji: "✍️" },
  { id: "Jogging", en: "Jogging", emoji: "🏃" },
  { id: "Membaca", en: "Reading", emoji: "📚" },
  { id: "Belajar Hal Baru", en: "Learning New Things", emoji: "🌱" },
  { id: "Menyanyi", en: "Singing", emoji: "🎤" },
  { id: "Snorkeling", en: "Snorkeling", emoji: "🤿" },
  { id: "Kuliner", en: "Trying New Food", emoji: "🍜" },
  { id: "Nonton Film", en: "Watching Movies", emoji: "🎬" },
  { id: "Dengerin Musik/Podcast", en: "Music & Podcasts", emoji: "🎧" },
  { id: "Belajar Bahasa Baru", en: "Learning Languages", emoji: "🗣️" },
  { id: "Menjahit", en: "Sewing", emoji: "✂️" },
  { id: "Traveling ke Pantai", en: "Beach Trips", emoji: "🏖️" },
];

const journal = {
  title: "Ensemble Soft Voting dari Model Hybrid CNN-Transfer Learning untuk Klasifikasi Penyakit Paru-Paru (Studi Kasus RSUD Maria Walanda Maramis)",
  titleEn: "Ensemble Soft Voting of Hybrid CNN-Transfer Learning Model for Lung Disease Classification (Case Study: RSUD Maria Walanda Maramis)",
  journalName: "Jurnal TIMES",
  volume: "Vol. 14, No. 2 (2025)",
  date: "Desember 2025",
  doi: "10.51351/jtm.14.2.2025901",
  url: "https://ejournal.stmik-time.ac.id/index.php/jurnalTIMES/article/view/901/407",
};

function CircularProgress({ percent, color }: { percent: number; color: string }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0 -rotate-90">
      <circle cx="38" cy="38" r={radius} fill="none" strokeWidth="6" className="stroke-white/5" />
      <motion.circle
        cx="38"
        cy="38"
        r={radius}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke={color}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function AboutSection({ lang, isDark }: { lang: Lang; isDark: boolean }) {
  const t = text[lang];
  const mutedText = isDark ? "text-neutral-400" : "text-neutral-600";
  const [hobbyIndex, setHobbyIndex] = useState(0);

  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto scroll-mt-28 text-center">
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30 mb-4">
        {lang === "id" ? "TENTANG SAYA" : "ABOUT ME"}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.aboutTitle}</h2>
      <p className={`mb-12 max-w-xl mx-auto ${mutedText}`}>{t.aboutSubtitle}</p>

      <div className="grid sm:grid-cols-2 gap-5 text-left">
        {/* Bacaan Saya */}
        <CardShell title={t.readsTitle} icon={Sparkles} isDark={isDark}>
          <div className="flex gap-4 items-center">
            <div className="w-16 h-20 rounded-md shrink-0 bg-gradient-to-br from-indigo-900 via-violet-800 to-neutral-900 border border-white/10 flex flex-col items-center justify-center p-1.5 shadow-lg">
              <span className="text-[9px] font-bold text-white/90 text-center leading-tight">COSMOS</span>
              <span className="text-[7px] text-white/50 mt-1">Carl Sagan</span>
            </div>
            <p className={`text-sm ${mutedText}`}>{t.reads.join(" · ")}</p>
          </div>
        </CardShell>

        {/* Perangkat Saya — two crossed marquee rows */}
        <CardShell title={lang === "id" ? "Perangkat Saya" : "My Toolkit"} icon={Terminal} isDark={isDark}>
          <p className={`text-xs mb-3 ${mutedText}`}>
            {lang === "id" ? "Tools untuk analisis data & ML." : "Tools for data analysis & ML."}
          </p>
          <div className="space-y-2 overflow-hidden">
            <div className="flex gap-2 w-max animate-marquee-slow">
              {[...tools, ...tools].map((tool, i) => (
                <ToolChip key={`row1-${i}`} tool={tool} />
              ))}
            </div>
            <div className="flex gap-2 w-max animate-marquee-slow-reverse">
              {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, i) => (
                <ToolChip key={`row2-${i}`} tool={tool} />
              ))}
            </div>
          </div>
        </CardShell>

        {/* Di Luar Kode */}
        <CardShell title={t.beyondTitle} icon={Sparkles} isDark={isDark}>
          <p className={`text-xs mb-4 ${mutedText}`}>
            {lang === "id" ? "Jelajahi minat saya di luar dunia digital." : "Exploring my interests beyond the digital world."}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {hobbiesFull.map((h, i) => (
              <button
                key={h.id}
                onClick={() => setHobbyIndex(i)}
                className={`text-xs px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors ${
                  i === hobbyIndex
                    ? "bg-violet-500/20 text-violet-300 border border-violet-400/40"
                    : isDark
                    ? "bg-white/5 text-neutral-300"
                    : "bg-black/5 text-neutral-600"
                }`}
              >
                <span>{h.emoji}</span> {lang === "id" ? h.id : h.en}
              </button>
            ))}
          </div>

          <div className={`relative rounded-xl overflow-hidden border ${isDark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={hobbyIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) setHobbyIndex((i) => (i + 1) % hobbiesFull.length);
                  else if (info.offset.x > 60) setHobbyIndex((i) => (i - 1 + hobbiesFull.length) % hobbiesFull.length);
                }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center py-8 cursor-grab active:cursor-grabbing select-none"
              >
                <span className="text-5xl mb-2">{hobbiesFull[hobbyIndex].emoji}</span>
                <span className="text-sm font-medium">
                  {lang === "id" ? hobbiesFull[hobbyIndex].id : hobbiesFull[hobbyIndex].en}
                </span>
              </motion.div>
            </AnimatePresence>
            <p className={`text-center text-[10px] pb-2 ${mutedText}`}>
              {lang === "id" ? "← geser untuk lihat lainnya →" : "← swipe to see more →"}
            </p>
          </div>
        </CardShell>

        {/* Jurnal Terpublikasi */}
        <CardShell title={lang === "id" ? "Jurnal Terpublikasi" : "Published Journal"} icon={FileText} isDark={isDark}>
          <div className="relative rounded-xl overflow-hidden mb-4 p-5 bg-gradient-to-br from-violet-600 via-purple-700 to-blue-800">
            <motion.span
              className="absolute top-3 right-4 text-violet-200/60 text-lg"
              animate={{ opacity: [0.3, 1, 0.3], rotate: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.span>
            <motion.span
              className="absolute bottom-3 left-6 text-cyan-200/50 text-xs"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ✦
            </motion.span>
            <div className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/20">
              <FileText size={20} className="text-white" />
            </div>
            <p className="text-xs text-violet-200 font-medium mb-1">{journal.journalName} · {journal.volume}</p>
            <p className="text-sm font-semibold text-white leading-snug">
              {lang === "id" ? journal.title : journal.titleEn}
            </p>
          </div>

          <div className={`text-xs space-y-1 mb-4 ${mutedText}`}>
            <div className="flex justify-between">
              <span>{lang === "id" ? "Terbit" : "Published"}</span>
              <span className="text-neutral-300">{journal.date}</span>
            </div>
            <div className="flex justify-between">
              <span>DOI</span>
              <span className="text-neutral-300">{journal.doi}</span>
            </div>
          </div>

          <a
            href={journal.url}
            target="_blank"
            onClick={createRipple}
            className="relative overflow-hidden flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-500 to-cyan-400 text-white hover:opacity-90 transition-opacity"
          >
            {lang === "id" ? "Baca Jurnal Lengkap" : "Read Full Paper"} <ExternalLink size={14} />
          </a>
        </CardShell>

        {/* Aktivitas Saat Ini — card panjang berisi 3 sub-card, span 2 baris */}
        <div className="sm:row-span-2">
          <CardShell title={lang === "id" ? "Aktivitas Saat Ini" : "Current Activities"} icon={Church} isDark={isDark} className="h-full">
            <p className={`text-xs mb-4 ${mutedText}`}>
              {lang === "id" ? "Kegiatan yang lagi aku jalani sehari-hari." : "Things I'm actively doing day to day."}
            </p>
            <div className="flex flex-col gap-3 flex-1">
              {/* Volunteer */}
              <div className={`flex-1 flex flex-col justify-between rounded-xl p-3.5 ${isDark ? "bg-white/[0.03] border border-white/10" : "bg-black/[0.02] border border-black/10"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {lang === "id" ? "AKTIF" : "ACTIVE"}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5 text-neutral-400" : "bg-black/5 text-neutral-500"}`}>
                    {lang === "id" ? "Volunteer" : "Volunteer"}
                  </span>
                </div>
                <p className="text-sm font-semibold mb-1">
                  {lang === "id" ? "Pelayan Gereja" : "Church Volunteer"}
                </p>
                <p className={`text-xs mb-2 ${mutedText}`}>
                  {lang === "id" ? "Melayani di Gereja Tiberias Indonesia" : "Serving at Tiberias Indonesia Church"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Pelayanan", "Komunitas"].map((tag) => (
                    <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5" : "bg-black/5"}`}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Guru Les */}
              <div className={`flex-1 flex flex-col justify-between rounded-xl p-3.5 ${isDark ? "bg-white/[0.03] border border-white/10" : "bg-black/[0.02] border border-black/10"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {lang === "id" ? "AKTIF" : "ACTIVE"}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5 text-neutral-400" : "bg-black/5 text-neutral-500"}`}>
                    {lang === "id" ? "Freelance" : "Freelance"}
                  </span>
                </div>
                <p className="text-sm font-semibold mb-1">
                  {lang === "id" ? "Guru Les Matematika & IT" : "Math & IT Private Tutor"}
                </p>
                <p className={`text-xs mb-2 ${mutedText}`}>
                  {lang === "id" ? "Mengajar privat untuk siswa sekolah" : "Private tutoring for school students"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Matematika", "IT"].map((tag) => (
                    <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5" : "bg-black/5"}`}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Hackathon — dalam proses, dengan progress bar */}
              <div className={`flex-1 flex flex-col justify-between rounded-xl p-3.5 ${isDark ? "bg-white/[0.03] border border-white/10" : "bg-black/[0.02] border border-black/10"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-cyan-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {lang === "id" ? "DALAM PROSES" : "IN PROGRESS"}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5 text-neutral-400" : "bg-black/5 text-neutral-500"}`}>
                    Hackathon
                  </span>
                </div>
                <p className="text-sm font-semibold mb-1">
                  {lang === "id" ? "Hackathon — Computer Science Girlies" : "Hackathon — Computer Science Girlies"}
                </p>
                <p className={`text-xs mb-2 ${mutedText}`}>
                  {lang === "id" ? "Diselenggarakan via Devpost" : "Hosted via Devpost"}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5" : "bg-black/5"}`}>Devpost</span>
                </div>
                <div className={`h-1.5 rounded-full ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
                  />
                </div>
                <p className={`text-[10px] mt-1 ${mutedText}`}>50% {lang === "id" ? "selesai" : "complete"}</p>
              </div>
            </div>
          </CardShell>
        </div>

        {/* Tersedia untuk Proyek */}
        <CardShell title={lang === "id" ? "Tersedia untuk Proyek" : "Available for Projects"} icon={MapPin} isDark={isDark}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs uppercase tracking-wide text-emerald-400 font-semibold">
              {lang === "id" ? "Terbuka untuk Freelance" : "Open for Freelance"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Data Analysis", "Python", "Streamlit", "Machine Learning"].map((tag) => (
              <span key={tag} className={`text-[11px] px-2 py-0.5 rounded-full ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className={`text-xs space-y-1 ${mutedText}`}>
            <div className="flex justify-between"><span>{lang === "id" ? "Lokasi" : "Location"}</span><span className="text-neutral-300">Manado, Indonesia</span></div>
            <div className="flex justify-between"><span>{lang === "id" ? "Zona Waktu" : "Timezone"}</span><span className="text-neutral-300">WITA (UTC+8)</span></div>
            <div className="flex justify-between"><span>{lang === "id" ? "Respons" : "Response"}</span><span className="text-neutral-300">{lang === "id" ? "Dalam 24 jam" : "Within 24h"}</span></div>
            <div className="flex justify-between"><span>Rate</span><span className="text-neutral-300">{lang === "id" ? "Terbuka untuk diskusi" : "Open to discuss"}</span></div>
          </div>
        </CardShell>

        {/* Sedang Dipelajari */}
        <CardShell title={lang === "id" ? "Sedang Dipelajari" : "Currently Learning"} icon={Sparkles} isDark={isDark}>
          <p className={`text-xs mb-4 ${mutedText}`}>
            {lang === "id" ? "Topik yang lagi aku dalami buat naik level." : "Topics I'm leveling up on right now."}
          </p>
          <div className="space-y-4">
            {[
              { id: "Machine Learning Lanjut", en: "Advanced Machine Learning", icon: Brain, progress: 60, color: "#a78bfa" },
              { id: "Deployment Model ke Cloud", en: "Cloud Model Deployment", icon: Terminal, progress: 40, color: "#22d3ee" },
              { id: "Cybersecurity Dasar (Fortinet NSE)", en: "Cybersecurity Fundamentals (Fortinet NSE)", icon: Award, progress: 25, color: "#34d399" },
            ].map((topic) => (
              <div
                key={topic.id}
                className={`flex items-center gap-4 rounded-xl p-3 ${isDark ? "bg-white/[0.03] border border-white/10" : "bg-black/[0.02] border border-black/10"}`}
              >
                <div className="relative shrink-0">
                  <CircularProgress percent={topic.progress} color={topic.color} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <topic.icon size={14} style={{ color: topic.color }} />
                    <span className="text-[10px] font-semibold mt-0.5">{topic.progress}%</span>
                  </div>
                </div>
                <span className="text-sm font-medium">{lang === "id" ? topic.id : topic.en}</span>
              </div>
            ))}
          </div>
        </CardShell>
      </div>
    </section>
  );
}
