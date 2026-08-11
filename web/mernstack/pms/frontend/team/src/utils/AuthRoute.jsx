import React from 'react'
import useAuth from '../store/useAuth'
import { Navigate, Outlet } from 'react-router'

const AuthRoute = () => {
    const isAuthenticated = useAuth((state) => state.isAuthenticated)
    
    return isAuthenticated ? (
        <Navigate to={'/dashboard'} replace={true} />
    ) : (
        <Outlet />
    )
}

export default AuthRoute