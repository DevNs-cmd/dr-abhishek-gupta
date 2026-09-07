import type { Metadata } from "next";
import { FolderGit2 } from "lucide-react";
import { ResourcesClient } from "@/components/resources/ResourcesClient";
import { resources } from "@/lib/data/resources";

export const metadata: Metadata = {
  title: "Academic & Career Resources",
  description:
    "Curated university syllabi, laboratory manuals, placement preparation guides, and datasets curated by Dr. Abhishek Gupta.",
  openGraph: {
    title: "Academic & Career Resources | Dr. Abhishek Gupta",
    description:
      "Download syllabi, lab problem sets, datasets, and interview guides for Computer Science students.",
  },
};

export default function ResourcesPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24">
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100/80 text-emerald-700 text-xs font-semibold mb-3">
          <FolderGit2 size={13} />
          Academic & Technical Repository
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
          Curated Academic Resources
        </h1>
        <p className="text-zinc-500 text-sm md:text-base mt-2.5 leading-relaxed">
          Official course syllabi, lab problem manuals, placement interview guides, and analytical
          datasets organized for students and aspiring technology professionals.
        </p>
      </div>

      <ResourcesClient initialResources={resources} />
    </div>
  );
}
