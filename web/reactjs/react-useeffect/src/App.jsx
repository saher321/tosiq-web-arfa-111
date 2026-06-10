import React, { useEffect, useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)

  // runs on every time
  useEffect(() => {
    console.log("Hello from 1st useEffect")
  })

  // runs on page call
  useEffect(() => {
    console.log("Hello from 2nd useEffect")
  }, []) // array dependency

  // runs on condition in dependency
  useEffect(() => {
    if (value == 5) {
      console.log("Hello from 3rd useEffect")
    }
  }, [value]) // array dependency

  const handleChange = () => {
    setValue(value + 1)
  }

  return (
    <div>App: {value} <br />
      <button onClick={handleChange}>Change data</button>
    </div>
  )
}

export default App