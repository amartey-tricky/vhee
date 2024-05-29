import type { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["googlebot", "bingbot", "yandex", "applebot"],
        allow: ["/", "/about", "/projects", "/blog", "/donate", "/volunteer", "/contact"],
        disallow: ["/api"]
      },
    ],
    sitemap: "https://www.vheeworld.org/sitemap.xml"
  }
}