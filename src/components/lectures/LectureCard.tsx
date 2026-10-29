import Link from "next/link";
import Image from "next/image";
import { Play, Clock, ArrowRight } from "lucide-react";
import type { Lecture } from "@/lib/types";
import { getSubjectColors } from "@/lib/utils";

interface LectureCardProps {
  lecture: Lecture;
}

export function LectureCard({ lecture }: LectureCardProps) {
  const colors = getSubjectColors(lecture.subject);
  const thumbnailUrl = `https://img.youtube.com/vi/${lecture.youtubeVideoId}/hqdefault.jpg`;

  return (
    <Link
      href={`/lectures/${lecture.slug}`}
      className="group flex flex-col ios-glass-card rounded-[28px] overflow-hidden active:scale-[0.99] transition-all duration-300"
      aria-label={`Watch lecture: ${lecture.title}`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={lecture.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* iOS Frosted Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/85 backdrop-blur-xl border border-white/90 shadow-xl flex items-center justify-center text-zinc-900 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
            <Play size={18} className="fill-zinc-900 translate-x-0.5 text-zinc-900" />
          </div>
        </div>

        {/* Translucent Subject Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {lecture.subject}
          </span>
        </div>

        {/* iOS Duration Pill */}
        {lecture.duration && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[0.72rem] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-white/10">
            <Clock size={11} />
            <span>{lecture.duration}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <div className="text-[0.73rem] font-semibold text-indigo-600 mb-1.5 uppercase tracking-wide">
          {lecture.topic}
        </div>

        <h3 className="font-bold text-zinc-900 text-[1.05rem] leading-snug tracking-tight mb-2 group-hover:text-indigo-900 transition-colors line-clamp-2">
          {lecture.title}
        </h3>

        <p className="text-zinc-500 text-[0.85rem] leading-relaxed line-clamp-2 mb-5 flex-1">
          {lecture.description}
        </p>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-3.5 border-t border-black/[0.05] text-xs">
          <div className="flex flex-wrap gap-1">
            {lecture.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-black/[0.03] text-zinc-500 border border-black/[0.04] px-2.5 py-0.5 rounded-full text-[0.7rem]"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 group-hover:gap-2 transition-all">
            Watch
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
