import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="p-6 flex w-screen  ">
      <h3 className="text-xl ml-16">Anti.ai</h3>
      <div className=" flex items-center ml-auto mr-4">
        <p className="mx-4">Home</p>
        <Link href="/about" className="mx-4">About</Link>
        <Link className="mx-4 mr-16" href="/service">
          Service
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
