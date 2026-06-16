import React from 'react'

const BookItem = ({ book }) => {
  return (
    <div className='bg-white shadow rounded-3xl p-3 flex gap-3'>
        <div><img className='rounded-2xl h-44' src={book.cover} alt="" /></div>
        <div>
            <div>
                <small className='text-gray-600'>Title</small>
                <div className='font-bold'>{book.title}</div>
            </div>
            <div className='my-4'>
                <small className='text-gray-600'>Released Date</small>
                <div className='font-bold'>{book.releaseDate}</div>
            </div>
        </div>
    </div>
  )
}

export default BookItem
