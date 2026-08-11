import React from 'react'
import { NavLink } from 'react-router'

const AdminLayout = ({children}) => {
  return (
    <div>

      <header className='rounded-full p-5 mx-auto my-5 w-fit bg-white'>
        <div className='flex gap-5'>
          <NavLink className="nav-link">Customers</NavLink>
          <NavLink className="nav-link">Projects</NavLink>
          <NavLink className="nav-link">Employees</NavLink>
          <NavLink className="nav-link">Task</NavLink>
        </div>
      </header>
      <div className='mx-auto max-w-6xl'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout