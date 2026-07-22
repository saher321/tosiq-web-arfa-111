import React, { useEffect, useState } from 'react'
import axios from  'axios'
import { ALL_USER_API } from './utils/api.js'

const App = () => {
  const [ users, setUsers ] = useState([])

  const getAllUsers = async () => {
    try {
      const response = await axios.get(ALL_USER_API)
      if (response.data.status == true) {
        setUsers(response.data.users)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <div key={i}>{user.name}, {user.email}</div>
          )
        })
      }
    </div>
  )
}

export default App
