import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-8 py-4 text-center text-gray-400 text-sm border-t border-gray-700">
      {/* <p>Built for developers, by developers</p> */}
      <p>&copy; {new Date().getFullYear()} Dev Community. All rights reserved.</p>
    </footer>
  )
}

export default Footer