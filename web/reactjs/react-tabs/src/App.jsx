import React, { useState } from 'react'

const App = () => {
  const [ value, setValue ] = useState(10)
  // const [ value, setValue ] = useState("Name")
  // const [ value, setValue ] = useState(true)
  // const [ value, setValue ] = useState({ name: "Ali" })
  // const [ value, setValue ] = useState([])
  const handleChange = () => {
    setValue(5)
  }
  return (
    <div>
      App : {value} | 
      <button onClick={handleChange}>Change value</button>
    </div>
  )
}

export default App
