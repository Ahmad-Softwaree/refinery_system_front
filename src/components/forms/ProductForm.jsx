import { UiContext } from "@/context/UiContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { CONTEXT_TYPEs } from "@/context";
import {
  useAddProduct,
  useUpdateProduct,
} from "@/react-query/query/product.query";
import { Loader } from "../shared";
import { Input as ShadInput } from "@/components/ui/input";
import { ImageContext } from "@/context/ImageContext";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const ProductForm = () => {
  const {
    dispatch: imageDispatch,
    state: { productImg },
  } = useContext(ImageContext);
  const {
    dispatch,
    state: { data, id, type: formType },
  } = useContext(UiContext);
  const { mutateAsync, isPending } =
    formType !== "update" ? useAddProduct() : useUpdateProduct(id);
  const [date, setDate] = useState();
  const formRef = useRef();
  const name = useRef();
  const discount = useRef();
  const quantity = useRef();
  const type = useRef();
  const imgRef = useRef();

  useEffect(() => {
    imageDispatch({
      type: CONTEXT_TYPEs.PRODUCT_IMAGE,
      payload: "",
    });
    if (data && formType === "update") {
      name.current.value = data?.name;
      discount.current.value = data?.discount;
      quantity.current.value = data?.quantity;
      type.current.value = data?.type;
      setDate(data?.expire_date);
    }
  }, [data]);

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        await mutateAsync({
          state: {
            name: name.current.value,
            discount: discount.current.value,
            quantity: quantity.current.value,
            type: type.current.value,
            expire_date: date,
          },
          oldImg: data?.image_name,
          oldURL: data?.image_url,
          image: productImg,
        });
        formRef.current.reset();
        dispatch({
          type: CONTEXT_TYPEs.PRODUCT_FORM,
        });
      }}
      className="fixed inset-0 m-auto p-5 max-h-[600px] overflow-y-auto rounded-md bg-primary-500 shadow-md z-[1100] w-[95%] max-w-[500px] h-fit flex flex-col justify-start items-center gap-5 text-white">
      <h2 className="w-full text-center text-body1-semibold">
        {formType !== "update" ? "Add" : "Update"} Product
      </h2>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={name} type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Discount</FormLabel>
        <Input ref={discount} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Quantity</FormLabel>
        <Input ref={quantity} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel>Expire Date</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 z-[1500]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </FormControl>

      <FormControl>
        <FormLabel>Type</FormLabel>
        <Select ref={type} placeholder="Select Type">
          <option className="text-primary-500" value="food">
            Food
          </option>
          <option className="text-primary-500" value="toy">
            Toy
          </option>
          <option className="text-primary-500" value="grooming">
            Grooming
          </option>
          <option className="text-primary-500" value="beddingAndHousing">
            Bedding & Housing
          </option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Image</FormLabel>
        <ShadInput
          onChange={(e) => {
            imageDispatch({
              type: CONTEXT_TYPEs.PRODUCT_IMAGE,
              payload: e.target.files[0],
            });
          }}
          ref={imgRef}
          id="picture"
          type="file"
        />
      </FormControl>
      {productImg !== "" && productImg && (
        <>
          <button
            type="button"
            onClick={() => {
              imageDispatch({
                type: CONTEXT_TYPEs.PRODUCT_IMAGE,
                payload: "",
              });
              imgRef.current.value = ""; // Clear the input field
              imgRef.current.files = null; // Clear the files
            }}
            className="w-full p-2 rounded-md bg-red-500 text-white">
            Remove
          </button>
          <div className="relative w-full max-h-[300px]">
            <img
              className="w-full h-full object-contain"
              src={URL.createObjectURL(productImg)}
              alt="product"
            />
          </div>
        </>
      )}
      {!productImg && productImg === "" && data?.image_url && (
        <div className="relative w-full max-h-[300px]">
          <img
            className="w-full h-full object-contain"
            src={data?.image_url}
            alt="product"
          />
        </div>
      )}

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
            type: CONTEXT_TYPEs.PRODUCT_FORM,
          })
        }
        className="w-full p-2 rounded-md bg-red-500 text-white">
        Close
      </button>
    </form>
  );
};

export default ProductForm;
