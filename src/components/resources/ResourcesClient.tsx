"use client";

import { useState, useMemo } from "react";
import { Search, X, FolderOpen } from "lucide-react";
import { ResourceCard } from "./ResourceCard";
import type { Resource } from "@/lib/types";

interface ResourcesClientProps {
  initialResources: Resource[];
}

export function ResourcesClient({ initialResources }: ResourcesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const list = Array.from(new Set(initialResources.map((r) => r.category)));
    return ["All", ...list];
  }, [initialResources]);

  const filteredResources = useMemo(() => {
    let result = [...initialResources];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          (r.subject && r.subject.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter((r) => r.category === selectedCategory);
    }

    return result;
  }, [initialResources, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Bar */}
      <div className="ios-glass-card rounded-[28px] p-5 sm:p-6 shadow-md space-y-4">
        {/* Apple Spotlight Style Search */}
        <div className="relative">
          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search academic resources, syllabi, datasets, placement guides..."
            className="w-full pl-11 pr-10 py-2.5 bg-black/[0.03] border border-black/[0.05] rounded-full text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:bg-white/90 transition-all"
            aria-label="Search resources"
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

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
          <span className="text-xs font-semibold text-zinc-400 shrink-0 mr-1.5">
            Category:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isSelected
                    ? "bg-[#1d1d1f] text-white shadow-sm"
                    : "bg-black/[0.03] text-zinc-600 hover:bg-black/[0.06] hover:text-zinc-900 border border-black/[0.03]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2.5 border-t border-black/[0.05] text-xs text-zinc-500">
          <span>
            Showing <strong className="text-zinc-900 font-semibold">{filteredResources.length}</strong> of{" "}
            <strong className="text-zinc-900 font-semibold">{initialResources.length}</strong> materials
          </span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Grid or Empty */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="ios-glass-card rounded-[28px] p-12 text-center shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-white/80 border border-white flex items-center justify-center mx-auto mb-4 text-zinc-400 shadow-sm">
            <FolderOpen size={24} />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 mb-1">
            No Materials Found
          </h3>
          <p className="text-zinc-500 text-sm max-w-sm mx-auto mb-5">
            No resources matched your criteria. Try selecting another category or resetting the search.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-5 py-2.5 bg-[#1d1d1f] text-white text-xs font-semibold rounded-full hover:bg-black transition-colors shadow-md"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
