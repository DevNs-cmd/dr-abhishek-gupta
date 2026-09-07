export default function LecturesLoading() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24 animate-pulse">
      <div className="max-w-2xl mb-10 space-y-3">
        <div className="w-32 h-6 bg-zinc-200 rounded-full" />
        <div className="w-80 h-10 bg-zinc-200 rounded-xl" />
        <div className="w-full h-5 bg-zinc-100 rounded-lg" />
      </div>

      <div className="h-28 bg-white rounded-2xl border border-zinc-200/80 mb-8 p-5" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] border border-zinc-100 overflow-hidden space-y-4 pb-5"
          >
            <div className="aspect-video w-full bg-zinc-200" />
            <div className="px-5 space-y-2">
              <div className="w-20 h-4 bg-zinc-200 rounded" />
              <div className="w-full h-6 bg-zinc-200 rounded" />
              <div className="w-3/4 h-4 bg-zinc-100 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
