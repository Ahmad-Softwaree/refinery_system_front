import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";
import { useRegister } from "@/react-query/query/auth.query";
import { CONTEXT_TYPEs } from "@/context";
import { useUpdateManager } from "@/react-query/query/manager.query";
import { Loader } from "../shared";
const ManagerForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useRegister() : useUpdateManager(id);
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const age = useRef();
  const gender = useRef();
  const salary = useRef();
  const password = useRef();
  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      name.current.value = data?.name;
      email.current.value = data?.email;
      phone.current.value = data?.phone;
      age.current.value = data?.age;
      gender.current.value = data?.gender;
      salary.current.value = data?.salary;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          name: name.current.value,
          email: email.current.value,
          phone: phone.current.value,
          age: age.current.value,
          gender: gender.current.value,
          salary: salary.current.value,
          password: password.current.value,
          role: "manager",
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.MANAGER_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Manager
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input ref={email} type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input ref={password} type="password" />
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input ref={phone} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Age</FormLabel>
        <Input ref={age} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Salary</FormLabel>
        <Input ref={salary} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <Select ref={gender} placeholder="Select Gender">
          <option className="text-primary-500" value="male">
            Male
          </option>
          <option className="text-primary-500" value="female">
            Female
          </option>
        </Select>
      </FormControl>

      <button
        type="submit"
        disabled={isPending}
        className="w-full p-2 rounded-md bg-tertiary-500 text-white mt-5">
        {isPending ? <Loader /> : "Submit"}
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: CONTEXT_TYPEs.MANAGER_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default ManagerForm;
