import React from 'react'
import { MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router';

const UserItem = ({ user }) => {
  return (
    <div className='bg-white p-3 rounded-md shadow-md'>
        <div className='flex gap-4 flex-wrap'>
            <div>
                <img src={user.image} className='rounded-full h-16 w-16' alt="" />
            </div>
            <div>
                <h1 className='font-bold'>{user.firstName + " " + user.lastName}</h1>
                <span className='text-xs text-gray-400'>{user.address.city + ", " + user.address.country}</span>
            </div>
        </div>
        <div className='mt-3'>
            {user.university}
        </div>
        <div className='mt-3 bg-gray-100 p-2 rounded'>
            <h1 className='font-bold mb-2'>
                Contact information
            </h1>
            <div>
                <div className='flex items-center gap-2 bg-gray-200 border border-gray-400 rounded-sm p-1 text-xs mb-1'>
                    <MdOutlineAlternateEmail className='-mt-[-3px]' /> <span>{user.email}</span>
                </div>
                <div className='flex items-center gap-2 bg-gray-200 border border-gray-400 rounded-sm p-1 text-xs mb-1'>
                    <MdPhone className='-mt-[-3px]' /> <span>{user.phone}</span>
                </div>
            </div>
        </div>

        <hr className='my-3 text-gray-300' />
        
        <div className='grid place-items-end'>
            <Link to={`/users/${user.id}`} className="bg-gray-950 text-gray-50 px-3 py-1 rounded">More info</Link>
        </div>
    </div>
  )
}

export default UserItem