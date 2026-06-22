import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { MyContext } from '../context/ContextApi'

const Contact = () => {
  const data = useContext(MyContext)
  return (
    <div>
      <Navbar />
      &copy; Copryright &mdash; {data.name}
    </div>
  )
}

export default Contact
