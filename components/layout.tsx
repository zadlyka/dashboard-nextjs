import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="flex h-screen">
      <Sidebar className="hidden w-1/4 sm:flex border-e" />
      <ScrollArea className="w-full h-screen">
        <Header className="sticky top-0" />
        <div className={className}>{children}</div>
      </ScrollArea>
    </main>
  );
}
