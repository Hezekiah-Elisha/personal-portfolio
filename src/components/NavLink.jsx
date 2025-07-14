import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const currentPath = usePathname();
  const isActive = currentPath === href || currentPath.startsWith(`${href}/`); // For nested routes

  return (
    <Link
      href={href}
      className={ isActive ? "hover:underline hover:underline-offset-8 bg-accent/40 font-space-mono" : "inactive-link-class font-space-mono"}
    >
      {children}
    </Link>
  );
}
