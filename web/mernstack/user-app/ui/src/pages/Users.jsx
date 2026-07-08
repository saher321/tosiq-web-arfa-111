import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { USER_API_URL } from '../utils/api.js'

const Users = () => {
  const [users, setUsers] = useState([])

  const getAllUser = async () => {
    try {
      const response = await axios.get(USER_API_URL)
      console.log(response.data)
    } catch (error) {
      console.log("Error: ", error)
    }

  }

  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='mx-6'>
        User
      </div>
    </div>
  )
}

export default Users