import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
import { useAddOil, useUpdateOil } from "@/react-query/query/oil.query";
const OilForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddOil() : useUpdateOil(id);
  const name = useRef();
  const amount_in_barel = useRef();
  const price = useRef();

  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      name.current.value = data?.name;
      amount_in_barel.current.value = data?.amount_in_barel;
      price.current.value = data?.price;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          name: name.current.value,
          amount_in_barel: amount_in_barel.current.value,
          price: price.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.OIL_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Oil
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Amount In Barel</FormLabel>
        <Input ref={amount_in_barel} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input ref={price} type="number" />
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
            type: CONTEXT_TYPEs.OIL_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default OilForm;
