import React, { useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout.jsx';
import { Button, InputField, NavigateLink, SelectInput } from '../../components/ComponentLib.jsx';
import { MoveLeft } from 'lucide-react';

const AddCustomer = () => {
  const [projectStatuses, setProjectStatues] = useState([
    { id: 'active', text: "Active" },
    { id: 'proccessing', text: "Proccessing" },
    { id: 'completed', text: "Completed" },
    { id: 'cancelled', text: "Cancelled" },
  ])
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

        <div className='my-5 max-w-2xl'>
          <form>
            <div className='grid grid-cols-12 gap-3'>
              <div className='col-span-6'>
                <label>Full name</label>
                <InputField
                  hint="John Doe"
                />
              </div>
              <div className='col-span-6'>
                <label>Email address</label>
                <InputField
                  type="email"
                  hint="john.doe@email.com"
                />
              </div>
              <div className='col-span-6'>
                <label>Contact</label>
                <InputField
                  hint="+92 3000000000"
                />
              </div>
              <div className='col-span-6'>
                <label>Project status</label>
                <SelectInput
                  data={projectStatuses}
                />
              </div>
              <div className='col-span-12'>
                <label>Address</label>
                <InputField
                  hint="Texas, USA"
                />
              </div>
              <div className='col-span-12'>
                <Button
                  title="Add customer"
                  className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
                />
              </div>

            </div>
          </form>
        </div>

      </div>
    </RoleBasedLayout>
  )
}

export default AddCustomer