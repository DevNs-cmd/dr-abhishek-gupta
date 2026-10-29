"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;

  // Detect iOS and Android mobile/tablet devices
  const isMobileOrTabletUA =
    /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // Detect touch screens or viewports under 1024px
  const isTouchDevice =
    window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
    window.innerWidth < 1024;

  // Respect user's reduced-motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Only allow heavy MP4 background video playback on desktop with mouse and ample GPU budget.
  return !isMobileOrTabletUA && !isTouchDevice && !prefersReducedMotion;
}

function getServerSnapshot(): boolean {
  return false;
}

export function AmbientBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const canPlayVideo = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!canPlayVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    // Pause on hidden tab or window blur to conserve system memory
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [canPlayVideo]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      {/* High-fidelity static poster — always rendered first, 100% stable on iOS */}
      <Image
        src="/bg-video-poster.jpg"
        alt=""
        fill
        priority
        className={`object-cover object-center transition-opacity duration-700 ${
          isVideoLoaded && canPlayVideo ? "opacity-0" : "opacity-80"
        }`}
        sizes="100vw"
      />

      {/* Looping background video — only rendered & decoded on desktop with sufficient GPU budget */}
      {canPlayVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/bg-video-poster.jpg"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? "opacity-80" : "opacity-0"
          }`}
          disablePictureInPicture
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Light aesthetic scrim — keeps background luminous while maintaining text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/30 to-[#fbfbfd]/55" />

      {/* Subtle bottom fade so footer transitions cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fbfbfd] to-transparent" />

      {/* Ambient light orbs rendered via optimized pure CSS gradients on desktop only */}
      <div className="ios-ambient-layer opacity-40 hidden lg:block">
        <div className="ios-orb-1" />
        <div className="ios-orb-2" />
        <div className="ios-orb-3" />
      </div>
    </div>
  );
}


