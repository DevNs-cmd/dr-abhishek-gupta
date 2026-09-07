"use client";

import { Search, X } from "lucide-react";

interface LecturesFilterProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedSubject: string;
  setSelectedSubject: (s: string) => void;
  subjects: string[];
  totalCount: number;
  filteredCount: number;
  onReset: () => void;
}

export function LecturesFilter({
  searchQuery,
  setSearchQuery,
  selectedSubject,
  setSelectedSubject,
  subjects,
  totalCount,
  filteredCount,
  onReset,
}: LecturesFilterProps) {
  const hasActiveFilters = searchQuery.trim() !== "" || selectedSubject !== "All";

  return (
    <div className="ios-glass-card rounded-[28px] p-5 sm:p-6 shadow-md space-y-4">
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
            placeholder="Search lectures by topic, framework, programming language..."
            className="w-full pl-11 pr-10 py-2.5 bg-black/[0.03] border border-black/[0.05] rounded-full text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:bg-white/90 transition-all"
            aria-label="Search video lectures"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* iOS Subject Filter Capsule Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
        <span className="text-xs font-semibold text-zinc-400 shrink-0 mr-1.5">
          Topic / Domain:
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
          <span className="font-semibold text-zinc-900">{totalCount}</span> lectures
          {selectedSubject !== "All" && (
            <span className="ml-1">
              in <span className="text-indigo-600 font-semibold">{selectedSubject}</span>
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-xs text-rose-600 hover:text-rose-800 font-semibold hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>
    </div>
  );
}
