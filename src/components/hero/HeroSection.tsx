"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, Briefcase, Cpu, Sparkles } from "lucide-react";
import type { Professor } from "@/lib/types";

interface HeroSectionProps {
  professor: Professor;
}

const floatingCards = [
  {
    icon: BookOpen,
    title: "Academician",
    subtitle: "HOD Edu Dept. & Coordinator",
    color: "text-blue-600 bg-blue-500/10",
    position: "top-4 -left-4 sm:-left-8 lg:-left-12",
    delay: 0.3,
  },
  {
    icon: Cpu,
    title: "Technology & Innovation",
    subtitle: "Python · IoT · DBMS · Cloud",
    color: "text-purple-600 bg-purple-500/10",
    position: "bottom-24 -left-4 sm:-left-6 lg:-left-10",
    delay: 0.45,
  },
  {
    icon: Briefcase,
    title: "Placement & Career",
    subtitle: "Placement Head & Advisor",
    color: "text-emerald-600 bg-emerald-500/10",
    position: "bottom-2 -right-4 sm:-right-6 lg:-right-8",
    delay: 0.6,
  },
];

const expertiseTags = [
  "Python", "Django", "IoT", "C++", "Power BI", "DBMS", "Computer Science",
];

export function HeroSection({ professor }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="ios-glass-card rounded-[36px] p-6 sm:p-9 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white/95 bg-white/85 backdrop-blur-2xl">
              {/* Eyebrow & Platform Partner Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ios-glass-pill text-[0.75rem] font-semibold tracking-wider text-indigo-700 uppercase">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  Academic &bull; Technology &bull; Learning
                </div>

                <a
                  href="https://www.algoforceaii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200"
                  title="Powered by AlgoForce (www.algoforceaii.com)"
                >
                  <span className="text-[0.72rem] text-zinc-500 font-medium">Powered by</span>
                  <span className="text-[0.82rem] font-extrabold tracking-[-0.02em] leading-none inline-flex items-center">
                    <span className="text-[#072942]">Algo</span>
                    <span className="text-[#9b50f7]">Force</span>
                  </span>
                  <span className="text-[0.68rem] text-zinc-400 group-hover:text-[#9b50f7] font-medium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    ↗
                  </span>
                </a>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-5"
              >
                Learn.{" "}
                <span className="text-zinc-900">Explore.</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  Build.
                </span>
              </motion.h1>

              {/* Bio Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-zinc-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7 font-normal"
              >
                Welcome to the personal academic platform of{" "}
                <strong className="text-zinc-950 font-semibold">{professor.name}</strong>{" "}
                — dedicated educator, academician, and technology consultant at{" "}
                <span className="text-zinc-950 font-medium">New Delhi Institute of Management</span>.
                Empowering students with foundational depth, industry relevance, and modern computing skills.
              </motion.p>

              {/* Institutional affiliations & researcher pills */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 bg-white/80 backdrop-blur-md border border-white/90 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  NDIM (BBA & BCA)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 bg-white/80 backdrop-blur-md border border-white/90 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  Editorial Board &bull; Results in Engineering (Elsevier)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 bg-white/80 backdrop-blur-md border border-white/90 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Research Scholar (KR Mangalam Univ.)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 bg-white/80 backdrop-blur-md border border-white/90 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  Academic Counsellor (IGNOU)
                </span>
                <a
                  href={professor.orcidUrl ?? "https://orcid.org/0009-0000-9701-246X"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-colors"
                  title="View verified ORCID Record"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  ORCID: 0009-0000-9701-246X ↗
                </a>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-8"
              >
                <Link
                  href="/notes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1d1d1f] hover:bg-black text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200"
                >
                  <span>Explore Notes</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/lectures"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/90 hover:bg-white border border-black/[0.08] text-zinc-900 text-sm font-semibold rounded-full shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
                >
                  <Play size={14} className="fill-zinc-900 text-zinc-900" />
                  <span>Watch Lectures</span>
                </Link>
              </motion.div>

              {/* Core expertise chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5"
              >
                <span className="text-xs text-zinc-400 font-medium mr-1">Focus:</span>
                {expertiseTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-zinc-600 bg-white/70 backdrop-blur-sm border border-black/[0.05] px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column: iOS Frosted Portrait & Floating Cards (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">

              {/* Portrait Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Luminous Glow behind portrait */}
                <div
                  className="absolute -inset-2 rounded-[36px] pointer-events-none opacity-75"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(165, 180, 252, 0.45) 0%, rgba(199, 210, 254, 0.2) 50%, transparent 70%)",
                    filter: "blur(32px)",
                  }}
                  aria-hidden="true"
                />

                {/* Squircle Glass Frame */}
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/90 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.12),_0_4px_16px_rgba(0,0,0,0.04)] bg-white/40 backdrop-blur-sm">
                  <Image
                    src={professor.photo}
                    alt={`${professor.name} — Academician and Placement Head at New Delhi Institute of Management`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 420px"
                    priority
                  />
                  {/* Subtle rim vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none border border-white/40 rounded-[32px]"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              {/* Desktop/Tablet Floating Glass Cards */}
              {floatingCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                    className={`hidden sm:flex absolute ${card.position} z-20 ios-glass-card rounded-2xl px-3.5 py-2.5 items-center gap-3 shadow-lg`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${card.color}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-[0.78rem] font-bold text-zinc-900 leading-tight">
                        {card.title}
                      </p>
                      <p className="text-[0.68rem] text-zinc-500 leading-tight font-medium">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Mobile Glass Cards (stacked gracefully under portrait without clipping) */}
              <div className="grid grid-cols-1 gap-2.5 sm:hidden mt-5 w-full">
                {floatingCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="ios-glass-card rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-sm bg-white/90"
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${card.color}`}>
                        <Icon size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[0.82rem] font-bold text-zinc-900 leading-tight">
                          {card.title}
                        </p>
                        <p className="text-[0.72rem] text-zinc-500 leading-tight font-medium">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
