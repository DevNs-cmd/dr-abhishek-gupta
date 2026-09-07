"use client";

import { useState, useMemo } from "react";
import { NotesFilter } from "./NotesFilter";
import { NoteCard } from "./NoteCard";
import type { Note, NoteFileType } from "@/lib/types";
import { FileQuestion } from "lucide-react";

interface NotesClientProps {
  initialNotes: Note[];
  initialSubject?: string;
}

export function NotesClient({ initialNotes, initialSubject = "All" }: NotesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedFileType, setSelectedFileType] = useState("All");
  const [sortBy, setSortBy] = useState<"recent" | "title" | "subject">("recent");

  // Extract unique subjects and file types
  const subjects = useMemo(() => {
    const list = Array.from(new Set(initialNotes.map((n) => n.subject)));
    return ["All", ...list];
  }, [initialNotes]);

  const fileTypes: (NoteFileType | "All")[] = useMemo(() => {
    const types = Array.from(new Set(initialNotes.map((n) => n.fileType)));
    return ["All", ...types];
  }, [initialNotes]);

  // Filter and sort notes
  const filteredNotes = useMemo(() => {
    let result = [...initialNotes];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.topic.toLowerCase().includes(q) ||
          n.subject.toLowerCase().includes(q) ||
          n.unit.toLowerCase().includes(q) ||
          n.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    // Subject filter
    if (selectedSubject !== "All") {
      result = result.filter(
        (n) => n.subject.toLowerCase() === selectedSubject.toLowerCase()
      );
    }

    // File type filter
    if (selectedFileType !== "All") {
      result = result.filter((n) => n.fileType === selectedFileType);
    }

    // Sorting
    if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "subject") {
      result.sort((a, b) => a.subject.localeCompare(b.subject));
    } else {
      // recent (default by publishedAt descending)
      result.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    }

    return result;
  }, [initialNotes, searchQuery, selectedSubject, selectedFileType, sortBy]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedSubject("All");
    setSelectedFileType("All");
    setSortBy("recent");
  };

  return (
    <div className="space-y-8">
      {/* Interactive Filter Control */}
      <NotesFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedFileType={selectedFileType}
        setSelectedFileType={setSelectedFileType}
        sortBy={sortBy}
        setSortBy={setSortBy}
        subjects={subjects}
        fileTypes={fileTypes}
        totalCount={initialNotes.length}
        filteredCount={filteredNotes.length}
        onReset={handleReset}
      />

      {/* Grid or Empty State */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[24px] border border-zinc-200/80 p-12 text-center shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center mx-auto mb-4 text-zinc-400">
            <FileQuestion size={26} />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-1">
            No Study Materials Found
          </h3>
          <p className="text-zinc-500 text-sm max-w-sm mx-auto mb-5">
            No notes matched your query or filter parameters. Try clearing the search or choosing a different subject.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-xl hover:bg-zinc-800 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
