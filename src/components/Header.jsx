import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center w-full mx-auto p-4">
      <div className="font-space-mono font-bold">Hezekiah Elisha</div>
      <div>
        <Link href="/" className="px-4 py-2 font-space-mono">
          Home
        </Link>
        <Link href="/" className="px-4 py-2 font-space-mono">
          About
        </Link>
        <Link href="/" className="px-4 py-2 font-space-mono">
          Contact
        </Link>
        <Link href="/" className="px-4 py-2 font-space-mono">
          Projects
        </Link>
        <Link href="/" className="px-4 py-2 font-space-mono">
          Blog
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
