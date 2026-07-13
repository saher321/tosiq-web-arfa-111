import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<UserDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App