"use client";

import { CldImage } from "next-cloudinary";
import { cormorant, dancingScript } from "./fonts";

export function FooterLogo() {
  return (
    <div className="flex items-center">
      <CldImage
        alt="VheeWorld Logo"
        src="vhee_logo_rcc6wf"
        aspectRatio={1}
        priority
        width={50}
        height={50}
      />
      <p className="px-4 font-semibold text-md md:text-xl">
        <span
          className={`${cormorant.className} text-[#491BA2] font-bold text-xl md:text-2xl`}
        >
          Vhee
        </span>
        <span
          className={`${dancingScript.className} text-blue-800 md:text-[#408BE8]`}
        >
          World
        </span>
      </p>
    </div>
  );
}
