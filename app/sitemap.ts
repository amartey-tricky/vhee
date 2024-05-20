import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.vheeworld.org/",
      priority: 1,
      changeFrequency: "yearly",
      lastModified: new Date()
    },
    {
      url: "https://www.vheeworld.org/about",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
    {
      url: "https://www.vheeworld.org/projects",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
    {
      url: "https://www.vheeworld.org/blog",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
  ]
}