"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const playVideo = () => {
      video.play().catch(() => {});
    };

    if (!mediaQuery.matches) {
      playVideo();
    }

    // Pause on hidden tab to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (!mediaQuery.matches) {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Poster fallback — shown before video loads */}
      <img
        src="/bg-video-poster.jpg"
        alt=""
        className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-[1.01] transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0" : "opacity-80"
        }`}
        loading="eager"
      />

      {/* Looping background video — clearly visible and vibrant */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/bg-video-poster.jpg"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu scale-[1.01] transition-opacity duration-1000 ease-out ${
          isVideoLoaded ? "opacity-80" : "opacity-0"
        }`}
        disablePictureInPicture
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Light aesthetic scrim — keeps video clearly visible while maintaining page cohesion */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/30 to-[#fbfbfd]/55" />

      {/* Subtle bottom fade so footer transitions cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fbfbfd] to-transparent" />

      {/* iOS ambient light orbs */}
      <div className="ios-ambient-layer opacity-30">
        <div className="ios-orb-1" />
        <div className="ios-orb-2" />
        <div className="ios-orb-3" />
      </div>
    </div>
  );
}
