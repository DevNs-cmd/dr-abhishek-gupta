"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AmbientBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set DOM muted flags to guarantee browser autoplay compliance
    video.muted = true;
    video.defaultMuted = true;

    // If video has already buffered enough data, reveal it immediately
    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
    }

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch(() => {
            // Autoplay may be restricted by battery saver / browser policy; ensure muted and retry
            video.muted = true;
            video.play().catch(() => {});
          });
      }
    };

    startPlayback();

    // Fallback: start playback on the first user interaction if browser delayed autoplay
    const handleFirstInteraction = () => {
      startPlayback();
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("touchstart", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("pointerdown", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true, once: true });

    // Handle tab visibility changes to resume playback when returning to the tab
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        startPlayback();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      {/* High-fidelity static poster fallback — smoothly fades out when video runs */}
      <Image
        src="/bg-video-poster.jpg"
        alt=""
        fill
        priority
        className={`object-cover object-center transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0" : "opacity-80"
        }`}
        sizes="100vw"
      />

      {/* Looping ambient background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/bg-video-poster.jpg"
        onLoadedData={() => setIsVideoLoaded(true)}
        onCanPlay={() => setIsVideoLoaded(true)}
        onPlaying={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-out ${
          isVideoLoaded ? "opacity-80" : "opacity-0"
        }`}
        disablePictureInPicture
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Light aesthetic scrim — keeps background luminous while maintaining text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/30 to-[#fbfbfd]/55" />

      {/* Subtle bottom fade so footer transitions cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fbfbfd] to-transparent" />

      {/* Ambient light orbs rendered via optimized pure CSS gradients */}
      <div className="ios-ambient-layer opacity-40">
        <div className="ios-orb-1" />
        <div className="ios-orb-2" />
        <div className="ios-orb-3" />
      </div>
    </div>
  );
}
