import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import type { Note } from "@/lib/types";
import { getSubjectColors } from "@/lib/utils";

interface NoteCardProps {
  note: Note;
  compact?: boolean;
}

export function NoteCard({ note, compact = false }: NoteCardProps) {
  const colors = getSubjectColors(note.subject);

  return (
    <Link
      href={`/notes/${note.slug}`}
      className="group flex flex-col ios-glass-card rounded-[26px] p-6 active:scale-[0.99] transition-all duration-300"
      aria-label={`View notes: ${note.title}`}
    >
      {/* Top Row: Badges */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm backdrop-blur-sm ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {note.subject}
          </span>
          <span className="text-[0.7rem] font-medium text-zinc-500 bg-black/[0.03] border border-black/[0.04] rounded-full px-2.5 py-1">
            {note.fileType}
          </span>
        </div>
        <div className="w-9 h-9 rounded-2xl bg-white/80 border border-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
          <FileText size={16} className="text-zinc-500 group-hover:text-indigo-600 transition-colors" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-bold text-zinc-900 text-[1.05rem] leading-snug tracking-tight mb-2 group-hover:text-indigo-900 transition-colors line-clamp-2">
        {note.title}
      </h3>

      <p className="text-zinc-500 text-[0.85rem] leading-relaxed line-clamp-2 mb-5 flex-1">
        {note.description}
      </p>

      {/* Bottom Meta Row */}
      <div className="flex items-center justify-between pt-4 border-t border-black/[0.05]">
        <div className="flex flex-col gap-0.5">
          <span className="text-[0.73rem] text-zinc-400 font-medium">{note.unit}</span>
          <span className="text-[0.7rem] text-zinc-400">{note.readingTime} read</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-indigo-600 group-hover:gap-2.5 transition-all duration-200">
          View Notes
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
