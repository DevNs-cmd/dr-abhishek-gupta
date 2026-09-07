import type { MetadataRoute } from "next";
import { notes } from "@/lib/data/notes";
import { lectures } from "@/lib/data/lectures";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abhishekgupta.ac.in";
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/notes",
    "/lectures",
    "/research",
    "/resources",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const noteRoutes = notes.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: new Date(note.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const lectureRoutes = lectures.map((lecture) => ({
    url: `${baseUrl}/lectures/${lecture.slug}`,
    lastModified: new Date(lecture.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...noteRoutes, ...lectureRoutes];
}
