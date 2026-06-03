import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState("Ali")
  const [qty, setQty] = useState(1)

  const changeValue = () => {
    setValue("Usman")
  }

  const inQty = () => {
    setQty(qty + 1)
  }

  const decQty = () => {
    if (qty <= 1){
      return;
    }
    setQty(qty - 1)
  }

  return (
    <div>
      <div>
        App: {value}
      </div>
      <button onClick={changeValue}>Change Value</button>
      <hr />
      <div>
        <button onClick={decQty}>-</button> {" "}
        {qty} {" "}
        <button onClick={inQty}>+</button>

      </div>
    </div>
  )
}

export default App