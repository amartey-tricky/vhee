import type { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["googlebot", "bingbot", "yandex", "applebot"],
        allow: "/",
        disallow: ["/api"]
      },
    ],
    sitemap: "vheeworld.org/sitemap.xml"
  }
}