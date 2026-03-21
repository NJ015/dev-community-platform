import React from 'react'
import { communities } from '@/data/community'
import Community_Card from '@/components/Community_Card'

const page = () => {
  return (
    <>
    <h1>Communities</h1>
    <p>Browse and join developer communities. Find your people, share knowledge, and grow together</p>
    <div>
      <ul>
        {communities.map((community)=>(
          <li key={community.slug}>
            <Community_Card id={community.id} name={community.name} slug={community.slug} description={community.description} memberCount={community.memberCount} />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default page