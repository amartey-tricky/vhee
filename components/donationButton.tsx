import Link from "next/link";

export function DonationButton() {
  return (
    <Link href="/donate" className="relative inline-block group">
      <span className="relative z-10 block px-6 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 rounded-lg group-hover:text-blue-500 bg-gradient-to-r from-blue-500 to-blue-700 border-blue-500 group-hover:bg-white">
        <span className="absolute inset-0 w-full h-full px-6 py-3 rounded-lg opacity-50 bg-gradient-to-r from-blue-500 to-blue-700" />
        <span className="relative">Donate Now</span>
      </span>
    </Link>
  );
}
