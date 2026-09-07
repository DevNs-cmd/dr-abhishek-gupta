export default function NoteDetailLoading() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 pb-24 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="w-64 h-4 bg-zinc-200 rounded mb-6" />

      {/* Header Skeleton */}
      <div className="max-w-3xl space-y-4 mb-10">
        <div className="flex gap-2">
          <div className="w-20 h-6 bg-zinc-200 rounded-full" />
          <div className="w-24 h-6 bg-zinc-100 rounded-full" />
          <div className="w-20 h-6 bg-zinc-100 rounded-full" />
        </div>
        <div className="w-full h-12 bg-zinc-200 rounded-xl" />
        <div className="w-2/3 h-6 bg-zinc-100 rounded-lg" />
      </div>

      {/* Reader Skeleton */}
      <div className="h-96 bg-white rounded-[24px] border border-zinc-200/80 p-8" />
    </div>
  );
}
