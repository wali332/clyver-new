import type { MetadataRoute } from "next";
import { projects } from "@/lib/content/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clyverdigital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPages = projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudyPages,
  ];
}
