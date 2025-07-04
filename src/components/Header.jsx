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
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="sticky top-0 bg-secondary/30 backdrop-blur-3xl shadow-sm z-50 py-5 mb-4">
      <div className="flex flex-row justify-between items-center w-full container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="font-space-mono font-bold">
          <Link href="/" className="text-2xl">
            Hezekiah Elisha
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-4">
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
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
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
