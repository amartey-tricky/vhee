"use client";

import Link from "next/link";
import clsx from "clsx";

const menuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "About",
    link: "/about"
  },
  {
    id: 3,
    name: "Get Involved",
    link: "/get-involved"
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects"
  },
  {
    id: 5,
    name: "Blog",
    link: "/blog"
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact"
  }
]

export function NavLinks() {
  return (
    <nav className="hidden gap-4 lg:flex">
      {menuLinks.map((link) => {
        return (
          <Link key={link.id} href={link.link} className={clsx("font-medium text-lg hover:text-gray-600 hover:border-b border-blue-500 fade-in-10 fade-out-10 ease-linear duration-200 text-gray-400")}>{link.name}</Link>
        )
      })}
    </nav>
  )
}