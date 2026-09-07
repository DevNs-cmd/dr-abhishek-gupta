import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Clock, FileText, BookOpen } from "lucide-react";
import { NoteDetailReader } from "@/components/notes/NoteDetailReader";
import { NoteCard } from "@/components/notes/NoteCard";
import { notes } from "@/lib/data/notes";
import { getNoteBySlug, getRelatedNotes, getSubjectColors } from "@/lib/utils";

interface NoteDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: NoteDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(notes, slug);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: `${note.title} | ${note.subject} Course Notes`,
    description: note.description,
    keywords: [note.subject, note.topic, ...note.keywords],
    openGraph: {
      title: `${note.title} — ${note.subject} | Dr. Abhishek Gupta`,
      description: note.description,
    },
  };
}

export default async function NoteDetailPage({ params }: NoteDetailPageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(notes, slug);

  if (!note) {
    notFound();
  }

  const relatedNotes = getRelatedNotes(notes, note.id, note.subject);
  const colors = getSubjectColors(note.subject);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-28 pb-24">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-xs text-zinc-500 flex-wrap">
          <li>
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight size={13} className="text-zinc-400" />
          </li>
          <li>
            <Link href="/notes" className="hover:text-zinc-900 transition-colors">
              Notes
            </Link>
          </li>
          <li>
            <ChevronRight size={13} className="text-zinc-400" />
          </li>
          <li>
            <Link
              href={`/notes?subject=${encodeURIComponent(note.subject)}`}
              className="hover:text-zinc-900 transition-colors"
            >
              {note.subject}
            </Link>
          </li>
          <li>
            <ChevronRight size={13} className="text-zinc-400" />
          </li>
          <li className="text-zinc-900 font-semibold truncate max-w-xs sm:max-w-md">
            {note.title}
          </li>
        </ol>
      </nav>

      {/* Header Info */}
      <div className="max-w-4xl mb-10 space-y-4">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-xs backdrop-blur-sm ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {note.subject}
          </span>
          <span className="text-xs font-semibold text-zinc-600 bg-white/70 backdrop-blur-sm border border-white/80 px-3.5 py-1 rounded-full shadow-xs">
            {note.unit}
          </span>
          <span className="text-xs font-medium text-zinc-500 bg-white/70 backdrop-blur-sm border border-white/80 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
            <Clock size={12} />
            {note.readingTime} read
          </span>
          <span className="text-xs font-medium text-zinc-500 bg-white/70 backdrop-blur-sm border border-white/80 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
            <FileText size={12} />
            {note.fileType}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
          {note.title}
        </h1>

        {/* Topic Subtitle */}
        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal">
          {note.topic} &bull; Authored by Dr. Abhishek Gupta, New Delhi Institute of Management
        </p>
      </div>

      {/* Reader / Document Container */}
      <div className="mb-20">
        <NoteDetailReader note={note} />
      </div>

      {/* Related Notes */}
      {relatedNotes.length > 0 && (
        <section className="pt-12 border-t border-zinc-200/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                Related {note.subject} Study Materials
              </h2>
              <p className="text-xs md:text-sm text-zinc-500 mt-1">
                More lecture modules from the same curriculum domain
              </p>
            </div>
            <Link
              href={`/notes?subject=${encodeURIComponent(note.subject)}`}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              View all in {note.subject} &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNotes.map((rel) => (
              <NoteCard key={rel.id} note={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Back to all notes */}
      <div className="mt-16 text-center">
        <Link
          href="/notes"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          Return to All Study Materials
        </Link>
      </div>
    </div>
  );
}
