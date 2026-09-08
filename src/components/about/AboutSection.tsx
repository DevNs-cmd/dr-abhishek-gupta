"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Cpu, GraduationCap, Wrench, Briefcase, Award, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import type { Professor } from "@/lib/types";

interface AboutSectionProps {
  professor: Professor;
}

const rolesDisplay = [
  {
    title: "Placement Head & Career Advisor",
    desc: "Guiding students toward technical career readiness and professional placement pathways.",
    icon: Briefcase,
  },
  {
    title: "HOD Edu Dept. & Coordinator",
    desc: "Overseeing departmental curricula, academic execution, and pedagogical excellence.",
    icon: BookOpen,
  },
  {
    title: "Academic Counsellor (IGNOU)",
    desc: "Providing structured academic guidance and counseling for distance learners.",
    icon: GraduationCap,
  },
  {
    title: "Technical Consultant & Advisor",
    desc: "Advising on institutional technology implementation, computing labs, and systems innovation.",
    icon: Cpu,
  },
];

const expertiseColors: Record<string, string> = {
  "Computer Science": "bg-blue-50 text-blue-700 border-blue-100",
  Python:            "bg-emerald-50 text-emerald-700 border-emerald-100",
  Django:            "bg-green-50 text-green-700 border-green-100",
  IoT:               "bg-violet-50 text-violet-700 border-violet-100",
  "C++":             "bg-red-50 text-red-700 border-red-100",
  "Power BI":        "bg-yellow-50 text-yellow-700 border-yellow-100",
  DBMS:              "bg-amber-50 text-amber-700 border-amber-100",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function AboutSection({ professor }: AboutSectionProps) {
  return (
    <section id="about" className="section-padding relative" aria-label="About Dr. Abhishek Gupta">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-[0.72rem] font-bold tracking-[0.15em] text-indigo-700 uppercase mb-2.5 inline-block px-3 py-1 rounded-full ios-glass-pill">
            Profile & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight mb-3">
            About Dr. Abhishek Gupta
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Bridging deep computational science, higher education pedagogy, and career placement mentorship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Bio Card (larger) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 ios-glass-card rounded-[28px] p-7 sm:p-9 shadow-md"
          >
            <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-indigo-700 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-5">
              <Users size={12} />
              Academic Profile
            </span>

            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-4">
              Educator, Mentor, and Technology Strategist
            </h3>

            <div className="space-y-4 text-zinc-600 text-[0.93rem] leading-relaxed">
              <p>
                <strong className="text-zinc-900">Dr. Abhishek Gupta</strong> is an esteemed
                academician associated with the{" "}
                <strong className="text-zinc-900">New Delhi Institute of Management</strong>.
                Throughout his academic career, he has seamlessly integrated core theoretical
                disciplines with applied modern software development.
              </p>
              <p>
                Serving as <strong className="text-zinc-900">Placement Head</strong>,{" "}
                <strong className="text-zinc-900">Head of the Education Department</strong>, and{" "}
                <strong className="text-zinc-900">Academic Coordinator</strong>, Dr. Gupta actively
                prepares students for the technological demands of today&apos;s digital industries.
                As <strong className="text-zinc-900">Academic Counsellor with IGNOU</strong> and{" "}
                <strong className="text-zinc-900">Technical Consultant & Advisor</strong>, he guides
                learners through curriculum progression, foundational research, and career navigation.
              </p>
            </div>

            {/* Roles grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-black/[0.06]">
              {rolesDisplay.map((role) => {
                const Icon = role.icon;
                return (
                  <div key={role.title} className="flex gap-3 items-start p-2.5 rounded-2xl bg-white/50 border border-white/80">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100/70 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 text-[0.82rem] leading-tight mb-1">
                        {role.title}
                      </p>
                      <p className="text-zinc-500 text-[0.75rem] leading-snug">{role.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Expertise Card (sidebar) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 ios-glass-card rounded-[28px] p-7 sm:p-9 shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-indigo-700 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-5 self-start">
                Areas of Expertise
              </span>

            <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">Core Disciplines</h3>
            <p className="text-zinc-500 text-[0.875rem] mb-6 leading-relaxed">
              Domains taught, researched, and mentored by Dr. Abhishek Gupta.
            </p>

            <div className="space-y-2.5 flex-1">
              {professor.expertise.map((domain) => (
                <div
                  key={domain.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 bg-zinc-50/60 hover:bg-white hover:border-zinc-200 hover:translate-x-1 transition-all duration-200 cursor-default"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: domain.color }}
                  />
                  <span className="font-semibold text-zinc-900 text-[0.875rem] flex-1">
                    {domain.name}
                  </span>
                  <span
                    className={`text-[0.7rem] font-semibold px-2 py-0.5 rounded-full border ${
                      expertiseColors[domain.name] ?? "bg-zinc-50 text-zinc-600 border-zinc-200"
                    }`}
                  >
                    {domain.category === "programming" && "Programming"}
                    {domain.category === "database" && "Database"}
                    {domain.category === "iot" && "IoT"}
                    {domain.category === "analytics" && "Analytics"}
                    {domain.category === "cs" && "Core CS"}
                  </span>
                </div>
              ))}
            </div>

            {/* Verified Education & Affiliation stamps */}
            <div className="mt-6 pt-5 border-t border-zinc-100 space-y-3">
              <div className="flex items-start gap-3 bg-zinc-50 rounded-xl p-3 border border-zinc-200/80">
                <GraduationCap size={18} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-zinc-900 text-[0.82rem] leading-tight">
                    M.Tech (CSE) &bull; Arni University
                  </p>
                  <p className="text-zinc-500 text-[0.72rem] mt-0.5">
                    MCA (CS) &bull; Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-[0.75rem]">
                <span className="font-semibold text-emerald-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  ORCID: 0009-0000-9701-246X
                </span>
                <a
                  href="https://orcid.org/0009-0000-9701-246X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                >
                  Verify ↗
                </a>
              </div>
            </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial Board, Peer Review & Academic Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 ios-glass-card rounded-[28px] p-6 sm:p-8 shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                <Award size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 leading-tight">
                  Editorial Leadership & Scholarly Service
                </h3>
                <p className="text-xs text-zinc-500">
                  Global journal editorial boards, IEEE peer review, and governmental certifications
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[0.7rem] font-bold text-amber-800 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1">
              Scopus & Web of Science Indexed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Elsevier Editorial Board */}
            <div className="p-4 rounded-2xl bg-white/60 border border-white/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-[0.7rem] font-bold text-amber-700 uppercase tracking-wider">
                    Editorial Board Member
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-[0.92rem] leading-snug">
                  Results in Engineering
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  Elsevier &bull; ScienceDirect platform
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-black/[0.04] flex flex-wrap gap-1.5 text-[0.68rem] font-medium text-zinc-500">
                <span className="bg-zinc-100 px-2 py-0.5 rounded-full">Scopus Indexed</span>
                <span className="bg-zinc-100 px-2 py-0.5 rounded-full">Web of Science</span>
              </div>
            </div>

            {/* Innovation Ambassador */}
            <div className="p-4 rounded-2xl bg-white/60 border border-white/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[0.7rem] font-bold text-emerald-700 uppercase tracking-wider">
                    Government of India Certification
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-[0.92rem] leading-snug">
                  Innovation Ambassador (IA)
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  MoE&apos;s Innovation Cell & AICTE &bull; Calendar Year 2025–26
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-black/[0.04] flex flex-wrap gap-1.5 text-[0.68rem] font-medium text-zinc-500">
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">IIC Upskilling Certified</span>
              </div>
            </div>

            {/* Peer Reviewer & Session Chair */}
            <div className="p-4 rounded-2xl bg-white/60 border border-white/90 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[0.7rem] font-bold text-blue-700 uppercase tracking-wider">
                    Peer Review & Conference Chair
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 text-[0.92rem] leading-snug">
                  IEEE Conferences & Session Chair
                </h4>
                <p className="text-xs text-zinc-600 mt-1">
                  Reviewer: IEEE ICCSC-2026, IEEE IC3ECSBHI-2026, ICICI-2026. Session Chair: PTEMS-2026.
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-black/[0.04] flex flex-wrap gap-1.5 text-[0.68rem] font-medium text-zinc-500">
                <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">IEEE CIS Sponsored</span>
                <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">Session Chair</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
