import Link from "next/link";
import React from "react";

type DeveloperCardTypes = {
  id: string;
  username: string;
  role: string;
  bio: string;
};

const Developer_Card = ({ id, username, role, bio }: DeveloperCardTypes) => {
  return (
    <Link href={`/developers/${username}`} className="block bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-colors duration-300">
      <h2 className="text-lg font-semibold text-white mb-1">{username}</h2>
      <p className="text-blue-400 text-sm mb-3">{role}</p>
      <p className="text-gray-400 text-sm h-12 overflow-hidden">{bio}</p>
    </Link>
  );
};

export default Developer_Card;