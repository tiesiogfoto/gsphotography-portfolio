"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logotipas */}
        <Link href="/" className="font-semibold">
          GSphotography
        </Link>

        {/* Navigacija */}
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {/* Telefonas su tap-to-call */}
          <a
            href="tel:46262381"
            className="ml-4 px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Call: 46 26 23 81
          </a>
        </div>
      </div>
    </nav>
  );
}
