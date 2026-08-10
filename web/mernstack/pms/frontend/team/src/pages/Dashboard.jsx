import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import useAuth from "../store/useAuth.jsx";

const Dashboard = () => {
  const user = useAuth((state) => state.user)
  return (
    <AdminLayout>
        <div className='font-bold'>
          Welcome to dashboard: {user}
        </div>
    </AdminLayout>
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
