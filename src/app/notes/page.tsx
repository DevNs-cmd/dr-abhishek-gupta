import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { NotesClient } from "@/components/notes/NotesClient";
import { notes } from "@/lib/data/notes";

export const metadata: Metadata = {
  title: "Study Notes & Course Materials",
  description:
    "Comprehensive academic course notes, lecture summaries, lab manuals, and exam preparation guides authored and curated by Dr. Abhishek Gupta across Computer Science, Python, DBMS, IoT, C++, and Power BI.",
  openGraph: {
    title: "Study Notes & Course Materials | Dr. Abhishek Gupta",
    description:
      "Access structured lecture notes, exam guides, and lab manuals for Computer Science, Python, DBMS, IoT, and C++.",
  },
};

interface NotesPageProps {
  searchParams: Promise<{ subject?: string }>;
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialSubject = resolvedSearchParams.subject ?? "All";

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-28 pb-24">
      {/* Page Header */}
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-glass-pill text-indigo-700 text-xs font-semibold mb-3">
          <BookOpen size={13} />
          Academic Repository
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
          Study Materials & Lecture Notes
        </h1>
        <p className="text-zinc-500 text-sm md:text-base mt-2.5 leading-relaxed">
          Carefully structured course notes, conceptual breakdowns, and reference guides designed
          for undergraduate curriculum requirements, university exams, and placement preparation.
        </p>
      </div>

      {/* Client Filter & Grid */}
      <NotesClient initialNotes={notes} initialSubject={initialSubject} />
    </div>
  );
}
