import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import { Loader } from "../shared";
import { useAddOrder, useUpdateOrder } from "@/react-query/query/order.query";
import { useGetAllOils, useGetOil } from "@/react-query/query/oil.query";
const OrderForm = () => {
  const {
    dispatch,
    state: { data, id, type },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    type !== "update" ? useAddOrder() : useUpdateOrder(id);
  const { data: oils, isPending: oilsLoading } = useGetAllOils();

  const [amount_of_barel, setAmountOfBarel] = useState(0);
  const [price, setPrice] = useState(0);

  const [oil_id, setOilId] = useState(null);
  const {
    data: oneOil,
    isPending: oilLoading,
    refetch,
  } = useGetOil(oil_id || "");

  const location = useRef();

  const formRef = useRef();

  useEffect(() => {
    if (data && type === "update") {
      setAmountOfBarel(data?.amount_of_barel);
      location.current.value = data?.location;
      setOilId(data?.oil_id);
      setPrice(data?.price);
    }
  }, [data]);

  useEffect(() => {
    if (oil_id !== "" && oil_id) {
      refetch();
    }
  }, [oil_id]);

  useEffect(() => {
    if (oneOil) {
      setPrice(oneOil.price * amount_of_barel);
    }
  }, [oneOil, amount_of_barel]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          amount_of_barel,
          location: location.current.value,
          oil_id: oil_id,
          price,
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
        <FormLabel>Oil</FormLabel>
        <Select
          onChange={(e) => setOilId(e.target.value)}
          value={oil_id}
          placeholder="Select Oil">
          {oils?.map((val, index) => {
            return (
              <option key={index} className="text-primary-500" value={val.id}>
                {val.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Amount In Barel</FormLabel>
        <Input
          onChange={(e) => setAmountOfBarel(e.target.value)}
          value={amount_of_barel}
          type="number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input ref={location} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input disabled value={price} type="number" />
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
