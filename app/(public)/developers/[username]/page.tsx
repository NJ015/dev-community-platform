import React from "react";
import { developers } from "@/data/developer";
import Link from "next/link";

type PageProps = {
  params: Promise<{ username: string }>
}

const page = async (props: PageProps) => {
  const { username } = await props.params;
  const dev = developers.find((dev) => dev.username === username);

  if (!dev) {
    return <div className="text-red-500">Developer not found</div>;
  }
  
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="px-8 py-12 max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-lg shadow-black/50">
        <h1 className="text-3xl font-bold text-white mb-2">{dev.username}</h1>
        <p className="text-blue-400 mb-4">{dev.role}</p>
        <p className="text-gray-400 mb-8">{dev.bio}</p>
        <Link href={`/developers/${dev.username}/posts`} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
          View Posts
        </Link>
      </div>
    </div>
  );
};

export default page;