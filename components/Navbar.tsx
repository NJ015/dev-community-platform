import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-6'>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/communities"}>Communities</Link>
        <Link href={"/developers"}>Developers</Link>
        <Link href={"/topics"}>Topics</Link>
    </nav>
  )
}

export default Navbar