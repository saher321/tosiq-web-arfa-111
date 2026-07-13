import React from 'react'
import Navbar from '../components/Navbar'

const WebLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div className="mx-6">
            { children }
        </div>
    </div>
  )
}

export default WebLayout