import type { Metadata } from "next";
import { Award, BookOpen, CheckCircle2, ExternalLink, ShieldCheck, Cpu, Cloud, Activity } from "lucide-react";
import { PublicationCard } from "@/components/research/PublicationCard";
import { publications } from "@/lib/data/research";
import { professor } from "@/lib/data/professor";

export const metadata: Metadata = {
  title: "Academic Research & Publications | Dr. Abhishek Kumar Gupta",
  description:
    "Peer-reviewed academic research by Dr. Abhishek Kumar Gupta indexed in Scopus and IEEE Xplore, covering Cloud-Fog Architectures, Healthcare AI, Cyber Security, and Smart Home IoT.",
  openGraph: {
    title: "Academic Research & Publications | Dr. Abhishek Kumar Gupta",
    description:
      "Explore peer-reviewed publications by Dr. Abhishek Kumar Gupta in IEEE Xplore, Scopus, and Inderscience International Journal of Cloud Computing.",
  },
};

export default function ResearchPage() {
  const journalCount = publications.filter((p) => p.type === "journal-article").length;
  const conferenceCount = publications.filter((p) => p.type === "conference-paper").length;

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24 space-y-14">
      {/* Header & ORCID Verified Profile Banner */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold">
          <Award size={13} />
          Scholarly Inquiries & Verified Publications
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
              Academic Research & Scholarly Output
            </h1>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
              Peer-reviewed empirical and theoretical research by{" "}
              <strong className="text-zinc-900 font-semibold">{professor.name}</strong>{" "}
              investigating Cloud-Fog computing architectures, real-time healthcare artificial
              intelligence, hybrid cyber security threat mitigation, and energy-efficient IoT
              systems.
            </p>
          </div>

          {/* ORCID Verified Badge Card */}
          <div className="shrink-0 p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-zinc-200/90 shadow-sm flex flex-col gap-2.5 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>ORCID Verified Academic Profile</span>
            </div>
            <div className="text-xs text-zinc-500 font-mono">
              iD: {professor.orcid ?? "0009-0000-9701-246X"}
            </div>
            <a
              href={professor.orcidUrl ?? "https://orcid.org/0009-0000-9701-246X"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-2 px-3.5 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold hover:bg-emerald-100/80 transition-colors"
            >
              <span>View Official ORCID Record</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Academic Impact Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-zinc-200/80 shadow-xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-950">{publications.length}</div>
            <div className="text-xs font-medium text-zinc-500 mt-0.5">Peer-Reviewed Works</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-zinc-200/80 shadow-xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">{journalCount}</div>
            <div className="text-xs font-medium text-zinc-500 mt-0.5">Journal Articles & Papers</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-zinc-200/80 shadow-xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">{conferenceCount}</div>
            <div className="text-xs font-medium text-zinc-500 mt-0.5">IEEE & Springer Proceedings</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-zinc-200/80 shadow-xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">Scopus</div>
            <div className="text-xs font-medium text-zinc-500 mt-0.5">IEEE, Springer & Elsevier Indexed</div>
          </div>
        </div>
      </div>

      {/* Publications Listing */}
      <section aria-labelledby="publications-heading" className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="publications-heading" className="text-2xl font-bold text-zinc-950 tracking-tight">
              Published Papers & Proceedings
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">
              All records verified via ORCID (0009-0000-9701-246X) and indexed in international repositories.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </section>

      {/* Research Domains & Agenda */}
      <section className="bg-white rounded-[32px] border border-zinc-200/80 p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-8">
        <div className="space-y-2">
          <span className="text-[0.72rem] font-bold tracking-[0.15em] text-indigo-700 uppercase">
            Active Scholarly Agenda
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            Research Specializations & Theoretical Agenda
          </h2>
          <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
            Current scholarly investigations focus on the practical deployment of intelligent distributed
            systems, real-time optimization algorithms, and network threat defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Cloud size={20} />
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Cloud & Fog Computing Architecture
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Deep learning-based dynamic task scheduling, fog node workload prediction, and network latency optimization in smart home ecosystems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
              <Activity size={20} />
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Healthcare AI & Clinical Optimization
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Multi-objective optimization algorithms and real-time clinical data processing for personalized chronic disease treatment planning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Cyber Security & Hybrid Threat Detection
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Human-in-the-loop AI frameworks merging automated high-throughput traffic scanning with expert corroboration to eliminate false positives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
              <Cpu size={20} />
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Energy-Efficient IoT Systems
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Recurrent Extreme Learning Machine (R-ELM) models for resident movement forecasting and intelligent charging to curb standby power loss.
            </p>
          </div>
        </div>
      </section>

      {/* Indexing & Academic Standards */}
      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span>
            All publications adhere to peer-review benchmarks, cataloged across IEEE Xplore, Inderscience, and Scopus, and registered with the ORCID global researcher registry.
          </span>
        </div>
        <a
          href="https://orcid.org/0009-0000-9701-246X"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-semibold text-indigo-600 hover:text-indigo-800 underline"
        >
          View ORCID Profile (0009-0000-9701-246X) &rarr;
        </a>
      </div>
    </div>
  );
}
