import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Button, InputField } from "../../components/ComponentLib";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FPS_USER_API, LOG_USER_API } from "../../utils/api.js";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const forgotPassword = async (data) => {
    try {
      const response = await axios.post(FPS_USER_API, data);
      if (response.data.status == true) {
        toast.success(response.data.message)
        console.log(response.data)
        localStorage.setItem("forgotEmail", data.email)
        navigate("/auth/reset-password", { replace: true})
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
          <h2 className="text-[28px] font-bold">Forgot Password</h2>
          <p className="italic text-gray-600">
            By enter your email, you will recieve an OTP code{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(forgotPassword)}>
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

            <div className="col-span-12 flex items-end justify-between">
              <Button
                title="Send OTP"
                className="transition hover:bg-purple-700 hover:shadow-lg cursor-pointer text-center px-5 py-3 text-white rounded bg-purple-600 texzt-xl font-bold"
              />
              
            </div>
          </div>
        </form>
        <hr className="my-5" />
        <div className="mb-10">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/auth/login">
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword
