"use client";

import { useState } from "react";
import { Play, ExternalLink, RefreshCw } from "lucide-react";
import { YouTubeIcon } from "@/components/common/SocialIcons";
import Image from "next/image";

interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

export function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const channelUrl = "https://www.youtube.com/@CodecraftGen";

  return (
    <div className="space-y-3">
      <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : (
          <div
            className="relative w-full h-full group cursor-pointer"
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsPlaying(true);
              }
            }}
            aria-label={`Play lecture: ${title}`}
          >
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              unoptimized
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors" />

            {/* Central iOS Frosted Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-full shadow-2xl group-hover:scale-105 group-hover:bg-white transition-all duration-300 border border-white/80">
                <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors">
                  <Play size={20} className="fill-white translate-x-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[0.68rem] uppercase tracking-wider text-zinc-500 font-bold">
                    Watch Lecture
                  </span>
                  <span className="block text-sm font-bold text-zinc-950 leading-tight">
                    Click to Stream
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Title Bar */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white text-xs bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-xl sm:rounded-2xl flex items-center justify-between pointer-events-none border border-white/10">
              <span className="truncate mr-3 font-medium text-zinc-100">{title}</span>
              <span className="shrink-0 text-red-400 font-semibold text-[0.72rem] flex items-center gap-1.5">
                <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                YouTube
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Helpful Action Bar Below Player */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs px-1">
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <button
              onClick={() => setIsPlaying(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium transition-colors"
            >
              <RefreshCw size={13} />
              Reset Player
            </button>
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-xs transition-colors"
            >
              <Play size={13} className="fill-white" />
              Play in Browser
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 font-semibold border border-zinc-200/80 shadow-xs transition-all hover:border-zinc-300"
          >
            <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
            <span>Watch on YouTube</span>
            <ExternalLink size={12} className="text-zinc-400" />
          </a>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-600 font-medium border border-zinc-200/60 transition-colors hidden sm:inline-flex"
          >
            <span>Channel @CodecraftGen</span>
            <ExternalLink size={11} className="text-zinc-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
