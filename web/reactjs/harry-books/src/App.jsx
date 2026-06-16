import React from 'react'
import WebLayout from './layouts/WebLayout'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Help from './pages/Help'
import Books from './pages/Books'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/books"} element={<Books />} />
        <Route path={"/help"} element={<Help />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
