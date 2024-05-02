import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
import {
  useAddMachine,
  useUpdateMachine,
} from "@/react-query/query/machine.query";
import { useGetAllEmployees } from "@/react-query/query/employee.query";
const MachineForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddMachine() : useUpdateMachine(id);
  const { data: employees, isPending: employeesLoading } = useGetAllEmployees();

  const name = useRef();
  const machine_function = useRef();
  const user_id = useRef();

  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      name.current.value = data?.name;
      machine_function.current.value = data?.machine_function;
      user_id.current.value = data?.user_id;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          name: name.current.value,
          function: machine_function.current.value,
          user_id: user_id.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.MACHINE_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Machine
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Function</FormLabel>
        <Input ref={machine_function} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Employee</FormLabel>
        <Select ref={user_id} placeholder="Select Employee">
          {employees?.map((val, index) => {
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
            type: CONTEXT_TYPEs.MACHINE_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default MachineForm;
