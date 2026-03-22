import React from 'react'
import { developers } from '@/data/developer'
import Developer_Card from '@/components/Developer_Card'

const page = () => {
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Developers</h1>
      <p className="text-gray-400 mb-8">Meet the developers in our community. Explore profiles, read their posts, and connect with fellow engineers</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((dev) => (
          <li key={dev.id} className="h-full">
            <Developer_Card id={dev.id} username={dev.username} role={dev.role} bio={dev.bio} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page