import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import axios from 'axios'
import { ALL_BOOKS } from '../utils/api.js'
import BookItem from '../components/books/BookItem.jsx'
import { FadeLoader } from 'react-spinners'
import * as motion from 'motion/react-client';
import { Link } from 'react-router'

const Books = () => {
  const [ books, setBooks ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const square = {
    width: "100%",
    height: "100%",
  };

  const getAllBooks = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(ALL_BOOKS)
      if (response.data && response.data.length > 0){
        setBooks(response.data)
        setIsLoading(false)
      }
    } catch (error) {
      console.log("ERR: ", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllBooks();
  }, [])

  return (
    <WebLayout>
      <div className='my-5'>
        { isLoading && 
          <div className='my-40 grid place-items-center'>
            <FadeLoader />
          </div>
        }
        <div className='grid grid-cols-12 gap-3'>
          {books.map((book) => {
            return (
              <div className='col-span-4'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                  }}
                  style={square}
                >
                  <Link to={`/books/${book.number}/details/`}>
                    <BookItem book={book} />
                  </Link>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </WebLayout>
  )
}

export default Books
