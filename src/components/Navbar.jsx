import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="flex bg-gray-200 h-10">
      <div className="flex">
        <Link href="/" passHref>
          <Image src={logo} alt="logo" className="h-10 w-10" />
        </Link>
        Stable Diffusion Showcase
      </div>
      <div className="navbar-links content-end flex gap-1 ml-auto mr-1">
        <div>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
