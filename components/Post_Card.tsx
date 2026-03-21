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
    <Link href={`/developers/${authorUsername}/posts/${id}`}>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>By {authorUsername} on {date}</p>
      </div>
    </Link>
  )
}

export default Post_Card