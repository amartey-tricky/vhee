import { cormorant } from "@/components/fonts";
import CldImage from "@/components/cldimage";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col md:px-16">
      <section className="px-8">
        <h1
          className={`${cormorant.className} py-8 font-bold text-4xl md:text-6xl uppercase`}
        >
          Blog
        </h1>
      </section>
      <section className="container py-8 md:py-12 font-medium flex flex-col-reverse gap-8 md:gap-16">
        <article>
          <Link
            href="https://successafrica.info/all-you-need-to-know-about-vhee-world-foundation/"
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  All You Need To Know About Vhee World Foundation
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By Kumi Robert
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <CldImage
                  src="VHEEWORLD - WEBSITE/IMG_5446_lkhdgg"
                  alt=""
                  width={80}
                  height={80}
                  className="size-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500">
                Vhee World Foundation is a registered, funding/non-profit
                charity organisation that was established in 2015 by an
                ambitious young lady, Ms. Violet Lawson at age 19.
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">9th January, 2021</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">5 minute</dd>
              </div>
            </dl>
          </Link>
        </article>
        <article>
          <Link
            href="https://www.sheenmagazine.com/vheeworld-foundation-the-strive-to-overcome-streetism/"
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-300 via-yellow-300 to-emerald-400" />

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  VHEEWORLD FOUNDATION: The Strive to Overcome ‘Streetism’
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By Sheen Magazine
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <CldImage
                  alt=""
                  src="VHEEWORLD - WEBSITE/Vheeworld/IMG_5379_xpheqm"
                  width={80}
                  height={80}
                  className="size-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500">
                Inspiring, empowering, and game-changing; these are a few terms
                that describe the essence of Vheeworld foundation. A
                not-for-profit organization established in 2015, based in the
                heart of Ghana (Accra) striving to extend alms and aid to the
                vulnerable, within the general community.
              </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">Published</dt>
                <dd className="text-xs text-gray-500">16th January, 2021</dd>
              </div>

              <div className="flex flex-col-reverse">
                <dt className="text-sm font-medium text-gray-600">
                  Reading time
                </dt>
                <dd className="text-xs text-gray-500">5 minute</dd>
              </div>
            </dl>
          </Link>
        </article>
      </section>
    </main>
  );
}
