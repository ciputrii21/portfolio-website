"use client";

import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";

export default function Footer({ isDark }: { isDark: boolean }) {
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/ciputrii21", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://id.linkedin.com/in/shalom-putri-taringanen-400361235", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://instagram.com/shalomputrii.m", label: "Instagram" },
  ];

  return (
    <footer className={`px-6 py-8 border-t ${isDark ? "border-white/10" : "border-black/10"}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-xs ${isDark ? "text-neutral-500" : "text-neutral-400"}`}>
          © 2026 Shalom Putri Maharani Taringanen. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className={`transition-colors ${
                isDark ? "text-neutral-500 hover:text-white" : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
