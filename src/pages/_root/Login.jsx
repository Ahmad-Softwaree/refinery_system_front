import LoginForm from "@/components/forms/LoginForm";
import React from "react";
const Login = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 h-screen">
      <h1 className="w-full text-center text-sub-heading2-semibold md:text-sub-heading1-bold text-tertiary-500">
        Pet Management System
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 shadow-md bg-secondary-500 rounded-md  max-w-[600px]">
        <div className="col-span-full md:col-span-1 p-5 order-2 md:order-1">
          <LoginForm />
        </div>
        <div className="col-span-full md:col-span-1 rounded-t-md rounded-r-none md:rounded-l-none md:rounded-r-md max-h-[200px] md:max-h-none order-1 md:order-2">
          <img
            className="rounded-t-md rounded-r-none md:rounded-r-md md:rounded-l-none h-full w-full object-cover"
            src="/images/bg.jpg"
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
