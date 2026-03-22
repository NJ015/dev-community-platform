import React from "react";
import { communities } from "@/data/community";
import JoinBtn from "@/components/JoinBtn";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const community = communities.find((item) => item.slug === slug);

  if (!community) {
    return <div className="text-red-500">Community not found</div>;
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="px-8 py-12 max-w-2xl mx-auto block bg-gray-800 rounded-xl shadow-lg shadow-black/70">
        <h1 className="text-3xl font-bold text-white mb-4">{community.name}</h1>
        <p className="text-gray-400 mb-4">{community.description}</p>
        <p className="text-gray-400 mb-8 text-sm">
          {community.memberCount} Members
        </p>
        <JoinBtn />
      </div>
    </div>
  );
};

export default page;
