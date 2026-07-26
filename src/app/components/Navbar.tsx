"use client";

import { Lang } from "@/app/data";

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  activeSection: string;
  navLabels: { home: string; projects: string; skills: string; about: string; contact: string };
};

export default function Navbar({ lang, setLang, activeSection, navLabels }: Props) {
  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-1 rounded-full border px-1.5 sm:px-2 py-1.5 sm:py-2 backdrop-blur-xl bg-neutral-900/90 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)] max-w-[94vw] overflow-x-auto hide-scrollbar">
      {(["home", "projects", "skills", "about", "contact"] as const).map((id) => (
        <a
          key={id}
          href={id === "home" ? "#" : `#${id}`}
          className={`shrink-0 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeSection === id
              ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white"
              : "text-neutral-300 hover:text-white"
            }`}
        >
          {navLabels[id]}
        </a>
      ))}
      <button
        onClick={() => setLang(lang === "en" ? "id" : "en")}
        className="shrink-0 ml-0.5 sm:ml-1 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-xs font-semibold hover:bg-white/10"
      >
        {lang === "en" ? "ID" : "EN"}
      </button>
    </nav>
  );
}
