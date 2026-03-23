import Link from "next/link";
import React from "react";

type CommunityCardTypes = {
  id: string;
  name: string;
  slug: string;
  description: string;
  memberCount: number;
};

const Community_Card = (props : CommunityCardTypes) => {
  return (
    <Link href={`/communities/${props.slug}`} className="flex flex-col justify-between bg-gray-800 rounded-lg p-6 h-full hover:bg-gray-700 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-white mb-2">{props.name}</h3>
        <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">{props.description}</p>
        <p className="text-gray-400 text-xs">{props.memberCount} Members</p>
    </Link>
  );
};

export default Community_Card;
