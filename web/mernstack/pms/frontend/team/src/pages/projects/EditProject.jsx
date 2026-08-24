import React, { useEffect, useState } from 'react'
import RoleBasedLayout from '../../layouts/RoleBasedLayout.jsx';
import { Button, InputField, NavigateLink, SelectInput } from '../../components/ComponentLib.jsx';
import { MoveLeft } from 'lucide-react';
import { projectStatues } from '../../utils/common.js';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { EDT_CUST_API } from '../../utils/api.js';
import { useNavigate, useParams } from 'react-router';
import toast from 'react-hot-toast';

const EditCustomer = () => {
  const [projectStatuses, setProjectStatues] = useState(projectStatues)
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const handleGetCustomer = async (data) => {
    try {
      const response = await axios.get(`${EDT_CUST_API}/${params.id}/edit`)
      console.log("Single data", response.data)
      if (response.data.status == true){
        reset(response.data.customer)
      } else {
        toast.error(response.data.message)
      } 
    } catch (error) {
      throw new Error(error)
        toast.error("Internal server error")
    }
  }

  useEffect(() => {
    handleGetCustomer()
  }, [params.id])


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
        
        <div className='my-3 flex items-center justify-between'>
          <div>
            <h1 className='font-bold text-[18px]'>Edit customer [{params.id}]</h1>
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
                  {...register('fullName')}
                  type="text"
                  hint="John Doe"
                />
              </div>
              <div className='col-span-6'>
                <label>Email address</label>
                <InputField
                  {...register('email')}
                  type="email"
                  hint="john.doe@email.com"
                />
              </div>
              <div className='col-span-6'>
                <label>Contact</label>
                <InputField
                  {...register('contact')}
                  type="text"
                  hint="+92 3000000000"
                />
              </div>
              <div className='col-span-6'>
                <label>Project status</label>
                <SelectInput
                  {...register('projectStatus')}
                  data={projectStatuses}
                />
              </div>
              <div className='col-span-12'>
                <label>Address</label>
                <InputField
                  {...register('address')}
                  type="text"
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

export default EditCustomer