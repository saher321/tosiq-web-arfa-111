import React, { useState } from 'react'

const Hook = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ username, setUsername ] = useState("Ali")

  const [ toggle, setToggle ] = useState(true)

  const changeUsername = () => {
    setUsername("Usman")
  }

  const hideShowContent = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      Use state hook :: useState = {username}
      <div>
        <button onClick={changeUsername}>Change Name</button>
      </div>

      <br />

      <button onClick={hideShowContent}> Show / Hide content</button>

      {
        toggle ?
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Rem tenetur impedit placeat ad repudiandae animi 
          laborum voluptate hic tempore cum ducimus fugit 
          tempora iure eligendi esse, harum facere nemo ab?
        </p> : 
        <div> Content is hide </div>
      }
    </div>
  )
}

export default Hook
