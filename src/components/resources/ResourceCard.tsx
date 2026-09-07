import { Download, ExternalLink, FileSpreadsheet, FileText, Link2, Presentation, Layers } from "lucide-react";
import type { Resource } from "@/lib/types";
import { getSubjectColors } from "@/lib/utils";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Presentations":
        return <Presentation size={17} className="text-amber-600" />;
      case "Assignments":
        return <FileText size={17} className="text-blue-600" />;
      case "Syllabus":
        return <Layers size={17} className="text-emerald-600" />;
      case "Important Links":
        return <Link2 size={17} className="text-indigo-600" />;
      default:
        return <FileSpreadsheet size={17} className="text-purple-600" />;
    }
  };

  const colors = resource.subject ? getSubjectColors(resource.subject) : null;

  return (
    <div className="group flex flex-col ios-glass-card rounded-[26px] p-6 active:scale-[0.99] transition-all duration-300">
      {/* Header Badges */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/[0.04] text-zinc-700 border border-black/[0.04] backdrop-blur-sm">
            {resource.category}
          </span>
          {colors && (
            <span
              className={`text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full border shadow-xs ${colors.bg} ${colors.text} ${colors.border}`}
            >
              {resource.subject}
            </span>
          )}
        </div>
        <div className="w-9 h-9 rounded-2xl bg-white/80 border border-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-indigo-50 transition-colors">
          {getCategoryIcon(resource.category)}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-bold text-zinc-900 text-[1.05rem] leading-snug tracking-tight mb-2 group-hover:text-indigo-900 transition-colors">
        {resource.title}
      </h3>

      <p className="text-zinc-500 text-[0.85rem] leading-relaxed mb-6 flex-1">
        {resource.description}
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
        <div className="text-xs text-zinc-400 font-medium">
          {resource.fileType ? `Format: ${resource.fileType}` : "Web Resource"}
        </div>

        {resource.externalUrl ? (
          <a
            href={resource.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Visit Link
            <ExternalLink size={13} />
          </a>
        ) : (
          <a
            href={`#download-${resource.slug}`}
            onClick={(e) => {
              e.preventDefault();
              alert(`Downloading: "${resource.title}" (${resource.fileType ?? "Document"})`);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <Download size={13} />
            Download
          </a>
        )}
      </div>
    </div>
  );
}
