

import React from 'react'
import { communities } from '@/data/community'
import JoinBtn from '@/components/JoinBtn';


const page = async({params}: {params:Promise<{slug:string}>}) => {
  const { slug } = await params;
  const community = communities.find((item)=>item.slug === slug);
 
  if(!community) {
    return <div className='text-red-500'>Community not found</div>
  }

  return (
    <div>
      <h1>{community.name}</h1>
      <p>{community.description}</p>
      <p>{community.memberCount} Members</p>
      <JoinBtn />
    </div>
  )
}

export default page