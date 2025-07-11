"use client";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Header() {
  const pathname = usePathname();

  // Hide header on dashboard pages
  if (pathname?.startsWith("/dashboard")) {
    return null;
  }
  return (
    <nav className="sticky top-0 bg-secondary/30 backdrop-blur-3xl shadow-sm z-50 py-5 mb-4">
      <div className="flex flex-row justify-between items-center w-full container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="font-space-mono font-bold">
          <Link href="/" className="text-2xl">
            Hezekiah Elisha
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-4">
          <NavLink
            href="/"
            className="px-4 py-2 font-space-mono hover:underline hover:underline-offset-8"
          >
            Home
          </NavLink>
          <Link
            href="/aboutme"
            className="px-4 py-2 font-space-mono hover:underline hover:underline-offset-8"
          >
            AboutMe
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 font-space-mono hover:underline hover:underline-offset-8"
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2 font-space-mono hover:underline hover:underline-offset-8"
          >
            Projects
          </Link>
          <Link href="/" className="px-4 py-2 font-space-mono">
            Blog
          </Link>
          <Link
            href="/signin"
            className="px-4 py-2 font-space-mono underline underline-offset-8"
          >
            Sign In
          </Link>
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Use the links below to navigate through the site.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <Link href="/" className="px-4 py-2 font-space-mono">
                  Home
                </Link>
                <Link href="/" className="px-4 py-2 font-space-mono">
                  AboutMe
                </Link>
                <Link href="/contact" className="px-4 py-2 font-space-mono">
                  Contact
                </Link>
                <Link href="/projects" className="px-4 py-2 font-space-mono">
                  Projects
                </Link>
                <Link href="/" className="px-4 py-2 font-space-mono">
                  Blog
                </Link>
                <Link href="/signin" className="px-4 py-2 font-space-mono">
                  Sign In
                </Link>
              </div>
              <SheetFooter className="font-space-mono">
                <Link href="/signin" className="w-full hover:cursor-pointer">
                  <Button type="submit" className="w-full hover:cursor-pointer">
                    Sign In
                  </Button>
                </Link>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
