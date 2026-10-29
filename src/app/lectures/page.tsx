import type { Metadata } from "next";
import { Video } from "lucide-react";
import { LecturesClient } from "@/components/lectures/LecturesClient";
import { lectures } from "@/lib/data/lectures";

export const metadata: Metadata = {
  title: "Curated Video Lectures",
  description:
    "Explore high-definition video lectures by Dr. Abhishek Gupta covering Python, Django, Database Management Systems, IoT Architecture, C++, and Data Analytics.",
  openGraph: {
    title: "Curated Video Lectures | Dr. Abhishek Gupta",
    description:
      "Watch video lectures and technical masterclasses in Python, DBMS, IoT, and C++ by Dr. Abhishek Gupta.",
  },
};

interface LecturesPageProps {
  searchParams: Promise<{ subject?: string }>;
}

export default async function LecturesPage({ searchParams }: LecturesPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialSubject = resolvedSearchParams.subject ?? "All";

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-28 pb-24">
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ios-glass-pill text-rose-700 text-xs font-semibold mb-3">
          <Video size={13} />
          Classroom & Seminar Stream
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
          Curated Video Lectures
        </h1>
        <p className="text-zinc-500 text-sm md:text-base mt-2.5 leading-relaxed">
          In-depth technical walkthroughs, conceptual explanations, and classroom recordings
          delivered by Dr. Abhishek Gupta across key software engineering and systems subjects.
        </p>
      </div>

      <LecturesClient initialLectures={lectures} initialSubject={initialSubject} />
    </div>
  );
}
