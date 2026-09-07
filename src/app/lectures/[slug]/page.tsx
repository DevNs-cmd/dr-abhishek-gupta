import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, Clock, BookOpen, Share2, Tag, Play } from "lucide-react";
import { YouTubePlayer } from "@/components/lectures/YouTubePlayer";
import { LectureCard } from "@/components/lectures/LectureCard";
import { NoteCard } from "@/components/notes/NoteCard";
import { lectures } from "@/lib/data/lectures";
import { notes } from "@/lib/data/notes";
import { getLectureBySlug, getRelatedLectures, getSubjectColors } from "@/lib/utils";

interface LectureDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return lectures.map((lecture) => ({
    slug: lecture.slug,
  }));
}

export async function generateMetadata({
  params,
}: LectureDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lecture = getLectureBySlug(lectures, slug);

  if (!lecture) {
    return {
      title: "Lecture Not Found",
    };
  }

  return {
    title: `${lecture.title} | Dr. Abhishek Gupta`,
    description: lecture.description,
    openGraph: {
      title: `${lecture.title} — Video Lecture | Dr. Abhishek Gupta`,
      description: lecture.description,
      images: [
        {
          url: `https://img.youtube.com/vi/${lecture.youtubeVideoId}/hqdefault.jpg`,
          width: 480,
          height: 360,
          alt: lecture.title,
        },
      ],
    },
  };
}

export default async function LectureDetailPage({
  params,
}: LectureDetailPageProps) {
  const { slug } = await params;
  const lecture = getLectureBySlug(lectures, slug);

  if (!lecture) {
    notFound();
  }

  const relatedLectures = getRelatedLectures(lectures, lecture.id, lecture.subject);
  const companionNotes = notes.filter(
    (n) =>
      lecture.relatedNoteIds?.includes(n.id) ||
      (n.subject.toLowerCase() === lecture.subject.toLowerCase() && n.isPublished)
  ).slice(0, 2);

  const colors = getSubjectColors(lecture.subject);

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
            <Link href="/lectures" className="hover:text-zinc-900 transition-colors">
              Lectures
            </Link>
          </li>
          <li>
            <ChevronRight size={13} className="text-zinc-400" />
          </li>
          <li>
            <Link
              href={`/lectures?subject=${encodeURIComponent(lecture.subject)}`}
              className="hover:text-zinc-900 transition-colors"
            >
              {lecture.subject}
            </Link>
          </li>
          <li>
            <ChevronRight size={13} className="text-zinc-400" />
          </li>
          <li className="text-zinc-900 font-semibold truncate max-w-xs sm:max-w-md">
            {lecture.title}
          </li>
        </ol>
      </nav>

      {/* Video Player Container */}
      <div className="mb-8">
        <YouTubePlayer videoId={lecture.youtubeVideoId} title={lecture.title} />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Main 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-3">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border shadow-xs backdrop-blur-sm ${colors.bg} ${colors.text} ${colors.border}`}
              >
                {lecture.subject}
              </span>
              <span className="text-xs font-semibold text-zinc-600 bg-white/70 backdrop-blur-sm border border-white/80 px-3.5 py-1 rounded-full shadow-xs">
                {lecture.topic}
              </span>
              {lecture.duration && (
                <span className="text-xs font-medium text-zinc-500 bg-white/70 backdrop-blur-sm border border-white/80 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <Clock size={12} />
                  {lecture.duration}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              {lecture.title}
            </h1>

            <p className="text-xs text-zinc-400 font-medium">
              Instructor: Dr. Abhishek Gupta &bull; Academic Session &bull; Streamed via YouTube
            </p>
          </div>

          {/* Description */}
          <div className="ios-glass-card rounded-[28px] p-6 sm:p-8 space-y-4 shadow-md">
            <h2 className="text-[0.7rem] font-bold uppercase tracking-wider text-zinc-400">
              Lecture Overview & Pedagogical Objectives
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
              {lecture.description}
            </p>

            <div className="pt-4 border-t border-black/[0.05]">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                Curriculum Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {lecture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs bg-white/70 border border-black/[0.04] text-zinc-600 px-3 py-1 rounded-full font-medium shadow-xs"
                  >
                    <Tag size={11} className="text-zinc-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Companion Study Notes */}
        <div className="space-y-6">
          <div className="ios-glass-card rounded-[28px] p-6 shadow-md">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-2">
              <BookOpen size={16} />
              <span>Companion Study Notes</span>
            </div>
            <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
              Reinforce the lecture with Dr. Gupta’s structured notes, formula sheets, and PDF materials.
            </p>

            {companionNotes.length > 0 ? (
              <div className="space-y-4">
                {companionNotes.map((note) => (
                  <NoteCard key={note.id} note={note} compact />
                ))}
              </div>
            ) : (
              <p className="text-xs text-zinc-400 italic">
                Notes for this session are currently being compiled.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Related Lectures */}
      {relatedLectures.length > 0 && (
        <section className="pt-12 border-t border-zinc-200/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-900">
                More Lectures in {lecture.subject}
              </h2>
              <p className="text-xs md:text-sm text-zinc-500 mt-1">
                Continue watching sessions from this curriculum module
              </p>
            </div>
            <Link
              href={`/lectures?subject=${encodeURIComponent(lecture.subject)}`}
              className="text-xs font-semibold text-rose-600 hover:text-rose-800 transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedLectures.map((rel) => (
              <LectureCard key={rel.id} lecture={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Back to all lectures */}
      <div className="mt-16 text-center">
        <Link
          href="/lectures"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <ArrowLeft size={14} />
          Return to All Video Lectures
        </Link>
      </div>
    </div>
  );
}
