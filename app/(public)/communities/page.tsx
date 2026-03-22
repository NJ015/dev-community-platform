import React from 'react'
import { communities } from '@/data/community'
import Community_Card from '@/components/Community_Card'

const page = () => {
  return (
    <div className="px-8 py-12">
    <h1 className="text-3xl font-bold text-white mb-2">Communities</h1>
    <p className="text-gray-400 mb-8">Browse and join developer communities. Find your people, share knowledge, and grow together</p>
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {communities.map((community)=>(
          <li key={community.slug} className='h-full'>
            <Community_Card id={community.id} name={community.name} slug={community.slug} description={community.description} memberCount={community.memberCount} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default page