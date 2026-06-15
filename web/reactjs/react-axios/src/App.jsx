import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ALL_BOOKS } from './utils/api.js'

const App = () => {
  const [ books, setBooks ] = useState([])
  
  const getAllBooks = async () => {
    try {
      const response = await axios.get(ALL_BOOKS)
      if (response.data && response.data.length > 0){
        setBooks(response.data)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }

  useEffect(() => {
    getAllBooks();
  }, [])

  return (
    <div>
      <h2>Harry potter books</h2>
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.number}>
                <h5>{book.title}</h5>
                <img height={320} width={180} src={book.cover} alt="" />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App

//  project
//  npm i axios
//  useState
//  useEffect

// API requests: POST, GET, PUT/PTACH, DELETE, 
// create :: post
// show   :: get
// update :: put/patch
// delete :: delete