import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className='my-5 mx-10 font-bold italic lowercase text-xl text-purple-600'>PMS</div>
      <div className='grid place-items-center'>
        { children }
      </div>
    </div>
  )
}

export default AuthLayout
