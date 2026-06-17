import React from 'react'
import WebLayout from './layouts/WebLayout'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Help from './pages/Help'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/books"} element={<Books />} />
        {/* localhost/books/1/details */}
        <Route path={"/books/:bookNumber/details/"} element={<BookDetails />} />
        <Route path={"/help"} element={<Help />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
