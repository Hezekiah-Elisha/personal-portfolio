import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={`antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning className="font-space-mono">
        {/* className="w-screen h-screen bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/85"> */}
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
