import React from 'react'
import { topics } from '@/data/topic'
import Topics_Card from '@/components/Topics_Card'

const page = () => {
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Topics</h1>
      <p className="text-gray-400 mb-8">Explore the most popular topics in the developer community. Find discussions and posts that interest you</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic) => (
          <li key={topic} className="h-full">
            <Topics_Card topic={topic} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page