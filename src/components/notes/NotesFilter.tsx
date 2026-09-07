"use client";

import { Search, X, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import type { NoteFileType } from "@/lib/types";

interface NotesFilterProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedSubject: string;
  setSelectedSubject: (s: string) => void;
  selectedFileType: string;
  setSelectedFileType: (t: string) => void;
  sortBy: "recent" | "title" | "subject";
  setSortBy: (s: "recent" | "title" | "subject") => void;
  subjects: string[];
  fileTypes: (NoteFileType | "All")[];
  totalCount: number;
  filteredCount: number;
  onReset: () => void;
}

export function NotesFilter({
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  selectedFileType,
  setSelectedFileType,
  sortBy,
  setSortBy,
  subjects,
  fileTypes,
  totalCount,
  filteredCount,
  onReset,
}: NotesFilterProps) {
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedSubject !== "All" ||
    selectedFileType !== "All" ||
    sortBy !== "recent";

  return (
    <div className="ios-glass-card rounded-[28px] p-5 sm:p-6 shadow-md space-y-4">
      {/* Top Search and Controls */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Apple Spotlight Style Search */}
        <div className="relative flex-1">
          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes by title, topic, unit, keywords..."
            className="w-full pl-11 pr-10 py-2.5 bg-black/[0.03] border border-black/[0.05] rounded-full text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white/90 transition-all"
            aria-label="Search study notes"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
              aria-label="Clear search query"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* File Format & Sort Segmented Controls */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* File Format */}
          <div className="flex items-center gap-1.5 bg-black/[0.03] border border-black/[0.04] rounded-full px-3.5 py-1.5 text-xs text-zinc-600">
            <SlidersHorizontal size={13} className="text-zinc-400" />
            <span className="font-medium text-zinc-400">Format:</span>
            <select
              value={selectedFileType}
              onChange={(e) => setSelectedFileType(e.target.value)}
              className="bg-transparent text-zinc-800 font-semibold focus:outline-none cursor-pointer"
            >
              <option value="All">All Formats</option>
              {fileTypes
                .filter((t) => t !== "All")
                .map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 bg-black/[0.03] border border-black/[0.04] rounded-full px-3.5 py-1.5 text-xs text-zinc-600">
            <ArrowUpDown size={13} className="text-zinc-400" />
            <span className="font-medium text-zinc-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "recent" | "title" | "subject")
              }
              className="bg-transparent text-zinc-800 font-semibold focus:outline-none cursor-pointer"
            >
              <option value="recent">Newest First</option>
              <option value="title">Title (A-Z)</option>
              <option value="subject">Subject</option>
            </select>
          </div>
        </div>
      </div>

      {/* iOS Subject Filter Capsule Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
        <span className="text-xs font-semibold text-zinc-400 shrink-0 mr-1.5">
          Subjects:
        </span>
        {subjects.map((sub) => {
          const isSelected = selectedSubject === sub;
          return (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                isSelected
                  ? "bg-[#1d1d1f] text-white shadow-sm"
                  : "bg-black/[0.03] text-zinc-600 hover:bg-black/[0.06] hover:text-zinc-900 border border-black/[0.03]"
              }`}
            >
              {sub}
            </button>
          );
        })}
      </div>

      {/* Active Filter Bar & Results Count */}
      <div className="flex items-center justify-between pt-2.5 border-t border-black/[0.05] text-xs text-zinc-500">
        <div>
          Showing <span className="font-semibold text-zinc-900">{filteredCount}</span> of{" "}
          <span className="font-semibold text-zinc-900">{totalCount}</span> materials
          {selectedSubject !== "All" && (
            <span className="ml-1">
              in <span className="text-indigo-600 font-semibold">{selectedSubject}</span>
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
}
