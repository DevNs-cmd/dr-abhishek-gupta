"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        />
      ) : (
        <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            unoptimized
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              // fallback to hqdefault if maxres doesn't exist
              const target = e.target as HTMLImageElement;
              if (target.src !== fallbackThumb) {
                target.src = fallbackThumb;
              }
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-full shadow-2xl group-hover:scale-105 group-hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Play size={18} className="fill-white translate-x-0.5" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-zinc-400 font-bold">Watch Lecture</span>
                <span className="block text-sm font-bold text-zinc-900 leading-tight">Start Stream</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/60 backdrop-blur-sm px-3.5 py-2 rounded-xl flex items-center justify-between pointer-events-none">
            <span className="truncate mr-4">{title}</span>
            <span className="shrink-0 text-zinc-300 font-mono text-[0.7rem]">youtube-nocookie</span>
          </div>
        </div>
      )}
    </div>
  );
}
