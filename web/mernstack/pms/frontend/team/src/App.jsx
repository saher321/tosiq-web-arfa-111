import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/register' element={<Register />}/>
        <Route path='/auth/login' element={<Login />}/>

        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App