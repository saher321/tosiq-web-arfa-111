import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Button, InputField } from "../../components/ComponentLib";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LOG_USER_API } from "../../utils/api.js";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useAuth from "../../store/useAuth.jsx";

const Login = () => {
  const { register, handleSubmit } = useForm()
  const [togglePassword, setTogglePassword] = useState(false)
  const navigate = useNavigate()
  const login = useAuth((state) => state.login)
  
  const showPassword = () => {
    setTogglePassword(!togglePassword)
  }

  const loginUser = async (data) => {
    try {
      const response = await axios.post(LOG_USER_API, data);
      if (response.data.status == true) {
        toast.success(response.data.message)
        console.log(response.data)

        login(response.data.loggedinUser, response.data.token)
        
        navigate("/", {replace: true})
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error("Err:", error)
      toast.error("Interal server error")
    }
  }

  return (
    <AuthLayout>
      <div>
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold">Login</h2>
          <p className="italic text-gray-600">
            Login your account now & continue to the dashboard{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="grid grid-col-12">
            <div className="col-span-12">
              <label>Email</label>
            </div>
            <div className="col-span-12">
              <InputField
                {...register("email")}
                type="email"
                hint="Enter your email"
              />
            </div>

            <div className="col-span-12">
              <label>Password</label>
            </div>
            <div className="col-span-12">
              <InputField
                {...register("password")}
                type={togglePassword ? "text" : "password"}
                hint="Enter your password"
              />
            </div>
            <div className="col-span-12">
              <input type="checkbox" id="show-pass" onChange={showPassword}/> {" "}
              <label htmlFor="show-pass">Show password</label>
            </div>

            <div className="mt-3 col-span-12 flex items-end justify-between">
              <Button
                title="Login"
                className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
              />
              
              <Link className="hover:text-blue-600" to={'/auth/forgot-password'} >Forgot your password?</Link>
            </div>
          </div>
        </form>
        <hr className="my-5" />
        <div className="mb-10">
          Do not have an account?{" "}
          <Link className="text-blue-600" to="/auth/register">
            Register
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
