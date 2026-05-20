import React from 'react'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      
      <PageTitle title="Home page" subheading="Sub heading"/>
      <PageTitle title="About page"/>
      <PageTitle title="Contact page" subheading="Sub heading"/>

    </div>
  )
}

export default App
