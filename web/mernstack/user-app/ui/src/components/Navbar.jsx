import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

  const links = [
    { title: "HOME", url: "/" },
    { title: "USERS", url: "/users" }
  ]
  return (
    <div className='m-5'>
      <nav className='flex gap-5 p-3 bg-white w-fit shadow rounded'>
        {links.map((lnk, i) => {
          return (
            <NavLink key={i} to={lnk.url}
            className={({ isActive }) => isActive ? "font-bold text-blue-600" : "" }
            >
              {lnk.title}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar