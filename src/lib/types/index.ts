// =============================================================================
// Dr. Abhishek Gupta Academic Platform — Core TypeScript Types
// Architecture designed for future Supabase/PostgreSQL backend integration
// =============================================================================

// ─── Professor / Profile ─────────────────────────────────────────────────────

export interface Professor {
  id: string;
  name: string;
  title: string;
  roles: string[];
  institution: string;
  bio: string;
  shortBio: string;
  expertise: ExpertiseDomain[];
  photo: string;
  affiliations: Affiliation[];
}

export interface ExpertiseDomain {
  id: string;
  name: string;
  color: string;
  category: "programming" | "database" | "iot" | "analytics" | "cs";
}

export interface Affiliation {
  institution: string;
  role: string;
  type: "primary" | "secondary";
}

// ─── Subject ─────────────────────────────────────────────────────────────────

export interface Subject {
  id: string;
  name: string;
  slug: string;
  code?: string;
  color: string;
  icon?: string;
}

// ─── Study Notes / Materials ─────────────────────────────────────────────────

export interface Note {
  id: string;
  slug: string;
  title: string;
  subject: string;
  subjectSlug: string;
  unit: string;
  unitNumber: number;
  topic: string;
  description: string;
  content?: string;
  fileType: NoteFileType;
  fileUrl?: string;  // Future: Supabase Storage URL
  downloadUrl?: string;
  readingTime: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  isPublished: boolean;
  outline?: string[];
  keyPoints?: string[];
}

export type NoteFileType = "PDF" | "Slide Deck" | "Lab Manual" | "Assignment" | "Reference";

// ─── Lectures / Video Content ────────────────────────────────────────────────

export interface Lecture {
  id: string;
  slug: string;
  title: string;
  subject: string;
  subjectSlug: string;
  topic: string;
  description: string;
  youtubeVideoId: string;  // YouTube Video ID only — never re-hosted
  duration?: string;
  publishedAt: string;
  isPublished: boolean;
  tags: string[];
  relatedNoteIds?: string[];
  relatedLectureIds?: string[];
}

// ─── Resources ────────────────────────────────────────────────────────────────

export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: ResourceCategory;
  description: string;
  fileType?: string;
  fileUrl?: string;  // Future: Supabase Storage URL
  externalUrl?: string;
  subject?: string;
  isPublished: boolean;
  publishedAt: string;
}

export type ResourceCategory =
  | "Notes"
  | "Presentations"
  | "Assignments"
  | "Reference Material"
  | "Important Links"
  | "Syllabus";

// ─── Research / Publications ─────────────────────────────────────────────────

export interface Publication {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  publisher?: string;
  indexedIn?: string[];
  domain: string;
  methodology?: string;
  sector?: string;
  type: PublicationType;
  status: "published" | "in-review" | "preprint";
  year?: number;
  requestCopyEmail?: string;  // For verified contact later
}

export type PublicationType = "journal-article" | "conference-paper" | "book-chapter" | "thesis";

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// ─── Filter / Search State ────────────────────────────────────────────────────

export interface NotesFilterState {
  query: string;
  subject: string;
  unit: string;
  fileType: string;
  sortBy: "recent" | "title" | "subject";
}

export interface LecturesFilterState {
  query: string;
  subject: string;
  sortBy: "recent" | "title";
}

export interface ResourcesFilterState {
  query: string;
  category: string;
}
