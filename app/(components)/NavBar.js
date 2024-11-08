'use client'
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <div className="px-6 py-3 flex w-screen bg-[#020202] items-center absolute z-50">
      <Image
        src="/static/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="mr-4 w-12 h-12 lg:h-auto lg:w-auto"
      />

      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden  ml-auto  bg-transparent text-2xl text-white">☰</Button>
        </SheetTrigger>
        <SheetContent className='bg-black' >
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="flex flex-col items-center justify-center space-y-10 h-[60vh]">
            <Link href="/" onClick={() => setIsOpen(false)} className="mb-2 text-xl text-white">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="mb-2 text-xl text-white">
              About
            </Link>
            <Link href="/service" onClick={() => setIsOpen(false)} className="mb-2 text-xl text-white">
              Service
            </Link>
            <Link href="/career" onClick={() => setIsOpen(false)} className="mb-2 text-xl text-white">
              Career
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mb-2 text-xl text-white">
              Contact
            </Link>
          </SheetDescription>
        </SheetContent>
      </Sheet>

      <div className="hidden  lg:flex items-center ml-auto mr-4">
        <Link className="mx-4" href="/">Home</Link>
        <Link href="/about" className="mx-4">
          About
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="mx-4">Service</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {" "}
              <Link href="/service#ai">AI</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href="/service#web">website</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href="/service#app">Mobile application</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href="/service#cloud">cloud</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/career" className="mx-4">
          career
        </Link>
        <Link href="/contact" className="mx-4">
          contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
