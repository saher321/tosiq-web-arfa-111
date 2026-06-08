import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <div>
            &copy; {year} &mdash; All right reserved.
        </div>
    )
}


export default Footer
