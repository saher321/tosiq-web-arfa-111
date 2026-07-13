import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import { USER_API_URL } from '../utils/api.js'
import UserItem from '../components/UserItem.jsx'
import WebLayout from '../layouts/WebLayout.jsx'

const Users = () => {
  const [users, setUsers] = useState([])

  const getAllUser = async () => {
    try {
      const response = await axios.get(USER_API_URL)
      console.log(response.data.users)
      if (response.data.status == true && response.data.users.length > 0) {
        setUsers(response.data.users)

      }
    } catch (error) {
      console.log("Error: ", error)
    }

  }

  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <WebLayout>
      <div className="grid grid-cols-12 gap-3">
        {
          users.length == 0 ?
            <div>No records</div> :
            users.map((user, i) => {
              return (
                <div key={i} className='col-span-4'>
                  <UserItem user={user} />
                </div>
              )
            })
        }
      </div>
    </WebLayout>
  )
}

export default Users