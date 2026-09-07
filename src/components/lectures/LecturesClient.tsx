"use client";

import { useState, useMemo } from "react";
import { LecturesFilter } from "./LecturesFilter";
import { LectureCard } from "./LectureCard";
import type { Lecture } from "@/lib/types";
import { VideoOff } from "lucide-react";

interface LecturesClientProps {
  initialLectures: Lecture[];
  initialSubject?: string;
}

export function LecturesClient({
  initialLectures,
  initialSubject = "All",
}: LecturesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);

  const subjects = useMemo(() => {
    const list = Array.from(new Set(initialLectures.map((l) => l.subject)));
    return ["All", ...list];
  }, [initialLectures]);

  const filteredLectures = useMemo(() => {
    let result = [...initialLectures];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          l.topic.toLowerCase().includes(q) ||
          l.subject.toLowerCase().includes(q) ||
          l.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedSubject !== "All") {
      result = result.filter(
        (l) => l.subject.toLowerCase() === selectedSubject.toLowerCase()
      );
    }

    return result;
  }, [initialLectures, searchQuery, selectedSubject]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedSubject("All");
  };

  return (
    <div className="space-y-8">
      <LecturesFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        subjects={subjects}
        totalCount={initialLectures.length}
        filteredCount={filteredLectures.length}
        onReset={handleReset}
      />

      {filteredLectures.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[24px] border border-zinc-200/80 p-12 text-center shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center mx-auto mb-4 text-zinc-400">
            <VideoOff size={26} />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-1">
            No Video Lectures Found
          </h3>
          <p className="text-zinc-500 text-sm max-w-sm mx-auto mb-5">
            No lectures matched your search criteria. Try a different topic or clear the filter.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-xl hover:bg-zinc-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
