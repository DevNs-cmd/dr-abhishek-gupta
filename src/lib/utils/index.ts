import type { Note, Lecture, Resource, Publication } from "@/lib/types";

// ─── Slug utilities ───────────────────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─── Notes helpers ─────────────────────────────────────────────────────────────

export function getNoteBySlug(notes: Note[], slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}

export function getNotesBySubject(notes: Note[], subject: string): Note[] {
  if (subject === "all") return notes;
  return notes.filter(
    (note) => note.subject.toLowerCase() === subject.toLowerCase()
  );
}

export function searchNotes(notes: Note[], query: string): Note[] {
  if (!query.trim()) return notes;
  const q = query.toLowerCase();
  return notes.filter(
    (note) =>
      note.title.toLowerCase().includes(q) ||
      note.description.toLowerCase().includes(q) ||
      note.topic.toLowerCase().includes(q) ||
      note.subject.toLowerCase().includes(q) ||
      note.unit.toLowerCase().includes(q) ||
      note.keywords.some((k) => k.toLowerCase().includes(q))
  );
}

export function filterAndSearchNotes(
  notes: Note[],
  query: string,
  subject: string,
  fileType: string
): Note[] {
  let filtered = [...notes];
  if (query.trim()) filtered = searchNotes(filtered, query);
  if (subject && subject !== "all")
    filtered = filtered.filter(
      (n) => n.subject.toLowerCase() === subject.toLowerCase()
    );
  if (fileType && fileType !== "all")
    filtered = filtered.filter((n) => n.fileType === fileType);
  return filtered;
}

export function getRelatedNotes(notes: Note[], currentId: string, subject: string): Note[] {
  return notes
    .filter((n) => n.id !== currentId && n.subject === subject && n.isPublished)
    .slice(0, 3);
}

// ─── Lectures helpers ─────────────────────────────────────────────────────────

export function getLectureBySlug(
  lectures: Lecture[],
  slug: string
): Lecture | undefined {
  return lectures.find((l) => l.slug === slug);
}

export function filterLectures(
  lectures: Lecture[],
  query: string,
  subject: string
): Lecture[] {
  let filtered = [...lectures];
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        l.topic.toLowerCase().includes(q) ||
        l.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (subject && subject !== "all") {
    filtered = filtered.filter(
      (l) => l.subject.toLowerCase() === subject.toLowerCase()
    );
  }
  return filtered;
}

export function getRelatedLectures(
  lectures: Lecture[],
  currentId: string,
  subject: string
): Lecture[] {
  return lectures
    .filter((l) => l.id !== currentId && l.subject === subject && l.isPublished)
    .slice(0, 3);
}

// ─── Resource helpers ─────────────────────────────────────────────────────────

export function filterResources(
  resources: Resource[],
  query: string,
  category: string
): Resource[] {
  let filtered = [...resources];
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        (r.subject?.toLowerCase().includes(q) ?? false)
    );
  }
  if (category && category !== "all") {
    filtered = filtered.filter((r) => r.category === category);
  }
  return filtered;
}

// ─── Publication helpers ──────────────────────────────────────────────────────

export function getPublicationBySlug(
  publications: Publication[],
  slug: string
): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

// ─── Subject color map ────────────────────────────────────────────────────────

export const subjectColors: Record<string, { bg: string; text: string; border: string }> = {
  Python:    { bg: "bg-emerald-50",  text: "text-emerald-700",  border: "border-emerald-200" },
  Django:    { bg: "bg-green-50",    text: "text-green-700",    border: "border-green-200"   },
  DBMS:      { bg: "bg-amber-50",    text: "text-amber-700",    border: "border-amber-200"   },
  IoT:       { bg: "bg-violet-50",   text: "text-violet-700",   border: "border-violet-200"  },
  "C++":     { bg: "bg-red-50",      text: "text-red-700",      border: "border-red-200"     },
  "Power BI":{ bg: "bg-yellow-50",   text: "text-yellow-700",   border: "border-yellow-200"  },
  "Computer Science": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200"   },
  Career:    { bg: "bg-slate-50",    text: "text-slate-700",    border: "border-slate-200"   },
};

export function getSubjectColors(subject: string) {
  return subjectColors[subject] ?? { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
}

// ─── File type icon map ───────────────────────────────────────────────────────

export const fileTypeLabels: Record<string, string> = {
  PDF: "PDF Document",
  "Slide Deck": "Presentation Slides",
  "Lab Manual": "Laboratory Manual",
  Assignment: "Assignment Sheet",
  Reference: "Reference Material",
};

// ─── Date formatter ───────────────────────────────────────────────────────────

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
