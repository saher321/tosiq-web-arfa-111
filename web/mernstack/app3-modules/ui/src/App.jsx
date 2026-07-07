import React, { useEffect, useState } from 'react'
import { STATUS_API_URL } from './utils/api.js'
import axios from 'axios'

const App = () => {
  const [statuses, setStatuses] = useState([])

  const getAllStatus = async () => {
    try {
      const response = await axios.get(STATUS_API_URL)
      if (response.data.status == true) {
        setStatuses(response.data.statuses)
      }
    } catch (error) {
      console.error("ERR:", error)
    }
  }

  useEffect(() => {
    getAllStatus()
  }, [])
  return (
    <div>
      <select>
        {
          statuses.map((status, i) => {
            return (
              <option key={i}>{status}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default App
