"use client";

import { CldImage } from "next-cloudinary";
import { cormorant, dancingScript } from "./fonts";

export function HeaderLogo() {
  return (
    <div className="flex items-center">
      <CldImage
        alt="VheeWorld Logo"
        src="vhee_logo_rcc6wf"
        aspectRatio={1}
        priority
        width={80}
        height={80}
      />
      <p className="px-4 font-semibold text-xl md:text-3xl">
        <span
          className={`${cormorant.className} text-[#491BA2] font-bold text-2xl md:text-4xl`}
        >
          Vhee
        </span>
        <span className={`${dancingScript.className} text-[#408BE8]`}>
          World
        </span>
      </p>
    </div>
  );
}
