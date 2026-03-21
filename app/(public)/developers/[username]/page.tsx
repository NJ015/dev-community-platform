import React from "react";
import { developers } from "@/data/developer";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const dev = developers.find((dev) => dev.username === username);

  if (!dev) {
    return <div className="text-red-500">Developer not found</div>;
  }
  
  return (
    <div>
      <h1>{dev.username}</h1>
      <p>{dev.role}</p>
      <p>{dev.bio}</p>
      <Link href={`/developers/${dev.username}/posts`}>View Posts</Link>
    </div>
  );
};

export default page;
