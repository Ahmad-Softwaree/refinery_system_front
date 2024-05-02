import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useRegister } from "@/react-query/query/auth.query";
import { CONTEXT_TYPEs } from "@/context";
import { useUpdateEmployee } from "@/react-query/query/employee.query";
import { Loader } from "../shared";
import { useGetAllDepartments } from "@/react-query/query/department.query";
const EmployeeForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useRegister() : useUpdateEmployee(id);
  const { data: departments, isPending: departmentsLoading } =
    useGetAllDepartments();

  const user_name = useRef();
  const email = useRef();
  const phone = useRef();
  const age = useRef();
  const gender = useRef();
  const salary = useRef();
  const password = useRef();
  const dep_id = useRef();
  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      user_name.current.value = data?.user_name;
      email.current.value = data?.email;
      phone.current.value = data?.phone;
      dep_id.current.value = data?.dep_id;
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
          user_name: user_name.current.value,
          email: email.current.value,
          phone: phone.current.value,
          age: age.current.value,
          gender: gender.current.value,
          salary: salary.current.value,
          password: password.current.value,
          dep_id: dep_id.current.value,
          role: "employee",
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.EMPLOYEE_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Employee
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={user_name} type="text" />
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
      <FormControl>
        <FormLabel>Department</FormLabel>
        <Select ref={dep_id} placeholder="Select Department">
          {departments?.map((val, index) => {
            return (
              <option key={index} className="text-primary-500" value={val.id}>
                {val.name}
              </option>
            );
          })}
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
            type: CONTEXT_TYPEs.EMPLOYEE_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default EmployeeForm;
