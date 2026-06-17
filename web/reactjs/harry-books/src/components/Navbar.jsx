import React from 'react'
import { FiBook, FiHelpCircle, FiHome } from 'react-icons/fi'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  const links = [
    { icon: <FiHome className='-mt-[-1px]' />, text: "Home", url: "/"},
    { icon: <FiBook className='-mt-[-1px]' />, text: "Books", url: "/books"},
    { icon: <FiHelpCircle className='-mt-[-1px]' />, text: "Help", url: "/help"},
  ];
  const activeCss = 'bg-white rounded-full py-1 px-3 font-bold'
  return (
    <div>
      <div className=' max-w-3xl mx-auto rounded-full m-2 p-2 flex items-center justify-between bg-gray-100'>
        <div className="logo">
          <img className='rounded-full h-16 w-16' src="/logo.avif" alt="" />
        </div>
        <div className="links">
          <nav className='flex gap-5'>
            {
              links.map((link) => {
                return (
                  <NavLink className={({ isActive }) =>
                    isActive ? `${activeCss} flex items-center gap-1` : 'flex items-center gap-1'} to={link.url}>
                    {link.icon} {link.text}
                  </NavLink>
                )
              })
            }
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
