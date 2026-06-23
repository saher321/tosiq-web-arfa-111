'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {

  const path = usePathname()
  console.log(path)
  const urls = [
    {path: '/', text: "Home"},
    {path: '/about-us', text: "About"},
    {path: '/contact-us', text: "Contact"},
  ]
  return (
    <div className='my-5 p-3 rounded-md mx-auto max-w-6xl bg-gray-900 text-white flex items-center justify-between gap-3'>
      <div>LOGO</div>
      <div>
        <nav className='flex gap-3'>
          {
            urls.map((url, i) => {
              return (
                <Link
                className={`${path == url.path ? "text-blue-300": "" }`}
                key={i} href={url.path}>{url.text}</Link>
              )
            })
          }
        </nav>
      </div>
      <div>
        Action
      </div>
    </div>
  )
}

export default Navbar
