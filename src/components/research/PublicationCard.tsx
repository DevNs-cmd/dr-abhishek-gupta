"use client";

import { useState } from "react";
import { BookOpen, Check, Copy, ExternalLink, Award, FileCheck2, Calendar, BookmarkCheck } from "lucide-react";
import Link from "next/link";
import type { Publication } from "@/lib/types";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const [copied, setCopied] = useState(false);

  const publicationVenue = publication.journalOrConference || publication.publisher || "Academic Publication";

  const apaCitation = `${publication.authors.join(", ")} (${publication.year || "2025"}). "${publication.title}." ${
    publication.journalOrConference ? `${publication.journalOrConference}, ` : ""
  }${publication.publisher ? `${publication.publisher}. ` : ""}${
    publication.doi ? `https://doi.org/${publication.doi}` : ""
  }`.trim();

  const copyCitation = () => {
    navigator.clipboard.writeText(apaCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const paperUrl = publication.url || (publication.doi ? `https://doi.org/${publication.doi}` : null);

  return (
    <article className="ios-glass-card rounded-[32px] p-7 sm:p-10 shadow-lg border border-white/80 hover:shadow-xl transition-all duration-300">
      {/* Badges Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {/* Publication Type */}
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-800 border border-indigo-500/20 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-xs">
            <BookmarkCheck size={13} />
            {publication.type === "journal-article" ? "Journal Article" : "Conference Paper"}
          </span>

          {/* Year */}
          {publication.year && (
            <span className="inline-flex items-center gap-1.5 bg-black/[0.04] text-zinc-700 text-xs font-semibold px-3 py-1 rounded-full">
              <Calendar size={13} />
              {publication.year}
            </span>
          )}

          {/* Publisher */}
          {publication.publisher && (
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-800 border border-blue-500/20 text-xs font-semibold px-3.5 py-1 rounded-full backdrop-blur-sm shadow-xs">
              <BookOpen size={13} />
              {publication.publisher}
            </span>
          )}

          {/* Indexed in badges */}
          {publication.indexedIn?.map((index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 text-xs font-semibold px-3.5 py-1 rounded-full backdrop-blur-sm shadow-xs"
            >
              <Award size={13} />
              {index} Indexed
            </span>
          ))}

          <span className="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium px-3 py-1 rounded-full">
            <FileCheck2 size={13} />
            Peer-Reviewed
          </span>
        </div>

        {/* Copy Citation Button */}
        <button
          onClick={copyCitation}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white/80 hover:bg-white border border-white/90 px-4 py-1.5 rounded-full shadow-sm active:scale-95 transition-all"
          aria-label="Copy citation to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-600" />
              <span className="text-emerald-700 font-bold">Citation Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} className="text-zinc-500" />
              <span>Copy Citation</span>
            </>
          )}
        </button>
      </div>

      {/* Venue / Journal / Conference Name */}
      {publication.journalOrConference && (
        <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-2">
          {publication.journalOrConference}
        </div>
      )}

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug mb-3">
        {publication.title}
      </h2>

      {/* Authors list */}
      <div className="text-sm text-zinc-600 mb-6 flex flex-wrap items-center gap-1.5">
        <span className="text-zinc-400 font-medium">Authors:</span>
        {publication.authors.map((author, idx) => {
          const isDrAbhishek =
            author.toLowerCase().includes("abhishek") &&
            author.toLowerCase().includes("gupta");

          return (
            <span key={author} className="inline-flex items-center">
              {isDrAbhishek ? (
                <span className="font-bold text-indigo-950 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-md">
                  {author}
                </span>
              ) : (
                <span className="text-zinc-700 font-medium">{author}</span>
              )}
              {idx < publication.authors.length - 1 && <span className="text-zinc-400 mr-1">,</span>}
            </span>
          );
        })}
      </div>

      {/* Abstract */}
      <div className="mb-8">
        <h3 className="text-[0.72rem] font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Executive Abstract
        </h3>
        <p className="text-zinc-700 text-sm sm:text-base leading-relaxed bg-white/70 backdrop-blur-sm border border-white/90 p-6 rounded-[22px] shadow-xs">
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
        <div className="space-y-1">
          <div className="text-xs text-zinc-500">
            Peer-reviewed research indexed in Scopus & IEEE / Inderscience repositories.
          </div>
          {publication.doi && (
            <div className="text-xs font-mono text-indigo-700 flex items-center gap-1">
              <span>DOI:</span>
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-900"
              >
                {publication.doi}
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white active:scale-95 transition-all shadow-md"
            >
              View Official Paper
              <ExternalLink size={13} />
            </a>
          )}

          <Link
            href="/contact?subject=research-inquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1d1d1f] hover:bg-black text-white active:scale-95 transition-all shadow-md"
          >
            Request Academic Reprint
          </Link>
        </div>
      </div>
    </article>
  );
}
