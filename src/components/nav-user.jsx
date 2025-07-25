"use client";
import {
  BadgeCheck,
  Bell,
  Check,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Moon,
  Sparkles,
  Sun,
  SunMoon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "@/lib/session";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function NavUser() {
  const [user, setUser] = useState({});
  const { isMobile } = useSidebar();
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  const logout = async () => {
    try {
      await deleteCookie("user");
      await deleteCookie("token");
      // Optionally, redirect to the login page or show a success message
      toast.success("User logged out successfully");

      router.push("/signin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const cookie = await getCookie("user");

        if (cookie) {
          try {
            const parsedUser = JSON.parse(cookie.value);
            setUser(parsedUser);
          } catch (parseError) {
            // Set a default user or handle the error appropriately
            setUser({ username: "Unknown User", email: "user@example.com" });
          }
        } else {
          console.warn("No user cookie found");
          setUser({ username: "Guest", email: "guest@example.com" });
        }
      } catch (error) {
        console.error("Error getting user cookie:", error);
        setUser({ username: "Error", email: "error@example.com" });
      }
    };

    fetchUser();
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.username}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback className="rounded-lg">
                    {user.username && user.username[0]
                      ? user.username[0].toUpperCase()
                      : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.username}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuLabel className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                Current Theme: {theme || "loading..."}
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="flex flex-row items-center justify-between"
              >
                <div>
                  {theme === "dark" ? <Check className="inline mr-2" /> : null}
                  <span>Dark Mode</span>
                </div>
                <Moon className="inline size-4" />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="flex flex-row items-center justify-between"
              >
                <div>
                  {theme === "light" ? <Check className="inline mr-2" /> : null}
                  <span>Light Mode</span>
                </div>
                <Sun className="inline size-4" />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="flex flex-row items-center justify-between"
              >
                <div>
                  {theme === "system" ? (
                    <Check className="inline mr-2" />
                  ) : null}
                  <span>System Mode</span>
                </div>
                <SunMoon className="inline size-4" />
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
