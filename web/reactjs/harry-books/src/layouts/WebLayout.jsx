import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({ children }) => {
  return (
    <div className='m-3'>
      <Navbar />
      <div className='mx-auto max-w-7xl'>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default WebLayout
