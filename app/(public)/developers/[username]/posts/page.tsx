import React from "react";
import { posts } from "@/data/post";
import Post_Card from "@/components/Post_Card";

const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const postList = posts.filter((p) => p.authorUsername === username);

  if (!postList.length) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <p className="text-gray-400 text-lg">No posts found for <span className="text-white font-semibold">{username}</span></p>
      </div>
    );
  }
  
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Posts by {username}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {postList.map((post) => (
          <li key={post.id} className="h-full">
            <Post_Card id={post.id} title={post.title} content={post.content} authorUsername={post.authorUsername} date={post.date} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;