"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { Album } from "./data/albums";
import { madeForYouAlbums } from "./data/albums";

export default function Index() {
  return (
    <Layout className="p-4 space-y-4 sm:p-8">
      <div className="inline-flex justify-between w-full">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <Button>Add</Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="inline-flex justify-between w-full">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Made for you
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {madeForYouAlbums.map((album: Album, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ContextMenu>
                <ContextMenuTrigger>
                  <Image
                    src={album.cover}
                    alt={album.name}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full transition-all hover:scale-105 aspect-square"
                  />
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Detail</ContextMenuItem>
                  <ContextMenuItem>Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Layout>
  );
}
