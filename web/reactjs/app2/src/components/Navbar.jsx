import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <nav>
        <div className='logo'>LOGO</div>
        <div className='links'>
            <ul>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
            </ul>
        </div>
        <div className='cta'>
            <button>Learn More</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
