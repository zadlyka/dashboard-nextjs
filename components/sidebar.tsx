import { cn } from "@/lib/utils";
import {
  CheckSquare,
  FormInput,
  Grid2X2,
  LayoutDashboard,
  LogIn,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "./logo";

export function Sidebar({ className }: { className?: string }) {
  const menu = [
    {
      label: "Pages",
      menu: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Tables",
          href: "/tables",
          icon: Grid2X2,
        },
        {
          name: "Tasks",
          href: "/tasks",
          icon: CheckSquare,
        },
        {
          name: "Forms",
          href: "/forms",
          icon: FormInput,
        },
      ],
    },
    {
      label: "Account",
      menu: [
        {
          name: "Profile",
          href: "/profile",
          icon: User,
        },
        {
          name: "Sign In",
          href: "/sign-in",
          icon: LogIn,
        },
        {
          name: "Sign Out",
          href: "/sign-out",
          icon: LogOut,
        },
      ],
    },
  ];

  return (
    <div className={cn("flex flex-col gap-4 p-4 h-screen", className)}>
      <Logo className="w-24"/>

      <ul className="flex-grow space-y-2 list-none">
        {menu.map((item, index) => (
          <li key={index}>
            <h2 className="font-semibold tracking-tight">{item.label}</h2>
            <ul className="list-none">
              {item.menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "text-sm flex justify-start w-full"
                    )}
                  >
                    <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="sticky inset-x-0 bottom-0 pt-4 border-t">
        <Button variant="ghost" className="justify-start w-full">
          <Settings className="w-4 h-4 mr-2" /> Settings
        </Button>
      </div>
    </div>
  );
}
