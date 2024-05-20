import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "vheeworld.org/",
      priority: 1,
      changeFrequency: "yearly",
      lastModified: new Date()
    },
    {
      url: "vheeworld.org/about",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
    {
      url: "vheeworld.org/projects",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
    {
      url: "vheeworld.org/blog",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
  ]
}