import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
import { useAddOrder, useUpdateOrder } from "@/react-query/query/order.query";
import { useGetAllOils } from "@/react-query/query/oil.query";
const OrderForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddOrder() : useUpdateOrder(id);
  const { data: oils, isPending: oilsLoading } = useGetAllOils();

  const amount_in_barel = useRef();
  const price = useRef();
  const oil_id = useRef();

  const location = useRef();

  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      amount_in_barel.current.value = data?.amount_in_barel;
      location.current.value = data?.location;
      oil_id.current.value = data?.oil_id;
      price.current.value = data?.price;
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          amount_in_barel: amount_in_barel.current.value,
          location: location.current.value,
          oil_id: oil_id.current.value,
          price: location.current.value,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.ORDER_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {type !== "update" ? "Add" : "Update"} Order
      </h2>
      <FormControl>
        <FormLabel>Amount In Barel</FormLabel>
        <Input ref={amount_in_barel} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input ref={location} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input ref={price} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Oil</FormLabel>
        <Select ref={oil_id} placeholder="Select Oil">
          {oils?.map((val, index) => {
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
            type: CONTEXT_TYPEs.ORDER_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default OrderForm;
