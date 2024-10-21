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
import Image from "next/image";

function NavBar() {
  return (
    <div className="p-6 flex w-screen  ">
    <Image
      src="/static/logo.png"
      alt="logo"
      width={50}
      height={50}
      className="mr-4"
    />
      <div className=" flex items-center ml-auto mr-4">
        <p className="mx-4">Home</p>
        <Link href="/about" className="mx-4">
          About
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="mx-4">
            Service
          </DropdownMenuTrigger>
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
        <Link href="/career" className="mx-4">career</Link>
        <Link href="/contact" className="mx-4">contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
