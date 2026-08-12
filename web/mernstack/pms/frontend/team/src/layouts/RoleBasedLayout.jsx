import React from 'react'
import { NavLink } from 'react-router'
import useAuth from '../store/useAuth'
import AdminLayout from './AdminLayout'
import EmployeeLayout from './EmployeeLayout'

// manager layout
const RoleBasedLayout = ({children}) => {
    const user = useAuth((state) => state.user)
    return user.role == 'pm' ? 
    <AdminLayout>{children}</AdminLayout> : <EmployeeLayout>{children}</EmployeeLayout>
}

export default RoleBasedLayout