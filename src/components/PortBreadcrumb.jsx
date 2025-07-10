"use client";
import React from "react";
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
  const pathParts = pathname.split("/").filter((part) => part); // Filter out empty parts
  const capitalizedPathParts = pathParts.map(
    (part) => part.charAt(0).toUpperCase() + part.slice(1)
  );
  return (
    <Breadcrumb className="text-sm">
      <BreadcrumbList>
        {capitalizedPathParts.map((part, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild>
              <Link
                href={`/${String(
                  pathParts.slice(0, index + 1).join("/")
                ).trim()}`}
              >
                <BreadcrumbPage>{String(part).trim()}</BreadcrumbPage>
              </Link>
            </BreadcrumbLink>
            {index < capitalizedPathParts.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
