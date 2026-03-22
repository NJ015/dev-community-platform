import React from 'react'
import { posts } from '@/data/post'

const page = async({params}:{params:Promise<{postId:string}>}) => {
  const { postId } = await params;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <p className="text-red-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center">
      <div className="px-8 py-12 max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-lg shadow-black/50">
        <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">{post.content}</p>
        <p className="text-gray-500 text-sm">By <span className="text-blue-400">{post.authorUsername}</span> · {post.date}</p>
      </div>
    </div>
  )
}

export default page