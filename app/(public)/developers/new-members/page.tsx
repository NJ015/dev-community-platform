import { developers } from '@/data/developer'
import React from 'react'
import Developer_Card from '@/components/Developer_Card'

const page = () => {
  const new_members = developers.filter(dev=>dev.isNew);
  return (
    <>
    <div className="px-8 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-4">New Members</h1>
      <p className="text-gray-400">Fresh faces in the community. Welcome our newest developers and help them get started</p>
    </div>
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {new_members.map((dev) => (
          <li key={dev.id} className="h-full">
            <Developer_Card
              id={dev.id}
              username={dev.username}
              role={dev.role}
              bio={dev.bio}
            />
          </li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default page