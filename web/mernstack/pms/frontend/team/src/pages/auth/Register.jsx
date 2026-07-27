import React from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, InputField } from '../../components/ComponentLib'
import { Link } from 'react-router'

const Register = () => {
  return (
    <AuthLayout>
        <div>
            <div className='text-center mb-10'>
                <h2 className='text-[28px] font-bold'>Register</h2>
                <p className='italic text-gray-600'>Register your account now & continue to the dashboard </p>
            </div>
            <form>
                <div className='grid grid-col-12'>

                    <div className='col-span-12'>
                        <label>Full name</label>
                    </div>
                    <div className='col-span-12'>
                        <InputField
                            type={"text"}
                            hint="Enter your full name"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <label>Email</label>
                    </div>
                    <div className='col-span-12'>
                        <InputField
                            type={"email"}
                            hint="Enter your email"
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <label>Password</label>
                    </div>
                    <div className='col-span-12'>
                        <InputField
                            type="password"
                            hint="Enter your password"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Button title="Register" className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold" />
                    </div>
                </div>
            </form>
            <hr className='my-10' />
            <div>
                Already have an account? <Link className='text-blue-600' to="/auth/login">Login</Link>
            </div>
        </div>
    </AuthLayout>
  )
}

export default Register