import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='text-center font-bold rounded-lg p-5 bg-gray-100'>
      Harry Book &copy; {year} &mdash; All rights reserve.
    </footer>
  )
}

export default Footer
