import type { Metadata } from "next";
import { Award, BookOpen, Sparkles, CheckCircle2, FileText } from "lucide-react";
import { PublicationCard } from "@/components/research/PublicationCard";
import { publications } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Academic Research & Publications",
  description:
    "Peer-reviewed academic research by Dr. Abhishek Gupta published in Springer Nature and indexed in Scopus, focusing on Digital Leadership, AI Adoption, and Employee Performance.",
  openGraph: {
    title: "Academic Research & Publications | Dr. Abhishek Gupta",
    description:
      "Explore peer-reviewed research on Digital Leadership and AI Adoption in Indian Banking published by Springer Nature.",
  },
};

export default function ResearchPage() {
  const verifiedPublication = publications[0];

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
          <Award size={13} />
          Scholarly Inquiries & Publications
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
          Academic Research & Scholarly Output
        </h1>
        <p className="text-zinc-500 text-sm md:text-base mt-2.5 leading-relaxed">
          Peer-reviewed empirical research investigating the convergence of Artificial
          Intelligence, machine learning methodologies, and executive digital leadership in
          modern organizational ecosystems.
        </p>
      </div>

      {/* Main Publication */}
      {verifiedPublication && (
        <section aria-labelledby="primary-publication-heading">
          <PublicationCard publication={verifiedPublication} />
        </section>
      )}

      {/* Research Domains & Agenda */}
      <section className="bg-white rounded-[24px] border border-zinc-200/80 p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
            Research Specializations & Theoretical Agenda
          </h2>
          <p className="text-xs md:text-sm text-zinc-500">
            Current scholarly investigations focus on the practical deployment of intelligent systems and workforce dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
              01
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Machine Learning & Predictive Modeling
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Applying classification and comparative regression models to enterprise datasets to predict technological adoption rates and behavioral shifts.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              02
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Digital Leadership & Change Dynamics
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Assessing leadership competencies required to foster organizational agility, reskilling frameworks, and psychological safety amidst AI automation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-100 space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
              03
            </div>
            <h3 className="text-sm font-bold text-zinc-900">
              Human-AI Collaboration in Service Sectors
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Empirical modeling of service-sector banking employees, measuring efficiency, operational friction, and customer interaction outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Indexing & Academic Standards */}
      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          <span>
            Research outputs adhere to rigorous peer-review benchmarks, indexed under Scopus and published through internationally accredited academic venues.
          </span>
        </div>
      </div>
    </div>
  );
}
