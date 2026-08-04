import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout.jsx";
import { Button, InputField } from "../../components/ComponentLib.jsx";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const resetPassword = async (data) => {
    navigate("/auth/login")
  }

  return (
    <AuthLayout>
      <div>
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold">Reset Password</h2>
          <p className="italic text-gray-600">
            By enter your OTP and new password, you will be <br /> redirected towards login{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(resetPassword)}>
          <div className="grid grid-col-12">
            <div className="col-span-12">
              <label>OTP code</label>
            </div>
            <div className="col-span-12">
              <InputField
                {...register("otp")}
                type="text"
                hint="Provided otp code"
              />
            </div>

            <div className="col-span-12">
              <label>New password</label>
            </div>
            <div className="col-span-12">
              <InputField
                {...register("newPassword")}
                type="text"
                hint="Enter your new password"
              />
            </div>

            <div className="col-span-12 flex items-end justify-between">
              <Button
                title="Reset password"
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

export default ResetPassword
