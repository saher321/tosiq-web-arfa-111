import React from 'react'
import useAuth from '../store/useAuth'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    const isAuthenticated = useAuth((state) => state.isAuthenticated)
    
    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to={'/auth/login'} replace={true} />
    )
}

export default ProtectedRoute