import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import ProtectedRoute from './utils/ProtectedRoute'
import AuthRoute from './utils/AuthRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route element={<AuthRoute />}>
          <Route path='/auth/register' element={<Register />}/>
          <Route path='/auth/login' element={<Login />}/>
          <Route path='/auth/forgot-password' element={<ForgotPassword />}/>
          <Route path='/auth/reset-password' element={<ResetPassword />}/>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App