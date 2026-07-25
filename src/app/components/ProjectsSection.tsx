"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Lang, text, projects } from "@/app/data";

const tagColors: Record<string, string> = {
  Hackathon: "from-violet-500 to-purple-500",
  "Data & ML": "from-cyan-500 to-blue-500",
  "Freelance / Internship": "from-emerald-500 to-teal-500",
};

export default function ProjectsSection({ lang, isDark }: { lang: Lang; isDark: boolean }) {
  const t = text[lang];
  const [filter, setFilter] = useState<string>("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const filterOptions =
    lang === "id"
      ? ["Semua", "Hackathon", "Data & ML", "Freelance / Magang"]
      : ["All", "Hackathon", "Data & ML", "Freelance / Internship"];

  const filteredProjects =
    filter === "All" || filter === "Semua"
      ? projects
      : projects.filter((p) => p.tag === filter || filter === "Semua");

  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto scroll-mt-28">
      <h2 className="text-3xl font-bold mb-2">{t.projectsTitle}</h2>
      <p className={`mb-8 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>{t.projectsSubtitle}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1.5 rounded-full border ${
              filter === f
                ? isDark
                  ? "bg-white text-neutral-900 border-white"
                  : "bg-neutral-900 text-white border-neutral-900"
                : isDark
                ? "border-neutral-700 text-neutral-300 hover:border-neutral-400"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
        {filteredProjects.map((p) => {
          const tabColor = tagColors[p.tag] ?? "from-violet-500 to-purple-500";
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(p.title)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                setTilt({ x: (py - 0.5) * -10, y: (px - 0.5) * 10 });
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setTilt({ x: 0, y: 0 });
              }}
              style={{
                perspective: 800,
                rotateX: hoveredCard === p.title ? tilt.x : 0,
                rotateY: hoveredCard === p.title ? tilt.y : 0,
              }}
              className="relative"
            >
              {/* Folder tab */}
              <div
                className={`absolute -top-5 left-0 h-6 w-32 rounded-t-lg bg-gradient-to-r ${tabColor} flex items-center px-3`}
              >
                <span className="text-[10px] font-bold text-white truncate">{p.category}</span>
              </div>

              {/* Folder body */}
              <div
                className={`rounded-2xl rounded-tl-none border p-6 pt-7 transition-all duration-300 ${
                  hoveredCard === p.title
                    ? "border-violet-400 shadow-[0_0_30px_rgba(167,139,250,0.3)] scale-[1.02]"
                    : hoveredCard
                    ? isDark
                      ? "border-neutral-800 opacity-50 blur-[1px] scale-[0.98]"
                      : "border-neutral-200 opacity-50 blur-[1px] scale-[0.98]"
                    : isDark
                    ? "border-neutral-800 bg-white/[0.02]"
                    : "border-neutral-200 bg-black/[0.01]"
                }`}
              >
                <div className="flex justify-end mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      p.status === "Done" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                <ul className="text-sm space-y-2 mb-4">
                  {p.bullets[lang].map((b) => (
                    <li key={b} className="flex gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span className={isDark ? "text-neutral-400" : "text-neutral-600"}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] px-2 py-0.5 rounded-full ${
                        isDark ? "bg-neutral-800 text-neutral-300" : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    className={`underline underline-offset-4 ${
                      isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    {t.viewCode}
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className={`underline underline-offset-4 ${
                        isDark ? "text-neutral-300 hover:text-white" : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {t.viewLive}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
