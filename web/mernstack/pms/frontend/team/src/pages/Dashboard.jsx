import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import useAuth from "../store/useAuth.jsx";
import { Button } from '../components/ComponentLib.jsx';
import { useNavigate } from 'react-router';
import RoleBasedLayout from '../layouts/RoleBasedLayout.jsx';

const Dashboard = () => {
  const user = useAuth((state) => state.user)
  const logout = useAuth((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/auth/login', {replace: true})
  }
  return (
    <RoleBasedLayout>
        <div className='bg-white p-3 rounded-lg'>
          {
          user?.role == 'pm' ?
          <span className='block w-fit text-[12px] font-bold text-green-950 bg-green-200 p-1 rounded-full border border-green-950'>Manager</span>:
          <span className='block w-fit text-[12px] font-bold text-gray-950 bg-gray-200 p-1 rounded-full border border-gray-950'>Employee</span>
          }
          <h2 className='text-[24px] font-bold'>Welcome back, {user?.fName}</h2>
          <p className='text-gray-700'>{user?.email}</p>
        </div>
    </RoleBasedLayout>
  )
}

export default Dashboard

// authentication

// login
// signup
// protected routes
// global state management (zustand)
//      - JWT token
// middleware
// dashboard
