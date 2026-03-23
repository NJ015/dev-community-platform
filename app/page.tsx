import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <section className="space-y-2">
      <div className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to DevCommunity!
        </h1>
        <p className="text-gray-400 text-lg ">
          A platform where developers connect, share knowledge, and grow
          together.
        </p>
        <p className="text-gray-400 text-lg">
          Browse communities, discover top developers, and explore topics that
          matter to you.
        </p>
      </div>

      <div className="flex gap-4 justify-center text-center">
        <Link href="/communities" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Browse Communities
        </Link>
        <Link href="/developers" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Discover Developers
        </Link>
      </div>
    </section>
  );
}
