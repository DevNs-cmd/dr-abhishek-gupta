import Link from "next/link";
import { ArrowLeft, BookOpen, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 pt-28 pb-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center mx-auto text-zinc-400">
          <Search size={28} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Error 404 &bull; Academic Page Not Found
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Resource Relocated or Missing
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed">
            The study material, lecture, or URL requested could not be located in Dr. Abhishek Gupta’s academic repository.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <Home size={14} />
            Return to Homepage
          </Link>
          <Link
            href="/notes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold hover:bg-zinc-50 transition-colors"
          >
            <BookOpen size={14} />
            Browse Study Notes
          </Link>
        </div>
      </div>
    </div>
  );
}
