import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { MyContext } from '../context/ContextApi'

const Home = () => {
  const data = useContext(MyContext)
  return (
    <div>
      <Navbar />
      <h6>{data.role}</h6>
      Welcome back, {data.name}
    </div>
  )
}

export default Home
