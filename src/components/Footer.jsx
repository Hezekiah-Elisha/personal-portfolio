"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathName = usePathname();

  if (pathName.startsWith("/dashboard")) {
    return null; // Hide footer on dashboard pages
  }

  return (
    <div className="bg-accent text-accent-foreground mt-10">
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-space-mono">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hezekiah Elisha. All rights
            reserved.
          </p>
          <p className="text-sm mt-2">Made with ❤️ using React and Next.js</p>
        </div>
      </footer>
    </div>
  );
}
