"use client";

import { useState } from "react";
import { BookOpen, Check, Copy, ExternalLink, Award, FileCheck2 } from "lucide-react";
import Link from "next/link";
import type { Publication } from "@/lib/types";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const [copied, setCopied] = useState(false);

  const apaCitation = `${publication.authors.join(", ")}. "${publication.title}." ${
    publication.publisher ? publication.publisher + "." : ""
  } Indexed in ${publication.indexedIn?.join(", ") ?? "Scopus"}.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(apaCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="ios-glass-card rounded-[32px] p-7 sm:p-10 shadow-lg">
      {/* Badges Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {publication.publisher && (
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-800 border border-blue-500/20 text-xs font-semibold px-3.5 py-1 rounded-full backdrop-blur-sm shadow-xs">
              <BookOpen size={13} />
              {publication.publisher}
            </span>
          )}
          {publication.indexedIn?.map((index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 text-xs font-semibold px-3.5 py-1 rounded-full backdrop-blur-sm shadow-xs"
            >
              <Award size={13} />
              {index} Indexed
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 bg-black/[0.04] text-zinc-700 text-xs font-medium px-3 py-1 rounded-full">
            <FileCheck2 size={13} />
            Peer-Reviewed
          </span>
        </div>

        <button
          onClick={copyCitation}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white/70 hover:bg-white border border-white/90 px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all"
          aria-label="Copy citation to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-600" />
              <span className="text-emerald-700">Citation Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} className="text-zinc-500" />
              <span>Copy Citation</span>
            </>
          )}
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug mb-3">
        {publication.title}
      </h2>

      {/* Authors */}
      <div className="text-sm font-semibold text-indigo-700 mb-6 flex items-center gap-2">
        <span className="text-zinc-400 font-normal">Author:</span>
        <span className="text-zinc-800 font-semibold">
          {publication.authors.join(", ")}
        </span>
      </div>

      {/* Abstract */}
      <div className="mb-8">
        <h3 className="text-[0.72rem] font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Executive Abstract
        </h3>
        <p className="text-zinc-700 text-sm sm:text-base leading-relaxed bg-white/60 backdrop-blur-sm border border-white/90 p-6 rounded-[22px] shadow-xs">
          {publication.abstract}
        </p>
      </div>

      {/* Meta Specifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {publication.domain && (
          <div className="bg-white/50 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-xs">
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Domain & Scope
            </span>
            <span className="text-xs font-semibold text-zinc-800">
              {publication.domain}
            </span>
          </div>
        )}
        {publication.methodology && (
          <div className="bg-white/50 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-xs">
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Methodological Approach
            </span>
            <span className="text-xs font-semibold text-zinc-800">
              {publication.methodology}
            </span>
          </div>
        )}
        {publication.sector && (
          <div className="bg-white/50 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-xs">
            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Empirical Sector
            </span>
            <span className="text-xs font-semibold text-zinc-800">
              {publication.sector}
            </span>
          </div>
        )}
      </div>

      {/* Keywords */}
      <div className="mb-8">
        <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Index Keywords
        </span>
        <div className="flex flex-wrap gap-1.5">
          {publication.keywords.map((kw) => (
            <span
              key={kw}
              className="bg-white/70 border border-black/[0.04] text-zinc-700 text-xs px-3 py-1 rounded-full font-medium shadow-xs"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-black/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-xs text-zinc-500">
          Peer-reviewed publication indexed in international academic repositories.
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact?subject=research-inquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1d1d1f] hover:bg-black text-white active:scale-95 transition-all shadow-md"
          >
            Request Academic Reprint
            <ExternalLink size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
