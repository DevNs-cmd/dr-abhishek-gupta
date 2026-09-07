"use client";

import { useState } from "react";
import {
  FileText,
  ListChecks,
  BookmarkCheck,
  Download,
  Share2,
  Check,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { Note } from "@/lib/types";

interface NoteDetailReaderProps {
  note: Note;
}

export function NoteDetailReader({ note }: NoteDetailReaderProps) {
  const [activeTab, setActiveTab] = useState<"study" | "outline" | "revision">("study");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    alert(`Downloading academic document: "${note.title} (${note.fileType})"`);
  };

  return (
    <div className="ios-glass-card rounded-[32px] overflow-hidden shadow-xl border border-white/90">
      {/* Top iOS Action & Navigation Bar */}
      <div className="border-b border-black/[0.05] bg-white/50 backdrop-blur-md p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        {/* iOS Segmented Capsule */}
        <div className="ios-segmented">
          <button
            onClick={() => setActiveTab("study")}
            className={`ios-segmented-item flex items-center gap-1.5 ${
              activeTab === "study" ? "active" : ""
            }`}
          >
            <BookOpen size={13} />
            Study Guide
          </button>

          <button
            onClick={() => setActiveTab("outline")}
            className={`ios-segmented-item flex items-center gap-1.5 ${
              activeTab === "outline" ? "active" : ""
            }`}
          >
            <ListChecks size={13} />
            Syllabus Outline
          </button>

          <button
            onClick={() => setActiveTab("revision")}
            className={`ios-segmented-item flex items-center gap-1.5 ${
              activeTab === "revision" ? "active" : ""
            }`}
          >
            <BookmarkCheck size={13} />
            Revision Sheet
          </button>
        </div>

        {/* Quick Utility Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 bg-white/70 hover:bg-white border border-white/90 px-3.5 py-1.5 rounded-full shadow-sm active:scale-95 transition-all"
            aria-label="Share note"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Share2 size={13} />
                <span>Share</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1d1d1f] hover:bg-black px-4 py-1.5 rounded-full shadow-md active:scale-95 transition-all"
          >
            <Download size={13} />
            Download {note.fileType}
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-10">
        {/* Tab 1: Study Guide */}
        {activeTab === "study" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Topic Summary Box */}
            <div className="p-6 rounded-[22px] bg-white/60 backdrop-blur-md border border-white/80 shadow-sm">
              <h3 className="text-[0.72rem] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Curriculum Topic Summary
              </h3>
              <p className="text-zinc-800 text-base leading-relaxed">
                {note.description}
              </p>
            </div>

            {/* Core Body Content */}
            <div className="text-zinc-700 leading-relaxed text-[0.95rem] space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                Conceptual Overview & Context
              </h3>
              <p>{note.content}</p>

              {/* Key Takeaways Frosted Widget */}
              <div className="p-6 my-6 rounded-[24px] bg-gradient-to-br from-indigo-50/70 to-blue-50/50 backdrop-blur-md border border-indigo-100/80 shadow-sm space-y-3">
                <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
                  <Sparkles size={16} className="text-indigo-600" />
                  Key Examination & Placement Takeaways
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-indigo-950/80 list-disc list-inside">
                  {note.keyPoints?.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 tracking-tight pt-2">
                Curriculum Modules Breakdown
              </h3>
              <div className="space-y-2.5">
                {note.outline?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl hover:bg-white/90 transition-all shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-medium text-zinc-800 pt-0.5">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div className="pt-6 border-t border-black/[0.05]">
              <span className="text-xs font-semibold text-zinc-400 block mb-2">
                Index Keywords:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {note.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs bg-white/70 border border-black/[0.04] text-zinc-600 px-3 py-1 rounded-full font-medium shadow-xs"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Syllabus Outline */}
        {activeTab === "outline" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">
                {note.unit} — Detailed Syllabus Coverage
              </h3>
              <p className="text-xs text-zinc-500">
                Verified against university curriculum standards and examination patterns.
              </p>
            </div>

            <div className="relative pl-6 space-y-6 border-l-2 border-indigo-200/70">
              {note.outline?.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 transition-transform shadow-xs" />
                  <span className="text-[0.7rem] font-bold text-indigo-600 uppercase tracking-wide block mb-0.5">
                    Module {idx + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-900 leading-snug">
                    {item}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Revision Sheet */}
        {activeTab === "revision" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">
                High-Yield Quick Revision Sheet
              </h3>
              <p className="text-xs text-zinc-500">
                Essential revision bullets for rapid revision prior to examinations or technical interviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {note.keyPoints?.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[22px] bg-white/70 backdrop-blur-md border border-white/90 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                    <BookmarkCheck size={14} />
                    <span>Point #{idx + 1}</span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-800 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reader Footer Notice */}
      <div className="bg-white/40 border-t border-black/[0.05] px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
        <span>
          Dr. Abhishek Gupta &bull; Academic Courseware &bull; New Delhi Institute of Management
        </span>
        <span className="font-mono text-[0.7rem] text-zinc-400">
          Last Updated: {note.publishedAt}
        </span>
      </div>
    </div>
  );
}
