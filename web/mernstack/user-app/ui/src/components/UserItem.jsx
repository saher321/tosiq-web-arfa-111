import React from 'react'

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
        <div className='mt-3'>
            <h1 className='text-sm font-bold'>
                Hair
            </h1>
            <div className='flex gap-2'>
                <span className='bg-gray-200 border border-gray-400 rounded-sm px-1 text-xs'>{user.hair.color}</span>
                <span className='bg-gray-200 border border-gray-400 rounded-sm px-1 text-xs'>{user.hair.type}</span>
            </div>
        </div>
    </div>
  )
}

export default UserItem