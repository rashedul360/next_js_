import Link from "next/link";
import React from "react";

const Navbar = () => {
 return (
  <div className="flex justify-between p-2 bg-green-500 text-white">
   <div>
    <h2 className="text-2xl">Home</h2>
   </div>
   <div className="flex gap-2">
    <Link href={"/"}>Home</Link>
    <Link href={"/posts"}>Posts</Link>
   </div>
  </div>
 );
};

export default Navbar;
