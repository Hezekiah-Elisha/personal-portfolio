import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-secondary/95 backdrop-blur-md shadow-lg z-50 py-5">
      <div className="flex flex-row justify-between items-center w-full container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="font-space-mono font-bold">
          <Link href="/" className="text-2xl">
            Hezekiah Elisha
          </Link>
        </div>
        <div>
          <Link href="/" className="px-4 py-2 font-space-mono">
            Home
          </Link>
          <Link href="/" className="px-4 py-2 font-space-mono">
            AboutMe
          </Link>
          <Link href="/" className="px-4 py-2 font-space-mono">
            Contact
          </Link>
          <Link href="/projects" className="px-4 py-2 font-space-mono">
            Projects
          </Link>
          <Link href="/" className="px-4 py-2 font-space-mono">
            Blog
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
