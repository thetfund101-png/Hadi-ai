import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-10-26";
  return [
    { path: "", priority: 1 },
    { path: "/privacy", priority: 0.4 },
    { path: "/terms", priority: 0.4 },
    { path: "/support", priority: 0.4 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
