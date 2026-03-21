import React from 'react'
import { posts } from '@/data/post'

const page = async({params}:{params:Promise<{postId:string}>}) => {
  const { postId } = await params;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div className="text-red-500">Post not found</div>;
  }


  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>By {post.authorUsername} on {post.date}</p>
    </div>
  )
}

export default page