import React, { useState } from 'react'

const Hook = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ username, setUsername ] = useState("Ali")
  const [ toggle, setToggle ] = useState(true)
  const [ toggleTab, setToggleTab ] = useState("locations")

  const changeUsername = () => {
    setUsername("Usman")
  }

  const hideShowContent = () => {
    setToggle(!toggle)
  }

  const showTabContent = (tabName) => {
    setToggleTab(tabName)
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
        </p> : 
        <div> Content is hide </div>
      }

      <hr />

      <div className='tabs'>

        <div className='tabs-button'>
          <button 
          className={`${toggleTab == "locations" ? "activeTab" : ""}`}
          onClick={() => showTabContent("locations")}>Locations</button>

          <button 
          className={`${toggleTab == "products" ? "activeTab" : ""}`}
          onClick={() => showTabContent("products")}>Products</button>

          <button 
          className={`${toggleTab == "services" ? "activeTab" : ""}`}
          onClick={() => showTabContent("services")}>Services</button>
        </div>

        <div className='tabs-content'>
          {
            toggleTab == "locations" ?
            <div className='content'>Location content goes here</div> : 
            toggleTab == "products" ?
            <div className='content'>Products List goes here</div> :
            toggleTab == "services" &&
            <div className='content'>Services will be goes here</div>
          }
        </div>


      </div>
    </div>
  )
}

export default Hook
