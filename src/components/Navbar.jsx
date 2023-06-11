import React from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="flex bg-gray-200 h-10">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="navbar-links content-end flex gap-1 ml-auto mr-1">
        <div>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
