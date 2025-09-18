"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logotipas / Pavadinimas */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          GSphotography
        </Link>

        {/* Navigacija */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
