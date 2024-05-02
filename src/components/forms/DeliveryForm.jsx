import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
import {
  useAddDelivery,
  useUpdateDelivery,
} from "@/react-query/query/delivery.query";
const DeliveryForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddDelivery() : useUpdateDelivery(id);
  const shipping_type = useRef();
  const date_of_delivery = useRef();

  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      console.log(data);
      shipping_type.current.value = data?.shipping_type;
      date_of_delivery.current.value = data?.date_of_delivery;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          shipping_type: shipping_type.current.value,
          date_of_delivery: location.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.DELIVERY_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Delivery
      </h2>
      <FormControl>
        <FormLabel>Shipping Type</FormLabel>
        <Input ref={shipping_type} type="text" />
      </FormControl>

      <FormControl>
        <FormLabel>Date Of Delivery</FormLabel>
        <Input ref={date_of_delivery} type="date" />
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
            type: CONTEXT_TYPEs.DELIVERY_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default DeliveryForm;
