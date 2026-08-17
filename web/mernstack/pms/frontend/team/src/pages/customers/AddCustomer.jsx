import React from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout.jsx';
import { NavigateLink } from '../../components/ComponentLib.jsx';
import { MoveLeft } from 'lucide-react';

const AddCustomer = () => {
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

      <div className='mt-3 bg-white p-3 rounded-lg'>
        
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='font-bold text-[18px]'>Add new customer</h1>
          </div>
          <div>
            <NavigateLink url="/customers"
              className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
            >
              View customers
            </NavigateLink>
          </div>
        </div>

        

      </div>
    </RoleBasedLayout>
  )
}

export default AddCustomer