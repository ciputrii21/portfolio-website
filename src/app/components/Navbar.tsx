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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-xl bg-neutral-900/90 border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      {(["home", "projects", "skills", "about", "contact"] as const).map((id) => (
        <a
          key={id}
          href={id === "home" ? "#" : `#${id}`}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeSection === id
              ? "bg-neutral-100 text-neutral-900"
              : "text-neutral-300 hover:text-white"
          }`}
        >
          {navLabels[id]}
        </a>
      ))}
      <button
        onClick={() => setLang(lang === "en" ? "id" : "en")}
        className="ml-1 w-9 h-9 flex items-center justify-center rounded-full text-xs font-semibold hover:bg-white/10"
      >
        {lang === "en" ? "ID" : "EN"}
      </button>
    </nav>
  );
}
