"use client";

import Link from "next/link";
import { HeaderLogo } from "./headerLogo";
import { NavLinks } from "./navLinks";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";

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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="w-full h-auto top-0">
        <div className="px-12 backdrop-blur-lg flex items-center justify-between">
          <Link href="/">
            <HeaderLogo />
          </Link>
          <div>
            <NavLinks />
            <button
              type="button"
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8 text-gray-800" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </header>
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="fixed h-screen w-[70%] text-slate-300 bg-[#491BA2] top-0 left-0 ease-in-out duration-200 md:w-[40%]"
      >
        <nav className="flex flex-col gap-9 text-xl items-center justify-evenly md:text-2xl md:font-semibold md:gap-12">
          {menuLinks.map((link) => {
            return (
              <Link key={link.id} href={link.link} onClick={toggleMenu}>{link.name}</Link>
            )
          })}
        </nav>
      </Transition>
    </>
  );
}
