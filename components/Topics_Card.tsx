import Link from 'next/link'
import React from 'react'

const Topics_Card = ({ topic }: { topic: string }) => {
  return (
    <Link href={`/topics/`}>
      <div>
        <h3>{topic}</h3>
      </div>
    </Link>
  )
}

export default Topics_Card