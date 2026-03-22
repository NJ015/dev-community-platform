import React from 'react'

const loading = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

export default loading