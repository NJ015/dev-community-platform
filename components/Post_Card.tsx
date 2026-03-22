import Link from 'next/link';
import React from 'react'

type PostCardTypes = {
  id: string;
  title: string;
  content: string;
  authorUsername: string;
  date: string;
};

const Post_Card = ({ id, title, content, authorUsername, date }: PostCardTypes) => {
  return (
    <Link href={`/developers/${authorUsername}/posts/${id}`} className="block bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-colors duration-300">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">{content}</p>
      <p className="text-gray-500 text-xs">By {authorUsername} · {date}</p>
    </Link>
  )
}

export default Post_Card