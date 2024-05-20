import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      priority: 1,
      changeFrequency: "yearly",
      lastModified: new Date()
    },
    {
      url: "/about",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
    {
      url: "/projects",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
    {
      url: "/blog",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date()
    },
  ]
}