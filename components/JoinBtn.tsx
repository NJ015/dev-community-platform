"use client"

import React from 'react'
import { useState } from 'react'


const JoinBtn = () => {
    const [joined, setJoined] = useState(false);
  return (
      <button className='cursor-pointer' onClick={() => setJoined(!joined)}>
        {joined ? 'Leave Community' : 'Join Community'}
      </button>
  )
}

export default JoinBtn