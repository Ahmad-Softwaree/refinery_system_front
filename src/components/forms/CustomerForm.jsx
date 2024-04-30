import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
import {
  useAddCustomer,
  useUpdateCustomer,
} from "@/react-query/query/customer.query";
const CustomerForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddCustomer() : useUpdateCustomer(id);
  const name = useRef();
  const address = useRef();
  const phone = useRef();
  const formRef = useRef();
  useEffect(() => {
    if (data && type === "update") {
      name.current.value = data?.name;
      address.current.value = data?.address;
      phone.current.value = data?.phone;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          name: name.current.value,
          address: address.current.value,
          phone: phone.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.CUSTOMER_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Customer
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input ref={address} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input ref={phone} type="text" />
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
            type: CONTEXT_TYPEs.CUSTOMER_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default CustomerForm;
