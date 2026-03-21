import Link from 'next/link';
import React from 'react'

type CommunityCardTypes = {
    id: string;
    name: string;
    slug: string;
    description: string;
    memberCount: number;
}

const Community_Card = ({id, name, slug, description, memberCount}:CommunityCardTypes) => {
    
  return (
    <Link href={`/communities/${slug}`}>
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{memberCount} Members</p>
      </div>
    </Link>
  )
}


export default Community_Card