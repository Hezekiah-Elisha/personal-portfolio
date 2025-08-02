"use client";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PortBreadcrumb() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);
  const capitalizedPathParts = pathParts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  );

  return (
    <Breadcrumb className="text-sm font-space-mono">
      <BreadcrumbList>
        {capitalizedPathParts.map((part, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {index === capitalizedPathParts.length - 1 ? (
                <BreadcrumbPage>{String(part).trim()}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={`/${String(
                      pathParts.slice(0, index + 1).join("/")
                    ).trim()}`}
                    className="text-muted-foreground hover:outline-offset-8 hover:text-primary text-sm"
                  >
                    {String(part).trim()}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < capitalizedPathParts.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
