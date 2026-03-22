import Link from 'next/link'
import React from 'react'

const Topics_Card = ({ topic }: { topic: string }) => {
  return (
    <Link href={`/topics/`} className="block bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition-colors duration-300">
      <h3 className="text-white font-semibold">{topic}</h3>
    </Link>
  )
}

export default Topics_Card