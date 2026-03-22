"use client"

import React from 'react'
import { useState } from 'react'


const JoinBtn = () => {
    const [joined, setJoined] = useState(false);
  return (
      <button className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition-colors duration-500 ${joined ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`} onClick={() => setJoined(!joined)}>
        {joined ? 'Leave Community' : 'Join Community'}
      </button>
  )
}

export default JoinBtn