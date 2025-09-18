"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold">GSphotography</Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
