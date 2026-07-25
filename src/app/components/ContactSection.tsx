"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lang, text } from "@/app/data";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { createRipple } from "./utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success";

export default function ContactSection({ lang, isDark }: { lang: Lang; isDark: boolean }) {
  const t = text[lang];
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const copy =
    lang === "id"
      ? {
        label: "Mari Bekerja Sama",
        heading1: "Mari Ciptakan Sesuatu",
        heading2: "yang Luar Biasa Bersama",
        desc: "Siap mewujudkan proyek berikutnya? Isi form atau hubungi saya langsung.",
        formTitle: "Kirim Pesan",
        name: "Nama Anda",
        email: "Alamat Email",
        subject: "Subjek",
        subjectPlaceholder: "Kolaborasi proyek, peluang kerja...",
        message: "Pesan",
        messagePlaceholder: "Ceritakan tentang proyek atau ide Anda...",
        send: "Kirim Pesan",
        sending: "Mengirim...",
        success: "Pesan terkirim! Aku akan segera membalas.",
        required: "Wajib diisi",
        invalidEmail: "Format email tidak valid",
      }
      : {
        label: "Let's Work Together",
        heading1: "Let's Create Something",
        heading2: "Amazing Together",
        desc: "Ready to bring your next project to life? Fill the form or reach out directly.",
        formTitle: "Send a Message",
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        subjectPlaceholder: "Project collaboration, job opportunity...",
        message: "Message",
        messagePlaceholder: "Tell me about your project or idea...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        required: "This field is required",
        invalidEmail: "Invalid email format",
      };

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = copy.required;
    if (!form.email.trim()) next.email = copy.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = copy.invalidEmail;
    if (!form.subject.trim()) next.subject = copy.required;
    if (!form.message.trim()) next.message = copy.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    fetch("https://formspree.io/f/xdaqwppd", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target as HTMLFormElement),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          setForm({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus("idle"), 4000);
        } else {
          setStatus("idle");
        }
      })
      .catch(() => setStatus("idle"));
  }

  const inputBase =
    "w-full rounded-lg px-3.5 py-2.5 text-sm bg-white/[0.04] border border-white/10 placeholder:text-neutral-500 outline-none transition-all focus:border-violet-400/60 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]";

  return (
    <section id="contact" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-10 grid sm:grid-cols-2 gap-10">
        {/* Left column */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-400 mb-3">{copy.label}</p>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            {copy.heading1}{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {copy.heading2}
            </span>
          </h2>
          <p className={`text-sm mb-6 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>{copy.desc}</p>

          <div className="flex gap-3 mb-6">
            <a
              href="/cv.pdf"
              onClick={createRipple}
              className="relative overflow-hidden px-4 py-2.5 rounded-lg text-sm font-medium border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              {t.downloadCV} ↓
            </a>
            <a
              href="https://id.linkedin.com/in/shalom-putri-taringanen-400361235"
              target="_blank"
              onClick={createRipple}
              className="relative overflow-hidden flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-violet-500 to-cyan-400 text-white"
            >
              <LinkedinIcon size={16} /> LinkedIn ↗
            </a>
          </div>

          <div className="space-y-2 text-sm">
            <a
              href="mailto:shalomputri21@gmail.com"
              className={`flex items-center gap-2 ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              📧 shalomputri21@gmail.com
            </a>
            <a
              href="https://github.com/ciputrii21"
              target="_blank"
              className={`flex items-center gap-2 ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-neutral-900"}`}
            >
              <GithubIcon size={14} /> github.com/ciputrii21
            </a>
          </div>
        </div>

        {/* Right column: form */}
        <div>
          <h3 className="font-semibold mb-4">{copy.formTitle}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-neutral-400 mb-1 block">{copy.name}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={inputBase}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs text-neutral-400 mb-1 block">{copy.email}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className={inputBase}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="text-xs text-neutral-400 mb-1 block">{copy.subject}</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder={copy.subjectPlaceholder}
                className={inputBase}
              />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label className="text-xs text-neutral-400 mb-1 block">{copy.message}</label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={copy.messagePlaceholder}
                className={inputBase}
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-violet-500 to-cyan-400 text-white disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  {copy.sending}
                </>
              ) : (
                copy.send
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-emerald-400 text-center"
                >
                  ✓ {copy.success}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
