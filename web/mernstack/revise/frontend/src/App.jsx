import React, { useEffect, useState } from 'react'
import axios from  'axios'
import { STATUSES_API_URL } from './utils/api.js'

const App = () => {
  const [ statuses, setStatuses ] = useState([])

  const getAllStatus = async () => {
    try {
      const response = await axios.get(STATUSES_API_URL)
      if (response.data.status == true) {
        setStatuses(response.data.orderStatuses)
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
        {statuses.map((status, i) => {
          return (
            <option key={i} value={status.id}>{status.status}</option>
          )
        })}
      </select>
    </div>
  )
}

export default App
