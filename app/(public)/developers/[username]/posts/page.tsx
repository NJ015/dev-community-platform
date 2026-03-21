import React from "react";
import { posts } from "@/data/post";
import Post_Card from "@/components/Post_Card";


const page = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params;
  const postList = posts.filter((p) => p.authorUsername === username);

  if (!postList.length) {
    return <div className="text-red-500">No posts found for {username}</div>;
  }
  
  return (
    <div>
      <ul>
        {postList.map((post)=>(
          <li key={post.id}>
            <Post_Card id={post.id} title={post.title} content={post.content} authorUsername={post.authorUsername} date={post.date} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
