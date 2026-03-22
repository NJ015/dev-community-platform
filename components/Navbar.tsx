"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex bg-gray-800 px-8 py-4 items-center justify-between border-b border-gray-700">
      <Link href={"/"} className="text-white font-bold text-xl">
        DevCommunity
      </Link>
      <div className="flex gap-6 items-center">
      <Link
        href={"/"}
        className={
          pathname === "/"
            ? "text-white font-bold"
            : "text-gray-400 hover:text-white transition-colors duration-300"
        }
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={
          pathname === "/about"
            ? "text-white font-bold"
            : "text-gray-400 hover:text-white transition-colors duration-300"
        }
      >
        About
      </Link>
      <Link
        href={"/communities"}
        className={
          pathname === "/communities"
            ? "text-white font-bold"
            : "text-gray-400 hover:text-white transition-colors duration-300"
        }
      >
        Communities
      </Link>
      <Link
        href={"/developers"}
        className={
          pathname === "/developers"
            ? "text-white font-bold"
            : "text-gray-400 hover:text-white transition-colors duration-300"
        }
      >
        Developers
      </Link>
      <Link
        href={"/topics"}
        className={
          pathname === "/topics"
            ? "text-white font-bold"
            : "text-gray-400 hover:text-white transition-colors duration-300"
        }
      >
        Topics
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
