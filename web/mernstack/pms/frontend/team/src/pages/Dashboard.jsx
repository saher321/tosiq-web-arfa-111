import React from 'react'
import AdminLayout from '../layouts/AdminLayout'
import useAuth from "../store/useAuth.jsx";
import { Button } from '../components/ComponentLib.jsx';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const user = useAuth((state) => state.user)
  const logout = useAuth((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/auth/login', {replace: true})
  }
  return (
    <AdminLayout>
        <div className='font-bold'>
          Welcome to dashboard: {user?.fName ?? "No loggedin"}
          <Button
          className="block bg-red-800 text-white p-1 rounded"
          onClick={handleLogout} title="Logout"/>
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
