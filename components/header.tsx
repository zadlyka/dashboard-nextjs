"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sidebar } from "./sidebar";

export function Header({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between sm:justify-end gap-4 p-4 border-b z-10 bg-white",
        className
      )}
    >
      <Sheet>
        <SheetTrigger className="sm:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <Sidebar className="py-8" />
        </SheetContent>
      </Sheet>

      <Input type="search" placeholder="Search..." className="sm:w-1/3" />

      <div className="flex gap-2 sm:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="relative ">
              <Bell className="w-4 h-4 " />
              <span className="sr-only">Notifications</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.2, 1, 1],
                }}
                transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
                className="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full -top-2 -end-2"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Not found</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="inline-flex items-center gap-4 cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="hidden text-sm sm:flex">John Doe</span>
              <ChevronDown className="hidden w-4 h-4 sm:flex" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
