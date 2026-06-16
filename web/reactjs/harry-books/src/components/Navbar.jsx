import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className=' max-w-3xl mx-auto rounded-full m-2 p-2 flex items-center justify-between bg-gray-100'>
        <div className="logo">
          <img className='rounded-full h-16 w-16' src="./logo.avif" alt="" />
        </div>
        <div className="links">
          <nav className='flex gap-5'>
            <Link to={'/'}>Home</Link>
            <Link to={'/books'}>Books</Link>
            <Link to={'/help'}>Help</Link>
          </nav>
        </div>
        <div className="cta">
          <button className='rounded-full px-5 py-4 bg-gray-900 text-white/90'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
