import React from 'react'
import { topics } from '@/data/topic'
import Topics_Card from '@/components/Topics_Card'

const page = () => {
  return (
    <>
    <h1>Topics</h1>
    <p>Explore the most popular topics in the developer community. Find discussions and posts that interest you</p>
    <div>
      <ul>
        {topics.map((topic)=>(
          <li key={topic}>
            <Topics_Card topic={topic} />
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default page