import React, { useState } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, InputField } from '../../components/ComponentLib'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { REG_USER_API } from '../../utils/api.js'
import toast from 'react-hot-toast'

const Register = () => {

    const { register, handleSubmit } = useForm()
    
    const registerUser = async (data) => {
        try {
            const response = await axios.post(REG_USER_API, data)
            if (response.data.status == true) {
                console.log(response.data.message)
                toast.success(response.data.message)
            } else {
                console.log(response.data.message)
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error("Err:", error)
        }
    }
  return (
    <AuthLayout>
        <div>
            <div className='text-center mb-10'>
                <h2 className='text-[28px] font-bold'>Register</h2>
                <p className='italic text-gray-600'>Register your account now & continue to the dashboard </p>
            </div>
            <form onSubmit={handleSubmit(registerUser)}>
                <div className='grid grid-col-12'>

                    <div className='col-span-12'>
                        <label>Full name</label>
                    </div>
                    <div className='col-span-12'>
                        <InputField
                            {...register("fullName")}
                            type={"text"}
                            hint="Enter your full name"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <label>Email</label>
                    </div>
                    <div className='col-span-12'>
                        <InputField
                            {...register("email")}
                            type={"email"}
                            hint="Enter your email"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <label>Password</label>
                    </div>
                    <div className='col-span-12'>
                        <InputField
                            {...register("password")}
                            type="password"
                            hint="Enter your password"
                        />
                    </div>

                    <div className='col-span-12'>
                        <label>Role</label>
                    </div>
                    <div className='col-span-12'>
                        <select {...register("role")} className='transition mb-5 px-3 py-2 w-full rounded outline-1 outline-gray-400 focus:outline-purple-600'>
                            <option disabled selected>--- Choose role ---</option>
                            <option value="pm">Project manager</option>
                            <option value="emp">Employee</option>
                        </select>
                    </div>

                    <div className='col-span-6'>
                        <Button title="Register" className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold" />
                    </div>
                </div>
            </form>
            <hr className='my-5' />
            <div className='mb-10'>
                Already have an account? <Link className='text-blue-600' to="/auth/login">Login</Link>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Register