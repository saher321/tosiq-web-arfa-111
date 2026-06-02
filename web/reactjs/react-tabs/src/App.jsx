import React, { useState } from 'react'
import toast from 'react-hot-toast'

const App = () => {
  const [ value, setValue ] = useState(10)

  const [ changeQTY, setChangeQTY ] = useState(1)
  // const [ value, setValue ] = useState("Name")
  // const [ value, setValue ] = useState(true)
  // const [ value, setValue ] = useState({ name: "Ali" })
  // const [ value, setValue ] = useState([])
  const handleChange = () => {
    setValue(5)
  }

  const decQTY = () => {
    if ( changeQTY <= 1 ) {
      return;
    }
    setChangeQTY(changeQTY - 1)
  }
  const inQTY = () => {
    if ( changeQTY == 10 ) {
      toast.error("Limit reached")
      return;

    }
    setChangeQTY(changeQTY + 1)
  }
  return (
    <div>
      App : {value} | 
      <button onClick={handleChange}>Change value</button>
      <hr />

      <div>
        <button onClick={decQTY}> &mdash; </button> {" "}
        <strong> {changeQTY} </strong> {" "}
        <button onClick={inQTY}> + </button>
      </div>
    </div>
  )
}

export default App
