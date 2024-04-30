import { useLogin } from "@/react-query/query/auth.query";
import React, { useRef } from "react";
import { Loader } from "../shared";

const LoginForm = () => {
  const email = useRef();
  const password = useRef();
  const formRef = useRef();
  const { mutateAsync, isPending } = useLogin();

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          email: email.current.value,
          password: password.current.value,
        });
        formRef.current.reset();
      }}
      className="flex flex-col justify-between items-center m-auto py-5 h-fit rounded-md text-white gap-5 w-full">
      <h1 className="text-body1-bold mb-10">Login</h1>
      <input
        ref={email}
        name="email"
        type="email"
        placeholder="email"
        className="p-2 rounded-md w-full px-4 text-black"
      />
      <input
        ref={password}
        name="password"
        type="password"
        placeholder="password"
        className="p-2 rounded-md w-full px-4 text-black"
      />
      <button
        disabled={isPending}
        type="submit"
        className="w-full p-2 px-5 rounded-md cursor-pointer text-white bg-black">
        {isPending ? <Loader size="sm" /> : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
