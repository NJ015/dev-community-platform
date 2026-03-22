import Link from 'next/link'
import React from 'react'

const not_found = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-8">Oops! The page you are looking for does not exist.</p>
      <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
        Go Home
      </Link>
    </div>
  )
}

export default not_found