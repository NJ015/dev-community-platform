import React from 'react'
import { developers } from '@/data/developer'
import Developer_Card from '@/components/Developer_Card'

const page = () => {
  return (
    <>
    <h1>Developers</h1>
    <p>Meet the developers in our community. Explore profiles, read their posts, and connect with fellow engineers</p>
    <div>
      <ul>
        {developers.map((dev)=>(
          <li key={dev.id}>
            <Developer_Card id={dev.id} username={dev.username} role={dev.role} bio={dev.bio} />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default page