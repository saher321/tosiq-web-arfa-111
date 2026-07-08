import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='m-5'>
      <nav className='flex gap-5 p-3 bg-white w-fit shadow rounded'>
        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/users'}>USERS</NavLink>
      </nav>
    </div>
  )
}

export default Navbar