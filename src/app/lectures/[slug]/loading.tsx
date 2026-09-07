export default function LectureDetailLoading() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24 animate-pulse">
      <div className="w-64 h-4 bg-zinc-200 rounded mb-6" />

      {/* Video Skeleton */}
      <div className="aspect-video w-full bg-zinc-900 rounded-2xl mb-8" />

      {/* Details Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="w-40 h-6 bg-zinc-200 rounded-full" />
          <div className="w-full h-10 bg-zinc-200 rounded-xl" />
          <div className="h-40 bg-white rounded-2xl border border-zinc-100 p-6" />
        </div>
        <div className="h-64 bg-white rounded-2xl border border-zinc-100 p-6" />
      </div>
    </div>
  );
}
