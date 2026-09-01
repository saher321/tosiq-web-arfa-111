import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout.jsx';
import { NavigateLink } from '../../components/ComponentLib.jsx';
import { MoveLeft } from 'lucide-react';

const CustomerDetails = () => {
  return (
    <RoleBasedLayout>
      <div>
        <NavigateLink
        url="/customers"
        className="text-purple-600 text-[12px]"
        >
          <div className='flex gap-2 items-center hover:gap-3 transition-all'>
            <MoveLeft /> <span>Go back</span>
          </div>
        </NavigateLink>
      </div>

      <div className='my-5 bg-white p-5 rounded-lg shadow'>
        <span className='font-bold border-b border-b-gray-200 mb-2 pb-2 block'>Customer details</span>
        dd
      </div>
      <div className='bg-white p-5 rounded-lg shadow'>
        <span className='font-bold border-b border-b-gray-200 mb-2 pb-2 block'>Customer Projects</span>
      </div>
    </RoleBasedLayout>
  )
}

export default CustomerDetails