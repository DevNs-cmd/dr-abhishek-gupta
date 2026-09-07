import Link from "next/link";
import { ArrowRight, BookOpen, Video, Award, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { NoteCard } from "@/components/notes/NoteCard";
import { LectureCard } from "@/components/lectures/LectureCard";
import { professor } from "@/lib/data/professor";
import { notes } from "@/lib/data/notes";
import { lectures } from "@/lib/data/lectures";
import { publications } from "@/lib/data/research";

export default function HomePage() {
  const featuredNotes = notes.slice(0, 3);
  const featuredLectures = lectures.slice(0, 3);
  const mainPublication = publications[0];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <HeroSection professor={professor} />

      {/* About Section */}
      <AboutSection professor={professor} />

      {/* Featured Notes Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6" aria-labelledby="featured-notes-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-glass-pill text-indigo-700 text-xs font-semibold mb-3">
              <BookOpen size={13} />
              Curated Courseware
            </div>
            <h2
              id="featured-notes-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950"
            >
              Featured Study Materials & Notes
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
              Engineered for conceptual depth, university examination preparation, and competitive technical interviews.
            </p>
          </div>

          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 group self-start md:self-auto transition-colors"
          >
            Explore All {notes.length} Study Notes
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </section>

      {/* Featured Video Lectures Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6" aria-labelledby="featured-lectures-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-glass-pill text-rose-700 text-xs font-semibold mb-3">
              <Video size={13} />
              Classroom & Keynotes
            </div>
            <h2
              id="featured-lectures-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950"
            >
              Curated Video Lectures
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
              High-definition pedagogical sessions covering modern software development, data architectures, and systems programming.
            </p>
          </div>

          <Link
            href="/lectures"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-800 group self-start md:self-auto transition-colors"
          >
            Browse All {lectures.length} Lectures
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </section>

      {/* Research Spotlight Section */}
      {mainPublication && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6" aria-labelledby="research-spotlight-heading">
          <div className="relative rounded-[32px] bg-gradient-to-br from-[#1d1d1f] via-zinc-900 to-indigo-950 text-white p-8 md:p-12 overflow-hidden shadow-2xl border border-white/10">
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/15">
                  <Award size={13} className="text-amber-300" />
                  Peer-Reviewed Publication
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-medium border border-indigo-400/30 backdrop-blur-sm">
                  {mainPublication.publisher}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-200 text-xs font-medium border border-emerald-400/30 backdrop-blur-sm">
                  Scopus Indexed
                </span>
              </div>

              <h2
                id="research-spotlight-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug mb-4"
              >
                {mainPublication.title}
              </h2>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed line-clamp-3 mb-8">
                {mainPublication.abstract}
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-100 active:scale-95 transition-all shadow-md"
                >
                  View Full Research Abstract
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/contact?subject=research-reprint"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm active:scale-95 transition-all backdrop-blur-md border border-white/15"
                >
                  Request Academic Reprint
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Counseling & Placement Consultation Banner */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="ios-glass-card rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-600 mb-2 shadow-xs">
              <GraduationCap size={24} />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Academic Counseling & Placement Advisory
            </h2>

            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Dr. Abhishek Gupta actively provides mentorship for campus recruitment readiness,
              technical interviews in core CS disciplines, and distance-learning academic counseling
              for IGNOU students.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 pb-4 text-xs font-semibold text-zinc-700">
              <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
                <CheckCircle2 size={15} className="text-emerald-600" />
                NDIM Placement Head Guidance
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
                <CheckCircle2 size={15} className="text-emerald-600" />
                IGNOU Academic Counsellor
              </span>
              <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
                <CheckCircle2 size={15} className="text-emerald-600" />
                Industry Technical Advisory
              </span>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1d1d1f] hover:bg-black text-white font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-md hover:shadow-lg"
              >
                Schedule Academic Consultation
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
