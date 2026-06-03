import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Home</Link> | {" "}
            <Link to={'/about-us'}>About us</Link> | {" "}
            <Link to={'/help'}>Help</Link>
        </nav>
    </div>
  )
}

export default Navbar