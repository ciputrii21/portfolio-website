"use client";

import { useState, useEffect } from "react";
import { Lang, text } from "@/app/data";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsSection from "@/app/components/SkillsSection";
import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
import IntroLoader from "@/app/components/IntroLoader";
import DoodlePattern from "@/app/components/DoodlePattern";

export default function Home() {
  const [lang, setLang] = useState<Lang>("id");
  const isDark = true;
  const t = text[lang];

  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = ["projects", "skills", "about", "contact"];
    const handleScroll = () => {
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }
      setActiveSection(current);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 relative ${isDark ? "bg-neutral-950 text-neutral-100" : "bg-white text-neutral-900"
        }`}
    >
      <IntroLoader />
      {isDark && (
        <>
          <div
            className="fixed inset-0 -z-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 120% 60% at 50% 0%, #1e1240 0%, #150f2e 35%, #0a0a14 65%, #05050a 100%)",
            }}
          />
          <div className="fixed inset-0 -z-10 pointer-events-none shimmer-overlay" />
          <DoodlePattern />
        </>
      )}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500 z-[100]"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        navLabels={t.nav}
      />

      <Hero lang={lang} isDark={isDark} />
      <Marquee />
      <ProjectsSection lang={lang} isDark={isDark} />
      <SkillsSection lang={lang} isDark={isDark} />
      <AboutSection lang={lang} isDark={isDark} />
      <ContactSection lang={lang} isDark={isDark} />
      <Footer isDark={isDark} />
      <BackToTop isDark={isDark} />
    </main>
  );
}
