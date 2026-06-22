import React, { createContext } from 'react'

export const MyContext = createContext()

const ContextApi = ({ children }) => {

  const name = "John"
  const role = "Vendor"

  return (
    <MyContext.Provider value={{name, role}}>
      { children }
    </MyContext.Provider>
  )
}

export default ContextApi
