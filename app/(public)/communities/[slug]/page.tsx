import React from "react";
import { communities } from "@/data/community";
import JoinBtn from "@/components/JoinBtn";

type PageProps = {
  params: Promise<{
    slug: string;
  }>
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const community = communities.find((item) => item.slug === slug);

  if (!community) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <p className="text-red-500">Community not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="px-8 py-12 max-w-2xl mx-auto block bg-gray-800 rounded-xl shadow-lg shadow-black/50">
        <h1 className="text-3xl font-bold text-white mb-4">{community.name}</h1>
        <p className="text-gray-400 mb-8 text-sm">
          {community.category}
        </p>
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
